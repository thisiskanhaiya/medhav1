// Auth Service - Modular authentication logic (easy to replace with API later)

const STORAGE_KEY = 'medhasphere_auth';

// Hardcoded credentials (temporary - replace with API call)
const VALID_CREDENTIALS = {
  username: 'testuser.automation',
  password: 'think123'
};

// Get current auth state from storage
export function getAuthState() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error reading auth state:', e);
  }
  return { isLoggedIn: false, user: null };
}

// Check if user is logged in
export function isAuthenticated() {
  return getAuthState().isLoggedIn;
}

// Get current user
export function getCurrentUser() {
  return getAuthState().user;
}

// Login function - returns { success, message, user? }
export async function login(username, password) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Validate credentials (replace with API call later)
  if (username === VALID_CREDENTIALS.username && password === VALID_CREDENTIALS.password) {
    const user = {
      username,
      displayName: 'Test User',
      email: 'testuser@medhasphere.com',
      loginTime: new Date().toISOString()
    };
    
    // Store auth state
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      isLoggedIn: true,
      user
    }));
    
    return { success: true, message: 'Welcome back!', user };
  }
  
  return { success: false, message: 'Invalid credentials' };
}

// Logout function
export function logout() {
  localStorage.removeItem(STORAGE_KEY);
  return { success: true, message: 'Logged out successfully' };
}

// Register function (placeholder - no backend)
export async function register(userData) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  return { 
    success: false, 
    message: 'Registration will be enabled soon' 
  };
}

// Protected routes configuration
export const PROTECTED_ROUTES = ['sdet', 'java', 'ai', 'talentforge'];

// Check if a route requires authentication
export function requiresAuth(routeId) {
  return PROTECTED_ROUTES.includes(routeId);
}
