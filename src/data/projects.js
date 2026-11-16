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
    demo: "https://wind-forecasting-demo.example.com",
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
    demo: "https://workforce-analytics-demo.example.com",
    isPlaceholderLink: true
  }
];
