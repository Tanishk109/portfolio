'use client'

import Link from 'next/link'
import { Menu, X, Moon, Sun, Award, Users, Zap, Trophy } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function Leadership() {
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

  const leadership = [
    {
      icon: Users,
      title: 'Convenor - International Innovation Challenge 2.0',
      organization: 'Manipal University Jaipur',
      year: '2024 - 2025',
      stats: ['150+', 'Team Members'],
      highlights: [
        '36-hour international hackathon',
        '1200+ participant registrations',
        'Coordinated with 3+ countries',
        'Managed Rs.5 lakh budget',
        'Secured corporate sponsorships'
      ],
      color: 'from-purple-500 to-pink-500',
      icon_color: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'General Secretary - IEEE WIE, MUJ',
      organization: 'IEEE Women in Engineering',
      year: '2024 - Present',
      stats: ['50+', 'Participants'],
      highlights: [
        'International collaboration initiatives',
        'Diversity & inclusion programs',
        'Cross-border partnerships (6+ countries)',
        'Member engagement & retention',
        'Technical workshop coordination'
      ],
      color: 'from-blue-500 to-cyan-500',
      icon_color: 'text-blue-600'
    },
    {
      icon: Zap,
      title: 'Event Organizer - Blood Donation Drive',
      organization: 'Community Initiative',
      year: '2024',
      stats: ['1600+', 'Units Collected'],
      highlights: [
        'Large-scale community event',
        'Secured Rs.50K+ sponsorships',
        'Corporate affairs coordination',
        'Healthcare impact initiative',
        'Budget & logistics management'
      ],
      color: 'from-red-500 to-orange-500',
      icon_color: 'text-red-600'
    },
    {
      icon: Trophy,
      title: 'Dean\'s List Scholar',
      organization: 'Manipal University Jaipur',
      year: '5 Consecutive Semesters',
      stats: ['9.66', 'CGPA'],
      highlights: [
        'Academic excellence recognition',
        'Dr. TMA Pai Scholarship (3 years)',
        'Student Excellence Award',
        'District-Level 3rd Place (Poster Making)',
        'Consistent top academic performer'
      ],
      color: 'from-green-500 to-emerald-500',
      icon_color: 'text-green-600'
    }
  ]

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white transition-colors relative overflow-hidden">
        {/* Animated background elements */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-40 h-40 bg-blue-200 dark:bg-blue-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute top-40 right-10 w-40 h-40 bg-purple-200 dark:bg-purple-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-40 h-40 bg-pink-200 dark:bg-pink-900/30 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        </div>

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
              <Link href="/leadership" className="font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors border-b-2 border-blue-600">
                Leadership
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
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="space-y-12">
            {/* Header */}
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">Leadership & Impact</h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-3xl">
                Leading teams, driving innovation, and creating meaningful impact through strategic initiatives and community engagement.
              </p>
            </div>

            {/* Leadership Grid */}
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              {leadership.map((item, index) => {
                const IconComponent = item.icon
                return (
                  <div
                    key={index}
                    className="group relative p-8 bg-gradient-to-br opacity-90 hover:opacity-100 transition-all duration-300 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 overflow-hidden"
                  >
                    {/* Background Gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />

                    <div className="relative z-10">
                      {/* Icon and Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className={`p-3 bg-gradient-to-br ${item.color} rounded-lg`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">{item.organization}</p>
                          <p className="text-sm text-slate-500 dark:text-slate-400">{item.year}</p>
                        </div>
                      </div>

                      {/* Stats */}
                      <div className="flex gap-6 mb-6 py-4 border-y border-slate-200 dark:border-slate-800">
                        <div>
                          <div className={`text-3xl font-bold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                            {item.stats[0]}
                          </div>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{item.stats[1]}</p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                            <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${item.color}`} />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Impact Section */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">150+</div>
                <p className="font-semibold mb-2">Team Members Managed</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Leading cross-functional teams in large-scale events</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">5</div>
                <p className="font-semibold mb-2">Awards & Recognition</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">Dean's List, Scholarships, and Excellence Awards</p>
              </div>
              <div className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">6+</div>
                <p className="font-semibold mb-2">Global Partnerships</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm">International collaborations across borders</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}
