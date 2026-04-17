<template>
  <div class="login-container">
    <div class="login-card">
      <div class="login-header">
        <div class="login-logo">📚</div>
        <h1 class="login-title">
          <span class="logo-medha">Medha</span><span class="logo-sphere">sphere</span>
        </h1>
        <p class="login-subtitle">Sign in to continue your learning journey</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username / Email</label>
          <div class="input-wrapper">
            <span class="input-icon">👤</span>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Enter your username"
              :class="{ error: errors.username }"
              autocomplete="username"
            />
          </div>
          <span v-if="errors.username" class="error-text">{{ errors.username }}</span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <span class="input-icon">🔒</span>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Enter your password"
              :class="{ error: errors.password }"
              autocomplete="current-password"
            />
            <button type="button" class="toggle-password" @click="showPassword = !showPassword">
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
          <span v-if="errors.password" class="error-text">{{ errors.password }}</span>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe" />
            <span class="checkmark"></span>
            Remember me
          </label>
          <a href="#" class="forgot-link">Forgot password?</a>
        </div>

        <button type="submit" class="login-btn" :disabled="isLoading">
          <span v-if="isLoading" class="spinner"></span>
          <span v-else>Sign In</span>
        </button>

        <div class="divider">
          <span>or</span>
        </div>

        <button type="button" class="register-btn" @click="goToRegister">
          Create New Account
        </button>
      </form>

      <div class="login-footer">
        <p>Protected by MedhaSphere Security</p>
      </div>
    </div>

    <div class="login-visual">
      <div class="visual-content">
        <h2>Welcome to MedhaSphere</h2>
        <p>Empowering Minds · Delivering Solutions</p>
        <div class="features-list">
          <div class="feature-item">
            <span class="feature-icon">🎯</span>
            <span>Industry-Ready Skills</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">💼</span>
            <span>Career Opportunities</span>
          </div>
          <div class="feature-item">
            <span class="feature-icon">🏆</span>
            <span>Skill Validation</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { login } from '../services/auth.js';

const emit = defineEmits(['login-success', 'go-register']);

const username = ref('');
const password = ref('');
const showPassword = ref(false);
const rememberMe = ref(false);
const isLoading = ref(false);
const errors = reactive({ username: '', password: '' });

const validateForm = () => {
  errors.username = '';
  errors.password = '';
  let isValid = true;

  if (!username.value.trim()) {
    errors.username = 'Username is required';
    isValid = false;
  }

  if (!password.value) {
    errors.password = 'Password is required';
    isValid = false;
  }

  return isValid;
};

const handleLogin = async () => {
  if (!validateForm()) return;

  isLoading.value = true;
  
  try {
    const result = await login(username.value.trim(), password.value);
    
    if (result.success) {
      emit('login-success', { message: result.message, user: result.user });
    } else {
      errors.password = result.message;
    }
  } catch (error) {
    errors.password = 'An error occurred. Please try again.';
  } finally {
    isLoading.value = false;
  }
};

const goToRegister = () => {
  emit('go-register');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.login-container {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 50%, #e8f0fe 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.login-card {
  flex: 1;
  max-width: 480px;
  padding: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  box-shadow: 20px 0 60px rgba(0, 0, 0, 0.05);
}

.login-header {
  text-align: center;
  margin-bottom: 40px;
}

.login-logo {
  font-size: 3rem;
  margin-bottom: 16px;
}

.login-title {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 8px 0;
}

.logo-medha {
  color: #1a1a2e;
}

.logo-sphere {
  color: #10b981;
}

.login-subtitle {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
}

.input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.input-icon {
  position: absolute;
  left: 16px;
  font-size: 1rem;
  pointer-events: none;
}

.input-wrapper input {
  width: 100%;
  padding: 14px 16px 14px 48px;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.95rem;
  transition: all 0.3s ease;
  background: #f9fafb;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #6366f1;
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

.input-wrapper input.error {
  border-color: #ef4444;
}

.input-wrapper input.error:focus {
  box-shadow: 0 0 0 4px rgba(239, 68, 68, 0.1);
}

.toggle-password {
  position: absolute;
  right: 12px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  padding: 4px;
}

.error-text {
  color: #ef4444;
  font-size: 0.8rem;
  margin-top: 4px;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: -8px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 0.88rem;
  color: #4b5563;
  user-select: none;
}

.remember-me input {
  width: 18px;
  height: 18px;
  accent-color: #6366f1;
  cursor: pointer;
}

.forgot-link {
  font-size: 0.88rem;
  color: #6366f1;
  text-decoration: none;
  font-weight: 500;
}

.forgot-link:hover {
  text-decoration: underline;
}

.login-btn {
  padding: 16px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
}

.login-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.login-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.spinner {
  width: 20px;
  height: 20px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-top-color: white;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

.divider {
  display: flex;
  align-items: center;
  gap: 16px;
  color: #9ca3af;
  font-size: 0.85rem;
}

.divider::before,
.divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: #e5e7eb;
}

.register-btn {
  padding: 14px;
  background: white;
  color: #6366f1;
  border: 2px solid #e5e7eb;
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.register-btn:hover {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.05);
}

.login-footer {
  text-align: center;
  margin-top: 32px;
}

.login-footer p {
  font-size: 0.8rem;
  color: #9ca3af;
}

.login-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%);
  padding: 60px;
  position: relative;
  overflow: hidden;
}

.login-visual::before {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.login-visual::after {
  content: '';
  position: absolute;
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
  bottom: -100px;
  left: -100px;
}

.visual-content {
  text-align: center;
  color: white;
  position: relative;
  z-index: 1;
}

.visual-content h2 {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 16px 0;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.visual-content > p {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0 0 48px 0;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  padding: 16px 24px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 500;
}

.feature-icon {
  font-size: 1.5rem;
}

@media (max-width: 968px) {
  .login-visual {
    display: none;
  }

  .login-card {
    max-width: 100%;
    padding: 40px 24px;
  }
}

@media (max-width: 480px) {
  .login-card {
    padding: 32px 20px;
  }

  .login-title {
    font-size: 1.6rem;
  }

  .form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
}
</style>
