<template>
    <div class="sdet-container">
      <!-- Mobile Header -->
      <div class="mobile-header">
        <button class="hamburger" @click="toggleSidebar">
          <span :class="['hamburger-icon', { open: sidebarOpen }]">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
        <h2 class="mobile-title">{{ currentSection || 'SDET' }}</h2>
      </div>
  
      <!-- Overlay -->
      <div class="overlay" v-if="sidebarOpen" @click="closeSidebar"></div>
  
      <!-- Sidebar -->
      <aside :class="['sidebar', { 'sidebar-open': sidebarOpen }]">
        <div class="sidebar-header">
          <h2>SDET</h2>
          <button class="close-btn" @click="closeSidebar">✕</button>
        </div>
  
        <nav class="sidebar-nav">
          <div v-for="(section, index) in sections" :key="index" class="nav-section">
            <div
              class="nav-section-header"
              @click="toggleSection(index)"
              :class="{ active: activeSectionIndex === index }"
            >
              <span class="section-icon">{{ section.icon }}</span>
              <span class="section-title">{{ section.title }}</span>
              <span class="chevron" :class="{ rotated: openSections.includes(index) }">▾</span>
            </div>
  
            <transition name="slide">
              <ul v-if="openSections.includes(index)" class="nav-items">
  
                <!-- Interview Preparation: list categories -->
                <template v-if="section.id === 'interview'">
                  <li
                    v-for="(cat, cIndex) in section.categories"
                    :key="cIndex"
                    @click="selectCategory(cat, section.title)"
                    :class="{ active: selectedCategory?.title === cat.title }"
                  >
                    <span class="task-number">{{ cIndex + 1 }}</span>
                    <span class="task-name">{{ cat.title }}</span>
                  </li>
                </template>
  
                <!-- Other sections: list tasks -->
                <template v-else>
                  <li
                    v-for="(task, tIndex) in section.tasks"
                    :key="tIndex"
                    @click="selectTask(task, section.title)"
                    :class="{ active: selectedTask?.title === task.title }"
                  >
                    <span class="task-number">{{ tIndex + 1 }}</span>
                    <span class="task-name">{{ task.title }}</span>
                  </li>
                </template>
  
              </ul>
            </transition>
          </div>
        </nav>
      </aside>
  
      <!-- Main Content -->
      <main class="content">
  
        <!-- ── Interview Preparation View ── -->
        <div v-if="selectedCategory" class="task-view">
          <div class="task-header">
            <h1>{{ selectedCategory.icon }} {{ selectedCategory.title }}</h1>
            <span class="breadcrumb">Interview Preparation → {{ selectedCategory.title }}</span>
            <div class="qa-meta">
              <span class="qa-count">{{ selectedCategory.questions.length }} Questions</span>
              <div class="difficulty-legend">
                <span class="badge easy">Easy</span>
                <span class="badge medium">Medium</span>
                <span class="badge hard">Hard</span>
              </div>
            </div>
          </div>
  
          <div class="qa-list">
            <div
              v-for="(qa, i) in selectedCategory.questions"
              :key="qa.id"
              class="qa-card"
            >
              <div class="qa-header" @click="toggleQA(i)">
                <div class="qa-left">
                  <span class="qa-number">{{ qa.id }}</span>
                  <p class="qa-question">{{ qa.question }}</p>
                </div>
                <div class="qa-right">
                  <span :class="['badge', qa.difficulty.toLowerCase()]">
                    {{ qa.difficulty }}
                  </span>
                  <span class="chevron" :class="{ rotated: openQAs.includes(i) }">▾</span>
                </div>
              </div>
  
              <transition name="slide">
                <div v-if="openQAs.includes(i)" class="qa-answer">
                  <p>{{ qa.answer }}</p>
                </div>
              </transition>
            </div>
          </div>
        </div>
  
        <!-- ── Normal Task View (Selenium / API / Playwright) ── -->
        <div v-else-if="selectedTask" class="task-view">
          <div class="task-header">
            <h1>{{ selectedTask.title }}</h1>
            <span class="breadcrumb">{{ currentSection }} → {{ selectedTask.title }}</span>
          </div>
  
          <div class="description-card">
            <h2>📘 Overview</h2>
            <pre class="description-text">{{ selectedTask.description }}</pre>
          </div>
  
          <div class="key-points-card" v-if="selectedTask.keyPoints">
            <h2>🔑 Key Points</h2>
            <ul>
              <li v-for="(point, i) in selectedTask.keyPoints" :key="i">{{ point }}</li>
            </ul>
          </div>
  
          <div class="exercises-section" v-if="selectedTask.exercises">
            <h2>💻 Exercises</h2>
            <div
              v-for="(exercise, i) in selectedTask.exercises"
              :key="i"
              class="exercise-card"
            >
              <div class="exercise-header" @click="toggleExercise(i)">
                <div class="exercise-title">
                  <span class="exercise-number">{{ i + 1 }}</span>
                  <h3>{{ exercise.title }}</h3>
                </div>
                <span class="chevron" :class="{ rotated: openExercises.includes(i) }">▾</span>
              </div>
  
              <transition name="slide">
                <div v-if="openExercises.includes(i)" class="exercise-body">
                  <p class="scenario">{{ exercise.scenario }}</p>
  
                  <div v-if="exercise.steps" class="steps-section">
                    <h4>📋 Steps</h4>
                    <ol>
                      <li v-for="(step, s) in exercise.steps" :key="s">{{ step }}</li>
                    </ol>
                  </div>
  
                  <div v-if="exercise.code" class="code-section">
                    <div class="code-header">
                      <span>💻 Code</span>
                      <button @click="copyCode(exercise.code, i)" class="copy-btn">
                        {{ copiedIndex === i ? '✅ Copied!' : '📋 Copy' }}
                      </button>
                    </div>
                    <pre class="code-block"><code>{{ exercise.code }}</code></pre>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
  
        <!-- ── Welcome Screen ── -->
        <div v-else class="welcome-screen">
          <div class="welcome-icon">🚀</div>
          <h1>Welcome to SDET</h1>
          <p>Select a topic from the sidebar to get started</p>
          <div class="welcome-cards">
            <div
              v-for="(section, i) in sections"
              :key="i"
              class="welcome-card"
              @click="openSection(i)"
            >
              <span class="card-icon">{{ section.icon }}</span>
              <h3>{{ section.title }}</h3>
              <p>
                {{
                  section.id === 'interview'
                    ? section.categories.length + ' categories'
                    : section.tasks.length + ' topics'
                }}
              </p>
            </div>
          </div>
        </div>
  
      </main>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue';
  import seleniumTasksRaw   from '../data/seleniumTasks.json';
  import playwrightTasksRaw from '../data/playwrightTasks.json';
  import apiTasksRaw        from '../data/apiTasks.json';
  import interviewQARaw     from '../data/interviewQA.json';
  
  // ── types ──────────────────────────────────────────────
  interface QA {
    id: number;
    question: string;
    answer: string;
    difficulty: string;
  }
  interface InterviewCategory {
    title: string;
    icon: string;
    questions: QA[];
  }
  
  // ── normalise helpers ──────────────────────────────────
  function toTaskArray(raw: Record<string, any>): any[] {
    return Object.values(raw);
  }
  
  // interviewQA.json → array of { title, icon, questions[] }
  const interviewCategories = Object.values(interviewQARaw) as InterviewCategory[];
  
  // ── state ──────────────────────────────────────────────
  const sidebarOpen        = ref(false);
  const openSections       = ref<number[]>([]);
  const openExercises      = ref<number[]>([]);
  const openQAs            = ref<number[]>([]);
  const selectedTask       = ref<any>(null);
  const selectedCategory   = ref<InterviewCategory | null>(null);
  const currentSection     = ref('');
  const copiedIndex        = ref<number | null>(null);
  const activeSectionIndex = ref<number | null>(null);
  
  // ── 4 sections ─────────────────────────────────────────
  const sections = computed(() => [
    {
      id: 'selenium',
      title: 'Selenium Automation',
      icon: '🌐',
      tasks: toTaskArray(seleniumTasksRaw),
      categories: [] as InterviewCategory[],
    },
    {
      id: 'api',
      title: 'API Automation',
      icon: '🔌',
      tasks: toTaskArray(apiTasksRaw),
      categories: [] as InterviewCategory[],
    },
    {
      id: 'playwright',
      title: 'Playwright',
      icon: '🎭',
      tasks: toTaskArray(playwrightTasksRaw),
      categories: [] as InterviewCategory[],
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      icon: '📝',
      tasks: [] as any[],
      categories: interviewCategories,
    },
  ]);
  
  // ── helpers ────────────────────────────────────────────
  function toggleSidebar() { sidebarOpen.value = !sidebarOpen.value; }
  function closeSidebar()  { sidebarOpen.value = false; }
  
  function toggleSection(index: number) {
    activeSectionIndex.value = index;
    const idx = openSections.value.indexOf(index);
    if (idx === -1) openSections.value.push(index);
    else            openSections.value.splice(idx, 1);
  }
  
  function openSection(index: number) {
    activeSectionIndex.value = index;
    if (!openSections.value.includes(index)) openSections.value.push(index);
  }
  
  function selectTask(task: any, section: string) {
    selectedTask.value     = task;
    selectedCategory.value = null;
    currentSection.value   = section;
    openExercises.value    = [];
    closeSidebar();
  }
  
  function selectCategory(cat: InterviewCategory, section: string) {
    selectedCategory.value = cat;
    selectedTask.value     = null;
    currentSection.value   = section;
    openQAs.value          = [];
    closeSidebar();
  }
  
  function toggleExercise(index: number) {
    const idx = openExercises.value.indexOf(index);
    if (idx === -1) openExercises.value.push(index);
    else            openExercises.value.splice(idx, 1);
  }
  
  function toggleQA(index: number) {
    const idx = openQAs.value.indexOf(index);
    if (idx === -1) openQAs.value.push(index);
    else            openQAs.value.splice(idx, 1);
  }
  
  async function copyCode(code: string, index: number) {
    await navigator.clipboard.writeText(code);
    copiedIndex.value = index;
    setTimeout(() => (copiedIndex.value = null), 2000);
  }
  </script>
  
  <style scoped>
  * { box-sizing: border-box; margin: 0; padding: 0; }
  
  .sdet-container {
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    font-family: 'Segoe UI', sans-serif;
    position: relative;
  }
  
  /* ─── Mobile Header ─────────────────────────────────── */
  .mobile-header {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 56px;
    background: #1e1e2f;
    color: white;
    align-items: center;
    padding: 0 16px;
    gap: 12px;
    z-index: 200;
    box-shadow: 0 2px 8px rgba(0,0,0,0.3);
  }
  
  .mobile-title {
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  /* ─── Hamburger ─────────────────────────────────────── */
  .hamburger {
    background: none;
    border: none;
    cursor: pointer;
    padding: 4px;
    flex-shrink: 0;
  }
  
  .hamburger-icon {
    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 24px;
  }
  
  .hamburger-icon span {
    display: block;
    height: 2px;
    background: white;
    border-radius: 2px;
    transition: all 0.3s ease;
    transform-origin: center;
  }
  
  .hamburger-icon.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
  .hamburger-icon.open span:nth-child(2) { opacity: 0; }
  .hamburger-icon.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
  
  /* ─── Overlay ───────────────────────────────────────── */
  .overlay {
    display: none;
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.5);
    z-index: 149;
  }
  
  /* ─── Sidebar ───────────────────────────────────────── */
  .sidebar {
    width: 280px;
    height: 100vh;
    background: #1e1e2f;
    color: #c8c8d4;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    overflow: hidden;
    transition: transform 0.3s ease;
    z-index: 150;
  }
  
  .sidebar-header {
    padding: 24px 20px 16px;
    border-bottom: 1px solid #2e2e42;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  
  .sidebar-header h2 {
    color: #fff;
    font-size: 1.1rem;
    font-weight: 700;
  }
  
  .close-btn {
    display: none;
    background: none;
    border: none;
    color: #c8c8d4;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px 8px;
  }
  
  .sidebar-nav {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0;
  }
  
  .sidebar-nav::-webkit-scrollbar { width: 4px; }
  .sidebar-nav::-webkit-scrollbar-track { background: transparent; }
  .sidebar-nav::-webkit-scrollbar-thumb { background: #3e3e5a; border-radius: 4px; }
  
  /* ─── Nav Section Headers (left aligned) ────────────── */
  .nav-section-header {
    display: flex;
    align-items: center;
    padding: 12px 20px;
    cursor: pointer;
    gap: 10px;
    text-align: left;
  }
  
  .nav-section-header:hover,
  .nav-section-header.active { background: #2a2a40; }
  
  .section-icon { font-size: 1.1rem; flex-shrink: 0; }
  
  .section-title {
    flex: 1;
    font-size: 0.9rem;
    font-weight: 600;
    color: #fff;
    text-align: left;
  }
  
  .chevron {
    transition: transform 0.3s;
    font-size: 0.8rem;
    color: #8888aa;
    flex-shrink: 0;
  }
  .chevron.rotated { transform: rotate(180deg); }
  
  /* ─── Nav Items ─────────────────────────────────────── */
  .nav-items {
    list-style: none;
    background: #16162a;
  }
  
  .nav-items li {
    display: flex;
    align-items: flex-start;
    gap: 8px;
    padding: 10px 16px 10px 16px;
    font-size: 0.82rem;
    color: #9999bb;
    cursor: pointer;
    transition: all 0.2s;
    border-left: 3px solid transparent;
    text-align: left;
  }
  
  .nav-items li:hover {
    color: #fff;
    background: #1e1e35;
    border-left-color: #6c63ff;
  }
  
  .nav-items li.active {
    color: #fff;
    background: #1e1e35;
    border-left-color: #6c63ff;
  }
  
  .task-number {
    min-width: 20px;
    height: 20px;
    background: #3a3a5c;
    color: #a78bfa;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
    margin-right: 4px;
  }
  
  .nav-items li.active .task-number {
    background: #6c63ff;
    color: #fff;
  }
  
  .task-name {
    flex: 1;
    text-align: left;
    line-height: 1.4;
  }
  
  /* ─── Main Content ──────────────────────────────────── */
  .content {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    background: #f0f2f5;
    padding: 40px;
  }
  
  .content::-webkit-scrollbar { width: 6px; }
  .content::-webkit-scrollbar-track { background: #f0f2f5; }
  .content::-webkit-scrollbar-thumb { background: #c0c0d0; border-radius: 4px; }
  
  /* ─── Task Header ───────────────────────────────────── */
  .task-header {
    margin-bottom: 28px;
    text-align: left;
  }
  
  .task-view h1 {
    font-size: 1.8rem;
    color: #3f3d56;
    margin-bottom: 6px;
    text-align: left;
  }
  
  .breadcrumb {
    font-size: 0.82rem;
    color: #888;
    display: block;
    margin-bottom: 12px;
    text-align: left;
  }
  
  /* ─── QA Meta row ───────────────────────────────────── */
  .qa-meta {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-top: 10px;
    flex-wrap: wrap;
  }
  
  .qa-count {
    font-size: 0.82rem;
    background: #e8e8ff;
    color: #6c63ff;
    padding: 4px 10px;
    border-radius: 20px;
    font-weight: 600;
  }
  
  .difficulty-legend {
    display: flex;
    gap: 8px;
  }
  
  /* ─── Difficulty Badges ─────────────────────────────── */
  .badge {
    font-size: 0.72rem;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 20px;
    flex-shrink: 0;
  }
  
  .badge.easy   { background: #d1fae5; color: #065f46; }
  .badge.medium { background: #fef3c7; color: #92400e; }
  .badge.hard   { background: #fee2e2; color: #991b1b; }
  
  /* ─── QA List ───────────────────────────────────────── */
  .qa-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .qa-card {
    background: white;
    border-radius: 12px;
    padding: 0;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    overflow: hidden;
    text-align: left;
  }
  
  .qa-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 16px 20px;
    cursor: pointer;
    gap: 12px;
  }
  
  .qa-header:hover { background: #fafafa; }
  
  .qa-left {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    flex: 1;
    text-align: left;
  }
  
  .qa-number {
    min-width: 28px;
    height: 28px;
    background: #6c63ff;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: 700;
    flex-shrink: 0;
    margin-top: 1px;
  }
  
  .qa-question {
    font-size: 0.92rem;
    color: #2d2d3f;
    font-weight: 600;
    line-height: 1.5;
    text-align: left;
  }
  
  .qa-right {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  
  /* ─── QA Answer ─────────────────────────────────────── */
  .qa-answer {
    padding: 0 20px 16px 60px;
    border-top: 1px solid #f0f0f8;
    text-align: left;
  }
  
  .qa-answer p {
    font-size: 0.88rem;
    color: #555;
    line-height: 1.7;
    padding-top: 14px;
    text-align: left;
  }
  
  /* ─── Description / Key Points Cards ───────────────── */
  .description-card,
  .key-points-card,
  .exercise-card {
    background: white;
    border-radius: 12px;
    padding: 24px;
    margin-bottom: 20px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    text-align: left;
  }
  
  .description-card h2,
  .key-points-card h2,
  .exercises-section h2 {
    font-size: 1.1rem;
    color: #3f3d56;
    margin-bottom: 16px;
    display: flex;
    align-items: center;
    gap: 8px;
    text-align: left;
  }
  
  .description-text {
    font-family: 'Segoe UI', sans-serif;
    font-size: 0.88rem;
    color: #555;
    white-space: pre-wrap;
    line-height: 1.7;
    text-align: left;
  }
  
  .key-points-card ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .key-points-card ul li {
    font-size: 0.88rem;
    color: #555;
    padding-left: 20px;
    position: relative;
    line-height: 1.5;
    text-align: left;
  }
  
  .key-points-card ul li::before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #6c63ff;
    font-weight: bold;
  }
  
  /* ─── Exercises ─────────────────────────────────────── */
  .exercise-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    padding: 4px 0;
  }
  
  .exercise-title {
    display: flex;
    align-items: center;
    gap: 12px;
  }
  
  .exercise-number {
    width: 28px;
    height: 28px;
    background: #6c63ff;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.78rem;
    font-weight: bold;
    flex-shrink: 0;
  }
  
  .exercise-header h3 {
    font-size: 0.95rem;
    color: #3f3d56;
    text-align: left;
  }
  
  .exercise-body {
    margin-top: 16px;
    border-top: 1px solid #f0f0f5;
    padding-top: 16px;
    text-align: left;
  }
  
  .scenario {
    font-size: 0.88rem;
    color: #666;
    margin-bottom: 16px;
    line-height: 1.6;
    background: #f8f8ff;
    padding: 12px;
    border-radius: 8px;
    border-left: 4px solid #6c63ff;
    text-align: left;
  }
  
  .steps-section h4 {
    font-size: 0.9rem;
    color: #3f3d56;
    margin-bottom: 10px;
    text-align: left;
  }
  
  .steps-section ol {
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
  
  .steps-section ol li {
    font-size: 0.85rem;
    color: #555;
    line-height: 1.5;
    text-align: left;
  }
  
  /* ─── Code Block ─────────────────────────────────────── */
  .code-section {
    margin-top: 16px;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .code-header {
    background: #2d2d3f;
    color: #ccc;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.82rem;
  }
  
  .copy-btn {
    background: #4a4a6a;
    border: none;
    color: #eee;
    padding: 4px 12px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.78rem;
    transition: background 0.2s;
  }
  .copy-btn:hover { background: #6c63ff; }
  
  .code-block {
    background: #1e1e2f;
    color: #e0e0ff;
    padding: 20px;
    font-family: 'Fira Code', 'Courier New', monospace;
    font-size: 0.82rem;
    line-height: 1.6;
    overflow-x: auto;
    white-space: pre;
    margin: 0;
    text-align: left;
  }
  
  /* ─── Welcome Screen ─────────────────────────────────── */
  .welcome-screen {

    padding: 60px 20px;
  }
  
  .welcome-icon { font-size: 4rem; margin-bottom: 16px; }
  
  .welcome-screen h1 {
    font-size: 2rem;
    color: #3f3d56;
    margin-bottom: 8px;
    
  }
  
  .welcome-screen > p {
    color: #888;
    margin-bottom: 40px;
    font-size: 1rem;
    
  }
  
  .welcome-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 16px;
    max-width: 800px;
   
  }
  
  .welcome-card {
    background: white;
    border-radius: 12px;
    padding: 24px 16px;
    cursor: pointer;
    transition: transform 0.2s, box-shadow 0.2s;
    box-shadow: 0 2px 8px rgba(0,0,0,0.06);
    text-align: left;
  }
  
  .welcome-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(108,99,255,0.15);
  }
  
  .card-icon { font-size: 2rem; display: block; margin-bottom: 10px; }
  
  .welcome-card h3 {
    font-size: 0.95rem;
    color: #3f3d56;
    margin-bottom: 4px;
    text-align: left;
  }
  
  .welcome-card p {
    font-size: 0.78rem;
    color: #999;
    text-align: left;
  }
  
  /* ─── Slide Transition ───────────────────────────────── */
  .slide-enter-active,
  .slide-leave-active {
    transition: all 0.25s ease;
    overflow: hidden;
  }
  .slide-enter-from,
  .slide-leave-to { max-height: 0; opacity: 0; }
  .slide-enter-to,
  .slide-leave-from { max-height: 2000px; opacity: 1; }
  
  /* ─── Responsive Tablet ──────────────────────────────── */
  @media (max-width: 768px) {
    .mobile-header { display: flex; }
    .overlay { display: block; }
  
    .sidebar {
      position: fixed;
      top: 0; left: 0;
      height: 100vh;
      width: 280px;
      transform: translateX(-100%);
    }
  
    .sidebar.sidebar-open { transform: translateX(0); }
    .close-btn { display: block; }
  
    .content { padding: 72px 16px 24px; height: 100vh; }
  
    .task-view h1 { font-size: 1.4rem; }
  
    .description-card,
    .key-points-card,
    .exercise-card { padding: 16px; }
  
    .qa-answer { padding: 0 16px 14px 16px; }
  
    .code-block { font-size: 0.75rem; }
    .welcome-screen { padding: 20px 16px; }
    .welcome-screen h1 { font-size: 1.5rem; }
  }
  
  /* ─── Responsive Mobile ──────────────────────────────── */
  @media (max-width: 480px) {
    .sidebar { width: 100vw; }
    .content { padding: 64px 12px 20px; }
    .welcome-cards { grid-template-columns: 1fr 1fr; }
    .code-block { font-size: 0.7rem; padding: 12px; }
    .qa-header { padding: 12px 14px; }
    .qa-answer { padding: 0 14px 12px 14px; }
  }
  </style>
