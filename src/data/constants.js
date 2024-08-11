import c from "../images/c-logo.png";
import cplusplus from "../images/c++-logo.png";
import html from "../images/pic.png";
import css from "../images/css-logo-48.png";
import javascript from "../images/javascript-48.png";
import react from "../images/react-16.png";
import node from "../images/nodejs-48.png";
// import sql from "../images/sql.png";
import postgresql from "../images/postgresql-48.png";
import tailwind from "../images/tailwind-css-48.png";
import vitejs from "../images/vite-logo-48.png";
import git from "../images/git-logo-48.png";
import firebase from "../images/firebase-48.png";
import canva from "../images/canva.png";
import Figma from "../images/figma.png";


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {

    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'react':
      return react;
    case 'vitejs':
      return vitejs;
      case 'nodejs':
  return node;
  // case 'sql':
  // return sql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'firebase':
      return firebase;
    case 'git':
      return git;
    case 'canva':
      return canva;
    case 'figma':
      return Figma;
    default:
      break;
  }
}
export const Bio = {
  name: "Poonam Raut",
  roles: [
    "Frontend developer",
    "Programmer",
  ],
  description:
    "I am a passionate individual with a strong enthusiasm for learning. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things. I am always eager to learn new things and enhance my tech skills.",
  github: "https://github.com/Poonamraut040",
  resume:
    "https://drive.google.com/file/d/15QumnTQ6phl-xXts-7ARivgBpJfF9Ccz/view?usp=drivesdk",
  linkedin: "https://www.linkedin.com/in/poonam-raut-47a1b7227//",
  twitter: "https://x.com/PoonamR47035945?t=DQGbmcVH_AX6H2eWon8kUw&s=09",
  insta: "https://www.instagram.com",
  facebook: "https://www.facebook.com",
};


export const experiences = [
  {
    id: 0,
    img:"aii.jpeg",
    role: "AI Intelligence Builder Training",
    company: "FIIT-IIT Bombay & Govt of Madhya Pradesh",
    date: "Jan 2024 - Mar 2024",
    desc: "• Completed a three month certified program focused on AI model development. Developed a potato disease detection model using an image dataset, data augmentation techniques, and CNN,demonstrating skill in machine learning.",
    skills: ["Machine Learning" , "google-collab", "kaggle"
    ],
    doc: "https://drive.google.com/file/d/15SxWsEeqABAhvdnOD6c4iyxCysTje09r/view?usp=drivesdk",
  },
  {
    id: 1,
    img:"Aicte.jpeg",
    role: "AICTE Idea Lab Intern",
    company: "AICTE, INDIA",
    date: "Dec 2022 -Dec 2022",
    desc: "• Designed an Anti-Sleep Alarm Device using an eye blink sensor and Arduino for driver protection from fatalaccidents, enhancing skills in sensor integration and programming.• Gained proficiency in teamwork and time management.",
    skills: ["IOT Sensor", "Python","Arduino"
    ],
    doc: "https://drive.google.com/file/d/1LfSE1T5YG6Da7veknLMY5BmzuNn1hTxz/view?usp=drivesdk",
  },
  {
    id: 2,
    img:"ecell.jpeg",
    role: "Finance Head",
    company: "SATI, Vidisha, India",
    date: "Mar 2022 - Present 2024",
    desc: "• As the Funds and Finance Head of the E-Cell Club at my institute, I worked closely with a team to organize various events and activities. One of our major events was a startup pitch competition. My role involved coordinating with team members to manage the budget, secure sponsorships, and ensure the smooth execution of the event.. Our teamwork and efficient planning resulted in a successful event with high participation and positive feedback from attendees.",
    skills: ["Teamwork", "Leadership","Management"
    ],
  },
  {
    id: 3,
    img:"hackathon.png",
    role: "Participation in Hackathon",
    company: "Hackhive by DAVV, Indore",
    date: "Mar 2024",
    desc: "• Participated in a hackathon organized by DAVV, Indore, where I worked on a problem statement with my teammates. We developed Zenmind, a student mental health tracking system, and won first prize for the best use of ORKES Conductor.",
    skills: ["Teamwork", "Leadership","Management"
    ],
  }
  
];
// 
export const education = [
  {
    id: 0,
    img:"Satilogo.jpeg",
    school: "Samrat Ashok Technological Institute, Vidisha, India",
    date: "Nov 2021 - May 2025",
    grade: "8.76 CGPA",
    desc: "I am currently pursuing a Bachelor's degree in Computer Science and Engineering at Samrat ashok technilogical institute, vidisha. I have completed 6 semesters and have a CGPA of 8.76. I have taken courses in Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Computer Networks, among others. I am also a finance head at entrepreneurship cell, and student coordinator at Cooding Club, SATI, where I am learning and working with a team of talented developers.",
    degree: "Bachelor of Technology - BTech, Computer Science and Engineering",
  },
  {
    id: 1,
    img:"bhalerao.jpeg",
    school: "Bhalerao Junior College, Saoner, India",
    date: "Aug 2019 - Feb 2021",
    grade: "96.6%",
    desc: "I completed my class 12 high school education at Bhalerao Junior College, where I studied General Science.",
    degree: "MH-Board(XII), General Science",
  },
  {
    id: 2,
    img:"sunflower.jpeg",
    school: "Excellence Sunflower School, Sausar, India",
    date: "Apr 2018 - Apr 2019",
    grade: "96.6%",
    desc: "I completed my class 10 education at Excellence Sunflower School, Sausar.",
    degree: "MP-Board(X)",
  },
];
// 
export const projects = [
  {
    id: 11,
    title: "Mega-Blog",
    date: "May 2024 - Jun 2023",
    description:"Developed a blogging app using React, enabling users to perform CRUD operations on posts after a profileauthentication.• Implemented a live visual editor for writing and formatting text articles, enhancing the user experience.• Integrated image upload using Appwrite for backend management of user data, images, and articles.",
    image:
      "reactt.jpeg",
    tags: [
      "React Js",
      "React-redux",
      "Tailwind CSS",
      "Appwrite",
    ],
    category: "React app",
    github: "https://poonamraut040.github.io/newmegablogss/",
    webapp: "https://poonamraut040.github.io/newmegablogss/",
  },
  {
    id: 9,
    title: "ZenMind",
    date: "March 2024",
    description:"Developed a student-focused platform using JavaScript and GSAP for animations to generate personalisedmental health reports and solutions.• Implemented a QA section that provides results, tips, and suggests mind-refreshing activities.• Integrated side-panel advertisements to create a revenue stream for the website.",
    image:"health.jpeg",
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "GSAP",
    ],
    category: "javascript app",
    github: "https://poonamraut040.github.io/Zenmindhealth/",
    webapp: "https://poonamraut040.github.io/Zenmindhealth/",
  },
  {
    id: 0,
    title: "Smart-Farm",
    date: "Feb 2024 - April 2024",
    description:"Developed a responsive website using JavaScript to provide farmers with a single platform for information.• Integrated APIs to fetch and display real-time data on new schemes, farming equipment, and organic farmingtechniques.• Implemented authentication using Firebase as a backend service to ensure secure access to the platform.",
    image:"farm.jpg",
    tags: ["HTML", "CSS", "JAVASCRIPT", "FIREBASE"],
    category: "javascript app",
    github: "http://smartfarmx.netlify.app",
    webapp: "http://smartfarmx.netlify.app",
    
  },
  {
    id: 1,
    title: "Too-Good",
    date: "Oct 2023 - Nov 2023",
    description:"Designed a animated website using Javascript for responsiveness and GSAP for animation, enhancing my skill in UT design.",
    image:
      "animated.jpeg",
    tags: [
      "Javascript",
      "GSAP",
      "HTML",
      "CSS",
    ],
    category: "javascript app",
    github: "https://poonamraut040.github.io/two-good/",
    webapp: "https://poonamraut040.github.io/two-good/",
  },
  {
    id: 2,
    title: "Weather App",
    date: "June 2023",
    description:"Created a weather app using Google API for latest weather information.",
    image:
      "weath.jpeg",
    tags: ["HTML", "CSS", "Javascript"],
    category: "javascript app",
    github: "https://poonamraut040.github.io/weather-app/",
    webapp: "https://poonamraut040.github.io/weather-app/",
  },
  {
    id: 3,
    title: "Potato Disease Detection Model ",
    date: "Jan 2024 - Mar 2024",
    description:"Developed a potato disease detection model using an image dataset from kaggle, data augmentation techniques, and CNN,demonstrating skill in machine learning.",
    image:"potatoimg.jpeg",
    tags: ["Python", "machine Learning", "Google-Collab"],
    category: "machine learning",
    github: "https://drive.google.com/drive/folders/1qhOY8FTGkEBZichahg_c7JQSrVBAakQk",
    webapp: "https://drive.google.com/drive/folders/1qhOY8FTGkEBZichahg_c7JQSrVBAakQk",
  }
  
];
//
// 