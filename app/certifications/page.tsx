'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun, Award } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Certifications() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark'
    setIsDark(isDarkMode)
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

  const certifications = [
    {
      title: 'Prompt Design in Vertex AI',
      issuer: 'Google',
      date: 'Jan 2026',
      type: 'Skill Badge',
      color: 'from-blue-400 to-blue-600',
    },
    {
      title: 'Foundations of Data Science',
      issuer: 'Google',
      date: 'Jan 2026',
      type: 'Course Completion',
      color: 'from-green-400 to-green-600',
    },
    {
      title: 'Design Algorithm and Analysis',
      issuer: 'NPTEL',
      date: 'Oct 2025',
      type: 'Course Certificate',
      color: 'from-purple-400 to-purple-600',
    },
    {
      title: 'Programming In Java',
      issuer: 'NPTEL',
      date: 'Nov 2024',
      type: 'Course Certificate',
      color: 'from-orange-400 to-orange-600',
    },
    {
      title: 'CCNA: Introduction to Networks',
      issuer: 'Cisco',
      date: 'Nov 2024',
      type: 'Professional Certification',
      color: 'from-cyan-400 to-cyan-600',
    },
  ]

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 dark:bg-slate-950/80 backdrop-blur-md z-50 border-b border-slate-200 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </Link>

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

            <div className="hidden md:flex items-center gap-8">
              <Link href="/" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Home
              </Link>
              <Link href="/about" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                About
              </Link>
              <Link href="/projects" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Projects
              </Link>
              <Link href="/leadership" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                Leadership
              </Link>
              <Link href="/certifications" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-blue-600">
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
                <Link href="/leadership" className="block font-semibold hover:text-blue-600 dark:hover:text-blue-400 py-2">
                  Leadership
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

        {/* Content */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-12">
            {/* Header */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Certifications & Credentials</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Professional certifications and skill badges from industry leaders including Google, Cisco, and NPTEL demonstrating expertise in AI, networking, and software development.
              </p>
            </div>

            {/* Certifications Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="group bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${cert.color} rounded-lg text-white`}>
                        <Award size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-sm text-slate-500 dark:text-slate-400">{cert.type}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-blue-600 dark:text-blue-400 font-semibold">{cert.issuer}</span>
                        <span className="text-sm text-slate-600 dark:text-slate-400">{cert.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Skills Summary */}
            <div className="mt-16 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-900 dark:to-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
              <h2 className="text-2xl font-bold mb-6">Key Competencies</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3">AI & Machine Learning</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    <li>• Deep Learning & Neural Networks</li>
                    <li>• Computer Vision (OpenCV)</li>
                    <li>• Medical Image Segmentation</li>
                    <li>• AI Algorithm Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3">Cloud & Infrastructure</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    <li>• Google Cloud Platform</li>
                    <li>• Networking Fundamentals</li>
                    <li>• Data Architecture</li>
                    <li>• System Design</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold text-blue-600 dark:text-blue-400 mb-3">Software Development</h3>
                  <ul className="space-y-2 text-slate-600 dark:text-slate-400 text-sm">
                    <li>• Full-Stack Development</li>
                    <li>• Java Programming</li>
                    <li>• Algorithm Design</li>
                    <li>• Code Optimization</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
