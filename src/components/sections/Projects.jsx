import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects" // The section ID to target in the page (for navigation or linking)
      className="min-h-screen flex items-center justify-center py-20 bg-[#101010]" // Full-screen height, center content, padding, and background color
    >
      <RevealOnScroll> 
        {/* RevealOnScroll component handles the animation when the section is revealed on scroll */}
        
        <div className="max-w-5xl mx-auto px-4"> 
          {/* Container for the section, limits the width to 'max-w-5xl' and adds padding on sides */}

          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-[rgb(255,0,102)] to-[rgb(0,204,255)] bg-clip-text text-transparent text-center">
            {/* Heading for the "Featured Projects" section with gradient text */}
            Featured Projects
          </h2>

          {/* Projects grid container */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Grid layout with 1 column for small screens and 2 columns for medium and larger screens */}

            {/* E-Commerce Web App Card */}
            <div
              className="
              p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-[rgb(255,0,102)]/30
              hover:shadow-[0_4px_20px_rgba(255,0,102,0.1)]
              transition-all bg-[rgb(15,10,20)] hover:bg-[rgb(30,10,30)]
            "
            >
              {/* Card styles, including padding, border, hover effects (e.g., slight movement, color change), and background color */}
              
              <h3 className="text-2xl font-bold mb-2 text-white">
                E-Commerce Web App
              </h3>
              {/* Card title with white color and margin at the bottom */}

              <p className="text-gray-300 mb-4">
                Full-stack e-commerce with modern UI, secure payment
                integration, and customizable product inventory.
              </p>
              {/* Description of the project with a lighter text color and bottom margin */}

              {/* Technology tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node", "MongoDB", "Express.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="
                      bg-[rgb(255,0,102)]/10 text-[rgb(255,0,102)] py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-[rgb(255,0,102)]/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(255,0,102,0.2)]
                    "
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
              {/* Loop through the technologies used and display them as tags with hover effects */}
              
              <div className="flex justify-between items-center">
                {/* Container for the "View Project" button */}

                <a
                  href="#"
                  className="text-[rgb(0,204,255)] hover:text-[rgb(0,172,204)] transition-colors my-4"
                >
                  {/* The link that redirects to the project's page (replace href with the actual URL) */}
                  {/* View Project → */}
                </a>
              </div>
            </div>

            {/* Real-Time Chat App Card */}
            <div
              className="
              p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-[rgb(0,204,255)]/30
              hover:shadow-[0_4px_20px_rgba(0,204,255,0.1)]
              transition-all bg-[rgb(15,10,20)] hover:bg-[rgb(30,10,30)]
            "
            >
              {/* Similar structure as the previous card, but for the Real-Time Chat App */}
              
              <h3 className="text-2xl font-bold mb-2 text-white">
                Real-Time Chat App
              </h3>

              <p className="text-gray-300 mb-4">
                Scalable chat platform supporting real-time messaging, presence,
                and group chat features.
              </p>

              {/* Technology tags for the second project */}
              <div className="flex flex-wrap gap-2 mb-4">
                {["React.js", "Node", "MongoDB", "Express.js"].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-[rgb(0,204,255)]/10 text-[rgb(0,204,255)] py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-[rgb(0,204,255)]/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(0,204,255,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex justify-between items-center">
                <a
                  href="#"
                  className="text-[rgb(0,204,255)] hover:text-[rgb(0,172,204)] transition-colors my-4"
                >
                  {/* View Project → */}
                </a>
              </div>
            </div>
          </div>
          {/* End of the grid for projects */}
        </div>
      </RevealOnScroll>
    </section>
  );
};
