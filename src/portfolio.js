/* Updated Portfolio Configuration */

// Import dependencies
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

// Splash Screen
const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

// Summary And Greeting Section
const illustration = { animated: true };

const greeting = {
  username: "Tenzin Thinlay",
  title: "Hi all, I'm Thinlay 👋",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 experienced in crafting modern Web and Mobile applications with React.js, Next.js, Node.js, and AI-driven APIs like OpenAI and Gemini."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=1rR-5intan_XPbeUeuFVygOM86wDeXz5g",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/tenzin333",
  linkedin: "https://www.linkedin.com/in/tenthinlay1",
  gmail: "tenthinlayofficial@gmail.com",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "FULL-STACK DEVELOPER EXPLORING AI-POWERED WEB SOLUTIONS",
  skills: [
    emoji("⚡ Build dynamic, scalable web applications using React.js, Next.js, and modern JavaScript/TypeScript."),
    emoji("⚡ Architect and deploy RESTful & GraphQL APIs with Node.js, Express.js, and MongoDB."),
    emoji("⚡ Integrate AI tools (Gemini, OpenAI, Claude) to enhance user interactivity and automation."),
    emoji("⚡ Elevate UI/UX with responsive designs, optimized loading, and accessibility best practices."),
    emoji("⚡ Deploy CI/CD pipelines with Netlify, Vite, and GitHub Actions for seamless development.")
  ],
  softwareSkills: [
    { skillName: "HTML5", fontAwesomeClassname: "fab fa-html5" },
    { skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt" },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js" },
    { skillName: "TypeScript", fontAwesomeClassname: "fab fa-js-square" },
    { skillName: "React.js", fontAwesomeClassname: "fab fa-react" },
    { skillName: "Next.js", fontAwesomeClassname: "fa-solid fa-layer-group" },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node" },
    { skillName: "Express.js", fontAwesomeClassname: "devicon-express-original" },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-database" },
    { skillName: "MySQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Firebase", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Supabase", fontAwesomeClassname: "fas fa-database" },
    { skillName: "TailwindCSS", fontAwesomeClassname: "fas fa-wind" },
    { skillName: "Material-UI", fontAwesomeClassname: "fas fa-palette" },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt" },
    { skillName: "Webpack", fontAwesomeClassname: "fas fa-cube" },
    { skillName: "Vite", fontAwesomeClassname: "fas fa-bolt" },
    { skillName: "Netlify", fontAwesomeClassname: "fab fa-neos" },
    { skillName: "CI/CD", fontAwesomeClassname: "fas fa-code-branch" },
    { skillName: "Gemini AI", fontAwesomeClassname: "fas fa-robot" },
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-brain" }
  ],
  display: true
};

// Education
const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Surendra Institute of Engineering & Management",
      logo: require("./assets/images/Siem.png"),
      subHeader: "B.Tech in Electronics & Communication Engineering",
      duration: "Jun 2017 - Apr 2021",
      desc: "Developed a Face Recognition System using Python and OpenCV as part of the final year project."
    }
  ]
};

// Tech Proficiency
const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend / Design", progressPercentage: "90%" },
    { Stack: "Backend", progressPercentage: "75%" },
    { Stack: "Programming", progressPercentage: "65%" }
  ],
  displayCodersrank: false
};

// Work Experience
const workExperiences = {
  display: true,
  experience: [
    {
      role: "Senior Developer",
      company: "Tecnotree",
      companylogo: require("./assets/images/tecnotreeLogo.png"),
      date: "Dec 2021 – Present",
      descBullets: [
        "Enhanced API response efficiency by 25% through optimized backend architecture.",
        "Engineered modular UI components using React.js, improving reusability by 40%.",
        "Implemented CI/CD pipelines reducing deployment time by 60%.",
        "Collaborated across teams to integrate AI-driven automation tools, improving workflow accuracy by 30%."
      ]
    },
    {
      role: "Web developer Intern",
      company: "Suven Consultants & Technology Pvt. Ltd",
      companylogo: require("./assets/images/suvenLogo.jpg"),
      date: "Mar 2019 – Apr 2019",
      descBullets: [
        "Improved application load times by 35% through efficient component rendering and lazy loading.",
        "Collaborated with 4 team members to build RESTful APIs, increasing feature delivery speed by 20%.",
        "Conducted unit testing and debugging that reduced post-deployment issues by 25%.",
        "Integrated third-party APIs and payment gateways, enhancing application usability and scalability."
      ]
    }
  ]
};

// Projects
const bigProjects = {
  title: "Big Projects",
  subtitle: "FEATURED PROJECTS AND AI EXPERIMENTS",
  projects: [
    {
      image: require("./assets/images/resumelogo.webp"),
      projectName: "Resume Analyzer",
      projectDesc:
        "AI-driven resume optimization tool leveraging OpenAI API to analyze resumes and provide keyword and content feedback. Built with React, TailwindCSS, and Node.js.",
      footerLink: [{ name: "Visit Website", url: "https://resume-me-ai.netlify.app/home" }]
    },
    {
      image: require("./assets/images/portfoliologo.webp"),
      projectName: "Personal Portfolio Website",
      projectDesc:
        "Interactive React-based portfolio showcasing projects, achievements, and contact details. Fully responsive with modern animations and smooth navigation.",
      footerLink: [{ name: "Visit Website", url: "https://tenzinthinlay.netlify.app/" }]
    },
    {
      image: require("./assets/images/projectImages/quickChat.jpg"),
      projectName: "Quick Chat",
      projectDesc:
        "Real-time chat application with Firebase authentication and live message synchronization built using React and Node.js.",
      footerLink: [{ name: "Visit Website", url: "https://chat-app-alpha-ivory.vercel.app/" }]
    }
  ],
  display: true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Download my resume directly below 👇",
  display: true
};

// Contact Info
const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Let's discuss a project or just connect — my inbox is open!",
  number: "+91-7899767268",
  email_address: "tenthinlayofficial@gmail.com"
};

// Twitter & Footer
const twitterDetails = {
  userName: "twitter",
  display: true
};

const isHireable = true;

const openSource = {

}

const achievementSection = {
}

const blogSection = {
}

const talkSection = {
}

const podcastSection = {
}

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
