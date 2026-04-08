<template>
  <div class="talentforge-container">
    <!-- Header -->
    <header class="tf-header">
      <div class="tf-header-content">
        <div class="tf-header-left">
          <h1 class="tf-title">⚡ TalentForge</h1>
          <p class="tf-tagline">Forge your skills. Prove your talent. Get hired.</p>
        </div>
        <div class="tf-header-actions">
          <button class="tf-action-btn primary" @click="activeTab = 'quiz'">
            🎯 Start Quiz
          </button>
          <button class="tf-action-btn secondary" @click="activeTab = 'challenges'">
            🧩 Explore Challenges
          </button>
          <button class="tf-action-btn coins" @click="activeTab = 'coins'">
            💰 {{ totalCoins }} Coins
          </button>
        </div>
      </div>
    </header>

    <!-- Talent Score Widget -->
    <div class="talent-score-widget">
      <div class="score-card">
        <div class="score-circle">
          <svg viewBox="0 0 100 100">
            <circle class="score-bg" cx="50" cy="50" r="45"/>
            <circle class="score-progress" cx="50" cy="50" r="45" 
                    :style="{ strokeDashoffset: 283 - (283 * talentScore / 100) }"/>
          </svg>
          <div class="score-value">{{ talentScore }}</div>
        </div>
        <div class="score-label">Talent Score</div>
      </div>
      <div class="score-stats">
        <div class="stat-item">
          <span class="stat-icon">🎯</span>
          <div class="stat-info">
            <span class="stat-value">{{ quizAccuracy }}%</span>
            <span class="stat-label">Quiz Accuracy</span>
          </div>
        </div>
        <div class="stat-item">
          <span class="stat-icon">🏆</span>
          <div class="stat-info">
            <span class="stat-value">{{ challengesCompleted }}</span>
            <span class="stat-label">Challenges Done</span>
          </div>
        </div>
        <div class="stat-item">
          <span class="stat-icon">🔥</span>
          <div class="stat-info">
            <span class="stat-value">{{ currentStreak }} days</span>
            <span class="stat-label">Current Streak</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Tab Navigation -->
    <nav class="tf-tabs">
      <button 
        :class="['tf-tab', { active: activeTab === 'quiz' }]"
        @click="activeTab = 'quiz'"
      >
        🧠 QuickFire
      </button>
      <button 
        :class="['tf-tab', { active: activeTab === 'challenges' }]"
        @click="activeTab = 'challenges'"
      >
        🧩 Challenge Hub
      </button>
      <button 
        :class="['tf-tab', { active: activeTab === 'coins' }]"
        @click="activeTab = 'coins'"
      >
        💰 CoinQuest
      </button>
    </nav>

    <!-- Main Content Area -->
    <main class="tf-content">
      <!-- QuickFire Quiz Section -->
      <div v-if="activeTab === 'quiz'" class="quickfire-section">
        <div class="quiz-container">
          <!-- Quiz Card -->
          <div class="quiz-card" :class="{ answered: currentAnswer !== null }">
            <div class="quiz-progress">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: ((currentQuestionIndex + 1) / quizQuestions.length * 100) + '%' }"></div>
              </div>
              <span class="progress-text">{{ currentQuestionIndex + 1 }} / {{ quizQuestions.length }}</span>
            </div>
            
            <div class="quiz-difficulty">
              <span :class="['difficulty-badge', currentQuestion.difficulty]">
                {{ currentQuestion.difficulty }}
              </span>
              <span class="quiz-topic">{{ currentQuestion.topic }}</span>
            </div>

            <h2 class="quiz-question">{{ currentQuestion.question }}</h2>

            <div class="quiz-options">
              <button 
                v-for="(option, index) in currentQuestion.options" 
                :key="index"
                :class="['option-btn', getOptionClass(index)]"
                @click="selectAnswer(index)"
                :disabled="currentAnswer !== null"
              >
                <span class="option-letter">{{ ['A', 'B', 'C', 'D'][index] }}</span>
                <span class="option-text">{{ option }}</span>
                <span v-if="currentAnswer !== null && index === currentQuestion.correctAnswer" class="option-icon">✓</span>
                <span v-if="currentAnswer === index && index !== currentQuestion.correctAnswer" class="option-icon">✗</span>
              </button>
            </div>

            <!-- Explanation -->
            <transition name="slide-up">
              <div v-if="currentAnswer !== null" class="quiz-explanation">
                <div class="explanation-header">
                  <span v-if="isCorrect" class="result-badge correct">✓ Correct! +{{ currentQuestion.coins }} coins</span>
                  <span v-else class="result-badge incorrect">✗ Incorrect</span>
                </div>
                <p class="explanation-text">{{ currentQuestion.explanation }}</p>
                <div class="concept-tags">
                  <span class="concept-label">Related Concepts:</span>
                  <button 
                    v-for="concept in currentQuestion.concepts" 
                    :key="concept"
                    class="concept-tag"
                    @click="showConceptFlow(concept)"
                  >
                    {{ concept }}
                  </button>
                </div>
              </div>
            </transition>

            <!-- Navigation -->
            <div class="quiz-nav">
              <button 
                class="nav-btn prev" 
                @click="prevQuestion"
                :disabled="currentQuestionIndex === 0"
              >
                ← Previous
              </button>
              <button 
                class="concept-flow-btn"
                @click="showConceptModal = true"
              >
                📚 Jump to Concept Flow
              </button>
              <button 
                class="nav-btn next"
                @click="nextQuestion"
                :disabled="currentAnswer === null"
              >
                {{ currentQuestionIndex === quizQuestions.length - 1 ? 'Finish' : 'Next →' }}
              </button>
            </div>
          </div>
        </div>
      </div>

      <!-- Challenge Hub Section -->
      <div v-if="activeTab === 'challenges'" class="challenges-section">
        <!-- Challenge Sub-tabs -->
        <div class="challenge-tabs">
          <button 
            :class="['challenge-tab', { active: challengeType === 'hackathons' }]"
            @click="challengeType = 'hackathons'"
          >
            🚀 Hackathons
          </button>
          <button 
            :class="['challenge-tab', { active: challengeType === 'projects' }]"
            @click="challengeType = 'projects'"
          >
            💼 Paid Projects
          </button>
          <button 
            :class="['challenge-tab', { active: challengeType === 'hiring' }]"
            @click="challengeType = 'hiring'"
          >
            🎯 Task-Based Hiring
          </button>
        </div>

        <!-- Hackathons -->
        <div v-if="challengeType === 'hackathons'" class="challenge-grid">
          <div v-for="hack in hackathons" :key="hack.id" class="challenge-card hackathon">
            <div class="card-header">
              <span class="card-icon">🚀</span>
              <span :class="['difficulty-tag', hack.difficulty]">{{ hack.difficulty }}</span>
            </div>
            <h3>{{ hack.title }}</h3>
            <p>{{ hack.description }}</p>
            <div class="card-meta">
              <span class="meta-item">⏰ {{ hack.deadline }}</span>
              <span class="meta-item">👥 {{ hack.participants }} joined</span>
            </div>
            <div class="card-rewards">
              <span class="reward-item">🏆 {{ hack.prize }}</span>
              <span class="reward-item">💰 {{ hack.coins }} coins</span>
            </div>
            <button class="register-btn">Register Now</button>
          </div>
        </div>

        <!-- Paid Projects -->
        <div v-if="challengeType === 'projects'" class="challenge-grid">
          <div v-for="project in paidProjects" :key="project.id" class="challenge-card project">
            <div class="card-header">
              <span class="card-icon">💼</span>
              <span class="budget-tag">{{ project.budget }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <div class="skills-required">
              <span class="skills-label">Required Skills:</span>
              <div class="skill-tags">
                <span v-for="skill in project.skills" :key="skill" class="skill-tag">{{ skill }}</span>
              </div>
            </div>
            <div class="card-meta">
              <span class="meta-item">⏰ {{ project.duration }}</span>
              <span class="meta-item">📍 {{ project.type }}</span>
            </div>
            <button class="apply-btn">Apply Now</button>
          </div>
        </div>

        <!-- Task-Based Hiring -->
        <div v-if="challengeType === 'hiring'" class="challenge-grid">
          <div v-for="task in hiringTasks" :key="task.id" class="challenge-card hiring">
            <div class="card-header">
              <div class="company-info">
                <span class="company-logo">{{ task.companyLogo }}</span>
                <span class="company-name">{{ task.company }}</span>
              </div>
              <span class="urgency-tag" :class="task.urgency">{{ task.urgency }}</span>
            </div>
            <h3>{{ task.title }}</h3>
            <p>{{ task.description }}</p>
            <div class="task-details">
              <span class="detail-item">💼 {{ task.role }}</span>
              <span class="detail-item">📍 {{ task.location }}</span>
              <span class="detail-item">💰 {{ task.salary }}</span>
            </div>
            <div class="card-meta">
              <span class="meta-item deadline">⏰ Deadline: {{ task.deadline }}</span>
            </div>
            <button class="solve-btn">Solve & Apply</button>
          </div>
        </div>
      </div>

      <!-- CoinQuest Section -->
      <div v-if="activeTab === 'coins'" class="coinquest-section">
        <div class="coinquest-grid">
          <!-- Coins Summary -->
          <div class="coins-summary-card">
            <div class="coins-display">
              <span class="coins-icon">💰</span>
              <span class="coins-amount">{{ totalCoins }}</span>
              <span class="coins-label">Total Coins</span>
            </div>
            <div class="coins-breakdown">
              <div class="breakdown-item">
                <span>📝 Quizzes</span>
                <span>+{{ coinsFromQuizzes }}</span>
              </div>
              <div class="breakdown-item">
                <span>🏆 Challenges</span>
                <span>+{{ coinsFromChallenges }}</span>
              </div>
              <div class="breakdown-item">
                <span>🔥 Streaks</span>
                <span>+{{ coinsFromStreaks }}</span>
              </div>
            </div>
          </div>

          <!-- Streak Card -->
          <div class="streak-card">
            <h3>🔥 Current Streak</h3>
            <div class="streak-display">
              <span class="streak-number">{{ currentStreak }}</span>
              <span class="streak-unit">days</span>
            </div>
            <div class="streak-progress">
              <div class="streak-days">
                <span 
                  v-for="day in 7" 
                  :key="day"
                  :class="['streak-day', { active: day <= currentStreak % 7 || currentStreak >= 7 }]"
                >
                  {{ ['M', 'T', 'W', 'T', 'F', 'S', 'S'][day - 1] }}
                </span>
              </div>
              <p class="streak-message">{{ currentStreak >= 7 ? '🎉 Amazing week!' : `${7 - (currentStreak % 7)} days to weekly bonus!` }}</p>
            </div>
          </div>

          <!-- Badges/Achievements -->
          <div class="badges-card">
            <h3>🏅 Achievements</h3>
            <div class="badges-grid">
              <div v-for="badge in badges" :key="badge.id" :class="['badge-item', { locked: !badge.unlocked }]">
                <span class="badge-icon">{{ badge.icon }}</span>
                <span class="badge-name">{{ badge.name }}</span>
                <span v-if="!badge.unlocked" class="badge-lock">🔒</span>
              </div>
            </div>
          </div>

          <!-- Leaderboard -->
          <div class="leaderboard-card">
            <h3>🏆 Leaderboard</h3>
            <div class="leaderboard-list">
              <div 
                v-for="(user, index) in leaderboard" 
                :key="user.id"
                :class="['leaderboard-item', { 'current-user': user.isCurrentUser }]"
              >
                <span class="rank">{{ index + 1 }}</span>
                <span class="rank-medal" v-if="index < 3">{{ ['🥇', '🥈', '🥉'][index] }}</span>
                <span class="user-avatar">{{ user.avatar }}</span>
                <span class="user-name">{{ user.name }}</span>
                <span class="user-score">{{ user.score }} pts</span>
              </div>
            </div>
          </div>

          <!-- Action Buttons -->
          <div class="coinquest-actions">
            <button class="action-card challenge-others">
              <span class="action-icon">⚔️</span>
              <span class="action-title">Challenge Others</span>
              <span class="action-desc">1v1 Quiz Battle</span>
            </button>
            <button class="action-card team-battle">
              <span class="action-icon">👥</span>
              <span class="action-title">Team Battle</span>
              <span class="action-desc">Coming Soon</span>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- Concept Flow Modal -->
    <div v-if="showConceptModal" class="modal-overlay" @click.self="showConceptModal = false">
      <div class="concept-modal">
        <button class="modal-close" @click="showConceptModal = false">✕</button>
        <h2>📚 Concept Flow: {{ selectedConcept || 'Related Topics' }}</h2>
        <div class="concept-flow">
          <div class="flow-node start">
            <span class="node-icon">📖</span>
            <span class="node-text">Fundamentals</span>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-node">
            <span class="node-icon">🔧</span>
            <span class="node-text">Core Concepts</span>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-node">
            <span class="node-icon">💡</span>
            <span class="node-text">Advanced Topics</span>
          </div>
          <div class="flow-arrow">→</div>
          <div class="flow-node end">
            <span class="node-icon">🚀</span>
            <span class="node-text">Real-world Application</span>
          </div>
        </div>
        <div class="concept-resources">
          <h4>📌 Quick Resources</h4>
          <ul>
            <li>Introduction to {{ selectedConcept || 'Topic' }}</li>
            <li>Practice Exercises</li>
            <li>Interview Questions</li>
            <li>Project Ideas</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Coin Animation -->
    <div v-if="showCoinAnimation" class="coin-animation">
      <span class="coin-float">+{{ earnedCoins }} 💰</span>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

// Active tab state
const activeTab = ref('quiz');
const challengeType = ref('hackathons');

// Quiz state
const currentQuestionIndex = ref(0);
const currentAnswer = ref(null);
const showConceptModal = ref(false);
const selectedConcept = ref('');
const showCoinAnimation = ref(false);
const earnedCoins = ref(0);

// User stats (mock data)
const totalCoins = ref(2450);
const quizAccuracy = ref(78);
const challengesCompleted = ref(12);
const currentStreak = ref(5);
const coinsFromQuizzes = ref(1200);
const coinsFromChallenges = ref(950);
const coinsFromStreaks = ref(300);

// Computed talent score
const talentScore = computed(() => {
  return Math.round((quizAccuracy.value * 0.4) + (challengesCompleted.value * 2) + (currentStreak.value * 3));
});

// Quiz questions (mock data)
const quizQuestions = ref([
  {
    id: 1,
    question: "What is the primary purpose of the 'useEffect' hook in React?",
    options: [
      "To manage component state",
      "To perform side effects in function components",
      "To create custom hooks",
      "To optimize component rendering"
    ],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "React",
    explanation: "useEffect is used to perform side effects in function components, such as data fetching, subscriptions, or manually changing the DOM.",
    concepts: ["React Hooks", "Side Effects", "Component Lifecycle"],
    coins: 10
  },
  {
    id: 2,
    question: "Which data structure uses LIFO (Last In, First Out) principle?",
    options: [
      "Queue",
      "Stack",
      "Linked List",
      "Tree"
    ],
    correctAnswer: 1,
    difficulty: "Easy",
    topic: "Data Structures",
    explanation: "A Stack follows the LIFO principle where the last element added is the first one to be removed.",
    concepts: ["Stack", "LIFO", "Data Structures Basics"],
    coins: 5
  },
  {
    id: 3,
    question: "What is the time complexity of binary search?",
    options: [
      "O(n)",
      "O(n²)",
      "O(log n)",
      "O(1)"
    ],
    correctAnswer: 2,
    difficulty: "Medium",
    topic: "Algorithms",
    explanation: "Binary search has O(log n) time complexity because it halves the search space with each comparison.",
    concepts: ["Binary Search", "Time Complexity", "Divide and Conquer"],
    coins: 10
  },
  {
    id: 4,
    question: "In SQL, which clause is used to filter grouped results?",
    options: [
      "WHERE",
      "HAVING",
      "FILTER",
      "GROUP BY"
    ],
    correctAnswer: 1,
    difficulty: "Medium",
    topic: "SQL",
    explanation: "HAVING clause filters groups after GROUP BY, while WHERE filters individual rows before grouping.",
    concepts: ["SQL Aggregation", "GROUP BY", "HAVING vs WHERE"],
    coins: 10
  },
  {
    id: 5,
    question: "What design pattern does Redux follow?",
    options: [
      "Observer Pattern",
      "Factory Pattern",
      "Flux/Redux Pattern",
      "Singleton Pattern"
    ],
    correctAnswer: 2,
    difficulty: "Hard",
    topic: "State Management",
    explanation: "Redux follows the Flux architecture pattern with unidirectional data flow: Actions → Reducers → Store → View.",
    concepts: ["Redux", "Flux Architecture", "State Management"],
    coins: 15
  }
]);

const currentQuestion = computed(() => quizQuestions.value[currentQuestionIndex.value]);
const isCorrect = computed(() => currentAnswer.value === currentQuestion.value.correctAnswer);

// Quiz methods
function selectAnswer(index) {
  if (currentAnswer.value !== null) return;
  currentAnswer.value = index;
  
  if (index === currentQuestion.value.correctAnswer) {
    earnedCoins.value = currentQuestion.value.coins;
    totalCoins.value += currentQuestion.value.coins;
    showCoinAnimation.value = true;
    setTimeout(() => { showCoinAnimation.value = false; }, 1500);
  }
}

function getOptionClass(index) {
  if (currentAnswer.value === null) return '';
  if (index === currentQuestion.value.correctAnswer) return 'correct';
  if (index === currentAnswer.value) return 'incorrect';
  return 'disabled';
}

function nextQuestion() {
  if (currentQuestionIndex.value < quizQuestions.value.length - 1) {
    currentQuestionIndex.value++;
    currentAnswer.value = null;
  }
}

function prevQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--;
    currentAnswer.value = null;
  }
}

function showConceptFlow(concept) {
  selectedConcept.value = concept;
  showConceptModal.value = true;
}

// Hackathons (mock data)
const hackathons = ref([
  {
    id: 1,
    title: "AI Innovation Challenge",
    description: "Build an innovative AI-powered solution for real-world problems. Open to all skill levels.",
    difficulty: "Hard",
    deadline: "15 days left",
    participants: 234,
    prize: "$5,000",
    coins: 500
  },
  {
    id: 2,
    title: "Frontend Masters Sprint",
    description: "Create a stunning, accessible web application using modern frontend technologies.",
    difficulty: "Medium",
    deadline: "7 days left",
    participants: 156,
    prize: "$2,500",
    coins: 300
  },
  {
    id: 3,
    title: "API Design Championship",
    description: "Design and implement RESTful APIs following best practices and documentation standards.",
    difficulty: "Medium",
    deadline: "21 days left",
    participants: 89,
    prize: "$3,000",
    coins: 350
  }
]);

// Paid Projects (mock data)
const paidProjects = ref([
  {
    id: 1,
    title: "E-commerce Dashboard Development",
    description: "Build a responsive admin dashboard for an e-commerce platform with analytics and inventory management.",
    skills: ["React", "Node.js", "MongoDB", "Chart.js"],
    budget: "$800 - $1,200",
    duration: "2-3 weeks",
    type: "Remote"
  },
  {
    id: 2,
    title: "Mobile App UI/UX Redesign",
    description: "Redesign the user interface of an existing fitness tracking mobile application.",
    skills: ["Figma", "UI/UX", "Mobile Design", "Prototyping"],
    budget: "$500 - $800",
    duration: "1-2 weeks",
    type: "Remote"
  },
  {
    id: 3,
    title: "API Integration Specialist",
    description: "Integrate multiple third-party APIs including payment gateways and social media platforms.",
    skills: ["REST APIs", "Python", "OAuth", "Webhooks"],
    budget: "$600 - $900",
    duration: "1 week",
    type: "Remote"
  }
]);

// Hiring Tasks (mock data)
const hiringTasks = ref([
  {
    id: 1,
    company: "TechCorp Inc.",
    companyLogo: "🏢",
    title: "Build a Real-time Chat Feature",
    description: "Implement a WebSocket-based real-time chat system with typing indicators and read receipts.",
    role: "Full Stack Developer",
    location: "Remote",
    salary: "$80K - $120K",
    deadline: "5 days",
    urgency: "urgent"
  },
  {
    id: 2,
    company: "DataFlow Systems",
    companyLogo: "📊",
    title: "Data Pipeline Optimization",
    description: "Optimize an existing ETL pipeline to reduce processing time by at least 40%.",
    role: "Data Engineer",
    location: "Hybrid - NYC",
    salary: "$90K - $130K",
    deadline: "10 days",
    urgency: "normal"
  },
  {
    id: 3,
    company: "CloudNine Solutions",
    companyLogo: "☁️",
    title: "Kubernetes Deployment Setup",
    description: "Set up a production-ready Kubernetes cluster with auto-scaling and monitoring.",
    role: "DevOps Engineer",
    location: "Remote",
    salary: "$100K - $140K",
    deadline: "7 days",
    urgency: "urgent"
  }
]);

// Badges (mock data)
const badges = ref([
  { id: 1, icon: "🌟", name: "First Quiz", unlocked: true },
  { id: 2, icon: "🔥", name: "7-Day Streak", unlocked: true },
  { id: 3, icon: "🏆", name: "Challenge Winner", unlocked: true },
  { id: 4, icon: "💎", name: "1000 Coins", unlocked: true },
  { id: 5, icon: "🚀", name: "Speed Demon", unlocked: false },
  { id: 6, icon: "🎯", name: "Perfect Score", unlocked: false },
  { id: 7, icon: "👑", name: "Top 10", unlocked: false },
  { id: 8, icon: "⚡", name: "30-Day Streak", unlocked: false }
]);

// Leaderboard (mock data)
const leaderboard = ref([
  { id: 1, name: "Alex Chen", avatar: "👨‍💻", score: 4520 },
  { id: 2, name: "Sarah Miller", avatar: "👩‍💻", score: 4180 },
  { id: 3, name: "James Wilson", avatar: "🧑‍💻", score: 3950 },
  { id: 4, name: "You", avatar: "😊", score: 2450, isCurrentUser: true },
  { id: 5, name: "Mike Brown", avatar: "👨‍🎓", score: 2100 }
]);
</script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.talentforge-container {
  width: 100%;
  min-height: calc(100vh - 64px);
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: white;
  font-family: 'Segoe UI', sans-serif;
  overflow-x: hidden;
}

/* Header */
.tf-header {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 24px 40px;
}

.tf-header-content {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
}

.tf-title {
  font-size: 2rem;
  font-weight: 800;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.tf-tagline {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-top: 4px;
}

.tf-header-actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

.tf-action-btn {
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.tf-action-btn.primary {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.tf-action-btn.secondary {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.tf-action-btn.coins {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.tf-action-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
}

/* Talent Score Widget */
.talent-score-widget {
  max-width: 1400px;
  margin: 24px auto;
  padding: 0 40px;
  display: flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
}

.score-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.score-circle {
  position: relative;
  width: 100px;
  height: 100px;
}

.score-circle svg {
  transform: rotate(-90deg);
}

.score-bg {
  fill: none;
  stroke: rgba(255, 255, 255, 0.1);
  stroke-width: 8;
}

.score-progress {
  fill: none;
  stroke: url(#gradient);
  stroke: #f093fb;
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 283;
  transition: stroke-dashoffset 0.5s ease;
}

.score-value {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.8rem;
  font-weight: 800;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.score-label {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
}

.score-stats {
  display: flex;
  gap: 30px;
  flex-wrap: wrap;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(255, 255, 255, 0.05);
  padding: 12px 20px;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.stat-icon {
  font-size: 1.5rem;
}

.stat-info {
  display: flex;
  flex-direction: column;
}

.stat-value {
  font-size: 1.2rem;
  font-weight: 700;
}

.stat-label {
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
}

/* Tabs */
.tf-tabs {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.tf-tab {
  padding: 16px 24px;
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;
}

.tf-tab:hover {
  color: white;
}

.tf-tab.active {
  color: white;
  border-bottom-color: #f093fb;
}

/* Content Area */
.tf-content {
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 40px;
}

/* QuickFire Quiz */
.quickfire-section {
  display: flex;
  justify-content: center;
}

.quiz-container {
  max-width: 700px;
  width: 100%;
}

.quiz-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.quiz-progress {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}

.progress-bar {
  flex: 1;
  height: 6px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 3px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 3px;
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.6);
}

.quiz-difficulty {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
}

.difficulty-badge {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.difficulty-badge.Easy { background: #10b981; color: white; }
.difficulty-badge.Medium { background: #f59e0b; color: white; }
.difficulty-badge.Hard { background: #ef4444; color: white; }

.quiz-topic {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.quiz-question {
  font-size: 1.3rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 24px;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.option-btn {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: left;
}

.option-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.3);
}

.option-btn.correct {
  background: rgba(16, 185, 129, 0.2);
  border-color: #10b981;
}

.option-btn.incorrect {
  background: rgba(239, 68, 68, 0.2);
  border-color: #ef4444;
}

.option-btn.disabled {
  opacity: 0.5;
}

.option-letter {
  width: 28px;
  height: 28px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.85rem;
  flex-shrink: 0;
}

.option-text {
  flex: 1;
}

.option-icon {
  font-size: 1.2rem;
}

/* Quiz Explanation */
.quiz-explanation {
  margin-top: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border-left: 4px solid #667eea;
}

.explanation-header {
  margin-bottom: 12px;
}

.result-badge {
  padding: 6px 14px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
}

.result-badge.correct {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
}

.result-badge.incorrect {
  background: rgba(239, 68, 68, 0.2);
  color: #ef4444;
}

.explanation-text {
  color: rgba(255, 255, 255, 0.8);
  line-height: 1.6;
  margin-bottom: 16px;
}

.concept-tags {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
}

.concept-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.concept-tag {
  padding: 4px 12px;
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.4);
  border-radius: 20px;
  color: #a5b4fc;
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.concept-tag:hover {
  background: rgba(102, 126, 234, 0.4);
}

/* Quiz Navigation */
.quiz-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  gap: 12px;
  flex-wrap: wrap;
}

.nav-btn {
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.nav-btn.prev {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
}

.nav-btn.next {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border: none;
  color: white;
}

.nav-btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.concept-flow-btn {
  padding: 12px 20px;
  background: rgba(240, 147, 251, 0.2);
  border: 1px solid rgba(240, 147, 251, 0.4);
  border-radius: 10px;
  color: #f093fb;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.concept-flow-btn:hover {
  background: rgba(240, 147, 251, 0.3);
}

/* Challenge Hub */
.challenge-tabs {
  display: flex;
  gap: 8px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.challenge-tab {
  padding: 10px 20px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 25px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.challenge-tab.active {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-color: transparent;
}

.challenge-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 20px;
}

.challenge-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;
}

.challenge-card:hover {
  transform: translateY(-4px);
  border-color: rgba(255, 255, 255, 0.2);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.card-icon {
  font-size: 1.5rem;
}

.difficulty-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
}

.difficulty-tag.Easy { background: rgba(16, 185, 129, 0.2); color: #10b981; }
.difficulty-tag.Medium { background: rgba(245, 158, 11, 0.2); color: #f59e0b; }
.difficulty-tag.Hard { background: rgba(239, 68, 68, 0.2); color: #ef4444; }

.budget-tag {
  background: rgba(16, 185, 129, 0.2);
  color: #10b981;
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
}

.urgency-tag {
  padding: 4px 12px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.urgency-tag.urgent { background: rgba(239, 68, 68, 0.2); color: #ef4444; }
.urgency-tag.normal { background: rgba(102, 126, 234, 0.2); color: #a5b4fc; }

.challenge-card h3 {
  font-size: 1.1rem;
  margin-bottom: 8px;
}

.challenge-card p {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  line-height: 1.5;
  margin-bottom: 16px;
}

.card-meta {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  flex-wrap: wrap;
}

.meta-item {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.meta-item.deadline {
  color: #f59e0b;
}

.card-rewards {
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
}

.reward-item {
  background: rgba(240, 147, 251, 0.1);
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.85rem;
  color: #f093fb;
}

.skills-required {
  margin-bottom: 16px;
}

.skills-label {
  display: block;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.8rem;
  margin-bottom: 8px;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.skill-tag {
  background: rgba(102, 126, 234, 0.2);
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  color: #a5b4fc;
}

.company-info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.company-logo {
  font-size: 1.5rem;
}

.company-name {
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
}

.task-details {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 12px;
}

.detail-item {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.7);
}

.register-btn, .apply-btn, .solve-btn {
  width: 100%;
  padding: 12px;
  border-radius: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.register-btn {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.apply-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: white;
}

.solve-btn {
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  color: white;
}

.register-btn:hover, .apply-btn:hover, .solve-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
}

/* CoinQuest */
.coinquest-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
}

.coins-summary-card, .streak-card, .badges-card, .leaderboard-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.coins-display {
  text-align: center;
  margin-bottom: 20px;
}

.coins-icon {
  font-size: 3rem;
  display: block;
  margin-bottom: 8px;
}

.coins-amount {
  font-size: 2.5rem;
  font-weight: 800;
  display: block;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.coins-label {
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.9rem;
}

.coins-breakdown {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding-top: 16px;
}

.breakdown-item {
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.streak-card h3, .badges-card h3, .leaderboard-card h3 {
  margin-bottom: 16px;
  font-size: 1.1rem;
}

.streak-display {
  text-align: center;
  margin-bottom: 20px;
}

.streak-number {
  font-size: 3rem;
  font-weight: 800;
  color: #f59e0b;
}

.streak-unit {
  display: block;
  color: rgba(255, 255, 255, 0.6);
}

.streak-days {
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
}

.streak-day {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.5);
}

.streak-day.active {
  background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
  color: white;
}

.streak-message {
  text-align: center;
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.85rem;
}

.badges-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}

.badge-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 12px 8px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  position: relative;
}

.badge-item.locked {
  opacity: 0.4;
}

.badge-icon {
  font-size: 1.5rem;
}

.badge-name {
  font-size: 0.7rem;
  color: rgba(255, 255, 255, 0.7);
  text-align: center;
}

.badge-lock {
  position: absolute;
  top: 4px;
  right: 4px;
  font-size: 0.7rem;
}

.leaderboard-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.leaderboard-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
}

.leaderboard-item.current-user {
  background: rgba(102, 126, 234, 0.2);
  border: 1px solid rgba(102, 126, 234, 0.4);
}

.rank {
  width: 24px;
  font-weight: 700;
  color: rgba(255, 255, 255, 0.5);
}

.rank-medal {
  font-size: 1.2rem;
  margin-left: -20px;
}

.user-avatar {
  font-size: 1.3rem;
}

.user-name {
  flex: 1;
  font-weight: 500;
}

.user-score {
  color: #f093fb;
  font-weight: 600;
}

.coinquest-actions {
  grid-column: 1 / -1;
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.action-card {
  flex: 1;
  min-width: 200px;
  padding: 24px;
  border-radius: 16px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.action-card.challenge-others {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.action-card.team-battle {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: white;
}

.action-icon {
  font-size: 2rem;
  display: block;
  margin-bottom: 8px;
}

.action-title {
  font-size: 1.1rem;
  font-weight: 700;
  display: block;
}

.action-desc {
  font-size: 0.85rem;
  opacity: 0.7;
}

.action-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
}

/* Modal */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
}

.concept-modal {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  border-radius: 20px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
  position: relative;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-close {
  position: absolute;
  top: 16px;
  right: 16px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 1rem;
}

.concept-modal h2 {
  margin-bottom: 24px;
  font-size: 1.3rem;
}

.concept-flow {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  flex-wrap: wrap;
  margin-bottom: 24px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
}

.flow-node {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background: rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  min-width: 100px;
}

.flow-node.start {
  background: rgba(16, 185, 129, 0.2);
}

.flow-node.end {
  background: rgba(240, 147, 251, 0.2);
}

.node-icon {
  font-size: 1.5rem;
}

.node-text {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
}

.flow-arrow {
  color: rgba(255, 255, 255, 0.4);
  font-size: 1.2rem;
}

.concept-resources h4 {
  margin-bottom: 12px;
  color: rgba(255, 255, 255, 0.9);
}

.concept-resources ul {
  list-style: none;
  padding: 0;
}

.concept-resources li {
  padding: 8px 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  transition: all 0.2s ease;
}

.concept-resources li:hover {
  background: rgba(255, 255, 255, 0.08);
}

/* Coin Animation */
.coin-animation {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1001;
  pointer-events: none;
}

.coin-float {
  font-size: 2rem;
  font-weight: 800;
  color: #f59e0b;
  animation: floatUp 1.5s ease-out forwards;
  text-shadow: 0 0 20px rgba(245, 158, 11, 0.5);
}

@keyframes floatUp {
  0% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) scale(1.5);
  }
}

/* Transitions */
.slide-up-enter-active, .slide-up-leave-active {
  transition: all 0.3s ease;
}

.slide-up-enter-from, .slide-up-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

/* Responsive */
@media (max-width: 768px) {
  .tf-header {
    padding: 16px 20px;
  }

  .tf-header-content {
    flex-direction: column;
    text-align: center;
  }

  .tf-title {
    font-size: 1.5rem;
  }

  .tf-header-actions {
    justify-content: center;
  }

  .talent-score-widget {
    padding: 0 20px;
    flex-direction: column;
    align-items: center;
  }

  .score-stats {
    justify-content: center;
  }

  .tf-tabs {
    padding: 0 20px;
    overflow-x: auto;
  }

  .tf-content {
    padding: 20px;
  }

  .quiz-card {
    padding: 20px;
  }

  .quiz-question {
    font-size: 1.1rem;
  }

  .quiz-nav {
    flex-direction: column;
  }

  .challenge-grid {
    grid-template-columns: 1fr;
  }

  .badges-grid {
    grid-template-columns: repeat(4, 1fr);
  }

  .coinquest-actions {
    flex-direction: column;
  }
}
</style>
