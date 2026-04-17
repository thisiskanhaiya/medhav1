<template>
  <div class="profile-wrapper" ref="dropdownRef">
    <!-- Logged Out State - Login Button -->
    <button 
      v-if="!isLoggedIn" 
      class="profile-btn login-btn"
      @click="$emit('login')"
    >
      <span class="btn-icon">🔐</span>
    </button>

    <!-- Logged In State - Avatar with Dropdown -->
    <div v-else class="profile-container">
      <button 
        class="profile-btn avatar-btn"
        @click="toggleDropdown"
        :class="{ active: isOpen }"
      >
        <span class="avatar-text">{{ userInitials }}</span>
        <span class="online-indicator"></span>
      </button>

      <Transition name="dropdown">
        <div v-if="isOpen" class="dropdown-menu">
          <div class="dropdown-header">
            <div class="user-avatar">{{ userInitials }}</div>
            <div class="user-info">
              <p class="user-name">{{ user?.displayName || 'User' }}</p>
              <p class="user-email">{{ user?.email || '' }}</p>
            </div>
          </div>
          
          <div class="dropdown-divider"></div>
          
          <div class="dropdown-items">
            <button class="dropdown-item" @click="handleProfile">
              <span class="item-icon">👤</span>
              <span>My Profile</span>
              <span class="item-badge soon">Soon</span>
            </button>
            <button class="dropdown-item" @click="handleProgress">
              <span class="item-icon">📊</span>
              <span>My Progress</span>
              <span class="item-badge soon">Soon</span>
            </button>
            <button class="dropdown-item" @click="handleCertificates">
              <span class="item-icon">🏆</span>
              <span>Certificates</span>
              <span class="item-badge soon">Soon</span>
            </button>
            <button class="dropdown-item" @click="handleSettings">
              <span class="item-icon">⚙️</span>
              <span>Settings</span>
              <span class="item-badge soon">Soon</span>
            </button>
          </div>
          
          <div class="dropdown-divider"></div>
          
          <button class="dropdown-item logout" @click="handleLogout">
            <span class="item-icon">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  isLoggedIn: { type: Boolean, default: false },
  user: { type: Object, default: null }
});

const emit = defineEmits(['login', 'logout', 'profile', 'settings']);

const isOpen = ref(false);
const dropdownRef = ref(null);

const userInitials = computed(() => {
  if (!props.user?.displayName) return 'U';
  return props.user.displayName
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const closeDropdown = (e) => {
  if (dropdownRef.value && !dropdownRef.value.contains(e.target)) {
    isOpen.value = false;
  }
};

const handleLogout = () => {
  isOpen.value = false;
  emit('logout');
};

const handleProfile = () => {
  isOpen.value = false;
  emit('profile');
};

const handleProgress = () => {
  isOpen.value = false;
};

const handleCertificates = () => {
  isOpen.value = false;
};

const handleSettings = () => {
  isOpen.value = false;
  emit('settings');
};

onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});
</script>

<style scoped>
.profile-wrapper {
  position: relative;
}

.profile-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  position: relative;
}

.login-btn {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.35);
}

.login-btn:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 24px rgba(99, 102, 241, 0.45);
}

.login-btn .btn-icon {
  font-size: 1.2rem;
}

.avatar-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35);
  color: white;
  font-weight: 700;
  font-size: 0.9rem;
}

.avatar-btn:hover,
.avatar-btn.active {
  transform: scale(1.08);
  box-shadow: 0 6px 24px rgba(16, 185, 129, 0.45);
}

.avatar-text {
  font-size: 0.95rem;
  letter-spacing: 0.5px;
}

.online-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #22c55e;
  border: 2px solid white;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}

.dropdown-menu {
  position: absolute;
  top: calc(100% + 12px);
  right: 0;
  width: 280px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  z-index: 1000;
}

.dropdown-header {
  padding: 20px;
  background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%);
  display: flex;
  align-items: center;
  gap: 14px;
}

.user-avatar {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1rem;
  flex-shrink: 0;
}

.user-info {
  flex: 1;
  min-width: 0;
}

.user-name {
  font-weight: 700;
  color: #1e1b4b;
  margin: 0 0 4px 0;
  font-size: 0.95rem;
}

.user-email {
  color: #64748b;
  font-size: 0.8rem;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.dropdown-divider {
  height: 1px;
  background: #e5e7eb;
  margin: 0;
}

.dropdown-items {
  padding: 8px 0;
}

.dropdown-item {
  width: 100%;
  padding: 12px 20px;
  border: none;
  background: none;
  display: flex;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 0.9rem;
  color: #374151;
  text-align: left;
}

.dropdown-item:hover {
  background: #f8fafc;
}

.dropdown-item.logout {
  color: #ef4444;
  margin: 8px 0;
}

.dropdown-item.logout:hover {
  background: #fef2f2;
}

.item-icon {
  font-size: 1.1rem;
  width: 24px;
  text-align: center;
}

.item-badge {
  margin-left: auto;
  font-size: 0.65rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.item-badge.soon {
  background: #fef3c7;
  color: #d97706;
}

/* Dropdown Transition */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

@media (max-width: 480px) {
  .dropdown-menu {
    width: 260px;
    right: -10px;
  }
  
  .profile-btn {
    width: 40px;
    height: 40px;
  }
}
</style>
