import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";


const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000 
};


const illustration = {
  animated: true
};

const greeting = {
  username: "Anuj Patel",
  title: "Hi, I'm Anuj",
  subTitle: emoji(
    "A passionate Full Stack Software Developer having an experience of building Web applications with JavaScript / Reactjs / Nextjs / Nodejs / Nestjs  and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1E0I2BKIXpsql7hEAPXtiQns0a36cyhiq/view?usp=sharing",
  displayGreeting: true
};

// Social Media Links
const socialMediaLinks = {
  github: "https://github.com/anujpatel224",
  linkedin: "https://www.linkedin.com/in/anujpat3l",
  gmail: "anujpatel224@gmail.com",
  medium: "https://medium.com/@anujpatel224",
  display: true
};

// Skills Section
const skillsSection = {
  title: "What I do",
  subTitle:
    "A CURIOUS AND ENERGETIC FULL-STACK DEVELOPER WHO ENJOYS EXPERIMENTING WITH NEW TECH STACKS AND DIVING DEEP INTO APPLICATION SECURITY AND PERFORMANCE OPTIMIZATION.",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Google Analytics/ AWS /clevertap / payment gateways / MoEngage"
    )
  ],

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
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-github"
    }
  ],
  display: true
};

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Birla Institute Of Applied Sciences",
      logo: require("./assets/images/birla-logo.png"),
      subHeader: "Bachelor's in Electronics and Communication Engineering",
      duration: "September 2017 - August 2021"
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Frontend/Design",
      progressPercentage: "70%"
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Databases",
      progressPercentage: "80%"
    },
    {
      Stack: "DSA (working on it)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Development Engineer-I",
      company: "Techjockey",
      companylogo: require("./assets/images/techjockey.png"),
      date: "November 2022 – Present",
      descBullets: [
        "Led full-stack development of internal CRM tools using React.js, Node.js, TypeScript, and MongoDB, improving team productivity and user experience.",

        "Spearheaded the migration of critical modules from PHP to Next.js, introducing Redis caching and Web Workers, resulting in a 15% boost in SEO traffic and significantly faster load times.",

        "Developed backend services for a Flutter-based mobile app, ensuring efficient API performance and data flow.",

        "Built a pipeline to generate and maintain sitemaps for 1M+ URLs via cron jobs, enhancing visibility and indexing across search engines.",

        "Integrated CleverTap, Google Analytics, and AWS services (SES, S3) for real-time user behavior tracking and internal portal enhancements.",

        "Designed and implemented a User Activity Dashboard with Chart.js, giving stakeholders actionable insights into user engagement patterns."
      ]
    },
    {
      role: "Associate Software Developer",
      company: "Byju's",
      companylogo: require("./assets/images/byjus.jpg"),
      date: "Febuary 2022 – November 2022",
      descBullets: ["Designed and developed applications in a Microservices Architecture using Node.js and Express.",
    "Automated AWS Batch jobs for generating invoices and credit notes, improving financial processing efficiency.",
    "Optimized MongoDB and PostgreSQL queries based on query plans, reducing execution time by up to 93%.",
    "Built a dashboard for HSN/SAC code management, streamlining the classification of goods and services.",
    "Worked with both MERN and PERN stacks for backend-heavy projects."]

    },
    {
      role: "Associate Software Developer",
      company: "Nagarro",
      companylogo: require("./assets/images/naggaro.ico"),
      date: "July 2021 – January 2022",
      descBullets: ["Developed and maintained e-commerce websites using Java and Spring Boot within the SAP Hybris platform.",
    "Collaborated with cross-functional teams to deliver high-quality features on tight deadlines.",
    "Implemented enhancements and bug fixes to improve the performance and scalability of enterprise applications.",
    "Followed Agile methodologies and contributed to sprint planning and daily stand-ups."]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true",
  display: true
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
  display: false
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Data Structures & Algorithms Master",
      subtitle: "Solved over 250 Data Structure & Algorithm problems on platforms like LeetCode, GeeksforGeeks, and CodeChef.",
      image: require("./assets/images/dsa.jpg"),
      imageAlt: "DSA Problems Logo",
      footerLink: [
        {
          name: "LeetCode Profile",
          url: "https://leetcode.com/u/anujpatel224/"
        },
        {
          name: "GeeksforGeeks Profile",
          url: "https://www.geeksforgeeks.org/user/anujpatel3/"
        },
        {
          name: "CodeChef Profile",
          url: "https://www.codechef.com/users/anujpatel224"
        }
      ]
    },
    {
      title: "CCNA Routing and Switching",
      subtitle: "Completed CCNA Routing and Switching course with hands-on, lab-oriented training, gaining expertise in networking fundamentals.",
      image: require("./assets/images/ccna.jpg"),
      imageAlt: "CCNA Certification Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/drive/folders/1RBv9hVGzT8D-qTFluZQhVfO1urM2kx7t"
        },
        {
          name: "Course Details",
          url: "https://drive.google.com/drive/folders/1RBv9hVGzT8D-qTFluZQhVfO1urM2kx7t"
        }
      ]
    },
    {
      title: "Hall of Fame Recognition",
      subtitle: "Received Hall of Fame from Netflix, DarkMatter, Planet Hoster, Mailgun for identifying issues such as server misconfiguration, sensitive data exposure, and XSS in their systems.",
      image: require("./assets/images/owasp.webp"),
      imageAlt: "Security Achievement Logo",
      footerLink: [
        {
          name: "Netflix Hall of Fame",
          url: "#"
        },
        {
          name: "DarkMatter Hall of Fame",
          url: "#"
        },
        {
          name: "Planet Hoster Hall of Fame",
          url: "#"
        },
        {
          name: "Mailgun Hall of Fame",
          url: "#"
        }
      ]
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true",
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
  display: false
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
  display: false
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false
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
  number: "+91-9873707647",
  email_address: "anujpatel224@gmail.com"
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
