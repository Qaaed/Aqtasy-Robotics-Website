//Initial Start of the Project
import first_meeting from "./assets/Meeting_Images/initial_start/first_meeting.jpg";
import robot_designs from "./assets/Meeting_Images/initial_start/robot_designs.jpg";
import black_day from "./assets/Meeting_Images/initial_start/black__day.jpg";
import beforeFeedback from "./assets/Meeting_Images/initial_start/beforeFeedback.jpg";

//Meeting with Speech Therapist
import therapist from "./assets/Meeting_Images/Buddhima_Meet/therapist1_meeting.jpg";
import therapist_macbook from "./assets/Meeting_Images/Buddhima_Meet/therapist_macbook.jpg";
import therapist2 from "./assets/Meeting_Images/Buddhima_Meet/therapist2.jpg";

//website design images
import website_design1 from "./assets/Meeting_Images/website_design/website_design1.jpg";
import website_design2 from "./assets/Meeting_Images//website_design/website_design2.jpg";
import website_design3 from "./assets/Meeting_Images/website_design/website_design3.jpg";

//sdgp teams meeting
import kyan1 from "./assets/Meeting_Images/Vertex_Meet/Kyan/fullteampic.jpg";
import kyan2 from "./assets/Meeting_Images/Vertex_Meet/Kyan/kyabot.jpg";
import kyan3 from "./assets/Meeting_Images/Vertex_Meet/Kyan/botwork.jpg";
import kyan4 from "./assets/Meeting_Images/Vertex_Meet/Kyan/kyan_meet.jpg";

import novalith1 from "./assets/Meeting_Images/Vertex_Meet/Novalith/meeting_chalindu.jpg";
import novalith2 from "./assets/Meeting_Images/Vertex_Meet/Novalith/vertext_chalindu.jpg";

//profile pictures for team card
import qaaed_pic from "./assets/Group_Members/Qaaed2.jpeg";
import aabid_pic from "./assets/Group_Members/Aabid.jpg";
import yousuf_pic from "./assets/Group_Members/Yousuf2.jpg";
import sahetyan_pic from "./assets/Group_Members/sahetyan.jpg";
import taahir_pic from "./assets/Group_Members/Taahir.jpeg";
import ackash_pic from "./assets/Group_Members/Ackaash.jpg";

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Approach", href: "#about" },
  { name: "Features", href: "#features" },
  { name: "Tech-Stack", href: "#tech" },
  { name: "Pricing", href: "#pricing" },
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
    { name: "High-Res 7inch Touch Display" },
    { name: "Servo Motors" },
    { name: "3D Printed Custom Enclosure" },
    { name: "USB Microphone" },
  ],
  software: [
    { name: "Whisper" },
    { name: "Firebase" },
    { name: "TensorFlow" },
    { name: "PostgreSQL" },
    { name: "Fast API " },
    { name: "Azure AI Services" },
  ],
};

export const TEAM_DATA = [
  {
    name: "Yousuf Nizar",
    role: "Lead of Software, Hardware and Machine Learning",
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
    role: "Machine Learning and Software Developer",
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
    role: "UI/UX Designer and Software Developer",
    image: aabid_pic,
    linkedin: "https://www.linkedin.com/in/aabid-zimal-00a928283/",
    github: "https://github.com/aabid-26",
  },
  {
    name: "Taahir-ul-hassen",
    role: "Researcher and Software Developer",
    image: taahir_pic,
    linkedin: "https://www.linkedin.com/in/taahir-mowlana-555316305/",
    github: "https://github.com/taahirmowlana",
  },
];

export const JOURNEY_DATA = [
  {
    title: "Initial Start of the Project",
    description:
      "Our team members met for the first time to brainstorm robotics-related ideas, where we discussed possible solutions, sketched initial designs, and explored potential functionalities. Although we initially had our own project idea, our supervisor, Mr. Sanjula Samarasekara, suggested developing a robot to assist children who stutter, which led us to explore assistive robotics in healthcare. After consulting a speech therapist, we learned that this approach could result in overcorrection and frustration for children, making it less effective. She instead suggested focusing on aphasia, and after a few days of research into the condition and existing therapies, we refined our concept and finalized our project idea around this focus.",
    images: [first_meeting, black_day, robot_designs, beforeFeedback],
  },
  {
    title: "Meeting with Speech Therapist",
    description:
      "After the team finalized the idea for the robot, we proceeded to collaborate with a certified speech therapist, Ms. Buddhima Samaraweera. She played a crucial role in shaping the concept by providing her expert insights into the challenges faced by individuals with speech difficulties. Through discussions and brainstorming sessions with her, she helped us understand the practical needs of users and suggested innovative features that would make the robot more effective in assisting adults with aphasia. Her guidance was instrumental in refining our initial concept, turning it into a feasible and impactful solution.",
    images: [therapist, therapist2, therapist_macbook],
  },
  {
    title: "Construction of the Marketing website",
    description:
      "Kicked off the website construction by aligning on a compelling thematic concept and a cohesive color palette designed to resonate with the target audience and reinforce brand messaging. This critical first step was documented through key design mockups, setting a clear and actionable visual direction for the entire development team.",
    images: [website_design1, website_design2, website_design3],
  },
  {
    title: "Meeting with Team_RASPBerry",
    description:
      "Our team, Aqtasy Robotics, first had a Google Meet session with the full team of Team RASPBerry, where we discussed our project approach and exchanged ideas. Later, we met them in person at Vertex 25, which was a very informative experience. We observed a live demonstration of their robot and discussed how it works, along with the challenges they faced during development. They shared issues such as hardware limitations and latency affecting the robot’s responsiveness. These interactions provided us with valuable insights that we can apply to improve our own project.",
    images: [kyan1, , kyan2, kyan3, kyan4],
  },
  {
    title: "Meeting with Mr. Chalindu Yohan (Novalith Founder)",
    description:
      "An in-depth discussion was held with Chalindu Yohan, the founder of Team Novalith, whom we met at Vertex, where he also demonstrated his project in person. He explained the core concepts and development approach behind his work, sharing valuable insights gained from his experience, including key technical decisions and lessons learned. During the interaction, he introduced the idea of implementing AI agents to enhance system intelligence and automation, which inspired new directions for improving the overall project approach.",
    images: [novalith1, novalith2],
  },
];
