export type PriceRange = "below-100k" | "100k-200k" | "200k-300k" | "above-300k";
export type DaysRange = "3-4" | "4-5" | "5-6" | "6-7" | "7-8" | "9-10" | "10-11";
export type PackageType = "adventure" | "family-holiday";

export type Tour = {
  slug: string;
  name: string;
  tag?: "GROUP TOUR" | "PRIVATE TOUR";
  nights: number;
  days: number;
  priceRange: PriceRange;
  daysRange: DaysRange;
  packageType: PackageType;
  phone?: string;

  heroImage: { src: string; alt: string };
  highlights: string[];
  includes: string[];
  itinerary: Array<{ day: number; bullets: string[] }>;
};

export const TOURS: Tour[] = [
  {
    slug: "India",
    name: "India",
    tag: "GROUP TOUR",
    nights: 7,
    days: 8,
    priceRange: "200k-300k",
    daysRange: "7-8",
    packageType: "family-holiday",
    phone: "+94 74 044 6841",
    heroImage: { src: "/placeholder/tour-1.jpg", alt: "India" },
    highlights: ["Paro", "Thimphu", "Punakha"],
    includes: ["Flights", "Hotel", "Meals", "Transfers", "Guided tour"],
    itinerary: [
      { day: 1, bullets: ["Arrival + check-in", "Relax / optional walk"] },
      { day: 2, bullets: ["City highlights", "Local experiences"] },
    ],
  },
  {
    slug: "Kashmir",
    name: "Kashmir",
    tag: "GROUP TOUR",
    nights: 8,
    days: 9,
    priceRange: "above-300k",
    daysRange: "9-10",
    packageType: "adventure",
    phone: "+94 74 044 6841",
    heroImage: { src: "/placeholder/tour-2.jpg", alt: "Kashmir" },
    highlights: ["Beijing", "Xian", "Shanghai"],
    includes: ["Flights", "Accommodation", "Transfers", "Guided tour"],
    itinerary: [
      { day: 1, bullets: ["Arrival + hotel", "Evening free time"] },
      { day: 2, bullets: ["Landmarks", "Shopping / food"] },
    ],
  },
   {
    slug: "Thailand",
    name: "Thailand",
    tag: "GROUP TOUR",
    nights: 7,
    days: 8,
    priceRange: "100k-200k",
    daysRange: "7-8",
    packageType: "family-holiday",
    phone: "+94 74 044 6841",
    heroImage: { src: "/placeholder/tour-3.jpg", alt: "Thailand" },
    highlights: ["Paro", "Thimphu", "Punakha"],
    includes: ["Flights", "Hotel", "Meals", "Transfers", "Guided tour"],
    itinerary: [
      { day: 1, bullets: ["Arrival + check-in", "Relax / optional walk"] },
      { day: 2, bullets: ["City highlights", "Local experiences"] },
    ],
  }
];
