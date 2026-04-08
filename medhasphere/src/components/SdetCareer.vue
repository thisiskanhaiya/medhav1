<template>
  <div class="career-page">

    <!-- Hero -->
    <div class="career-hero">
      <span class="hero-badge">Career Guide</span>
      <h1>SDET Career – Present & Future</h1>
      <p>Understand the role, the industry, and where it's heading</p>
    </div>

    <!-- What is SDET -->
    <div class="career-card">
      <div class="card-heading">
        <span class="card-icon">🧑‍💻</span>
        <h2>What is an SDET?</h2>
      </div>
      <p class="card-body">
        A Software Development Engineer in Test (SDET) is not just a tester — they are a software engineer
        who specialises in quality. An SDET writes automation code, designs test frameworks, validates complex
        systems, and ensures software is production-ready at scale. They sit at the intersection of development
        and quality, and are expected to think like a developer while owning the reliability of the product.
      </p>
    </div>

    <!-- Industry Expects -->
    <div class="career-card">
      <div class="card-heading">
        <span class="card-icon">🏭</span>
        <h2>What the Industry Expects</h2>
      </div>
      <div class="points-grid">
        <div v-for="point in industryPoints" :key="point.title" class="point-item">
          <span class="point-icon">{{ point.icon }}</span>
          <div>
            <strong>{{ point.title }}</strong>
            <p>{{ point.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Tools -->
    <div class="career-card">
      <div class="card-heading">
        <span class="card-icon">🛠️</span>
        <h2>Current Tools & Industry Trends</h2>
      </div>
      <div class="tools-grid">
        <div class="tool-card" style="--tc: #10b981">
          <div class="tool-header">
            <span class="tool-icon">🌐</span>
            <div>
              <h3>Selenium</h3>
              <span class="tool-tag" style="background:#10b98120; color:#10b981">Enterprise Standard</span>
            </div>
          </div>
          <p class="tool-desc">
            Selenium remains the backbone of enterprise automation. It has a massive ecosystem, supports all
            major languages, and is deeply integrated into legacy and large-scale systems. If you work in a
            bank, insurance company, or any large organisation, Selenium is very likely in their stack.
          </p>
          <div class="tool-strengths">
            <span class="strength-chip" style="border-color:#10b981; color:#10b981">✓ Widely adopted in enterprise</span>
            <span class="strength-chip" style="border-color:#10b981; color:#10b981">✓ Multi-language support</span>
            <span class="strength-chip" style="border-color:#10b981; color:#10b981">✓ Huge community</span>
            <span class="strength-chip" style="border-color:#10b981; color:#10b981">✓ Strong legacy integration</span>
          </div>
        </div>

        <div class="tool-card" style="--tc: #6c63ff">
          <div class="tool-header">
            <span class="tool-icon">🎭</span>
            <div>
              <h3>Playwright</h3>
              <span class="tool-tag" style="background:#6c63ff20; color:#6c63ff">Modern & Fast</span>
            </div>
          </div>
          <p class="tool-desc">
            Playwright is the modern choice. Built by Microsoft, it is faster, more reliable, and aligned
            with how today's web works. It handles dynamic content, network interception, and multi-browser
            testing out of the box. Playwright is where the industry is actively moving.
          </p>
          <div class="tool-strengths">
            <span class="strength-chip" style="border-color:#6c63ff; color:#6c63ff">✓ Faster execution</span>
            <span class="strength-chip" style="border-color:#6c63ff; color:#6c63ff">✓ Auto-wait built-in</span>
            <span class="strength-chip" style="border-color:#6c63ff; color:#6c63ff">✓ Network interception</span>
            <span class="strength-chip" style="border-color:#6c63ff; color:#6c63ff">✓ AI-friendly design</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Future -->
    <div class="career-card">
      <div class="card-heading">
        <span class="card-icon">🔮</span>
        <h2>The Future of SDET</h2>
      </div>
      <div class="future-grid">
        <div v-for="point in futurePoints" :key="point.title" class="future-item">
          <span class="future-icon">{{ point.icon }}</span>
          <div>
            <strong>{{ point.title }}</strong>
            <p>{{ point.desc }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- What You Should Do -->
    <div class="career-card">
      <div class="card-heading">
        <span class="card-icon">🎯</span>
        <h2>What You Should Do</h2>
      </div>
      <div class="steps-list">
        <div v-for="item in adviceSteps" :key="item.step" class="step-item">
          <div class="step-number">{{ item.step }}</div>
          <div class="step-content">
            <strong>{{ item.title }}</strong>
            <p>{{ item.desc }}</p>
          </div>
        </div>
      </div>
      <div class="skills-row">
        <span v-for="s in coreSkills" :key="s.skill" class="skill-chip">
          {{ s.icon }} {{ s.skill }}
        </span>
      </div>
    </div>

    <!-- Closing -->
    <div class="closing-banner">
      <span class="closing-icon">🚀</span>
      <p>We cover both Selenium, API Automation and Playwright along with Real Time Interview Questions  in this platform to help you build a strong foundation and stay future-ready as an SDET.</p>
    </div>

  </div>
</template>

<script setup>
const industryPoints = [
  { icon: '⚙️', title: 'Automation First',     desc: 'Write robust, maintainable automation code — not just manual test cases.' },
  { icon: '🔗', title: 'End-to-End Thinking',  desc: 'Understand and test across UI, APIs, microservices, and databases.' },
  { icon: '🏗️', title: 'Framework Design',     desc: 'Design scalable test frameworks that teams can build on top of.' },
  { icon: '🛡️', title: 'Risk Identification',  desc: 'Identify critical paths, edge cases, and production risks before release.' },
  { icon: '🤝', title: 'Engineering Mindset',  desc: 'Collaborate with developers, contribute to CI/CD, and treat tests as code.' },
];

const futurePoints = [
  { icon: '🔌', title: 'API & Microservices Testing', desc: 'The shift is clear — UI testing alone is not enough. API and service-level testing is becoming the core skill of modern SDETs.' },
  { icon: '🤖', title: 'AI-Assisted Testing',         desc: 'AI is entering test generation, failure analysis, and intelligent assertions. SDETs who can use AI tools will have a massive productivity advantage.' },
  { icon: '⚡', title: 'Speed & Stability Focus',     desc: 'Flaky tests and slow pipelines are being eliminated. The focus is on fast, deterministic, and intelligent validation.' },
  { icon: '🎭', title: 'Playwright & AI Integration', desc: "Playwright's modern architecture and flexible APIs make it highly compatible with AI-assisted workflows — a key reason it is gaining industry momentum." },
];

const adviceSteps = [
  { step: '1', title: 'Master One Tool First',        desc: 'Go deep into either Selenium or Playwright. Build real projects, understand the internals, and get confident.' },
  { step: '2', title: 'Learn the Other Tool Too',     desc: 'Once strong in one, pick up the other. Flexibility across both tools makes you valuable in any team.' },
  { step: '3', title: 'Build API Automation Skills',  desc: 'REST Assured, Playwright API, or Axios — API testing is non-negotiable for a modern SDET.' },
  { step: '4', title: 'Design a Framework',           desc: 'Learn Page Object Model, reporting, CI/CD integration, and modular design.' },
  { step: '5', title: 'Use AI as a Productivity Tool',desc: 'Use GitHub Copilot or ChatGPT to write tests faster, debug smarter, and learn quicker.' },
];

const coreSkills = [
  { icon: '🔌', skill: 'API Automation' },
  { icon: '🏗️', skill: 'Framework Design' },
  { icon: '🧠', skill: 'Problem Solving' },
  { icon: '🔍', skill: 'System Thinking' },
  { icon: '🤖', skill: 'AI Productivity' },
  { icon: '🔄', skill: 'CI/CD Integration' },
];
</script>

<style scoped>
* { box-sizing: border-box; margin: 0; padding: 0; }

.career-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-family: 'Segoe UI', system-ui, sans-serif;
}

.career-hero {
  background: linear-gradient(135deg, #6c63ff, #a78bfa);
  border-radius: 16px;
  padding: 36px 32px;
  color: white;
  text-align: left;
}

.hero-badge {
  display: inline-block;
  background: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 20px;
  padding: 4px 14px;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 14px;
}

.career-hero h1 { font-size: 1.6rem; font-weight: 800; margin-bottom: 8px; }
.career-hero p  { font-size: 0.92rem; opacity: 0.85; }

.career-card {
  background: white;
  border-radius: 14px;
  padding: 26px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  text-align: left;
}

.card-heading {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.card-icon { font-size: 1.4rem; }

.card-heading h2 {
  font-size: 1.05rem;
  font-weight: 700;
  color: #3f3d56;
}

.card-body {
  font-size: 0.88rem;
  color: #555;
  line-height: 1.8;
}

.points-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}

.point-item {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  background: #f8f8ff;
  border-radius: 10px;
  padding: 14px;
  border-left: 3px solid #6c63ff;
}

.point-icon { font-size: 1.2rem; flex-shrink: 0; margin-top: 2px; }

.point-item strong { display: block; font-size: 0.86rem; color: #3f3d56; margin-bottom: 4px; }
.point-item p      { font-size: 0.8rem; color: #666; line-height: 1.5; }

.tools-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.tool-card {
  border: 2px solid #f0f0f8;
  border-radius: 12px;
  padding: 20px;
  transition: border-color 0.2s;
}

.tool-card:hover { border-color: var(--tc); }

.tool-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.tool-icon { font-size: 2rem; }

.tool-header h3    { font-size: 1rem; font-weight: 800; color: #3f3d56; margin-bottom: 4px; }
.tool-tag          { font-size: 0.72rem; font-weight: 700; padding: 3px 10px; border-radius: 20px; }
.tool-desc         { font-size: 0.83rem; color: #555; line-height: 1.7; margin-bottom: 14px; }

.tool-strengths    { display: flex; flex-wrap: wrap; gap: 6px; }

.strength-chip {
  font-size: 0.72rem;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 20px;
  border: 1.5px solid;
  background: transparent;
}

.future-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
}

.future-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
  background: #f4f5fb;
  border-radius: 10px;
  padding: 14px;
}

.future-icon { font-size: 1.3rem; flex-shrink: 0; }

.future-item strong { display: block; font-size: 0.86rem; color: #3f3d56; margin-bottom: 4px; }
.future-item p      { font-size: 0.8rem; color: #666; line-height: 1.5; }

.steps-list { display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px; }

.step-item  { display: flex; gap: 14px; align-items: flex-start; }

.step-number {
  width: 32px; height: 32px;
  background: linear-gradient(135deg, #6c63ff, #a78bfa);
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.82rem;
  font-weight: 800;
  flex-shrink: 0;
  margin-top: 2px;
}

.step-content strong { display: block; font-size: 0.88rem; color: #3f3d56; margin-bottom: 3px; }
.step-content p      { font-size: 0.82rem; color: #666; line-height: 1.5; }

.skills-row { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 4px; }

.skill-chip {
  background: #f0f0ff;
  color: #6c63ff;
  border: 1.5px solid #d0d0ff;
  border-radius: 20px;
  padding: 5px 14px;
  font-size: 0.78rem;
  font-weight: 700;
}

.closing-banner {
  background: linear-gradient(135deg, #3f3d56, #2d2b45);
  border-radius: 14px;
  padding: 28px 32px;
  display: flex;
  align-items: center;
  gap: 16px;
  color: white;
}

.closing-icon { font-size: 2.2rem; flex-shrink: 0; }

.closing-banner p { font-size: 0.95rem; font-weight: 600; line-height: 1.6; opacity: 0.95; }

@media (max-width: 768px) {
  .tools-grid          { grid-template-columns: 1fr; }
  .career-hero         { padding: 24px 18px; }
  .career-hero h1      { font-size: 1.3rem; }
  .career-card         { padding: 18px; }
  .closing-banner      { flex-direction: column; text-align: center; padding: 24px 18px; }
}
</style>