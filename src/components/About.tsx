import { useEffect, useRef, useState } from 'react';
import './About.css';

export default function About() {
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="about-container">
        <div className={`about-image ${isVisible ? 'visible' : ''}`}>
          <div className="image-placeholder">
            <svg viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="90" fill="url(#grad1)" />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: '#FFD700', stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: '#FFA500', stopOpacity: 0.3 }} />
                </linearGradient>
              </defs>
              <text x="100" y="110" textAnchor="middle" fill="#FFD700" fontSize="80" fontWeight="700">DV</text>
            </svg>
          </div>
        </div>
        <div className={`about-content ${isVisible ? 'visible' : ''}`}>
          <h2 className="section-title">About Me</h2>
          <div className="about-text">
            <p>
              With <strong>5 years of experience</strong> in social media management and digital marketing,
              I specialize in creating data-driven strategies that amplify brand presence and drive
              meaningful engagement across all major platforms.
            </p>
            <p>
              My expertise spans from crafting compelling content and managing promotional campaigns
              to analyzing performance metrics and optimizing ad strategies for maximum ROI.
            </p>
            <p>
              I've helped numerous brands transform their social media presence, increase engagement
              rates by over 300%, and build authentic connections with their target audiences.
            </p>
          </div>
          <div className="stats">
            <div className="stat-item">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Campaigns Managed</p>
            </div>
            <div className="stat-item">
              <h3>300%</h3>
              <p>Avg. Growth Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
