<template>
  <div class="talent-cloud" @scroll="handleScroll" ref="talentCloudRef">
    <!-- Hero Section -->
    <section class="tc-hero">
      <div class="tc-hero-content">
        <span class="tc-badge">Talent-as-a-Service</span>
        <h1 class="tc-hero-title">Hire. Evaluate. Scale —<br/>Through Our Talent Network</h1>
        <p class="tc-hero-subtitle">
          Access pre-trained, industry-ready talent. Deploy them on real work, 
          evaluate performance, and scale your team with flexibility.
        </p>
        <div class="tc-hero-buttons">
          <button class="tc-btn primary" @click="openRequestForm">
            <span class="btn-icon">🚀</span>
            Request Talent
          </button>
          <button class="tc-btn secondary" @click="scrollToTalentPool">
            <span class="btn-icon">👥</span>
            Explore Talent Pool
          </button>
        </div>
      </div>
      <div class="tc-hero-visual">
        <div class="floating-cards">
          <div class="float-card card-1">👨‍💻</div>
          <div class="float-card card-2">👩‍💻</div>
          <div class="float-card card-3">🧑‍💻</div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="tc-section tc-how-it-works">
      <h2 class="tc-section-title">How It Works</h2>
      <div class="steps-container">
        <div class="step" v-for="(step, index) in howItWorks" :key="index">
          <div class="step-number">{{ index + 1 }}</div>
          <div class="step-icon">{{ step.icon }}</div>
          <h3 class="step-title">{{ step.title }}</h3>
          <p class="step-desc">{{ step.description }}</p>
          <div class="step-connector" v-if="index < howItWorks.length - 1"></div>
        </div>
      </div>
    </section>

    <!-- Key Highlights Section -->
    <section class="tc-section tc-highlights">
      <h2 class="tc-section-title">Key Highlights</h2>
      <div class="highlights-grid">
        <div class="highlight-card" v-for="highlight in highlights" :key="highlight.title">
          <div class="highlight-icon">{{ highlight.icon }}</div>
          <h3>{{ highlight.title }}</h3>
          <p>{{ highlight.description }}</p>
        </div>
      </div>
    </section>

    <!-- Talent Categories Section -->
    <section class="tc-section tc-categories">
      <h2 class="tc-section-title">Talent Categories</h2>
      <div class="categories-grid">
        <div 
          class="category-card" 
          v-for="category in categories" 
          :key="category.id"
          :class="{ active: selectedCategory === category.id }"
          @click="selectCategory(category.id)"
        >
          <div class="category-icon">{{ category.icon }}</div>
          <h3>{{ category.title }}</h3>
          <p>{{ category.count }} professionals</p>
          <button class="category-cta">View Talent</button>
        </div>
      </div>
    </section>

    <!-- Talent Pool Section -->
    <section class="tc-section tc-talent-pool" id="talent-pool">
      <h2 class="tc-section-title">Talent Pool</h2>
      <p class="tc-section-subtitle">Browse our pre-trained, industry-ready professionals</p>
      
      <div class="talent-filters">
        <button 
          :class="['filter-btn', { active: activeFilter === 'all' }]"
          @click="activeFilter = 'all'"
        >All</button>
        <button 
          v-for="cat in categories"
          :key="cat.id"
          :class="['filter-btn', { active: activeFilter === cat.id }]"
          @click="activeFilter = cat.id"
        >{{ cat.shortName }}</button>
      </div>

      <div class="talent-grid">
        <div class="talent-card" v-for="talent in filteredTalent" :key="talent.id">
          <div class="talent-header">
            <div class="talent-avatar">{{ talent.avatar }}</div>
            <div class="talent-info">
              <h3>{{ talent.name }}</h3>
              <span class="talent-id">{{ talent.uniqueId }}</span>
            </div>
            <span :class="['status-badge', talent.status]">
              {{ talent.status === 'available' ? 'Available' : 'Deployed' }}
            </span>
          </div>
          
          <div class="talent-skills">
            <span class="skill-tag" v-for="skill in talent.skills" :key="skill">{{ skill }}</span>
          </div>
          
          <div class="talent-meta">
            <span class="experience">{{ talent.experience }}</span>
          </div>
          
          <div class="talent-location" v-if="talent.location">
            <span>📍 {{ talent.location }}</span>
            <span class="divider">•</span>
            <span>🎓 {{ talent.education }}</span>
          </div>
          
          <p class="talent-project">{{ talent.projectDescription }}</p>
          
          <div class="talent-actions">
            <button class="action-btn view" @click="viewProfile(talent)">View Profile</button>
            <button class="action-btn request" @click="requestTalent(talent)" :disabled="talent.status !== 'available'">
              Request Talent
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Platform Assurance Section -->
    <section class="tc-section tc-assurance">
      <h2 class="tc-section-title">Platform Assurance</h2>
      <div class="assurance-grid">
        <div class="assurance-item" v-for="item in assuranceItems" :key="item.title">
          <div class="assurance-icon">{{ item.icon }}</div>
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="tc-section tc-final-cta">
      <div class="cta-content">
        <h2>Build your team with ready-to-perform talent</h2>
        <p>Get started today and access our network of skilled professionals</p>
        <div class="cta-buttons">
          <button class="tc-btn primary large" @click="openRequestForm">
            Request Talent
          </button>
          <button class="tc-btn secondary large" @click="openContactForm">
            Talk to Us
          </button>
        </div>
      </div>
    </section>

    <!-- Request Talent Modal -->
    <div class="modal-overlay" v-if="showRequestModal" @click.self="showRequestModal = false">
      <div class="request-modal">
        <button class="modal-close" @click="showRequestModal = false">✕</button>
        <h2>Request Talent</h2>
        <form @submit.prevent="submitRequest" class="request-form">
          <div class="form-group">
            <label>Company Name</label>
            <input type="text" v-model="requestForm.company" placeholder="Enter company name" required />
          </div>
          <div class="form-group">
            <label>Email</label>
            <input type="email" v-model="requestForm.email" placeholder="Enter email" required />
          </div>
          <div class="form-group">
            <label>Talent Category</label>
            <select v-model="requestForm.category" required>
              <option value="">Select category</option>
              <option v-for="cat in categories" :key="cat.id" :value="cat.id">{{ cat.title }}</option>
            </select>
          </div>
          <div class="form-group">
            <label>Number of Resources</label>
            <input type="number" v-model="requestForm.count" min="1" placeholder="1" required />
          </div>
          <div class="form-group">
            <label>Requirements</label>
            <textarea v-model="requestForm.requirements" placeholder="Describe your requirements..." rows="4"></textarea>
          </div>
          <button type="submit" class="tc-btn primary full-width">Submit Request</button>
        </form>
      </div>
    </div>

    <!-- Profile Modal -->
    <div class="modal-overlay" v-if="showProfileModal" @click.self="showProfileModal = false">
      <div class="profile-modal">
        <button class="modal-close" @click="showProfileModal = false">✕</button>
        <div class="profile-header">
          <div class="profile-avatar">{{ selectedTalent?.avatar }}</div>
          <div class="profile-info">
            <h2>{{ selectedTalent?.name }}</h2>
            <span class="profile-id">{{ selectedTalent?.uniqueId }}</span>
            <span :class="['status-badge', selectedTalent?.status]">
              {{ selectedTalent?.status === 'available' ? 'Available' : 'Deployed' }}
            </span>
          </div>
        </div>
        <div class="profile-body">
          <div class="profile-section">
            <h3>Skills</h3>
            <div class="profile-skills">
              <span class="skill-tag" v-for="skill in selectedTalent?.skills" :key="skill">{{ skill }}</span>
            </div>
          </div>
          <div class="profile-section">
            <h3>Experience</h3>
            <p>{{ selectedTalent?.experience }}</p>
          </div>
          <div class="profile-section">
            <h3>Recent Project</h3>
            <p>{{ selectedTalent?.projectDescription }}</p>
          </div>
        </div>
        <div class="profile-actions">
          <button class="tc-btn primary" @click="requestTalent(selectedTalent)" :disabled="selectedTalent?.status !== 'available'">
            Request This Talent
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

// Import talent data from JSON (Replace with API call for database)
import talentData from '../data/talentPool.json';

// State
const showRequestModal = ref(false);
const showProfileModal = ref(false);
const selectedTalent = ref(null);
const selectedCategory = ref(null);
const activeFilter = ref('all');

// Scroll behavior - hide header on scroll
const handleScroll = () => {
  const header = document.querySelector('.header');
  if (header) {
    const scrollTop = document.querySelector('.talent-cloud')?.scrollTop || window.scrollY;
    if (scrollTop > 100) {
      header.classList.add('header-hidden');
    } else {
      header.classList.remove('header-hidden');
    }
  }
};

onMounted(() => {
  const talentCloud = document.querySelector('.talent-cloud');
  if (talentCloud) {
    talentCloud.addEventListener('scroll', handleScroll);
  }
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  const talentCloud = document.querySelector('.talent-cloud');
  if (talentCloud) {
    talentCloud.removeEventListener('scroll', handleScroll);
  }
  window.removeEventListener('scroll', handleScroll);
  // Reset header visibility when leaving
  const header = document.querySelector('.header');
  if (header) {
    header.classList.remove('header-hidden');
  }
});

// Request Form
const requestForm = ref({
  company: '',
  email: '',
  category: '',
  count: 1,
  requirements: ''
});

// Data: How It Works
const howItWorks = [
  { icon: '📋', title: 'Share Requirement', description: 'Tell us your project needs and team requirements' },
  { icon: '🎯', title: 'Get Matched Talent', description: 'We match you with pre-vetted professionals' },
  { icon: '🚀', title: 'Deploy & Work', description: 'Onboard talent and start working immediately' },
  { icon: '📊', title: 'Evaluate Performance', description: 'Monitor progress with continuous feedback' },
  { icon: '✅', title: 'Continue / Hire / Replace', description: 'Flexible options based on your needs' }
];

// Data: Highlights
const highlights = [
  { icon: '🎓', title: 'Pre-Trained Talent', description: 'All professionals are trained on industry standards' },
  { icon: '💼', title: 'Real Project Experience', description: 'Hands-on experience with actual projects' },
  { icon: '🔄', title: 'Flexible Deployment', description: 'Scale up or down based on your needs' },
  { icon: '🔁', title: 'Replacement Support', description: 'Quick replacement if expectations not met' },
  { icon: '📈', title: 'Continuous Upskilling', description: 'Talent stays updated with latest technologies' },
  { icon: '👨‍🏫', title: 'Mentor-Backed Performance', description: 'Guided by experienced industry mentors' }
];

// Data: Categories (from JSON - can be replaced with API)
const categories = talentData.categories;

// Data: Talent Pool (from JSON - can be replaced with API)
// To replace with database: const talentPool = ref(await fetchTalentsFromAPI())
const talentPool = ref(talentData.talents);

// Data: Assurance Items
const assuranceItems = [
  { icon: '✅', title: 'Quality-Checked Talent', description: 'Every professional goes through rigorous assessment' },
  { icon: '📊', title: 'Performance Monitoring', description: 'Continuous tracking and feedback loops' },
  { icon: '🤝', title: 'Reliable Engagement', description: 'Transparent and flexible engagement models' },
  { icon: '👥', title: 'Bench Strength', description: 'Ready pool of talent for quick deployment' }
];

// Computed: Filtered Talent
const filteredTalent = computed(() => {
  if (activeFilter.value === 'all') return talentPool.value;
  return talentPool.value.filter(t => t.categoryId === activeFilter.value);
});

// Methods
function selectCategory(id) {
  selectedCategory.value = selectedCategory.value === id ? null : id;
  activeFilter.value = id;
  scrollToTalentPool();
}

function scrollToTalentPool() {
  document.getElementById('talent-pool')?.scrollIntoView({ behavior: 'smooth' });
}

function openRequestForm() {
  showRequestModal.value = true;
}

function openContactForm() {
  showRequestModal.value = true;
}

function viewProfile(talent) {
  selectedTalent.value = talent;
  showProfileModal.value = true;
}

function requestTalent(talent) {
  showProfileModal.value = false;
  requestForm.value.category = talent?.categoryId || '';
  showRequestModal.value = true;
}

function submitRequest() {
  // Backend Placeholder: API call to submit request
  console.log('Request submitted:', requestForm.value);
  alert('Request submitted successfully! We will contact you soon.');
  showRequestModal.value = false;
  requestForm.value = { company: '', email: '', category: '', count: 1, requirements: '' };
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

.talent-cloud {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #fafbff 0%, #f0f4ff 50%, #e8f0fe 100%);
  min-height: 100vh;
  height: 100vh;
  overflow-y: auto;
  color: #1e1b4b;
}

/* Hero Section */
.tc-hero {
  padding: 80px 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 70vh;
}

.tc-hero-content {
  flex: 1;
  max-width: 650px;
}

.tc-badge {
  display: inline-block;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  padding: 8px 20px;
  border-radius: 30px;
  font-size: 0.85rem;
  font-weight: 700;
  margin-bottom: 24px;
}

.tc-hero-title {
  font-size: 3.2rem;
  font-weight: 800;
  line-height: 1.15;
  margin: 0 0 24px 0;
  background: linear-gradient(135deg, #1e1b4b 0%, #4338ca 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tc-hero-subtitle {
  font-size: 1.15rem;
  color: #64748b;
  line-height: 1.8;
  margin: 0 0 32px 0;
}

.tc-hero-buttons {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.tc-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 14px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  border: none;
}

.tc-btn.primary {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(99, 102, 241, 0.3);
}

.tc-btn.primary:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 30px rgba(99, 102, 241, 0.45);
}

.tc-btn.secondary {
  background: rgba(255, 255, 255, 0.8);
  color: #6366f1;
  border: 2px solid rgba(99, 102, 241, 0.2);
}

.tc-btn.secondary:hover {
  background: white;
  border-color: #6366f1;
  transform: translateY(-3px);
}

.tc-btn.large {
  padding: 18px 40px;
  font-size: 1.1rem;
}

.tc-btn.full-width {
  width: 100%;
  justify-content: center;
}

.tc-hero-visual {
  flex: 0 0 300px;
  position: relative;
  height: 300px;
}

.floating-cards {
  position: relative;
  width: 100%;
  height: 100%;
}

.float-card {
  position: absolute;
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  box-shadow: 0 8px 32px rgba(99, 102, 241, 0.15);
  animation: float 6s ease-in-out infinite;
}

.float-card.card-1 { top: 20%; left: 10%; animation-delay: 0s; }
.float-card.card-2 { top: 50%; right: 10%; animation-delay: 1s; }
.float-card.card-3 { bottom: 10%; left: 30%; animation-delay: 2s; }

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-15px); }
}

/* Section Common */
.tc-section {
  padding: 80px 48px;
  max-width: 1400px;
  margin: 0 auto;
}

.tc-section-title {
  font-size: 2rem;
  font-weight: 800;
  text-align: center;
  margin: 0 0 16px 0;
  color: #1e1b4b;
}

.tc-section-subtitle {
  text-align: center;
  color: #64748b;
  font-size: 1rem;
  margin: 0 0 40px 0;
}

/* How It Works */
.tc-how-it-works {
  background: rgba(255, 255, 255, 0.5);
}

.steps-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 50px;
  flex-wrap: wrap;
}

.step {
  flex: 1;
  min-width: 180px;
  text-align: center;
  position: relative;
  padding: 24px 16px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.step:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.12);
}

.step-number {
  width: 32px;
  height: 32px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
  margin: 0 auto 16px;
}

.step-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.step-title {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #1e1b4b;
}

.step-desc {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* Highlights */
.highlights-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
  margin-top: 50px;
}

.highlight-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.9);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.highlight-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.2);
}

.highlight-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.highlight-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #1e1b4b;
}

.highlight-card p {
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  line-height: 1.6;
}

/* Categories */
.tc-categories {
  background: rgba(255, 255, 255, 0.5);
}

.categories-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 50px;
}

.category-card {
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  text-align: center;
  border: 2px solid transparent;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.category-card:hover,
.category-card.active {
  border-color: #6366f1;
  transform: translateY(-8px);
  box-shadow: 0 16px 40px rgba(99, 102, 241, 0.15);
}

.category-card.active {
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%);
}

.category-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

.category-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #1e1b4b;
}

.category-card p {
  font-size: 0.85rem;
  color: #64748b;
  margin: 0 0 20px 0;
}

.category-cta {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
  padding: 10px 24px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-cta:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
}

/* Talent Pool */
.talent-filters {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 10px 24px;
  border-radius: 25px;
  border: 2px solid rgba(99, 102, 241, 0.2);
  background: rgba(255, 255, 255, 0.8);
  color: #64748b;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border-color: transparent;
}

.talent-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 24px;
}

.talent-card {
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.9);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.talent-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(99, 102, 241, 0.12);
  border-color: rgba(99, 102, 241, 0.2);
}

.talent-header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.talent-avatar {
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
}

.talent-info {
  flex: 1;
}

.talent-info h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 4px 0;
  color: #1e1b4b;
}

.talent-id {
  font-size: 0.75rem;
  color: #64748b;
}

.status-badge {
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
}

.status-badge.available {
  background: #d1fae5;
  color: #065f46;
}

.status-badge.deployed {
  background: #fef3c7;
  color: #92400e;
}

.talent-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 14px;
}

.skill-tag {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  padding: 5px 12px;
  border-radius: 8px;
  font-size: 0.78rem;
  font-weight: 600;
}

.talent-meta {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 0.85rem;
  color: #1e1b4b;
  margin-bottom: 8px;
  font-weight: 600;
}

.talent-location {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 0.78rem;
  color: #64748b;
  margin-bottom: 12px;
}

.talent-location .divider {
  color: #cbd5e1;
}

.category-tag {
  background: rgba(99, 102, 241, 0.08);
  padding: 2px 8px;
  border-radius: 6px;
}

.talent-project {
  font-size: 0.88rem;
  color: #475569;
  line-height: 1.6;
  margin: 0 0 20px 0;
}

.talent-actions {
  display: flex;
  gap: 12px;
}

.action-btn {
  flex: 1;
  padding: 12px 16px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.action-btn.view {
  background: rgba(99, 102, 241, 0.1);
  color: #6366f1;
  border: none;
}

.action-btn.view:hover {
  background: rgba(99, 102, 241, 0.2);
}

.action-btn.request {
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  color: white;
  border: none;
}

.action-btn.request:hover:not(:disabled) {
  transform: scale(1.02);
  box-shadow: 0 4px 16px rgba(99, 102, 241, 0.3);
}

.action-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Assurance */
.tc-assurance {
  background: rgba(255, 255, 255, 0.5);
}

.assurance-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 24px;
  margin-top: 50px;
}

.assurance-item {
  text-align: center;
  padding: 32px 24px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 20px;
  transition: all 0.3s ease;
}

.assurance-item:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 32px rgba(99, 102, 241, 0.1);
}

.assurance-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

.assurance-item h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 8px 0;
  color: #1e1b4b;
}

.assurance-item p {
  font-size: 0.88rem;
  color: #64748b;
  margin: 0;
  line-height: 1.5;
}

/* Final CTA */
.tc-final-cta {
  background: linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%);
  border-radius: 32px;
  margin: 40px;
  max-width: calc(1400px - 80px);
}

.cta-content {
  text-align: center;
  padding: 60px 40px;
}

.cta-content h2 {
  font-size: 2.2rem;
  font-weight: 800;
  color: white;
  margin: 0 0 16px 0;
}

.cta-content p {
  font-size: 1.1rem;
  color: rgba(255, 255, 255, 0.8);
  margin: 0 0 32px 0;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

.tc-final-cta .tc-btn.secondary {
  background: rgba(255, 255, 255, 0.15);
  color: white;
  border-color: rgba(255, 255, 255, 0.3);
}

.tc-final-cta .tc-btn.secondary:hover {
  background: rgba(255, 255, 255, 0.25);
}

/* Modals */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.request-modal,
.profile-modal {
  background: white;
  border-radius: 24px;
  padding: 36px;
  max-width: 500px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 20px;
  right: 20px;
  background: rgba(0, 0, 0, 0.05);
  border: none;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.2s ease;
}

.modal-close:hover {
  background: rgba(0, 0, 0, 0.1);
}

.request-modal h2,
.profile-modal h2 {
  font-size: 1.5rem;
  font-weight: 800;
  margin: 0 0 24px 0;
  color: #1e1b4b;
}

.request-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 0.9rem;
  font-weight: 600;
  color: #1e1b4b;
}

.form-group input,
.form-group select,
.form-group textarea {
  padding: 14px 16px;
  border: 2px solid rgba(99, 102, 241, 0.2);
  border-radius: 12px;
  font-size: 0.95rem;
  font-family: inherit;
  transition: all 0.2s ease;
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.1);
}

/* Profile Modal */
.profile-header {
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(99, 102, 241, 0.1);
}

.profile-avatar {
  width: 70px;
  height: 70px;
  background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
}

.profile-info {
  flex: 1;
}

.profile-info h2 {
  margin: 0 0 6px 0;
}

.profile-id {
  font-size: 0.85rem;
  color: #64748b;
  display: block;
  margin-bottom: 8px;
}

.profile-section {
  margin-bottom: 24px;
}

.profile-section h3 {
  font-size: 0.9rem;
  font-weight: 700;
  color: #64748b;
  margin: 0 0 12px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.profile-section p {
  margin: 0;
  color: #1e1b4b;
  line-height: 1.6;
}

.profile-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.profile-actions {
  margin-top: 28px;
  padding-top: 20px;
  border-top: 1px solid rgba(99, 102, 241, 0.1);
}

/* Responsive */
@media (max-width: 768px) {
  .tc-hero {
    flex-direction: column;
    padding: 60px 24px;
    text-align: center;
    min-height: auto;
  }

  .tc-hero-title {
    font-size: 2.2rem;
  }

  .tc-hero-buttons {
    justify-content: center;
  }

  .tc-hero-visual {
    display: none;
  }

  .tc-section {
    padding: 60px 24px;
  }

  .tc-section-title {
    font-size: 1.6rem;
  }

  .steps-container {
    flex-direction: column;
  }

  .step {
    min-width: 100%;
  }

  .tc-final-cta {
    margin: 24px;
    border-radius: 24px;
  }

  .cta-content {
    padding: 48px 24px;
  }

  .cta-content h2 {
    font-size: 1.6rem;
  }

  .talent-grid {
    grid-template-columns: 1fr;
  }

  .request-modal,
  .profile-modal {
    padding: 24px;
  }
}

@media (max-width: 480px) {
  .tc-hero-title {
    font-size: 1.8rem;
  }

  .tc-btn {
    padding: 14px 24px;
    font-size: 0.9rem;
  }

  .talent-actions {
    flex-direction: column;
  }
}
</style>
