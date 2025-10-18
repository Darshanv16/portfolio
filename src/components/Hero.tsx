import { Github, Linkedin, Mail, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-gray-900 to-purple-900/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="mb-8 inline-block">
            <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 p-1 mx-auto">
              <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-6xl font-bold">
                DV
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Darshan V</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Full Stack Developer & Freelancer
          </p>

          <p className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg">
            Building innovative web solutions and sports platforms. Passionate about creating seamless user experiences and bringing ideas to life through code.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a
              href="https://github.com/Darshanv16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github size={20} />
              <span>GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/Darshan-V16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=darshanvijay16@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>

            <a
              href="tel:7019700701"
              className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Phone size={20} />
              <span>Call</span>
            </a>
          </div>

          <a
            href="#projects"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105"
          >
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
