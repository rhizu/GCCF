const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

// ============================================
// AUTHENTICATION
// ============================================

export async function adminLogin(email: string, password: string) {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error('Login failed');
  }

  return response.json();
}

export async function adminLogout() {
  const response = await fetch(`${API_BASE_URL}/auth/logout`, {
    method: 'POST',
    credentials: 'include',
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }

  return response.json();
}

export async function verifyAdminToken(token: string) {
  const response = await fetch(`${API_BASE_URL}/auth/verify`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Token verification failed');
  }

  return response.json();
}

// ============================================
// EVENTS MANAGEMENT
// ============================================

export async function createEvent(eventData: any, token: string) {
  const response = await fetch(`${API_BASE_URL}/events`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error('Failed to create event');
  }

  return response.json();
}

export async function updateEvent(id: string, eventData: any, token: string) {
  const response = await fetch(`${API_BASE_URL}/events/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(eventData),
  });

  if (!response.ok) {
    throw new Error('Failed to update event');
  }

  return response.json();
}

export async function deleteEvent(id: string, token: string) {
  const response = await fetch(`${API_BASE_URL}/events/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete event');
  }

  return response.json();
}

// ============================================
// NEWS MANAGEMENT
// ============================================

export async function createNews(newsData: any, token: string) {
  const response = await fetch(`${API_BASE_URL}/news`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newsData),
  });

  if (!response.ok) {
    throw new Error('Failed to create news');
  }

  return response.json();
}

export async function updateNews(id: string, newsData: any, token: string) {
  const response = await fetch(`${API_BASE_URL}/news/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(newsData),
  });

  if (!response.ok) {
    throw new Error('Failed to update news');
  }

  return response.json();
}

export async function deleteNews(id: string, token: string) {
  const response = await fetch(`${API_BASE_URL}/news/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete news');
  }

  return response.json();
}

// ============================================
// GALLERY MANAGEMENT
// ============================================

export async function uploadGalleryImage(imageFile: File, token: string) {
  const formData = new FormData();
  formData.append('image', imageFile);

  const response = await fetch(`${API_BASE_URL}/gallery/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  return response.json();
}

export async function deleteGalleryImage(id: string, token: string) {
  const response = await fetch(`${API_BASE_URL}/gallery/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to delete image');
  }

  return response.json();
}

// ============================================
// IMAGE UPLOAD (Generic)
// ============================================

export async function uploadImage(imageFile: File, category: string, token: string) {
  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('category', category);

  const response = await fetch(`${API_BASE_URL}/upload`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image');
  }

  return response.json();
}

// ============================================
// STATISTICS (For Admin Dashboard)
// ============================================

export async function getAdminStats(token: string) {
  const response = await fetch(`${API_BASE_URL}/admin/stats`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch statistics');
  }

  return response.json();
}

// ============================================
// HELPER FUNCTIONS
// ============================================

export function getAuthToken(): string | null {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('adminToken');
  }
  return null;
}

export function setAuthToken(token: string): void {
  if (typeof window !== 'undefined') {
    localStorage.setItem('adminToken', token);
  }
}

export function removeAuthToken(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('adminToken');
  }
}

export function isAuthenticated(): boolean {
  return getAuthToken() !== null;
}