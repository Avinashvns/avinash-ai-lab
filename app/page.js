import Header from "@/components/Header";
import Card from "@/components/Card";
import Image from "next/image";

export default function Home() {

  return (

    <>

      <Header />

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
            description="Learn ML algorithms from scratch and with Scikit Learn."
          />

          <Card
            title="🧠 Deep Learning"
            description="Understand Neural Networks, CNN, RNN and Backpropagation."
          />

          <Card
            title="💬 NLP"
            description="Learn Natural Language Processing step by step."
          />

          <Card
            title="🚀 Generative AI"
            description="Master LLMs, RAG, LangChain and AI Agents."
          />

          <Card
            title="💻 DSA"
            description="Master Data Structures & Algorithms for interviews."
          />

          <Card
            title="📁 Projects"
            description="Explore real-world AI and ML projects."
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

      </div>

    </>
  );
}