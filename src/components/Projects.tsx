import React from 'react';
import { ExternalLink, Github, Clock, Users } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Medication Management System',
      description: 'This is a responsive static business website built as part of the Website Learners Assignment. The project showcases a clean and modern UI, highlighting essential sections such as services, features, testimonials, and contact. Designed to promote a tech or educational brand, it delivers a professional layout optimized for all screen sizes.',
      image: 'https://res.cloudinary.com/drecb9hgv/image/upload/v<timestamp>/Screenshot_1258_medication_management.png',
      tech: ['React.js', 'CSS', 'JavaScript'],
      github: 'https://github.com/ibrahim9492/Website-Learners-Assignment.git',
      live: 'https://website-learners-assignment.vercel.app/',
      features: ['Responsive design', 'Clean and modern UI layout', 'Multi-section landing page', 'Cross-browser compatibility']
    },
    {
      title: 'Company Static Business Website',
      description: 'This is a web-based sorting utility built to demonstrate dynamic content sorting on the frontend. It allows users to sort items (such as lists, cards, or tables) based on different parameters like name, price, or date. The interface is clean, interactive, and responsive across devices.',
      image: 'https://cdn.dribbble.com/users/4189236/screenshots/15057550/media/b839cd39cd6a1a65b81bb9ec8133b765.png',
      tech: ['React.js', 'CSS', 'JavaScript'],
      github: 'https://github.com/ibrahim9492/Web-Sort-Assignment.git',
      live: 'https://web-sort-assignment-eta.vercel.app/',
      features: ['Dynamic sorting functionality', 'Interactive UI elements', 'Responsive layout', 'User-friendly design']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are some of the projects I've worked on, showcasing my skills in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                    Key Features:
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200 text-sm font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4 border-t border-gray-100 dark:border-gray-700">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white rounded-lg hover:from-teal-600 hover:to-cyan-600 transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 font-medium"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Want to see more of my work?
          </p>
          <a
            href="https://github.com/ibrahim9492"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;