<!-- filepath: src/components/Dashboard.vue -->
<template>
  <div class="dashboard">

    <!-- Top Nav -->
    <header :class="['header', { 'header-scrolled': isScrolled, 'header-hidden': isNavHidden }]">
      <h1 @click="goHome" class="logo">📚 <span class="logo-medha">Medha</span><span class="logo-sphere">sphere</span></h1>
      
      <!-- Mobile menu button -->
      <button class="mobile-menu-btn" @click="mobileMenuOpen = !mobileMenuOpen">
        <span :class="['hamburger', { open: mobileMenuOpen }]"></span>
      </button>
      
      <nav :class="['nav-links', { 'mobile-open': mobileMenuOpen }]">
        <!-- Only show TalentForge in nav on home, show all when course selected -->
        <template v-if="selected">
          <span class="nav-item home-btn" @click="goHome">
            🏠 Home
          </span>
        </template>
        <span
          class="nav-item talentcloud-nav"
          :class="{ active: selected === 'talentcloud' }"
          @click="navigate('talentcloud'); mobileMenuOpen = false"
        >
          ☁️ Talent Cloud
        </span>
        <span
          class="nav-item talentforge-nav"
          :class="{ active: selected === 'talentforge' }"
          @click="navigate('talentforge'); mobileMenuOpen = false"
        >
          ⚡ TalentForge
        </span>
        <span
          class="nav-item about-nav"
          :class="{ active: selected === 'about' }"
          @click="navigate('about'); mobileMenuOpen = false"
        >
          🌱 About
        </span>
      </nav>
    </header>

    <!-- Hero - only when no course selected -->
    <section
      v-if="!selected"
      class="hero"
      @mouseenter="heroHovered = true"
      @mouseleave="heroHovered = false"
    >
      <!-- Image slides -->
      <div class="hero-slides">
        <div 
          v-for="(img, idx) in images" 
          :key="idx"
          :class="['hero-slide', { active: currentImageIndex === idx }]"
          :style="{ backgroundImage: `url(${img})` }"
        ></div>
      </div>
      
      <!-- Subtle gradient overlay at edges -->
      <div class="hero-edge-overlay"></div>
      
      <!-- Slide indicators -->
      <div class="hero-indicators">
        <span 
          v-for="(img, idx) in images" 
          :key="idx"
          :class="['indicator', { active: currentImageIndex === idx }]"
          @click="currentImageIndex = idx"
        ></span>
      </div>
      
      <!-- Emerging tagline -->
      <div class="hero-tagline-container">
        <h2 class="emerging-tagline">
          <span class="tagline-word">Empowering</span>
          <span class="tagline-word">Minds</span>
          <span class="tagline-divider">·</span>
          <span class="tagline-word">Delivering</span>
          <span class="tagline-word">Solutions</span>
        </h2>
      </div>
      
      <!-- Bottom CTA -->
      <div class="hero-bottom">
        <button class="hero-cta" @click="scrollToContent">
          <span class="cta-icon">🚀</span>
          Explore Skill Tracks
          <span class="cta-arrow">↓</span>
        </button>
        <button class="hero-cta talent-cloud-cta" @click="navigate('talentcloud')">
          <span class="cta-icon">☁️</span>
          Explore Talent Cloud
          <span class="cta-arrow">→</span>
        </button>
      </div>
    </section>

    <!-- Main Content -->
    <div class="main-content" v-if="!selected">

      <!-- Course Cards -->
      <section class="courses-section">
        <h2 class="section-title">Choose Your Learning Path</h2>
        <div class="courses">
          <div
            class="card"
            v-for="course in courses"
            :key="course.id"
            @click="navigate(course.id)"
          >
            <div class="card-background"></div>

            <!-- Badge -->
            <div class="card-badge">{{ course.badge }}</div>

            <div class="icon">{{ course.icon }}</div>
            <h3>{{ course.name }}</h3>
            <p>{{ course.description }}</p>

            <!-- Tags -->
            <div class="card-tags">
              <span class="tag" v-for="tag in course.tags" :key="tag">{{ tag }}</span>
            </div>

           

            <button class="btn" @click.stop="navigate(course.id)">
              <span class="btn-text">Start Learning</span>
              <span class="btn-arrow">→</span>
            </button>
          </div>
        </div>
      </section>

      <!-- Talent Cloud Section -->
      <section class="talentcloud-section">
        <div class="tc-banner" @click="navigate('talentcloud')">
          <div class="tc-banner-bg"></div>
          <div class="tc-banner-content">
            <div class="tc-banner-left">
              <span class="tc-badge">☁️ Talent-as-a-Service</span>
              <h2 class="tc-banner-title">Hire Talent</h2>
              <p class="tc-banner-tagline">Access and deploy industry-ready professionals</p>
              <div class="tc-features">
                <span class="tc-feature">🎯 Pre-Trained Talent</span>
                <span class="tc-feature">🚀 Quick Deployment</span>
                <span class="tc-feature">📊 Performance Tracking</span>
              </div>
            </div>
            <div class="tc-banner-right">
              <button class="tc-enter-btn">
                Explore Talent Cloud →
              </button>
            </div>
          </div>
        </div>
      </section>

      <!-- TalentForge Section -->
      <section class="talentforge-section">
        <div class="tf-banner" @click="navigate('talentforge')">
          <div class="tf-banner-bg"></div>
          <div class="tf-banner-content">
            <div class="tf-banner-left">
              <span class="tf-badge">⚡ Skill Validation & Hiring</span>
              <h2 class="tf-banner-title">TalentForge</h2>
              <p class="tf-banner-tagline">Forge your skills. Prove your talent. Get hired.</p>
              <div class="tf-features">
                <span class="tf-feature">🧠 QuickFire Quizzes</span>
                <span class="tf-feature">🧩 Real Challenges</span>
                <span class="tf-feature">💰 Earn Coins</span>
                <span class="tf-feature">🏆 Get Hired</span>
              </div>
            </div>
            <div class="tf-banner-right">
              <div class="tf-stats-preview">
                <div class="tf-stat-item">
                  <span class="tf-stat-value">0</span>
                  <span class="tf-stat-label">Active Users</span>
                </div>
                <div class="tf-stat-item">
                  <span class="tf-stat-value">0</span>
                  <span class="tf-stat-label">Companies Hiring</span>
                </div>
                <div class="tf-stat-item">
                  <span class="tf-stat-value">$0</span>
                  <span class="tf-stat-label">Rewards Given</span>
                </div>
              </div>
              <button class="tf-enter-btn">
                Enter TalentForge →
              </button>
            </div>
          </div>
        </div>
      </section>

<!-- Testimonials -->
      <section class="testimonials">
        <h2 class="section-title">⭐ What Our Learners Say</h2>
        <div class="testimonials-grid">
          <div class="testimonial-card" v-for="(testimonial, i) in testimonials" :key="i">
            <div class="rating">
              <span v-for="j in 5" :key="j" class="star">★</span>
            </div>
            <p class="testimonial-text">"{{ testimonial.text }}"</p>
            <div class="testimonial-author">
              <div class="author-avatar">{{ testimonial.avatar }}</div>
              <div>
                <p class="author-name">{{ testimonial.name }}</p>
                <p class="author-role">{{ testimonial.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="footer-content">
          <div class="footer-brand">
            <h3>📚 Medhasphere</h3>
            <p>Empowering Minds · Delivering Solutions</p>
          </div>
          <div class="footer-links">
            <p>© 2025 Medhasphere. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </div>

    <!-- Course Content -->
    <div class="course-content" v-if="selected">
      <component :is="currentComponent" />
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import SDETComponent from './SDET.vue'
import JavaComponent from './Java.vue'
import AIDeveloperComponent from './AIDeveloper.vue'
import TalentForgeComponent from './TalentForge.vue'
import TalentCloudComponent from './TalentCloud.vue'
import AboutMedhaSphereComponent from './AboutMedhaSphere.vue'
import testimonial1 from '../assets/1775264017792.png'
import testimonial2 from '../assets/1775264871247.png'
import testimonial3 from '../assets/1775265121160.png'

const selected = ref(null)
const currentImageIndex = ref(0)
const images = [testimonial1, testimonial2, testimonial3]
const isScrolled = ref(false)
const heroHovered = ref(false)
const mobileMenuOpen = ref(false)
const isNavHidden = ref(false)

let imageInterval = null
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  isScrolled.value = currentScrollY > 100
  
  // Hide navbar when scrolling down, show when scrolling up
  if (currentScrollY > lastScrollY && currentScrollY > 80) {
    isNavHidden.value = true
  } else {
    isNavHidden.value = false
  }
  lastScrollY = currentScrollY
}

const scrollToContent = () => {
  const mainContent = document.querySelector('.main-content')
  if (mainContent) {
    mainContent.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  imageInterval = setInterval(() => {
    currentImageIndex.value = (currentImageIndex.value + 1) % images.length
  }, 5000)
  
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  if (imageInterval) clearInterval(imageInterval)
  window.removeEventListener('scroll', handleScroll)
})

const courses = [
  {
    id: 'sdet',
    name: 'SDET Mastery',
    icon: '🔬',
    description: 'Master automation testing with Selenium, Playwright, API testing & CI/CD pipelines.',
    badge: '🔥 Most Popular',
    tags: ['Industry Ready', 'Job Oriented', 'Hands-on'],
    lessons: 120,
    duration: '6 Months',
    level: 'Beginner → Pro',
  },
  {
    id: 'java',
    name: 'Java Development',
    icon: '☕',
    description: 'Build enterprise-grade applications with Core Java, Spring Boot & Microservices.',
    badge: '⭐ Top Rated',
    tags: ['Future Ready', 'Enterprise Level', 'In Demand'],
    lessons: 95,
    duration: '5 Months',
    level: 'Beginner → Pro',
  },
  {
    id: 'ai',
    name: 'AI Developer',
    icon: '🤖',
    description: 'Master AI, Machine Learning, LLMs, Prompt Engineering & build intelligent applications.',
    badge: '🚀 New',
    tags: ['Cutting Edge', 'High Demand', 'Future Tech'],
    lessons: 80,
    duration: '4 Months',
    level: 'Beginner → Pro',
  },
]



const testimonials = [
  { avatar: '👨‍💼', name: 'Rajesh Kumar',  role: 'QA Engineer',      text: 'Medhasphere helped me transition from manual testing to automation within 3 months!', image: testimonial1 },
  { avatar: '👩‍💻', name: 'Priya Sharma',  role: 'Java Developer',    text: 'The structured learning path and practical exercises made Java concepts crystal clear.', image: testimonial2 },
  { avatar: '👨‍🎓', name: 'Arjun Patel',   role: 'SDET Specialist',   text: 'Best platform for learning SDET fundamentals. Highly recommended for career growth!', image: testimonial3 },
]

const navigate = (id) => { selected.value = id }
const goHome   = ()  => { selected.value = null }

const currentComponent = computed(() => {
  if (selected.value === 'sdet') return SDETComponent
  if (selected.value === 'java') return JavaComponent
  if (selected.value === 'ai') return AIDeveloperComponent
  if (selected.value === 'talentforge') return TalentForgeComponent
  if (selected.value === 'talentcloud') return TalentCloudComponent
  if (selected.value === 'about') return AboutMedhaSphereComponent
  return null
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

* { 
  scroll-behavior: smooth; 
  box-sizing: border-box;
}

.dashboard {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 50%, #e8f0fe 100%);
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  position: relative;
  overflow-x: hidden;
  color: #1a1a2e;
}

/* Floating orbs background */
.dashboard::before,
.dashboard::after {
  content: '';
  position: fixed;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.dashboard::before {
  width: 600px;
  height: 600px;
  top: -200px;
  right: -200px;
  background: radial-gradient(circle, rgba(167, 139, 250, 0.15) 0%, transparent 70%);
  animation: float1 25s ease-in-out infinite;
}

.dashboard::after {
  width: 500px;
  height: 500px;
  bottom: -150px;
  left: -150px;
  background: radial-gradient(circle, rgba(129, 230, 217, 0.12) 0%, transparent 70%);
  animation: float2 20s ease-in-out infinite;
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  33% { transform: translate(-30px, 40px) scale(1.05); }
  66% { transform: translate(20px, -30px) scale(0.95); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0) scale(1); }
  50% { transform: translate(40px, -40px) scale(1.1); }
}

.dashboard > * { position: relative; z-index: 1; }

/* ─── Header (Glassmorphism) ─────────────────────────── */
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 0 32px;
  position: fixed;
  top: 16px;
  left: 16px;
  right: 16px;
  z-index: 500;
  height: 60px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06);
  transition: all 0.4s ease;
}

.header-scrolled {
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.08);
}

.header-hidden {
  transform: translateY(-100px);
  opacity: 0;
}

.header .logo {
  font-size: 1.4rem;
  margin: 0;
  font-weight: 800;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  user-select: none;
}

.logo-medha {
  color: #1a1a2e;
}

.logo-sphere {
  color: #10b981;
}

.header .logo:hover { 
  transform: scale(1.05); 
}

/* Mobile menu button */
.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  z-index: 10;
}

.hamburger {
  display: block;
  width: 24px;
  height: 2px;
  background: #6366f1;
  position: relative;
  transition: all 0.3s ease;
}

.hamburger::before,
.hamburger::after {
  content: '';
  position: absolute;
  width: 24px;
  height: 2px;
  background: #6366f1;
  transition: all 0.3s ease;
}

.hamburger::before { top: -7px; }
.hamburger::after { top: 7px; }

.hamburger.open { background: transparent; }
.hamburger.open::before { transform: rotate(45deg); top: 0; }
.hamburger.open::after { transform: rotate(-45deg); top: 0; }

.nav-links { 
  display: flex; 
  gap: 10px;
  align-items: center;
}

.nav-item {
  cursor: pointer;
  padding: 10px 20px;
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 600;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.04);
  user-select: none;
  color: #4b5563;
  position: relative;
  overflow: hidden;
}

.nav-item.home-btn {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
}

.nav-item.home-btn:hover {
  background: rgba(99, 102, 241, 0.2);
  transform: translateY(-2px);
}

.nav-item.talentcloud-nav {
  background: linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(6, 182, 212, 0.25);
}

.nav-item.talentcloud-nav:hover {
  box-shadow: 0 8px 24px rgba(6, 182, 212, 0.4);
  transform: translateY(-3px) scale(1.02);
}

.nav-item.talentcloud-nav.active {
  background: linear-gradient(135deg, #0891b2 0%, #2563eb 100%);
  box-shadow: 0 8px 28px rgba(6, 182, 212, 0.45);
}

.nav-item.talentforge-nav {
  background: linear-gradient(135deg, #f472b6 0%, #c084fc 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(244, 114, 182, 0.25);
}

.nav-item.talentforge-nav:hover {
  box-shadow: 0 8px 24px rgba(244, 114, 182, 0.4);
  transform: translateY(-3px) scale(1.02);
}

.nav-item.talentforge-nav.active {
  background: linear-gradient(135deg, #ec4899 0%, #a855f7 100%);
  box-shadow: 0 8px 28px rgba(236, 72, 153, 0.45);
}

.nav-item.about-nav {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
  border-color: transparent;
  box-shadow: 0 4px 16px rgba(16, 185, 129, 0.25);
}

.nav-item.about-nav:hover {
  box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  transform: translateY(-3px) scale(1.02);
}

.nav-item.about-nav.active {
  background: linear-gradient(135deg, #059669 0%, #047857 100%);
  box-shadow: 0 8px 28px rgba(16, 185, 129, 0.45);
}

/* ─── Hero ───────────────────────────────────────────── */
.hero {
  margin-top: 92px;
  height: calc(100vh - 92px);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border-radius: 0 0 48px 48px;
  overflow: hidden;
}

/* Image slides with Ken Burns effect */
.hero-slides {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero-slide {
  position: absolute;
  inset: 0;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transform: scale(1.05);
  transition: opacity 1.8s ease-in-out, transform 0.5s ease;
}

.hero-slide.active {
  opacity: 1;
  transform: scale(1);
  animation: slowZoom 6s ease-in-out forwards;
}

@keyframes slowZoom {
  0% { transform: scale(1); }
  100% { transform: scale(1.06); }
}

/* Edge overlay - subtle gradients at edges only */
.hero-edge-overlay {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  background: 
    linear-gradient(to bottom, rgba(250, 251, 255, 0.6) 0%, transparent 15%),
    linear-gradient(to top, rgba(250, 251, 255, 0.8) 0%, transparent 20%),
    linear-gradient(to right, rgba(250, 251, 255, 0.3) 0%, transparent 10%),
    linear-gradient(to left, rgba(250, 251, 255, 0.3) 0%, transparent 10%);
}

/* Slide indicators */
.hero-indicators {
  position: absolute;
  bottom: 120px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 10;
}

.indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.9);
  transform: scale(1.3);
}

.indicator.active {
  background: white;
  transform: scale(1.2);
  box-shadow: 0 2px 12px rgba(99, 102, 241, 0.5);
}

/* Emerging tagline - comes out from image */
.hero-tagline-container {
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  z-index: 5;
  text-align: center;
  pointer-events: none;
  perspective: 1000px;
}

.emerging-tagline {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin: 0;
  padding: 0 24px;
}

.tagline-word {
  font-size: 2.8rem;
  font-weight: 800;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  animation: breatheGlow 6s ease-in-out infinite;
}

.tagline-word:nth-child(1) { animation-delay: 0s; }
.tagline-word:nth-child(2) { animation-delay: 0.2s; }
.tagline-word:nth-child(4) { animation-delay: 0.4s; }
.tagline-word:nth-child(5) { animation-delay: 0.6s; }

@keyframes breatheGlow {
  0%, 100% {
    opacity: 0.3;
    text-shadow: 
      0 0 10px rgba(255, 255, 255, 0.2),
      0 0 20px rgba(255, 255, 255, 0.1),
      0 4px 15px rgba(0, 0, 0, 0.4);
  }
  50% {
    opacity: 1;
    text-shadow: 
      0 0 30px rgba(255, 255, 255, 0.8),
      0 0 60px rgba(255, 255, 255, 0.5),
      0 0 90px rgba(99, 102, 241, 0.4),
      0 4px 25px rgba(0, 0, 0, 0.6);
  }
}

.tagline-divider {
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.7);
  animation: breatheDivider 6s ease-in-out infinite;
  animation-delay: 0.3s;
}

@keyframes breatheDivider {
  0%, 100% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.8;
  }
}



/* Bottom CTA area */
.hero-bottom {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  animation: fadeUp 1s ease 0.5s both;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
}

.hero-cta.talent-cloud-cta {
  background: rgba(6, 182, 212, 0.95);
  backdrop-filter: blur(12px);
  color: white;
  box-shadow: 
    0 4px 24px rgba(6, 182, 212, 0.3),
    0 8px 32px rgba(6, 182, 212, 0.15);
}

.hero-cta.talent-cloud-cta:hover {
  background: rgba(6, 182, 212, 1);
  box-shadow: 
    0 8px 32px rgba(6, 182, 212, 0.4),
    0 12px 48px rgba(6, 182, 212, 0.25);
}

@keyframes fadeUp {
  from { 
    opacity: 0; 
    transform: translateX(-50%) translateY(30px); 
  }
  to { 
    opacity: 1; 
    transform: translateX(-50%) translateY(0); 
  }
}

.hero-cta {
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(12px);
  color: #4338ca;
  border: none;
  padding: 16px 36px;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.1),
    0 8px 32px rgba(99, 102, 241, 0.15);
  display: inline-flex;
  align-items: center;
  gap: 12px;
}

.hero-cta:hover {
  transform: translateY(-4px) scale(1.02);
  background: white;
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.12),
    0 12px 48px rgba(99, 102, 241, 0.25);
}

.cta-icon {
  font-size: 1.1rem;
}

.cta-arrow {
  transition: transform 0.3s ease;
  animation: bounce 2s infinite;
  font-size: 1.1rem;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(3px); }
}

/* ─── Main Content ───────────────────────────────────── */
.main-content {
  padding: 60px 48px;
  margin-top: 96px;
  max-width: 1400px;
  margin-left: auto;
  margin-right: auto;
}

.section-title {
  font-size: 1.75rem;
  color: #1e1b4b;
  text-align: center;
  margin-bottom: 40px;
  font-weight: 700;
  letter-spacing: -0.5px;
}

/* ─── Courses ────────────────────────────────────────── */
.courses-section { margin-bottom: 60px; }

.courses {
  display: flex;
  gap: 28px;
  justify-content: center;
  align-items: stretch;
  flex-wrap: wrap;
}

/* ─── Card (Glassmorphism + Soft) ────────────────────── */
.card {
  position: relative;
  width: 340px;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 32px 28px 28px;
  text-align: center;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow: hidden;
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.03),
    0 1px 2px rgba(0, 0, 0, 0.02),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.9);
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.card-background {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg,
    rgba(99, 102, 241, 0.05) 0%,
    rgba(168, 85, 247, 0.08) 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  pointer-events: none;
}

.card:hover .card-background { opacity: 1; }

.card:hover {
  transform: translateY(-12px) scale(1.02);
  box-shadow: 
    0 24px 48px rgba(99, 102, 241, 0.12),
    0 8px 16px rgba(0, 0, 0, 0.04),
    inset 0 1px 0 rgba(255, 255, 255, 0.9);
  border-color: rgba(99, 102, 241, 0.2);
}

/* Card Badge */
.card-badge {
  position: absolute;
  top: 16px;
  right: 16px;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 6px 12px;
  border-radius: 12px;
  z-index: 2;
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.3);
}

/* Icon */
.icon {
  font-size: 3.5rem;
  transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: inline-block;
  position: relative;
  z-index: 1;
  filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.1));
}

.card:hover .icon { 
  transform: scale(1.15) rotate(8deg) translateY(-4px); 
}

/* Card Text */
.card h3 {
  font-size: 1.25rem;
  color: #1e1b4b;
  font-weight: 700;
  position: relative;
  z-index: 1;
  transition: color 0.3s ease;
  margin: 0;
  letter-spacing: -0.3px;
}

.card:hover h3 { color: #4338ca; }

.card p {
  color: #64748b;
  font-size: 0.88rem;
  line-height: 1.6;
  position: relative;
  z-index: 1;
  margin: 0;
  transition: color 0.3s ease;
}

.card:hover p { color: #475569; }

/* Tags */
.card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: center;
  position: relative;
  z-index: 1;
}

.tag {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 10px;
  background: rgba(99, 102, 241, 0.08);
  color: #6366f1;
  border: none;
  transition: all 0.3s ease;
}

.card:hover .tag {
  background: rgba(99, 102, 241, 0.15);
  transform: translateY(-1px);
}

/* Button */
.btn {
  padding: 14px 28px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  border-radius: 14px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 600;
  width: 100%;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin-top: auto;
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.25);
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(99, 102, 241, 0.4);
}

.btn-arrow { 
  transition: transform 0.3s ease; 
  display: inline-block; 
}

.btn:hover .btn-arrow { transform: translateX(4px); }

/* ─── Talent Cloud Section ───────────────────────────── */
.talentcloud-section {
  margin-bottom: 40px;
}

.tc-banner {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tc-banner:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(6, 182, 212, 0.2);
}

.tc-banner-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #0c4a6e 0%, #0e7490 50%, #0891b2 100%);
  z-index: 0;
}

.tc-banner-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(59, 130, 246, 0.25) 0%, transparent 50%);
}

.tc-banner-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 48px;
  gap: 40px;
  color: white;
}

.tc-badge {
  display: inline-block;
  background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%);
  padding: 8px 18px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(34, 211, 238, 0.3);
}

.tc-banner-title {
  font-size: 2.4rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  background: linear-gradient(135deg, #fff 0%, #a5f3fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.tc-banner-tagline {
  font-size: 1.05rem;
  opacity: 0.9;
  margin: 0 0 20px 0;
  font-weight: 500;
}

.tc-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tc-feature {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.88rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-weight: 500;
  transition: all 0.3s ease;
}

.tc-feature:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

.tc-banner-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
}

.tc-enter-btn {
  background: linear-gradient(135deg, #22d3ee 0%, #3b82f6 100%);
  color: white;
  border: none;
  padding: 16px 36px;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 20px rgba(34, 211, 238, 0.35);
}

.tc-enter-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 32px rgba(34, 211, 238, 0.5);
}

/* ─── TalentForge Section ────────────────────────────── */
.talentforge-section {
  margin-bottom: 60px;
}

.tf-banner {
  position: relative;
  border-radius: 28px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.tf-banner:hover {
  transform: translateY(-8px);
  box-shadow: 0 32px 64px rgba(99, 102, 241, 0.2);
}

.tf-banner-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
  z-index: 0;
}

.tf-banner-bg::before {
  content: '';
  position: absolute;
  inset: 0;
  background: 
    radial-gradient(circle at 20% 50%, rgba(139, 92, 246, 0.4) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(236, 72, 153, 0.25) 0%, transparent 50%),
    radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.3) 0%, transparent 50%);
}

.tf-banner-content {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 48px;
  gap: 40px;
  color: white;
}

.tf-badge {
  display: inline-block;
  background: linear-gradient(135deg, #f472b6 0%, #c084fc 100%);
  padding: 8px 18px;
  border-radius: 12px;
  font-size: 0.78rem;
  font-weight: 700;
  margin-bottom: 16px;
  box-shadow: 0 4px 16px rgba(244, 114, 182, 0.3);
}

.tf-banner-title {
  font-size: 2.8rem;
  font-weight: 800;
  margin: 0 0 10px 0;
  background: linear-gradient(135deg, #fff 0%, #c4b5fd 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: -1px;
}

.tf-banner-tagline {
  font-size: 1.1rem;
  opacity: 0.9;
  margin: 0 0 24px 0;
  font-weight: 500;
}

.tf-features {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.tf-feature {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  padding: 10px 18px;
  border-radius: 12px;
  font-size: 0.88rem;
  border: 1px solid rgba(255, 255, 255, 0.15);
  font-weight: 500;
  transition: all 0.3s ease;
}

.tf-feature:hover {
  background: rgba(255, 255, 255, 0.18);
  transform: translateY(-2px);
}

.tf-banner-right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
}

.tf-stats-preview {
  display: flex;
  gap: 32px;
}

.tf-stat-item {
  text-align: center;
}

.tf-stat-value {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
  background: linear-gradient(135deg, #f472b6 0%, #c084fc 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tf-stat-label {
  font-size: 0.78rem;
  opacity: 0.75;
  font-weight: 500;
}

.tf-enter-btn {
  background: linear-gradient(135deg, #f472b6 0%, #a855f7 100%);
  color: white;
  border: none;
  padding: 16px 36px;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 4px 20px rgba(244, 114, 182, 0.35);
}

.tf-enter-btn:hover {
  transform: translateY(-3px) scale(1.02);
  box-shadow: 0 8px 32px rgba(244, 114, 182, 0.5);
}

/* ─── Testimonials ───────────────────────────────────── */
.testimonials { margin-bottom: 40px; }

.testimonials-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
}

.testimonial-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 28px;
  border-radius: 20px;
  box-shadow: 
    0 4px 24px rgba(0, 0, 0, 0.03),
    inset 0 1px 0 rgba(255, 255, 255, 0.8);
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: 1px solid rgba(255, 255, 255, 0.9);
}

.testimonial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(99, 102, 241, 0.1);
  border-color: rgba(99, 102, 241, 0.15);
}

.rating { 
  font-size: 1.1rem; 
  margin-bottom: 16px; 
  letter-spacing: 4px; 
}

.star { 
  color: #fbbf24;
  filter: drop-shadow(0 2px 4px rgba(251, 191, 36, 0.3));
}

.testimonial-text {
  color: #475569;
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 20px;
  font-style: italic;
}

.testimonial-author { 
  display: flex; 
  align-items: center; 
  gap: 14px; 
}

.author-avatar {
  font-size: 1.5rem;
  width: 48px; 
  height: 48px;
  display: flex; 
  align-items: center; 
  justify-content: center;
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  border-radius: 14px;
  flex-shrink: 0;
  box-shadow: 0 4px 12px rgba(99, 102, 241, 0.25);
}

.author-name { 
  margin: 0; 
  font-weight: 700; 
  color: #1e1b4b; 
  font-size: 0.95rem; 
}

.author-role { 
  margin: 0; 
  color: #64748b; 
  font-size: 0.85rem;
  font-weight: 500;
}

/* ─── Footer ─────────────────────────────────────────── */
.footer {
  background: rgba(255, 255, 255, 0.6);
  backdrop-filter: blur(20px);
  color: #475569;
  padding: 40px 48px;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.8);
  margin-top: 20px;
}

.footer-content { 
  max-width: 1200px; 
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.footer-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.footer-brand h3 { 
  font-size: 1.3rem; 
  margin: 0 0 8px 0; 
  background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  text-align: center;
}

.footer-brand p { 
  margin: 0 0 16px 0; 
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
}

.footer-links {
  width: 100%;
  text-align: center;
}

.footer-links p { 
  margin: 0 auto; 
  opacity: 0.7; 
  font-size: 0.88rem;
  text-align: center;
}

/* ─── Course Content ─────────────────────────────────── */
.course-content {
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 50%, #e8f0fe 100%);
  padding-top: 96px;
  color: #1a1a2e;
}

/* ─── Responsive ─────────────────────────────────────── */
@media (max-width: 768px) {
  .header { 
    padding: 0 20px; 
    height: 56px; 
    top: 12px;
    left: 12px;
    right: 12px;
    border-radius: 14px;
  }
  
  
  
  .header .logo { font-size: 1.15rem; }
  
  .mobile-menu-btn { display: block; }
  
  .nav-links {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(20px);
    border-radius: 14px;
    padding: 16px;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    opacity: 0;
    visibility: hidden;
    transform: translateY(-10px);
    transition: all 0.3s ease;
  }
  
  .nav-links.mobile-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }
  
  .nav-item { 
    padding: 12px 20px; 
    font-size: 0.9rem; 
    border-radius: 12px;
    text-align: center;
    width: 100%;
  }

  .hero { 
    margin-top: 80px; 
    height: calc(100vh - 80px);
    border-radius: 0 0 32px 32px;
  }
  
  .hero-tagline-container { top: 40px; }
  
  .tagline-word { 
    font-size: 1.5rem; 
    letter-spacing: 2px;
  }
  
  .tagline-divider { font-size: 1.2rem; }
  
  .emerging-tagline { gap: 8px; }
  
  .hero-cta { 
    padding: 14px 28px; 
    font-size: 0.9rem; 
  }
  
  .hero-indicators { bottom: 100px; }
  .hero-bottom { bottom: 32px; }

  .main-content { 
    margin-top: 80px; 
    padding: 40px 20px; 
  }
  
  .section-title { font-size: 1.5rem; }

  .courses { 
    flex-direction: column; 
    align-items: center; 
    gap: 20px; 
  }

  .card { 
    width: 100%; 
    max-width: 400px; 
  }

  .testimonials-grid { grid-template-columns: 1fr; }

  .footer { padding: 32px 20px; }
  
  .course-content { padding-top: 80px; }

  .tc-banner-content {
    flex-direction: column;
    padding: 28px 24px;
    text-align: center;
  }

  .tc-banner-title { font-size: 1.8rem; }
  .tc-banner-tagline { font-size: 0.95rem; }
  .tc-features { justify-content: center; }
  .tc-banner-right { align-items: center; }

  .tf-banner-content {
    flex-direction: column;
    padding: 32px 24px;
    text-align: center;
  }

  .tf-banner-title { font-size: 2rem; }
  .tf-banner-tagline { font-size: 1rem; }
  .tf-features { justify-content: center; }
  .tf-banner-right { align-items: center; }
  .tf-stats-preview { flex-wrap: wrap; justify-content: center; }
}

@media (max-width: 480px) {
  .header { 
    padding: 0 16px;
    top: 8px;
    left: 8px;
    right: 8px;
    height: 52px;
  }
  
  .header .logo { font-size: 1.05rem; }

  .hero { 
    margin-top: 68px; 
    height: calc(100vh - 68px);
    border-radius: 0 0 24px 24px;
  }
  
  .hero-tagline-container { top: 24px; }
  
  .tagline-word { 
    font-size: 1rem; 
    letter-spacing: 0.5px;
  }
  
  .tagline-divider { font-size: 0.8rem; }
  
  .emerging-tagline { 
    gap: 4px; 
    padding: 0 12px;
  }
  
  .hero-cta { 
    padding: 12px 24px; 
    font-size: 0.85rem;
    gap: 8px;
  }
  
  .hero-indicators { bottom: 90px; gap: 10px; }
  .indicator { width: 7px; height: 7px; }
  .hero-bottom { bottom: 28px; }

  .main-content { padding: 32px 16px; margin-top: 68px; }
  
  .card { 
    max-width: 100%;
    padding: 24px 20px;
  }
  
  .icon { font-size: 3rem; }
  .card-badge { font-size: 0.65rem; padding: 5px 10px; }
  .tag { font-size: 0.68rem; padding: 5px 10px; }
  
  .course-content { padding-top: 68px; }
}
</style>