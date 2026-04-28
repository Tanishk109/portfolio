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
      title: 'Multi-Disease Detection using Deep Learning',
      description: 'Built a DeepLabV3-based medical image segmentation model on ISIC 2018 dataset with 2K+ images. Processes and segments diverse skin lesion classes with MSE and PSNR evaluation.',
      tags: ['PyTorch', 'DeepLabV3', 'OpenCV', 'Deep Learning'],
      github: 'https://github.com/tanishk',
      live: '#',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      title: 'Rehabilitation Management Portal',
      description: 'Designed scalable role-based system managing patient data, recovery workflows, and inventory across 495+ rehabilitation centers with support for 46 ATFs nationwide.',
      tags: ['Full-Stack', 'Role-Based Access', 'Scalable System'],
      github: 'https://github.com/tanishk',
      live: '#',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      title: 'AI-Driven Smart Flood Management System',
      description: 'Geospatial AI system using map-based data with GeoSpatial/GeoFencing concepts to predict flood-prone areas and enable early warnings.',
      tags: ['AI', 'Geospatial', 'Python', 'Machine Learning'],
      github: 'https://github.com/tanishk',
      live: '#',
      image: 'bg-gradient-to-br from-cyan-400 to-cyan-600',
    },
    {
      title: 'Research Portal',
      description: 'Full-stack web application with product management focus. Defined user personas, journeys, and feature requirements to improve project discovery and system workflow.',
      tags: ['Full-Stack', 'Product Management', 'React', 'Node.js'],
      github: 'https://github.com/tanishk',
      live: '#',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
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

        {/* Content */}
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="space-y-12">
            {/* Header */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Featured Projects</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Building intelligent solutions through AI, deep learning, and scalable full-stack applications that solve real-world problems.
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
