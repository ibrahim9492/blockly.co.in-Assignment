import React from 'react';
import { Download, MessageCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Hello Tag */}
            <div className="inline-block">
              <span className="px-4 py-2 bg-gradient-to-r from-teal-400 to-cyan-400 text-white rounded-full text-sm font-medium">
                Hello!
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
                I'm <span className="text-gray-600 dark:text-gray-300">Ibrahim Shaik</span> 👋
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-lg">
                Full Stack Developer Trainee passionate about building responsive and user-friendly web applications.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="https://drive.google.com/file/d/1NC7XMj2rOp02Mq4_TbhNP04ka2BeXIDz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </a>
              <button
                onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Get in Touch!
              </button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Yellow blob background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-yellow-300 to-yellow-400 rounded-full opacity-90 transform rotate-12"></div>
            </div>
            
            {/* Profile Image */}
            <div className="relative z-10 w-72 h-72 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
              <img
                src="https://png.pngtree.com/png-vector/20250404/ourlarge/pngtree-a-pixel-art-handsome-man-avatar-male-character-25-years-old-png-image_15927643.png"
                alt="Ibrahim Shaik"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating elements */}
            <div className="absolute top-10 right-10 w-4 h-4 bg-teal-400 rounded-full opacity-60 animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-6 h-6 bg-orange-400 rounded-full opacity-60 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;