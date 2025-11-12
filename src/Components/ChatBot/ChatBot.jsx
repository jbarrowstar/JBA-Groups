import React, { useState, useRef, useEffect } from 'react';
import { FaRobot, FaTimes, FaPaperPlane, FaImage, FaLink, FaFile, FaThumbsUp, FaThumbsDown, FaClock, FaCheckDouble } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './ChatBot.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Hello! 👋 How can I help you with JBConX today?',
      timestamp: new Date(),
      status: 'read'
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [context, setContext] = useState({});
  const [analytics, setAnalytics] = useState({
    totalMessages: 0,
    userMessages: 0,
    botMessages: 0,
    averageResponseTime: 0,
    userFeedback: { positive: 0, negative: 0 }
  });
  const [suggestions, setSuggestions] = useState([]);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  const suggestionCategories = [
    {
      category: "About JBConX",
      questions: [
        "What is JBConX?",
        "What is the mission of JBConX?",
        "How does JBConX transform construction?"
      ]
    },
    {
      category: "Core Services",
      questions: [
        "What services does JBConX offer?",
        "Tell me about foundation services",
        "What is professional hiring?"
      ]
    },
    {
      category: "Why Choose JBConX",
      questions: [
        "What are the key features?",
        "How does JBConX support rural areas?",
        "What is the success rate?"
      ]
    },
    {
      category: "App & Features",
      questions: [
        "How to download the JBConX app?",
        "What platforms is it available on?",
        "What are the app ratings?"
      ]
    }
  ];

  const showSuggestions = () => {
    const suggestionMessage = {
      type: 'bot',
      content: "Here are some topics you can ask about:\n\n" +
        suggestionCategories.map(category => 
          `📌 ${category.category}:\n${category.questions.map(q => `• ${q}`).join('\n')}`
        ).join('\n\n')
    };
    setMessages(prev => [...prev, suggestionMessage]);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(showSuggestions, 1000);
    }
  }, [isOpen]);

  const qaPairs = {
    'what is jbconx': 'JBConX is revolutionizing construction through digital innovation. It\'s an AI-powered platform that connects professionals and streamlines workflows for comprehensive construction management.',
    'mission of jbconx': 'Through JBConX, we aim to create sustainable employment platforms by connecting people with verified, certified professionals and technicians, making construction and service-based work accessible and reducing unemployment in both rural and urban areas.',
    'transform construction': 'JBConX transforms construction through AI-powered solutions that connect professionals, streamline workflows, and offer a one-stop platform for comprehensive construction management.',
    'services jbconx offer': 'JBConX offers complete construction solutions powered by cutting-edge AI technology and verified professional networks:\n• Foundation Services\n• Professional Hiring\n• Home Renovation & Interior Design\n• Interior Design\n• Man Management',
    'foundation services': 'Foundation Services: Transparent project lifecycle management for foundation works.',
    'professional hiring': 'Professional Hiring: Hire on-demand engineers and designers from verified networks.',
    'home renovation': 'Home Renovation & Interior Design: Electrical, plumbing, and more with expert services.',
    'interior design': 'Interior Design: 2D/3D designs, space, and budget optimization with expert services.',
    'man management': 'Man Management: Comprehensive manpower solutions for construction projects.',
    'key features': 'Key features of JBConX include:\n• Smart Processes\n• Real-time Tracking\n• Global Search Capabilities\n• Trusted Network\n• Rural Support\n• Smart Urban Solutions',
    'rural support': 'JBConX provides rural support through coverage and sustainable employment platforms that connect rural professionals with opportunities.',
    'success rate': 'JBConX has a 99% success rate, with 500K+ projects completed, 24/7 support, and an average 48hr response time.',
    'impact': 'Our impact: 500K+ Projects, 24/7 Support, 99% Success Rate, Average 48hr Response Time.',
    'app features': 'Comprehensive app features:\n• Real-time Project Tracking\n• User Profiles\n• Verified Professionals\n• All-in-One Platform\n• Secure Payments & Wallet\n• One-click Discovery',
    'download jbconx app': 'Download JBConX from the App Store (iOS) or Google Play (Android). Access it anytime, anywhere for managing projects, hiring professionals, and tracking construction.',
    'platforms available': 'JBConX is available on iOS and Android devices.',
    'app ratings': 'JBConX app ratings: 4.8 stars, 10k+ downloads, 99% updates, 500+ professionals, 99% satisfaction.',
    'jbconx pro': 'JBConX Pro is a dedicated app for professionals, builders, and contractors. Manage profiles with ease, access verified opportunities, track projects, and get real-time notifications.',
    'professional features': 'For professionals:\n• Individual Profiles for Engineers, Contractors\n• Real-time Notifications\n• Project History\n• Direct Job Requests & Bids',
    'real time tracking': 'Real-time tracking of projects in progress, including foundation, electrical work, and more via the JBConX dashboard.',
    'ai powered': 'JBConX uses AI for project management, smart urban solutions, and transforming construction experiences.',
    'get started': 'Get started today by downloading the app or watching a demo to experience AI-driven construction management.',
    'watch demo': 'Watch the demo to see JBConX in action with real construction projects and success stories.',
    'construction in action': 'Experience JBConX through real construction projects: Watch videos of active builds, professional hires, and streamlined workflows.',
    'secure payments': 'Secure Payments & Wallet system for easy transactions with verified professionals.',
    'verified professionals': 'All professionals on JBConX are verified and certified for trusted hiring.',
    'why choose jbconx': 'Choose JBConX for unmatched reliability, innovative features like real-time tracking, global search, and rural/urban support that revolutionize your construction experience.',
    'contact': 'Contact JBConX via the app or website for support. Join thousands of satisfied users revolutionizing their projects.',
    'dashboard': 'The JBConX Dashboard shows Active Projects, Engineers Online, Project Progress (e.g., 78%), Foundation Complete, and Electrical Work status.',
    'employment': 'JBConX reduces unemployment by creating sustainable platforms connecting people with verified construction jobs in rural and urban areas.'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const findAnswer = (question) => {
    const lowerQuestion = question.toLowerCase();
    console.log('Processing question:', lowerQuestion);
    
    for (const [key, value] of Object.entries(qaPairs)) {
      if (lowerQuestion === key) {
        console.log('Found exact match:', key);
        return value;
      }
    }
    
    const keywords = {
      'jbconx': ['jbconx', 'about jbconx', 'what is jbconx'],
      'mission': ['mission', 'goal', 'purpose'],
      'services': ['services', 'offer', 'core services', 'foundation', 'hiring', 'renovation', 'interior', 'man management'],
      'features': ['features', 'why choose', 'key features', 'app features', 'pro features'],
      'download': ['download', 'app', 'get app', 'platforms', 'ratings'],
      'tracking': ['tracking', 'real time', 'dashboard', 'project progress'],
      'ai': ['ai', 'powered', 'smart', 'urban solutions'],
      'professional': ['professional', 'pro', 'builders', 'contractors', 'hiring', 'profiles'],
      'impact': ['impact', 'success rate', 'projects', 'support', 'response time'],
      'contact': ['contact', 'reach', 'get started', 'demo']
    };

    for (const [category, relatedWords] of Object.entries(keywords)) {
      if (relatedWords.some(word => lowerQuestion.includes(word))) {
        console.log('Found keyword match:', category);
        for (const [key, value] of Object.entries(qaPairs)) {
          if (key.includes(category)) {
            return value;
          }
        }
      }
    }

    return "I understand you're asking about " + lowerQuestion + ". While I don't have a specific answer for that, I can help you with:\n\n" +
           "• Information about JBConX and its mission\n" +
           "• Core services like foundation and hiring\n" +
           "• Key features and app download\n" +
           "• Professional tools and impact stats\n\n" +
           "Please try rephrasing your question or download the app for more details.";
  };

  const simulateTyping = (text) => {
    return new Promise((resolve) => {
      setIsTyping(true);
      let currentText = '';
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          currentText += text[currentIndex];
          setMessages(prev => {
            const newMessages = [...prev];
            newMessages[newMessages.length - 1].content = currentText;
            return newMessages;
          });
          currentIndex++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
          resolve();
        }
      }, 30);
    });
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isTyping) return;

    const userMessage = {
      type: 'user',
      content: inputMessage.trim(),
      timestamp: new Date(),
      status: 'sent'
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    updateAnalytics(userMessage);
    await handleBotResponse(userMessage);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !isTyping) {
      handleSendMessage();
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(file.type)) {
      alert('Please upload only images (JPEG, PNG, GIF) or documents (PDF, DOC, DOCX)');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const newMessage = {
        type: 'user',
        content: '',
        media: {
          type: file.type.startsWith('image/') ? 'image' : 'file',
          url: e.target.result,
          name: file.name
        },
        timestamp: new Date(),
        status: 'sent'
      };
      setMessages(prev => [...prev, newMessage]);
      handleBotResponse(newMessage);
    };
    reader.onerror = () => {
      alert('Error reading file. Please try again.');
    };
    reader.readAsDataURL(file);
  };

  const handleBotResponse = async (userMessage) => {
    setIsTyping(true);
    console.log('User message:', userMessage.content);
    
    const response = findAnswer(userMessage.content);
    console.log('Bot response:', response);
    
    const typingDelay = Math.min(1000 + (response.length * 20), 3000);
    await new Promise(resolve => setTimeout(resolve, typingDelay));
    
    const botMessage = {
      type: 'bot',
      content: response,
      timestamp: new Date(),
      status: 'sent'
    };
    
    setMessages(prev => [...prev, botMessage]);
    updateAnalytics(botMessage);
    updateSuggestions(userMessage);
    setIsTyping(false);
  };

  const updateAnalytics = (message) => {
    setAnalytics(prev => ({
      ...prev,
      totalMessages: prev.totalMessages + 1,
      userMessages: message.type === 'user' ? prev.userMessages + 1 : prev.userMessages,
      botMessages: message.type === 'bot' ? prev.botMessages + 1 : prev.botMessages,
      averageResponseTime: calculateAverageResponseTime()
    }));
  };

  const updateSuggestions = (message) => {
    const relevantSuggestions = generateRelevantSuggestions(message, context);
    setSuggestions(relevantSuggestions);
  };

  const handleReaction = (messageIndex, reaction) => {
    setMessages(prev => {
      const newMessages = [...prev];
      newMessages[messageIndex].reaction = reaction;
      return newMessages;
    });
    if (reaction === 'positive') {
      setAnalytics(prev => ({
        ...prev,
        userFeedback: { ...prev.userFeedback, positive: prev.userFeedback.positive + 1 }
      }));
    } else {
      setAnalytics(prev => ({
        ...prev,
        userFeedback: { ...prev.userFeedback, negative: prev.userFeedback.negative + 1 }
      }));
    }
  };

  const generateRelevantSuggestions = (message, context) => {
    const lowerMessage = message.content.toLowerCase();
    let suggestions = [];

    if (lowerMessage.includes('about') || lowerMessage.includes('jbconx') || lowerMessage.includes('mission')) {
      suggestions = [
        "What is JBConX?",
        "What is the mission of JBConX?",
        "How does JBConX transform construction?"
      ];
    } else if (lowerMessage.includes('service') || lowerMessage.includes('foundation') || lowerMessage.includes('hiring') || lowerMessage.includes('renovation')) {
      suggestions = [
        "What services does JBConX offer?",
        "Tell me about foundation services",
        "What is professional hiring?",
        "What is man management?"
      ];
    } else if (lowerMessage.includes('feature') || lowerMessage.includes('why') || lowerMessage.includes('tracking') || lowerMessage.includes('ai')) {
      suggestions = [
        "What are the key features?",
        "How does JBConX support rural areas?",
        "What is the success rate?",
        "Tell me about real-time tracking"
      ];
    } else if (lowerMessage.includes('app') || lowerMessage.includes('download') || lowerMessage.includes('ratings') || lowerMessage.includes('pro')) {
      suggestions = [
        "How to download the JBConX app?",
        "What platforms is it available on?",
        "What are the app ratings?",
        "What is JBConX Pro?"
      ];
    } else {
      suggestions = [
        "What is JBConX?",
        "What services does JBConX offer?",
        "What are the key features?",
        "How to download the app?"
      ];
    }

    return suggestions;
  };

  const calculateAverageResponseTime = () => {
    return 0;
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
      if (e.key === '/' && !isOpen) {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const welcomeMessage = {
        type: 'bot',
        content: 'Hello! 👋 How can I help you with JBConX today?',
        timestamp: new Date(),
        status: 'read'
      };
      setMessages([welcomeMessage]);
      setTimeout(showSuggestions, 1000);
    }
  }, [isOpen]);

  return (
    <div className="chatbot-container">
      {isOpen && (
        <motion.div 
          className="chatbot-window"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <div className="chatbot-header">
            <div className="chatbot-title">
              <FaRobot className="robot-icon" />
              <span>JBConX Assistant</span>
            </div>
            <button 
              className="close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>
          
          <div className="chatbot-messages">
            {messages.map((message, index) => (
              <motion.div 
                key={index} 
                className={`message ${message.type === 'user' ? 'user-message' : 'bot-message'}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {message.type === 'bot' && <FaRobot className="message-icon" />}
                <div className="message-content">
                  {message.media && (
                    <div className="message-media">
                      {message.media.type === 'image' ? (
                        <img src={message.media.url} alt={message.media.name} />
                      ) : (
                        <a href={message.media.url} download={message.media.name}>
                          <FaFile /> {message.media.name}
                        </a>
                      )}
                    </div>
                  )}
                  {message.content}
                  <div className="message-meta">
                    <span className="timestamp">
                      <FaClock /> {message.timestamp instanceof Date ? message.timestamp.toLocaleTimeString() : new Date(message.timestamp).toLocaleTimeString()}
                    </span>
                    {message.status === 'read' && (
                      <span className="read-status">
                        <FaCheckDouble />
                      </span>
                    )}
                  </div>
                  {message.type === 'bot' && (
                    <div className="message-reactions">
                      <button onClick={() => handleReaction(index, 'positive')}>
                        <FaThumbsUp />
                      </button>
                      <button onClick={() => handleReaction(index, 'negative')}>
                        <FaThumbsDown />
                      </button>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="typing-indicator">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {suggestions.length > 0 && (
            <div className="suggestions-container">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="suggestion-button"
                  onClick={() => {
                    setInputMessage(suggestion);
                    handleSendMessage();
                  }}
                >
                  {suggestion}
                </button>
              ))}
            </div>
          )}

          <div className="chatbot-input">
            <div className="input-actions">
              <button onClick={() => fileInputRef.current.click()}>
                <FaImage />
              </button>
              <button onClick={() => fileInputRef.current.click()}>
                <FaFile />
              </button>
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                style={{ display: 'none' }}
                accept="image/*,.pdf,.doc,.docx"
              />
            </div>
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about JBConX..."
              disabled={isTyping}
            />
            <button 
              onClick={handleSendMessage}
              disabled={isTyping || !inputMessage.trim()}
            >
              <FaPaperPlane />
            </button>
          </div>
        </motion.div>
      )}

      <motion.button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isOpen ? <FaTimes /> : <FaRobot />}
      </motion.button>
    </div>
  );
};

export default ChatBot;