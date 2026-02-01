export interface News {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedDate: Date | string;
  author?: string;
  category?: string;
  featuredImage: string;
  tags?: string[];
  source?: string;
  sourceUrl?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

export interface NewsCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
}