export interface Career {
  id: string;
  title: string;
  icon: string;
  description: string;
  shortDescription: string;
  skills: string[];
  averageSalary: string;
  futureDemand: "High" | "Medium" | "Low";
  demandColor: string;
  overview: string;
  subjects: string[];
  topColleges: string[];
  entranceExams: string[];
  futureScope: string;
  roadmap: RoadmapStep[];
}

export interface RoadmapStep {
  phase: string;
  title: string;
  description: string;
  items: string[];
}

export const careers: Career[] = [
  {
    id: "software-engineer",
    title: "Software Engineer",
    icon: "Code2",
    description: "Design, develop, and maintain software applications and systems that power the digital world.",
    shortDescription: "Build the software that powers the world",
    skills: ["Programming", "Problem Solving", "System Design", "Data Structures", "Algorithms"],
    averageSalary: "₹8–30 LPA",
    futureDemand: "High",
    demandColor: "text-green-600",
    overview: "Software engineers design, develop, test, and maintain software applications. They apply engineering principles to create reliable, efficient software solutions across industries.",
    subjects: ["Mathematics", "Computer Science", "Physics", "Logic"],
    topColleges: ["IIT Bombay", "IIT Delhi", "IIT Madras", "BITS Pilani", "NIT Trichy", "IIIT Hyderabad"],
    entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "COMEDK"],
    futureScope: "Software engineering remains one of the most in-demand careers globally. With AI, cloud computing, and digital transformation, opportunities are expanding rapidly.",
    roadmap: [
      { phase: "Class 11–12", title: "Foundation", description: "Build strong fundamentals", items: ["Take PCM with Computer Science", "Learn Python or JavaScript basics", "Participate in coding competitions", "Build small projects"] },
      { phase: "Entrance Exams", title: "Preparation", description: "Crack the entrance exams", items: ["JEE Main & Advanced for IITs", "BITSAT for BITS Pilani", "State-level engineering exams", "Practice on LeetCode/HackerRank"] },
      { phase: "College (B.Tech)", title: "Deep Learning", description: "Master CS fundamentals", items: ["Data Structures & Algorithms", "Operating Systems & Databases", "Internships at tech companies", "Open source contributions"] },
      { phase: "Career Start", title: "Launch", description: "Begin your career", items: ["Junior Developer role", "Build portfolio projects", "Specialize: Web, Mobile, AI, Cloud", "Target ₹8–15 LPA starting"] },
      { phase: "5+ Years", title: "Growth", description: "Advance your career", items: ["Senior Engineer / Tech Lead", "System design expertise", "Mentoring juniors", "₹20–50 LPA and above"] },
    ],
  },
  {
    id: "doctor",
    title: "Doctor",
    icon: "Stethoscope",
    description: "Diagnose, treat, and prevent diseases while caring for patients' health and wellbeing.",
    shortDescription: "Save lives through medicine",
    skills: ["Biology", "Chemistry", "Empathy", "Analytical Thinking", "Communication"],
    averageSalary: "₹10–40 LPA",
    futureDemand: "High",
    demandColor: "text-green-600",
    overview: "Doctors are healthcare professionals who diagnose illnesses, prescribe treatments, and help patients maintain good health. They can specialize in many fields from cardiology to neurology.",
    subjects: ["Biology", "Chemistry", "Physics", "English"],
    topColleges: ["AIIMS Delhi", "CMC Vellore", "JIPMER", "Maulana Azad Medical College", "KEM Mumbai"],
    entranceExams: ["NEET UG", "AIIMS (now merged with NEET)", "JIPMER (now merged with NEET)"],
    futureScope: "Healthcare demand is growing with population increase and aging demographics. Specializations in AI-assisted medicine, telemedicine, and genomics are emerging fields.",
    roadmap: [
      { phase: "Class 11–12", title: "Foundation", description: "Build strong science base", items: ["Take PCB (Physics, Chemistry, Biology)", "Score 90%+ in boards", "Start NEET preparation early", "Volunteer at hospitals"] },
      { phase: "Entrance Exams", title: "NEET Preparation", description: "Crack NEET UG", items: ["NEET UG is the primary exam", "Target 650+ for top colleges", "Join coaching if needed", "Solve previous year papers"] },
      { phase: "MBBS (5.5 years)", title: "Medical School", description: "Complete your MBBS", items: ["Learn anatomy, physiology, pathology", "Clinical rotations in hospitals", "1 year internship", "Choose your specialization path"] },
      { phase: "Specialization", title: "PG / MD / MS", description: "Become a specialist", items: ["NEET PG for postgraduation", "3-year MD/MS program", "Choose: Surgery, Medicine, Pediatrics, etc.", "Fellowship for super-specialization"] },
      { phase: "Practice", title: "Career", description: "Start practicing", items: ["Join a hospital or start a clinic", "Build patient trust", "Continue learning", "₹15–80 LPA depending on specialization"] },
    ],
  },
  {
    id: "aerospace-engineer",
    title: "Aerospace Engineer",
    icon: "Rocket",
    description: "Design aircraft, spacecraft, satellites, and missiles while pushing the boundaries of flight technology.",
    shortDescription: "Engineer the future of flight & space",
    skills: ["Physics", "Mathematics", "CAD Software", "Fluid Dynamics", "Materials Science"],
    averageSalary: "₹6–25 LPA",
    futureDemand: "High",
    demandColor: "text-green-600",
    overview: "Aerospace engineers develop new technologies for aviation, defense systems, and space exploration. They work on design, testing, and production of aircraft and spacecraft.",
    subjects: ["Physics", "Mathematics", "Chemistry", "Computer Science"],
    topColleges: ["IIT Bombay", "IIT Madras", "IIT Kanpur", "IISc Bangalore", "IIST Thiruvananthapuram"],
    entranceExams: ["JEE Main", "JEE Advanced", "IIST Admission (via JEE)", "GATE (for PG)"],
    futureScope: "With ISRO's expanding missions, private space companies like Agnikul & Skyroot, and global space tourism, aerospace engineering has a bright future.",
    roadmap: [
      { phase: "Class 11–12", title: "Foundation", description: "Strong PCM foundation", items: ["Excel in Physics & Mathematics", "Learn about aerodynamics basics", "Follow ISRO & NASA developments", "Build model rockets as hobby"] },
      { phase: "Entrance Exams", title: "Preparation", description: "Target top engineering colleges", items: ["JEE Main & Advanced", "IIST admission through JEE", "State engineering exams", "Focus on mechanics & calculus"] },
      { phase: "B.Tech Aerospace", title: "Engineering", description: "Learn aerospace engineering", items: ["Aerodynamics & propulsion", "Aircraft structures & design", "Satellite systems", "Internship at ISRO/DRDO/HAL"] },
      { phase: "Career Start", title: "Launch", description: "Begin your career", items: ["ISRO, HAL, NAL, DRDO", "Private: Agnikul, Skyroot, Boeing", "Research or further studies (MS/PhD)", "₹6–15 LPA starting"] },
      { phase: "5+ Years", title: "Growth", description: "Advance in aerospace", items: ["Lead engineer / Project manager", "Space mission design", "Start aerospace startup", "₹20–50 LPA and above"] },
    ],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    icon: "BarChart3",
    description: "Extract insights from complex data using statistics, machine learning, and analytical skills.",
    shortDescription: "Turn data into actionable insights",
    skills: ["Python/R", "Machine Learning", "Statistics", "SQL", "Data Visualization"],
    averageSalary: "₹10–35 LPA",
    futureDemand: "High",
    demandColor: "text-green-600",
    overview: "Data scientists analyze large datasets to find patterns and insights that help organizations make better decisions. They use statistical methods, machine learning, and programming.",
    subjects: ["Mathematics", "Statistics", "Computer Science", "Economics"],
    topColleges: ["IIT Delhi", "IISc Bangalore", "ISI Kolkata", "IIT Hyderabad", "CMI Chennai"],
    entranceExams: ["JEE Main", "JEE Advanced", "ISI Admission Test", "GATE (for PG)"],
    futureScope: "Data is the new oil. Every industry needs data scientists. AI/ML integration makes this field grow faster each year.",
    roadmap: [
      { phase: "Class 11–12", title: "Foundation", description: "Build math & logic skills", items: ["Strong Mathematics focus", "Learn basics of programming", "Study statistics concepts", "Explore data sets online"] },
      { phase: "Entrance Exams", title: "Preparation", description: "Enter top programs", items: ["JEE for IITs", "ISI Admission Test", "B.Sc Statistics programs", "Online certifications in data science"] },
      { phase: "College", title: "Skill Building", description: "Master data science tools", items: ["Python, R, SQL mastery", "Machine Learning courses", "Kaggle competitions", "Internships at data-driven companies"] },
      { phase: "Career Start", title: "Launch", description: "Start as data professional", items: ["Data Analyst / Junior Data Scientist", "Build ML models in production", "Domain expertise matters", "₹8–18 LPA starting"] },
      { phase: "5+ Years", title: "Growth", description: "Become a leader", items: ["Senior Data Scientist / ML Engineer", "Lead AI initiatives", "Research publications", "₹25–60 LPA and above"] },
    ],
  },
  {
    id: "entrepreneur",
    title: "Entrepreneur",
    icon: "Lightbulb",
    description: "Build and scale businesses that solve real-world problems and create value for society.",
    shortDescription: "Build businesses that change the world",
    skills: ["Leadership", "Problem Solving", "Finance", "Marketing", "Resilience"],
    averageSalary: "Variable (₹0–100+ LPA)",
    futureDemand: "High",
    demandColor: "text-green-600",
    overview: "Entrepreneurs identify opportunities, take risks, and build businesses. India's startup ecosystem is booming with increasing support from investors and government programs.",
    subjects: ["Any background works", "Business Studies", "Economics", "Computer Science"],
    topColleges: ["IIM Ahmedabad", "IIM Bangalore", "ISB Hyderabad", "XLRI", "SP Jain"],
    entranceExams: ["CAT", "GMAT", "XAT", "No exam needed to start a business!"],
    futureScope: "India is the 3rd largest startup ecosystem. With Digital India and growing internet users, opportunities for new businesses are immense.",
    roadmap: [
      { phase: "Class 11–12", title: "Explore", description: "Start thinking entrepreneurially", items: ["Read business books & biographies", "Start a small side project", "Learn basic coding or design", "Join entrepreneurship clubs"] },
      { phase: "College", title: "Build Skills", description: "Develop foundational skills", items: ["Study business, tech, or design", "Network with other entrepreneurs", "Participate in startup competitions", "Build your first product/service"] },
      { phase: "First Venture", title: "Launch", description: "Start your first business", items: ["Identify a real problem to solve", "Build an MVP (Minimum Viable Product)", "Find early customers", "Bootstrap or seek angel funding"] },
      { phase: "Growth", title: "Scale", description: "Grow your business", items: ["Build a team", "Raise funding if needed", "Scale operations", "Focus on profitability"] },
      { phase: "Long Term", title: "Impact", description: "Create lasting impact", items: ["Mentor other entrepreneurs", "Expand to new markets", "Give back to community", "Build a legacy"] },
     ],
  },
  {
  id: "ai-engineer",
  title: "AI Engineer",
  icon: "Cpu",
  description: "Develop artificial intelligence systems and machine learning models that power modern applications.",
  shortDescription: "Build intelligent AI systems",
  skills: ["Python", "Machine Learning", "Deep Learning", "Statistics", "Data Structures"],
  averageSalary: "₹12–40 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "AI engineers design and deploy machine learning models that help computers learn from data. They work on technologies like chatbots, recommendation systems, and autonomous systems.",
  subjects: ["Mathematics", "Computer Science", "Statistics", "Physics"],
  topColleges: ["IIT Delhi", "IIT Hyderabad", "IISc Bangalore", "IIIT Hyderabad", "BITS Pilani"],
  entranceExams: ["JEE Main", "JEE Advanced", "BITSAT", "GATE (for PG)"],
  futureScope: "Artificial intelligence is transforming every industry. AI engineers are in extremely high demand globally.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Build strong fundamentals", items: ["Focus on Mathematics and Computer Science", "Learn Python basics", "Explore AI tutorials", "Build small coding projects"] },
    { phase: "Entrance Exams", title: "Preparation", description: "Enter top colleges", items: ["Prepare for JEE Main & Advanced", "Practice coding", "Strengthen mathematics", "Join AI clubs or communities"] },
    { phase: "College", title: "Skill Development", description: "Learn AI deeply", items: ["Machine Learning courses", "Deep Learning frameworks", "Participate in AI competitions", "Intern at tech companies"] },
    { phase: "Career Start", title: "Launch", description: "Start working", items: ["AI Engineer role", "Build ML models", "Work on AI products", "₹10–20 LPA starting"] },
    { phase: "5+ Years", title: "Growth", description: "Become an expert", items: ["Lead AI projects", "Research new AI models", "Start AI startup", "₹30–70 LPA and above"] }
     ],
  },
  {
  id: "architect",
    title: "Architect",
    icon: "Building2",
    description: "Design buildings and spaces that are functional, safe, and aesthetically inspiring.",
    shortDescription: "Design spaces that inspire people",
    skills: ["Design Thinking", "AutoCAD", "3D Modeling", "Mathematics", "Creativity"],
    averageSalary: "₹5–20 LPA",
    futureDemand: "Medium",
    demandColor: "text-amber-600",
    overview: "Architects plan and design buildings, homes, and public spaces. They balance aesthetics with functionality, safety, and sustainability.",
    subjects: ["Mathematics", "Physics", "Art & Drawing", "English"],
    topColleges: ["IIT Kharagpur", "SPA Delhi", "SPA Bhopal", "CEPT Ahmedabad", "NIT Trichy"],
    entranceExams: ["NATA", "JEE Main Paper 2", "State-level architecture exams"],
    futureScope: "Smart cities, sustainable architecture, and urban planning create growing demand. Green building design is an emerging specialization.",
    roadmap: [
      { phase: "Class 11–12", title: "Foundation", description: "Develop creative skills", items: ["Take PCM with Art/Drawing", "Practice sketching regularly", "Study architectural history", "Visit notable buildings"] },
      { phase: "Entrance Exams", title: "Preparation", description: "Clear architecture entrance", items: ["NATA (National Aptitude Test)", "JEE Main Paper 2 (B.Arch)", "Practice drawing & aptitude", "Build a portfolio of sketches"] },
      { phase: "B.Arch (5 years)", title: "Architecture School", description: "Master the craft", items: ["Design studios & workshops", "AutoCAD, Revit, SketchUp", "Internship at architecture firms", "Build design portfolio"] },
      { phase: "Career Start", title: "Practice", description: "Begin your career", items: ["Junior architect at a firm", "Get registered with COA", "Develop signature style", "₹5–10 LPA starting"] },
      { phase: "5+ Years", title: "Growth", description: "Establish yourself", items: ["Start your own firm", "Specialize: Interior, Urban, Green", "International projects", "₹15–40 LPA and above"] },
],
  },
  {
  id: "mechanical-engineer",
  title: "Mechanical Engineer",
  icon: "Cog",
  description: "Design machines, engines, and mechanical systems used in industries and transportation.",
  shortDescription: "Build machines and mechanical systems",
  skills: ["Physics", "Mathematics", "CAD", "Thermodynamics"],
  averageSalary: "₹6–20 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Mechanical engineers design and build machines such as engines, turbines, robotics systems, and industrial equipment.",
  subjects: ["Physics", "Mathematics", "Chemistry"],
  topColleges: ["IIT Madras", "IIT Bombay", "IIT Kanpur", "NIT Trichy"],
  entranceExams: ["JEE Main", "JEE Advanced"],
  futureScope: "Mechanical engineers are needed in manufacturing, robotics, automobiles, aerospace, and energy industries.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Strong PCM base", items: ["Focus on Physics & Maths", "Learn basics of mechanics", "Participate in science projects"] },
    { phase: "Entrance Exams", title: "Preparation", description: "Crack engineering entrance", items: ["Prepare for JEE Main & Advanced", "Practice problem solving", "Study mechanics deeply"] },
    { phase: "College", title: "Engineering", description: "Learn mechanical systems", items: ["Thermodynamics", "Machine design", "Internships in industries"] },
    { phase: "Career Start", title: "Launch", description: "Enter industry", items: ["Join automobile or manufacturing companies", "₹6–12 LPA starting"] },
    { phase: "5+ Years", title: "Growth", description: "Advance career", items: ["Lead engineer roles", "₹20–40 LPA possible"] } 
 ],
  },
   {
    id: "civil-engineer",
  title: "Civil Engineer",
  icon: "HardHat",
  description: "Design and build infrastructure such as roads, bridges, buildings, and dams.",
  shortDescription: "Build infrastructure for society",
  skills: ["Structural Design", "Mathematics", "AutoCAD"],
  averageSalary: "₹5–18 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Civil engineers design and supervise construction of infrastructure projects like bridges, highways, airports, and smart cities.",
  subjects: ["Physics", "Mathematics", "Engineering Drawing"],
  topColleges: ["IIT Delhi", "IIT Bombay", "NIT Trichy"],
  entranceExams: ["JEE Main", "JEE Advanced"],
  futureScope: "Infrastructure development and smart cities are creating strong demand for civil engineers.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Strong PCM", items: ["Focus on mathematics", "Understand mechanics", "Participate in engineering projects"] },
    { phase: "Entrance Exams", title: "Preparation", description: "Target engineering colleges", items: ["Prepare for JEE", "Solve engineering problems"] },
    { phase: "College", title: "Civil Engineering", description: "Study infrastructure systems", items: ["Structural design", "Construction technology", "Internships"] },
    { phase: "Career Start", title: "Launch", description: "Join construction companies", items: ["Work in infrastructure firms", "₹5–10 LPA starting"] },
    { phase: "5+ Years", title: "Growth", description: "Advance to senior roles", items: ["Project manager roles", "₹15–30 LPA"] }
],
  },
   {
    id: "cybersecurity-engineer",
  title: "Cybersecurity Engineer",
  icon: "Shield",
  description: "Protect computer systems and networks from cyber attacks and security threats.",
  shortDescription: "Defend systems from hackers",
  skills: ["Networking", "Security Analysis", "Python", "Linux"],
  averageSalary: "₹8–35 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Cybersecurity engineers design systems that protect organizations from hacking, malware, and data breaches.",
  subjects: ["Computer Science", "Mathematics", "Networking"],
  topColleges: ["IIIT Hyderabad", "IIT Delhi", "BITS Pilani"],
  entranceExams: ["JEE Main", "JEE Advanced"],
  futureScope: "Cybercrime is increasing worldwide, making cybersecurity one of the fastest growing careers.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Start with programming", items: ["Learn Python", "Understand networking basics"] },
    { phase: "College", title: "Computer Science", description: "Learn system security", items: ["Ethical hacking", "Network security"] },
    { phase: "Career Start", title: "Launch", description: "Join security teams", items: ["Security analyst roles", "₹8–15 LPA starting"] },
    { phase: "5+ Years", title: "Growth", description: "Advance in security", items: ["Security architect", "₹25–60 LPA"] }
 ],
  },
   {
    id: "pilot",
  title: "Pilot",
  icon: "Plane",
  description: "Operate aircraft to transport passengers and cargo safely across the world.",
  shortDescription: "Fly aircraft professionally",
  skills: ["Navigation", "Decision Making", "Physics"],
  averageSalary: "₹20–90 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Pilots fly commercial airplanes, cargo aircraft, and private jets while ensuring passenger safety.",
  subjects: ["Physics", "Mathematics", "English"],
  topColleges: ["Indira Gandhi Institute of Aeronautics", "Bombay Flying Club"],
  entranceExams: ["DGCA Exams", "CPL Training"],
  futureScope: "India's aviation sector is growing rapidly with new airlines and airports increasing pilot demand.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Take PCM", items: ["Study physics and maths", "Maintain good health"] },
    { phase: "Pilot Training", title: "CPL Training", description: "Commercial pilot license", items: ["Join flying school", "Complete flight hours"] },
    { phase: "Career Start", title: "First Job", description: "Airline entry", items: ["Work as co-pilot", "₹15–30 LPA starting"] },
    { phase: "5+ Years", title: "Growth", description: "Captain role", items: ["Become airline captain", "₹50–90 LPA"] }
],
  },
   {
    id: "ai-research-scientist",
  title: "AI Research Scientist",
  icon: "Cpu",
  description: "Develop new artificial intelligence algorithms and technologies that power modern AI systems.",
  shortDescription: "Create next-generation AI technologies",
  skills: ["Python", "Machine Learning", "Deep Learning", "Mathematics", "Research"],
  averageSalary: "₹20–70 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "AI research scientists create new machine learning models and algorithms used in technologies like chatbots, self-driving cars, and robotics.",
  subjects: ["Mathematics", "Computer Science", "Statistics", "Physics"],
  topColleges: ["IIT Delhi", "IISc Bangalore", "IIIT Hyderabad"],
  entranceExams: ["JEE Main", "JEE Advanced", "GATE"],
  futureScope: "AI is transforming industries worldwide, creating huge demand for AI researchers.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Focus on mathematics & coding", items: ["Learn Python", "Study calculus and statistics", "Explore machine learning basics"] },
    { phase: "College", title: "Computer Science", description: "Study AI deeply", items: ["Machine Learning", "Deep Learning", "Participate in AI competitions"] },
    { phase: "Masters/PhD", title: "Research", description: "Advance research skills", items: ["Publish research papers", "Work on new AI models"] },
    { phase: "Career Start", title: "Launch", description: "Start AI research career", items: ["AI labs or tech companies", "₹15–30 LPA starting"] },
    { phase: "5+ Years", title: "Growth", description: "Become AI expert", items: ["Lead AI research teams", "₹50–100 LPA possible"] }
],
  },
   {
    id: "robotics-engineer",
  title: "Robotics Engineer",
  icon: "Bot",
  description: "Design and build robots used in industries, healthcare, and space exploration.",
  shortDescription: "Build intelligent robots",
  skills: ["Programming", "Electronics", "Mechanical Design", "AI"],
  averageSalary: "₹10–35 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Robotics engineers design machines capable of performing complex tasks automatically.",
  subjects: ["Physics", "Mathematics", "Computer Science"],
  topColleges: ["IIT Kanpur", "IIT Madras", "IIIT Hyderabad"],
  entranceExams: ["JEE Main", "JEE Advanced"],
  futureScope: "Automation and robotics are rapidly growing in manufacturing and space industries.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Build technical skills", items: ["Focus on PCM", "Build simple robots", "Learn Arduino"] },
    { phase: "College", title: "Engineering", description: "Study robotics systems", items: ["Control systems", "AI integration", "Robotics competitions"] },
    { phase: "Career Start", title: "Launch", description: "Enter robotics industry", items: ["Robotics companies", "Automation firms", "₹8–15 LPA"] },
    { phase: "5+ Years", title: "Growth", description: "Become robotics expert", items: ["Lead robotics projects", "₹20–40 LPA"] }
 ],
  },
   {
    id: "cloud-engineer",
  title: "Cloud Engineer",
  icon: "Cloud",
  description: "Build and manage cloud infrastructure used by modern internet applications.",
  shortDescription: "Build internet cloud systems",
  skills: ["AWS", "Linux", "Networking", "DevOps"],
  averageSalary: "₹10–40 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Cloud engineers manage servers and infrastructure for large-scale applications.",
  subjects: ["Computer Science", "Mathematics"],
  topColleges: ["IIT Bombay", "IIIT Hyderabad"],
  entranceExams: ["JEE Main", "JEE Advanced"],
  futureScope: "Almost every company now uses cloud computing.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Learn programming", items: ["Learn Python", "Understand networking basics"] },
    { phase: "College", title: "Computer Science", description: "Learn cloud systems", items: ["AWS certification", "Linux administration"] },
    { phase: "Career Start", title: "Launch", description: "Start cloud career", items: ["Cloud engineer role", "₹10–18 LPA"] },
    { phase: "5+ Years", title: "Growth", description: "Become cloud architect", items: ["Lead cloud infrastructure", "₹30–60 LPA"] }
 ],
  },
   {
    id: "astrophysicist",
  title: "Astrophysicist",
  icon: "Star",
  description: "Study stars, galaxies, and the structure of the universe.",
  shortDescription: "Explore the universe",
  skills: ["Physics", "Mathematics", "Research"],
  averageSalary: "₹8–25 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Astrophysicists study cosmic phenomena such as black holes and galaxies.",
  subjects: ["Physics", "Mathematics"],
  topColleges: ["IISc Bangalore", "IIT Kanpur", "IISER"],
  entranceExams: ["JEE Advanced", "IISER Aptitude Test"],
  futureScope: "Space research and astronomy are expanding rapidly.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Strong physics", items: ["Focus on physics", "Read astronomy books"] },
    { phase: "College", title: "Physics Degree", description: "Study astrophysics", items: ["BSc Physics", "Astronomy research"] },
    { phase: "PhD", title: "Research", description: "Become scientist", items: ["Space research programs"] },
    { phase: "Career Start", title: "Launch", description: "Work in research", items: ["ISRO", "Observatories"] },
    { phase: "5+ Years", title: "Growth", description: "Lead research projects", items: ["International collaborations"] }
],
  },
   {
    id: "product-manager",
  title: "Product Manager",
  icon: "Briefcase",
  description: "Lead the development of products like apps and software platforms.",
  shortDescription: "Lead tech product development",
  skills: ["Business Strategy", "Communication", "Data Analysis"],
  averageSalary: "₹15–50 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Product managers guide the development of products from idea to launch.",
  subjects: ["Business Studies", "Economics", "Computer Science"],
  topColleges: ["IIM Ahmedabad", "IIM Bangalore"],
  entranceExams: ["CAT", "GMAT"],
  futureScope: "Every tech company needs strong product managers.",
  roadmap: [
    { phase: "College", title: "Foundation", description: "Learn tech + business", items: ["Study engineering or business"] },
    { phase: "Career Start", title: "Entry", description: "Join as product analyst", items: ["Work in tech companies"] },
    { phase: "Growth", title: "Product Manager", description: "Lead product teams", items: ["₹20–50 LPA"] }
],
  },
   {
    id: "drone-engineer",
  title: "Drone Engineer",
  icon: "Plane",
  description: "Design, build, and maintain unmanned aerial vehicles (drones) used in industries like delivery, agriculture, defense, and filmmaking.",
  shortDescription: "Build and develop advanced drone technology",
  skills: ["Electronics", "Programming", "Aerodynamics", "Robotics", "Problem Solving"],
  averageSalary: "₹8–30 LPA",
  futureDemand: "High",
  demandColor: "text-green-600",
  overview: "Drone engineers develop unmanned aerial vehicles used for mapping, agriculture monitoring, defense, surveillance, photography, and delivery systems.",
  subjects: ["Physics", "Mathematics", "Electronics", "Computer Science"],
  topColleges: ["IIT Kanpur", "IIT Bombay", "IIT Madras", "IIST Thiruvananthapuram"],
  entranceExams: ["JEE Main", "JEE Advanced"],
  futureScope: "Drone technology is expanding rapidly with applications in delivery services, agriculture monitoring, infrastructure inspection, filmmaking, and defense.",
  roadmap: [
    { phase: "Class 11–12", title: "Foundation", description: "Build strong science and tech basics", items: ["Focus on Physics and Mathematics", "Learn basic electronics", "Explore robotics and drone kits"] },
    { phase: "Entrance Exams", title: "Preparation", description: "Target top engineering colleges", items: ["Prepare for JEE Main and Advanced", "Practice mechanics and physics problems"] },
    { phase: "College", title: "Engineering", description: "Study robotics and aerospace systems", items: ["Learn aerodynamics and control systems", "Work on drone projects", "Join robotics clubs"] },
    { phase: "Career Start", title: "Launch", description: "Start your drone engineering career", items: ["Join drone startups or aerospace companies", "Work on UAV development", "₹8–15 LPA starting"] },
    { phase: "5+ Years", title: "Growth", description: "Advance in drone technology", items: ["Lead UAV engineering projects", "Develop autonomous drones", "₹20–40 LPA and above"] }
       ],
  },
   {
    id: "game-developer",
    title: "Game Developer",
    icon: "Gamepad2",
    description: "Create interactive entertainment experiences through game design and programming.",
    shortDescription: "Create worlds people love to play in",
    skills: ["C++/C#", "Unity/Unreal", "3D Math", "Game Design", "Creative Problem Solving"],
    averageSalary: "₹6–25 LPA",
    futureDemand: "High",
    demandColor: "text-green-600",
    overview: "Game developers design and build video games for various platforms. India's gaming industry is growing rapidly with mobile gaming leading the charge.",
    subjects: ["Mathematics", "Computer Science", "Physics", "Art"],
    topColleges: ["IIT Bombay", "IIIT Hyderabad", "DSK Supinfocom (Pune)", "MIT Institute of Design"],
    entranceExams: ["JEE Main", "UCEED", "NID Entrance", "Portfolio-based admissions"],
    futureScope: "India's gaming market is projected to reach $8.6 billion by 2027. VR/AR gaming and esports are creating new opportunities.",
    roadmap: [
      { phase: "Class 11–12", title: "Start Creating", description: "Begin your game dev journey", items: ["Learn C++ or C# basics", "Try Unity or Godot engine", "Make simple 2D games", "Study game design principles"] },
      { phase: "College", title: "Deep Dive", description: "Formalize your skills", items: ["CS degree or game design program", "Build 3D games", "Learn game physics & AI", "Participate in game jams"] },
      { phase: "Portfolio", title: "Build Portfolio", description: "Create impressive games", items: ["Publish games on itch.io", "Contribute to open source games", "Create a YouTube devlog", "Enter game competitions"] },
      { phase: "Career Start", title: "Go Pro", description: "Enter the industry", items: ["Junior Game Developer", "Mobile game studios", "Indie game development", "₹6–12 LPA starting"] },
      { phase: "5+ Years", title: "Growth", description: "Level up your career", items: ["Lead Game Developer", "Start indie studio", "Specialize in VR/AR", "₹15–40 LPA and above"] },
    ],
  },
  {
    id: "psychologist",
    title: "Psychologist",
    icon: "Brain",
    description: "Study human behavior and mental processes to help people overcome challenges and improve wellbeing.",
    shortDescription: "Help people understand their minds",
    skills: ["Empathy", "Active Listening", "Research", "Critical Thinking", "Communication"],
    averageSalary: "₹4–15 LPA",
    futureDemand: "High",
    demandColor: "text-green-600",
    overview: "Psychologists study the human mind and behavior. With growing mental health awareness in India, this field is rapidly expanding.",
    subjects: ["Psychology", "Biology", "Sociology", "Statistics"],
    topColleges: ["Delhi University", "Christ University", "Tata Institute of Social Sciences", "Jamia Millia Islamia", "Amity University"],
    entranceExams: ["CUET", "Christ University Entrance", "TISS Entrance", "University-specific tests"],
    futureScope: "Mental health awareness is growing rapidly in India. Corporate wellness, school counseling, and online therapy platforms are creating new opportunities.",
    roadmap: [
      { phase: "Class 11–12", title: "Foundation", description: "Explore psychology basics", items: ["Take humanities with Psychology", "Read psychology books", "Volunteer at NGOs", "Observe human behavior"] },
      { phase: "Entrance/Admission", title: "Get In", description: "Enter a good program", items: ["CUET for Delhi University", "Apply to Christ, TISS", "B.A. or B.Sc. Psychology", "Strong academic record helps"] },
      { phase: "Graduation", title: "Learn", description: "Study psychology deeply", items: ["Clinical, cognitive, social psychology", "Research methodology", "Counseling skills training", "Internship at clinics/hospitals"] },
      { phase: "Post Graduation", title: "Specialize", description: "Get your masters", items: ["M.A./M.Sc. Psychology", "Specialize: Clinical, Counseling, I/O", "Supervised clinical hours", "RCI registration for clinical"] },
      { phase: "Practice", title: "Career", description: "Begin practicing", items: ["Private practice or hospital", "School/college counselor", "Corporate wellness programs", "₹5–20 LPA depending on specialization"] },
    ],
  },
];

export function searchCareers(query: string): Career[] {
  const q = query.toLowerCase();
  return careers.filter(
    (c) =>
      c.title.toLowerCase().includes(q) ||
      c.description.toLowerCase().includes(q) ||
      c.skills.some((s) => s.toLowerCase().includes(q))
  );
}

export function getCareerById(id: string): Career | undefined {
  return careers.find((c) => c.id === id);
}

export const interestToCareerMap: Record<string, string[]> = {
  physics: ["aerospace-engineer", "software-engineer", "data-scientist"],
  space: ["aerospace-engineer"],
  coding: ["software-engineer", "game-developer", "data-scientist"],
  programming: ["software-engineer", "game-developer", "data-scientist"],
  drawing: ["architect", "game-developer"],
  design: ["architect", "game-developer"],
  biology: ["doctor", "psychologist"],
  medicine: ["doctor"],
  health: ["doctor", "psychologist"],
  math: ["data-scientist", "software-engineer", "aerospace-engineer"],
  business: ["entrepreneur"],
  startup: ["entrepreneur"],
  games: ["game-developer"],
  gaming: ["game-developer"],
  mind: ["psychologist"],
  behavior: ["psychologist"],
  mental: ["psychologist"],
  art: ["architect", "game-developer"],
  building: ["architect", "aerospace-engineer"],
  data: ["data-scientist", "software-engineer"],
  ai: ["data-scientist", "software-engineer"],
  helping: ["doctor", "psychologist"],
  money: ["entrepreneur", "software-engineer"],
  technology: ["software-engineer", "data-scientist", "game-developer"],
  science: ["aerospace-engineer", "doctor", "data-scientist"],
  creative: ["architect", "game-developer", "entrepreneur"],
};

export function findCareersByInterests(interests: string): Career[] {
  const words = interests.toLowerCase().split(/[\s,]+/);
  const matchedIds = new Set<string>();

  for (const word of words) {
    for (const [key, ids] of Object.entries(interestToCareerMap)) {
      if (word.includes(key) || key.includes(word)) {
        ids.forEach((id) => matchedIds.add(id));
      }
    }
  }

  if (matchedIds.size === 0) {
    return careers.slice(0, 4);
  }

  return careers.filter((c) => matchedIds.has(c.id));
}
