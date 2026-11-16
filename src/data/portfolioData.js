export const personalData = {
  name: "P. Karthik Rao",
  initials: "KARTHIK.",
  title: "AI & DATA SCIENCE PROFESSIONAL",
  headline1: "Engineering Intelligence.",
  headline2: "Transforming Data into Impact.",
  shortBio: "Passionate about Machine Learning, Data Analytics, and building intelligent software applications that solve meaningful problems.",
  aboutParagraphs: [
    "I am an Artificial Intelligence and Data Science graduate passionate about Machine Learning, Data Analytics, and Software Development.",
    "My experience includes analyzing large datasets, developing machine learning models, building interactive dashboards, and developing full-stack applications.",
    "Through my internships, I gained practical exposure to SQL, Python, Power BI, Django, and software development workflows.",
    "I enjoy solving complex problems, learning emerging technologies, and transforming ideas into useful applications."
  ],
  location: "Chennai, Tamil Nadu, India",
  email: "karthikrao1104@gmail.com",
  phone: "+91 9032597992",
  github: "https://github.com/karthikrao1104",
  linkedin: "https://www.linkedin.com/in/karthikraop",
  resumeUrl: "/resume.pdf",
  techLabels: ["Python", "SQL", "Machine Learning", "Data Analytics", "React"],
  statistics: [
    { value: 75000, suffix: "+", label: "Sales Records Analyzed", detail: "Advanced SQL & statistical modeling" },
    { value: 2, suffix: "", label: "Internship Experiences", detail: "AI Data Analyst & Software Dev" },
    { value: 3, suffix: "", label: "Featured Projects", detail: "AI, Predictive ML & Enterprise BI" },
    { value: 8.2, suffix: "/10", decimals: 1, label: "Academic CGPA", detail: "B.Tech in AI & Data Science" }
  ]
};

export const skillsData = [
  {
    category: "PROGRAMMING",
    description: "Core algorithmic foundations and query languages",
    skills: [
      { name: "Python", highlight: true },
      { name: "SQL", highlight: true },
      { name: "Java (Basic)", highlight: false },
      { name: "C (Basic)", highlight: false },
      { name: "C++ (Basic)", highlight: false }
    ]
  },
  {
    category: "DATA ANALYTICS",
    description: "Exploration, pipeline cleaning, and dashboard intelligence",
    skills: [
      { name: "EDA", highlight: true },
      { name: "Data Cleaning", highlight: true },
      { name: "Data Visualization", highlight: true },
      { name: "Excel", highlight: false },
      { name: "Power BI (Basics)", highlight: true },
      { name: "Tableau", highlight: true }
    ]
  },
  {
    category: "AI & MACHINE LEARNING",
    description: "Predictive modeling, deep architectures, and computer vision",
    skills: [
      { name: "Supervised Learning", highlight: true },
      { name: "Unsupervised Learning", highlight: true },
      { name: "Deep Learning Basics", highlight: true },
      { name: "CNN", highlight: true }
    ]
  },
  {
    category: "LIBRARIES & FRAMEWORKS",
    description: "High-performance data science, manipulation, and vision packages",
    skills: [
      { name: "Scikit-learn", highlight: true },
      { name: "NumPy", highlight: true },
      { name: "Pandas", highlight: true },
      { name: "Matplotlib", highlight: false },
      { name: "OpenCV", highlight: true }
    ]
  },
  {
    category: "WEB DEVELOPMENT",
    description: "Modern responsive web interfaces and secure backend APIs",
    skills: [
      { name: "React", highlight: true },
      { name: "JavaScript", highlight: true },
      { name: "Django", highlight: true },
      { name: "HTML5 & CSS3", highlight: false },
      { name: "SQLite", highlight: false }
    ]
  },
  {
    category: "TOOLS & ENVIRONMENTS",
    description: "Enterprise developer workflows, collaboration, and OS platforms",
    skills: [
      { name: "Git & GitHub", highlight: true },
      { name: "Linux / UNIX", highlight: true },
      { name: "VS Code", highlight: false },
      { name: "Google Colab", highlight: false },
      { name: "Jupyter Notebook", highlight: false }
    ]
  }
];

export const experienceData = [
  {
    id: "exp-1",
    role: "AI Data Analyst Intern",
    company: "Ualytica Solutions Private Limited",
    period: "January 2026 – April 2026",
    status: "Internship",
    location: "Remote / Hybrid",
    responsibilities: [
      "Performed statistical analysis and exploratory data analysis on 75,000+ sales records using advanced SQL.",
      "Identified revenue trends and regional performance patterns across multi-market cohorts.",
      "Designed interactive Power BI dashboards with dynamic KPIs and executive drill-down views.",
      "Automated recurring data cleaning and reporting workflows, reducing manual analysis time by an estimated 20%."
    ],
    technologies: ["SQL", "Python", "Power BI", "EDA", "Data Analytics"]
  },
  {
    id: "exp-2",
    role: "Software Development Intern",
    company: "Sandhata Technologies",
    period: "June 2026 – July 2026",
    status: "Internship",
    location: "Chennai, India",
    responsibilities: [
      "Developed and tested web application modules using Python, Django, HTML, CSS, JavaScript, and SQL.",
      "Applied database management and Git/GitHub version control workflows across active team repositories.",
      "Worked effectively within a UNIX/Linux production environment for builds and module validation.",
      "Collaborated with cross-functional teams to implement and validate software features following rigorous SDLC and STLC methodologies."
    ],
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQL", "Git", "Linux"]
  }
];

export const projectsData = [
  {
    id: "imageflow",
    number: "01",
    title: "IMAGEFLOW – Photo Clustering System",
    subtitle: "AI-Powered Facial Recognition & Automated Organizing Engine",
    description: "Developed an intelligent photo management system using facial recognition and clustering algorithms to automatically organize disorganized photo archives, integrating a robust Django backend with a modern React frontend.",
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Django", "SQLite"],
    visualType: "ai-cluster",
    stats: [
      { label: "Core Architecture", value: "Django + React" },
      { label: "Vision Engine", value: "OpenCV & TF" },
      { label: "Pipeline", value: "Auto-Clustering" }
    ],
    highlights: [
      "Face detection and feature vector embedding generation pipeline",
      "Unsupervised clustering to group matching individuals across galleries",
      "Interactive responsive gallery viewer built with React and smooth UI transitions",
      "Secure REST API backend powered by Django and persistent SQLite metadata"
    ],
    github: "https://github.com/karthikrao1104/imageflow-clustering",
    demo: "https://imageflow-demo.example.com",
    isPlaceholderLink: true
  },
  {
    id: "wind-power",
    number: "02",
    title: "Wind Power Generation Forecasting",
    subtitle: "Predictive Machine Learning for Renewable Energy Grids",
    description: "Developed a machine learning model to forecast wind power generation from historical weather and power-generation data, enabling improved energy distribution planning.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    visualType: "analytics-forecast",
    stats: [
      { label: "Framework", value: "Scikit-learn" },
      { label: "Data Pipeline", value: "NumPy & Pandas" },
      { label: "Domain", value: "Clean Energy AI" }
    ],
    highlights: [
      "Extensive feature engineering incorporating wind speed, air density, and atmospheric pressure",
      "Comparative regression modeling evaluating multiple supervised learning algorithms",
      "Rigorous cross-validation avoiding data leakage across chronological timeseries",
      "Clear visual forecasting dashboards charting actual vs. predicted output"
    ],
    github: "https://github.com/karthikrao1104/wind-power-forecasting",
    demo: "https://wind-forecast.example.com",
    isPlaceholderLink: true
  },
  {
    id: "workforce-analytics",
    number: "03",
    title: "Employee Attrition & Workforce Analytics",
    subtitle: "Enterprise Workforce Insights & Predictive Retention Strategy",
    description: "Analyzed extensive employee records to identify key attrition drivers and risk patterns, contributing to improvement in workforce planning efficiency and data-informed HR decisions.",
    technologies: ["SQL", "Tableau", "EDA", "Statistical Analysis"],
    visualType: "workforce-bi",
    stats: [
      { label: "Analytics Tool", value: "Tableau Enterprise" },
      { label: "Querying Engine", value: "Advanced SQL" },
      { label: "Outcome", value: "Retention Drivers" }
    ],
    highlights: [
      "In-depth correlation analysis between tenure, compensation, work-life balance, and attrition rates",
      "Comprehensive multi-page Tableau executive suite with dynamic cohort filtering",
      "Actionable recommendations pinpointing high-risk departments and attrition inflection points",
      "Data transformation pipeline structuring unstructured HR records into relational models"
    ],
    github: "https://github.com/karthikrao1104/employee-attrition-analytics",
    demo: "https://workforce-analytics.example.com",
    isPlaceholderLink: true
  }
];

export const educationData = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "SIMATS Engineering",
    location: "Chennai, Tamil Nadu, India",
    period: "August 2022 – August 2026",
    grade: "CGPA: 8.2 / 10",
    description: "Specialized in machine learning algorithms, deep learning, statistical modeling, relational databases, big data frameworks, and software development methodologies."
  },
  {
    degree: "Intermediate Education – MPC Stream",
    institution: "Sri Chaitanya Junior College",
    location: "Chittoor, Andhra Pradesh, India",
    period: "June 2020 – February 2022",
    grade: "Percentage: 78.8%",
    description: "Rigorous curriculum focused on Mathematics, Physics, and Chemistry, cultivating strong analytical and problem-solving foundations."
  }
];

export const certificationsData = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    badge: "OCI GenAI Pro",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-genai",
    category: "AI & Cloud"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    badge: "OCI Data Science",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-ds",
    category: "Data Science"
  },
  {
    name: "Oracle Database SQL Certified Specialist",
    issuer: "Oracle",
    year: "2025",
    badge: "SQL Specialist",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-sql",
    category: "Databases"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    badge: "AI Foundations",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-ai-foundations",
    category: "AI & Cloud"
  },
  {
    name: "Google Cloud Data Analytics Certificate (Beginner)",
    issuer: "Google Cloud",
    year: "Verified",
    badge: "Data Analytics",
    url: "https://www.coursera.org/account/accomplishments/placeholder",
    category: "Analytics"
  },
  {
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    badge: "Job Simulation",
    url: "https://www.theforage.com/simulations/deloitte/placeholder",
    category: "Industry Simulation"
  }
];

export const achievementsData = [
  {
    number: "75,000+",
    title: "Sales Records Analyzed",
    description: "Executed comprehensive exploratory data analysis, pattern identification, and statistical modeling on large-scale sales datasets via advanced SQL."
  },
  {
    number: "02",
    title: "Industry Internships",
    description: "Hands-on engineering in AI Data Analytics (Ualytica Solutions) and Software Development (Sandhata Technologies) handling real client data and production codebases."
  },
  {
    number: "4x",
    title: "Oracle Professional Certifications",
    description: "Earned industry credentials in OCI Generative AI, Data Science Professional, Database SQL Specialist, and AI Foundations."
  },
  {
    number: "8.2",
    title: "Academic CGPA",
    description: "Rigorous coursework and consistent academic excellence in B.Tech Artificial Intelligence and Data Science at SIMATS Engineering."
  }
];
