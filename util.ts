import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AssetDash from './assets/images/Dashboard 1.png';
import ThreeD from './assets/images/Dashboard 2.png';
import PlatformDesign from './assets/images/Dashboard 3.png';
import Animation from './assets/images/Dashboard 5.png';
import SuperHero from './assets/images/Dashboard 4.jpeg';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const experienceData = [
  {
    companyName: 'Terra',
    position: 'SENIOR VISUAL DESIGNER',
    duration: '(2021 - PRESENT)',
    description:
      'Leading the 3D team and the concept art team to create appealing assets for Platform, also work hands on Ux design for the gaming platform.',
  },
  {
    companyName: 'Vivi 5 Studio',
    position: 'VISUAL DESIGNER',
    duration: '(2020 - 2021)',
    description:
      'Creating storyboards, Mood boards and animation for advertisements and client films.',
  },
  {
    companyName: 'Studio Eeksaurus ',
    position: '2d Visual Artist',
    duration: '(2019 - 2020)',
    description:
      'Creating 2d animation and look frames for  advertisements,thinking of ideas for advertisements.',
  },
  {
    companyName: 'Freelance',
    position: 'Concept Artist / Animator / Ux Designer ',
    duration: '(2018 - PRESENT)',
    description:
      'Create 2d animations, look frames for films and also Ux design for brands. ',
  },
];

export const selectedWorksData = [
  {
    name: 'Terra Dashboard',
    subheading: 'Asset management UX Flow',
    description:
      'Created  Ux flow for managing 30,000+ 3d assets for the internal and external team.',
    imgURl: AssetDash,
  },
  {
    name: '3D Inspirations',
    subheading: 'Game Inspiration setup',
    description:
      'Leading a team of Unity artist and Visual designers to create appealing 3d setup for Terra Games Studio.',
    imgURl: ThreeD,
  },
  {
    name: 'Platform Design ',
    subheading: 'Game Platform Ux Flow',
    description:
      'Leading a team of Unity artist and Visual designers to create appealing 3d setup for Terra Games Studio.',
    imgURl: PlatformDesign,
  },
  {
    name: 'Superhero MVP ',
    subheading: 'Game Introduction',
    description:
      'This was an experimental project where we wanted to explore AI and see how can we use it for our games',
    imgURl: SuperHero,
  },
  {
    name: 'Animation Showreel ',
    subheading: '2D Animation Portfolio  ',
    description:
      'Over the years I have worked on various animation project. This is a Showreel to show all the works that I have done.',
    imgURl: Animation,
  },
];

export const selectedWorksDataInDetail = [
  {
    name: 'Terra Dashboard',
    description:
      'an innovative Asset Dashboard, streamlining the asset management process for internal teams involved in game creation',
    points: [
      "Optimised the accessibility of Terra's extensive library, consisting of over 40,000 3D assets",
      'Create an Naming convention,  Tagging system, and Categorisation, ensuring that every asset could be easily identified .',
      'Collaborated closely with team to understand their challenges, tailoring the UX design to meet their specific needs and optimise their creative processes.',
      'Currently we 150 active users using our Asset Dashboard to search for Game assets. ',
      'Developed a scalable solution for updating and refreshing thumbnails, keeping sync with the evolving design trends and user preferences.',
    ],
    videos: [
      'https://player.vimeo.com/video/900335104?h=8d2667225f',
      'https://player.vimeo.com/video/900335320?h=e9f0c3775a',
    ],
    secondVideoTitle: 'Initial UX prototyping for naming the assets.',
  },
  {
    name: '3D Inspirations',
    description:
      'played a central role in crafting immersive and visually stunning environments for our games.',
    points: [
      'As the Lead Designer, I leading a dynamic team through the complete lifecycle of theme creation.',
      'We have successfully created 30+ versatile genre themes for games. ',
      'I was involved overseeing concept art, 3D modelling, and the intricate process of 3D setup in Unity.',
      'Balancing artistic creativity with the practicalities of game development. This required a deep understanding of technical limitations without compromising on the quality of the themes. ',
      'Establish a seamless workflow by creating a robust pipeline for the team. This facilitated smooth transitions of work from one phase to another, ensuring a continuous and efficient production process.',
    ],
    videos: ['https://player.vimeo.com/video/899038049?h=92436b20e6'],
    secondVideoTitle: 'Stages for creating our halloween Theme',
  },
  {
    name: 'Platform Design',
    description:
      'had the exciting opportunity to contribute to the creation of a gaming platform aimed at fostering healthy competition among kids.',
    points: [
      'Under the guidance of my seniors, I played a pivotal role in crafting the UX flow, ensuring a seamless and engaging experience for young users.',
      'I was involved overseeing concept art, 3D modelling, and the intricate process of 3D setup in Unity.',
      'Designed an tutorial for the avatar selection. Ensured that even the youngest users could easily navigate and personalise their gaming experience. ',
      "Conceptualised the platform to motivate kids to play again, whether to surpass their friends' scores or beat their own personal best.",
      'Implemented a dynamic card system that not only showcased achievements but also featured animations to captivate and encourage kids to play again.',
      'Created an unique Leaderboard that focused to healthy competition among friends. ',
      'Currently we have 1000+ Active young users on the Platform.',
    ],
    videos: [
      'https://player.vimeo.com/video/900336252?h=897482b257',
      'https://player.vimeo.com/video/900335608?h=afe8c98934',
      'https://player.vimeo.com/video/900335477?h=ef45238179',
    ],
  },
  {
    name: 'Superhero Platform MVP',
    description:
      'Spearheaded the UX flow for a groundbreaking Superhero Game platform',
    points: [
      'The platform allowing young users to immerse themselves in the lives of their favourite superheroes.',
      'Designed and conceptualised the superhero characters, including their unique designs and superpowers, contributing to the overall user experience.',
      'Successfully implemented Minimum Viable Product (MVP) concept, enhancing playability and engagement for users.',
      'Used Ai to create Game introductions. An Production process that not only saved valuable resources but also allowed for quicker iterations.',
      'Demonstrated adaptability and resilience by understanding the importance of dropping invested ideas for the sake of broader platform growth. ',
      'Gained valuable insights into project management, user experience, and decision-making in dynamic environments',
    ],
    videos: [
      'https://player.vimeo.com/video/901022110?h=e4db2a4290',
      'https://player.vimeo.com/video/900327669?h=8c31e6fa00',
    ],
    secondVideoTitle: 'Game Introduction Using AI',
  },
  {
    name: 'Animation Showreel',
    description:
      "Animation my first love—it's a medium that brings frames to life and fills me with a unique sense of joy and creativity.",
    points: [
      'While my professional journey may have taken me beyond the animation industry, my dedication to the craft remains unwavering.',
      'In my free time, I seize every opportunity to contribute to projects as diverse as storyboarding to cleanup, ensuring that I stay connected to the art form that fuels my passion.',
      'I actively engage in both big and small projects, ensuring that I am always learning and evolving in the dynamic world of animation.',
      'I have recently got to work for a Film called PIPPA streaming on Amazon and also worked on Netflix Special Features of our Nation Hero (Yet to be released)',
      'This portfolio section not only showcases my recent animations but also emphasises on my commitment to continuous learning and my passion for 2D animation, making it a compelling testament to my skills and dedication.',
    ],
    videos: ['https://player.vimeo.com/video/900334969?h=505dfe1934'],
  },
];

export const fadeInVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};

export const basicFadeInVarianst = {
  initial: {
    opacity: 0,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1 * index,
    },
  }),
};
