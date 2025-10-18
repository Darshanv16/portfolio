import { Code, Briefcase, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code size={32} />,
      title: 'Full Stack Development',
      description: 'Building end-to-end web applications with modern technologies'
    },
    {
      icon: <Briefcase size={32} />,
      title: 'Achievements',
      description: 'Successfully deployed multiple full-stack projects online'
    },
    {
      icon: <Rocket size={32} />,
      title: 'Innovation',
      description: 'Passionate about creating solutions that make a difference'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A passionate developer on a mission to create impactful digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-gray-700/50 p-8 rounded-xl hover:bg-gray-700 transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-blue-500/20">
          <h3 className="text-2xl font-bold mb-6 text-center">My Journey</h3>
          <div className="max-w-3xl mx-auto space-y-4 text-gray-300 leading-relaxed">
            <p>
              As a full stack developer, I specialize in creating robust web applications using React, Node.js, and modern databases like MongoDB and Supabase. My expertise spans both frontend and backend development, allowing me to build complete solutions from concept to deployment.
            </p>
            <p>
              I'm constantly learning and exploring new technologies, always seeking to improve my skills and deliver better solutions. Whether it's building a web application or organizing a sports tournament, I bring the same level of dedication and attention to detail to everything I do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
