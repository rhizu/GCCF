export interface Event {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  eventDate: Date | string;
  location: string;
  status: 'completed' | 'upcoming';
  mainImage: string;
  galleryImages?: string[];
  organizer?: string;
  attendees?: number;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}