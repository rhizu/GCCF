const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function getAllNews() {
  const response = await fetch(`${API_BASE_URL}/news`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch news');
  }
  
  return response.json();
}

export async function getNewsById(id: string) {
  const response = await fetch(`${API_BASE_URL}/news/${id}`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch news item');
  }
  
  return response.json();
}

export async function getNewsBySlug(slug: string) {
  const response = await fetch(`${API_BASE_URL}/news/slug/${slug}`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch news item');
  }
  
  return response.json();
}

export async function getLatestNews(limit: number = 5) {
  const response = await fetch(`${API_BASE_URL}/news/latest?limit=${limit}`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch latest news');
  }
  
  return response.json();
}