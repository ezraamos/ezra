import React from 'react';
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
// import { LuGraduationCap } from "react-icons/lu";

import { Briefcase, GraduationCap } from 'lucide-react';

export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Certificates',
    hash: '#certificates',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated bootcamp | Zuitt',
    location: 'Quezon City, Metro Manila',
    description:
      '360 hours of 360 hours of coding using : Javascript, MongoDb, ExpressJs, NodeJs, ReactJs, NextJs and cloud services such as Vercel, Heroku and MongoDB atlas. Map integration, Data Reporting/Visualization, and Software development Lifecycles were also trained.',
    icon: React.createElement(GraduationCap),
    date: '2020',
  },
  {
    title: 'Full-Stack Developer | epico',
    location: 'Singapore, Singapore',
    description:
      'I worked as a full-stack developer for almost 3 years at a startup company that developed a webcomic platform for readers and scanlators, using Next.js and TypeScript for the frontend and Node.js on AWS for the backend.',
    icon: React.createElement(Briefcase),
    date: '2020 - 2023',
  },
  {
    title: 'Full-Stack Developer | Lanex Corporation',
    location: 'Cebu City, Philippines',
    description:
      'Currently working as a full-stack developer in a software development company, handling end-to-end development mostly with React and Next.js for the frontend,and Node.js for the Backend.',
    icon: React.createElement(Briefcase),
    date: '2023 - present',
  },
] as const;

export const projectsData = [
  {
    title: 'TalkToMe-Doc',
    description:
      'An innovative platform transforming static documents into interactive experiences with real-time AI responses.',
    tags: [
      'Next.js',
      'Typescript',
      'Drizzle',
      'Openai',
      'Pinecone',
      'S3',
      'Stripe',
    ],
    imageUrl: '/talktome.png',
    appUrl: 'https://talktome-doc-dn8r.vercel.app/',
  },
  {
    title: 'Caseme',
    description:
      'An ecommerce application where users can create custom phone cases featuring their favorite images.',
    tags: [
      'Next.js',
      'Typescript',
      'Tailwind',
      'Shadcn-ui',
      'Prisma',
      'NeonDB',
      'S3',
      'Stripe',
    ],
    imageUrl: '/caseme.png',
    appUrl: 'https://caseme-teal.vercel.app/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'Prisma',
  'Drizzle',
  'MongoDB',
  'Zustand',
  'Express',
  'PostgreSQL',
  'OpenAi',
  'Framer Motion',
] as const;

export const certificatesData = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    imageUrl: '/saa-badge.png',
    certUrl:
      'https://www.credly.com/badges/7312c6a6-281a-4e53-97b6-6e50b7de0108',
  },
  {
    name: 'Zuitt Award',
    imageUrl: '/zuitt-award.png',
    certUrl: undefined,
  },
  {
    name: 'Zuitt BootCamp Complettion',
    imageUrl: '/zuitt-completion.png',
    certUrl: undefined,
  },
] as const;
