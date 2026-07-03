import React, { useState, useEffect, useMemo } from 'react';
import { ALCHEMIST_QUESTIONS, AlchemistQuestion } from '../alchemist_questions';
import { scanNFCAndLogin, AuthUser } from '../lib/nfcAuth';
import { Zap, Lock, Scan, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion } from 'motion/react';

// Deterministic random generator based on a seed
function mulberry32(a: number) {
  return function() {
    var t = a += 0x6D2B79F5;
    t = Math.imul(t ^ t >>> 15, t | 1);
    t ^= t + Math.imul(t ^ t >>> 7, t | 61);
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  }
}

export function DailyMissionGate() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // 1. Calculate today's deterministic 10 questions
  const dailyQuestions = useMemo(() => {
    const today = new Date();
    // Use Year, Month, Day as seed so it changes exactly at midnight
    const seed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
    const random = mulberry32(seed);
    
    // Shuffle a copy of the questions deterministically
    const shuffled = [...ALCHEMIST_QUESTIONS];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    // Select the first 10
    return shuffled.slice(0, 10);
  }, []);

  const handleScan = async () => {
    try {
      setError(null);
      setIsScanning(true);
      const auth = await scanNFCAndLogin();
      setUser(auth.user);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsScanning(false);
    }
  };

  const handleAnswer = (qId: string, opt: string) => {
    setAnswers(prev => ({ ...prev, [qId]: opt }));
  };

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center p-8 space-y-6">
        <div className="w-full max-w-md bg-slate-900/80 border border-slate-700/50 backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:border-slate-600/80 hover:bg-slate-800/90 text-center">
          <div className="mx-auto w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
            <Lock className="w-8 h-8 text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Daily Alchemist Mission</h2>
          <p className="text-slate-400 mb-8">
            Access your 10 daily challenges from the ₹99 Sovereign Subscription. Tap your NFC Passport to unlock.
          </p>
          
          <button
            onClick={handleScan}
            disabled={isScanning}
            className="w-full relative group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-semibold py-4 px-6 rounded-xl transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isScanning ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Waiting for NFC Tap...
              </>
            ) : (
              <>
                <Scan className="w-5 h-5" />
                Tap Passport
              </>
            )}
          </button>
          
          {error && (
            <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg flex items-start gap-3 text-left">
              <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
              <p className="text-sm text-red-300">{error}</p>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Display the 10 questions as cards
  return (
    <div className="w-full max-w-3xl mx-auto p-4 space-y-8 pb-20">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold text-white">Daily Mission</h2>
          <p className="text-slate-400 mt-1">10 carefully curated challenges for {new Date().toLocaleDateString()}</p>
        </div>
        <div className="bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-lg flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          <span className="text-emerald-400 font-medium text-sm">Passport Verified</span>
        </div>
      </div>

      <div className="space-y-6">
        {dailyQuestions.map((q, index) => {
          const isAnswered = !!answers[q.id];
          const isCorrect = answers[q.id] === q.correctOption;

          return (
            <div 
              key={q.id}
              className="bg-slate-900/80 border border-slate-700/50 backdrop-blur-md rounded-2xl p-6 transition-all duration-300 hover:border-slate-600/80 hover:shadow-[0_8px_24px_rgba(0,0,0,0.2)]"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="font-mono text-xs font-bold text-blue-400 uppercase tracking-widest">
                  {q.domain} • Question {index + 1}/10
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-800 text-slate-300 border border-slate-700">
                  {q.topic}
                </span>
              </div>
              
              <h3 className="text-lg text-white font-medium mb-6 leading-relaxed">
                {q.question}
              </h3>

              <div className="space-y-3">
                {q.options.map((opt, i) => {
                  const isSelected = answers[q.id] === opt;
                  let btnClass = "w-full text-left p-4 rounded-xl border text-sm transition-all ";
                  
                  if (!isAnswered) {
                    btnClass += "bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 text-slate-300";
                  } else if (opt === q.correctOption) {
                    btnClass += "bg-emerald-500/10 border-emerald-500/50 text-emerald-300";
                  } else if (isSelected) {
                    btnClass += "bg-rose-500/10 border-rose-500/50 text-rose-300";
                  } else {
                    btnClass += "bg-slate-800/20 border-slate-800/50 text-slate-500 opacity-50";
                  }

                  return (
                    <button
                      key={i}
                      disabled={isAnswered}
                      onClick={() => handleAnswer(q.id, opt)}
                      className={btnClass}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {isAnswered && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-6 pt-4 border-t border-slate-700/50"
                >
                  <div className="flex items-start gap-3">
                    <Zap className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase text-slate-500 tracking-wider">Analysis</span>
                      <p className="text-sm text-slate-300 mt-1 leading-relaxed" dangerouslySetInnerHTML={{ __html: q.analysis || 'No analysis provided.' }} />
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
