export default function IntuitionBox({
    title,
    children
  }) {
    return (
      <div className="dsa-feel-box">
  
        <h3 className="dsa-feel-title">
          {title}
        </h3>
  
        <div className="dsa-step-text">
          {children}
        </div>
  
      </div>
    );
  }