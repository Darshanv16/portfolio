import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Sunny-Camp",
      description: "A comprehensive camping and outdoor adventure platform featuring campsite listings, booking management, and user reviews. Built with React and modern web technologies.",
      image: "https://images.squarespace-cdn.com/content/v1/55774404e4b07f2c7dc881a0/1606951149963-LMWL0OBH837Y2585LHXC/DSC01107.jpg",
      tags: ["Javascript", "TypeScript", "Supabase"],
      github: "https://github.com/Darshanv16",
      live: "https://sunny-camp.netlify.app/"
    },
    {
      title: "Spotify Song Recommender",
      description: "An intelligent music recommendation system that analyzes your Spotify listening habits and suggests new songs based on your preferences. Features playlist generation and mood-based recommendations.",
      image: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Spotify API", "JavaScript"],
      github: "https://github.com/Darshanv16",
      live: "#"
    },
    {
      title: "Monument Explorer",
      description: "Developed an interactive web application where users can search for a city and instantly view famous tourist spots and landmarks on an integrated Google Map. The site dynamically fetches data based on the user's input and displays location markers with names and details.",
      image: "https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["TypeScript", "JavaScript"],
      github: "https://github.com/Darshanv16",
      live: "https://touristplacefinder.netlify.app/"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
