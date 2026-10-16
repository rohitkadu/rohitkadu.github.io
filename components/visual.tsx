
const services = [
    { name: "API GATEWAY", className: "node-api" },
    { name: "SPRING BOOT", className: "node-spring" },
    { name: "EVENT STREAM", className: "node-kafka" },
    { name: "DATA LAYER", className: "node-data" }
  ];
  
  export function SystemVisual() {
    return (
      <div className="system-visual" aria-label="Decorative distributed systems illustration">
        <div className="visual-topline">
          <span><i className="status-dot" /> SYSTEM ONLINE</span>
          <span>ARCHITECTURE / 001</span>
        </div>
  
        <div className="visual-grid">
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />
          <div className="orbit orbit-three" />
  
          <div className="core-node">
            <span className="core-symbol">R<span>/</span>K</span>
            <span className="core-label">ENGINEERING</span>
          </div>
  
          {services.map((service, index) => (
            <div
              className={`service-node ${service.className}`}
              key={service.name}
            >
              <span className="node-index">0{index + 1}</span>
              <span>{service.name}</span>
            </div>
          ))}
  
          <div className="visual-cross cross-one">+</div>
          <div className="visual-cross cross-two">+</div>
        </div>
  
        <div className="visual-bottomline">
          <span>DESIGNED TO SCALE</span>
          <span className="signal-bars">
            <i /><i /><i /><i /><i />
          </span>
        </div>
      </div>
    );
  }
  