const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function getAllEvents() {
  const response = await fetch(`${API_BASE_URL}/events`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch events');
  }
  
  return response.json();
}

export async function getCompletedEvents() {
  const response = await fetch(`${API_BASE_URL}/events/completed`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch completed events');
  }
  
  return response.json();
}

export async function getUpcomingEvents() {
  const response = await fetch(`${API_BASE_URL}/events/upcoming`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch upcoming events');
  }
  
  return response.json();
}

export async function getEventById(id: string) {
  const response = await fetch(`${API_BASE_URL}/events/${id}`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch event');
  }
  
  return response.json();
}

export async function getEventBySlug(slug: string) {
  const response = await fetch(`${API_BASE_URL}/events/slug/${slug}`, {
    cache: 'no-store',
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch event');
  }
  
  return response.json();
}