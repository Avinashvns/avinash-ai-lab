import "./machine-learning.css";

import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card";


export default function MachineLearningPage() {

  return (

    <>

      <div className="main-container">

        <Sidebar type="ml" />

        <div className="content">

          {/* ================================================= */}
          {/* HERO */}
          {/* ================================================= */}

          <div className="ml-hero">

            <div className="ml-hero-left">

              <p className="hero-badge">
                🤖 Machine Learning
              </p>

              <h1 className="page-title">
                Learn Machine Learning
                Step By Step
              </h1>

              <p className="ml-description">

                Master Machine Learning through theory,
                mathematics, visualization, manual coding
                and Scikit Learn implementations.

              </p>

            </div>

            <div className="ml-hero-right">

              <img
                src="/images/machine-learning/ml-hero.png"
                alt="Machine Learning"
                className="ml-image"
              />

            </div>

          </div>

          {/* ================================================= */}
          {/* LEARNING FLOW */}
          {/* ================================================= */}

          <div className="ml-flow-section">

            <div className="section-header">

              <h2>
                🚀 Learning Flow
              </h2>

              <p>
                Learn every algorithm deeply with practical implementation.
              </p>

            </div>

            <div className="ml-flow-grid">

              <div className="flow-card">
                📘 Concept
              </div>

              <div className="flow-card">
                📐 Mathematics
              </div>

              <div className="flow-card">
                📊 Visualization
              </div>

              <div className="flow-card">
                ⚙ Manual Implementation
              </div>

              <div className="flow-card">
                🤖 Scikit Learn
              </div>

              <div className="flow-card">
                🚀 Mini Projects
              </div>

            </div>

          </div>

          {/* ================================================= */}
          {/* ALGORITHMS */}
          {/* ================================================= */}

          <div className="ml-algorithms">

            <div className="section-header">

              <h2>
                📚 Algorithms
              </h2>

              <p>
                Explore Machine Learning algorithms with theory and coding.
              </p>

            </div>

            <div className="card-grid">

              <Card
                title="📈 Linear Regression"
                description="Learn regression and prediction models step by step."
                href="/machine-learning/linear-regression"
              />

              <Card
                title="📊 Logistic Regression"
                description="Understand classification algorithms deeply."
                href="/machine-learning"
              />

              <Card
                title="📍 KNN"
                description="Learn K Nearest Neighbors visually."
                href="/machine-learning"
              />

              <Card
                title="🎯 K-Means"
                description="Understand clustering and unsupervised learning."
                href="/machine-learning"
              />

              <Card
                title="🌳 Decision Tree"
                description="Learn tree-based machine learning algorithms."
                href="/machine-learning"
              />

              <Card
                title="🌲 Random Forest"
                description="Master ensemble learning techniques."
                href="/machine-learning"
              />

            </div>

          </div>

          {/* ================================================= */}
          {/* PROFESSIONAL ROADMAP */}
          {/* ================================================= */}

          <div className="pro-roadmap-section">

            <div className="section-header">

              <h2>
                🛣 Machine Learning Roadmap
              </h2>

              <p>
                Follow the complete roadmap from beginner to advanced Machine Learning.
              </p>

            </div>

            {/* ================================================= */}
            {/* BEGINNER */}
            {/* ================================================= */}

            <div className="roadmap-level">

              <div className="roadmap-level-title">

                <span className="level-dot"></span>

                <h3>
                  Beginner Level
                </h3>

              </div>

              <div className="timeline">

                <a
                  href="/machine-learning/linear-regression"
                  className="timeline-card"
                >

                  <div className="timeline-number">
                    01
                  </div>

                  <h4>
                    📈 Linear Regression
                  </h4>

                  <p>
                    Learn prediction and regression fundamentals.
                  </p>

                </a>

                <div className="timeline-line"></div>

                <a
                  href="/machine-learning/logistic-regression"
                  className="timeline-card"
                >

                  <div className="timeline-number">
                    02
                  </div>

                  <h4>
                    📊 Logistic Regression
                  </h4>

                  <p>
                    Understand classification and sigmoid functions.
                  </p>

                </a>

              </div>

            </div>

            {/* ================================================= */}
            {/* INTERMEDIATE */}
            {/* ================================================= */}

            <div className="roadmap-level">

              <div className="roadmap-level-title">

                <span className="level-dot"></span>

                <h3>
                  Intermediate Level
                </h3>

              </div>

              <div className="timeline">

                <a
                  href="/machine-learning/knn"
                  className="timeline-card"
                >

                  <div className="timeline-number">
                    03
                  </div>

                  <h4>
                    📍 KNN
                  </h4>

                  <p>
                    Learn distance based algorithms visually.
                  </p>

                </a>

                <div className="timeline-line"></div>

                <a
                  href="/machine-learning/kmeans"
                  className="timeline-card"
                >

                  <div className="timeline-number">
                    04
                  </div>

                  <h4>
                    🎯 K-Means
                  </h4>

                  <p>
                    Understand clustering and unsupervised learning.
                  </p>

                </a>

                <div className="timeline-line"></div>

                <a
                  href="/machine-learning/decision-tree"
                  className="timeline-card"
                >

                  <div className="timeline-number">
                    05
                  </div>

                  <h4>
                    🌳 Decision Tree
                  </h4>

                  <p>
                    Learn tree based machine learning algorithms.
                  </p>

                </a>

              </div>

            </div>

            {/* ================================================= */}
            {/* ADVANCED */}
            {/* ================================================= */}

            <div className="roadmap-level">

              <div className="roadmap-level-title">

                <span className="level-dot"></span>

                <h3>
                  Advanced Level
                </h3>

              </div>

              <div className="timeline">

                <a
                  href="/machine-learning/random-forest"
                  className="timeline-card"
                >

                  <div className="timeline-number">
                    06
                  </div>

                  <h4>
                    🌲 Random Forest
                  </h4>

                  <p>
                    Master ensemble learning and multiple trees.
                  </p>

                </a>

              </div>

            </div>

          </div>

          {/* End */}

        </div>

      </div>

    </>
  );
}