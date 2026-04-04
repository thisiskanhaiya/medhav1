<template>
    <div class="coming-soon-container">
      <!-- Mobile Header -->
      <div class="mobile-header">
        <button class="hamburger" @click="goBack">
          <span class="back-arrow">←</span>
        </button>
        <h2 class="mobile-title">Java Development</h2>
      </div>

      <!-- Coming Soon Content -->
      <main class="coming-soon-content">
        <div class="coming-soon-card">
          <div class="coming-soon-icon">🚧</div>
          <h1>Coming Soon</h1>
          <p>We're working hard to bring you comprehensive Java Development courses. Stay tuned for exciting content on enterprise applications, Spring Framework, microservices, and more!</p>

          <div class="features-preview">
            <h3>What's Coming:</h3>
            <ul>
              <li>☕ Java Fundamentals & OOP</li>
              <li>🌱 Spring Boot & Framework</li>
              <li>🏗️ Enterprise Application Development</li>
              <li>🔧 Microservices Architecture</li>
              <li>🗄️ Database Integration</li>
              <li>☁️ Cloud Deployment</li>
            </ul>
          </div>

          <button class="back-btn" @click="goBack">
            <span class="btn-icon">←</span>
            Back to Dashboard
          </button>
        </div>
      </main>
    </div>
  </template>

  <script setup>
  const goBack = () => {
    // Navigate back to dashboard (home)
    window.location.href = '/'
  }
  </script>

  <style scoped>
  .coming-soon-container {
    display: flex;
    height: 100vh;
    width: 100%;
    overflow: hidden;
    font-family: 'Segoe UI', sans-serif;
    position: relative;
    background: #f0f2f5;
  }

  /* Mobile Header */
  .mobile-header {
    display: none;
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 56px;
    background: linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%);
    color: #1565c0;
    align-items: center;
    padding: 0 16px;
    gap: 12px;
    z-index: 200;
    box-shadow: 0 2px 8px rgba(25, 118, 210, 0.1);
    border-bottom: 1px solid #90caf9;
  }

  .back-arrow {
    font-size: 1.2rem;
    cursor: pointer;
    padding: 4px;
    color: #1976d2;
  }

  .mobile-title {
    font-size: 1rem;
    font-weight: 600;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    flex: 1;
  }

  /* Coming Soon Content */
  .coming-soon-content {
    flex: 1;
    height: 100vh;
    overflow-y: auto;
    background: #f0f2f5;
    padding: 80px 40px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .coming-soon-card {
    background: white;
    border-radius: 20px;
    padding: 60px 40px;
    box-shadow: 0 20px 60px rgba(25, 118, 210, 0.1);
    border: 1px solid rgba(25, 118, 210, 0.1);
    text-align: center;
    max-width: 600px;
    width: 100%;
  }

  .coming-soon-icon {
    font-size: 4rem;
    margin-bottom: 20px;
    display: block;
  }

  .coming-soon-card h1 {
    font-size: 2.5rem;
    color: #1565c0;
    margin-bottom: 20px;
    font-weight: 700;
  }

  .coming-soon-card > p {
    font-size: 1.1rem;
    color: #666;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  .features-preview {
    background: #e3f2fd;
    border-radius: 12px;
    padding: 30px;
    margin-bottom: 40px;
    text-align: left;
  }

  .features-preview h3 {
    font-size: 1.3rem;
    color: #1565c0;
    margin-bottom: 20px;
    font-weight: 600;
  }

  .features-preview ul {
    list-style: none;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 12px;
  }

  .features-preview li {
    font-size: 0.95rem;
    color: #424242;
    padding: 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .back-btn {
    background: linear-gradient(135deg, #1976d2, #42a5f5);
    color: white;
    border: none;
    padding: 14px 28px;
    border-radius: 12px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }

  .back-btn:hover {
    background: linear-gradient(135deg, #1565c0, #1976d2);
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(25, 118, 210, 0.3);
  }

  .btn-icon {
    font-size: 1.1rem;
  }

  /* Responsive Design */
  @media (max-width: 768px) {
    .mobile-header {
      display: flex;
    }

    .coming-soon-content {
      padding: 72px 20px 40px;
    }

    .coming-soon-card {
      padding: 40px 20px;
    }

    .coming-soon-card h1 {
      font-size: 2rem;
    }

    .features-preview {
      padding: 20px;
    }

    .features-preview ul {
      grid-template-columns: 1fr;
    }
  }
  </style>
