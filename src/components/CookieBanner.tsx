import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, X } from 'lucide-react';

const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-6 left-6 right-6 z-[100] md:left-auto md:max-w-md"
        >
          <div className="bg-dark text-white p-6 rounded-lg shadow-2xl border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5">
              <Cookie className="w-24 h-24" />
            </div>
            
            <div className="flex items-start gap-4 relative z-10">
              <div className="bg-accent p-2 rounded-sm shrink-0">
                <Cookie className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold uppercase tracking-tight mb-2">Cookie Settings</h4>
                <p className="text-gray-400 text-xs leading-relaxed mb-4">
                  We use cookies to enhance your experience, analyze site traffic, and ensure our booking system works correctly. By clicking "Accept All", you consent to our use of cookies.
                </p>
                <div className="flex flex-wrap gap-3">
                  <button 
                    onClick={acceptCookies}
                    className="bg-accent text-white px-5 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:brightness-110 transition-all"
                  >
                    Accept All
                  </button>
                  <button 
                    onClick={declineCookies}
                    className="bg-white/10 text-white px-5 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest hover:bg-white/20 transition-all"
                  >
                    Necessary Only
                  </button>
                  <a 
                    href="https://www.cookiesandyou.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[10px] font-bold uppercase tracking-widest text-gray-500 hover:text-white transition-colors flex items-center"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
            
            <button 
              onClick={() => setIsVisible(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
