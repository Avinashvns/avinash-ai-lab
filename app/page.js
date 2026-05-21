import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {

  return (

    <>

      <div className="home-container">

        {/* ================================================= */}
        {/* HERO SECTION */}
        {/* ================================================= */}

        <div className="hero-section">

          <div className="hero-left">

            <p className="hero-badge">
              🚀 ML • DL • NLP • GenAI • DSA Platform
            </p>

            <h1 className="main-title">
              Avinash AI Lab
            </h1>

            <p className="sub-title">
              Learn Artificial Intelligence, Machine Learning,
              Deep Learning, NLP, Generative AI and DSA
              through visual learning, coding and projects.
            </p>

            <div className="hero-buttons">

              <button className="primary-btn">
                Start Learning
              </button>

              <button className="secondary-btn">
                Explore Projects
              </button>

            </div>

          </div>

          <div className="hero-right">

            <Image
              src="/images/home/hero.png"
              alt="AI"
              width={600}
              height={500}
              className="hero-image"
            />

          </div>

        </div>

        {/* ================================================= */}
        {/* WHY SECTION */}
        {/* ================================================= */}

        <div className="why-section">

          <div className="why-left">

            <p className="section-tag">
              WHY AVINASH AI LAB
            </p>

            <h2 className="why-title">
              Learn AI The Practical Way
            </h2>

            <p className="why-text">

              Avinash AI Lab is designed to help students and developers
              master Artificial Intelligence, Machine Learning, Deep Learning,
              NLP, Generative AI and DSA through practical implementation,
              visual learning and real-world projects.

            </p>

          </div>

          <div className="why-right">

            <div className="why-card">

              <h3>💡 Practical Learning</h3>

              <p>
                Build algorithms from scratch and understand the mathematics deeply.
              </p>

            </div>

            <div className="why-card">

              <h3>🚀 Modern AI Stack</h3>

              <p>
                Learn modern technologies like LLMs, RAG, LangChain and AI Agents.
              </p>

            </div>

            <div className="why-card">

              <h3>📁 Real Projects</h3>

              <p>
                Build portfolio-ready AI and Full Stack projects step by step.
              </p>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* FEATURES */}
        {/* ================================================= */}

        <div className="section-header">

          <h2>
            🚀 Learning Sections
          </h2>

          <p>
            Everything you need to become AI Engineer.
          </p>

        </div>

        <div className="card-grid">

          <Card
            title="🤖 Machine Learning"
            description="Learn ML algorithms from scratch and with libraries."
            href="/machine-learning"
          />

          <Card
            title="🧠 Deep Learning"
            description="Understand Neural Networks, CNN, RNN and Backpropagation."
            href="/deep-learning"
          />

          <Card
            title="💬 NLP"
            description="Learn Natural Language Processing step by step."
            href="/nlp"
          />

          <Card
            title="🚀 Generative AI"
            description="Master LLMs, RAG, LangChain and AI Agents."
            href="/generative-ai"
          />

          <Card
            title="💻 DSA"
            description="Master Data Structures & Algorithms for interviews."
            href=""
          />

          <Card
            title="📁 Projects"
            description="Explore real-world AI and ML projects."
            href=""
          />

        </div>

        {/* ================================================= */}
        {/* STATS */}
        {/* ================================================= */}

        <div className="stats-section">

          <div className="stat-card">

            <h2>50+</h2>

            <p>Algorithms</p>

          </div>

          <div className="stat-card">

            <h2>20+</h2>

            <p>Projects</p>

          </div>

          <div className="stat-card">

            <h2>100%</h2>

            <p>Practical Learning</p>

          </div>

          <div className="stat-card">

            <h2>AI</h2>

            <p>Focused Platform</p>

          </div>

        </div>

        {/* ================================================= */}
        {/* ROADMAP SECTION */}
        {/* ================================================= */}

        <div className="roadmap-section">

          <div className="section-header">

            <h2>
              🛣 Learning Roadmap
            </h2>

            <p>
              Follow the complete AI Engineer roadmap step by step.
            </p>

          </div>

          <div className="roadmap-grid">

            <a href="/machine-learning" className="roadmap-card">

              <span>01</span>

              <h3>🤖 Machine Learning</h3>

              <p>
                Learn ML algorithms, mathematics and Scikit Learn.
              </p>

            </a>

            <a href="/deep-learning" className="roadmap-card">

              <span>02</span>

              <h3>🧠 Deep Learning</h3>

              <p>
                Learn Neural Networks, CNN, RNN and Backpropagation.
              </p>

            </a>

            <a href="/nlp" className="roadmap-card">

              <span>03</span>

              <h3>💬 NLP</h3>

              <p>
                Learn Natural Language Processing step by step.
              </p>

            </a>

            <a href="/generative-ai" className="roadmap-card">

              <span>04</span>

              <h3>🚀 Generative AI</h3>

              <p>
                Master LLMs, RAG, LangChain and AI Agents.
              </p>

            </a>

          </div>

        </div>

        {/* ================================================= */}
        {/* FEATURED PROJECTS */}
        {/* ================================================= */}

        <div className="projects-section">

          <div className="section-header">

            <h2>
              🚀 Featured Projects
            </h2>

            <p>
              Real-world AI and Machine Learning projects.
            </p>

          </div>

          <div className="projects-grid">

            {/* PROJECT 1 */}

            <div className="project-card">

              <img
                src="/images/projects/chatbot.png"
                alt="AI Chatbot"
                className="project-image"
              />

              <div className="project-content">

                <h3>
                  🤖 AI Chatbot
                </h3>

                <p>
                  LLM and RAG based AI chatbot using LangChain and OpenAI.
                </p>

                <div className="project-tags">

                  <span>LLM</span>
                  <span>RAG</span>
                  <span>LangChain</span>

                </div>

                <button className="project-btn">
                  View Project
                </button>

              </div>

            </div>

            {/* PROJECT 2 */}

            <div className="project-card">

              <img
                src="/images/projects/ml-visualizer.png"
                alt="ML Visualizer"
                className="project-image"
              />

              <div className="project-content">

                <h3>
                  📊 ML Visualizer
                </h3>

                <p>
                  Interactive platform to visualize machine learning algorithms.
                </p>

                <div className="project-tags">

                  <span>Python</span>
                  <span>ML</span>
                  <span>Visualization</span>

                </div>

                <button className="project-btn">
                  View Project
                </button>

              </div>

            </div>

            {/* PROJECT 3 */}

            <div className="project-card">

              <img
                src="/images/projects/recommendation-system.png"
                alt="Recommendation System"
                className="project-image"
              />

              <div className="project-content">

                <h3>
                  🎬 Recommendation System
                </h3>

                <p>
                  Movie recommendation engine using Machine Learning.
                </p>

                <div className="project-tags">

                  <span>ML</span>
                  <span>Python</span>
                  <span>AI</span>

                </div>

                <button className="project-btn">
                  View Project
                </button>

              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* TECH STACK SECTION */}
        {/* ================================================= */}

        <div className="tech-section">

          <div className="section-header">

            <h2>
              ⚡ Tech Stack
            </h2>

            <p>
              Modern technologies used for AI, ML and Full Stack Development.
            </p>

          </div>

          <div className="tech-grid">

            <div className="tech-card">🐍 Python</div>

            <div className="tech-card">⚛ React</div>

            <div className="tech-card">▲ Next.js</div>

            <div className="tech-card">⚡ FastAPI</div>

            <div className="tech-card">🧠 TensorFlow</div>

            <div className="tech-card">🔥 PyTorch</div>

            <div className="tech-card">🔗 LangChain</div>

            <div className="tech-card">🐳 Docker</div>

            <div className="tech-card">🗄 PostgreSQL</div>

            <div className="tech-card">☁ Vercel</div>

            <div className="tech-card">📊 Scikit Learn</div>

            <div className="tech-card">🤖 OpenAI</div>

          </div>

        </div>

        {/* ================================================= */}
        {/* FOOTER */}
        {/* ================================================= */}

        <footer className="footer">

          <div className="footer-glow"></div>

          <div className="footer-top">

            {/* LEFT */}

            <div className="footer-brand">

              <h2>
                🚀 Avinash AI Lab
              </h2>

              <p>
                Learn AI, Machine Learning, Deep Learning,
                Generative AI and DSA through practical coding,
                visual learning and real-world projects.
              </p>

              <div className="footer-socials">

                <a href="#">
                  GitHub
                </a>

                <a href="#">
                  LinkedIn
                </a>

                <a href="#">
                  YouTube
                </a>

              </div>

            </div>

            {/* CENTER */}

            <div className="footer-column">

              <h3>
                Learning
              </h3>

              <a href="/machine-learning">
                Machine Learning
              </a>

              <a href="/deep-learning">
                Deep Learning
              </a>

              <a href="/nlp">
                NLP
              </a>

              <a href="/generative-ai">
                Generative AI
              </a>

            </div>

            {/* RIGHT */}

            <div className="footer-column">

              <h3>
                More
              </h3>

              <a href="/projects">
                Projects
              </a>

              <a href="/portfolio">
                Portfolio
              </a>

              <a href="#">
                Contact
              </a>

            </div>

          </div>

          <div className="footer-bottom">

            <p>
              © 2026 Avinash AI Lab — Built with ❤️ using Next.js
            </p>

          </div>

        </footer>


        {/* last */}

      </div>

    </>
  );
}