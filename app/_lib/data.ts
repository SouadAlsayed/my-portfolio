export type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  live: string;
  github: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "The Wild Oasis (Website)",
    description:
      "Customer-facing site for a boutique cabin hotel where guests can browse cabins and make bookings.",
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase"],
    image: "/p1.png",
    live: "https://the-wild-oasis-website-s.vercel.app/",
    github: "https://github.com/SouadAlsayed/the-wild-oasis-website",
  },
  {
    id: 2,
    title: "The Wild Oasis (Dashboard)",
    description:
      "Internal admin dashboard for managing cabins, bookings, guests, and settings.",
    tags: ["React", "React Query", "Styled Components", "Supabase"],
    image: "/p2.png",
    live: "",
    github: "https://github.com/SouadAlsayed/the-wild-oasis",
  },
  {
    id: 3,
    title: "CareerK",
    description:
      "A career platform that helps users explore opportunities and manage their career path (team project).",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    image: "/p3.png",
    live: "",
    github: "https://github.com/omarMo7amed/careerk",
  },
  {
    id: 4,
    title: "Floral Touch",
    description:
      "A flower shop website showcasing bouquets and arrangements with a clean, responsive design.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "/p4.png",
    live: "https://floral-touch.vercel.app/",
    github: "https://github.com/SouadAlsayed/Floral-Touch",
  },
  {
    id: 5,
    title: "WorldWise",
    description:
      "A travel tracker that lets you pin visited cities on an interactive map and keep a log of your trips.",
    tags: ["React", "React Router", "Leaflet", "Context API"],
    image: "/p5.png",
    live: "https://worldwise-weld-seven.vercel.app/",
    github: "https://github.com/SouadAlsayed/worldwise",
  },
  {
    id: 6,
    title: "Movies Quiz",
    description:
      "An interactive quiz app that tests your movie knowledge with scoring and progress tracking.",
    tags: ["React", "JavaScript", "CSS"],
    image: "/p6.png",
    live: "https://movies-quiz-15.vercel.app/",
    github: "https://github.com/SouadAlsayed/movies-quiz",
  },
  {
    id: 7,
    title: "usePopcorn",
    description:
      "Search movies, view details, and keep a rated watchlist with live stats, powered by the OMDb API.",
    tags: ["React", "Hooks", "OMDb API", "CSS"],
    image: "/p7.png",
    live: "https://use-popcorn-2h4ptr3d7-souads-projects-202d9a3a.vercel.app/",
    github: "https://github.com/SouadAlsayed/use-popcorn",
  },
  {
    id: 8,
    title: "Fast React Pizza",
    description:
      "A pizza ordering app with a cart, order placement, and live order tracking.",
    tags: ["React", "Redux Toolkit", "React Router", "Tailwind CSS"],
    image: "/p8.png",
    live: "https://fast-pizza-react-app.vercel.app/",
    github: "https://github.com/SouadAlsayed/fast-react-pizza",
  },
];

export type Skill = {
  name: string;
  category:
    | "Languages"
    | "Frameworks & Libraries"
    | "Styling"
    | "State & Data"
    | "Databases"
    | "Fundamentals"
    | "Tools";
};

export const skills: Skill[] = [
  // Languages
  { name: "HTML", category: "Languages" },
  { name: "CSS", category: "Languages" },
  { name: "JavaScript", category: "Languages" },
  { name: "TypeScript", category: "Languages" },
  { name: "C++", category: "Languages" },
  { name: "SQL", category: "Languages" },

  // Frameworks & Libraries
  { name: "React", category: "Frameworks & Libraries" },
  { name: "Next.js", category: "Frameworks & Libraries" },
  { name: "React Router", category: "Frameworks & Libraries" },
  { name: "Leaflet", category: "Frameworks & Libraries" },

  // Styling
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Styled Components", category: "Styling" },
  { name: "Responsive Design", category: "Styling" },

  // State & Data
  { name: "React Query", category: "State & Data" },
  { name: "Redux Toolkit", category: "State & Data" },
  { name: "Context API", category: "State & Data" },
  { name: "Zustand", category: "State & Data" },
  { name: "REST APIs", category: "State & Data" },

  // Databases
  { name: "SQL", category: "Databases" },
  { name: "Supabase", category: "Databases" },

  // Fundamentals
  { name: "Data Structures", category: "Fundamentals" },
  { name: "Algorithms", category: "Fundamentals" },
  { name: "Object-Oriented Programming", category: "Fundamentals" },
  { name: "Problem Solving", category: "Fundamentals" },
  { name: "Operating Systems", category: "Fundamentals" },
  { name: "Computer Networks", category: "Fundamentals" },

  // Tools
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" },
  { name: "VS Code", category: "Tools" },
];
