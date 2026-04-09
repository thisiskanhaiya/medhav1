<template>
  <div class="about-page" ref="aboutPage">
    <!-- Fixed Nav that hides on scroll -->
    <nav :class="['about-nav', { 'nav-hidden': isNavHidden }]">
      <div class="nav-logo">Medha<span>Sphere</span></div>
      <div class="nav-links-inner">
        <a href="#who">Who It's For</a>
        <a href="#talent">Talent Flow</a>
        <a href="#company">Company Flow</a>
        <a href="#vision">Vision</a>
        <a href="#why">Why Us</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="about-hero">
      <div class="hero-bg"></div>
      <div class="hero-content">
        <div class="hero-badge">🌱 Talent Lifecycle Platform</div>
        <h1 class="hero-title">MedhaSphere –<br/><span class="accent">Talent Lifecycle</span> Platform</h1>
        <p class="hero-tagline">From Learning to Hiring – One Complete Ecosystem</p>
        <p class="hero-desc">A platform connecting skilled talent with companies through real proof of work. Not just resumes — validated skills, live projects, and data-driven matching.</p>
        <div class="hero-stats">
          <div class="stat">
            <div class="stat-num">10x<span>+</span></div>
            <div class="stat-label">Faster Hiring</div>
          </div>
          <div class="stat">
            <div class="stat-num">100<span>%</span></div>
            <div class="stat-label">Proof-Backed Talent</div>
          </div>
          <div class="stat">
            <div class="stat-num">0<span> Mis-hires</span></div>
            <div class="stat-label">Pre-validated Pipeline</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Who Uses Section -->
    <section class="who-section" id="who">
      <div class="section-header">
        <div class="section-tag">Users</div>
        <h2 class="section-title">Who Uses This Platform?</h2>
        <div class="section-divider"></div>
        <p class="section-sub">Two sides of the same ecosystem — learners growing into opportunities, companies finding ready-made talent.</p>
      </div>
      <div class="who-grid">
        <div class="who-card">
          <div class="who-icon">🎓</div>
          <h3>Talent — Students & Learners</h3>
          <p>Individuals who want to learn, prove their skills, and land better opportunities through structured tracks and real-world exposure.</p>
          <div class="who-tags">
            <span class="who-tag">College Students</span>
            <span class="who-tag">Self-learners</span>
            <span class="who-tag">Career Switchers</span>
            <span class="who-tag">Fresh Graduates</span>
          </div>
        </div>
        <div class="who-card">
          <div class="who-icon">🏢</div>
          <h3>Talent Seekers — Companies & Recruiters</h3>
          <p>Organizations that need verified, industry-ready candidates without lengthy sourcing cycles — fast, flexible, and reliable.</p>
          <div class="who-tags">
            <span class="who-tag">Startups</span>
            <span class="who-tag">Enterprises</span>
            <span class="who-tag">HR Teams</span>
            <span class="who-tag">Talent Scouts</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Talent Flow Section -->
    <section class="flow-section" id="talent">
      <div class="section-header">
        <div class="section-tag">Talent Journey</div>
        <h2 class="section-title">How Talent Grows on MedhaSphere</h2>
        <div class="section-divider"></div>
        <p class="section-sub">A structured path from entry to employment — no shortcuts, just proven skill-building.</p>
      </div>
      <div class="flow-grid">
        <div class="flow-step">
          <div class="step-icon">🚪</div>
          <div class="step-num">1</div>
          <h4>Join</h4>
          <p>Via college partner or individually — open to all</p>
        </div>
        <div class="flow-step">
          <div class="step-icon">📚</div>
          <div class="step-num">2</div>
          <h4>Learn</h4>
          <p>Seminars, crash courses, curated resources & mentors</p>
        </div>
        <div class="flow-step">
          <div class="step-icon">🛠️</div>
          <div class="step-num">3</div>
          <h4>Prove</h4>
          <p>Complete Task Tracks to validate skills with real output</p>
        </div>
        <div class="flow-step">
          <div class="step-icon">🚀</div>
          <div class="step-num">4</div>
          <h4>Compete</h4>
          <p>Hackathons, challenges, live industry projects</p>
        </div>
        <div class="flow-step">
          <div class="step-icon">🏆</div>
          <div class="step-num">5</div>
          <h4>Succeed</h4>
          <p>Better jobs, higher pay, multiple opportunities</p>
        </div>
      </div>
    </section>

    <!-- Company Flow Section -->
    <section class="company-section" id="company">
      <div class="section-header">
        <div class="section-tag">Company Journey</div>
        <h2 class="section-title">How Companies Hire on MedhaSphere</h2>
        <div class="section-divider"></div>
        <p class="section-sub">Skip the sourcing chaos. Get directly to talent that's already been validated.</p>
      </div>
      <div class="steps-list">
        <div class="step-card">
          <div class="step-circle">🔑</div>
          <div class="step-content">
            <h4>Join the Platform</h4>
            <p>Register your company and set up your hiring profile in minutes.</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-circle">📋</div>
          <div class="step-content">
            <h4>Submit Requirements</h4>
            <p>Define the role, skills, team size, and timeline you need.</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-circle">⚡</div>
          <div class="step-content">
            <h4>Instant Access</h4>
            <p>Get matched with pre-validated candidates — no CV screening needed.</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-circle">🔄</div>
          <div class="step-content">
            <h4>Flexible Hiring</h4>
            <p>Talent-as-a-Service, full-time hiring, or easy replacement options.</p>
          </div>
        </div>
        <div class="step-card">
          <div class="step-circle">🤝</div>
          <div class="step-content">
            <h4>Long-Term Partnership</h4>
            <p>Build a continuous talent pipeline. Grow your team without friction.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="vision-section" id="vision">
      <div class="section-header light">
        <div class="section-tag light">Platform Vision</div>
        <h2 class="section-title light">Where MedhaSphere Is Headed</h2>
        <div class="section-divider"></div>
        <p class="section-sub light">We're building the most intelligent talent ecosystem — from pilot to platform to industry standard.</p>
      </div>
      <div class="vision-grid">
        <div class="vision-card">
          <div class="vision-icon">🤖</div>
          <h4>AI-Based Matching</h4>
          <p>Candidates matched to roles based on verified skills and project history — not keywords.</p>
          <div class="vision-pill">🔬 In Development</div>
        </div>
        <div class="vision-card">
          <div class="vision-icon">⚙️</div>
          <h4>Automated Hiring Pipeline</h4>
          <p>End-to-end automation — from requirement to offer letter, without manual effort.</p>
          <div class="vision-pill">📍 Roadmap Q3</div>
        </div>
        <div class="vision-card">
          <div class="vision-icon">📊</div>
          <h4>Lifecycle Management</h4>
          <p>Track talent from first course to career milestones inside one integrated system.</p>
          <div class="vision-pill">🌐 Coming Soon</div>
        </div>
        <div class="vision-card">
          <div class="vision-icon">🌱</div>
          <h4>Pilot → Scale → Ecosystem</h4>
          <p>Starting focused, growing nationally — and eventually becoming the talent OS for India.</p>
          <div class="vision-pill">🚀 Vision 2027</div>
        </div>
      </div>
    </section>

    <!-- Why Section -->
    <section class="why-section" id="why">
      <div class="section-header">
        <div class="section-tag">Differentiators</div>
        <h2 class="section-title">Why MedhaSphere?</h2>
        <div class="section-divider"></div>
        <p class="section-sub">We didn't build another job board. We built a proof-of-work hiring infrastructure.</p>
      </div>
      <div class="why-grid">
        <div class="why-card">
          <div class="why-icon">⚡</div>
          <h4>Faster Hiring</h4>
          <p>Skip sourcing. Go from requirement to shortlist in hours, not weeks.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">✅</div>
          <h4>Skilled Candidates Only</h4>
          <p>Every candidate has completed structured learning and task validation before they enter the pool.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🔍</div>
          <h4>Real Proof of Work</h4>
          <p>Portfolios backed by actual tasks, challenges, and project submissions — not just self-claimed skills.</p>
        </div>
        <div class="why-card">
          <div class="why-icon">🏭</div>
          <h4>Industry-Ready Talent</h4>
          <p>Our curriculum is built around what companies actually need — no gap between college and the workplace.</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="cta-content">
        <div class="section-tag light">Get Started</div>
        <h2 class="cta-title">Ready to Join the <span class="accent">Ecosystem?</span></h2>
        <p class="cta-desc">Whether you're building your career or building your team — MedhaSphere is your starting point.</p>
        <div class="cta-cards">
          <div class="cta-card">
            <div class="cta-card-icon">🎓</div>
            <h3>Join as Talent</h3>
            <p>Learn, validate, and get hired faster through real proof of work.</p>
            <button class="cta-btn">Start Learning →</button>
          </div>
          <div class="cta-card">
            <div class="cta-card-icon">🏢</div>
            <h3>Hire Talent</h3>
            <p>Access pre-validated candidates without the hiring circus.</p>
            <button class="cta-btn">Post Requirements →</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="about-footer">
      <div class="footer-content">
        <div class="footer-brand">
          <h3>📚 MedhaSphere</h3>
          <p>Empowering Minds · Delivering Solutions</p>
        </div>
        <div class="footer-divider"></div>
        <p class="footer-copy">© 2025 <span>MedhaSphere</span>. All rights reserved. · Talent Lifecycle Platform · Built for the Future of Work.</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isNavHidden = ref(false)
let lastScrollY = 0

const handleScroll = () => {
  const currentScrollY = window.scrollY
  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    isNavHidden.value = true
  } else {
    isNavHidden.value = false
  }
  lastScrollY = currentScrollY
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.about-page {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
  font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
  color: #0d1117;
  line-height: 1.65;
  overflow-x: hidden;
}

/* Nav */
.about-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  height: 64px;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(14px);
  border-bottom: 1px solid #e3e8ef;
  transition: transform 0.35s ease, opacity 0.35s ease;
}

.about-nav.nav-hidden {
  transform: translateY(-100%);
  opacity: 0;
}

.nav-logo {
  font-family: 'Syne', sans-serif;
  font-weight: 800;
  font-size: 1.25rem;
  color: #0d1117;
  letter-spacing: -0.5px;
}

.nav-logo span {
  color: #10b981;
}

.nav-links-inner {
  display: flex;
  gap: 2rem;
}

.nav-links-inner a {
  text-decoration: none;
  color: #5a6478;
  font-size: 0.9rem;
  font-weight: 500;
  transition: color 0.2s;
}

.nav-links-inner a:hover {
  color: #10b981;
}

/* Hero */
.about-hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 120px 5% 80px;
  position: relative;
  overflow: hidden;
  background: linear-gradient(160deg, #f0fff6 0%, #ffffff 50%, #f5f8ff 100%);
}

.hero-bg {
  position: absolute;
  inset: 0;
  background:
    radial-gradient(ellipse 700px 500px at 20% 50%, rgba(16, 185, 129, 0.07) 0%, transparent 70%),
    radial-gradient(ellipse 500px 400px at 80% 20%, rgba(16, 185, 129, 0.05) 0%, transparent 70%);
  pointer-events: none;
}

.hero-content {
  position: relative;
  z-index: 1;
  max-width: 820px;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: rgba(16, 185, 129, 0.08);
  color: #059669;
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: 999px;
  padding: 0.35rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -1.5px;
  color: #0d1117;
  margin-bottom: 1rem;
}

.hero-title .accent {
  color: #10b981;
}

.hero-tagline {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1rem, 2vw, 1.3rem);
  font-weight: 600;
  color: #5a6478;
  margin-bottom: 1rem;
}

.hero-desc {
  font-size: 1rem;
  color: #5a6478;
  max-width: 540px;
  margin: 0 auto 2.5rem;
  line-height: 1.7;
}

.hero-stats {
  display: flex;
  gap: 3rem;
  justify-content: center;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat-num {
  font-family: 'Syne', sans-serif;
  font-size: 1.8rem;
  font-weight: 800;
  color: #0d1117;
  line-height: 1.2;
}

.stat-num span {
  color: #10b981;
}

.stat-label {
  font-size: 0.82rem;
  color: #5a6478;
  font-weight: 500;
  margin-top: 0.25rem;
}

/* Sections */
section {
  padding: 80px 5%;
}

.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-tag {
  display: inline-block;
  background: rgba(16, 185, 129, 0.08);
  color: #059669;
  border-radius: 6px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
}

.section-tag.light {
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
}

.section-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.8px;
  color: #0d1117;
  margin-bottom: 0.6rem;
  line-height: 1.25;
}

.section-title.light {
  color: #ffffff;
}

.section-divider {
  width: 48px;
  height: 3px;
  background: #10b981;
  border-radius: 2px;
  margin: 0.75rem auto 1rem;
}

.section-sub {
  font-size: 0.95rem;
  color: #5a6478;
  max-width: 520px;
  margin: 0 auto;
  line-height: 1.6;
}

.section-sub.light {
  color: rgba(255, 255, 255, 0.55);
}

/* Who Section */
.who-section {
  background: #f8fbff;
}

.who-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.who-card {
  background: #ffffff;
  border: 1.5px solid #e3e8ef;
  border-radius: 16px;
  padding: 2rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.who-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: #10b981;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.who-card:hover::before {
  transform: scaleX(1);
}

.who-card:hover {
  border-color: rgba(16, 185, 129, 0.3);
  box-shadow: 0 8px 40px rgba(16, 185, 129, 0.1);
  transform: translateY(-4px);
}

.who-icon {
  font-size: 2.5rem;
  margin-bottom: 0.75rem;
}

.who-card h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.who-card > p {
  font-size: 0.9rem;
  color: #5a6478;
  line-height: 1.6;
  margin-bottom: 0;
}

.who-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
}

.who-tag {
  background: rgba(16, 185, 129, 0.08);
  color: #059669;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Flow Section */
.flow-section {
  background: #f8fbff;
}

.flow-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 0;
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
}

.flow-step {
  padding: 1.5rem 1rem;
  text-align: center;
  position: relative;
}

.flow-step:not(:last-child)::after {
  content: '→';
  position: absolute;
  right: -0.5rem;
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  color: #10b981;
  z-index: 2;
}

.step-icon {
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
}

.step-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #10b981;
  color: #fff;
  font-family: 'Syne', sans-serif;
  font-size: 0.8rem;
  font-weight: 800;
  margin: 0 auto 0.6rem;
}

.flow-step h4 {
  font-family: 'Syne', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  color: #0d1117;
  line-height: 1.3;
}

.flow-step p {
  font-size: 0.8rem;
  color: #5a6478;
  line-height: 1.5;
}

/* Company Section */
.company-section {
  background: #ffffff;
}

.steps-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 1rem;
  max-width: 1100px;
  margin: 0 auto;
}

.step-card {
  background: #f8fbff;
  border: 1.5px solid #e3e8ef;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  transition: all 0.25s ease;
}

.step-card:hover {
  box-shadow: 0 6px 30px rgba(16, 185, 129, 0.1);
  transform: translateY(-3px);
  border-color: rgba(16, 185, 129, 0.25);
}

.step-circle {
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
}

.step-content h4 {
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.3rem;
  line-height: 1.3;
}

.step-content p {
  font-size: 0.85rem;
  color: #5a6478;
  line-height: 1.55;
}

/* Vision Section */
.vision-section {
  background: #0d1117;
  position: relative;
  overflow: hidden;
}

.vision-section::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 50%, rgba(16, 185, 129, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 50%, rgba(99, 102, 241, 0.1) 0%, transparent 50%);
  pointer-events: none;
}

.vision-section .section-header {
  position: relative;
  z-index: 1;
}

.vision-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.25rem;
  max-width: 1000px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.vision-card {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  padding: 1.75rem;
  color: #ffffff;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.vision-card::after {
  content: '';
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: rgba(16, 185, 129, 0.12);
}

.vision-card:hover {
  background: rgba(255, 255, 255, 0.08);
  transform: translateY(-4px);
}

.vision-icon {
  font-size: 1.8rem;
  margin-bottom: 0.75rem;
}

.vision-card h4 {
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.vision-card p {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.55;
}

.vision-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-top: 1rem;
  background: rgba(16, 185, 129, 0.15);
  color: #10b981;
  border-radius: 999px;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
}

/* Why Section */
.why-section {
  background: linear-gradient(135deg, #f0fff6 0%, #f8fbff 100%);
}

.why-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.25rem;
  max-width: 950px;
  margin: 0 auto;
}

.why-card {
  background: #ffffff;
  border: 1.5px solid #e3e8ef;
  border-radius: 16px;
  padding: 1.75rem;
  text-align: center;
  transition: all 0.25s ease;
}

.why-card:hover {
  box-shadow: 0 8px 32px rgba(16, 185, 129, 0.12);
  transform: translateY(-4px);
}

.why-icon {
  font-size: 2rem;
  margin-bottom: 0.6rem;
}

.why-card h4 {
  font-family: 'Syne', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  margin-bottom: 0.35rem;
  line-height: 1.3;
}

.why-card p {
  font-size: 0.85rem;
  color: #5a6478;
  line-height: 1.55;
}

/* CTA Section */
.cta-section {
  background: #0d1117;
  color: #ffffff;
  text-align: center;
  padding: 80px 5%;
}

.cta-content {
  max-width: 750px;
  margin: 0 auto;
}

.cta-title {
  font-family: 'Syne', sans-serif;
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 800;
  letter-spacing: -0.8px;
  margin-bottom: 0.75rem;
  line-height: 1.25;
}

.cta-title .accent {
  color: #10b981;
}

.cta-desc {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.55);
  max-width: 480px;
  margin: 0 auto 2.5rem;
  line-height: 1.6;
}

.cta-cards {
  display: flex;
  gap: 1.25rem;
  justify-content: center;
  flex-wrap: wrap;
}

.cta-card {
  flex: 1;
  min-width: 260px;
  max-width: 320px;
  background: rgba(255, 255, 255, 0.06);
  border: 1.5px solid rgba(255, 255, 255, 0.12);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  transition: all 0.25s ease;
}

.cta-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(16, 185, 129, 0.4);
  transform: translateY(-4px);
}

.cta-card-icon {
  font-size: 2rem;
  margin-bottom: 0.75rem;
}

.cta-card h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
  line-height: 1.3;
}

.cta-card p {
  font-size: 0.87rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 1.25rem;
  line-height: 1.55;
}

.cta-btn {
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  color: #ffffff;
  border: none;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.25s ease;
  box-shadow: 0 4px 20px rgba(16, 185, 129, 0.3);
}

.cta-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(16, 185, 129, 0.45);
}

/* Footer */
.about-footer {
  background: #1c2433;
  color: rgba(255, 255, 255, 0.5);
  padding: 3rem 5%;
}

.footer-content {
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;
}

.footer-brand h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.3rem;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 0.35rem;
}

.footer-brand h3 span {
  color: #10b981;
}

.footer-brand p {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 0;
}

.footer-divider {
  width: 100%;
  height: 1px;
  background: rgba(255, 255, 255, 0.1);
  margin: 1.5rem 0;
}

.footer-copy {
  font-size: 0.85rem;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.6;
}

.footer-copy span {
  color: #10b981;
}

/* Responsive */
@media (max-width: 768px) {
  .about-nav {
    padding: 0 4%;
    height: 56px;
  }

  .nav-links-inner {
    display: none;
  }

  .about-hero {
    padding: 100px 5% 60px;
    min-height: auto;
  }

  .hero-title {
    font-size: 1.9rem;
    letter-spacing: -1px;
  }

  .hero-stats {
    gap: 2rem;
  }

  .stat-num {
    font-size: 1.5rem;
  }

  section {
    padding: 60px 5%;
  }

  .who-grid {
    grid-template-columns: 1fr;
  }

  .flow-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .flow-step:not(:last-child)::after {
    display: none;
  }

  .steps-list {
    grid-template-columns: 1fr;
  }

  .vision-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .why-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .cta-cards {
    flex-direction: column;
    align-items: center;
  }

  .cta-card {
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.6rem;
  }

  .hero-tagline {
    font-size: 0.95rem;
  }

  .hero-desc {
    font-size: 0.9rem;
  }

  .hero-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .section-title {
    font-size: 1.4rem;
  }

  .flow-grid {
    grid-template-columns: 1fr;
  }

  .vision-grid {
    grid-template-columns: 1fr;
  }

  .why-grid {
    grid-template-columns: 1fr;
  }

  .who-card {
    padding: 1.5rem;
  }
}
</style>
