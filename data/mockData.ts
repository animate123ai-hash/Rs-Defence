
import { Course, Review } from '../types';

export const courses: Course[] = [
  {
    id: 'math-101',
    title: 'Advanced Calculus',
    category: 'Mathematics',
    description: 'Master the fundamentals of calculus, from limits to series.',
    longDescription: 'This comprehensive course covers everything you need to know about advanced calculus. We will delve deep into multivariable calculus, vector calculus, and differential equations. The course is structured with video lectures, detailed notes, and practice problems to ensure a thorough understanding.',
    imageUrl: 'https://picsum.photos/seed/math/600/400',
    videos: [
      { id: 'v1', title: 'Introduction to Limits', embedUrl: 'https://www.youtube.com/embed/_w_C9G2ockg' },
      { id: 'v2', title: 'Understanding Derivatives', embedUrl: 'https://www.youtube.com/embed/9vKqVkLu_II' },
    ],
    studyMaterials: [
      { id: 'sm1', title: 'Chapter 1: Limits and Continuity', fileUrl: '/sample.pdf' },
      { id: 'sm2', title: 'Practice Problems - Set A', fileUrl: '/sample.pdf' },
    ],
  },
  {
    id: 'phy-201',
    title: 'Quantum Physics',
    category: 'Physics',
    description: 'Explore the strange and fascinating world of quantum mechanics.',
    longDescription: 'Quantum Physics is a cornerstone of modern physics. This course provides a rigorous introduction to its principles, including wave-particle duality, the Schrödinger equation, and quantum entanglement. Ideal for aspiring physicists and engineers.',
    imageUrl: 'https://picsum.photos/seed/physics/600/400',
    videos: [
      { id: 'v3', title: 'The Double-Slit Experiment', embedUrl: 'https://www.youtube.com/embed/aXvHfCe2bFI' },
    ],
    studyMaterials: [
      { id: 'sm3', title: 'Lecture Notes: Wave Functions', fileUrl: '/sample.pdf' },
    ],
  },
  {
    id: 'chem-301',
    title: 'Organic Chemistry',
    category: 'Chemistry',
    description: 'Learn about the structure, properties, and reactions of organic compounds.',
    longDescription: 'Organic Chemistry is often a challenging subject, but this course breaks it down into understandable modules. We cover nomenclature, reaction mechanisms, and spectroscopy. Interactive examples and real-world applications make learning engaging and effective.',
    imageUrl: 'https://picsum.photos/seed/chemistry/600/400',
    videos: [
      { id: 'v4', title: 'Basics of Nomenclature', embedUrl: 'https://www.youtube.com/embed/hp-4-P23g54' },
      { id: 'v5', title: 'SN1 vs SN2 Reactions', embedUrl: 'https://www.youtube.com/embed/h5xvaA1aCjE' },
    ],
    studyMaterials: [
      { id: 'sm4', title: 'Reaction Mechanism Cheat Sheet', fileUrl: '/sample.pdf' },
      { id: 'sm5', title: 'Spectroscopy Guide', fileUrl: '/sample.pdf' },
    ],
  },
  {
    id: 'cs-401',
    title: 'Data Structures & Algorithms',
    category: 'Computer Science',
    description: 'Build a strong foundation in essential data structures and algorithms.',
    longDescription: 'A must-know for any software engineer. This course covers arrays, linked lists, stacks, queues, trees, graphs, and various sorting and searching algorithms. Each topic is accompanied by coding exercises in Python.',
    imageUrl: 'https://picsum.photos/seed/cs/600/400',
    videos: [
        { id: 'v6', title: 'Big O Notation Explained', embedUrl: 'https://www.youtube.com/embed/v4cd1O4zkGw' },
    ],
    studyMaterials: [
      { id: 'sm6', title: 'Complexity Chart', fileUrl: '/sample.pdf' },
    ],
  },
];

export const reviews: Review[] = [
    {
        id: 'r1',
        studentName: 'Anjali Sharma',
        course: 'Advanced Calculus',
        rating: 5,
        comment: 'The instructor explains complex topics in a very simple and understandable way. The practice materials were very helpful!',
        avatarUrl: 'https://i.pravatar.cc/150?img=1'
    },
    {
        id: 'r2',
        studentName: 'Rohan Verma',
        course: 'Quantum Physics',
        rating: 4,
        comment: 'A challenging but rewarding course. It really opened my eyes to the world of physics. Highly recommended.',
        avatarUrl: 'https://i.pravatar.cc/150?img=3'
    },
    {
        id: 'r3',
        studentName: 'Priya Mehta',
        course: 'Organic Chemistry',
        rating: 5,
        comment: 'I finally understand reaction mechanisms! The cheat sheets are a lifesaver. Thank you, RS Classes!',
        avatarUrl: 'https://i.pravatar.cc/150?img=5'
    }
];
