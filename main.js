// ==========================================
// NevaraTech - Main JavaScript (Vanilla JS)
// No dependencies except Three.js via CDN
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initMobileMenu();
  initSmoothScroll();
  initScrollReveal();
  initTestimonials();
  initThreeParticles();
  initForms();
});

// ==========================================
// Navbar Scroll Effect
// ==========================================
function initNavbar() {
  const navbar = document.getElementById('navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

// ==========================================
// Mobile Menu Toggle
// ==========================================
function initMobileMenu() {
  const toggle = document.getElementById('mobile-toggle');
  const menu = document.getElementById('mobile-menu');
  
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    
    // Animate hamburger icon
    const icon = toggle.querySelector('svg path');
    if (menu.classList.contains('hidden')) {
      icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    } else {
      icon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.add('hidden');
      const icon = toggle.querySelector('svg path');
      icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    }
  });
}

// ==========================================
// Smooth Scroll for Anchor Links
// ==========================================
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href === '#') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        // Close mobile menu if open
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.add('hidden');
        
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// ==========================================
// Scroll Reveal Animation
// ==========================================
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  reveals.forEach(el => observer.observe(el));
}

// ==========================================
// Testimonials Carousel
// ==========================================
function initTestimonials() {
  const testimonials = [
    {
      text: "NevaraTech transformed our data infrastructure completely. Their AI solutions helped us reduce operational costs by 40% and improve customer satisfaction scores dramatically.",
      name: "James Davidson",
      role: "CTO, TechFlow Inc.",
      initials: "JD"
    },
    {
      text: "The team at NevaraTech delivered beyond our expectations. Their predictive analytics platform has become essential to our decision-making process.",
      name: "Sarah Mitchell",
      role: "CEO, DataDriven Co.",
      initials: "SM"
    },
    {
      text: "Working with NevaraTech was a game-changer. Their automation solutions saved our team hundreds of hours monthly, allowing us to focus on strategic initiatives.",
      name: "Michael Roberts",
      role: "VP Operations, ScaleUp Labs",
      initials: "MR"
    }
  ];

  let currentIndex = 0;
  const textEl = document.getElementById('testimonial-text');
  const nameEl = document.getElementById('testimonial-name');
  const roleEl = document.getElementById('testimonial-role');
  const avatarEl = document.getElementById('testimonial-avatar');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  if (!textEl || !nameEl || !roleEl || !avatarEl) return;

  function updateTestimonial(index) {
    const t = testimonials[index];
    
    // Fade out
    textEl.style.opacity = '0';
    nameEl.style.opacity = '0';
    roleEl.style.opacity = '0';
    
    setTimeout(() => {
      textEl.textContent = `"${t.text}"`;
      nameEl.textContent = t.name;
      roleEl.textContent = t.role;
      avatarEl.querySelector('span').textContent = t.initials;
      
      // Fade in
      textEl.style.opacity = '1';
      nameEl.style.opacity = '1';
      roleEl.style.opacity = '1';
    }, 300);

    // Update dots
    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % testimonials.length;
    updateTestimonial(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
    updateTestimonial(currentIndex);
  }

  if (nextBtn) nextBtn.addEventListener('click', nextSlide);
  if (prevBtn) prevBtn.addEventListener('click', prevSlide);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateTestimonial(currentIndex);
    });
  });

  // Auto-advance every 6 seconds
  setInterval(nextSlide, 6000);

  // Add transition styles
  [textEl, nameEl, roleEl].forEach(el => {
    el.style.transition = 'opacity 0.3s ease';
  });
}

// ==========================================
// Three.js Particle Background
// ==========================================
function initThreeParticles() {
  const canvas = document.getElementById('particles-canvas');
  const THREE = window.THREE; // Declare the THREE variable
  if (!canvas || typeof THREE === 'undefined') return;

  // Scene setup
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas,
    alpha: true, 
    antialias: true 
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);

  // Create particles
  const particleCount = 1500;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  const cyan = new THREE.Color(0x00d4ff);
  const teal = new THREE.Color(0x00b8a9);

  for (let i = 0; i < particleCount * 3; i += 3) {
    // Spread particles in a sphere-like distribution
    const radius = 50;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i + 2] = radius * Math.cos(phi) - 20;

    // Random color between cyan and teal
    const mixRatio = Math.random();
    const color = cyan.clone().lerp(teal, mixRatio);
    colors[i] = color.r;
    colors[i + 1] = color.g;
    colors[i + 2] = color.b;
  }

  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.15,
    vertexColors: true,
    transparent: true,
    opacity: 0.8,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);

  // Create wireframe geometries
  const wireframeMaterial = new THREE.MeshBasicMaterial({
    color: 0x00d4ff,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  // Floating cube
  const cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  const cube = new THREE.Mesh(cubeGeometry, wireframeMaterial);
  cube.position.set(-15, 5, -10);
  scene.add(cube);

  // Floating sphere
  const sphereGeometry = new THREE.IcosahedronGeometry(3, 1);
  const sphere = new THREE.Mesh(sphereGeometry, wireframeMaterial.clone());
  sphere.material.color.setHex(0x00b8a9);
  sphere.position.set(15, -5, -15);
  scene.add(sphere);

  // Floating torus
  const torusGeometry = new THREE.TorusGeometry(3, 0.8, 8, 24);
  const torus = new THREE.Mesh(torusGeometry, wireframeMaterial.clone());
  torus.material.color.setHex(0x00d4ff);
  torus.position.set(0, 10, -20);
  scene.add(torus);

  // Mouse interaction
  let mouseX = 0;
  let mouseY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    const time = Date.now() * 0.001;

    // Rotate particles slowly
    particles.rotation.y = time * 0.05;
    particles.rotation.x = Math.sin(time * 0.1) * 0.1;

    // Mouse influence
    particles.rotation.y += mouseX * 0.01;
    particles.rotation.x += mouseY * 0.01;

    // Animate wireframe shapes
    cube.rotation.x = time * 0.3;
    cube.rotation.y = time * 0.2;
    cube.position.y = 5 + Math.sin(time) * 2;

    sphere.rotation.x = time * 0.2;
    sphere.rotation.z = time * 0.3;
    sphere.position.y = -5 + Math.cos(time * 0.8) * 2;

    torus.rotation.x = time * 0.4;
    torus.rotation.y = time * 0.2;
    torus.position.x = Math.sin(time * 0.5) * 3;

    renderer.render(scene, camera);
  }

  animate();

  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// ==========================================
// Form Handlers
// ==========================================
function initForms() {
  // Beta signup form
  const betaForm = document.getElementById('beta-form');
  if (betaForm) {
    betaForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = betaForm.querySelector('input[type="email"]').value;
      alert(`Thank you for joining our beta program! We'll contact you at ${email} soon.`);
      betaForm.reset();
    });
  }

  // Contact form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you within 24 hours.');
      contactForm.reset();
    });
  }
}
