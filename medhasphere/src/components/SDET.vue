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
      <aside :class="['sidebar', { 'sidebar-open': sidebarOpen, 'sidebar-minimized': sidebarMinimized }]">
       <div class="sidebar-header">
  <h2 
    v-if="!sidebarMinimized" 
    @click="selectedTask = null"        
    style="cursor:pointer; user-select:none;"
    title="Go to Welcome Screen"
  >
    🔬 SDET
  </h2>
  <div class="sidebar-controls">
    <button class="minimize-btn" @click="toggleSidebarMinimized">
      {{ sidebarMinimized ? '➡️' : '⬅️' }}
    </button>
    <button class="close-btn" @click="closeSidebar">✕</button>
  </div>
</div>
  
        <nav class="sidebar-nav" v-if="!sidebarMinimized">
          <div v-for="(section, index) in sections" :key="index" class="nav-section">
            <div
              class="nav-section-header"
              @click="toggleSection(index)"
              :class="{ active: activeSectionIndex === index }"
            >
              <span class="section-icon">{{ section.icon }}</span>
              <div class="section-info">
                <span class="section-title">{{ section.title }}</span>
                <span class="completion-percentage">{{ getSectionCompletion(section) }}%</span>
              </div>
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
                    <span class="category-qa-count">{{ cat.questions.length }} Qs</span>
                  </li>
                </template>
  
                <!-- Other sections: list tasks -->
                <template v-else>
                  <li
                    v-for="(task, tIndex) in section.tasks"
                    :key="tIndex"
                    @click="selectTask(task, section.title)"
                    :class="{ active: selectedTask?.title === task.title, completed: isTaskCompleted(task, section.id) }"
                  >
                    <input
                      type="checkbox"
                      :checked="isTaskCompleted(task, section.id)"
                      @click.stop="toggleTaskCompletion(task, section.id)"
                      class="completion-checkbox"
                    />
                    <span class="task-number">{{ tIndex + 1 }}</span>
                    <span class="task-name">{{ task.title }}</span>
                    <span class="completion-icon" v-if="isTaskCompleted(task, section.id)">✅</span>
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
              :class="{ completed: isQACompleted(qa, selectedCategory.title) }"
            >
              <div class="qa-header" @click="toggleQA(i)">
                <div class="qa-left">
                  <input
                    type="checkbox"
                    :checked="isQACompleted(qa, selectedCategory.title)"
                    @click.stop="toggleQACompletion(qa, selectedCategory.title)"
                    class="completion-checkbox"
                  />
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

          <!-- Navigation Buttons -->
          <div class="navigation-buttons" v-if="selectedTask && currentTasks.length > 1">
            <button @click="goToPrevious" :disabled="!hasPrevious" class="nav-btn prev-btn">⬅️ Previous</button>
            <button @click="goToNext" :disabled="!hasNext" class="nav-btn next-btn">Next ➡️</button>
          </div>
        </div>

        <!-- ── Welcome Screen ── -->
        <div v-else class="welcome-screen">
          <div class="welcome-icon">🚀</div>
          <h1>Welcome to SDET</h1>
          <p>Select a topic from the sidebar to get started</p>
         <div class="career-dropdown">
    <div class="career-dropdown-header" @click="showCareer = !showCareer">
      <div class="career-header-left">
        <span>📌</span>
        <span>SDET Career – Present & Future</span>
      </div>
      <span class="chevron" :class="{ rotated: showCareer }">▾</span>
    </div>

    <transition name="slide">
      <div v-if="showCareer" class="career-dropdown-body">
        <SdetCareer />
      </div>
    </transition>
  </div>
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
  
  <script setup>
  import { ref, computed } from 'vue';
  import seleniumTasksRaw   from '../data/seleniumTasks.json';
  import playwrightTasksRaw from '../data/playwrightTasks.json';
  import apiTasksRaw        from '../data/apiTasks.json';
  import interviewQARaw     from '../data/interviewQA.json';
  import SdetCareer from './SdetCareer.vue';


  // ── normalise helpers ──────────────────────────────────
  function toTaskArray(raw) {
    return Object.values(raw);
  }
  const showCareer = ref(false);
  // interviewQA.json → array of { title, icon, questions[] }
  const interviewCategories = Object.values(interviewQARaw);
  
  // ── state ──────────────────────────────────────────────
  const sidebarOpen        = ref(false);
  const sidebarMinimized   = ref(false);
  const openSections       = ref([]);
  const openExercises      = ref([]);
  const openQAs            = ref([]);
  const selectedTask       = ref(null);
  const selectedCategory   = ref(null);
  const currentSection     = ref('');
  const copiedIndex        = ref(null);
  const activeSectionIndex = ref(null);
  
  // ── completion tracking ─────────────────────────────────
  const completedTasks     = ref(new Set());
  const completedQAs       = ref(new Set());
  
  // ── 4 sections ─────────────────────────────────────────
  const sections = computed(() => [
    {
      id: 'selenium',
      title: 'Selenium Automation',
      icon: '🌐',
      tasks: toTaskArray(seleniumTasksRaw),
      categories: [],
    },
    {
      id: 'api',
      title: 'API Automation',
      icon: '🔌',
      tasks: toTaskArray(apiTasksRaw),
      categories: [],
    },
    {
      id: 'playwright',
      title: 'Playwright',
      icon: '🎭',
      tasks: toTaskArray(playwrightTasksRaw),
      categories: [],
    },
    {
      id: 'interview',
      title: 'Interview Preparation',
      icon: '📝',
      tasks: [],
      categories: interviewCategories,
    },
  ]);

  // ── navigation helpers ──────────────────────────────────
  const currentTasks = computed(() => {
    const section = sections.value.find(s => s.title === currentSection.value);
    return section ? section.tasks : [];
  });

  const currentTaskIndex = computed(() => {
    if (!selectedTask.value || !currentTasks.value.length) return -1;
    return currentTasks.value.findIndex(t => t.title === selectedTask.value.title);
  });

  const hasPrevious = computed(() => currentTaskIndex.value > 0);
  const hasNext = computed(() => currentTaskIndex.value < currentTasks.value.length - 1);

  const previousTask = computed(() => hasPrevious.value ? currentTasks.value[currentTaskIndex.value - 1] : null);
  const nextTask = computed(() => hasNext.value ? currentTasks.value[currentTaskIndex.value + 1] : null);

  // ── completion helpers ──────────────────────────────────
  const getSectionCompletion = (section) => {
    if (section.id === 'interview') {
      const totalQAs = section.categories.reduce((sum, cat) => sum + cat.questions.length, 0);
      const completedQAsInSection = section.categories.reduce((sum, cat) => {
        return sum + cat.questions.filter((qa) => completedQAs.value.has(`${cat.title}-${qa.id}`)).length;
      }, 0);
      return totalQAs > 0 ? Math.round((completedQAsInSection / totalQAs) * 100) : 0;
    } else {
      const totalTasks = section.tasks.length;
      const completedTasksInSection = section.tasks.filter((task) => completedTasks.value.has(`${section.id}-${task.title}`)).length;
      return totalTasks > 0 ? Math.round((completedTasksInSection / totalTasks) * 100) : 0;
    }
  };

  const isTaskCompleted = (task, sectionId) => {
    return completedTasks.value.has(`${sectionId}-${task.title}`);
  };

  const isQACompleted = (qa, categoryTitle) => {
    return completedQAs.value.has(`${categoryTitle}-${qa.id}`);
  };

  const toggleTaskCompletion = (task, sectionId) => {
    const key = `${sectionId}-${task.title}`;
    if (completedTasks.value.has(key)) {
      completedTasks.value.delete(key);
    } else {
      completedTasks.value.add(key);
    }
  };

  const toggleQACompletion = (qa, categoryTitle) => {
    const key = `${categoryTitle}-${qa.id}`;
    if (completedQAs.value.has(key)) {
      completedQAs.value.delete(key);
    } else {
      completedQAs.value.add(key);
    }
  };
  
  // ── helpers ────────────────────────────────────────────
  function toggleSidebar() { sidebarOpen.value = !sidebarOpen.value; }
  function toggleSidebarMinimized() { sidebarMinimized.value = !sidebarMinimized.value; }
  function closeSidebar()  { sidebarOpen.value = false; }
  
  function toggleSection(index) {
    activeSectionIndex.value = index;
    // Only allow one section open at a time
    if (openSections.value.includes(index)) {
      openSections.value = openSections.value.filter(i => i !== index);
    } else {
      openSections.value = [index];
    }
  }
  
  function openSection(index) {
    activeSectionIndex.value = index;
    if (!openSections.value.includes(index)) openSections.value.push(index);
  }
  
  function selectTask(task, section) {
    selectedTask.value     = task;
    selectedCategory.value = null;
    currentSection.value   = section;
    openExercises.value    = [];
    closeSidebar();
  }
  
  function selectCategory(cat, section) {
    selectedCategory.value = cat;
    selectedTask.value     = null;
    currentSection.value   = section;
    openQAs.value          = [];
    closeSidebar();
  }
  
  function goToPrevious() {
    if (hasPrevious.value) {
      selectTask(previousTask.value, currentSection.value);
    }
  }
  
  function goToNext() {
    if (hasNext.value) {
      selectTask(nextTask.value, currentSection.value);
    }
  }
  
  function toggleExercise(index) {
    const idx = openExercises.value.indexOf(index);
    if (idx === -1) openExercises.value.push(index);
    else            openExercises.value.splice(idx, 1);
  }
  
  function toggleQA(index) {
    const idx = openQAs.value.indexOf(index);
    if (idx === -1) openQAs.value.push(index);
    else            openQAs.value.splice(idx, 1);
  }
  
  async function copyCode(code, index) {
    await navigator.clipboard.writeText(code);
    copiedIndex.value = index;
    setTimeout(() => (copiedIndex.value = null), 2000);
  }
  </script>
  
<style scoped src="./SDET.css"></style>
