/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "pcho120",
  title: "Hi all, I'm Hyunkun (Paul) Cho ",
  subTitle: emoji(
    "Transforming data into holistic solutions through SQL, Python, & Data Visualization | Expert in Ad-hoc Analysis, Computational Modeling, and Risk Assessment"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pcho120",
  linkedin: "https://www.linkedin.com/in/hyunkun-paul-cho-9b25a7168/?skipRedirect=true",
  gmail: "hyunkun.cho1230@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A tech stack tailored for data analysis, engineering, and actionable insights",
  skills: [
    // 1. Data Intelligence & Analytics
    {
      title: "Data Intelligence & Analytics",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Perform advanced statistical analysis and Exploratory Data Analysis (EDA) using Python, NumPy, and PyTorch.",
        "⚡ Design and implement interactive enterprise dashboards using Power BI and Tableau with optimized Power Query workflows.",
        "⚡ Extract actionable business insights from large-scale structured data using professional spreadsheet toolsets (Excel/Sheets)."
      ],
      softwareSkills: [
        { skillName: "Python", fontAwesomeClassname: "fab fa-python", style: { color: "#3776AB" } },
        { skillName: "SQL", fontAwesomeClassname: "fas fa-database", style: { color: "#00758F" } },
        { skillName: "NumPy", fontAwesomeClassname: "fas fa-matrix", style: { color: "#013243" } },
        { skillName: "Pytorch", fontAwesomeClassname: "fas fa-brain", style: { color: "#EE4C2C" } },
        { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar", style: { color: "#F2C811" } },
        { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-pie", style: { color: "#E97627" } },
        { skillName: "Excel", fontAwesomeClassname: "fas fa-file-excel", style: { color: "#107C41" } }
      ]
    },
    // 2. Software & AI Application Engineering
    {
      title: "Software & AI Application Engineering",
      fileName: "FullStackImg",
      skills: [
        "⚡ Develop scalable applications and backend systems utilizing Java, C#, C/C++, PHP, and Node.js.",
        "⚡ Build modern, responsive user interfaces and web applications using Svelte, JavaScript, and HTML/CSS.",
        "⚡ Integrate advanced LLM architectures, OpenAI APIs, and OpenAPI specifications into core software solutions.",
        "⚡ Implement efficient Data Structures & Algorithms to optimize system performance and codebase reliability."
      ],
      softwareSkills: [
        { skillName: "Java", fontAwesomeClassname: "fab fa-java", style: { color: "#007396" } },
        { skillName: "C#", fontAwesomeClassname: "fas fa-code", style: { color: "#239120" } },
        { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js", style: { color: "#F7DF1E" } },
        { skillName: "Svelte", fontAwesomeClassname: "fab fa-svelte", style: { color: "#FF3E00" } },
        { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js", style: { color: "#339933" } },
        { skillName: "PHP", fontAwesomeClassname: "fab fa-php", style: { color: "#777BB4" } },
        { skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot", style: { color: "#412991" } }
      ]
    },
    // 3. Database, Infrastructure & DevOps
    {
      title: "Database, Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architect and manage enterprise relational and Non-Relational databases using MS SQL Server and MongoDB.",
        "⚡ Automate CI/CD pipelines and deployment workflows using Git and GitHub Actions.",
        "⚡ Administer secure network protocols, system configurations, and directory services via TCP/IP, PowerShell, and Active Directory."
      ],
      softwareSkills: [
        { skillName: "Microsoft SQL Server", fontAwesomeClassname: "fas fa-server", style: { color: "#CC292B" } },
        { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf", style: { color: "#47A248" } },
        { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt", style: { color: "#F05032" } },
        { skillName: "GitHub Actions", fontAwesomeClassname: "fab fa-github", style: { color: "#2088FF" } },
        { skillName: "PowerShell", fontAwesomeClassname: "fas fa-terminal", style: { color: "#5391FE" } },
        { skillName: "TCP/IP", fontAwesomeClassname: "fas fa-network-wired", style: { color: "#4285F4" } }
      ]
    },
    // 4. Business Operations & Quality Management
    {
      title: "Business Operations & Quality Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Streamline enterprise workflows, Inventory Management, and supply chain logistics through ERP systems.",
        "⚡ Apply Six Sigma methodologies and Quality Assurance (QA) practices to eliminate process inefficiencies.",
        "⚡ Produce professional technical documentation and corporate presentations utilizing Word and PowerPoint suites."
      ],
      softwareSkills: [
        { skillName: "ERP", fontAwesomeClassname: "fas fa-industry", style: { color: "#0056B3" } },
        { skillName: "Quality Assurance", fontAwesomeClassname: "fas fa-check-circle", style: { color: "#28A745" } },
        { skillName: "Six Sigma", fontAwesomeClassname: "fas fa-gem", style: { color: "#6F42C1" } },
        { skillName: "PowerPoint", fontAwesomeClassname: "fas fa-file-powerpoint", style: { color: "#B7472A" } },
        { skillName: "Word", fontAwesomeClassname: "fas fa-file-word", style: { color: "#2B579A" } }
      ]
    }
  ]
};

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
