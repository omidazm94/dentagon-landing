'use client'

import { useState } from 'react'
import { Menu, X, Download, Star, Users, Shield, Zap, Smartphone, Bluetooth, Brain, Mail, Facebook, Twitter, Instagram, Linkedin, CheckCircle, Clock, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  const handleDownload = () => {
    const downloadUrl = 'https://example.com/dentogen-app.apk'
    window.open(downloadUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">D</span>
            </div>
            <span className="font-bold text-xl text-gray-900">Dentogen</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('features')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection('products')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection('team')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Contact
            </button>
            <Button 
              onClick={handleDownload}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium"
            >
              Download App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors md:hidden"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden">
            <nav className="container mx-auto px-4 py-4">
              <ul className="space-y-4">
                <li>
                  <button
                    onClick={() => scrollToSection('hero')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('features')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Features
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('products')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Products
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('team')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="block w-full text-left py-2 text-gray-700 hover:text-blue-600 transition-colors font-medium"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                A Brighter Smile Starts<br />
                <span className="text-blue-600">with One Small Habit</span>
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                We're here to help you start brushing your teeth in a fun and consistent manner. With our gamified approach, you'll develop healthy dental habits that last a lifetime. Transform your daily routine into an engaging experience that promotes long-term oral health.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  onClick={handleDownload}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold inline-flex items-center justify-center space-x-2"
                >
                  <Download size={20} />
                  <span>Download for Free</span>
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('features')}
                  className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-blue-600 text-blue-600 hover:bg-blue-50"
                >
                  Learn More
                </Button>
              </div>

              <div className="flex items-center justify-center lg:justify-start space-x-6 mt-8 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Free to use</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>No ads</span>
                </div>
                <div className="flex items-center space-x-1">
                  <CheckCircle size={16} className="text-green-500" />
                  <span>Easy to use</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-8xl lg:text-9xl animate-bounce">🦷</div>
                </div>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">✨</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">💎</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Explore our Dentogen solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our innovative features are designed to make dental care fun, engaging, and effective for users of all ages.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl flex items-center justify-center mb-6">
                <Star className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Gamified Experience
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Turn brushing into a fun game with rewards, achievements, and progress tracking. Earn points, unlock badges, and compete with friends to maintain consistent oral hygiene habits.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center mb-6">
                <Clock className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Smart Reminders
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Never forget to brush with intelligent notifications and personalized schedules. Our AI learns your routine and sends timely reminders to keep you on track.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
                <Award className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Progress Tracking
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Monitor your dental health journey with detailed analytics and insights. Track streaks, view improvement trends, and celebrate your achievements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-6">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Family Sharing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Create family profiles and track everyone's progress together. Perfect for parents who want to encourage good dental habits in their children.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Health Insights
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Get personalized recommendations based on your brushing patterns and oral health goals. Receive tips from dental professionals.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Sessions
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Optimized 2-minute brushing sessions with guided instructions and music to make the experience enjoyable and effective.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Product Ecosystem
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A complete suite of tools and technologies designed to revolutionize your dental care routine.
            </p>
          </div>
          
          <div className="space-y-12">
            {/* Dentogen Mobile App */}
            <div className="bg-gradient-to-r from-purple-50 via-pink-50 to-red-50 p-8 lg:p-12 rounded-3xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center mb-6">
                    <Smartphone className="text-white" size={36} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Dentogen Mobile App
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    The complete dental care companion for your smartphone with AI-powered recommendations, habit tracking, and gamified experiences. Available for both iOS and Android devices.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-semibold">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-full font-semibold">
                      View Screenshots
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-80 bg-gradient-to-b from-gray-800 to-gray-900 rounded-3xl p-2 shadow-2xl">
                      <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl mb-4">📱</div>
                          <div className="text-sm text-gray-500">Dentogen App</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bluetooth Device */}
            <div className="bg-gradient-to-r from-blue-50 via-cyan-50 to-teal-50 p-8 lg:p-12 rounded-3xl">
              <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
                <div className="flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-3xl flex items-center justify-center mb-6">
                    <Bluetooth className="text-white" size={36} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    Bluetooth Device & NFC Reader
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Connect your smart toothbrush and track brushing sessions automatically. Our advanced sensors provide real-time feedback on brushing technique, pressure, and coverage areas.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-full font-semibold">
                      Technical Specs
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-blue-200 to-cyan-300 rounded-full flex items-center justify-center shadow-2xl">
                      <div className="text-8xl">🔗</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* AI Assistant */}
            <div className="bg-gradient-to-r from-green-50 via-emerald-50 to-teal-50 p-8 lg:p-12 rounded-3xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-1">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center mb-6">
                    <Brain className="text-white" size={36} />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">
                    AI-Powered Brushing Assistant
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    Our advanced AI analyzes your brushing patterns and provides personalized recommendations. Get instant feedback, technique improvements, and customized oral care routines.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-semibold">
                      Learn More
                    </Button>
                    <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-full font-semibold">
                      Try Demo
                    </Button>
                  </div>
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="relative">
                    <div className="w-48 h-48 bg-gradient-to-br from-green-200 to-emerald-300 rounded-2xl flex items-center justify-center shadow-2xl">
                      <div className="text-8xl">🤖</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Say hello to our team members
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the passionate individuals behind Dentogen who are dedicated to revolutionizing dental care through innovative technology and user-centered design.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-sm hover:shadow-lg transition-shadow max-w-md">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-200 to-purple-300 rounded-full mx-auto mb-6 overflow-hidden shadow-lg">
                  <img 
                    src="/dentist-headshot.png" 
                    alt="Alexis Brown" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Alexis Brown
                </h3>
                <p className="text-blue-600 font-semibold text-lg mb-4">Founder & CEO</p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  "The Value Dentogen Brings to Your Daily Life"
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">
                  With over 15 years of experience in dental health and technology, Alexis founded Dentogen to make oral care accessible, fun, and effective for everyone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently asked questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Got questions? We've got answers. Here are some of the most common questions about Dentogen and how it can help improve your oral health.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How does Dentogen track my brushing?
              </h3>
              <p className="text-gray-600">
                Dentogen uses a combination of manual logging and optional smart device integration to track your brushing habits and provide personalized insights.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Is the app suitable for children?
              </h3>
              <p className="text-gray-600">
                Yes! Dentogen is designed for all ages with special kid-friendly features, parental controls, and age-appropriate gamification elements.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do I need special equipment?
              </h3>
              <p className="text-gray-600">
                No special equipment is required. While we offer optional Bluetooth-enabled devices for enhanced tracking, the core app works with any toothbrush.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="container mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-8">
              <Mail className="text-white" size={36} />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join our community
            </h2>
            <p className="text-xl text-blue-100 mb-10">
              Be part of a growing movement towards better dental health. Get tips, updates, and exclusive content delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 border-0 rounded-full focus:outline-none focus:ring-4 focus:ring-white/30 text-gray-900"
              />
              <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold whitespace-nowrap">
                Subscribe to our newsletter
              </Button>
            </div>

            <p className="text-sm text-blue-200 mt-4">
              Join 10,000+ users who are already improving their dental health with Dentogen
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">D</span>
                </div>
                <span className="font-bold text-xl">Dentogen</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Making dental care fun, engaging, and effective for everyone through innovative technology.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Mobile App</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Bluetooth Device</a></li>
                <li><a href="#" className="hover:text-white transition-colors">AI Assistant</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Family Plans</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Dentogen. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
