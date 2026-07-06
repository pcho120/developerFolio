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
  username: "Hyunkun Cho",
  title: "Hi all, I'm Hyunkun (Paul) Cho",
  subTitle: emoji(
    "Transforming data into holistic solutions through SQL, Python, & Data Visualization | Expert in Ad-hoc Analysis, Computational Modeling, and Risk Assessment"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1LViDJXFQI7p1jQpKTA5avHX13ldBztYm/preview", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/pcho120",
  linkedin: "https://www.linkedin.com/in/hyunkun-paul-cho-9b25a7168/?skipRedirect=true",
  gmail: "hyunkun.cho1230@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A tech stack tailored for data analysis, engineering, and actionable insights",
  skills: [
    "⚡ Leverage a broad range of programming languages and data tools to architect end-to-end Solutions.",
    "⚡ Extract actionable insights through scalable data analysis, relational/non-relational databases, and enterprise BI tools.",
    "⚡ Optimize system workflows, automation pipelines, DevOps setups, and cloud intelligence ecosystems."
  ],
  softwareSkills: [
    { skillName: "Active Directory", fontAwesomeClassname: "fas fa-users-cog", style: { color: "#0078D4" } },
    { skillName: "C#", fontAwesomeClassname: "fas fa-code", style: { color: "#239120" } },
    { skillName: "C/C++", fontAwesomeClassname: "fas fa-terminal", style: { color: "#00599C" } },
    { skillName: "Data Analysis", fontAwesomeClassname: "fas fa-chart-pie", style: { color: "#FF6B6B" } },
    { skillName: "Data Structures & Algorithms", fontAwesomeClassname: "fas fa-project-diagram", style: { color: "#4D96FF" } },
    { skillName: "ERP", fontAwesomeClassname: "fas fa-industry", style: { color: "#0056B3" } },
    { skillName: "Excel/Numbers/Sheets", fontAwesomeClassname: "fas fa-file-excel", style: { color: "#107C41" } },
    { skillName: "Git", fontAwesomeClassname: "fab fa-git-alt", style: { color: "#F05032" } },
    { skillName: "Github Actions", fontAwesomeClassname: "fab fa-github", style: { color: "#2088FF" } },
    { skillName: "HTML/CSS", fontAwesomeClassname: "fab fa-html5", style: { color: "#E34F26" } },
    { skillName: "Inventory Management", fontAwesomeClassname: "fas fa-boxes", style: { color: "#FF9F43" } },
    { skillName: "Java", fontAwesomeClassname: "fab fa-java", style: { color: "#007396" } },
    { skillName: "JavaScript", fontAwesomeClassname: "fab fa-js", style: { color: "#F7DF1E" } },
    { skillName: "LLM", fontAwesomeClassname: "fas fa-brain", style: { color: "#6C5CE7" } },
    { skillName: "Microsoft SQL Server", fontAwesomeClassname: "fas fa-server", style: { color: "#CC292B" } },
    { skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf", style: { color: "#47A248" } },
    { skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js", style: { color: "#339933" } },
    { skillName: "NumPy", fontAwesomeClassname: "fab fa-python", style: { color: "#3776AB" } },
    { skillName: "OpenAI", fontAwesomeClassname: "fas fa-robot", style: { color: "#412991" } },
    { skillName: "OpenAPI", fontAwesomeClassname: "fas fa-exchange-alt", style: { color: "#85EA2D" } },
    { skillName: "PHP", fontAwesomeClassname: "fab fa-php", style: { color: "#777BB4" } },
    { skillName: "Power BI", fontAwesomeClassname: "fas fa-chart-bar", style: { color: "#F2C811" } },
    { skillName: "PowerPoint/Keynote/Slides", fontAwesomeClassname: "fas fa-file-powerpoint", style: { color: "#B7472A" } },
    { skillName: "Power query", fontAwesomeClassname: "fas fa-filter", style: { color: "#0085CAF" } },
    { skillName: "PowerShell", fontAwesomeClassname: "fas fa-terminal", style: { color: "#5391FE" } },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python", style: { color: "#3776AB" } },
    { skillName: "Pytorch", fontAwesomeClassname: "fas fa-fire", style: { color: "#EE4C2C" } },
    { skillName: "Quality Assurance (QA)", fontAwesomeClassname: "fas fa-check-circle", style: { color: "#28A745" } },
    { skillName: "Six Sigma", fontAwesomeClassname: "fas fa-gem", style: { color: "#6F42C1" } },
    { skillName: "SQL", fontAwesomeClassname: "fas fa-database", style: { color: "#00758F" } },
    { skillName: "Svelte", fontAwesomeClassname: "fas fa-cubes", style: { color: "#FF3E00" } },
    { skillName: "Tableau", fontAwesomeClassname: "fas fa-chart-line", style: { color: "#E97627" } },
    { skillName: "TCP/IP", fontAwesomeClassname: "fas fa-network-wired", style: { color: "#4285F4" } },
    { skillName: "Word/Pages/Docs", fontAwesomeClassname: "fas fa-file-word", style: { color: "#2B579A" } }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Toledo",
      logo: require("./assets/images/UniversityOfToledo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "August 2016 - May 2023",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, ...",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis & Business Intelligence", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Engineering & Databases",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Analyst",
      company: "NOX US",
      companylogo: require("./assets/images/NOX-US.png"),
      date: "June 2023 - May 2026",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Data Analysis & Insights: Utilize advanced Excel and SQL (filtering, joins) for data extraction, defect analysis, and reporting to support business decision-making and identify operational trends. ",
        "Process Improvement: Troubleshoot root causes of claims, provide data-driven corrective actions, and suggest workflow improvements based on data findings.",
        "System & IT Liaison: Support ERP system implementation and utilize ERP data for operational analysis, reporting, and providing IT support for internal systems and users.",
        "Automation & Efficiency: Develop and automate data processing workflows using Python and databases to improve reporting accuracy and efficiency.",
        "Documentation & Stakeholder Communication: Document data processes, validate datasets to ensure accuracy, and clearly communicate findings and data issues to internal stakeholders.",
        "Compliance & Technical Standardization: Prepare and work on international certifications (ISO, ASTM, EN, Greenguard, etc.) and program database/server/front-end/back-end related tools to digitalize and analyze collected data."
      ]
    },
    {
      role: "IT Tech",
      company: "University of Toledo",
      companylogo: require("./assets/images/UniversityOfToledo.png"),
      date: "August 2021 - May 2023",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Cross-Functional Collaboration: Collaborate with clients to identify business objectives, lead technical workshops, and provide ongoing support to IT staff and internal departments. ",
        "Problem Solving & Systems Evaluation: Analyze recurring IT issues faced by various departments, leading to enhanced team performance by 20% and achieving a 95%+ Customer Satisfaction (CSAT) score. ",
        "System Implementation & Testing: Support the implementation and quality assurance (QA) testing of new software, including EPIC, and manage electronic assets across multiple departments using Active Directory.",
        "Technical Support: Provided Tier 1-2 technical support for over 21,000 users across academic and administrative departments, testing and deploying software and reimaging computers."
      ]
    },
    {
      role: "Marine",
      company: "Republic of Korea Marine Corps",
      companylogo: require("./assets/images/ROKMC.png"),
      date: "August 2019 - March 2021",
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Administration & Data Management: Managed company members' personal information, prepared extensive materials for long-term training, and scheduled vacations for members.",
        "Technical Operations: Trained to drive, fire, and troubleshoot self-propelled artillery."
      ]
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
  subtitle: "DATA ENGINEERING, ANALYSIS, AND AI ECOSYSTEMS I HAVE BUILT",
  projects: [
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Hospital Dashboard (Power BI)",
      projectDesc: "Built an interactive Power BI dashboard to track, visualize, and analyze critical hospital performance metrics, streamlining operational decision-making.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/HospitalDashboardPower-BI"
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "AutoCare Hospital System",
      projectDesc: "Developed an automated hospital administration and care management system designed to optimize clinical workflows and improve data integration.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/AutoCareHospital"
        }
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Political Tendency Analysis",
      projectDesc: "Engineered a computational modeling pipeline to analyze and classify political orientation and tendencies within textual datasets.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/political_tendency"
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Social Media Political Analytics",
      projectDesc: "Scraped and processed large-scale social media data to evaluate public sentiment and detect shifts in political alignment over time.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/political_tendency_social_media"
        }
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "AI Content Detector",
      projectDesc: "Created an LLM-integrated AI text detector that utilizes natural language processing (NLP) to distinguish human-written content from machine-generated text.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/ai_detector"
        }
      ]
    },
    {
      //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Computer Vision Image Recognition",
      projectDesc: "Designed and trained a deep learning computer vision model optimized for accurate object detection and image recognition tasks.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/Image-recognition"
        }
      ]
    },
    {
      //image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Movie Exploration Web App",
      projectDesc: "Developed a dynamic web application that connects to movie APIs to fetch, filter, and display trending media content in a responsive UI.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/movie_app"
        }
      ]
    },
    {
     //image: require("./assets/images/nextuLogo.webp"),
      projectName: "Automated Email Sender",
      projectDesc: "Built an automation script designed to streamline communication workflows by sending programmatic, targeted emails efficiently.",
      footerLink: [
        {
          name: "View Repository",
          url: "https://github.com/pcho120/Email-Sender"
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};


// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  //number: "+92-0000000000",
  email_address: "hyunkun.cho1230@gmail.com"
};


// Twitter Section
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};


const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  twitterDetails,
  contactInfo,
  isHireable,
  resumeSection
};
