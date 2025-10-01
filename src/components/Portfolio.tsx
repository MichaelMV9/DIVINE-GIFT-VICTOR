import { useEffect, useRef, useState } from 'react';
import './Portfolio.css';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Fashion Brand Campaign',
    description: 'Increased engagement by 350% through strategic content planning and influencer partnerships',
    category: 'Social Media Strategy',
  },
  {
    id: 2,
    title: 'E-commerce Launch',
    description: 'Generated $500K in revenue with targeted Facebook and Instagram ad campaigns',
    category: 'Ad Strategy',
  },
  {
    id: 3,
    title: 'Tech Startup Growth',
    description: 'Built LinkedIn presence from 0 to 50K followers in 6 months with B2B content strategy',
    category: 'Content Marketing',
  },
  {
    id: 4,
    title: 'Restaurant Promotion',
    description: 'Created viral TikTok campaign resulting in 200% increase in foot traffic',
    category: 'Promotional Campaign',
  },
  {
    id: 5,
    title: 'Fitness Brand Relaunch',
    description: 'Repositioned brand identity and grew Instagram community to 100K engaged followers',
    category: 'Brand Management',
  },
  {
    id: 6,
    title: 'Product Launch Campaign',
    description: 'Coordinated multi-platform campaign reaching 2M+ users with 15% conversion rate',
    category: 'Campaign Management',
  },
];

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
    <section className="portfolio" id="portfolio" ref={sectionRef}>
      <div className="portfolio-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>Portfolio</h2>
        <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
          A showcase of successful campaigns and strategies
        </p>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="portfolio-card">
                <div className="card-header">
                  <span className="category">{item.category}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="card-footer">
                  <div className="icon-placeholder">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
