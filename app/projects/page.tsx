'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun, Github, ExternalLink } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Projects() {
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

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with real-time inventory, payment processing, and admin dashboard.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      title: 'AI Chat Application',
      description: 'Real-time chat application powered by AI with natural language processing and sentiment analysis.',
      tags: ['Next.js', 'TypeScript', 'WebSocket', 'OpenAI'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
    },
    {
      title: 'Task Management SaaS',
      description: 'Collaborative task management tool with real-time updates, team collaboration, and analytics.',
      tags: ['React', 'Firebase', 'TailwindCSS', 'Stripe'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard for visualizing complex data with real-time updates and custom reports.',
      tags: ['React', 'D3.js', 'PostgreSQL', 'Express'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
    },
    {
      title: 'Social Media Analytics',
      description: 'Analytics platform for tracking social media metrics across multiple platforms with AI insights.',
      tags: ['Next.js', 'Python', 'PostgreSQL', 'Machine Learning'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
    },
    {
      title: 'Video Streaming App',
      description: 'Video streaming platform with adaptive bitrate, content management, and user recommendations.',
      tags: ['React', 'Node.js', 'FFmpeg', 'AWS S3'],
      github: '#',
      live: '#',
      image: 'bg-gradient-to-br from-red-400 to-red-600',
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
              <Link href="/projects" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-blue-600">
                Projects
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
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                A showcase of my recent work spanning full-stack development, AI integration, and scalable solutions.
              </p>
            </div>

            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group bg-slate-50 dark:bg-slate-900 rounded-lg overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-shadow"
                >
                  <div className={`h-48 ${project.image} opacity-75 group-hover:opacity-100 transition-opacity`} />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">{project.description}</p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-slate-800 text-white hover:bg-blue-600 dark:hover:bg-blue-600 rounded-lg transition-colors font-semibold"
                      >
                        <Github size={18} />
                        Code
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 px-4 py-2 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 rounded-lg transition-colors font-semibold"
                      >
                        <ExternalLink size={18} />
                        Live
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
