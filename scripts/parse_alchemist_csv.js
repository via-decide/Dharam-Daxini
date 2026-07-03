import fs from 'fs';
import path from 'path';

const csvPath = '/Users/dharamdaxini/My Drive/Alchemist_Faculty_Demo.csv';
const outPath = path.resolve('./src/alchemist_questions.ts');

const DOMAIN_TO_LAB = {
  'ELECTRO': 'electro-voltaic-core',
  'KINETICS': 'catalyst-protocol',
  'KINETIC': 'catalyst-protocol',
  'ORGANIC': 'organic-synthesis-matrix',
  'PHYSICAL': 'thermo-dynamics-engine',
  'THERMO': 'thermo-dynamics-engine',
  'ANALYT': 'analytical-spectre-scanner',
  'INORG': 'inorganic-lattice-vault',
  'QUANTUM': 'quantum-forge',
  'STATMEC': 'statmech-probability-drive',
  'LAB': 'analytical-spectre-scanner'
};

function parseCSVLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i+1] === '"') {
        current += '"';
        i++; // skip next quote
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result.map(s => s.trim().replace(/^""|""$/g, '')); // strip double quotes if they wrap
}

function parseCSV() {
  const lines = fs.readFileSync(csvPath, 'utf8').split('\n').filter(l => l.trim().length > 0);
  
  const parsedQuestions = [];
  let currentHeaders = [];
  
  for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Handle multiline quotes (if any, though rare in this specific file now)
    while (line.split('"').length % 2 === 0 && i + 1 < lines.length) {
      line += '\\n' + lines[++i];
    }

    const cols = parseCSVLine(line);
    
    // Check if this is a header row
    if (cols[0] === 'ID' || cols[0].includes('ID,')) {
      currentHeaders = cols;
      continue;
    }

    let record = {};
    for (let j = 0; j < Math.min(cols.length, currentHeaders.length); j++) {
      let key = currentHeaders[j].trim();
      // fix missing quote from earlier sed
      if (key === 'ID,Rank,Domain,Goal,Question,Ans,Analysis') {
        const subCols = line.split(',');
        record = {
          ID: subCols[0]?.replace(/"/g, ''),
          Rank: subCols[1]?.replace(/"/g, ''),
          Domain: subCols[2]?.replace(/"/g, ''),
          Goal: subCols[3]?.replace(/"/g, ''),
          Question: subCols[4]?.replace(/"/g, ''),
          Ans: subCols[5]?.replace(/"/g, ''),
          Analysis: subCols.slice(6).join(',').replace(/"/g, '')
        };
        break;
      } else {
        record[key] = cols[j];
      }
    }

    let domain = (record.DOM || record.Domain || '').toUpperCase().replace(/"/g, '');
    if (!domain) continue;

    const labId = DOMAIN_TO_LAB[domain] || 'thermo-dynamics-engine';

    parsedQuestions.push({
      id: (record.ID || '').replace(/"/g, '') || `Q_${Math.random().toString(36).substr(2, 9)}`,
      loreLabId: labId,
      domain: domain,
      topic: record.DEP || record.Goal || '',
      question: record.QUESTION || record.Question || '',
      options: [
        record.UP_OPT,
        record.RIGHT_OPT,
        record.LEFT_OPT
      ].filter(Boolean),
      correctOption: record.CORRECT || record.Ans || '',
      analysis: record.ANALYSIS || record.Analysis || '',
      hint: record.HINT || '',
      context: record.CONTEXT || ''
    });
  }

  const fileOutput = `export interface AlchemistQuestion {
  id: string;
  loreLabId: string;
  domain: string;
  topic: string;
  question: string;
  options: string[];
  correctOption: string;
  analysis: string;
  hint: string;
  context: string;
}

export const ALCHEMIST_QUESTIONS: AlchemistQuestion[] = ${JSON.stringify(parsedQuestions, null, 2)};
`;

  fs.writeFileSync(outPath, fileOutput, 'utf8');
  console.log(`Successfully parsed ${parsedQuestions.length} questions to src/alchemist_questions.ts`);
}

parseCSV();
