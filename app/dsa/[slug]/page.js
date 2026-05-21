// import { notFound } from "next/navigation";
// import { getTopicBySlug, dsaTopicSlugs } from "@/lib/dsa/topics";
// import "../dsa-topic.css";

// export function generateStaticParams() {
//   return dsaTopicSlugs.map((slug) => ({ slug }));
// }

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   const topic = getTopicBySlug(slug);
//   if (!topic) return {};
//   return {
//     title: `${topic.title} | DSA | Avinash AI Lab`,
//   };
// }

// export default async function DSATopicPage({ params }) {
//   const { slug } = await params;
//   const topic = getTopicBySlug(slug);

//   if (!topic) {
//     notFound();
//   }

//   return (
//     <div className="dsa-page">
//       <section className="dsa-topic-hero">
//         <p className="dsa-badge">DSA TOPIC</p>
//         <h1 className="dsa-hero-title">
//           {topic.icon} {topic.title}
//         </h1>
//         <p className="dsa-hero-text">{topic.description}</p>
//       </section>

//       <section className="dsa-topic-section" id="theory">
//         <div className="dsa-section-header">
//           <h2>Theory</h2>
//           <p>Core concepts and patterns for this topic.</p>
//         </div>
//         <p className="dsa-topic-placeholder">Theory content coming soon.</p>
//       </section>

//       <section className="dsa-topic-section" id="code">
//         <div className="dsa-section-header">
//           <h2>Code</h2>
//           <p>Implementations and examples.</p>
//         </div>
//         <p className="dsa-topic-placeholder">Code examples coming soon.</p>
//       </section>

//       <section className="dsa-topic-section" id="practice">
//         <div className="dsa-section-header">
//           <h2>Practice</h2>
//           <p>Problems and exercises.</p>
//         </div>
//         <p className="dsa-topic-placeholder">Practice problems coming soon.</p>
//       </section>
//     </div>
//   );
// }

import LearningBlock from "@/components/dsa/LearningBlock";
import IntuitionBox from "@/components/dsa/IntutionBox";
import MemoryVisualization from "@/components/dsa/MemoryVisualization";

import { notFound } from "next/navigation";
import { getTopicBySlug, dsaTopicSlugs } from "@/lib/dsa/topics";
import "../dsa-topic.css";

export function generateStaticParams() {
  return dsaTopicSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const topic = getTopicBySlug(slug);

  if (!topic) return {};

  return {
    title: `${topic.title} | DSA | Avinash AI Lab`,
  };
}

export default async function DSATopicPage({ params }) {
  const { slug } = await params;

  const topic = getTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  return (
    <div className="dsa-page">

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="dsa-topic-hero">

        <div className="dsa-topic-hero-content">

          <div className="dsa-topic-badge">
            🚀 PREMIUM DSA TOPIC
          </div>

          <h1 className="dsa-hero-title">
            {topic.icon} {topic.title}
          </h1>

          <p className="dsa-hero-text">
            {topic.description}
          </p>

          <div className="dsa-topic-buttons">

            <button className="dsa-primary-btn">
              Start Learning
            </button>

            <button className="dsa-secondary-btn">
              Practice Problems
            </button>

          </div>

        </div>

      </section>

     {/* ================================================= */}
{/* LEARNING FLOW */}
{/* ================================================= */}

<section className="dsa-topic-section">

  <div className="dsa-learning-flow-box">

    <div className="dsa-learning-flow-header">

      <span className="dsa-learning-mini-badge">
        ⚡ AI Learning Flow
      </span>

      <h2 className="page-title">
        Learn Arrays & Strings Step-by-Step
      </h2>

      <p className="dsa-learning-flow-text">

        Build strong DSA intuition through:
        memory visualization,
        optimization thinking,
        and interview pattern recognition.

      </p>

    </div>

    <div className="dsa-learning-flow-steps">

      <div className="dsa-flow-card">
        📘 Basics
      </div>

      <div className="dsa-flow-arrow">
        →
      </div>

      <div className="dsa-flow-card">
        ⚡ Operations
      </div>

      <div className="dsa-flow-arrow">
        →
      </div>

      <div className="dsa-flow-card">
        🔥 Optimization
      </div>

      <div className="dsa-flow-arrow">
        →
      </div>

      <div className="dsa-flow-card">
        🚀 Interview Ready
      </div>

    </div>

  </div>

</section>

      {/* ================================================= */}
{/* ROADMAP */}
{/* ================================================= */}

<section className="dsa-topic-section">

<div className="dsa-roadmap-header">

  <span className="dsa-roadmap-badge">
    🚀 Structured Learning Path
  </span>

  <h2 className="page-title">
    Arrays & Strings Roadmap
  </h2>

  <p className="dsa-roadmap-text">

    Master Arrays & Strings through
    visual intuition,
    optimization thinking,
    and interview-focused problem solving.

  </p>

</div>

<div className="dsa-roadmap-grid">

  <a
    href="/dsa/arrays-and-strings/basic-array"
    className="dsa-roadmap-card"
  >
    <span className="roadmap-icon">📘</span>

    <h3>Basic Array</h3>

    <p>
      Learn memory, indexing, O(1) access,
      insertion, deletion, and visualization.
    </p>
  </a>

  <a
    href="/dsa/arrays-and-strings/array-operations"
    className="dsa-roadmap-card"
  >
    <span className="roadmap-icon">⚡</span>

    <h3>Array Operations</h3>

    <p>
      Traverse, insert, update,
      search, and delete elements.
    </p>
  </a>

  <a
    href="/dsa/arrays-and-strings/reverse-array"
    className="dsa-roadmap-card"
  >
    <span className="roadmap-icon">🔄</span>

    <h3>Reverse Array</h3>

    <p>
      Learn reversal logic,
      swapping, and two pointers.
    </p>
  </a>

  <a
    href="/dsa/arrays-and-strings/prefix-sum"
    className="dsa-roadmap-card"
  >
    <span className="roadmap-icon">➕</span>

    <h3>Prefix Sum</h3>

    <p>
      Optimize repeated range calculations
      using cumulative sums.
    </p>
  </a>

  <a
    href="/dsa/arrays-and-strings/sliding-window"
    className="dsa-roadmap-card"
  >
    <span className="roadmap-icon">🪟</span>

    <h3>Sliding Window</h3>

    <p>
      Reduce nested loops and optimize
      subarray problems efficiently.
    </p>
  </a>

  <a
    href="/dsa/arrays-and-strings/kadane-basics"
    className="dsa-roadmap-card"
  >
    <span className="roadmap-icon">🔥</span>

    <h3>Kadane Basics</h3>

    <p>
      Understand maximum subarray intuition
      and optimization thinking.
    </p>
  </a>

  <a
    href="/dsa/arrays-and-strings/string"
    className="dsa-roadmap-card"
  >
    <span className="roadmap-icon">🔤</span>

    <h3>String</h3>

    <p>
      Learn character arrays,
      indexing, immutability, and patterns.
    </p>
  </a>

</div>

</section>





    </div>
  );
}