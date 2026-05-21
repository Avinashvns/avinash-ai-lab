// app/dsa/page.js

import "./dsa.css";

export default function DSAPage() {
  return (
    <div className="dsa-page">

      {/* ================================================= */}
      {/* HERO SECTION */}
      {/* ================================================= */}

      <section className="dsa-hero">

        <div className="dsa-hero-content">

          <div className="dsa-badge">
            MASTER DSA FOR TOP TECH COMPANIES
          </div>

          <h1 className="dsa-hero-title">
            Data Structures & Algorithms
          </h1>

          <p className="dsa-hero-text">
            Learn problem solving deeply with visualizations,
            patterns, optimized approaches, interview tricks,
            and real-world intuition.
          </p>

          <div className="dsa-hero-buttons">

            <button className="dsa-primary-btn">
              Start Learning
            </button>

            <button className="dsa-secondary-btn">
              Explore Roadmap
            </button>

          </div>

        </div>

        <div className="dsa-hero-image-wrapper">

          <img
            src="/images/dsa/dsa-hero.png"
            alt="DSA Hero"
            className="dsa-hero-image"
          />

        </div>

      </section>


      {/* ================================================= */}
      {/* ROADMAP SECTION */}
      {/* ================================================= */}

      <section className="dsa-section">

        <div className="dsa-section-header">

          <h2>
            Complete DSA Roadmap
          </h2>

          <p>
            Master every important topic step by step.
          </p>

        </div>

        <div className="dsa-roadmap-grid">

          <div className="dsa-roadmap-card">
            <span className="dsa-roadmap-number">01</span>
            <h3>Arrays</h3>
            <p>
              Learn traversal, prefix sum, sliding window,
              Kadane's Algorithm, and pattern recognition.
            </p>
          </div>

          <div className="dsa-roadmap-card">
            <span className="dsa-roadmap-number">02</span>
            <h3>Linked List</h3>
            <p>
              Understand pointers, memory visualization,
              reverse list, cycle detection, and more.
            </p>
          </div>

          <div className="dsa-roadmap-card">
            <span className="dsa-roadmap-number">03</span>
            <h3>Stack & Queue</h3>
            <p>
              Learn monotonic stack, BFS queues,
              recursion simulation, and optimization.
            </p>
          </div>

          <div className="dsa-roadmap-card">
            <span className="dsa-roadmap-number">04</span>
            <h3>Trees</h3>
            <p>
              Master DFS, BFS, recursion trees,
              binary trees, BST, and traversal logic.
            </p>
          </div>

          <div className="dsa-roadmap-card">
            <span className="dsa-roadmap-number">05</span>
            <h3>Graphs</h3>
            <p>
              Learn shortest path, cycle detection,
              connected components, and graph patterns.
            </p>
          </div>

          <div className="dsa-roadmap-card">
            <span className="dsa-roadmap-number">06</span>
            <h3>Dynamic Programming</h3>
            <p>
              Learn memoization, tabulation,
              state transitions, and optimization.
            </p>
          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* FEATURES */}
      {/* ================================================= */}

      <section className="dsa-section">

        <div className="dsa-section-header">

          <h2>
            Why This DSA Platform is Different
          </h2>

          <p>
            Built for deep understanding and real interviews.
          </p>

        </div>

        <div className="dsa-features-grid">

          <div className="dsa-feature-card">
            <h3>Visualization Based Learning</h3>
            <p>
              Understand every algorithm visually with
              intuitive explanations.
            </p>
          </div>

          <div className="dsa-feature-card">
            <h3>Pattern Recognition</h3>
            <p>
              Learn how to identify hidden coding patterns
              during interviews.
            </p>
          </div>

          <div className="dsa-feature-card">
            <h3>From Brute Force to Optimal</h3>
            <p>
              Learn complete optimization thinking process.
            </p>
          </div>

          <div className="dsa-feature-card">
            <h3>Interview Focused</h3>
            <p>
              Solve real interview level problems step by step.
            </p>
          </div>

        </div>

      </section>


      {/* ================================================= */}
      {/* PRACTICE */}
      {/* ================================================= */}

      <section className="dsa-practice-section">

        <div className="dsa-practice-content">

          <div className="dsa-practice-left">

            <h2>
              Daily Practice System
            </h2>

            <p>
              Build consistency with topic-wise practice,
              coding challenges, and interview questions.
            </p>

            <ul className="dsa-practice-list">

              <li>✔ Beginner to Advanced Problems</li>
              <li>✔ Pattern Based Questions</li>
              <li>✔ Time Complexity Analysis</li>
              <li>✔ Interview Preparation</li>

            </ul>

          </div>

          <div className="dsa-practice-right">

            <img
              src="/images/dsa/dsa-practice.png"
              alt="DSA Practice"
              className="dsa-practice-image"
            />

          </div>

        </div>

      </section>

    </div>
  );
}