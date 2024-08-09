import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import netflix from "../assets/projects/Netflix.png";

export const HERO_CONTENT = `As a passionate Full-Stack Developer with 10 months of hands-on experience,
I have developed a strong grasp of the latest front-end and back-end technologies and practices. As a self-learner,
I continuously seek to improve my skills and stay updated with industry trends.
I love working in a team and believe in smart work and effective time management to get the job done efficiently.`;

export const ABOUT_TEXT = `As a passionate Full-Stack Developer with 10 months of hands-on experience, 
I have developed a strong grasp of the latest front-end and back-end technologies and practices,
including HTML, CSS, JavaScript, React.js, Angular, Bootstrap, and Git. As a self-learner,
I continuously seek to improve my skills and stay updated with industry trends.
I love working in a team and believe in smart work and effective time management to get the job done efficiently.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Full stack Developer",
    company: "DecaSync Innovations Private Limited",
    description: `Developed and maintained user interface for web applications using HTML , CSS and JavaScript.Collaborated with UX designers to create responsive and visually appealing web desgins. Worked with back-end developers to integrate RESTful APIs and ensure seamless data flow`,
    technologies: ["Javascript", "React.js", "Angular.js", "mongoDB"],
  },
  {
    year: "2023 - 2023",
    role: "Frontend Developer intern",
    company: "Infolitz Software Pvt. Ltd.",
    description: `Gained in-depth knowledge of web development, including HTML, CSS, and responsive design with Bootstrap. Studied and applied JavaScript frameworks, specifically React and Angular, to build dynamic and interactive user interfaces. Improved understanding of version control systems, particularly Git, and their role in team collaboration and project management`,
    technologies: ["HTML", "CSS", "Angular.js", "Git"],
  },
];

export const PROJECTS = [
  {
    title: "DNS Filtering App",
    image: project1,
    description:
      "Developed a DNS filter application using React.js, which provides control to block unwanted domains on devices and allows access only to approved domain names. Focused on creating an intuitive and responsive user interface for the admin side",
    technologies: ["HTML", "CSS", "React", ],
  },
  {
    title: "YMS",
    image: project2,
    description:
      "YMS is a company that imports soft drinks from other states, with truck deliveries tracked by our managers. The second phase of YMS will involve UI design and API integration",
    technologies: ["HTML", "CSS", "React.js"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind CSS"],
  },
  {
    title: "NetFlix Clone",
    image: netflix,
    description:
      "Developed a Netflix clone using React.js, which allows users to search for movies and shows and view their details. Focused on creating an intuitive and responsive user interface for the user side",
    technologies: ["HTML", "CSS", "React.js"],
  },
];

export const CONTACT = {
  address: "Kooniparambill House , Thrissur Kerala",
  phoneNo: "+91 8078247164",
  email: "karthikeyankk1000@gmail.com",
};
