import type { ResumeData } from "@/types";

export const resumeData: ResumeData = {
  personalInfo: {
    name: "Hussam Odeh",
    title: "Full Stack Web Developer",
    email: "hussamfahmi.work@gmail.com",
    phone: "+971 508318410",
    location: "Abu Dhabi, UAE",
    linkedin: "https://linkedin.com/in/hussam-odeh",
    github: "https://github.com/HussamOdeh12",
    portfolio: "https://hussam-odeh.vercel.app",
    summary:
      "Full Stack Web Developer with hands-on experience in the MERN stack and a strong background in technical support within government digital services. Proven ability to develop scalable web applications, deliver seamless user experiences, and troubleshoot platform issues. Committed to continuous learning with a strong drive to deepen knowledge in artificial intelligence.",
  },
  summary:
    "Full Stack Web Developer with hands-on experience in the MERN stack (MongoDB, Express.js, React.js, Node.js) and a strong background in technical support within a government digital services environment. Proven ability to develop scalable web applications, deliver seamless user experiences, and troubleshoot platform issues. Committed to continuous learning and a strong drive to deepen my knowledge in artificial intelligence, exploring how it can enhance and shape the future of technology.",
  experiences: [
    {
      company: "Abu Dhabi Municipality",
      role: "Technical Support — TAMM & SmartHub Platforms",
      startDate: "Jan 2024",
      endDate: "Present",
      achievements: [
        "Assisted customers in applying for Abu Dhabi Municipality (ADM) services through the TAMM and SmartHub platforms, ensuring smooth and accurate submissions.",
        "Guided users step-by-step through service requests and applications, helping them avoid system errors and service-related issues.",
        "Provided clear explanations of service requirements, application procedures, and platform usage to ensure successful completion of requests.",
        "Ensured customers completed their applications efficiently by offering practical solutions and continuous support.",
      ],
      technologies: ["TAMM", "SmartHub", "Customer Support", "Government Services"],
    },
  ],
  projects: [
    {
      title: "Swift Chat App",
      description:
        "A real-time chat application that facilitates seamless communication between users, offering an intuitive and engaging chat experience.",
      technologies: ["React", "Node.js", "Material-UI", "ChatEngine.io"],
      features: [
        "Real-time messaging with instant delivery",
        "Intuitive and responsive user interface",
        "Seamless cross-platform communication",
      ],
      githubUrl: "https://github.com/HussamOdeh12",
      liveUrl: "#",
    },
    {
      title: "Aspa Tasks",
      date: "Jun 2023 – Jul 2023",
      description:
        "A full-stack team task management application that enables team members to publish and manage tasks, with completed tasks displayed as cards for improved team visibility.",
      technologies: ["Node.js", "React", "MongoDB", "Material-UI"],
      features: [
        "Task publishing and management for team collaboration",
        "Visual card display for completed tasks",
        "Enhanced team communication and coordination",
        "Project progress tracking and alignment",
      ],
      githubUrl: "https://github.com/HussamOdeh12",
      liveUrl: "#",
    },
    {
      title: "Medical Share — Graduation Project",
      date: "Feb 2022 – Jul 2022",
      description:
        "A platform enabling users to find donors of medical supplies whose owners have abandoned them after completing treatment. Achieved top-ten placement in the Programming Communities Competition of the One Million Jordanian Programmers initiative.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js"],
      features: [
        "Medical supply donation matching platform",
        "User-friendly donor discovery system",
        "Award-winning project design",
      ],
      githubUrl: "#",
      liveUrl: "#",
    },
  ],
  skills: [
    { name: "HTML", level: 95, category: "Frontend" },
    { name: "CSS", level: 90, category: "Frontend" },
    { name: "SCSS", level: 80, category: "Frontend" },
    { name: "JavaScript", level: 88, category: "Languages" },
    { name: "React.js", level: 85, category: "Frontend" },
    { name: "Node.js", level: 82, category: "Backend" },
    { name: "Express.js", level: 80, category: "Backend" },
    { name: "MongoDB", level: 78, category: "Databases" },
    { name: "Material-UI", level: 82, category: "Frameworks" },
    { name: "Tailwind CSS", level: 85, category: "Frameworks" },
    { name: "Bootstrap", level: 80, category: "Frameworks" },
    { name: "Git & GitHub", level: 85, category: "Tools" },
    { name: "Figma", level: 70, category: "Design" },
    { name: "Flutter", level: 55, category: "Frameworks" },
    { name: "Self-Motivation", level: 95, category: "Soft Skills" },
    { name: "Continuous Learning", level: 95, category: "Soft Skills" },
    { name: "MS Office", level: 88, category: "Tools" },
  ],
  education: [
    {
      institution: "Zarqa University",
      degree: "Bachelor's",
      field: "Internet Technology",
      startDate: "Sep 2018",
      endDate: "Jul 2022",
      location: "Zarqa, Jordan",
      gpa: "84.3",
      achievement: "1st in the cohort",
    },
  ],
  certifications: [
    {
      title: "1 Million Prompters",
      provider: "Dubai Future Foundation",
      date: "Jun 2026 – Jul 2026",
      description: [
        "Gained foundational knowledge of AI concepts, capabilities, and prompt literacy across industries.",
        "Learned prompt engineering techniques for ChatGPT, Copilot, Gemini, and Claude.",
        "Applied AI to workplace productivity through task automation, email drafting, and data analysis.",
        "Explored generative AI tools (Midjourney, DALL-E, Suno.ai, Runway ML) for creative content.",
      ],
      type: "course",
    },
    {
      title: "Full-Stack JavaScript Development",
      provider: "Aspire EPIC Academy",
      date: "Mar 2023 – Jul 2023",
      description: [
        "Completed a comprehensive 3-month training program focused on Full-Stack JavaScript Development.",
        "Proficient in JavaScript and MERN stack with a solid foundation through dedicated learning and Udemy courses.",
        "Acquired in-depth knowledge and practical skills in Node.js, React, MongoDB, and more.",
        "Implemented a complete project using all techniques and tools learned.",
      ],
      type: "training",
    },
    {
      title: "Web Development and Design",
      provider: "Education for Employment (EFE) — Jordan",
      date: "Feb 2023 – Mar 2023",
      description: [
        "Completed a 40-hour training course on Web Development and Design.",
        "Acquired fundamental skills in website development using HTML, CSS, and JavaScript.",
        "Completed various tasks and practical exercises including calculator and BMI calculation projects.",
      ],
      type: "course",
    },
    {
      title: "Flutter Developer Internship",
      provider: "Internship Program",
      date: "Sep 2021 – Dec 2021",
      description: [
        "Completed an intensive internship focused on Flutter app development.",
        "Gained practical experience in creating cross-platform mobile applications.",
      ],
      type: "internship",
    },
  ],
  socialLinks: [
    { name: "GitHub", url: "https://github.com/HussamOdeh12", icon: "github" },
    { name: "LinkedIn", url: "https://linkedin.com/in/hussam-odeh", icon: "linkedin" },
    { name: "Email", url: "mailto:hussamfahmi.work@gmail.com", icon: "mail" },
  ],
};
