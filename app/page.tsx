'use client';

import { useEffect, useRef, useState } from 'react';

export default function Portfolio() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorGlowRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [mounted, setMounted] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Audio autoplay effect
  useEffect(() => {
    const savedMuteState = localStorage.getItem('portfolioMuted');
    const shouldBeMuted = savedMuteState === 'true';
    setIsMuted(shouldBeMuted);

    if (audioRef.current) {
      audioRef.current.muted = shouldBeMuted;
      audioRef.current.volume = 0.3; // Set volume to 30% for background music
      // Attempt autoplay
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Autoplay was prevented, will play on user interaction
          console.log('[v0] Autoplay prevented, waiting for user interaction');
        });
      }
    }
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      setIsMuted(newMutedState);
      audioRef.current.muted = newMutedState;
      localStorage.setItem('portfolioMuted', String(newMutedState));
      
      if (!newMutedState && audioRef.current.paused) {
        audioRef.current.play().catch(() => {
          console.log('[v0] Audio play failed');
        });
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    
    // Particle Canvas Setup
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = window.innerWidth;
    let H = window.innerHeight;
    let particles: any[] = [];

    canvas.width = W;
    canvas.height = H;

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;

      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.size = Math.random() * 1.5 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.3;
        this.speedY = (Math.random() - 0.5) * 0.3;
        this.opacity = Math.random() * 0.5 + 0.1;
        this.color = Math.random() > 0.5 ? '99,102,241' : '168,85,247';
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) {
          this.reset();
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color},${this.opacity})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(99,102,241,${(1 - dist / 120) * 0.08})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    }

    let animationId: number;
    function animate() {
      ctx.clearRect(0, 0, W, H);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      drawConnections();
      animationId = requestAnimationFrame(animate);
    }
    animate();

    const handleResize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  // Cursor Glow Effect
  useEffect(() => {
    const glow = cursorGlowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.left = e.clientX + 'px';
      glow.style.top = e.clientY + 'px';
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll Reveal Animation
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            
            // Trigger skill bars
            e.target.querySelectorAll('.skill-level-fill').forEach((bar: Element) => {
              const element = bar as HTMLElement;
              element.style.width = element.dataset.level + '%';
            });

            // Trigger counters
            e.target.querySelectorAll('[data-count]').forEach((el: Element) => {
              const element = el as HTMLElement;
              const target = +element.dataset.count!;
              let current = 0;
              const inc = target / 40;
              const timer = setInterval(() => {
                current = Math.min(current + inc, target);
                element.textContent =
                  Math.floor(current) +
                  (element.closest('.stat-card')?.querySelector('.stat-label')?.textContent?.includes('Year') ? '' : '+');
                if (current >= target) clearInterval(timer);
              }, 30);
            });
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach((r) => observer.observe(r));
    return () => {
      reveals.forEach((r) => observer.unobserve(r));
    };
  }, [mounted]);

  // 3D Tilt Effect
  useEffect(() => {
    const cards = document.querySelectorAll('.skill-card, .project-card');
    cards.forEach((card: Element) => {
      const htmlCard = card as HTMLElement;
      htmlCard.addEventListener('mousemove', (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = htmlCard.getBoundingClientRect();
        const x = (mouseEvent.clientX - rect.left) / rect.width - 0.5;
        const y = (mouseEvent.clientY - rect.top) / rect.height - 0.5;
        htmlCard.style.transform = `translateY(-6px) rotateX(${-y * 12}deg) rotateY(${x * 12}deg)`;
      });

      htmlCard.addEventListener('mouseleave', () => {
        htmlCard.style.transform = 'translateY(-6px) rotateX(0deg) rotateY(0deg)';
      });
    });
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="portfolio-container">
      <audio 
        ref={audioRef}
        loop
        preload="auto"
      >
        <source 
          src="https://assets.mixkit.co/active_storage/musics/677-ambient-calm.mp3"
          type="audio/mpeg" 
        />
      </audio>

      <canvas ref={canvasRef} className="bg-canvas"></canvas>
      <div ref={cursorGlowRef} className="cursor-glow"></div>

      <div className="portfolio">
        {/* NAV */}
        <nav className="nav">
          <div className="logo">TK.</div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <button 
            className={`audio-toggle ${isMuted ? 'muted' : 'playing'}`}
            onClick={toggleAudio}
            title={isMuted ? 'Unmute' : 'Mute'}
          >
            {isMuted ? '🔇' : '🎵'}
          </button>
        </nav>

        {/* HERO */}
        <section className="hero" id="about">
          <div className="hero-tag">
            <span className="pulse-dot"></span>
            ✦ Open to opportunities
          </div>
          <h1 className="hero-title">
            Tanishk<br />
            <span className="gradient-text">Mittal</span>
          </h1>
          <p className="hero-sub">
            Full-stack developer & product manager crafting intelligent solutions with AI, deep learning, and scalable architectures. Passionate about innovation, clean code, and building products that matter.
          </p>
          <div className="hero-ctas">
            <button 
              className="btn-primary"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work →
            </button>
            <button 
              className="btn-ghost"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </button>
          </div>
        </section>

        {/* STATS */}
        <div className="stats reveal">
          <div className="stat-card">
            <div className="stat-num" data-count="4">0</div>
            <div className="stat-label">Projects Built</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" data-count="9">0</div>
            <div className="stat-label">CGPA</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" data-count="5">0</div>
            <div className="stat-label">Dean's List Awards</div>
          </div>
          <div className="stat-card">
            <div className="stat-num" data-count="150">0</div>
            <div className="stat-label">Team Led</div>
          </div>
        </div>

        {/* SKILLS */}
        <div className="section reveal" id="skills">
          <div className="section-label">EXPERTISE</div>
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">🐍</div>
              <div className="skill-name">Python</div>
              <div className="skill-level"><div className="skill-level-fill" data-level="90"></div></div>
              <div className="skill-pct">90%</div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔷</div>
              <div className="skill-name">TypeScript</div>
              <div className="skill-level"><div className="skill-level-fill" data-level="85"></div></div>
              <div className="skill-pct">85%</div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <div className="skill-name">React / Next.js</div>
              <div className="skill-level"><div className="skill-level-fill" data-level="88"></div></div>
              <div className="skill-pct">88%</div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🤖</div>
              <div className="skill-name">PyTorch/TensorFlow</div>
              <div className="skill-level"><div className="skill-level-fill" data-level="80"></div></div>
              <div className="skill-pct">80%</div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🗄️</div>
              <div className="skill-name">PostgreSQL/SQL</div>
              <div className="skill-level"><div className="skill-level-fill" data-level="85"></div></div>
              <div className="skill-pct">85%</div>
            </div>
            <div className="skill-card">
              <div className="skill-icon">🔬</div>
              <div className="skill-name">Deep Learning/AI</div>
              <div className="skill-level"><div className="skill-level-fill" data-level="82"></div></div>
              <div className="skill-pct">82%</div>
            </div>
          </div>
        </div>

        {/* PROJECTS */}
        <div className="section reveal" id="projects">
          <div className="section-label">WORK</div>
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-tag">Deep Learning</div>
              <div className="project-title">Multi-Disease Detection</div>
              <div className="project-desc">Built DeepLabV3-based medical image segmentation on ISIC 2018 dataset with 2K+ images for skin lesion classification.</div>
              <div className="project-footer">
                <div className="tech-pills">
                  <span className="tech-pill">PyTorch</span>
                  <span className="tech-pill">DeepLabV3</span>
                  <span className="tech-pill">OpenCV</span>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-tag">Full Stack</div>
              <div className="project-title">Rehabilitation Portal</div>
              <div className="project-desc">Designed scalable role-based system managing patient data across 495+ rehabilitation centers with 46 ATFs nationwide.</div>
              <div className="project-footer">
                <div className="tech-pills">
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">Node.js</span>
                  <span className="tech-pill">PostgreSQL</span>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-tag">Geospatial AI</div>
              <div className="project-title">Smart Flood Management</div>
              <div className="project-desc">Geospatial AI system using map-based data with GeoFencing concepts to predict flood-prone areas with early warnings.</div>
              <div className="project-footer">
                <div className="tech-pills">
                  <span className="tech-pill">AI/ML</span>
                  <span className="tech-pill">Geospatial</span>
                  <span className="tech-pill">Python</span>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </div>
            <div className="project-card">
              <div className="project-tag">Product</div>
              <div className="project-title">Research Portal</div>
              <div className="project-desc">Full-stack app with product management focus. Defined user personas, journeys, and feature requirements for discovery.</div>
              <div className="project-footer">
                <div className="tech-pills">
                  <span className="tech-pill">Full Stack</span>
                  <span className="tech-pill">React</span>
                  <span className="tech-pill">Node.js</span>
                </div>
                <span className="project-arrow">↗</span>
              </div>
            </div>
          </div>
        </div>

        {/* LEADERSHIP */}
        <div className="section reveal">
          <div className="section-label">JOURNEY</div>
          <h2 className="section-title">Leadership & Impact</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024 – Present</div>
              <div className="timeline-role">Convenor - IIC 2.0 Hackathon</div>
              <div className="timeline-company">150+ team, 1200+ registrations, Rs.5L budget, 36-hour international hackathon</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024 – Present</div>
              <div className="timeline-role">General Secretary - IEEE WIE, MUJ</div>
              <div className="timeline-company">International partnerships across 6+ countries, 50+ member engagement</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024</div>
              <div className="timeline-role">Dean's List Scholar</div>
              <div className="timeline-company">5 consecutive semesters, Dr. TMA Pai Scholarship recipient, 9.66 CGPA</div>
            </div>
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">2024</div>
              <div className="timeline-role">Blood Donation Drive Lead</div>
              <div className="timeline-company">1600+ units collected, Rs.50K+ in sponsorships, community impact</div>
            </div>
          </div>
        </div>

        {/* CONTACT */}
        <div className="section reveal" id="contact">
          <div className="section-label">CONNECT</div>
          <div className="contact-section">
            <div className="contact-title">Let's Build Something Great</div>
            <div className="contact-sub">Open to collaboration, opportunities, and innovative challenges.</div>
            <div className="contact-links">
              <a 
                className="contact-link" 
                href="https://github.com/Tanishk109" 
                target="_blank"
                rel="noopener noreferrer"
              >
                🐙 GitHub
              </a>
              <a 
                className="contact-link" 
                href="https://linkedin.com/in/tanishk" 
                target="_blank"
                rel="noopener noreferrer"
              >
                💼 LinkedIn
              </a>
              <a 
                className="contact-link" 
                href="mailto:tanishkmittal183@gmail.com"
              >
                ✉️ Email Me
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        :root {
          --bg: #030712;
          --bg2: #0d1117;
          --surface: #111827;
          --border: #1f2937;
          --accent: #6366f1;
          --accent2: #a855f7;
          --accent3: #06b6d4;
          --text: #f9fafb;
          --muted: #9ca3af;
          --glow: rgba(99, 102, 241, 0.3);
        }

        .portfolio-container {
          background: var(--bg);
          color: var(--text);
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .bg-canvas {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .cursor-glow {
          position: fixed;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.08), transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          z-index: 0;
          transition: opacity 0.3s;
        }

        .portfolio {
          position: relative;
          z-index: 1;
          max-width: 900px;
          margin: 0 auto;
          padding: 2rem 1.5rem 4rem;
        }

        .nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0 2rem;
          position: sticky;
          top: 0;
          z-index: 100;
          background: linear-gradient(to bottom, var(--bg) 80%, transparent);
        }

        .logo {
          font-family: 'Syne', sans-serif;
          font-size: 1.4rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1, #a855f7, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.5px;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .nav-links a {
          color: var(--muted);
          font-size: 0.85rem;
          font-weight: 500;
          text-decoration: none;
          transition: 0.2s;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: var(--text);
        }

        .audio-toggle {
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.2), rgba(168, 85, 247, 0.2));
          border: 1px solid rgba(99, 102, 241, 0.3);
          color: var(--text);
          width: 40px;
          height: 40px;
          border-radius: 10px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.2rem;
          transition: all 0.3s ease;
          margin-left: 1rem;
        }

        .audio-toggle:hover {
          border-color: var(--accent);
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3));
          transform: translateY(-2px);
          box-shadow: 0 0 20px rgba(99, 102, 241, 0.4);
        }

        .audio-toggle.playing {
          animation: audioWave 1s ease-in-out infinite;
        }

        @keyframes audioWave {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }

        .audio-toggle.muted {
          opacity: 0.6;
        }

        .hero {
          min-height: 80vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 3rem 0 2rem;
        }

        .hero-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.3);
          border-radius: 20px;
          padding: 0.35rem 0.9rem;
          font-size: 0.78rem;
          font-weight: 500;
          color: #818cf8;
          width: fit-content;
          margin-bottom: 1.5rem;
          animation: fadeSlideUp 0.6s ease both;
        }

        .pulse-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #6366f1;
          animation: pulse 2s infinite;
          display: inline-block;
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.8rem, 7vw, 5.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -2px;
          animation: fadeSlideUp 0.7s 0.1s ease both;
        }

        .gradient-text {
          background: linear-gradient(135deg, #6366f1, #a855f7, #06b6d4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-sub {
          margin-top: 1.5rem;
          font-size: 1.1rem;
          color: var(--muted);
          max-width: 520px;
          line-height: 1.7;
          animation: fadeSlideUp 0.7s 0.2s ease both;
        }

        .hero-ctas {
          display: flex;
          gap: 1rem;
          margin-top: 2.5rem;
          flex-wrap: wrap;
          animation: fadeSlideUp 0.7s 0.3s ease both;
        }

        .btn-primary {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: #fff;
          border: none;
          border-radius: 10px;
          padding: 0.75rem 1.75rem;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
          font-family: inherit;
          box-shadow: 0 0 30px rgba(99, 102, 241, 0.4);
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 0 45px rgba(99, 102, 241, 0.6);
        }

        .btn-ghost {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 0.75rem 1.75rem;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: 0.2s;
          font-family: inherit;
        }

        .btn-ghost:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin: 4rem 0;
          animation: fadeSlideUp 0.7s 0.4s ease both;
        }

        .stat-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 14px;
          padding: 1.2rem 1.5rem;
          transition: 0.3s;
          cursor: default;
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.08), transparent 70%);
          opacity: 0;
          transition: 0.3s;
        }

        .stat-card:hover {
          border-color: rgba(99, 102, 241, 0.5);
          transform: translateY(-4px);
        }

        .stat-card:hover::before {
          opacity: 1;
        }

        .stat-num {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--muted);
          margin-top: 0.2rem;
          font-weight: 500;
        }

        .section {
          margin: 5rem 0 2rem;
        }

        .section-label {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--accent);
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.75rem;
        }

        .section-label::after {
          content: '';
          flex: 1;
          height: 1px;
          background: linear-gradient(to right, var(--border), transparent);
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -1px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .skill-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 1.5rem;
          transition: 0.3s;
          cursor: default;
          transform-style: preserve-3d;
          position: relative;
          overflow: hidden;
        }

        .skill-card::after {
          content: '';
          position: absolute;
          inset: -1px;
          border-radius: 16px;
          background: linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3), rgba(6, 182, 212, 0.3));
          opacity: 0;
          transition: 0.3s;
          z-index: -1;
        }

        .skill-card:hover {
          transform: translateY(-6px) rotateX(4deg);
          border-color: transparent;
        }

        .skill-card:hover::after {
          opacity: 1;
        }

        .skill-icon {
          font-size: 1.8rem;
          margin-bottom: 0.75rem;
        }

        .skill-name {
          font-weight: 600;
          font-size: 0.95rem;
        }

        .skill-level {
          margin-top: 0.75rem;
          height: 3px;
          background: var(--border);
          border-radius: 2px;
          overflow: hidden;
        }

        .skill-level-fill {
          height: 100%;
          border-radius: 2px;
          background: linear-gradient(to right, #6366f1, #a855f7);
          transition: width 1.2s ease;
          width: 0;
        }

        .skill-pct {
          font-size: 0.75rem;
          color: var(--muted);
          margin-top: 0.4rem;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 1.25rem;
          margin-top: 1.5rem;
        }

        .project-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 18px;
          padding: 1.75rem;
          transition: 0.3s;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transform-style: preserve-3d;
        }

        .project-card::before {
          content: '';
          position: absolute;
          top: -60%;
          left: -60%;
          width: 200%;
          height: 200%;
          background: conic-gradient(from 0deg, transparent 70%, rgba(99, 102, 241, 0.15));
          animation: spin 6s linear infinite;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .project-card:hover {
          transform: translateY(-6px);
          border-color: rgba(99, 102, 241, 0.4);
        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-tag {
          display: inline-block;
          background: rgba(99, 102, 241, 0.15);
          color: #818cf8;
          font-size: 0.72rem;
          font-weight: 600;
          padding: 0.25rem 0.7rem;
          border-radius: 6px;
          margin-bottom: 1rem;
        }

        .project-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.15rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .project-desc {
          font-size: 0.85rem;
          color: var(--muted);
          line-height: 1.6;
        }

        .project-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.25rem;
          padding-top: 1rem;
          border-top: 1px solid var(--border);
        }

        .tech-pills {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
        }

        .tech-pill {
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.2rem 0.6rem;
          border-radius: 5px;
          background: var(--bg2);
          color: var(--muted);
          border: 1px solid var(--border);
        }

        .project-arrow {
          color: var(--accent);
          font-size: 1rem;
          transition: 0.2s;
        }

        .project-card:hover .project-arrow {
          transform: translate(3px, -3px);
        }

        .timeline {
          margin-top: 1.5rem;
          position: relative;
          padding-left: 1.5rem;
        }

        .timeline::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, var(--accent), transparent);
        }

        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          animation: fadeSlideUp 0.6s ease both;
        }

        .timeline-dot {
          position: absolute;
          left: -1.85rem;
          top: 0.3rem;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: linear-gradient(135deg, #6366f1, #a855f7);
          box-shadow: 0 0 12px rgba(99, 102, 241, 0.6);
        }

        .timeline-date {
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 600;
          margin-bottom: 0.3rem;
        }

        .timeline-role {
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.2rem;
        }

        .timeline-company {
          font-size: 0.85rem;
          color: var(--muted);
        }

        .contact-section {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 2.5rem;
          margin-top: 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .contact-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.12), transparent 60%);
        }

        .contact-title {
          font-family: 'Syne', sans-serif;
          font-size: 1.75rem;
          font-weight: 800;
          position: relative;
          margin-bottom: 0.75rem;
        }

        .contact-sub {
          color: var(--muted);
          font-size: 0.95rem;
          position: relative;
          margin-bottom: 1.75rem;
        }

        .contact-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
          position: relative;
        }

        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: var(--bg2);
          border: 1px solid var(--border);
          color: var(--text);
          text-decoration: none;
          padding: 0.65rem 1.25rem;
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 500;
          transition: 0.2s;
          cursor: pointer;
        }

        .contact-link:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-2px);
        }

        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: 0.7s ease;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
        }

        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .nav-links {
            gap: 1rem;
            font-size: 0.75rem;
          }

          .hero-title {
            font-size: clamp(2rem, 5vw, 4rem);
          }

          .skills-grid,
          .projects-grid {
            grid-template-columns: 1fr;
          }

          .stats {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  );
}
