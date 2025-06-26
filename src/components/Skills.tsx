import React from 'react';
import { Code, Database, Server, Palette } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: <Code className="w-6 h-6" />,
      skills: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Bootstrap'],
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Backend',
      icon: <Server className="w-6 h-6" />,
      skills: ['Node.js', 'Express.js', 'Python'],
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Database',
      icon: <Database className="w-6 h-6" />,
      skills: ['SQL', 'Database Design'],
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Tools & Design',
      icon: <Palette className="w-6 h-6" />,
      skills: ['Git', 'VS Code', 'Responsive Design', 'UI/UX Principles'],
      color: 'from-pink-500 to-purple-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="group p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skill}
                    className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                  >
                    <div className="w-2 h-2 bg-teal-400 rounded-full opacity-70"></div>
                    <span className="text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Cloud */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
            Technical Proficiency
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'Node.js', 'Express.js', 'SQL', 'Python', 'Bootstrap', 'Responsive Design', 'Git', 'VS Code'].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-gradient-to-r from-teal-100 to-cyan-100 dark:from-teal-900 dark:to-cyan-900 text-teal-800 dark:text-teal-200 rounded-full text-sm font-medium hover:from-teal-200 hover:to-cyan-200 dark:hover:from-teal-800 dark:hover:to-cyan-800 transition-colors duration-200 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;