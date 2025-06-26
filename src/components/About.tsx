import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-300 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gray-300 dark:bg-gray-600 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-yellow-400 opacity-30 blur-lg transform -translate-y-1/2" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content - Hand Illustration */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative">
              {/* Gray blob background */}
              <div className="absolute inset-0 w-80 h-80 bg-gray-300 dark:bg-gray-600 rounded-full opacity-60 transform -rotate-12"></div>
              
              {/* Hand pointing illustration */}
              <div className="relative z-10 w-72 h-72 flex items-center justify-center">
                <div className="text-8xl transform rotate-12">👉</div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              This is it. <span className="text-gray-600 dark:text-gray-400">;)</span>
            </h2>
            
            <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
              <p>
                I'm <strong>Mounika</strong>, a <strong>Full Stack Developer Trainee</strong> passionate about building 
                responsive and user-friendly web applications. I enjoy combining clean code with visually appealing designs.
              </p>
              
              <p>
                My skill set includes <em>HTML, CSS, JavaScript, Bootstrap, React.js, Node.js, Express.js, SQL, and Python</em>. 
                I thrive in environments where learning and innovation go hand in hand.
              </p>
              
              <p>
                Currently, I'm building real-world projects and continuously improving my <strong>frontend and backend expertise</strong>. 
                I hold a <strong>bachelor degree in Computer Applications</strong> and have been actively involved in web development 
                for the past year.
              </p>
              
              <p>
                When I'm not designing or coding, I'm probably exploring new technologies, learning from online tutorials, 
                or working on something inspired by the latest trends in web development.
              </p>
            </div>

            <div className="w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;