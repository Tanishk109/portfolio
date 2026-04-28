'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun, Code2, Brain, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function About() {
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

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Firebase'] },
    { category: 'Tools', items: ['Git', 'Docker', 'AWS', 'Vercel', 'GitHub Actions'] },
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
              <Link href="/about" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-blue-600">
                About
              </Link>
              <Link href="/projects" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
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
          <div className="space-y-16">
            {/* About Hero */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">About Me</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                I&apos;m a passionate full-stack developer with 5+ years of experience building web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.
              </p>
            </div>

            {/* Core Values */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <Code2 className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Clean Code</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I write maintainable, scalable code that stands the test of time.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <Brain className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I approach challenges analytically and creatively to find optimal solutions.
                </p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Performance</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  I optimize every aspect of applications for speed and efficiency.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {skills.map((skill) => (
                  <div key={skill.category} className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                    <h3 className="text-lg font-bold mb-4 text-blue-600">{skill.category}</h3>
                    <ul className="space-y-2">
                      {skill.items.map((item) => (
                        <li key={item} className="text-slate-600 dark:text-slate-400">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Experience</h2>
              <div className="space-y-6">
                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Senior Full Stack Developer</h3>
                    <span className="text-sm text-slate-600 dark:text-slate-400">2022 - Present</span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">Tech Company Inc</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Leading development of modern web applications, mentoring junior developers, and architecting scalable solutions.
                  </p>
                </div>
                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">Full Stack Developer</h3>
                    <span className="text-sm text-slate-600 dark:text-slate-400">2020 - 2022</span>
                  </div>
                  <p className="text-blue-600 font-semibold mb-2">StartUp Co</p>
                  <p className="text-slate-600 dark:text-slate-400">
                    Built full-stack applications using React, Node.js, and various cloud services. Improved performance by 40%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
