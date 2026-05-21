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
      <section className="dsa-topic-hero">
        <p className="dsa-badge">DSA TOPIC</p>
        <h1 className="dsa-hero-title">
          {topic.icon} {topic.title}
        </h1>
        <p className="dsa-hero-text">{topic.description}</p>
      </section>

      <section className="dsa-topic-section" id="theory">
        <div className="dsa-section-header">
          <h2>Theory</h2>
          <p>Core concepts and patterns for this topic.</p>
        </div>
        <p className="dsa-topic-placeholder">Theory content coming soon.</p>
      </section>

      <section className="dsa-topic-section" id="code">
        <div className="dsa-section-header">
          <h2>Code</h2>
          <p>Implementations and examples.</p>
        </div>
        <p className="dsa-topic-placeholder">Code examples coming soon.</p>
      </section>

      <section className="dsa-topic-section" id="practice">
        <div className="dsa-section-header">
          <h2>Practice</h2>
          <p>Problems and exercises.</p>
        </div>
        <p className="dsa-topic-placeholder">Practice problems coming soon.</p>
      </section>
    </div>
  );
}
