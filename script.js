// ============================================
// 3D BACKGROUND ANIMATION (Three.js)
// ============================================

let scene, camera, renderer, particles;

function initThreeJS() {
    const container = document.getElementById('canvas-container');
    if (!container) return;

    // Scene setup
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0.1);
    container.appendChild(renderer.domElement);

    camera.position.z = 30;

    // Create particle system
    const geometry = new THREE.BufferGeometry();
    const particleCount = 150;
    const posArray = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
        posArray[i] = (Math.random() - 0.5) * 200;
        posArray[i + 1] = (Math.random() - 0.5) * 200;
        posArray[i + 2] = (Math.random() - 0.5) * 200;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    // Particle material
    const material = new THREE.PointsMaterial({
        size: 0.5,
        color: 0x3b82f6,
        sizeAttenuation: true,
        transparent: true,
        opacity: 0.6,
    });

    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Animation loop
    function animate() {
        requestAnimationFrame(animate);

        particles.rotation.x += 0.0002;
        particles.rotation.y += 0.0003;

        // Make particles move slightly
        const posAttr = particles.geometry.getAttribute('position');
        const positions = posAttr.array;

        for (let i = 0; i < positions.length; i += 3) {
            positions[i] += Math.sin(Date.now() * 0.00001 + i) * 0.01;
            positions[i + 1] += Math.cos(Date.now() * 0.00001 + i) * 0.01;
        }
        posAttr.needsUpdate = true;

        renderer.render(scene, camera);
    }

    animate();
}

function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

// Initialize Three.js on load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initThreeJS);
} else {
    initThreeJS();
}

// ============================================
// THEME TOGGLE FUNCTIONALITY
// ============================================

function initThemeToggle() {
    const themeToggles = document.querySelectorAll('.theme-toggle');
    
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme') || 'light';
    applyTheme(savedTheme);

    themeToggles.forEach(toggle => {
        toggle.addEventListener('click', toggleTheme);
    });
}

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.classList.contains('dark') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);

    // Update particle color based on theme
    if (particles && particles.material) {
        particles.material.color.setHex(newTheme === 'dark' ? 0x60a5fa : 0x3b82f6);
        particles.material.opacity = newTheme === 'dark' ? 0.4 : 0.6;
    }

    if (renderer) {
        renderer.setClearColor(newTheme === 'dark' ? 0x0f172a : 0xffffff, 0.1);
    }
}

function applyTheme(theme) {
    const html = document.documentElement;
    if (theme === 'dark') {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenuToggle && navMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            spans.forEach(span => span.style.transition = 'all 0.3s ease');
            
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(10px, 10px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -7px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close menu when a link is clicked
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const spans = mobileMenuToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// ============================================
// NAVBAR SCROLL EFFECT
// ============================================

function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ============================================
// ACTIVE NAV LINK
// ============================================

function initActiveNavLink() {
    const navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Set active based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage || 
            (currentPage === '' && link.getAttribute('href') === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================

function initScrollReveal() {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    // Observe all cards and sections
    const elements = document.querySelectorAll(
        '.skill-card, .highlight-card, .experience-card, .project-card, .info-card'
    );
    
    elements.forEach(el => {
        observer.observe(el);
    });
}

// ============================================
// COUNTER ANIMATION
// ============================================

function initCounterAnimation() {
    const counters = document.querySelectorAll('.counter');

    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.dataset.counted) {
                animateCounter(entry.target);
                entry.target.dataset.counted = 'true';
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(counter) {
    const target = +counter.getAttribute('data-target');
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.innerText = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.innerText = target;
        }
    };

    updateCounter();
}

// ============================================
// CONTACT FORM
// ============================================

function initContactForm() {
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);

            // Show success message
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerText;

            submitBtn.innerText = '✓ Message Sent!';
            submitBtn.disabled = true;

            // Simulate sending (in production, this would be an API call)
            setTimeout(() => {
                contactForm.reset();
                submitBtn.innerText = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// ============================================
// SMOOTH SCROLL LINKS
// ============================================

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
}

// ============================================
// BUTTON CLICK ANIMATION
// ============================================

function initButtonAnimations() {
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// INITIALIZE ALL
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMobileMenu();
    initNavbarScroll();
    initActiveNavLink();
    initScrollReveal();
    initCounterAnimation();
    initContactForm();
    initSmoothScroll();
    initButtonAnimations();
});

// ============================================
// KEYBOARD SHORTCUTS
// ============================================

document.addEventListener('keydown', (e) => {
    // Toggle theme with Ctrl/Cmd + D
    if ((e.ctrlKey || e.metaKey) && e.key === 'd') {
        e.preventDefault();
        document.querySelector('.theme-toggle').click();
    }
});
