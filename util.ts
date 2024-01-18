import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import AssetDash from './assets/images/Dashboard 1.png';
import ThreeD from './assets/images/Dashboard 2.png';
import PlatformDesign from './assets/images/Dashboard 3.png';
import Animation from './assets/images/Dashboard 5.png';

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
    companyName: 'Vivi 5 Studio',
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
    imgURl: PlatformDesign,
  },
  {
    name: 'Animation Showreel ',
    subheading: '2D Animation Portfolio  ',
    description:
      'Over the years I have worked on various animation project. This is a Showreel to show all the works that I have done.',
    imgURl: Animation,
  },
];
