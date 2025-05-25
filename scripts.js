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
});
