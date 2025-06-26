import React from 'react';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const SocialSidebar: React.FC = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/vemulamounika1025',
      icon: <Linkedin className="w-5 h-5" />,
      color: 'hover:bg-blue-600'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/mounika-2510',
      icon: <Github className="w-5 h-5" />,
      color: 'hover:bg-gray-800 dark:hover:bg-gray-600'
    },
    {
      name: 'Email',
      href: 'mailto:vemulamounika1025@gmail.com',
      icon: <Mail className="w-5 h-5" />,
      color: 'hover:bg-red-600'
    },
    {
      name: 'Resume',
      href: 'https://drive.google.com/file/d/1wKFQoEcp-Rukb38LY0FdPXBi0DX26Syg/view?usp=sharing',
      icon: <FileText className="w-5 h-5" />,
      color: 'hover:bg-orange-600'
    }
  ];

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`w-12 h-12 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg flex items-center justify-center transition-all duration-200 hover:text-white transform hover:scale-110 shadow-lg hover:shadow-xl ${link.color}`}
            aria-label={link.name}
          >
            {link.icon}
          </a>
        ))}
      </div>
      
      {/* Vertical line */}
      <div className="w-px h-20 bg-gray-300 dark:bg-gray-600 mx-auto mt-6"></div>
    </div>
  );
};

export default SocialSidebar;