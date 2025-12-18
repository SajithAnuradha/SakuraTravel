export type NewsItem = {
  slug: string;
  title: string;
  date: string; // ISO
  excerpt: string;
  content: string[];
};

export const NEWS: NewsItem[] = [
  {
    slug: "travel-restrictions-update",
    title: "Travel Restrictions Update",
    date: "2025-01-15",
    excerpt: "Add your latest advisory information and updates here.",
    content: [
      "This is placeholder content.",
      "Replace with your client’s real news items.",
    ],
  },
];
