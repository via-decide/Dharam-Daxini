/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 print:bg-white print:py-0 print:px-0 font-sans text-gray-900 selection:bg-gray-200">
      <div className="max-w-[800px] mx-auto mb-4 flex justify-end print:hidden">
        <button 
          onClick={() => window.print()} 
          className="bg-gray-900 text-white px-4 py-2 text-sm font-medium rounded hover:bg-gray-800 transition-colors shadow-sm"
        >
          Download PDF
        </button>
      </div>
      <div className="max-w-[800px] mx-auto bg-white shadow-sm sm:shadow-md print:shadow-none p-8 sm:p-12 print:p-0">
        
        {/* Header */}
        <header className="border-b-[3px] border-gray-900 pb-6 mb-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-serif font-black tracking-tight uppercase mb-3">
            Dharam Daxini
          </h1>
          <div className="text-sm sm:text-base text-gray-700 flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-4 gap-y-1 justify-center sm:justify-start">
            <span>Gandhidham, Gujarat, India</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <span>+91 63515 37770</span>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="mailto:dharam@viadecide.com" className="hover:text-gray-900 transition-colors">dharam@viadecide.com</a>
            <span className="hidden sm:inline text-gray-300">|</span>
            <a href="https://www.linkedin.com/in/dharam-daxini-a77508164?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">linkedin.com/in/dharam-daxini-a77508164</a>
          </div>
        </header>

        <main className="space-y-8 leading-relaxed">
          
          {/* Professional Summary */}
          <section>
            <h2 className="text-lg font-serif font-bold uppercase tracking-wider border-b border-gray-200 pb-2 mb-4 text-gray-900">
              Professional Summary
            </h2>
            <p className="text-sm sm:text-base text-gray-800">
              Detail-oriented and responsible candidate seeking the position of Lab Chemist / Chemistry Laboratory Assistant at Tolani Arts and Science College. Strong interest in chemistry laboratory operations, sample handling, chemical storage, lab record maintenance, and support for practical sessions in an academic environment. Known for disciplined work habits, careful documentation, process adherence, and maintaining an organized and safe workspace.
            </p>
          </section>

          {/* Core Competencies */}
          <section>
            <h2 className="text-lg font-serif font-bold uppercase tracking-wider border-b border-gray-200 pb-2 mb-4 text-gray-900">
              Core Competencies
            </h2>
            <ul className="space-y-1.5 text-sm sm:text-base text-gray-800 list-disc list-outside ml-5">
              <li>Chemistry laboratory support</li>
              <li>Lab preparation for practical sessions</li>
              <li>Chemical handling and storage awareness</li>
              <li>Glassware cleaning and maintenance</li>
              <li>Laboratory safety and hygiene</li>
              <li>Lab inventory and stock register management</li>
              <li>Sample labeling and recordkeeping</li>
              <li>Equipment arrangement and workspace organization</li>
              <li>Faculty and student practical support</li>
              <li>Observation recording and documentation</li>
            </ul>
          </section>

          {/* Professional Strengths */}
          <section>
            <h2 className="text-lg font-serif font-bold uppercase tracking-wider border-b border-gray-200 pb-2 mb-4 text-gray-900">
              Professional Strengths
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800 list-disc list-outside ml-5">
              <li>Strong attention to detail in handling materials and maintaining records</li>
              <li>Able to follow standard instructions and laboratory procedures carefully</li>
              <li>Organized approach to stock management, documentation, and daily lab routines</li>
              <li>Comfortable working in structured academic and institutional environments</li>
              <li>Committed to cleanliness, safety standards, and disciplined execution</li>
            </ul>
          </section>

          {/* Relevant Experience */}
          <section>
            <h2 className="text-lg font-serif font-bold uppercase tracking-wider border-b border-gray-200 pb-2 mb-4 text-gray-900">
              Relevant Experience
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-base font-bold text-gray-900">Operations, Documentation, and Systems Handling Experience</h3>
                <span className="text-sm text-gray-600 font-medium whitespace-nowrap mt-1 sm:mt-0">2023 – Present</span>
              </div>
              <div className="text-sm text-gray-600 mb-3 italic">Gujarat, India</div>
              <ul className="space-y-1.5 text-sm sm:text-base text-gray-800 list-disc list-outside ml-5">
                <li>Managed structured records, operational workflows, and process-based documentation with high accuracy</li>
                <li>Maintained organized systems for tracking information, materials, and procedural steps</li>
                <li>Worked with consistency and detail in responsibility-based task execution</li>
                <li>Developed disciplined habits in documentation, coordination, and process monitoring</li>
                <li>Supported efficiency through systematic organization and careful follow-through</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-lg font-serif font-bold uppercase tracking-wider border-b border-gray-200 pb-2 mb-4 text-gray-900">
              Education
            </h2>
            <div>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-1">
                <h3 className="text-base font-bold text-gray-900">Bachelor’s Degree</h3>
                <span className="text-sm text-gray-600 font-medium whitespace-nowrap mt-1 sm:mt-0">Gujarat, India</span>
              </div>
              <p className="text-sm sm:text-base text-gray-800 mt-2">
                Chemistry-related academic exposure through higher education and continued practical interest in laboratory-based work.
              </p>
            </div>
          </section>

          {/* Role Fit */}
          <section>
            <h2 className="text-lg font-serif font-bold uppercase tracking-wider border-b border-gray-200 pb-2 mb-4 text-gray-900">
              Role Fit for Tolani Arts and Science College
            </h2>
            <ul className="space-y-2 text-sm sm:text-base text-gray-800 list-disc list-outside ml-5">
              <li>Ready to assist in chemistry practical sessions and departmental laboratory work</li>
              <li>Able to support preparation of chemicals, apparatus arrangement, and maintenance of lab records</li>
              <li>Prepared to help maintain laboratory cleanliness, safety standards, and stock organization</li>
              <li>Comfortable supporting faculty requirements and student practical activities</li>
            </ul>
          </section>

        </main>
      </div>
    </div>
  );
}
