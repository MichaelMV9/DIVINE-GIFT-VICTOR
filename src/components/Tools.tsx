import { useEffect, useRef, useState } from 'react';
import './Tools.css';

interface Tool {
  name: string;
  icon: string;
  color: string;
}

const tools: Tool[] = [
  { name: 'Meta Business Suite', icon: 'M', color: '#1877F2' },
  { name: 'Canva Pro', icon: 'C', color: '#00C4CC' },
  { name: 'Hootsuite', icon: 'H', color: '#000000' },
  { name: 'Google Analytics', icon: 'G', color: '#E37400' },
  { name: 'Adobe Photoshop', icon: 'Ps', color: '#31A8FF' },
  { name: 'Buffer', icon: 'B', color: '#168EEA' },
];

export default function Tools() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section className="tools" id="tools" ref={sectionRef}>
      <div className="tools-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>Premium Tools</h2>
        <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
          Leveraging industry-leading platforms for exceptional results
        </p>
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className={`tool-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="tool-card">
                <div className="tool-icon" style={{ '--tool-color': tool.color } as React.CSSProperties}>
                  <span>{tool.icon}</span>
                </div>
                <h3>{tool.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
