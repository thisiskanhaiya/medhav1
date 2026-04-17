<template>
  <Teleport to="body">
    <Transition name="popup">
      <div v-if="show" class="popup-overlay" @click.self="$emit('close')">
        <div class="popup-card">
          <button class="popup-close" @click="$emit('close')">✕</button>
          
          <div class="popup-icon">
            <span class="icon-main">🚀</span>
            <span class="icon-sparkle s1">✨</span>
            <span class="icon-sparkle s2">⭐</span>
            <span class="icon-sparkle s3">💫</span>
          </div>
          
          <h2 class="popup-title">You're Exploring Something Amazing!</h2>
          
          <p class="popup-message">
            {{ customMessage || defaultMessage }}
          </p>
          
          <div class="popup-features">
            <div class="feature">
              <span class="feature-icon">📚</span>
              <span>Personalized Learning Path</span>
            </div>
            <div class="feature">
              <span class="feature-icon">📊</span>
              <span>Track Your Progress</span>
            </div>
            <div class="feature">
              <span class="feature-icon">🏆</span>
              <span>Earn Certificates & Badges</span>
            </div>
          </div>
          
          <div class="popup-actions">
            <button class="btn-login" @click="$emit('login')">
              <span class="btn-icon">🔐</span>
              Login to Continue
            </button>
            <button class="btn-register" @click="$emit('register')">
              <span class="btn-icon">✨</span>
              Create Account
            </button>
          </div>
          
          <p class="popup-footer">
            Join <strong>1000+</strong> learners already on their journey!
          </p>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
defineProps({
  show: { type: Boolean, default: false },
  customMessage: { type: String, default: '' }
});

defineEmits(['close', 'login', 'register']);

const defaultMessage = "You're about to unlock premium content! Sign in to enjoy a personalized experience, track your progress, and accelerate your growth journey with us.";
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10000;
  padding: 20px;
}

.popup-card {
  background: white;
  border-radius: 24px;
  padding: 40px;
  max-width: 480px;
  width: 100%;
  text-align: center;
  position: relative;
  box-shadow: 0 25px 80px rgba(0, 0, 0, 0.25);
  animation: cardBounce 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes cardBounce {
  0% { transform: scale(0.8) translateY(20px); opacity: 0; }
  100% { transform: scale(1) translateY(0); opacity: 1; }
}

.popup-close {
  position: absolute;
  top: 16px;
  right: 16px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: none;
  background: #f3f4f6;
  color: #6b7280;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.popup-close:hover {
  background: #e5e7eb;
  color: #374151;
  transform: rotate(90deg);
}

.popup-icon {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-main {
  font-size: 4rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

.icon-sparkle {
  position: absolute;
  font-size: 1.2rem;
  animation: sparkle 2s ease-in-out infinite;
}

.icon-sparkle.s1 { top: 0; right: 10px; animation-delay: 0s; }
.icon-sparkle.s2 { bottom: 10px; left: 5px; animation-delay: 0.5s; }
.icon-sparkle.s3 { top: 20px; left: 0; animation-delay: 1s; }

@keyframes sparkle {
  0%, 100% { opacity: 0.5; transform: scale(0.8); }
  50% { opacity: 1; transform: scale(1.2); }
}

.popup-title {
  font-size: 1.6rem;
  font-weight: 800;
  color: #1e1b4b;
  margin: 0 0 16px 0;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.popup-message {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.7;
  margin: 0 0 28px 0;
}

.popup-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 28px;
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  border-radius: 16px;
}

.feature {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.9rem;
  color: #475569;
  font-weight: 500;
}

.feature-icon {
  font-size: 1.2rem;
}

.popup-actions {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.btn-login {
  padding: 16px 24px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.35);
}

.btn-login:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.45);
}

.btn-register {
  padding: 14px 24px;
  background: white;
  color: #6366f1;
  border: 2px solid #e5e7eb;
  border-radius: 14px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
}

.btn-register:hover {
  border-color: #6366f1;
  background: rgba(99, 102, 241, 0.05);
}

.btn-icon {
  font-size: 1.1rem;
}

.popup-footer {
  margin: 24px 0 0 0;
  font-size: 0.85rem;
  color: #9ca3af;
}

.popup-footer strong {
  color: #6366f1;
}

/* Transitions */
.popup-enter-active,
.popup-leave-active {
  transition: all 0.3s ease;
}

.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}

.popup-enter-from .popup-card,
.popup-leave-to .popup-card {
  transform: scale(0.9) translateY(20px);
}

@media (max-width: 480px) {
  .popup-card {
    padding: 28px 20px;
    margin: 12px;
  }
  
  .popup-title {
    font-size: 1.3rem;
  }
  
  .popup-icon {
    width: 80px;
    height: 80px;
  }
  
  .icon-main {
    font-size: 3rem;
  }
}
</style>
