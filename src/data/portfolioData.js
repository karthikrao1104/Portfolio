/**
 * Central Portfolio Data Source
 * All personal, educational, experience, projects, skills, and certifications
 * consolidated into a single unified file.
 */

export const personal = {
  fullName: "P. Karthik Rao",
  navBrand: "KARTHIK RAO",
  introEyebrow: "HELLO, I'M ",
  headline: "Building Intelligent Solutions with Data, AI & Technology.",
  summaryShort: "AI and Data Science graduate passionate about Machine Learning, Data Analytics, and developing practical software applications.",
  aboutDetailed: [
    "I am an Artificial Intelligence and Data Science graduate with practical experience in data analytics, machine learning, and software development.",
    "My technical experience includes analyzing large datasets, developing machine learning models, creating interactive dashboards, and building web applications.",
    "Through my internships, I gained experience working with SQL, Python, Power BI, Django, Git, and modern software development workflows.",
    "I enjoy learning emerging technologies and transforming ideas into practical solutions."
  ],
  location: "Chennai, Tamil Nadu, India",
  email: "karthikrao1104@gmail.com",
  phone: "+91 9032597992",
  github: "https://github.com/karthikrao1104",
  linkedin: "https://www.linkedin.com/in/karthikraop",
  resumePath: "/resume.pdf",
  techHighlights: [
    "Python",
    "Machine Learning",
    "SQL",
    "Data Analytics",
    "React",
    "Django"
  ],
  statistics: [
    { value: 75000, suffix: "+", label: "Sales Records Analyzed", desc: "Advanced SQL & statistical analysis" },
    { value: 2, suffix: "", label: "Internship Experiences", desc: "AI Data Analyst & Software Dev" },
    { value: 3, suffix: "", label: "Featured Projects", desc: "Machine Learning, CV & BI Dashboards" },
    { value: 8.2, suffix: "/10", decimals: 1, label: "Academic CGPA", desc: "B.Tech AI & Data Science" }
  ]
};

export const skillCategories = [
  {
    id: "programming",
    number: "01",
    title: "PROGRAMMING & QUERYING",
    skills: ["Python", "SQL", "Java (Basic)", "C (Basic)", "C++ (Basic)"]
  },
  {
    id: "analytics",
    number: "02",
    title: "DATA ANALYSIS & VISUALIZATION",
    skills: ["Exploratory Data Analysis", "Data Cleaning", "Data Visualization", "Excel", "Power BI (Basics)", "Tableau"]
  },
  {
    id: "ml-ai",
    number: "03",
    title: "MACHINE LEARNING & AI",
    skills: ["Supervised Learning", "Unsupervised Learning", "Deep Learning Basics", "Convolutional Neural Networks (CNN)"]
  },
  {
    id: "web",
    number: "04",
    title: "WEB DEVELOPMENT",
    skills: ["HTML", "CSS", "JavaScript", "React", "Django", "PostgreSQL", "SQLite"]
  },
  {
    id: "libraries",
    number: "05",
    title: "LIBRARIES & FRAMEWORKS",
    skills: ["Scikit-learn", "NumPy", "Pandas", "Matplotlib", "OpenCV"]
  },
  {
    id: "tools",
    number: "06",
    title: "TOOLS & PLATFORMS",
    skills: ["Linux / UNIX", "VS Code", "Git", "GitHub", "Google Colab", "Jupyter Notebook"]
  }
];

export const experiences = [
  {
    id: "exp-01",
    index: "01",
    role: "AI Data Analyst Intern",
    company: "Ualytica Solutions Private Limited",
    period: "January 2026 – April 2026",
    location: "Chennai, India (Hybrid)",
    responsibilities: [
      "Performed statistical analysis and exploratory data analysis on 75,000+ sales records using advanced SQL.",
      "Identified revenue trends and regional performance patterns.",
      "Designed and deployed interactive Power BI dashboards with dynamic KPIs.",
      "Automated recurring data cleaning and reporting workflows, reducing manual analysis time by an estimated 20%."
    ],
    technologies: ["SQL", "Python", "Power BI", "Data Analytics", "EDA"]
  },
  {
    id: "exp-02",
    index: "02",
    role: "Software Development Intern",
    company: "Sandhata Technologies",
    period: "June 2026 – July 2026",
    location: "Chennai, India",
    responsibilities: [
      "Developed and tested web application modules using Python, Django, HTML, CSS, JavaScript, and SQL.",
      "Applied database management and version control best practices using Git/GitHub.",
      "Worked in a UNIX/Linux environment.",
      "Collaborated with cross-functional teams to implement and validate software features.",
      "Followed SDLC and STLC methodologies."
    ],
    technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQL", "Git", "Linux"]
  }
];

export const projects = [
  {
    id: "imageflow",
    number: "01",
    title: "IMAGEFLOW – PHOTO CLUSTERING SYSTEM",
    tagline: "Facial Recognition & Unsupervised Photo Organization System",
    description: "Developed a photo management system using facial recognition and clustering to automatically organize photos, integrating a Django backend with a React frontend.",
    problemStatement: "Digital photo libraries easily become unorganized, making it difficult to search, categorize, and locate photos of specific people without manual tagging.",
    keyFeatures: [
      "Facial detection and deep embedding vector extraction using OpenCV and TensorFlow.",
      "Unsupervised clustering algorithms to automatically group photos of identical individuals.",
      "Full-stack architecture integrating high-performance Django REST endpoints with a modern React UI.",
      "Persistent metadata storage using SQLite with gallery indexing."
    ],
    contribution: "Designed and implemented the core clustering pipeline in Python, built REST APIs in Django, and developed the responsive front-end dashboard in React.",
    technologies: ["Python", "TensorFlow", "OpenCV", "React", "Django", "SQLite"],
    imagePath: "/assets/projects/imageflow/screenshot-preview.png",
    imageAlt: "ImageFlow photo clustering system interface preview",
    githubUrl: "https://github.com/karthikrao1104/imageflow-clustering",
    demoUrl: "https://imageflow-demo.example.com",
    isPlaceholderLink: true
  },
  {
    id: "wind-forecasting",
    number: "02",
    title: "WIND POWER GENERATION FORECASTING",
    tagline: "Predictive Machine Learning for Renewable Power Grids",
    description: "Developed a machine learning model to forecast wind power generation using historical weather and power-generation data.",
    problemStatement: "Wind energy generation is intermittent and heavily dependent on variable weather metrics, creating supply-demand imbalances in regional power grids.",
    keyFeatures: [
      "Extensive data preprocessing and feature engineering on historical weather and atmospheric telemetry.",
      "Supervised regression models trained using Scikit-learn with cross-validation.",
      "Accurate power generation forecasts enabling optimized grid storage and dispatch schedules.",
      "Exploratory visual analysis validating feature importance across wind speeds and directions."
    ],
    contribution: "Conducted exploratory data analysis, handled feature transformations with Pandas/NumPy, built predictive regressors, and generated evaluation metrics.",
    technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    imagePath: "/assets/projects/wind-forecasting/screenshot-preview.png",
    imageAlt: "Wind power forecasting machine learning dashboard preview",
    githubUrl: "https://github.com/karthikrao1104/wind-power-forecasting",
    demoUrl: "https://wind-forecasting-demo.example.com",
    isPlaceholderLink: true
  },
  {
    id: "employee-analytics",
    number: "03",
    title: "EMPLOYEE ATTRITION & WORKFORCE ANALYTICS",
    tagline: "Enterprise HR Analytics & Strategic Retention Intelligence",
    description: "Analyzed employee records to identify key attrition drivers, contributing to improvement in workforce planning efficiency.",
    problemStatement: "Unanticipated employee attrition incurs severe talent replacement costs and productivity loss without clear visibility into root organizational causes.",
    keyFeatures: [
      "Complex SQL querying across structured employee cohorts to isolate retention trends.",
      "Interactive Tableau dashboards displaying executive KPI scorecards and department drilldowns.",
      "Multivariate analysis identifying tenure inflection points, overtime correlations, and satisfaction metrics.",
      "Strategic workforce recommendations formulated directly from statistical findings."
    ],
    contribution: "Wrote all data extraction and transformation SQL queries, designed the multi-tab Tableau dashboard, and documented actionable findings for talent leadership.",
    technologies: ["SQL", "Tableau", "EDA", "Statistical Analysis"],
    imagePath: "/assets/projects/employee-analytics/screenshot-preview.png",
    imageAlt: "Employee attrition and workforce analytics dashboard preview",
    githubUrl: "https://github.com/karthikrao1104/employee-attrition-analytics",
    demoUrl: "https://workforce-analytics-demo.example.com",
    isPlaceholderLink: true
  }
];

export const educationList = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "SIMATS Engineering",
    location: "Chennai, India",
    period: "August 2022 – August 2026",
    grade: "CGPA: 8.2 / 10",
    details: "Comprehensive undergraduate program covering artificial intelligence, machine learning, data engineering, statistical modeling, database systems, and full-stack software development."
  },
  {
    degree: "Intermediate Education – MPC Stream",
    institution: "Sri Chaitanya Junior College",
    location: "Chittoor, Andhra Pradesh, India",
    period: "June 2020 – February 2022",
    grade: "Percentage: 78.8%",
    details: "Core focus on Mathematics, Physics, and Chemistry, establishing strong foundational quantitative, mathematical, and algorithmic reasoning skills."
  }
];

export const certificationsList = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    issuer: "Oracle",
    year: "2025",
    category: "Generative AI",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-genai"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional",
    issuer: "Oracle",
    year: "2025",
    category: "Data Science",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-ds"
  },
  {
    name: "Oracle Database SQL Certified Specialist",
    issuer: "Oracle",
    year: "2025",
    category: "Database Systems",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-sql"
  },
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    year: "2025",
    category: "Artificial Intelligence",
    url: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=placeholder-ai"
  },
  {
    name: "Google Cloud Data Analytics Certificate (Beginner)",
    issuer: "Google Cloud",
    year: "Verified",
    category: "Data Analytics",
    url: "https://www.coursera.org/account/accomplishments/placeholder"
  },
  {
    name: "Deloitte Data Analytics Job Simulation",
    issuer: "Forage",
    year: "2025",
    category: "Enterprise Simulation",
    url: "https://www.theforage.com/simulations/deloitte/placeholder"
  }
];

export const verifiedMilestones = [
  {
    stat: "75,000+",
    title: "Sales Records Analyzed",
    description: "Executed extensive SQL exploratory analysis, revenue trending, and regional pattern discovery."
  },
  {
    stat: "02",
    title: "Industry Internships",
    description: "Hands-on engineering in AI Data Analytics (Ualytica) and Software Development (Sandhata)."
  },
  {
    stat: "4x",
    title: "Oracle Professional Certifications",
    description: "Certified across Generative AI, Data Science Professional, Database SQL, and AI Foundations."
  },
  {
    stat: "8.2",
    title: "Academic CGPA",
    description: "Consistent academic performance in B.Tech Artificial Intelligence and Data Science at SIMATS."
  }
];
