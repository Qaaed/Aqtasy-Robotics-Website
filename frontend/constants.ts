//Meeting images
import first_meeting from "./assets/Meeting_Images/first_meeting.jpg";
import website_design from "./assets/Meeting_Images/website_design.jpg";
import black_day from "./assets/Meeting_Images/black__day.jpg";

//profile pictures for team card
import qaaed_pic from "./assets/Group_Members/Qaaed.jpeg";
import aabid_pic from "./assets/Group_Members/Aabid.jpeg";
import yousuf_pic from "./assets/Group_Members/Yousuf2.jpg";
import sahetyan_pic from "./assets/Group_Members/sahetyan.jpg";
import taahir_pic from "./assets/Group_Members/Taahir.jpg";
import ackash_pic from "./assets/Group_Members/Ackaash.jpg";

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
    { name: "Camera module" },
    { name: "High-Res Display" },
    { name: "Servo Motors" },
    { name: "3D Printed Custom Enclosure" },
    { name: "USB Microphone" },
  ],
  software: [
    { name: "React JS" },
    { name: "Express JS" },
    { name: "TensorFlow" },
    { name: "Mongo DB" },
    { name: "Firebase" },
    { name: "Azure AI" },
  ],
};

export const TEAM_DATA = [
  {
    name: "Yousuf Nizar",
    role: "Lead Developer in Hardware, Software and ML",
    image: yousuf_pic,
    linkedin: "https://www.linkedin.com/in/yousufnizar/",
    github: "https://github.com/YousufNizar",
  },
  {
    name: "Ramesh Sahethyan",
    role: "Hardware and Machine Learning Engineer",
    image: sahetyan_pic,
    linkedin: "https://www.linkedin.com/in/ramesh-sahethyan-8ab194349/",
    github: "https://github.com/Sahethyan",
  },
  {
    name: "Ganeshamoorthy Ackaash",
    role: "Machine Learning Engineer",
    image: ackash_pic,
    linkedin: "http://www.linkedin.com/in/ackaash-ganeshamoorthy",
    github: "https://github.com/ackaashg-eng",
  },
  {
    name: "Qaaed Usaim",
    role: "Lead Software Developer",
    image: qaaed_pic,
    linkedin: "https://www.linkedin.com/in/qaaedusaim/",
    github: "https://github.com/Qaaed",
  },
  {
    name: "Aabid Zimal",
    role: "UX/UI Designer and Software Developer",
    image: aabid_pic,
    linkedin: "https://www.linkedin.com/in/aabid-zimal-00a928283/",
    github: "https://github.com/aabid-26",
  },
  {
    name: "Taahir-ul-hassen",
    role: "Lead of Marketing and Finance",
    image: taahir_pic,
    linkedin: "https://www.linkedin.com/in/taahir-mowlana-555316305/",
    github: "https://github.com/taahirmowlana",
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
    image: black_day,
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
