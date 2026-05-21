import "../../dsa-topic.css";

const BASIC_ARRAY_SECTIONS = [
  { id: "what", title: "What?" },
  { id: "why", title: "Why?" },
  { id: "visualize", title: "Visualization" },
  { id: "working", title: "Working" },
  { id: "complexity", title: "Complexity" },
  { id: "dry-run", title: "Dry Run" },
  { id: "optimize", title: "Optimize" },
  { id: "patterns", title: "Patterns" },
  { id: "practice", title: "Practice" },
];

export default async function TopicPage({ params }) {
  const { category, topic } = await params;

  if (category === "arrays-and-strings" && topic === "basic-array") {
    return (
      <div className="dsa-page">
        <section className="dsa-topic-hero">
          <div className="dsa-topic-hero-content">
            <div className="dsa-topic-badge">DSA LESSON</div>
            <h1 className="dsa-hero-title">📘 Basic Array</h1>
            <p className="dsa-hero-text">
              Learn array memory, indexing, and core operations step by step.
            </p>
          </div>
        </section>

        {BASIC_ARRAY_SECTIONS.map((section) => (
          <section
            key={section.id}
            className="dsa-topic-section"
            id={section.id}
          >
            <div className="dsa-section-header">
              <h2>{section.title}</h2>
            </div>
            <p className="dsa-topic-placeholder">Content coming soon.</p>
          </section>
        ))}
      </div>
    );
  }

  return (
    <div
      style={{
        color: "white",
        padding: "40px",
      }}
    >
      <h1>Topic Page</h1>
      <p>Category: {category}</p>
      <p>Topic: {topic}</p>
    </div>
  );
}
