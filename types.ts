
export interface Message {
  id: string;
  name: string;
  text: string;
  avatar?: string; // Optional: URL to an avatar image
}

export interface GuestbookEntry {
  id: string;
  name: string;
  note: string;
  date: string; // ISO string date
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption: string;
}

export interface PersonalFact {
  id: string;
  icon: React.ReactNode; // SVG icon
  text: string;
}

export interface NavLinkItem {
  label: string;
  path: string;
  icon?: React.ReactNode;
}
