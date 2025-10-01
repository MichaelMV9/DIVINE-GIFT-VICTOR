import { useEffect, useRef, useState } from 'react';
import './Testimonials.css';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO',
    company: 'Fashion Forward',
    quote: 'Divine helped our brand increase engagement by 300% within 3 months. Her strategic approach and creative content ideas transformed our social media presence completely.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Marketing Director',
    company: 'Tech Innovators',
    quote: 'Her ad campaigns are result-driven and professional. The ROI we achieved exceeded all expectations, and her attention to detail is unmatched.',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Founder',
    company: 'Wellness Co.',
    quote: 'Working with Divine has been a game changer. She understands our brand voice perfectly and consistently delivers content that resonates with our audience.',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonials" id="testimonials" ref={sectionRef}>
      <div className="testimonials-container">
        <h2 className={`section-title ${isVisible ? 'visible' : ''}`}>Client Testimonials</h2>
        <p className={`section-subtitle ${isVisible ? 'visible' : ''}`}>
          What clients say about working with me
        </p>
        <div className="testimonial-slider">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === currentIndex ? 'active' : ''} ${
                index < currentIndex ? 'prev' : index > currentIndex ? 'next' : ''
              }`}
            >
              <div className="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  {testimonial.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="author-info">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => goToTestimonial(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
