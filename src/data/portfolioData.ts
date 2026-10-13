export interface Project {
  id: string;
  title: string;
  category: string;
  shortDescription: string;
  technologies: string[];
  status?: string;
  githubUrl?: string;
  visualType: 'recruitment-platform' | 'ml-pipeline' | 'microscope-vision' | 'safety-app' | 'java-game' | 'c-calculator';
}

export const PERSONAL_INFO = {
  fullName: 'SARIUT ULLAH AFNAN',
  shortName: 'AFNAN',
  monogram: 'SA',
  eyebrow: 'SOFTWARE ENGINEERING / CREATIVE TECHNOLOGY',
  headline: 'I build things, explore technology, and learn through creation.',
  bio: "I'm a Software Engineering professional interested in useful software, emerging technology, and research. I like learning by building and exploring ideas beyond the obvious.",
  skills: [
    'Python',
    'Flask',
    'JavaScript',
    'Java',
    'C',
    'MySQL',
    'Machine Learning',
    'Computer Vision',
    'System Design'
  ],
  contact: {
    email: 'afnanfarazi.info@gmail.com',
    github: 'https://github.com/afnanfarazi',
    linkedin: 'https://linkedin.com/in/sariut-ullah-afnan',
    facebook: 'https://www.facebook.com/AfNaNtheMaN01',
    instagram: 'https://www.instagram.com/af_none_9'
  }
};

// 3 Key Featured Projects (Prominent, large visuals)
export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'dhandha',
    title: 'Dhandha',
    category: 'Employment Platform',
    shortDescription: 'A recruitment platform connecting Bangladeshi job seekers with overseas employment opportunities through verified agencies.',
    technologies: ['Flask', 'Python', 'MySQL', 'JavaScript'],
    status: 'University Project',
    githubUrl: 'https://github.com/afnanfarazi',
    visualType: 'recruitment-platform'
  },
  {
    id: 'microscope-defect-detection',
    title: 'Industrial Product Defect Detection',
    category: 'Computer Vision Research',
    shortDescription: 'Research exploring automated surface micro-defect detection in manufacturing using optical microscopy images.',
    technologies: ['Python', 'Computer Vision', 'Image Processing'],
    status: 'Research Paper',
    githubUrl: 'https://github.com/afnanfarazi',
    visualType: 'microscope-vision'
  },
  {
    id: 'student-academic-prediction',
    title: 'Student Academic Performance Prediction',
    category: 'Machine Learning',
    shortDescription: 'Investigating supervised machine learning models to identify students academically at risk for early pedagogical support.',
    technologies: ['Python', 'scikit-learn', 'Flask'],
    status: 'In Progress',
    githubUrl: 'https://github.com/afnanfarazi',
    visualType: 'ml-pipeline'
  }
];

// Compact Secondary Work Index
export const SECONDARY_PROJECTS: Project[] = [
  {
    id: 'safety-for-woman',
    title: 'Safety for Woman',
    category: 'Mobile Prototype',
    shortDescription: 'A digital safety prototype exploring one-tap SOS alerts and trusted-contact location dispatch.',
    technologies: ['Geolocation API', 'JavaScript', 'Mobile Prototype'],
    status: 'Prototype',
    githubUrl: 'https://github.com/afnanfarazi',
    visualType: 'safety-app'
  },
  {
    id: 'lexispell-quest',
    title: 'LexiSpell Quest',
    category: 'Desktop Application',
    shortDescription: 'An interactive language and spelling puzzle application engineered with Java Swing and OOP principles.',
    technologies: ['Java', 'Swing', 'OOP'],
    status: 'Completed',
    githubUrl: 'https://github.com/afnanfarazi',
    visualType: 'java-game'
  },
  {
    id: 'universal-calculator',
    title: 'Universal Calculator',
    category: 'Systems & Algorithms',
    shortDescription: 'A high-precision arithmetic evaluation engine in C demonstrating operator precedence parsing and memory management.',
    technologies: ['C', 'Data Structures', 'Parsing'],
    status: 'Academic',
    githubUrl: 'https://github.com/afnanfarazi',
    visualType: 'c-calculator'
  }
];
