document.addEventListener("DOMContentLoaded", function () {
    function openTab(evt, tabId) {
        // Hide all tab-content elements
        document.querySelectorAll(".tab-content").forEach(function (content) {
            content.classList.remove("active-content");
        });

        // Remove active class from all tabs
        document.querySelectorAll(".tab").forEach(function (tab) {
            tab.classList.remove("active-tab");
        });

        // Show the clicked tab's content and add active class to the clicked tab
        document.getElementById(tabId).classList.add("active-content");
        evt.currentTarget.classList.add("active-tab");
    }

    // Initialize tabs
    document.querySelectorAll(".tab").forEach(function (tab) {
        tab.addEventListener("click", function (event) {
            openTab(event, event.target.getAttribute("onclick").match(/'([^']+)'/)[1]);
        });
    });

    // Collapsible content functionality
    document.querySelectorAll(".collapsible").forEach(function (button) {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
            const content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });

    // Handle smooth scrolling for navigation links
    const navItems = document.querySelectorAll('.nav-item');
    
    // Add click event listeners for smooth scrolling
    navItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = item.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Handle active navigation state on scroll
    const sections = document.querySelectorAll('section');
    const animatedSections = document.querySelectorAll('.animated-section');

    const activateSection = () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 70) { // Adjusted offset for sticky nav
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href').substring(1) === current) {
                item.classList.add('active');
            }
        });

        // Trigger animations for sections in view
        animatedSections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight - 100) { // Trigger when 100px from bottom of viewport
                section.classList.add('is-visible');
            } else {
                 // Optional: Remove class if you want animation to re-trigger on scroll up
                 // section.classList.remove('is-visible'); 
            }
        });
    };

    window.addEventListener('scroll', activateSection);
    activateSection(); // Call once on load to animate sections already in view

    // Card entrance animation on scroll
    const animatedCards = document.querySelectorAll('.card-animated');
    function animateCards() {
        animatedCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                card.classList.add('is-visible');
            }
        });
    }
    window.addEventListener('scroll', animateCards);
    animateCards();

    // Back to Top button functionality
    const backToTopBtn = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'block';
        } else {
            backToTopBtn.style.display = 'none';
        }
    });
    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Research Modules Toggle
    const viewToggle = document.getElementById('viewToggle');
    const biomechLabel = viewToggle.querySelector('.biomech-label');
    const aiLabel = viewToggle.querySelector('.ai-label');
    const cards = document.querySelectorAll('.module-card');
    let isBiomech = true;

    function setModuleView(biomech) {
        if (biomech) {
            biomechLabel.classList.add('active');
            aiLabel.classList.remove('active');
            cards.forEach(card => {
                card.classList.remove('ai');
                card.classList.add('biomech');
                if (card.querySelector('h3').textContent.includes('Hip Growth')) {
                    card.querySelector('h3').textContent = '5D Hip Growth Model';
                    card.querySelector('.module-icon').innerHTML = '<i class="fas fa-bone"></i>';
                    card.querySelector('.module-desc').textContent = 'Biomechanical modeling of hip joint growth using generative and physical models.';
                    card.querySelector('.tools-list').innerHTML = '<span class="tool-badge">PyTorch</span><span class="tool-badge">VTK</span><span class="tool-badge">CT Scans</span>';
                } else if (card.querySelector('h3').textContent.includes('Synthetic')) {
                    card.querySelector('h3').textContent = 'Synthetic Image Generation';
                    card.querySelector('.module-icon').innerHTML = '<i class="fas fa-dna"></i>';
                    card.querySelector('.module-desc').textContent = 'Creating synthetic medical images for robust AI training and validation.';
                    card.querySelector('.tools-list').innerHTML = '<span class="tool-badge">GANs</span><span class="tool-badge">Python</span>';
                } else if (card.querySelector('h3').textContent.includes('Orthopedic') || card.querySelector('h3').textContent.includes('Diagnosis')) {
                    card.querySelector('h3').textContent = 'AI in Orthopedic Diagnosis';
                    card.querySelector('.module-icon').innerHTML = '<i class="fas fa-x-ray"></i>';
                    card.querySelector('.module-desc').textContent = 'Applying deep learning to automate and enhance orthopedic diagnostics.';
                    card.querySelector('.tools-list').innerHTML = '<span class="tool-badge">Attention Maps</span><span class="tool-badge">CT/MRI</span>';
                }
            });
        } else {
            aiLabel.classList.add('active');
            biomechLabel.classList.remove('active');
            cards.forEach(card => {
                card.classList.remove('biomech');
                card.classList.add('ai');
                if (card.querySelector('h3').textContent.includes('Hip Growth')) {
                    card.querySelector('h3').textContent = '5D Hip Growth Model';
                    card.querySelector('.module-icon').innerHTML = '<i class="fas fa-brain"></i>';
                    card.querySelector('.module-desc').textContent = 'AI-driven prediction of hip joint growth using GANs and attention.';
                    card.querySelector('.tools-list').innerHTML = '<span class="tool-badge">GANs</span><span class="tool-badge">Attention</span>';
                } else if (card.querySelector('h3').textContent.includes('Synthetic')) {
                    card.querySelector('h3').textContent = 'Synthetic Image Generation';
                    card.querySelector('.module-icon').innerHTML = '<i class="fas fa-project-diagram"></i>';
                    card.querySelector('.module-desc').textContent = 'Neural networks for generating synthetic medical images.';
                    card.querySelector('.tools-list').innerHTML = '<span class="tool-badge">PyTorch</span><span class="tool-badge">GANs</span>';
                } else if (card.querySelector('h3').textContent.includes('Orthopedic') || card.querySelector('h3').textContent.includes('Diagnosis')) {
                    card.querySelector('h3').textContent = 'AI in Orthopedic Diagnosis';
                    card.querySelector('.module-icon').innerHTML = '<i class="fas fa-microscope"></i>';
                    card.querySelector('.module-desc').textContent = 'Deep learning for orthopedic diagnosis: segmentation, classification.';
                    card.querySelector('.tools-list').innerHTML = '<span class="tool-badge">CNN</span><span class="tool-badge">Segmentation</span>';
                }
            });
        }
        isBiomech = biomech;
    }

    viewToggle.addEventListener('click', () => {
        setModuleView(!isBiomech);
    });

    // Initialize to Biomechanical view
    setModuleView(true);

    // Card hover/flip (simple micro-interaction)
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'rotateY(6deg) scale(1.04)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = '';
        });
    });

    // Timeline animation on scroll
    const timelineItems = document.querySelectorAll('.timeline-item-horizontal');
    function animateTimeline() {
        timelineItems.forEach((item, i) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60) {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
                item.style.transitionDelay = (i * 0.08) + 's';
            } else {
                item.style.opacity = 0;
                item.style.transform = 'translateY(40px)';
            }
        });
    }
    window.addEventListener('scroll', animateTimeline);
    animateTimeline();

    // Podcast badge and contact badge micro-interactions
    const labBadge = document.querySelector('.lab-badge');
    if (labBadge) {
        labBadge.addEventListener('mouseenter', () => {
            labBadge.textContent = '🔓 Welcome to the Lab!';
        });
        labBadge.addEventListener('mouseleave', () => {
            labBadge.textContent = 'Lab Access Badge';
        });
        labBadge.addEventListener('focus', () => {
            labBadge.textContent = '🔓 Welcome to the Lab!';
        });
        labBadge.addEventListener('blur', () => {
            labBadge.textContent = 'Lab Access Badge';
        });
    }

    // Animate stats bars on scroll
    function animateStatsBars() {
        document.querySelectorAll('.stats-bar').forEach(bar => {
            const rect = bar.getBoundingClientRect();
            if (rect.top < window.innerHeight - 60 && !bar.classList.contains('visible')) {
                bar.classList.add('visible');
                bar.style.width = bar.getAttribute('data-width') + '%';
            }
        });
    }
    window.addEventListener('scroll', animateStatsBars);
    animateStatsBars();

    // Animated Stat Counters in Hero
    function animateCounters() {
        document.querySelectorAll('.stat-counter').forEach(counter => {
            let started = counter.getAttribute('data-animated');
            if (started) return;
            const rect = counter.getBoundingClientRect();
            if (rect.top < window.innerHeight - 40) {
                counter.setAttribute('data-animated', 'true');
                let count = 0;
                const target = +counter.getAttribute('data-count');
                const step = Math.ceil(target / 40);
                const update = () => {
                    count += step;
                    if (count > target) count = target;
                    counter.textContent = count;
                    if (count < target) requestAnimationFrame(update);
                };
                update();
            }
        });
    }
    window.addEventListener('scroll', animateCounters);
    animateCounters();

    // Testimonials Carousel
    const testimonials = document.querySelectorAll('.testimonial-item');
    const prevBtn = document.querySelector('.carousel-prev');
    const nextBtn = document.querySelector('.carousel-next');
    let testimonialIndex = 0;
    function showTestimonial(idx) {
        testimonials.forEach((item, i) => {
            item.classList.toggle('active', i === idx);
        });
    }
    if (prevBtn && nextBtn) {
        prevBtn.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex - 1 + testimonials.length) % testimonials.length;
            showTestimonial(testimonialIndex);
        });
        nextBtn.addEventListener('click', () => {
            testimonialIndex = (testimonialIndex + 1) % testimonials.length;
            showTestimonial(testimonialIndex);
        });
    }
    showTestimonial(testimonialIndex);

    // Simple Animated Particles for Hero (fallback to gradient if not supported)
    function heroParticles() {
        const canvas = document.getElementById('heroParticles');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let w = window.innerWidth, h = document.querySelector('.hero-section').offsetHeight;
        canvas.width = w; canvas.height = h;
        let particles = Array.from({length: 32}, () => ({
            x: Math.random() * w,
            y: Math.random() * h,
            r: 2 + Math.random() * 3,
            dx: -0.5 + Math.random(),
            dy: -0.5 + Math.random(),
            alpha: 0.2 + Math.random() * 0.5
        }));
        function draw() {
            ctx.clearRect(0,0,w,h);
            for (let p of particles) {
                ctx.globalAlpha = p.alpha;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, 2*Math.PI);
                ctx.fillStyle = '#1a237e';
                ctx.fill();
                p.x += p.dx; p.y += p.dy;
                if (p.x < 0 || p.x > w) p.dx *= -1;
                if (p.y < 0 || p.y > h) p.dy *= -1;
            }
            ctx.globalAlpha = 1;
            requestAnimationFrame(draw);
        }
        draw();
        window.addEventListener('resize', () => {
            w = window.innerWidth; h = document.querySelector('.hero-section').offsetHeight;
            canvas.width = w; canvas.height = h;
        });
    }
    heroParticles();

    // Section entrance animations (fade/slide from different directions)
    function animateSections() {
        document.querySelectorAll('.animated-section').forEach((section, i) => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 80) {
                section.classList.add('is-visible');
                section.style.transitionDelay = (i * 0.08) + 's';
            }
        });
    }
    window.addEventListener('scroll', animateSections);
    animateSections();
});
