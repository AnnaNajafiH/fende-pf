import futsalTrainingImage from "../assets/images/fende2.jpg";
import footballCampImage from "../assets/images/fende2.jpg";
import trophyImage from "../assets/images/fende2.jpg";
import coachingWorkshopImage from "../assets/images/fende2.jpg";

export const personalInfo = {
  name: "Fatemeh Najafi",
  title: "Football & Futsal Trainer",
  tagline: "Football is part of my life.",
  location: "Isfahan, Iran",
  email: "fatemeh.najafi.h@gmail.com",
  linkedin: "https://www.linkedin.com/in/fatemeh-najafi-h",
  description: `Passionate football and futsal coach with experience training athletes of all ages and skill levels. Continuously expanding knowledge of modern training methods and sports science, aiming to gain international competition experience and contribute actively to the sports community in Germany.`,
  about: {
    subject: "From Passion to Profession: My Journey in Football Coaching",
    intro:
      "Hi, I’m Fatemeh Najafi, a dedicated football and futsal coach from Isfahan, Iran. I focus on improving athletic performance, fostering teamwork, and guiding players to reach their full potential.",
    background:
      "Since 2019, I have trained over 50 athletes, including children, teenagers, and adults, in academies and private coaching. Some of my athletes have participated in provincial competitions and national-level tournaments. I continuously update my knowledge through workshops and webinars in sports science and coaching.",
    passion:
      "My expertise includes anatomy, strength and conditioning, motor learning, and sports psychology. I strive to combine scientific methods with motivation and teamwork to achieve sustainable success for each athlete.",
    endWords:
      "I’m always open to collaboration, international coaching opportunities, and connecting with fellow professionals. Let’s get in touch!",
    technologies: [
      "Team & Individual Training Programs",
      "Physical Conditioning",
      "Tactical & Technical Drills",
      "Sports Psychology & Motivation",
      "Youth Development",
      "Performance Analysis",
      "Injury Prevention & Rehabilitation",
      "Tournament Preparation",
      "Video Analysis Tools",
    ],
  },
};

// Skills have been moved to translation files for better localization
// The original skills data has been removed from here

export const projects = [
  {
    id: 1,
    name: "Youth Football Academy Training Program",
    shortDescription:
      "Comprehensive training program for young football players (ages 10-16).",
    description:
      "Designed and implemented a full training curriculum for youth football players, focusing on skill development, tactical understanding, physical conditioning, and teamwork.",
    detailedDescription: `This program included technical drills, game simulations, physical fitness exercises, and sports psychology sessions. Regular assessments were conducted to monitor player progress, identify strengths and weaknesses, and tailor personalized training plans.  
Some participants advanced to regional and national competitions as a result of this program.`,
    features: [
      "Technical skill development",
      "Teamwork and tactical drills",
      "Physical conditioning & endurance training",
      "Player evaluation & performance tracking",
      "Sports psychology workshops",
    ],
    challenges: [
      "Adapting training plans to players of varying skill levels",
      "Maintaining motivation and engagement over a long season",
      "Integrating scientific methods with practical training",
    ],
    technologies: ["Training software", "Video analysis", "GPS trackers"],
    githubUrl: "",
    liveUrl: "",
    image: footballCampImage,
    gallery: [footballCampImage],
    status: "Ongoing",
    duration: "6 months",
  },
  {
    id: 2,
    name: "Futsal Advanced Coaching Program",
    shortDescription:
      "Specialized futsal training program for competitive players.",
    description:
      "Developed advanced futsal training routines including tactical strategies, small-sided games, and position-specific drills.",
    detailedDescription: `This program was tailored for competitive futsal athletes, emphasizing rapid decision-making, agility, and teamwork. Included video analysis and individualized coaching sessions. Many participants achieved top rankings in local futsal leagues.`,
    features: [
      "Tactical & strategic training",
      "Position-specific drills",
      "Agility & speed improvement",
      "Match analysis & feedback",
    ],
    challenges: [
      "Individualizing coaching for players at different skill levels",
    ],
    technologies: [
      "Video analysis",
      "Heart rate monitoring",
      "Performance tracking software",
    ],
    githubUrl: "",
    liveUrl: "",
    image: futsalTrainingImage,
    gallery: [futsalTrainingImage],
    status: "Completed",
    duration: "3 months",
  },
  {
    id: 3,
    name: "Women's Football Workshop",
    shortDescription:
      "Workshop to enhance female participation and skill development in football.",
    description:
      "Conducted a multi-day workshop aimed at promoting women's football, skill improvement, and fostering a supportive team environment.",
    detailedDescription: `Focused on technical drills, tactical understanding, team cohesion, and confidence-building. Participants received guidance on maintaining fitness, nutrition, and mental preparation for matches.`,
    features: [
      "Female player development",
      "Confidence-building sessions",
      "Tactical and technical training",
      "Teamwork & communication workshops",
    ],
    challenges: [
      "Encouraging participation and motivation among female athletes",
    ],
    technologies: ["Video analysis", "Training apps"],
    githubUrl: "",
    liveUrl: "",
    image: coachingWorkshopImage,
    gallery: [coachingWorkshopImage],
    status: "Completed",
    duration: "1 week",
  },
  {
    id: 4,
    name: "Tournament Coaching & Achievements",
    shortDescription:
      "Guided athletes to participate and win in regional and national tournaments.",
    description:
      "Prepared athletes for competitions, focusing on strategy, physical conditioning, and mental readiness.",
    detailedDescription: `Included personalized coaching, match analysis, and goal-setting to maximize performance. Achievements include top rankings in provincial championships and invitations to national teams.`,
    features: [
      "Tournament preparation",
      "Match strategy planning",
      "Player performance monitoring",
      "Winning provincial and national level titles",
    ],
    challenges: ["Preparing athletes for high-pressure matches"],
    technologies: ["Match analysis software", "Performance tracking apps"],
    githubUrl: "",
    liveUrl: "",
    image: trophyImage,
    gallery: [trophyImage],
    status: "Ongoing",
    duration: "Varies per tournament",
  },
];

export const experience = [
  {
    id: 1,
    title: "Football & Futsal Coach",
    company: "Local Sports Academy",
    location: "Isfahan, Iran",
    startDate: "Jan 2019",
    endDate: "Present",
    description: [
      "Coaching athletes aged 10-25 in football and futsal",
      "Preparing players for provincial and national competitions",
      "Developing training programs focused on technical skills, tactics, and physical conditioning",
      "Mentoring young players and fostering teamwork and discipline",
    ],
  },
  {
    id: 2,
    title: "Private Football Coach",
    company: "Self-Employed",
    location: "Isfahan, Iran",
    startDate: "Mar 2018",
    endDate: "Dec 2018",
    description: [
      "Conducted one-on-one coaching sessions for youth players",
      "Created personalized training plans and monitored progress",
      "Provided technical, tactical, and physical guidance",
    ],
  },
];

export const education = [
  {
    id: 1,
    degree: "Football & Futsal Coaching License – Level 1",
    school: "Iran Football Federation",
    location: "Isfahan, Iran",
    graduationDate: "Feb 2019",
    description: "",
  },
  {
    id: 2,
    degree: "Sports Science Workshops & Webinars",
    school: "Various Online & Local Programs",
    location: "Iran",
    graduationDate: "2020–2024",
    description:
      "Topics included strength & conditioning, injury prevention, sports psychology, and youth development.",
  },
];
