'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  Rocket,
  Eye,
  Brain,
  Cloud,
  Smartphone,
  TrendingUp,
  Shield,
  Zap,
  ChevronRight,
  Check
} from 'lucide-react'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-sky rounded-lg flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gradient">KUBE</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-gray-600 hover:text-primary-500 transition-colors">About</a>
              <a href="#modules" className="text-gray-600 hover:text-primary-500 transition-colors">Modules</a>
              <a href="#impact" className="text-gray-600 hover:text-primary-500 transition-colors">Impact</a>
              <Link href="/login" className="text-gray-600 hover:text-primary-500 transition-colors font-medium">
                Sign In
              </Link>
              <Link href="/register" className="btn btn-primary">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden min-h-screen">
        {/* Professional Background Slideshow - One Image at a Time */}
        <div className="absolute inset-0 overflow-hidden" style={{ zIndex: 0 }}>
          {/* Enhanced gradient overlay for text clarity */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-primary-50/70 to-accent-50/75" style={{ zIndex: 2 }} />

          {/* Additional dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-gray-900/20" style={{ zIndex: 2 }} />

          {/* Image 1 - Cattle Grazing */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [1.1, 1, 1, 1.1]
            }}
            transition={{
              duration: 20,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
              repeatDelay: 0
            }}
            className="absolute inset-0"
            style={{ zIndex: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=1920&q=95"
              alt="Cattle grazing in pasture"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 2 - Livestock Monitoring */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [1.1, 1, 1, 1.1]
            }}
            transition={{
              duration: 20,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
              delay: 5,
              repeatDelay: 0
            }}
            className="absolute inset-0"
            style={{ zIndex: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1560493676-04071c5f467b?w=1920&q=95"
              alt="Cattle and livestock"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 3 - Aerial Landscape */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [1.1, 1, 1, 1.1]
            }}
            transition={{
              duration: 20,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
              delay: 10,
              repeatDelay: 0
            }}
            className="absolute inset-0"
            style={{ zIndex: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1576704075965-5293c1c31916?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Aerial landscape monitoring"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Image 4 - Drone in Action */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [1.1, 1, 1, 1.1]
            }}
            transition={{
              duration: 20,
              times: [0, 0.1, 0.9, 1],
              repeat: Infinity,
              delay: 15,
              repeatDelay: 0
            }}
            className="absolute inset-0"
            style={{ zIndex: 1 }}
          >
            <img
              src="https://images.unsplash.com/photo-1508444845599-5c89863b1c44?w=1920&q=95"
              alt="Drone monitoring operations"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <div className="container-custom relative" style={{ zIndex: 10 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary-600 rounded-full text-white text-sm font-bold mb-6 shadow-xl"
            >
              <Zap className="w-4 h-4" />
              Africa's First Aerial Intelligence Platform
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg">
              <span className="text-gray-900 drop-shadow-sm">Eyes in the Sky,</span>
              <br />
              <span className="text-gradient drop-shadow-md">Brains in the Cloud</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-800 font-semibold mb-12 max-w-3xl mx-auto drop-shadow-md bg-white/30 backdrop-blur-sm py-4 px-6 rounded-2xl">
              KUBE turns Africa's livestock, wildlife, and landscapes into real-time monitored, predictable, and protectable assets through aerial intelligence.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard" className="btn btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-glow-blue transform hover:scale-105 transition-all">
                View Demo Dashboard
                <ChevronRight className="w-5 h-5" />
              </Link>
              <a href="#story" className="btn btn-outline text-lg px-8 py-4 bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white transition-all">
                Read Our Story
              </a>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            >
              {[
                { value: '95%', label: 'Count Accuracy' },
                { value: '40%', label: 'Faster Detection' },
                { value: '50%', label: 'Loss Reduction' },
                { value: '3', label: 'Core Modules' },
              ].map((stat, index) => (
                <div key={index} className="text-center bg-white/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2 drop-shadow-md">
                    {stat.value}
                  </div>
                  <div className="text-gray-800 font-semibold">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* The Story */}
      <section id="story" className="section bg-gray-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8">The Story Behind KUBE</h2>
            <div className="text-xl md:text-2xl text-gray-300 space-y-6 leading-relaxed">
              <p>
                In 2019, 950 cattle disappeared into the Zimbabwean savannah and were never recovered.
              </p>
              <p>
                That loss wasn't just animals—it was school fees, food security, and family survival.
              </p>
              <p className="text-2xl md:text-3xl font-bold text-primary-400">
                KUBE exists so that no farmer, ranger, or community has to be blind again.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section id="about" className="section">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">How KUBE Works</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Four integrated layers working together to create Africa's aerial intelligence infrastructure
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Eye,
                title: 'Sky Layer',
                description: 'Drones equipped with RGB, thermal, and multispectral sensors patrol from above',
                color: 'primary'
              },
              {
                icon: Brain,
                title: 'AI Edge',
                description: 'Real-time animal detection, counting, and anomaly spotting at the source',
                color: 'accent'
              },
              {
                icon: Cloud,
                title: 'Cloud Brain',
                description: 'National livestock & wildlife database with analytics and insights',
                color: 'success'
              },
              {
                icon: Smartphone,
                title: 'Mobile Interface',
                description: 'SMS, app, and web dashboards for farmers, rangers, and authorities',
                color: 'warning'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card card-interactive text-center"
              >
                <div className={`w-16 h-16 mx-auto mb-4 bg-${item.color}-100 rounded-2xl flex items-center justify-center`}>
                  <item.icon className={`w-8 h-8 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Modules */}
      <section id="modules" className="section bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">One Platform, Three Massive Markets</h2>
            <p className="text-xl text-gray-600">
              Designed to scale across agriculture, conservation, and climate intelligence
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                name: 'KUBE-Farm',
                subtitle: 'Livestock Intelligence',
                description: 'Real-time herd monitoring, disease detection, and pasture optimization',
                features: [
                  'Automated herd counting & tracking',
                  'Early disease & heat stress detection',
                  'Missing animal search (day & night)',
                  'Pasture biomass & NDVI maps',
                  'Anti-theft patrol evidence',
                  'SMS alerts for rural farmers'
                ],
                color: 'primary',
                gradient: 'from-primary-500 to-primary-700'
              },
              {
                name: 'KUBE-Park',
                subtitle: 'Wildlife & Tourism Intelligence',
                description: 'Automated wildlife census, anti-poaching, and park security',
                features: [
                  'AI-powered wildlife census',
                  'Migration & movement tracking',
                  'Injured/sick animal detection',
                  'Night thermal patrols',
                  'Real-time ranger alerts',
                  'Evidence-grade media gallery'
                ],
                color: 'success',
                gradient: 'from-success-500 to-success-700'
              },
              {
                name: 'KUBE-Land',
                subtitle: 'Landscape & Climate Intelligence',
                description: 'Land degradation monitoring, vegetation health, and climate resilience',
                features: [
                  'Overgrazing & degradation monitoring',
                  'Vegetation health & drought stress',
                  'Land-use change timeline',
                  'Climate risk indicators',
                  'Policy & insurance reports',
                  'Sustainable land management data'
                ],
                color: 'accent',
                gradient: 'from-accent-500 to-accent-700'
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="card"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <div className={`inline-block px-4 py-2 bg-gradient-to-r ${module.gradient} text-white rounded-full text-sm font-medium mb-4`}>
                      {module.subtitle}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">{module.name}</h3>
                    <p className="text-lg text-gray-600 mb-6">{module.description}</p>
                    <Link href={`/dashboard/${module.name.toLowerCase().split('-')[1]}`} className="btn btn-primary">
                      Explore {module.name}
                      <ChevronRight className="w-5 h-5" />
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {module.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start gap-3">
                        <Check className={`w-5 h-5 text-${module.color}-600 flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section id="impact" className="section">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Measurable Impact</h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: TrendingUp,
                title: '25-40% Faster Detection',
                description: 'Spot problems before they become crises'
              },
              {
                icon: Shield,
                title: '20-50% Loss Reduction',
                description: 'Fewer deaths, less theft, higher productivity'
              },
              {
                icon: Check,
                title: '>95% Accuracy',
                description: 'Reliable counts and health assessments'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-2xl flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-sky text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to See KUBE in Action?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Explore our demo dashboard and experience how aerial intelligence is transforming Africa's agriculture and conservation.
            </p>
            <Link href="/dashboard" className="btn bg-white text-primary-600 hover:bg-gray-100 text-lg px-8 py-4 shadow-xl">
              Launch Demo Dashboard
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-gradient-sky rounded-lg flex items-center justify-center">
              <Rocket className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">KUBE</span>
          </div>
          <p className="text-gray-400 mb-4">
            Built with 💙 for Africa's future
          </p>
          <p className="text-sm text-gray-500">
            © 2024-2026 KUBE Platform. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
