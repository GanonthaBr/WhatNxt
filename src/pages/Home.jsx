import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: '🎓',
      title: 'Alumni Connect',
      description: 'Connect with successful CMU Africa graduates who have navigated the same journey',
      gradient: 'from-red-600 to-red-800',
      link: '/alumni',
      stats: '50+ Alumni',
      highlight: 'Most Popular'
    },
    {
      icon: '📚',
      title: 'Degree Planner',
      description: 'Explore proven 4-semester pathways that led alumni to top companies worldwide',
      gradient: 'from-gray-700 to-gray-900',
      link: '/degree-planner',
      stats: 'Real Success Stories',
      highlight: 'Data-Driven'
    },
    {
      icon: '🚀',
      title: 'Transition Guide',
      description: 'Your complete handbook for settling into Kigali and thriving at CMU Africa',
      gradient: 'from-red-700 to-red-900',
      link: '/transition-guide',
      stats: 'Step-by-Step',
      highlight: 'Essential Info'
    },
    {
      icon: '🤖',
      title: 'AI Assistant',
      description: 'Get instant, personalized answers powered by insights from real alumni experiences',
      gradient: 'from-gray-800 to-black',
      link: '/ai-assistant',
      stats: 'Smart Guidance',
      highlight: 'AI-Powered'
    }
  ];

  const programs = [
    { code: 'MSIT', name: 'Information Technology', icon: '💻' },
    { code: 'MSEAI', name: 'Engineering AI', icon: '🤖' },
    { code: 'MSECE', name: 'Electrical & Computer Engineering', icon: '⚡' }
  ];

  const stats = [
    { number: '50+', label: 'Alumni Profiles', icon: '👥' },
    { number: '3', label: 'Master Programs', icon: '🎓' },
    { number: '4', label: 'Semesters', icon: '📅' },
    { number: '100%', label: 'Real Stories', icon: '✨' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-gradient-to-br from-red-800 via-red-900 to-gray-900">
        {/* Animated Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white opacity-5 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white opacity-3 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-white text-sm font-semibold animate-bounce">
              ✨ Your CMU Africa Success Platform
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
              Welcome to{' '}
              <span className="bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
                WhatNxt
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-red-100 mb-4 max-w-3xl mx-auto font-light">
              Your future, guided by Tartans.
            </p>
            
            <p className="text-md md:text-lg text-red-200 mb-10 max-w-2xl mx-auto">
              Navigate your 2-year Master's journey at CMU Africa with insights from alumni across MSIT, MSEAI, and MSECE programs.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link
                to="/alumni"
                className="group px-8 py-4 bg-white text-red-900 font-bold rounded-full hover:bg-red-50 transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center space-x-2"
              >
                <span>Explore Alumni Stories</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              
              <Link
                to="/ai-assistant"
                className="group px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-red-900 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
              >
                <span>Ask AI Assistant</span>
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </Link>
            </div>

            {/* Program Pills */}
            <div className="flex flex-wrap gap-3 justify-center">
              {programs.map((program, idx) => (
                <div
                  key={idx}
                  className="px-5 py-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full text-white text-sm font-medium hover:bg-opacity-20 transition-all cursor-pointer transform hover:scale-105"
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <span className="mr-2">{program.icon}</span>
                  {program.code}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </div>

      {/* Stats Section */}
      {/* <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center transform hover:scale-110 transition-all duration-300"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-800 to-red-900 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div> */}

      {/* Features Carousel */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Everything You Need to <span className="bg-gradient-to-r from-red-800 to-red-900 bg-clip-text text-transparent">Succeed</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Four powerful tools to guide your Master's journey at CMU Africa
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`transition-all duration-700 transform ${
                  currentSlide === idx
                    ? 'opacity-100 scale-100 relative'
                    : 'opacity-0 scale-95 absolute inset-0'
                }`}
              >
                <Link to={feature.link} className="block">
                  <div className={`bg-gradient-to-br ${feature.gradient} rounded-2xl p-12 md:p-16 text-white relative overflow-hidden group hover:shadow-2xl transition-all duration-300`}>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-10 right-10 text-9xl transform rotate-12 group-hover:rotate-45 transition-transform duration-500">
                        {feature.icon}
                      </div>
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center justify-between mb-6">
                        <span className="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-full text-sm font-semibold">
                          {feature.highlight}
                        </span>
                        <span className="text-6xl transform group-hover:scale-125 transition-transform duration-300">
                          {feature.icon}
                        </span>
                      </div>

                      <h3 className="text-4xl md:text-5xl font-bold mb-4">{feature.title}</h3>
                      <p className="text-xl md:text-2xl text-white text-opacity-90 mb-6 max-w-2xl">
                        {feature.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-lg font-semibold">{feature.stats}</span>
                        <div className="flex items-center space-x-2 group-hover:translate-x-2 transition-transform">
                          <span className="font-semibold">Explore Now</span>
                          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Carousel Controls */}
          <div className="flex justify-center mt-8 space-x-3">
            {features.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentSlide === idx
                    ? 'w-12 h-3 bg-red-800'
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="bg-gray-900 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Access to Tools
            </h2>
            <p className="text-gray-400 text-lg">
              Jump straight into what matters most to you
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, idx) => (
              <Link
                key={idx}
                to={feature.link}
                className="group bg-gray-800 hover:bg-gray-700 rounded-xl p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-xl border border-gray-700 hover:border-red-800"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {feature.description.substring(0, 60)}...
                </p>
                <div className="flex items-center text-red-400 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-red-800 to-red-900 rounded-3xl p-12 md:p-16 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of CMU Africa students who have found their path to success
            </p>
            <Link
              to="/alumni"
              className="inline-flex items-center px-10 py-5 bg-white text-red-900 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg"
            >
              <span>Get Started Now</span>
              <svg className="w-6 h-6 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
