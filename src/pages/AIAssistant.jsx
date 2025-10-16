import { useState, useEffect, useRef } from 'react';
import ChatMessage from '../components/chatbot/ChatMessage';
import QuickQuestions from '../components/chatbot/QuickQuestions';
import qaData from '../data/chatbotQA.json';

const AIAssistant = () => {
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Initial greeting
    const greeting = {
      text: "Hi! I'm your WhatNxt AI Assistant, powered by insights from CMU Africa alumni. 🎓\n\nI can help you with:\n• Career planning and course selection\n• Internship and job search strategies\n• Academic success tips\n• Networking advice\n• And much more!\n\nChoose a question below or type your own!",
      isUser: false,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([greeting]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateTyping = (callback, delay = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleQuickQuestion = (qa) => {
    // Add user message
    const userMessage = {
      text: qa.question,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI typing and respond
    simulateTyping(() => {
      const aiMessage = {
        text: qa.answer,
        category: qa.category,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  const handleCustomQuestion = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    const userMessage = {
      text: inputValue,
      isUser: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Try to find a matching answer
    simulateTyping(() => {
      const keywords = inputValue.toLowerCase();
      let matchedQA = null;

      // Simple keyword matching
      if (keywords.includes('ai') || keywords.includes('machine learning') || keywords.includes('ml')) {
        matchedQA = qaData.find(qa => qa.id === 'qa-001');
      } else if (keywords.includes('intern')) {
        matchedQA = qaData.find(qa => qa.id === 'qa-003');
      } else if (keywords.includes('balance') || keywords.includes('stress') || keywords.includes('manage')) {
        matchedQA = qaData.find(qa => qa.id === 'qa-004');
      } else if (keywords.includes('product') || keywords.includes('pm')) {
        matchedQA = qaData.find(qa => qa.id === 'qa-005');
      } else if (keywords.includes('network') || keywords.includes('connect')) {
        matchedQA = qaData.find(qa => qa.id === 'qa-006');
      } else if (keywords.includes('grad') || keywords.includes('phd') || keywords.includes('master')) {
        matchedQA = qaData.find(qa => qa.id === 'qa-007');
      } else if (keywords.includes('course') || keywords.includes('class')) {
        matchedQA = qaData.find(qa => qa.id === 'qa-002');
      }

      const aiMessage = matchedQA ? {
        text: matchedQA.answer,
        category: matchedQA.category,
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      } : {
        text: "That's a great question! In this demo version, I have pre-programmed responses for common questions. Try selecting one of the quick questions below, or ask about:\n\n• AI/ML courses and careers\n• Internship strategies\n• Balancing coursework and life\n• Product Management vs Engineering\n• Networking tips\n• Grad school decisions\n\nIn the full version, I'll be powered by real AI to answer any question!",
        isUser: false,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setMessages(prev => [...prev, aiMessage]);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Banner Section */}
      <div className="relative bg-gradient-to-br from-gray-800 via-red-900 to-black text-white py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <div className="inline-block mb-4 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-sm rounded-full text-sm font-semibold">
              🤖 Smart Guidance
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">AI Assistant</h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
              Get instant, personalized answers powered by insights from real CMU Africa alumni experiences. Ask anything about courses, careers, internships, and student life.
            </p>
            
            <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl px-6 py-4 mb-6">
              <p className="flex items-start text-sm">
                <svg className="h-5 w-5 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <span>
                  <strong>Demo Mode:</strong> This is a prototype chatbot with pre-programmed responses. 
                  A full AI implementation would use real machine learning models trained on alumni insights.
                </span>
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">💬</span>
                <span>Instant Answers</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">🎯</span>
                <span>Personalized Advice</span>
              </div>
              <div className="flex items-center space-x-2 bg-white bg-opacity-10 backdrop-blur-sm px-4 py-2 rounded-full">
                <span className="text-2xl">✨</span>
                <span>Alumni Insights</span>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
            <path d="M0 80L60 73.3C120 66.7 240 53.3 360 46.7C480 40 600 40 720 43.3C840 46.7 960 53.3 1080 56.7C1200 60 1320 60 1380 60L1440 60V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#f9fafb"/>
          </svg>
        </div>
      </div>

      {/* Chat Container */}
      <div className="container mx-auto px-4 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chat Area */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col" style={{ height: 'calc(100vh - 280px)' }}>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-6">
                {messages.map((message, index) => (
                  <ChatMessage key={index} message={message} isUser={message.isUser} />
                ))}
                
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                        <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="bg-gray-100 rounded-lg px-4 py-3">
                        <div className="flex space-x-2">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t border-gray-200 p-4 bg-gray-50">
                <form onSubmit={handleCustomQuestion} className="flex space-x-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your question here..."
                    disabled={isTyping}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                  />
                  <button
                    type="submit"
                    disabled={isTyping || !inputValue.trim()}
                    className="px-6 py-3 bg-red-800 text-white font-semibold rounded-lg hover:bg-red-900 transition-colors disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Sidebar with Quick Questions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                <svg className="h-5 w-5 text-red-800 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Popular Questions
              </h3>
              <QuickQuestions 
                questions={qaData.slice(0, 7)} 
                onSelect={handleQuickQuestion}
                disabled={isTyping}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
