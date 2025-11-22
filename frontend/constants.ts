//Initial Start of the Project
import first_meeting from "./assets/Meeting_Images/first_meeting.jpg";
import robot_designs from "./assets/Meeting_Images/robot_designs.jpg";
import black_day from "./assets/Meeting_Images/black__day.jpg";
import beforeFeedback from "./assets/Meeting_Images/beforeFeedback.jpg";

//Meeting with Speech Therapist
import SpeechTherapist from "./assets/Meeting_Images/SpeechTherapist.jpg";
import taahir_aabid from "./assets/Meeting_Images/taahir_aabid.jpg";

//website design images
import website_design from "./assets/Meeting_Images/website_design.jpg";

//profile pictures for team card
import qaaed_pic from "./assets/Group_Members/Qaaed.jpeg";
import aabid_pic from "./assets/Group_Members/Aabid.jpeg";
import yousuf_pic from "./assets/Group_Members/Yousuf2.jpg";
import sahetyan_pic from "./assets/Group_Members/sahetyan.jpg";
import taahir_pic from "./assets/Group_Members/Taahir.jpg";
import ackash_pic from "./assets/Group_Members/Ackaash.jpg";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Approach", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Tech-Stack", href: "#tech" },
  { name: "Team", href: "#team" },
  { name: "Journey", href: "#journey" },
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
    title: "Initial Start of the Project",
    description:
      "Brainstorming ideas related to robotics, we explored various approaches to address the problem and worked on conceptualizing an effective solution. This process included sketching preliminary designs, discussing potential functionalities, and gradually shaping the overall design of the robot.",
    images: [first_meeting, black_day, robot_designs, beforeFeedback],
  },
  {
    title: "Meeting with Speech Therapist",
    description:
      "After the team finalized the idea for the robot, we proceeded to collaborate with a certified speech therapist, Ms. Buddhima Samaraweera. She played a crucial role in shaping the concept by providing her expert insights into the challenges faced by individuals with speech difficulties. Through discussions and brainstorming sessions with her, she helped us understand the practical needs of users and suggested innovative features that would make the robot more effective in assisting adults with aphasia. Her guidance was instrumental in refining our initial concept, turning it into a feasible and impactful solution.",
    images: [SpeechTherapist, taahir_aabid],
  },
  {
    title: "Construction of the Marketing website",
    description:
      "Discussed the theme of the website and decided on the color palette",
    images: [website_design, first_meeting],
  },
  {
    title: "Component Testing & Prototyping",
    description:
      "Sourcing and testing individual hardware components—servos, sensors, displays—and building the first low-fidelity prototypes to validate our mechanical designs.",
    images: [],
  },
];
