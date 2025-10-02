// Portfolio Data
const portfolioItems = [
    {
        id: 1,
        title: 'Laura Mercedes Hair and salon 2023-2025',
        description: 'Increased engagement by 350% through strategic content planning and influencer partnerships',
        category: 'Social Media Manager',
    },
    {
        id: 2,
        title: 'E-commerce Launch 2021-2024',
        description: 'Generated $500K in revenue with targeted Facebook and Instagram ad campaigns',
        category: 'Digital Marketing Strategist',
    },
    {
        id: 3,
        title: "M's Tech Ventures 2023 - 2024",
        description: "  •	Created and executed content calendars across Instagram and Facebook.  •	Managed paid ad campaigns with a focus on lead generation,  •	Increased brand page followers by 70% within 6 months.'",
        category: 'Social Media Manager',
    },
    {
        id: 4,
        title: 'Donald Exotic Restaurant 2022-2024 ',
        description: 'Created viral TikTok campaign resulting in 200% increase in customer traffic',
        category: 'Promotional Campaign',
    },
    {
        id: 5,
        title: 'Fitness Brand Relaunch 2023-2024',
        description: 'Repositioned brand identity and grew Instagram community to 100K engaged followers',
        category: 'Brand Management',
    },
    {
        id: 6,
        title: 'D.I.V Agency 2024-2025',
        description: '	•	Designed and ran targeted ad campaigns that doubled client inquiries.   •	Managed multi-platform growth strategies for e-commerce and service-based businesses.  •	Achieved consistent ROI-focused results for clients.',
        category: 'Digital Marketing Srategist',
    },
];

// Tools Data
const tools = [
    { name: 'Meta Business Suite', icon: 'M', color: '#1877F2' },
    { name: 'Canva Pro', icon: 'C', color: '#00C4CC' },
    { name: 'Hootsuite', icon: 'H', color: '#000000' },
    { name: 'Google Analytics', icon: 'G', color: '#E37400' },
    { name: 'Adobe Photoshop', icon: 'Ps', color: '#31A8FF' },
    { name: 'Buffer', icon: 'B', color: '#168EEA' },
    { name: 'Native Analytics', icon: 'N', color: '#E37400' },
        { name: 'Hashtagify', icon: 'H', color: '#f58608ff' },
];

// Testimonials Data
const testimonials = [
    {
        id: 1,
        name: 'Laura Omati',
        role: 'CEO',
        company: 'Laura Mercedes Hair and Beauty Salon',
        quote: 'Divine helped our brand increase engagement by 300% within 3 months. Her strategic approach and creative content ideas transformed our social media presence completely.',
    },
    {
        id: 2,
        name: 'Michael Henry Victor',
        role: 'CEO',
        company: " M's Tech Ventures",
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

// Loading Screen
document.addEventListener('DOMContentLoaded', function() {
    const loadingScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
        }, 800);
    }, 2500);

    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

    // Initialize all sections
    initializePortfolio();
    initializeTools();
    initializeTestimonials();
    initializeScrollAnimations();
    initializeContactForm();
});

// Initialize Portfolio Section
function initializePortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');

    portfolioItems.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.style.transitionDelay = `${index * 0.1}s`;

        portfolioItem.innerHTML = `
            <div class="portfolio-card">
                <div class="card-header">
                    <span class="category">${item.category}</span>
                </div>
                <h3>${item.title}</h3>
                <p>${item.description}</p>
                <div class="card-footer">
                    <div class="icon-placeholder">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                    </div>
                </div>
            </div>
        `;

        portfolioGrid.appendChild(portfolioItem);
    });
}

// Initialize Tools Section
function initializeTools() {
    const toolsGrid = document.getElementById('tools-grid');

    tools.forEach((tool, index) => {
        const toolItem = document.createElement('div');
        toolItem.className = 'tool-item';
        toolItem.style.transitionDelay = `${index * 0.1}s`;

        toolItem.innerHTML = `
            <div class="tool-card" data-color="${tool.color}">
                <div class="tool-icon">
                    <span>${tool.icon}</span>
                </div>
                <h3>${tool.name}</h3>
            </div>
        `;

        toolsGrid.appendChild(toolItem);
    });
}

// Initialize Testimonials Section
function initializeTestimonials() {
    const testimonialSlider = document.getElementById('testimonial-slider');
    const testimonialDots = document.getElementById('testimonial-dots');
    let currentIndex = 0;

    // Create testimonial cards
    testimonials.forEach((testimonial, index) => {
        const card = document.createElement('div');
        card.className = `testimonial-card ${index === 0 ? 'active' : ''}`;

        const initials = testimonial.name.split(' ').map(n => n[0]).join('');

        card.innerHTML = `
            <div class="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
            </div>
            <p class="testimonial-text">${testimonial.quote}</p>
            <div class="testimonial-author">
                <div class="author-avatar">${initials}</div>
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}, ${testimonial.company}</p>
                </div>
            </div>
        `;

        testimonialSlider.appendChild(card);
    });

    // Create dots
    testimonials.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.className = `dot ${index === 0 ? 'active' : ''}`;
        dot.setAttribute('data-index', index);
        dot.setAttribute('aria-label', `Go to testimonial ${index + 1}`);
        dot.addEventListener('click', () => goToTestimonial(index));
        testimonialDots.appendChild(dot);
    });

    // Auto-rotate testimonials
    setInterval(() => {
        currentIndex = (currentIndex + 1) % testimonials.length;
        goToTestimonial(currentIndex);
    }, 5000);

    function goToTestimonial(index) {
        currentIndex = index;
        const cards = testimonialSlider.querySelectorAll('.testimonial-card');
        const dots = testimonialDots.querySelectorAll('.dot');

        cards.forEach((card, i) => {
            card.classList.remove('active', 'prev', 'next');
            if (i === index) {
                card.classList.add('active');
            } else if (i < index) {
                card.classList.add('prev');
            } else {
                card.classList.add('next');
            }
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
}

// Scroll Animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.about-image, .about-content, .section-title, .section-subtitle, .portfolio-item, .tool-item, .contact-info, .contact-form');

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Contact Form
function initializeContactForm() {
    const contactForm = document.getElementById('contact-form');
    const submitMessage = document.getElementById('submit-message');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Show success message
        submitMessage.textContent = 'Message sent successfully!';
        submitMessage.className = 'submit-message success';
        submitMessage.style.display = 'block';

        // Reset form
        contactForm.reset();

        // Hide message after 3 seconds
        setTimeout(() => {
            submitMessage.style.display = 'none';
        }, 3000);

        // Log to console (in real app, this would send to a server)
        console.log('Form submitted:', { name, email, message });
    });
}

// Smooth scrolling for anchor links (if you add navigation)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
