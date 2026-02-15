export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
  link?: string;
}

export const gallery: GalleryImage[] = [
  {
    id: "1",
    src: "/images/profile_photo.jpg",
    alt: "Deep Contractor at Tower Bridge, London",
    caption: "London, UK - Home base",
  },
  {
    id: "2",
    src: "/images/big-data-london-2025.jpg",
    alt: "Big Data London 2025",
    caption: "Big Data London 2025",
  },
  {
    id: "3",
    src: "/images/databricks-hq-london.jpg",
    alt: "Databricks HQ London",
    caption: "Databricks HQ, London",
  },
];
