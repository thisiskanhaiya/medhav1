<template>
    <div class="dashboard">
      
      <!-- Top Nav -->
      <header class="header">
        <h1>🎓 Medhasphere</h1>
        <nav class="nav-links">
          <span 
            v-for="course in courses" 
            :key="course.id"
            :class="{ active: selected === course.id }"
            @click="navigate(course.id)"
          >
            {{ course.icon }} {{ course.name }}
          </span>
        </nav>
      </header>
  
      <!-- Course Cards - hide when selected -->
      <main class="courses" v-if="!selected">
        <div 
          class="card" 
          v-for="course in courses" 
          :key="course.id"
          @click="navigate(course.id)"
        >
          <div class="icon">{{ course.icon }}</div>
          <h2>{{ course.name }}</h2>
          <p>{{ course.description }}</p>
          <button class="btn">Start Learning</button>
        </div>
      </main>
  
      <!-- Component loads here immediately -->
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
    { id: 'sdet', name: 'SDET', icon: '🧪', description: 'Software Development Engineer in Test' },
    { id: 'java', name: 'Java Development', icon: '☕', description: 'Master Java from Basics to Advanced' },
  ]
  
  const navigate = (id) => {
    selected.value = id
  }
  
  const currentComponent = computed(() => {
    if (selected.value === 'sdet') return SDETComponent
    if (selected.value === 'java') return JavaComponent
    return null
  })
  </script>
  
  <style scoped>
  .dashboard {
    width: 100%;
    min-height: 100vh;
    background: #f0f2f5;
    font-family: Arial, sans-serif;
  }
  
  /* Thin Top Nav */
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: linear-gradient(135deg, #6c63ff, #3f3d56);
    color: white;
    padding: 12px 30px;
    position: sticky;
    top: 0;
    z-index: 100;
  }
  
  .header h1 {
    font-size: 1.4rem;
    margin: 0;
  }
  
  .nav-links {
    display: flex;
    gap: 20px;
  }
  
  .nav-links span {
    cursor: pointer;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 0.9rem;
    transition: background 0.2s;
  }
  
  .nav-links span:hover {
    background: rgba(255,255,255,0.2);
  }
  
  .nav-links span.active {
    background: white;
    color: #6c63ff;
    font-weight: bold;
  }
  
  /* Cards */
  .courses {
    display: flex;
    gap: 30px;
    justify-content: center;
    flex-wrap: wrap;
    padding: 60px 40px;
  }
  
  .card {
    background: white;
    border-radius: 12px;
    padding: 40px 30px;
    width: 300px;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: transform 0.2s;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .icon {
    font-size: 4rem;
    margin-bottom: 15px;
  }
  
  .card h2 {
    font-size: 1.5rem;
    color: #3f3d56;
    margin-bottom: 10px;
  }
  
  .card p {
    color: #777;
    font-size: 0.95rem;
  }
  
  .btn {
    margin-top: 20px;
    padding: 12px 25px;
    background: #6c63ff;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 1rem;
    width: 100%;
  }
  
  .btn:hover {
    background: #574fd6;
  }
  
  .content {
    width: 100%;
  }
  </style>
