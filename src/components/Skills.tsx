const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 75, icon: "⚛" },
      { name: "JavaScript", level: 80, icon: "🟨" },
      { name: "HTML5", level: 95, icon: "🧡" },
      { name: "CSS3", level: 85, icon: "🔵" },
    ]
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", level: 40, icon: "🟢" },
      { name: "Express.js", level: 40, icon: "⚡" },
      { name: "MongoDB", level: 75, icon: "🍃" },
      { name: "Supabase", level: 50, icon: "💨" },
    ]
  },
  {
    title: "Tools & Others",
    skills: [
      { name: "Git", level: 85, icon: "📝" },
      { name: "Vercel", level: 70, icon: "🐳" },
      { name: "VS Code", level: 90, icon: "💻" },
      { name: "AI Chatbots", level: 90, icon: "🤖" }
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are the technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-center text-blue-400">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-blue-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
