<template>
  <div class="register-container">
    <div class="register-card">
      <div class="register-header">
        <button class="back-btn" @click="goToLogin">
          ← Back to Login
        </button>
        <div class="register-logo">📚</div>
        <h1 class="register-title">
          <span class="logo-medha">Medha</span><span class="logo-sphere">sphere</span>
        </h1>
        <p class="register-subtitle">Create your account</p>
      </div>

      <form @submit.prevent="handleRegister" class="register-form">
        <div class="form-group">
          <label for="fullname">Full Name</label>
          <div class="input-wrapper">
            <span class="input-icon">👤</span>
            <input
              type="text"
              id="fullname"
              v-model="fullname"
              placeholder="Enter your full name"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="email">Email Address</label>
          <div class="input-wrapper">
            <span class="input-icon">📧</span>
            <input
              type="email"
              id="email"
              v-model="email"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="username">Username</label>
          <div class="input-wrapper">
            <span class="input-icon">🆔</span>
            <input
              type="text"
              id="username"
              v-model="username"
              placeholder="Choose a username"
            />
          </div>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <div class="input-wrapper">
            <span class="input-icon">🔒</span>
            <input
              :type="showPassword ? 'text' : 'password'"
              id="password"
              v-model="password"
              placeholder="Create a password"
            />
            <button type="button" class="toggle-password" @click="showPassword = !showPassword">
              {{ showPassword ? '🙈' : '👁️' }}
            </button>
          </div>
        </div>

        <div class="form-group">
          <label class="terms-label">
            <input type="checkbox" v-model="agreeTerms" />
            <span class="checkmark"></span>
            I agree to the Terms of Service and Privacy Policy
          </label>
        </div>

        <button type="submit" class="register-btn" :disabled="isLoading">
          <span v-if="isLoading" class="spinner"></span>
          <span v-else>Create Account</span>
        </button>
      </form>

      <!-- Coming Soon Message -->
      <div class="coming-soon-overlay" v-if="showComingSoon">
        <div class="coming-soon-card">
          <div class="coming-soon-icon">🚧</div>
          <h3>Coming Soon!</h3>
          <p>Registration will be enabled soon. Please check back later or contact support for early access.</p>
          <button class="dismiss-btn" @click="showComingSoon = false">Got it</button>
        </div>
      </div>

      <div class="register-footer">
        <p>Already have an account? <a href="#" @click.prevent="goToLogin">Sign In</a></p>
      </div>
    </div>

    <div class="register-visual">
      <div class="visual-content">
        <h2>Join MedhaSphere</h2>
        <p>Start your journey to becoming industry-ready</p>
        <div class="benefits-list">
          <div class="benefit-item">
            <span class="benefit-icon">📚</span>
            <div class="benefit-text">
              <h4>Learn</h4>
              <p>Access curated courses and resources</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">🏆</span>
            <div class="benefit-text">
              <h4>Prove</h4>
              <p>Validate your skills with real projects</p>
            </div>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">💼</span>
            <div class="benefit-text">
              <h4>Grow</h4>
              <p>Get hired by top companies</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { register } from '../services/auth.js';

const emit = defineEmits(['go-login', 'register-attempt']);

const fullname = ref('');
const email = ref('');
const username = ref('');
const password = ref('');
const showPassword = ref(false);
const agreeTerms = ref(false);
const isLoading = ref(false);
const showComingSoon = ref(false);

const handleRegister = async () => {
  isLoading.value = true;
  
  try {
    const result = await register({
      fullname: fullname.value,
      email: email.value,
      username: username.value,
      password: password.value
    });
    
    showComingSoon.value = true;
    emit('register-attempt', { message: result.message });
  } catch (error) {
    showComingSoon.value = true;
  } finally {
    isLoading.value = false;
  }
};

const goToLogin = () => {
  emit('go-login');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.register-container {
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 50%, #e8f0fe 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}

.register-card {
  flex: 1;
  max-width: 520px;
  padding: 40px 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: white;
  box-shadow: 20px 0 60px rgba(0, 0, 0, 0.05);
  position: relative;
}

.back-btn {
  position: absolute;
  top: 24px;
  left: 24px;
  background: none;
  border: none;
  color: #6366f1;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 0;
}

.back-btn:hover {
  text-decoration: underline;
}

.register-header {
  text-align: center;
  margin-bottom: 32px;
}

.register-logo {
  font-size: 2.5rem;
  margin-bottom: 12px;
}

.register-title {
  font-size: 1.8rem;
  font-weight: 800;
  margin: 0 0 8px 0;
}

.logo-medha {
  color: #1a1a2e;
}

.logo-sphere {
  color: #10b981;
}

.register-subtitle {
  color: #64748b;
  font-size: 0.95rem;
  margin: 0;
}

.register-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.88rem;
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
  left: 14px;
  font-size: 1rem;
  pointer-events: none;
}

.input-wrapper input {
  width: 100%;
  padding: 12px 14px 12px 44px;
  border: 2px solid #e5e7eb;
  border-radius: 10px;
  font-size: 0.92rem;
  transition: all 0.3s ease;
  background: #f9fafb;
}

.input-wrapper input:focus {
  outline: none;
  border-color: #6366f1;
  background: white;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
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

.terms-label {
  display: flex;
  align-items: flex-start;
  gap: 10px;
  cursor: pointer;
  font-size: 0.85rem;
  color: #4b5563;
  user-select: none;
  line-height: 1.4;
}

.terms-label input {
  width: 18px;
  height: 18px;
  accent-color: #6366f1;
  cursor: pointer;
  flex-shrink: 0;
  margin-top: 2px;
}

.register-btn {
  padding: 14px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
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
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
}

.register-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
}

.register-btn:disabled {
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

.coming-soon-overlay {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.95);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  backdrop-filter: blur(4px);
}

.coming-soon-card {
  text-align: center;
  padding: 40px;
  max-width: 320px;
}

.coming-soon-icon {
  font-size: 4rem;
  margin-bottom: 16px;
}

.coming-soon-card h3 {
  font-size: 1.5rem;
  color: #1e1b4b;
  margin: 0 0 12px 0;
}

.coming-soon-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 24px 0;
}

.dismiss-btn {
  padding: 12px 32px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dismiss-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.3);
}

.register-footer {
  text-align: center;
  margin-top: 24px;
}

.register-footer p {
  font-size: 0.9rem;
  color: #64748b;
}

.register-footer a {
  color: #6366f1;
  text-decoration: none;
  font-weight: 600;
}

.register-footer a:hover {
  text-decoration: underline;
}

.register-visual {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%);
  padding: 60px;
  position: relative;
  overflow: hidden;
}

.register-visual::before {
  content: '';
  position: absolute;
  width: 500px;
  height: 500px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, transparent 70%);
  top: -100px;
  right: -100px;
}

.visual-content {
  color: white;
  position: relative;
  z-index: 1;
  max-width: 400px;
}

.visual-content h2 {
  font-size: 2.2rem;
  font-weight: 800;
  margin: 0 0 12px 0;
}

.visual-content > p {
  font-size: 1.05rem;
  opacity: 0.9;
  margin: 0 0 40px 0;
}

.benefits-list {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  gap: 16px;
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  padding: 20px;
  border-radius: 16px;
}

.benefit-icon {
  font-size: 2rem;
  flex-shrink: 0;
}

.benefit-text h4 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 4px 0;
}

.benefit-text p {
  font-size: 0.9rem;
  opacity: 0.85;
  margin: 0;
}

@media (max-width: 968px) {
  .register-visual {
    display: none;
  }

  .register-card {
    max-width: 100%;
    padding: 60px 24px 40px;
  }
}

@media (max-width: 480px) {
  .register-card {
    padding: 60px 20px 32px;
  }

  .register-title {
    font-size: 1.5rem;
  }
}
</style>
