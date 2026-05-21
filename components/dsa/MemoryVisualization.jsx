export default function MemoryVisualization({
    values
  }) {
    return (
      <div className="dsa-memory-visual">
  
        {values.map((value,index)=>(
          <div
            className="dsa-memory-box"
            key={index}
          >
            <span className="dsa-memory-index">
              {index}
            </span>
  
            <span className="dsa-memory-value">
              {value}
            </span>
          </div>
        ))}
  
      </div>
    );
  }