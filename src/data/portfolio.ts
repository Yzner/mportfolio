export const personal = {
  name: "Lorenz Lucio",
  title: "Full Stack Developer",
  tagline: "I build fast, scalable, and beautiful web applications.",
  bio: "I'm a passionate full-stack developer with 1+ years of experience crafting high-performance web applications. I love turning complex problems into elegant, user-friendly solutions. When I'm not coding, I'm exploring new technologies, contributing to open source, or writing about software engineering.",
  email: "llorenz.10022002@gmail.com",
  phone: "(+63)910-495-2354",
  location: "Brgy. Sicsican, Puerto Princesa City, Palawan, Phillipines",
  avatar: "https://i.postimg.cc/hGvYctcF/517247961-4176624725993274-7524187550588782746-n.jpg?auto=compress&cs=tinysrgb&w=400",
  resumeUrl: "https://drive.google.com/file/d/1Hrj_6IgJQ1X8Jf4lf1ZqCxBa4ID-qBhx/view?usp=drive_link",
  social: {
    github: "https://github.com/Yzner",
    linkedin: "https://www.linkedin.com/in/lorenz-lucio-383043366/",
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
  },
};

export const skills = {
  frontend: [
    { name: "React", level: 85 },
    { name: "TypeScript", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "Tailwind CSS", level: 83 },
    { name: "Vue.js", level: 80 },
    { name: "HTML / CSS", level: 92},
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Python", level: 82 },
    { name: "PostgreSQL", level: 82 },
    { name: "MongoDB", level: 82 },
    { name: "GraphQL", level: 80 },
    { name: "REST APIs", level: 90 },
  ],
  creative: [
    { name: "Pencil Sketching", level: 92 },
    { name: "Digital Painting", level: 83 },
    { name: "Character Design", level: 87 },
    { name: "Portrait Drawing", level: 90 },
    { name: "Concept Art", level: 80 },
    { name: "Ink & Markers", level: 88 },
  ],
  design: [
    { name: "Canva", level: 93 },
    { name: "Adobe Photoshop", level: 82 },
    { name: "Adobe Illustrator", level: 80 },
    { name: "Typography & Layout", level: 88 },
    { name: "Brand Identity", level: 84 },
    { name: "Print Design", level: 85 },
  ],
  tools: [
    { name: "Git & GitHub" },
    { name: "Docker" },
    { name: "AWS" },
    { name: "Figma" },
    { name: "Linux" },
    { name: "CI/CD" },
    { name: "Jest" },
    { name: "Vite" },
    { name: "Supabase" },
    { name: "Vercel" },
    { name: "VS Code" },
    { name: "Postman" },
    { name: "Procreate" },
    { name: "Wacom Tablet" },
    { name: "Copic Markers" },
  ],
};


export const projectCategories = [
  {
    id: "software",
    label: "Software Development",
    icon: "💻",
    accent: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/40",
    tagColor: "bg-cyan-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    id: "creative",
    label: "Creative Works",
    icon: "🎨",
    accent: "from-rose-500 to-pink-600",
    borderColor: "border-rose-500/40",
    tagColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
  },
  {
    id: "design",
    label: "Graphic Design",
    icon: "🖌️",
    accent: "from-amber-500 to-orange-600",
    borderColor: "border-amber-500/40",
    tagColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  },
] as const;

export type ProjectCategory = (typeof projectCategories)[number]["id"];

export type DemoType = "github" | "tiktok" | "canva" | "googleDrive" | "website";

export interface DemoLink {
  type: DemoType;
  url: string;
}

export const demoLabels: Record<DemoType, string> = {
  github: "Source Code",
  tiktok: "Watch on TikTok",
  canva: "View on Canva",
  googleDrive: "View on Drive",
  website: "View on Google"
};

export const projects = [
  // Software Development
  {
    id: 1,
    title: "POS and Employee Management System (React + Supabase)",
    description:
      "Developed a comprehensive full-stack business management system using React (Vite) and Supabase, integrating a Role-Based POS system and an Employee Management and Attendance System. The platform supports Admin and Branch user roles with secure authentication, role-based access control, and real-time database operations. The POS module includes product inventory management, sales transactions, stock request approvals, income reporting, and activity logging using Supabase PostgreSQL with Row Level Security and Edge Functions. In addition, implemented an Employee Management System featuring employee CRUD operations, attendance tracking using QR code and finger print authentication, payroll computation, and employee debt management. The system automatically calculates salaries based on days worked, deductions, and loans while generating detailed payroll reports. Admin users can monitor employee attendance, manage debts, and view salary analytics through a centralized dashboard. Built with React, TypeScript, Tailwind CSS, and Supabase for a scalable, secure, and modern web application.",
    image:
      "https://i.postimg.cc/LX26k5dG/Screenshot-(497).png?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Axios", "Vite", "Supabase", "Tailwind CSS", "React Router DOM", "React Context API", "Chart.js", "VS Code"],
    category: "software" as ProjectCategory,
    featured: true,
    demos: [
      { type: "github" as DemoType, url: "https://github.com/Yzner/hardware" },
      { type: "website" as DemoType, url: "https://hardware-rho.vercel.app/" },
    ],
  },
  {
    id: 5,
    title: "3D Portfolio",
    description:
      "I created an interactive 3D portfolio to showcase my projects in a more engaging and modern way, focusing on user experience and visual presentation. This project was also a personal initiative to explore and practice 3D web development. I used React.js for building the user interface and Three.js for rendering and managing 3D graphics, animations, and interactive elements in the browser. I built it during a time when I had no active tasks, as a way to explore other JavaScript technologies such as Three.js and expand my skills beyond standard frontend development. Through this project, I strengthened my understanding of 3D rendering concepts, frontend architecture, and performance optimization while improving my ability to create immersive and interactive web experiences.",
    image:
      "https://i.postimg.cc/L69bnPW8/Screenshot-(498).png?auto=compress&cs=tinysrgb&w=800",
    technologies: ["React", "Three.js", "Blender", "React Three Fiber", "Framer Motion", "Git & GitHub", "VS Code", "Vercel"],
    category: "software" as ProjectCategory,
    featured: true,
    demos: [
      { type: "website" as DemoType, url: "https://lorenzlucio.vercel.app/" },
      { type: "github" as DemoType, url: "https://github.com/Yzner/portfo" },
    ],
  },
  {
    id: 6,
    title: "Digital Art",
    description:
      "Vibrant digital artwork created using professional illustration tools — spanning fantasy landscapes, abstract compositions, and stylized character illustrations with bold color palettes.",
    image:
      "https://images.pexels.com/photos/19694594/pexels-photo-19694594.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Procreate", "Photoshop", "Wacom Tablet", "Digital Painting"],
    category: "creative" as ProjectCategory,
    featured: true,
    demos: [
      { type: "tiktok" as DemoType, url: "https://tiktok.com" },
      { type: "googleDrive" as DemoType, url: "https://drive.google.com" },
    ],
  },
  {
    id: 7,
    title: "Character Drawings",
    description:
      "Original character designs and drawings featuring unique personalities, dynamic poses, and expressive features — from concept sketches to fully rendered character sheets.",
    image:
      "https://images.pexels.com/photos/3783385/pexels-photo-3783385.jpeg?auto=compress&cs=tinysrgb&w=800",
    technologies: ["Ink", "Markers", "Digital Inking", "Character Design"],
    category: "creative" as ProjectCategory,
    featured: false,
    demos: [
      { type: "tiktok" as DemoType, url: "https://tiktok.com" },
      { type: "googleDrive" as DemoType, url: "https://drive.google.com" },
    ],
  },
];

// export const projects = [
//   {
//     id: 1,
//     title: "POS and Employee Management System (React + Supabase)",
//     description:
//       "Developed a comprehensive full-stack business management system using React (Vite) and Supabase, integrating a Role-Based POS system and an Employee Management and Attendance System. The platform supports Admin and Branch user roles with secure authentication, role-based access control, and real-time database operations. The POS module includes product inventory management, sales transactions, stock request approvals, income reporting, and activity logging using Supabase PostgreSQL with Row Level Security and Edge Functions. In addition, implemented an Employee Management System featuring employee CRUD operations, attendance tracking using QR code and finger print authentication, payroll computation, and employee debt management. The system automatically calculates salaries based on days worked, deductions, and loans while generating detailed payroll reports. Admin users can monitor employee attendance, manage debts, and view salary analytics through a centralized dashboard. Built with React, TypeScript, Tailwind CSS, and Supabase for a scalable, secure, and modern web application.",
//     image:
//       "https://i.postimg.cc/LX26k5dG/Screenshot-(497).png?auto=compress&cs=tinysrgb&w=800",
//     technologies: ["React", "Axios", "Vite", "Supabase", "Tailwind CSS", "React Router DOM", "React Context API", "Chart.js", "VS Code"],
//     github: "https://github.com/Yzner/hardware",
//     demo: "https://hardware-rho.vercel.app/",
//     featured: true,
//   },
//   {
//     id: 2,
//     title: "3D Portfolio",
//     description:
//       "I created an interactive 3D portfolio to showcase my projects in a more engaging and modern way, focusing on user experience and visual presentation. This project was also a personal initiative to explore and practice 3D web development. I used React.js for building the user interface and Three.js for rendering and managing 3D graphics, animations, and interactive elements in the browser. I built it during a time when I had no active tasks, as a way to explore other JavaScript technologies such as Three.js and expand my skills beyond standard frontend development. Through this project, I strengthened my understanding of 3D rendering concepts, frontend architecture, and performance optimization while improving my ability to create immersive and interactive web experiences.",
//     image:
//       "https://i.postimg.cc/L69bnPW8/Screenshot-(498).png?auto=compress&cs=tinysrgb&w=800",
//     technologies: ["React", "Three.js", "Blender", "React Three Fiber", "Framer Motion", "Git & GitHub", "VS Code", "Vercel"],
//     github: "https://github.com/Yzner/portfo",
//     demo: "https://lorenzlucio.vercel.app/",
//     featured: true,
//   },
//   {
//     id: 3,
//     title: "Graphic & Layout Designer",
//     description:
//       "Created a wide range of creative designs and customized layouts for tarpaulins, invitations, business materials, documents, and other printed media as part of a small printing business. Managed the complete design and printing process, from layout editing and client consultation to final production and delivery. Developed strong skills in graphic design, creativity, customer service, communication, time management, and business operations while providing professional and visually appealing outputs tailored to client needs.",
//     image:
//       "https://i.postimg.cc/dVVQmnWd/K-(3).png?auto=compress&cs=tinysrgb&w=800",
//     technologies: ["Canva", "Photoshop", "MS Office", "Printing Equipment", "Microsoft Word", "PowerPoint", "Excel", "Other Editing Tools"],
//     github: "https://drive.google.com/drive/folders/1xkePN8PxEpJhSuIKsglD4oFFomdbzw-j?usp=drive_link",
//     demo: "https://www.tiktok.com/@lnkprintstechhub?_r=1&_t=ZS-96hNR8KB03o",
//     featured: false,
//   },
// ];

export const certificates = [
  {
    id: 1,
    title: "Safety on Digitalization: Cybersecurity Inteligence",
    issuer: "Department of Information and Communications Technology (DICT)",
    date: "January 27, 2025",
    credentialUrl: "https://aws.amazon.com/certification",
    image: "https://i.postimg.cc/k5ZX190M/1000398746.jpg?auto=compress&cs=tinysrgb&w=400",
    description: "Participated in the “Safety on Digitalization: Cybersecurity Intelligence” training conducted by the Department of Information and Communications Technology (DICT). Through this training, I learned the importance of cybersecurity awareness, digital safety, and protecting information in modern digital environments. The program enhanced my understanding of cyber threats, safe online practices, and the role of cybersecurity intelligence in securing systems and data. It also strengthened my knowledge of responsible technology use and the importance of maintaining secure digital communication and information systems.",
  },
  {
    id: 2,
    title: "On-The-Job Training",
    issuer: "Department of Information and Communications Technology (DICT)",
    date: "January 27 - March 11, 2025",
    credentialUrl: "https://drive.google.com/file/d/1FfZC-BpefQX17SXR8boEllBeT9wwZpV7/view?usp=drive_link",
    image: "https://i.postimg.cc/gJZc1QpX/1000398742.jpg?auto=compress&cs=tinysrgb&w=400",
    description: "During my 300-hour On-the-Job Training at the Department of Information and Communications Technology (DICT) - Palawan, I actively supported public internet connectivity infrastructure by maintaining and monitoring the FreeWifi4All database. I designed and implemented a dynamic monitoring system utilizing Google Sheets functions and Apps Script to efficiently track the online/offline operational status of Wi-Fi sites across the province. In addition to conducting technical fieldwork, troubleshooting, and network-related tasks, I leveraged my graphic design skills to create high-quality PowerPoint presentations, social media content, and branding materials using Canva for various businesses and organizations.",
  },
  {
    id: 3,
    title: "eGovPH Super App Orientation",
    issuer: "Department of Information and Communications Technology (DICT)",
    date: "January 30, 2025",
    credentialUrl: "https://udemy.com/certificate",
    image: "https://i.postimg.cc/cHn1P2WQ/1000398744.jpg?auto=compress&cs=tinysrgb&w=400",
    description: "The training on the E-Government (eGov) App gave me insights into the government’s digital transformation efforts and how online services are being implemented to improve public access and convenience. I learned during this training that eGov app simplifies transactions between the government and citizens by providing a one-stop digital platform for accessing both national and local government services. It integrates various agencies to streamline processes, improving public service efficiency and transparency. The app aims to enhance convenience for users through features like facial recognition for identity verification and allows users to access essential services with just a few clicks. This digital transformation is led by the Department of Information and Communications Technology (DICT) to modernize the government and improve service delivery.",
  },
  {
    id: 4,
    title: "Security in Digital Signing: PNPKI Orientation",
    issuer: "Department of Information and Communications Technology (DICT)",
    date: "February 03, 2025",
    credentialUrl: "https://coursera.org/verify",
    image: "https://i.postimg.cc/SK5NTqBK/1000398745.jpg?auto=compress&cs=tinysrgb&w=400",
    description: "Through the PNPKI (Philippine National Public Key Infrastructure) training, I gained understanding of the digital security framework that ensures safe, reliable, and authenticated electronic transactions in government and private sectors. I learned how digital certificates, public and private key encryption, and digital signatures are used to maintain the integrity, confidentiality, and non-repudiation of online communications. This training enhanced my knowledge of cybersecurity protocols, the importance of identity verification, and how PNPKI supports e-governance and secure digital transformation in the Philippines.",
  },

  {
    id: 5,
    title: "Freelancing 101: How to Begin Your Work-From-Home Journey",
    issuer: "Department of Information and Communications Technology (DICT)",
    date: "February 16, 2025",
    credentialUrl: "https://university.mongodb.com",
    image: "https://i.postimg.cc/xCLrYS4C/1000398743.jpg?auto=compress&cs=tinysrgb&w=400",
    description: "Participated in the “Freelancing 101: How to Begin Your Work-from-Home Journey” workshop organized by the Palawan Freelancers Community in partnership with the Department of Information and Communications Technology (DICT). Through this workshop, I learned the fundamentals of freelancing, including how to start a work-from-home career, build professional skills, communicate with clients, and explore online job opportunities. The training also enhanced my understanding of remote work practices, personal branding, time management, and the importance of continuous learning in the freelancing industry.",
  },

  {
    id: 6,
    title: "Research Colloquium",
    issuer: "Palawan State University (College of Science)",
    date: "May 05 - 07, 2025",
    credentialUrl: "https://drive.google.com/file/d/1FfZC-BpefQX17SXR8boEllBeT9wwZpV7/view?usp=drive_link",
    image: "https://i.postimg.cc/63v6FgK9/1000398747.jpg?auto=compress&cs=tinysrgb&w=400",
    description: "Completed the JavaScript Essentials 1 certification, gaining foundational knowledge in JavaScript programming, interactive web development, and application creation. Developed skills in designing, developing, and improving JavaScript programs, including working with dynamic web features and user interactions. This certification is aligned with the JS Institute Certified Entry-Level JavaScript Programmer (JSE) standard, strengthening my understanding of modern web development and preparing me for front-end and software development roles.",
  },

  {
    id: 7,
    title: "Bull or Bear: Learn Web3, Build the Future",
    issuer: "Department of Information and Communications Technology (DICT), Bull or Bear, bitskwela, Coins.ph, SONIC, etch.",
    date: "June 27, 2025",
    credentialUrl: "https://cloud.google.com/certification",
    image: "https://i.postimg.cc/P5fd4NRj/1000398748.png?auto=compress&cs=tinysrgb&w=400",
    description: "Participated in Bitskwela’s “Bull or Bear Conference,” a program focused on blockchain innovation, Web3 technologies, and emerging digital trends. Through this event, I gained knowledge about blockchain fundamentals, cryptocurrency ecosystems, Web3 applications, and the growing impact of decentralized technologies in the digital world. The conference also enhanced my understanding of innovation, technology-driven opportunities, and the importance of continuous learning in the rapidly evolving tech industry.",
  },


  {
    id: 8,
    title: "HTML Essentials",
    issuer: "Cisco Networking Academy",
    date: "July 01, 2025",
    credentialUrl: "https://www.netacad.com/certificates/?issuanceId=42adadc6-e67a-4549-87b3-efbd8c69ee5c",
    image: "https://i.postimg.cc/3RjYzQmM/Screenshot-(496).png?auto=compress&cs=tinysrgb&w=400",
    description: "Completed the HTML Essentials certification, gaining a strong foundation in creating and structuring web pages using HTML. Learned how to build responsive and interactive website content through the use of HTML tags, forms, tables, links, and multimedia elements. Developed practical skills in designing functional web pages from scratch, strengthening my understanding of front-end web development fundamentals.",
  },
  {
    id: 9,
    title: "JavaScript Essentials 1",
    issuer: "Cisco Networking Academy",
    date: "September 03, 2025",
    credentialUrl: "https://drive.google.com/file/d/1FfZC-BpefQX17SXR8boEllBeT9wwZpV7/view?usp=drive_link",
    image: "https://i.postimg.cc/nzqRFdST/Screenshot-(494).png?auto=compress&cs=tinysrgb&w=400",
    description: "Completed the JavaScript Essentials 1 certification, gaining foundational knowledge in JavaScript programming, interactive web development, and application creation. Developed skills in designing, developing, and improving JavaScript programs, including working with dynamic web features and user interactions. This certification is aligned with the JS Institute Certified Entry-Level JavaScript Programmer (JSE) standard, strengthening my understanding of modern web development and preparing me for front-end and software development roles.",
  },

];

export const experience = [
  {
    id: 1,
    type: "work",
    title: "Printing Services Owner",
    company: "Lnk Prints & Tech Hub.",
    location: "Brgy. Sicsican, Puerto Princesa City, Palawan, Phillipines",
    period: "February 2026 – Present",
    description: [
      "Managed a small printing business providing design and printing services as an additional source of income.",
      "Handled layout design, editing, and customization for tarpaulins, invitations, business materials, and official documents.",
      "Delivered client-focused solutions by creating visually appealing and professional-quality designs based on customer requirements.",
      "Developed strong skills in customer service, communication, creativity, time management, and business operations.",
      "Managed end-to-end workflow from design creation to printing and final product delivery."
    ],
    technologies: ["Canva", "Photoshop", "MS Office", "Printing Equipment", "Microsoft Word", "PowerPoint", "Excel", "Other Editing Tools"]
  },

  {
    id: 2,
    type: "freelance",
    title: "Programmer",
    company: "Freelance Developer",
    location: "Remote",
    period: "October 2025 – Present",
    description: [
      "Provided software development solutions for small businesses to improve operations and digital workflows.",
      "Built full-stack applications with modern web technologies tailored to client requirements.",
      "Developed scalable backend systems and optimized database performance for efficiency.",
      "Designed responsive and intuitive user interfaces focused on usability and performance.",
      "Collaborated with clients to analyze requirements and deliver practical software solutions."
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "Docker", "Etc."]
  },

  {
    id: 3,
    type: "work",
    title: "Accounting / IT Staff",
    company: "Dezny Consumers Goods Trading (DCGT)",
    location: "Brgy. San Jose, Puerto Princesa City, Palawan, Philippines",
    period: "JULY - August 2025",
    description: [
      "This was my first official work experience as a graduating student, and I am truly grateful to the company for giving me the opportunity despite my limited experience in the field. Although my time there was short, I gained valuable knowledge, hands-on experience, and practical skills that helped me grow as a fresh graduate.",
      "Managed and maintained the company’s inventory system using Kingdee Cloud Stellar, ensuring accurate stock tracking and timely reporting.",
      "Provided technical support for both hardware and software issues across the organization,improving system uptime and employee productivity.",
      "Assisted in day-to-day accounting and IT-related tasks, gaining exposure to real workplace operations and improving my problem-solving skills.",
    ],
    technologies: ["React", "Next.js", "Node.js", "MongoDB"],
  },

  {
    id: 4,
    type: "internship",
    title: "Intern",
    company: "Department of Information and Communications Technology",
    location: "Puerto Princesa City, Palawan, Philippines",
    period: "January - March 2025",
    description: [
      "Designing and implemented a dynamic monitoring system using Google Sheets functions and Apps Script to efficiently track and manage the operational status of Wi-Fi sites (online/offline) throughout Palawan.",
      "Maintained and monitored the FreeWifi4All database.",
      "Assisted with technical fieldwork, troubleshooting, and network-related tasks.",
      "Supported monitoring and reporting of public internet connectivity infrastructure.",
      "anva editing such as creating PowerPoint presentation designs, Facebook posts, social media content, posters, flyers, and logo designs for businesses, organizations, and online platforms.",
    ],
    technologies: ["Google Apps Script", "Google Sheets", "Networking", "Canva", "PhotoShop", "Excel", "Microsoft Word", "PowerPoint"],
  },

  {
    id: 5,
    type: "education",
    title: "BS Computer Science",
    company: "Palawan State University",
    location: "Brgy. Tiniguiban, Puerto Princesa City, Palawan, Philippines",
    period: "2021 – 2025",
    description: [
      "Graduated with honors in Bachelor of Science in Computer Science.",
      "Focused on software engineering, algorithms, and distributed systems.",
      "Led the university web development club for two years.",
      "Participated in academic and collaborative software development projects.",
    ],
    technologies: ["Java", "Python", "C++", "Data Structures"],
  },
];
