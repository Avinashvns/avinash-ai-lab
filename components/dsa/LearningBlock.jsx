export default function LearningBlock({
    title,
    children,
    id
  }) {
    return (
      <section
        className="dsa-learning-block"
        id={id}
      >
        <h2 className="dsa-step-title">
          {title}
        </h2>
  
        {children}
      </section>
    );
  }