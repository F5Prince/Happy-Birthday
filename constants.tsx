
import React from 'react';
import { GalleryImage, Message, PersonalFact, NavLinkItem } from './types';

// SVG Icons (Heroicons example)
const HomeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" /></svg>;
const GalleryIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4V5h12v10zm-4.5-6.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5v2a.5.5 0 00.5.5h2a.5.5 0 00.5-.5v-2zM10 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" /></svg>;
const MessagesIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" /><path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" /></svg>;
const AboutIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>;
const SurpriseIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5 5a3 3 0 015.236-2.047l.053.058.077.076.052.065A3.001 3.001 0 0110 5c0 .39-.072.763-.206 1.102L10 10l5.206-3.898A3.001 3.001 0 0115 5a3 3 0 015.236-2.047l.053.058.077.076.052.065A3.001 3.001 0 0110 5c0 .39-.072.763-.206 1.102L10 10l5.206-3.898A3.001 3.001 0 0115 5a3 3 0 015.236-2.047L10 14.764 4.764 2.953A3 3 0 015 5zm-.206 6.102L10 10l.206 1.102a3.001 3.001 0 01-5.442 2.04l-.053-.058-.077-.076-.052-.065A3 3 0 015 15c0-.39.072-.763.206-1.102L10 10l-.206-1.102A3.001 3.001 0 014.764 2.953L10 14.764l5.236-11.81A3 3 0 0115 5c.39 0 .763.072 1.102.206L10 10l3.898 5.206A3.001 3.001 0 0115 15c0 .39-.072.763-.206 1.102L10 10l5.206 3.898A3.001 3.001 0 0115 15a3 3 0 01-2.953 5.236l-11.81-5.236A3 3 0 015 15c-.39 0-.763-.072-1.102-.206L10 10l-3.898-5.206A3.001 3.001 0 015 5z" clipRule="evenodd" /></svg>;
const GuestbookIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" /><path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd" /></svg>;

// Placeholder icons for "About Sonam" facts (can be replaced with more specific SVGs)
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;
const StarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.846 5.671a1 1 0 00.95.69h5.969c.969 0 1.371 1.24.588 1.81l-4.828 3.522a1 1 0 00-.364 1.118l1.846 5.671c.3.921-.755 1.688-1.54 1.118l-4.828-3.522a1 1 0 00-1.176 0l-4.828 3.522c-.784.57-1.838-.197-1.539-1.118l1.846-5.671a1 1 0 00-.364-1.118L2.487 11.1c-.783-.57-.38-1.81.588-1.81h5.969a1 1 0 00.95-.69L11.049 2.927z" /></svg>;
const GiftIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>;
const MusicIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 6V4M21 3v2" /></svg>;


export const SONAM_BIRTH_DATE = "2025-06-01"; // Example: June 1st, 2025
export const HAPPY_BIRTHDAY_MUSIC_URL = "https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/70472d23a8eedf8c49de1d94118b47e6ad91f1c0/Images/happy-birthday-266285.mp3";
export const IMAGE_CLICK_SOUND_URL = "https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/sparkle-click-sound.mp3"; // Sparkle sound - hosted on GitHub with specific commit hash

// Updated Gallery Images
export const GALLERY_IMAGES_DATA: GalleryImage[] = [
  {
    id: 'sonam1',
    src: 'https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/SNM%201.jpg',
    alt: 'Sonam - Memory 1',
    caption: 'Happy times!',
  },
  {
    id: 'sonam2',
    src: 'https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/SNM%202.jpg',
    alt: 'Sonam - Memory 2',
    caption: 'Sweet smiles',
  },
  {
    id: 'sonam3',
    src: 'https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/SNM%203.jpg',
    alt: 'Sonam - Memory 3',
    caption: 'Adventure awaits',
  },
  {
    id: 'sonam4',
    src: 'https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/SNM%204.jpeg',
    alt: 'Sonam - Memory 4',
    caption: 'Making memories',
  },
  {
    id: 'sonam5',
    src: 'https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/SNM%205.jpeg',
    alt: 'Sonam - Memory 5',
    caption: 'Another beautiful moment',
  },
  {
    id: 'sonam6',
    src: 'https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/SNM%206.jpeg',
    alt: 'Sonam - Memory 6',
    caption: 'Pure joy',
  },
  {
    id: 'sonam7',
    src: 'https://raw.githubusercontent.com/F5Prince/Mahato-family-chart-V2.O/f1101ad50da7ed1f81bec6d0182d137eb68c94b4/Images/SNM%207.jpeg',
    alt: 'Sonam - Memory 7',
    caption: 'Shining bright',
  },
];

// Sample Messages
export const MESSAGES_DATA: Message[] = [
  { id: '1', name: 'F5Prince', text: "Happy Birthday, Sonam! Wishing you a day as beautiful as you are. Hope you have a fantastic year ahead filled with joy, success, and everything you've wished for! 🎉🎂", avatar: 'https://via.placeholder.com/100/FFC0CB/333333?text=F5P' },
  { id: '2', name: 'Another Friend', text: "Sonam, happy birthday! May your day be filled with laughter and lots of cake. Cheers to more amazing memories together! 🥳", avatar: 'https://via.placeholder.com/100/BAE6FD/333333?text=AF' },
  { id: '3', name: 'F5Prince', text: "To the most wonderful Sonam, a very happy birthday! Your kindness and positivity brighten everyone's day. Enjoy your special day to the fullest! ❤️", avatar: 'https://via.placeholder.com/100/D8B4FE/333333?text=F5P' },
];

// Personal Facts for "About Sonam" Page
export const PERSONAL_FACTS_DATA: PersonalFact[] = [
  { id: 'fact1', icon: <HeartIcon />, text: "You has the kindest heart all i know from day one." },
  { id: 'fact2', icon: <StarIcon />, text: "your smile can light up any room when you enters." },
  { id: 'fact3', icon: <GiftIcon />, text: "You are  incredibly talented and creative in everything you does." },
  { id: 'fact4', icon: <MusicIcon />, text: "As an early adult you become the gurdian of your family , youe have faces many dificulties but at the your smile still shining it will make everone happy!" },
  { id: 'fact5', icon: <HeartIcon />, text: "Every hard work will be pay off by GOD i wish your smile will stys forever your face." },
  { id: 'fact6', icon: <StarIcon />, text: "Super adventurous and always up for trying new things." },
  { id: 'fact7', icon: <GiftIcon />, text: "your laughter is absolutely contagious." },
  { id: 'fact9', icon: <HeartIcon />, text: "Loyal to the core and a true friend." },
  { id: 'fact10', icon: <StarIcon />, text: "Makes the world a better place just by being yourself! you are the best" },
];

// Navigation Links
export const NAV_LINKS: NavLinkItem[] = [
  { label: 'Home', path: '/', icon: <HomeIcon /> },
  { label: 'Gallery', path: '/gallery', icon: <GalleryIcon /> },
  { label: 'Wishes', path: '/messages', icon: <MessagesIcon /> },
  { label: 'About Sonam', path: '/about-sonam', icon: <AboutIcon /> },
  { label: 'Surprise!', path: '/surprise', icon: <SurpriseIcon /> },
  { label: 'Guestbook', path: '/guestbook', icon: <GuestbookIcon /> },
];
