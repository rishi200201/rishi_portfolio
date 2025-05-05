import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "TailwindCSS"];
  const backendSkills = ["Node.js", "AWS", "MongoDB"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20 bg-gradient-to-br from-[#090a0f] via-[#1c1f27] to-[#090a0f]"
    >
      <RevealOnScroll>
        <div className="max-w-5xl w-full mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500 text-center">
            About Me
          </h2>

          <div className="rounded-2xl p-8 md:p-10 backdrop-blur-sm bg-gradient-to-r from-[#1e293b] to-[#0f172a] border border-white/10 shadow-lg transition-all duration-300 hover:-translate-y-1">
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center">
              A passionate and relentless developer who thrives in building
              innovative, high-performance web applications. Gaming isn't just
              a hobby, it's my lifestyle—coding is the ultimate game!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#161d2c] border border-[#444] rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-pink-400 mb-4">
                  Frontend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-pink-500/10 text-pink-300 py-1 px-3 rounded-full text-sm font-medium hover:bg-pink-500/20 transition shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#161d2c] border border-[#444] rounded-2xl p-6 transition-all hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                  Backend
                </h3>
                <div className="flex flex-wrap gap-3">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-cyan-500/10 text-cyan-300 py-1 px-3 rounded-full text-sm font-medium hover:bg-cyan-500/20 transition shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div className="p-6 rounded-2xl bg-[#161d2c] border border-[#444] shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-purple-400 mb-4">🏫 Education</h3>
              <p className="text-gray-300 leading-relaxed">
                <strong className="text-white">B.E. in Computer Science and Engineering</strong> – KCG College of Technology (2019–2023)
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161d2c] border border-[#444] shadow-md hover:shadow-lg transition-all">
              <h3 className="text-xl font-bold text-green-400 mb-4">💼 Work Experience</h3>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h4 className="font-semibold text-white">
                    Tech Analyst @ SRM Institute of Science and Technology (2024 – Present)
                  </h4>
                  <p className="text-sm">
                    Built a secure, scalable feedback system for 100K+ users
                    with Google OAuth, REST APIs, interactive dashboards, and
                    Git/GitLab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
