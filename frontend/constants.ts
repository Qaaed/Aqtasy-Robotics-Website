import first_meeting from "./assets/first_meeting.jpg";
import website_design from "./assets/website_design.jpg";
export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Our Approach", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Tech Stack", href: "#tech" },
  { name: "Our Journey", href: "#journey" },
  { name: "Team", href: "#team" },
];

export const FEATURES_DATA = [
  {
    title: "Personalized AI",
    description: "Adapts to individual user needs for tailored therapy.",
  },
  {
    title: "Real-time Feedback",
    description: "Provides instant corrections and encouragement.",
  },
  {
    title: "Progress Tracking",
    description: "Monitors and visualizes patient improvement over time.",
  },
  {
    title: "Gamified Exercises",
    description: "Makes therapy engaging and fun to boost motivation.",
  },
  {
    title: "Multi-modal Interaction",
    description:
      "Combines voice, touch, and visual cues for effective learning.",
  },
  {
    title: "Secure & Private",
    description:
      "Ensures all patient data is handled with utmost confidentiality.",
  },
];

export const TECH_STACK_DATA = {
  hardware: [
    { name: "Raspberry Pi 4" },
    { name: "Arduino Nano" },
    { name: "High-Res Display" },
    { name: "Servo Motors" },
    { name: "LiDAR Sensor" },
    { name: "Microphone Array" },
  ],
  software: [
    { name: "React Native" },
    { name: "Python" },
    { name: "TensorFlow" },
    { name: "Google Cloud" },
    { name: "Firebase" },
    { name: "Docker" },
  ],
};

export const TEAM_DATA = [
  {
    name: "Aqtasy Robotics",
    role: "Lead Development",
    image: "https://picsum.photos/seed/aqtasy/400",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Group CS-37",
    role: "Research & AI",
    image: "https://picsum.photos/seed/cs37/400",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Dr. Evelyn Reed",
    role: "Neurolinguistics Advisor",
    image: "https://picsum.photos/seed/evelyn/400",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Ben Carter",
    role: "Lead Hardware Engineer",
    image: "https://picsum.photos/seed/ben/400",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Olivia Chen",
    role: "UX/UI Designer",
    image: "https://picsum.photos/seed/olivia/400",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Samuel Rodriguez",
    role: "Software Developer",
    image: "https://picsum.photos/seed/samuel/400",
    linkedin: "#",
    github: "#",
  },
];

export const JOURNEY_DATA = [
  {
    title: "First Team Meeting",
    description:
      "Finalized on our IOT based Solution and brainstorming ideas related to it.",
    image: first_meeting,
  },
  {
    title: "Website Design Discussion",
    description:
      "After the team finalized on the idea for the robot we went ahead with the website design. Sahetyan was there in heart 😂",
    image: website_design,
  },
  {
    title: "Planning & Brainstorming",
    description:
      "Mapping out the robot's features, design, and the technology stack. Our team held intensive workshops to define the user experience and hardware requirements.",
    image: "https://picsum.photos/seed/planning-new/800/450",
  },
  {
    title: "Component Testing & Prototyping",
    description:
      "Sourcing and testing individual hardware components—servos, sensors, displays—and building the first low-fidelity prototypes to validate our mechanical designs.",
    image: "https://picsum.photos/seed/prototyping/800/450",
  },
  {
    title: "Building the Robot",
    description:
      "The physical assembly of our high-fidelity prototype. This phase involved intricate wiring, 3D printing custom parts, and bringing the robot's form to life.",
    image: "https://picsum.photos/seed/building-robot/800/450",
  },
  {
    title: "Software Integration & Training",
    description:
      "Developing the robot's 'brain'. We integrated our custom AI models for speech recognition and personalized feedback, and connected it to the companion app.",
    image: "https://picsum.photos/seed/software/800/450",
  },
  {
    title: "Final Robot Completed",
    description:
      "After rigorous testing and refinement, the Aphasia Robot is complete—a polished, intelligent, and friendly companion ready to aid in the journey to recovery.",
    image: "https://picsum.photos/seed/final-robot/800/450",
  },
];
