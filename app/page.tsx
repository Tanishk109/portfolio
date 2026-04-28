'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { useState } from 'react'

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark'
    setIsDark(isDarkMode)
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    }

    // Three.js 3D Background
    const script = document.createElement('script')
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
    script.onload = () => {
      if (containerRef.current && window.THREE) {
        initThreeJS(containerRef.current, isDarkMode)
      }
    }
    document.head.appendChild(script)

    return () => {
      document.head.removeChild(script)
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
        {/* 3D Canvas Background */}
        <div ref={containerRef} className="fixed inset-0 -z-10" />

        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-blue-600">
                Home
              </Link>
              <Link href="/about" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/projects" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link href="/certifications" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Certifications
              </Link>
              <Link href="/contact" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
              <div className="px-4 py-4 space-y-3">
                <Link href="/" className="block font-semibold hover:text-blue-600 dark:hover:text-blue-400 py-2">
                  Home
                </Link>
                <Link href="/about" className="block font-semibold hover:text-blue-600 dark:hover:text-blue-400 py-2">
                  About
                </Link>
                <Link href="/projects" className="block font-semibold hover:text-blue-600 dark:hover:text-blue-400 py-2">
                  Projects
                </Link>
                <Link href="/certifications" className="block font-semibold hover:text-blue-600 dark:hover:text-blue-400 py-2">
                  Certifications
                </Link>
                <Link href="/contact" className="block font-semibold hover:text-blue-600 dark:hover:text-blue-400 py-2">
                  Contact
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I&apos;m <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Tanishk Mittal</span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Full Stack Developer & Product Manager. Building AI-driven solutions, scalable systems, and meaningful digital experiences. Currently pursuing B.Tech CSE (IoT & IS) at Manipal University Jaipur.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/projects"
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors text-center"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg font-semibold transition-colors text-center"
                >
                  Get In Touch
                </Link>
              </div>
            </div>

            {/* Profile Image */}
            <div className="relative h-96 md:h-full flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-10 blur-2xl" />
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Profile-AZd5zp9mTKeGyRY98fzXhS21NC1Kcy.jpg"
                alt="Tanishk Mittal"
                className="relative w-80 h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">9.66</div>
                <p className="text-slate-600 dark:text-slate-400">CGPA</p>
                <p className="text-sm text-slate-500">B.Tech CSE</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5</div>
                <p className="text-slate-600 dark:text-slate-400">Dean&apos;s List</p>
                <p className="text-sm text-slate-500">Consecutive Semesters</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">4</div>
                <p className="text-slate-600 dark:text-slate-400">Major Projects</p>
                <p className="text-sm text-slate-500">AI & Full-Stack</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">150+</div>
                <p className="text-slate-600 dark:text-slate-400">Team Led</p>
                <p className="text-sm text-slate-500">IIC 2.0 Hackathon</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Links */}
        <section className="py-12 px-4 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto">
            <p className="text-center text-slate-600 dark:text-slate-400 mb-6">Connect with me</p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="https://github.com/tanishk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/tanishk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="mailto:tanishkmittal183@gmail.com"
                className="px-6 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 rounded-lg font-semibold transition-colors"
              >
                Email
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

function initThreeJS(container: HTMLElement, isDark: boolean) {
  const scene = new window.THREE.Scene()
  const camera = new window.THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
  const renderer = new window.THREE.WebGLRenderer({ alpha: true, antialias: true })

  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.setPixelRatio(window.devicePixelRatio)
  container.appendChild(renderer.domElement)

  camera.position.z = 100

  // Create particles
  const particlesGeometry = new window.THREE.BufferGeometry()
  const particlesCnt = 500
  const posArray = new Float32Array(particlesCnt * 3)

  for (let i = 0; i < particlesCnt * 3; i += 3) {
    posArray[i] = (Math.random() - 0.5) * 200
    posArray[i + 1] = (Math.random() - 0.5) * 200
    posArray[i + 2] = (Math.random() - 0.5) * 200
  }

  particlesGeometry.setAttribute('position', new window.THREE.BufferAttribute(posArray, 3))

  const particlesMaterial = new window.THREE.PointsMaterial({
    size: 2,
    color: isDark ? 0x3b82f6 : 0x2563eb,
    sizeAttenuation: true,
  })

  const particlesMesh = new window.THREE.Points(particlesGeometry, particlesMaterial)
  scene.add(particlesMesh)

  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate)
    particlesMesh.rotation.x += 0.0001
    particlesMesh.rotation.y += 0.0002
    renderer.render(scene, camera)
  }

  animate()

  // Handle resize
  const handleResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  }

  window.addEventListener('resize', handleResize)

  return () => {
    window.removeEventListener('resize', handleResize)
    container.removeChild(renderer.domElement)
  }
}
