<template>
    <div class="dashboard">
      
      <!-- Top Nav -->
      <header class="header">
        <h1 @click="goHome" class="logo">📚 Medhasphere</h1>
        <nav class="nav-links">
          <span 
            v-for="course in courses" 
            :key="course.id"
            :class="{ active: selected === course.id }"
            @click="navigate(course.id)"
            class="nav-item"
          >
            {{ course.icon }} {{ course.name }}
          </span>
        </nav>
      </header>
  
      <!-- Main Content Container -->
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
              <div class="icon">{{ course.icon }}</div>
              <h3>{{ course.name }}</h3>
              <p>{{ course.description }}</p>
              <button class="btn" @click.stop="navigate(course.id)">
                <span class="btn-text">Start Learning</span>
                <span class="btn-arrow">→</span>
              </button>
            </div>
          </div>
        </section>

        <!-- Testimonials Section -->
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
              <p>Master Testing & Development Skills</p>
            </div>
            <div class="footer-links">
              <p>© 2025 Medhasphere. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>

      <!-- Component loads here when course is selected -->
      <div class="content" v-if="selected">
        <component :is="currentComponent" />
      </div>
  
    </div>
  </template>

  <script setup>
  import { ref, computed } from 'vue'
  import SDETComponent from './SDET.vue'
  import JavaComponent from './Java.vue'
  
  const selected = ref(null)
  
  const courses = [
    { id: 'sdet', name: 'SDET', icon: '🔬', description: 'Master automation testing frameworks' },
    { id: 'java', name: 'Java Development', icon: '☕', description: 'Build enterprise applications' },
  ]

  const testimonials = [
    { avatar: '👨‍💼', name: 'Rajesh Kumar', role: 'QA Engineer', text: 'Medhasphere helped me transition from manual testing to automation within 3 months!' },
    { avatar: '👩‍💻', name: 'Priya Sharma', role: 'Java Developer', text: 'The structured learning path and practical exercises made Java concepts crystal clear.' },
    { avatar: '👨‍🎓', name: 'Arjun Patel', role: 'SDET Specialist', text: 'Best platform for learning SDET fundamentals. Highly recommended for career growth!' },
  ]
  
  const navigate = (id) => {
    selected.value = id
  }
  
  const goHome = () => {
    selected.value = null
  }
  
  const currentComponent = computed(() => {
    if (selected.value === 'sdet') return SDETComponent
    if (selected.value === 'java') return JavaComponent
    return null
  })
  </script>
  
  <style scoped>
  * {
    scroll-behavior: smooth;
  }

  .dashboard {
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(135deg, #f5f7fa 0%, #e8eef7 100%);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    position: relative;
    overflow-x: hidden;
  }

  /* 3D Background Effect */
  .dashboard::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 50%, rgba(102, 126, 234, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(118, 75, 162, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 30%, rgba(102, 126, 234, 0.05) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
  }

  .dashboard > * {
    position: relative;
    z-index: 1;
  }
  
  /* Premium Top Nav */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 16px 40px;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
    backdrop-filter: blur(10px);
  }
  
  .header .logo {
    font-size: 1.6rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: -0.5px;
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    user-select: none;
  }

  .header .logo:hover {
    transform: scale(1.08);
    text-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }

  .header .logo:active {
    transform: scale(0.95);
  }
  
  .nav-links {
    display: flex;
    gap: 16px;
  }
  
  .nav-item {
    cursor: pointer;
    padding: 8px 20px;
    border-radius: 25px;
    font-size: 0.95rem;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
    background: rgba(255, 255, 255, 0.1);
    border: 1.5px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(10px);
    user-select: none;
  }
  
  .nav-item:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.6);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }
  
  .nav-item:active {
    transform: translateY(0px) scale(0.98);
  }
  
  .nav-item.active {
    background: white;
    color: #667eea;
    font-weight: 700;
    box-shadow: 0 8px 25px rgba(255, 255, 255, 0.4);
    transform: translateY(-3px);
  }

  /* Main Content Container */
  .main-content {
    padding: 30px 40px 40px;
  }

  .section-title {
    font-size: 1.8rem;
    color: #2d3748;
    text-align: center;
    margin-bottom: 30px;
    font-weight: 700;
  }
  
  /* Modern Cards Container */
  .courses-section {
    margin-bottom: 40px;
  }

  .courses {
    display: flex;
    gap: 35px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  
  /* Reduced Card Styling */
  .card {
    position: relative;
    width: 280px;
    height: 340px;
    background: white;
    border-radius: 20px;
    padding: 30px;
    text-align: center;
    cursor: pointer;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    overflow: hidden;
    box-shadow: 0 10px 40px rgba(102, 126, 234, 0.15);
    border: 1px solid rgba(102, 126, 234, 0.1);
    transform-style: preserve-3d;
    perspective: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .card-background {
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(102, 126, 234, 0.05) 0%, rgba(118, 75, 162, 0.05) 100%);
    opacity: 0;
    transition: opacity 0.5s ease;
    pointer-events: none;
    border-radius: 20px;
  }

  .card:hover .card-background {
    opacity: 1;
  }

  .card:hover {
    transform: translateY(-18px) rotateX(8deg) rotateY(-5deg) scale(1.02);
    box-shadow: 0 35px 70px rgba(102, 126, 234, 0.3);
  }

  .card:active {
    transform: translateY(-8px) rotateX(2deg) scale(0.99);
  }
  
  .icon {
    font-size: 4rem;
    margin-bottom: 12px;
    transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
    display: inline-block;
    position: relative;
    z-index: 1;
  }

  .card:hover .icon {
    transform: scale(1.25) rotate(15deg);
    filter: drop-shadow(0 10px 20px rgba(102, 126, 234, 0.4));
  }

  .card:active .icon {
    transform: scale(1.08) rotate(8deg);
  }
  
  .card h3 {
    font-size: 1.4rem;
    color: #2d3748;
    margin: 10px 0 8px 0;
    font-weight: 700;
    letter-spacing: -0.5px;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .card:hover h3 {
    color: #667eea;
    transform: translateY(-6px);
  }
  
  .card p {
    color: #718096;
    font-size: 0.85rem;
    line-height: 1.5;
    margin: 0 0 12px 0;
    transition: color 0.3s ease;
    position: relative;
    z-index: 1;
    flex-grow: 1;
  }

  .card:hover p {
    color: #667eea;
  }
  
  .btn {
    margin-top: auto;
    padding: 10px 24px;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    width: 100%;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    position: relative;
    overflow: hidden;
    letter-spacing: 0.5px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    z-index: 1;
  }

  .btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.2);
    transition: left 0.5s ease;
  }

  .btn::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.3));
    opacity: 0;
    transition: opacity 0.4s ease;
  }
  
  .btn:hover {
    background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
    transform: translateY(-3px);
    box-shadow: 0 15px 30px rgba(102, 126, 234, 0.4);
  }

  .btn:hover::before {
    left: 100%;
  }

  .btn:active {
    transform: translateY(-1px);
    box-shadow: 0 6px 15px rgba(102, 126, 234, 0.3);
  }

  .btn-text {
    transition: all 0.3s ease;
  }

  .btn-arrow {
    transition: all 0.3s ease;
    display: inline-block;
  }

  .btn:hover .btn-arrow {
    transform: translateX(3px);
  }

  /* Testimonials Section */
  .testimonials {
    margin-bottom: 30px;
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
    max-width: 1000px;
    margin: 0 auto;
  }

  .testimonial-card {
    background: white;
    padding: 25px;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(102, 126, 234, 0.1);
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    border: 1px solid rgba(102, 126, 234, 0.1);
  }

  .testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 16px 35px rgba(102, 126, 234, 0.2);
  }

  .rating {
    font-size: 1.1rem;
    margin-bottom: 12px;
    letter-spacing: 2px;
  }

  .star {
    color: #ffc107;
    transition: all 0.2s ease;
  }

  .testimonial-card:hover .star {
    transform: scale(1.15);
  }

  .testimonial-text {
    color: #555;
    font-size: 0.9rem;
    line-height: 1.6;
    margin-bottom: 15px;
    font-style: italic;
  }

  .testimonial-author {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .author-avatar {
    font-size: 1.8rem;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, #667eea, #764ba2);
    border-radius: 50%;
    flex-shrink: 0;
  }

  .author-name {
    margin: 0;
    font-weight: 600;
    color: #2d3748;
    font-size: 0.9rem;
  }

  .author-role {
    margin: 0;
    color: #718096;
    font-size: 0.8rem;
  }

  /* Footer */
  .footer {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 30px 40px;
    text-align: center;
    margin-top: 40px;
  }

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-brand h3 {
    font-size: 1.2rem;
    margin: 0 0 6px 0;
  }

  .footer-brand p {
    margin: 0 0 15px 0;
    opacity: 0.9;
    font-size: 0.9rem;
  }

  .footer-links p {
    margin: 0;
    opacity: 0.8;
    font-size: 0.85rem;
  }

  .content {
    width: 100%;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .header {
      padding: 12px 20px;
    }

    .header .logo {
      font-size: 1.3rem;
    }

    .nav-links {
      gap: 10px;
    }

    .nav-item {
      padding: 6px 12px;
      font-size: 0.8rem;
    }

    .main-content {
      padding: 20px;
    }

    .section-title {
      font-size: 1.4rem;
      margin-bottom: 20px;
    }

    .courses {
      gap: 20px;
    }

    .card {
      width: 100%;
      max-width: 260px;
      height: 320px;
    }

    .icon {
      font-size: 3.5rem;
    }

    .card h3 {
      font-size: 1.2rem;
    }

    .card p {
      font-size: 0.8rem;
    }

    .testimonials-grid {
      gap: 18px;
    }

    .testimonial-card {
      padding: 20px;
    }

    .footer {
      padding: 20px;
    }
  }

  @media (max-width: 480px) {
    .header {
      padding: 10px 15px;
    }

    .header .logo {
      font-size: 1.1rem;
    }

    .main-content {
      padding: 15px;
    }

    .courses {
      gap: 15px;
    }

    .card {
      width: 100%;
      max-width: 240px;
      height: 300px;
      padding: 20px;
    }

    .icon {
      font-size: 3rem;
    }

    .testimonials-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
