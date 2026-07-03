export interface LoreMode {
  id: string;
  title: string;
  targetAudience: string;
  goal: string;
  interfaceDesc: string;
  gameplay: string[];
  hook?: string;
  whyItWorks?: string;
}

export interface LoreMission {
  id: string;
  title: string;
  topic: string;
  loreText: string;
  modes: {
    learner: LoreMode;
    gamer: LoreMode;
  };
}

export const LORE_MISSIONS: LoreMission[] = [
  {
  id: "organic-synthesis-matrix",
  title: "The Organic Synthesis Matrix",
  topic: "Organic Chemistry",
  loreText: "A synthetic bioweapon has decimated the agricultural sectors of the inner planets. The only hope is a complex organic antidote, but the reaction pathways are heavily guarded by stereochemical traps and fragile functional groups. You must navigate the carbon backbones, utilizing precise reagents like Grignards and Wittig to construct the target molecule before the crop failure causes mass starvation. Master the art of electron pushing and resonance to break the matrix.",
  modes: {
    learner: {
      id: "retro-synth-sim",
      title: "Retro-Synth Simulator",
      targetAudience: "For Learners",
      goal: "Master retrosynthetic analysis, reaction mechanisms, and stereochemistry.",
      interfaceDesc: "A holographic 3D molecule builder.",
      gameplay: [
        "Phase 1: Functional Group Identification. Highlight the reactive centers.",
        "Phase 2: Mechanism Execution. Drag electrons to form and break bonds without violating the octet rule."
      ],
      whyItWorks: "Turns abstract mechanisms into interactive puzzles."
    },
    gamer: {
      id: "carbon-crusade",
      title: "Carbon Crusade",
      targetAudience: "For Gamers",
      goal: "Synthesize complex molecules to unlock cure variants while managing reagent toxicity.",
      interfaceDesc: "A tactical grid-based puzzle system.",
      gameplay: [
        "Use reagents as \"power-ups\" to overcome stereochemical blockades.",
        "Chain reactions for combo points to accelerate synthesis."
      ],
      hook: "Fast-paced, satisfying visual feedback for correct electron flow."
    }
  }
},
  {
  id: "electro-voltaic-core",
  title: "The Electro-Voltaic Core",
  topic: "Electrochemistry",
  loreText: "The orbital station's main reactor is failing, its ionic gradients collapsing. You must dive into the electrochemical core, acting as the ultimate salt bridge. Your task is to balance the redox reactions, ensuring the smooth flow of electrons from the anode to the cathode. Calculate the Nernst potentials accurately; a single miscalculation could reverse the flow and trigger a catastrophic overload.",
  modes: {
    learner: {
      id: "redox-balancer",
      title: "Redox Balancer",
      targetAudience: "For Learners",
      goal: "Master the Nernst equation, cell potential, and Faraday's laws.",
      interfaceDesc: "A split-screen virtual galvanic and electrolytic cell setup.",
      gameplay: [
        "Phase 1: Half-Cell Construction. Choose the correct electrodes and electrolytes.",
        "Phase 2: Potential Calculation. Set the concentrations to achieve the target voltage."
      ],
      whyItWorks: "Visualizes electron and ion flow in real-time."
    },
    gamer: {
      id: "voltage-vanguard",
      title: "Voltage Vanguard",
      targetAudience: "For Gamers",
      goal: "Keep the station powered by rapidly balancing incoming redox threats.",
      interfaceDesc: "A frantic resource management dashboard.",
      gameplay: [
        "Divert electron flow to critical systems by solving redox pairs.",
        "Upgrade electrodes to handle higher current densities."
      ],
      hook: "Intense balancing act with visual indicators of impending overload."
    }
  }
},
  {
  id: "thermo-dynamics-engine",
  title: "The Thermo-Dynamics Engine",
  topic: "Thermodynamics & Physical Chemistry",
  loreText: "The terraforming engine of Mars has frozen, trapped in a state of high entropy. You must manipulate the laws of thermodynamics—enthalpy, entropy, and Gibbs free energy—to ignite the core and create a habitable atmosphere. Manage the heat flow, optimize the Carnot cycles, and push the system towards spontaneity. The fate of the new world depends on your ability to master the energy transfer.",
  modes: {
    learner: {
      id: "entropy-architect",
      title: "Entropy Architect",
      targetAudience: "For Learners",
      goal: "Understand the laws of thermodynamics, Maxwell relations, and phase equilibria.",
      interfaceDesc: "A complex P-V-T phase diagram simulator.",
      gameplay: [
        "Phase 1: State Variables. Adjust pressure and temperature to cross phase boundaries.",
        "Phase 2: Work and Heat. Calculate the efficiency of the engine cycles."
      ],
      whyItWorks: "Makes abstract thermodynamic state functions visual and manipulatable."
    },
    gamer: {
      id: "heat-death-escape",
      title: "Heat Death Escape",
      targetAudience: "For Gamers",
      goal: "Prevent the engine from reaching maximum entropy by carefully routing heat.",
      interfaceDesc: "A dynamic flow-routing puzzle game.",
      gameplay: [
        "Route hot and cold streams to power turbines.",
        "Avoid localized entropy spikes that damage the engine."
      ],
      hook: "Strategic puzzle solving with catastrophic visual consequences for failure."
    }
  }
},
  {
  id: "inorganic-lattice-vault",
  title: "The Inorganic Lattice Vault",
  topic: "Inorganic Chemistry & Coordination Compounds",
  loreText: "Deep within the alien ruins, a massive crystal lattice acts as a vault holding ancient technology. To unlock it, you must decipher the coordination chemistry of the complex ions. Understand the crystal field splitting, identify the ligands, and manipulate the d-orbital electrons to match the vault's resonant frequency. A single mismatched oxidation state will trigger the defensive protocols.",
  modes: {
    learner: {
      id: "ligand-field-mapper",
      title: "Ligand Field Mapper",
      targetAudience: "For Learners",
      goal: "Master Crystal Field Theory, coordination numbers, and isomerism.",
      interfaceDesc: "A 3D spatial reasoning environment for metal complexes.",
      gameplay: [
        "Phase 1: Geometry Construction. Attach ligands to achieve octahedral or tetrahedral geometries.",
        "Phase 2: Splitting Energy. Arrange electrons in the t2g and eg orbitals based on ligand strength."
      ],
      whyItWorks: "Enhances 3D spatial understanding of complex molecules."
    },
    gamer: {
      id: "crystal-resonance",
      title: "Crystal Resonance",
      targetAudience: "For Gamers",
      goal: "Unlock alien artifacts by matching specific color frequencies of coordination complexes.",
      interfaceDesc: "A visually stunning color and geometry matching game.",
      gameplay: [
        "Swap ligands to shift the absorption spectrum to the required color.",
        "Manage the overall charge of the complex to avoid defensive blasts."
      ],
      hook: "Beautiful crystal visuals paired with satisfying \"unlock\" mechanics."
    }
  }
},
  {
  id: "analytical-spectre-scanner",
  title: "The Analytical Spectre Scanner",
  topic: "Analytical Chemistry & Spectroscopy",
  loreText: "A highly advanced cloaked ship has entered the sector. The only way to identify its origin and weaknesses is to analyze its faint energy signature using the Spectre Scanner. You must interpret complex NMR, IR, and Mass spectra to deduce the molecular structure of its hull. Filter out the noise, identify the key functional groups, and piece together the molecular puzzle before it vanishes into the void.",
  modes: {
    learner: {
      id: "spectrum-sleuth",
      title: "Spectrum Sleuth",
      targetAudience: "For Learners",
      goal: "Master the interpretation of NMR, IR, UV-Vis, and Mass spectrometry data.",
      interfaceDesc: "A high-tech forensics lab interface with interactive spectra.",
      gameplay: [
        "Phase 1: Peak Identification. Assign chemical shifts and frequencies to functional groups.",
        "Phase 2: Structure Elucidation. Combine data from multiple spectra to build the final molecule."
      ],
      whyItWorks: "Provides a structured, interactive way to practice complex data interpretation."
    },
    gamer: {
      id: "signal-intercept",
      title: "Signal Intercept",
      targetAudience: "For Gamers",
      goal: "Identify enemy ship classes by rapidly decoding spectral signatures under fire.",
      interfaceDesc: "A tense, radar-like scanning interface.",
      gameplay: [
        "Match spectral peaks to a database of known materials to lock on.",
        "Filter out active jamming signals (noise) to see the true spectrum."
      ],
      hook: "High-pressure deductive reasoning with immediate tactical rewards."
    }
  }
},
  {
  id: "statmech-probability-drive",
  title: "The StatMech Probability Drive",
  topic: "Statistical Mechanics",
  loreText: "The experimental Probability Drive is malfunctioning, trapped in a superposition of microstates. To stabilize the ship, you must navigate the partition functions and define the macrostate. Balance the distribution of particles across energy levels according to Boltzmann statistics. If the system collapses into a high-energy microstate, the drive will detonate.",
  modes: {
    learner: {
      id: "ensemble-explorer",
      title: "Ensemble Explorer",
      targetAudience: "For Learners",
      goal: "Understand microstates, macrostates, partition functions, and Boltzmann distributions.",
      interfaceDesc: "A particle simulation sandbox.",
      gameplay: [
        "Phase 1: Microstate Distribution. Assign particles to energy levels to maximize probability.",
        "Phase 2: Ensemble Averages. Calculate macroscopic properties like internal energy and entropy from the partition function."
      ],
      whyItWorks: "Bridges the gap between microscopic behavior and macroscopic thermodynamics visually."
    },
    gamer: {
      id: "quantum-chaos-control",
      title: "Quantum Chaos Control",
      targetAudience: "For Gamers",
      goal: "Keep the drive stable by rapidly redistributing energy among a swarm of particles.",
      interfaceDesc: "A chaotic, particle-swarming management game.",
      gameplay: [
        "Capture high-energy particles and redistribute their energy to cool the system.",
        "Maintain the optimal Boltzmann distribution to maximize drive output."
      ],
      hook: "Fast-paced, mesmerizing particle interactions requiring quick reflexes and strategy."
    }
  }
},
  
  {
    id: 'anti-grav-phenomenon',
    title: 'The Anti-Grav Phenomenon',
    topic: 'Surface Chemistry & Froth Flotation',
    loreText: 'In the year 2075, humanity\'s insatiable hunger for resources has pushed traditional mining to its absolute limits. Deep within the asteroid belt, scientists discovered a revolutionary technique. By applying specific chemical "cloaks"—advanced collectors like Potassium Ethyl Xanthate—they found a way to make heavy, metal-rich sulfide ores defy gravity itself. While the worthless, rocky gangue sinks into the abyss, the precious metals rise to the heavens, carried on air-cushioned bubbles stabilized by pine oil. This isn\'t magic; it\'s the precise manipulation of surface tension and hydrophobicity. You are tasked with mastering this delicate balance to extract the galaxy\'s most critical resources before the colony runs out of power.',
    modes: {
      learner: {
        id: 'jam-master-sim',
        title: 'The "JAM Master" Sim',
        targetAudience: 'For Learners',
        goal: 'Master the thermodynamics and surface chemistry required for the IIT JAM syllabus.',
        interfaceDesc: 'A high-tech "Virtual Extraction Lab."',
        gameplay: [
          'Phase 1: The Reagent Lab. You are given a tray of chemicals: Potassium Ethyl Xanthate (Collector), Pine Oil (Frother), and Aniline (Stabilizer). You must click and drag the correct molecule to "cloak" the sulfide ore.',
          'Phase 2: The pH Balance. A slider appears. To separate ZnS from PbS, you must adjust the pH using Sodium Cyanide (NaCN) as a depressant. If your pH is off, the "Antigravity" fails and both metals sink!'
        ],
        whyItWorks: 'It visualizes Differential Flotation, a common JAM topic. It turns dry formulas into "equipment" you use to succeed.'
      },
      gamer: {
        id: 'sulfide-sky-high',
        title: '"Sulfide Sky-High"',
        targetAudience: 'For Gamers',
        goal: 'Build a mining empire using "Antigravity" tech to harvest floating ores.',
        interfaceDesc: 'A 3D isometric mining colony on a resource-rich planet.',
        gameplay: [
          'Resource Management: You have a limited supply of "Antigravity Fuel" (Air/Compressed Gas). You have to pulse the air into massive "Flotation Cells."',
          'The "Scrape" Mechanic: As the sulfide-rich froth reaches the top, you have to manually "scrape" the concentrated ore into bins before the bubbles pop. If they pop, the ore falls back down, damaging your machinery.',
          'Level Up: As you progress, you unlock Roasting and Smelting modules to turn your concentrated froth into pure gold, copper, and lead bars to sell on the Galactic Market.'
        ],
        hook: 'High-intensity "Emergency Events" where a surge of "Acid Rain" changes the pH of your tanks, forcing you to react instantly to keep your ore floating.'
      }
    }
  },
  {
    id: 'quantum-forge',
    title: 'The Quantum Forge',
    topic: 'Quantum Chemistry & Molecular Orbitals',
    loreText: 'Deep within the neon-lit corridors of the Neo-Tokyo Research Nexus, a rogue AI has locked down the city\'s primary energy grid. The only way to bypass the security protocols is to manually realign the molecular orbitals of the core\'s power crystals. You must dive into the subatomic realm, navigating the probability clouds of electrons. By understanding the intricate dance of constructive and destructive interference, you will forge new bonds and stabilize the energy output. The fate of millions rests on your mastery of Schrödinger\'s equations and the Pauli Exclusion Principle. Step into the Quantum Forge and illuminate the darkness.',
    modes: {
      learner: {
        id: 'orbital-architect',
        title: 'Orbital Architect',
        targetAudience: 'For Learners',
        goal: 'Master the principles of Molecular Orbital Theory and electron configuration.',
        interfaceDesc: 'A holographic projection of atomic orbitals.',
        gameplay: [
          'Phase 1: The Aufbau Sequence. Arrange electrons in the correct energy levels to unlock the first security gate.',
          'Phase 2: The HOMO-LUMO Gap. Identify the highest occupied and lowest unoccupied molecular orbitals to trigger the energy transfer.'
        ],
        whyItWorks: 'Visualizes abstract quantum concepts, making them tangible and interactive.'
      },
      gamer: {
        id: 'quantum-breach',
        title: 'Quantum Breach',
        targetAudience: 'For Gamers',
        goal: 'Hack the AI core by solving rapid-fire orbital puzzles under time pressure.',
        interfaceDesc: 'A fast-paced, cyberpunk hacking interface.',
        gameplay: [
          'Match the correct orbital shapes to bypass firewalls.',
          'Manage your energy levels; incorrect configurations will cause system instability and reset your progress.'
        ],
        hook: 'A thrilling race against time with dynamic, pulsing synthwave beats.'
      }
    }
  },
  {
    id: 'catalyst-protocol',
    title: 'The Catalyst Protocol',
    topic: 'Chemical Kinetics & Catalysis',
    loreText: 'A deadly pathogen is rapidly spreading across the terraformed colonies of Mars. The cure exists, but the synthesis reaction is far too slow to save the population in time. You have been granted access to the Catalyst Protocol—a highly classified database of transition metal catalysts. Your mission is to design a reaction pathway that lowers the activation energy and accelerates the synthesis by orders of magnitude. You must carefully monitor temperature, pressure, and concentration, ensuring the reaction doesn\'t spiral out of control. Time is running out, and every second counts. Will you find the perfect catalyst before it\'s too late?',
    modes: {
      learner: {
        id: 'kinetics-commander',
        title: 'Kinetics Commander',
        targetAudience: 'For Learners',
        goal: 'Understand the Arrhenius equation, activation energy, and the role of catalysts.',
        interfaceDesc: 'A high-stakes bio-chemical laboratory dashboard.',
        gameplay: [
          'Analyze reaction coordinate diagrams to identify the rate-determining step.',
          'Select the appropriate transition metal catalyst to lower the activation energy barrier.'
        ],
        whyItWorks: 'Contextualizes chemical kinetics within a life-or-death scenario, emphasizing the real-world importance of reaction rates.'
      },
      gamer: {
        id: 'reaction-rush',
        title: 'Reaction Rush',
        targetAudience: 'For Gamers',
        goal: 'Synthesize the cure as quickly as possible while managing volatile reaction conditions.',
        interfaceDesc: 'A frantic, multi-tasking simulation with warning lights and pressure gauges.',
        gameplay: [
          'Balance temperature and pressure to maximize yield without causing an explosion.',
          'Quickly swap out degraded catalysts to maintain the reaction speed.'
        ],
        hook: 'Intense resource management and split-second decision making.'
      }
    }
  }
];

export interface Resource {
  id: string;
  title: string;
  category: 'GATE' | 'JAM' | 'TIFR';
  year: number;
  url: string;
  type: 'Paper' | 'Key' | 'Repository';
}

export const CHEMISTRY_RESOURCES: Resource[] = [
  {
    id: 'gate-2025-paper',
    title: 'GATE 2025 Chemistry Paper',
    category: 'GATE',
    year: 2025,
    url: 'https://gate2026.iitg.ac.in/doc/download/2025/CY2025.pdf',
    type: 'Paper',
  },
  {
    id: 'gate-2025-key',
    title: 'GATE 2025 Answer Key',
    category: 'GATE',
    year: 2025,
    url: 'https://gate2026.iitg.ac.in/doc/download/2025_Key/CY_Keys.pdf',
    type: 'Key',
  },
  {
    id: 'gate-2024-paper',
    title: 'GATE 2024 Chemistry Paper',
    category: 'GATE',
    year: 2024,
    url: 'https://gate2025.iitr.ac.in/doc/download/2024/CY24S1.pdf',
    type: 'Paper',
  },
  {
    id: 'gate-2024-key',
    title: 'GATE 2024 Answer Key',
    category: 'GATE',
    year: 2024,
    url: 'https://gate2024.iisc.ac.in/wp-content/uploads/2024/CYFinalAnswerKey.pdf',
    type: 'Key',
  },
  {
    id: 'gate-2023-key',
    title: 'GATE 2023 Answer Key',
    category: 'GATE',
    year: 2023,
    url: 'https://gate.iitk.ac.in/GATE2023/doc/papers/2023/ANS/CY_ANS_GATE2023.pdf',
    type: 'Key',
  },
  {
    id: 'gate-2022-paper',
    title: 'GATE 2022 Chemistry Paper',
    category: 'GATE',
    year: 2022,
    url: 'https://gate.iitk.ac.in/GATE2023/doc/papers/2022/cy_2022.pdf',
    type: 'Paper',
  },
  {
    id: 'gate-2021-paper',
    title: 'GATE 2021 Chemistry Paper',
    category: 'GATE',
    year: 2021,
    url: 'https://gate2025.iitr.ac.in/doc/download/2021/cy_2021.pdf',
    type: 'Paper',
  },
  {
    id: 'gate-2010-paper',
    title: 'GATE 2010 Chemistry Paper',
    category: 'GATE',
    year: 2010,
    url: 'https://gate.iitk.ac.in/GATE2023/doc/papers/2010/cy_2010.pdf',
    type: 'Paper',
  },
  {
    id: 'jam-2025-paper',
    title: 'IIT JAM 2025 Chemistry Paper',
    category: 'JAM',
    year: 2025,
    url: 'https://jam2026.iitb.ac.in/files/CY2025.pdf',
    type: 'Paper',
  },
  {
    id: 'tifr-2022-paper',
    title: 'TIFR 2022 Chemistry Paper',
    category: 'TIFR',
    year: 2022,
    url: 'https://media.ifasonline.com/production/pyqpdf/902a5f47-6fe2-4003-907b-2b5d6397959c.pdf',
    type: 'Paper',
  },
  {
    id: 'gate-repo-1',
    title: 'GATE Official Repository (IITR)',
    category: 'GATE',
    year: 0,
    url: 'https://gate2025.iitr.ac.in/download.html',
    type: 'Repository',
  },
  {
    id: 'gate-repo-2',
    title: 'GATE Official Repository (IITK)',
    category: 'GATE',
    year: 0,
    url: 'https://gate.iitk.ac.in/GATE2023/papers_keys.html',
    type: 'Repository',
  },
  {
    id: 'jam-repo-1',
    title: 'IIT JAM Official Repository (IITB)',
    category: 'JAM',
    year: 0,
    url: 'https://jam2026.iitb.ac.in/oldQP.html',
    type: 'Repository',
  },
  {
    id: 'jam-repo-2',
    title: 'IIT JAM Official Repository (IITD)',
    category: 'JAM',
    year: 0,
    url: 'https://jam2025.iitd.ac.in/qp.php',
    type: 'Repository',
  },
  {
    id: 'tifr-repo-1',
    title: 'TIFR Comprehensive Archive (IFAS)',
    category: 'TIFR',
    year: 0,
    url: 'https://ifasonline.com/tifr/chemistry-previous-year-question-paper/6433b6f76f88433b504b4290/6433af3f6f88433b504b4171',
    type: 'Repository',
  },
  {
    id: 'tifr-repo-2',
    title: 'TIFR Previous Papers (Career Endeavour)',
    category: 'TIFR',
    year: 0,
    url: 'https://careerendeavour.com/tifr-previous-papers/',
    type: 'Repository',
  },
  {
    id: 'student-resume',
    title: 'Chemistry Student Resume',
    category: 'GATE',
    year: 2026,
    url: 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf',
    type: 'Paper',
  }
];

export interface QuizQuestion {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const SAMPLE_QUIZ: QuizQuestion[] = [
  {
    id: '1',
    text: 'What is the ground state electronic configuration of Chromium (Cr, Z=24)?',
    options: [
      '[Ar] 3d4 4s2',
      '[Ar] 3d5 4s1',
      '[Ar] 3d6 4s0',
      '[Ar] 4s2 3d4'
    ],
    correctAnswer: 1,
    explanation: 'Due to the extra stability of half-filled d-orbitals, one 4s electron jumps to the 3d orbital.'
  },
  {
    id: '2',
    text: 'Which of the following is a paramagnetic species?',
    options: [
      'N2',
      'O2',
      'F2',
      'CO'
    ],
    correctAnswer: 1,
    explanation: 'Oxygen (O2) has two unpaired electrons in its anti-bonding pi orbitals according to Molecular Orbital Theory.'
  },
  {
    id: '3',
    text: 'The point group of BF3 molecule is:',
    options: [
      'C3v',
      'D3h',
      'Td',
      'D3d'
    ],
    correctAnswer: 1,
    explanation: 'BF3 is a planar molecule with a 3-fold axis and a horizontal mirror plane.'
  },
  {
    id: '4',
    text: 'Which of the following is the strongest acid?',
    options: [
      'CH3COOH',
      'ClCH2COOH',
      'Cl2CHCOOH',
      'Cl3CCOOH'
    ],
    correctAnswer: 3,
    explanation: 'Trichloroacetic acid is the strongest due to the strong electron-withdrawing inductive effect (-I effect) of three chlorine atoms.'
  },
  {
    id: '5',
    text: 'The number of vibrational modes for a linear molecule with N atoms is:',
    options: [
      '3N - 6',
      '3N - 5',
      '3N - 3',
      '3N'
    ],
    correctAnswer: 1,
    explanation: 'For a linear molecule, there are 3 translational and 2 rotational degrees of freedom, leaving 3N - 5 vibrational modes.'
  }
];

export const IIT_JAM_QUIZ: QuizQuestion[] = [
  {
    id: 'jam-1',
    text: 'The correct order of acidity for the following phenols is:',
    options: [
      'p-Nitrophenol > o-Nitrophenol > m-Nitrophenol',
      'o-Nitrophenol > p-Nitrophenol > m-Nitrophenol',
      'p-Nitrophenol > m-Nitrophenol > o-Nitrophenol',
      'm-Nitrophenol > p-Nitrophenol > o-Nitrophenol'
    ],
    correctAnswer: 0,
    explanation: 'p-Nitrophenol is most acidic due to both -I and -R effects of the nitro group, while o-nitrophenol has intramolecular hydrogen bonding which slightly reduces its acidity.'
  },
  {
    id: 'jam-2',
    text: 'The major product formed in the reaction of 1-butene with HBr in the presence of peroxides is:',
    options: [
      '2-Bromobutane',
      '1-Bromobutane',
      '2,3-Dibromobutane',
      '1,2-Dibromobutane'
    ],
    correctAnswer: 1,
    explanation: 'In the presence of peroxides, HBr adds to alkenes via a free radical mechanism, following Anti-Markovnikov regioselectivity.'
  },
  {
    id: 'jam-3',
    text: 'The number of unpaired electrons in the complex [CoF6]3- is:',
    options: [
      '0',
      '2',
      '4',
      '5'
    ],
    correctAnswer: 2,
    explanation: 'Co3+ is d6. F- is a weak field ligand, so it forms a high-spin complex with 4 unpaired electrons.'
  },
  {
    id: 'jam-4',
    text: 'The unit of the rate constant for a second-order reaction is:',
    options: [
      's-1',
      'L mol-1 s-1',
      'mol L-1 s-1',
      'L2 mol-2 s-1'
    ],
    correctAnswer: 1,
    explanation: 'For a second-order reaction, rate = k[A]2. So k = rate/[A]2 = (mol L-1 s-1) / (mol L-1)2 = L mol-1 s-1.'
  },
  {
    id: 'jam-5',
    text: 'The hybridization of the central atom in XeF4 is:',
    options: [
      'sp3',
      'sp3d',
      'sp3d2',
      'd2sp3'
    ],
    correctAnswer: 2,
    explanation: 'Xe has 8 valence electrons. In XeF4, there are 4 bond pairs and 2 lone pairs, giving a steric number of 6, which corresponds to sp3d2 hybridization (square planar geometry).'
  },
  {
    id: 'jam-6',
    text: 'In the concentration of an ore containing a mixture of Galena (PbS) and Sphalerite (ZnS), which reagent is added as a depressant to allow only PbS to come with the froth?',
    options: [
      'Pine Oil',
      'Potassium Ethyl Xanthate',
      'Sodium Cyanide (NaCN)',
      'Copper Sulphate (CuSO₄)'
    ],
    correctAnswer: 2,
    explanation: 'Think of NaCN as a "Stun Grenade" for Zinc. It forms a soluble complex [Zn(CN)₄]²⁻ that keeps the Zinc trapped in the water (the "Dead Zone"), while Lead escapes to the surface!'
  },
  {
    id: 'jam-7',
    text: 'The role of a collector in froth flotation is to:',
    options: [
      'Increase the solubility of the ore in water.',
      'Make the ore particles hydrophobic (water-repelling).',
      'Decrease the surface tension of the water.',
      'Stabilize the size of the air bubbles.'
    ],
    correctAnswer: 1,
    explanation: 'Your "Collector" is like a Magnet-Suit. One end sticks to the metal, and the other end hates water. This forces the particle to jump onto an air bubble to stay "dry"!'
  },
  {
    id: 'jam-8',
    text: 'During the extraction of Copper from Copper Pyrites, the reaction Cu₂S + 2Cu₂O → 6Cu + SO₂ is an example of:',
    options: [
      'Roasting',
      'Calcination',
      'Self-Reduction',
      'Electrolytic Reduction'
    ],
    correctAnswer: 2,
    explanation: 'This is the "Betrayal Mechanic." The sulfide ore and the oxide ore react with each other to produce pure metal without needing any external carbon or "fuel." They reduce themselves!'
  },
  {
    id: 'jam-9',
    text: 'Why are sulfide ores converted to oxides (Roasting) before reduction with Carbon?',
    options: [
      'Carbon is a better reducing agent for sulfides than oxides.',
      'ΔG°f of CO₂ is more negative than CS₂.',
      'Sulfides are more volatile than oxides.',
      'Roasting increases the density of the ore.'
    ],
    correctAnswer: 1,
    explanation: 'In the "Industrial Tycoon" view, Carbon simply isn\'t "strong" enough to steal Sulfur away from a metal. You have to swap the Sulfur for Oxygen first because Carbon loves Oxygen much more!'
  },
  {
    id: 'jam-10',
    text: 'Which of the following acts as a stabilizer for the froth in flotation?',
    options: [
      'Cresols',
      'Fatty acids',
      'Pine oil',
      'Xanthates'
    ],
    correctAnswer: 0,
    explanation: 'If the "Collector" is the suit, the Stabilizer is the "Shield Battery." It keeps the bubbles from popping too early so you have time to scrape the ore off the top!'
  }
];
