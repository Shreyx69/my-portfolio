"use client";

import { motion } from "motion/react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080808] text-white">

      {/* NAVBAR */}
      <nav className="flex flex-wrap justify-between items-center gap-5 px-6 md:px-10 py-7 border-b border-white/10">
        <h1 className="text-2xl font-bold tracking-wider">
          Shrey<span className="text-blue-500">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-400 text-sm">
          <a href="#about" className="hover:text-white">About</a>
          <a href="#skills" className="hover:text-white">Skills</a>
          <a href="#projects" className="hover:text-white">Projects</a>
          <a href="#experience" className="hover:text-white">Experience</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>

        <a href="#contact"
          className="border border-blue-500 px-5 py-2 rounded-full text-sm hover:bg-blue-500">
          Let's Talk
        </a>
      </nav>


      {/* HERO SECTION */}
      <section className="min-h-[85vh] flex flex-col justify-center px-6 md:px-24 py-16">

        <p className="text-blue-400 tracking-widest mb-6">
          HELLO, I'M <span className="text-white">Sanidhya Sinha</span>
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight max-w-4xl">
          Building Intelligent
          <span className="text-blue-500"> AI Systems </span>
          & Data-Driven Solutions.
        </h1>

        <p className="text-gray-400 mt-8 max-w-2xl text-lg leading-relaxed">
          I'm a Data Science and AI enthusiast specializing in
          Machine Learning, Deep Learning, NLP, Generative AI,
          RAG pipelines and intelligent automation.
        </p>

        <div className="flex gap-5 mt-10 flex-wrap">
          <a href="#projects"
            className="animated-button bg-blue-600 px-7 py-3 rounded-lg hover:bg-blue-700">
            Explore Projects →
          </a>

          <a href="#contact"
            className="border border-white/20 px-7 py-3 rounded-lg hover:bg-white/10">
            Contact Me
          </a>
        </div>

        <div className="flex gap-10 mt-20 text-gray-400 text-sm">
          <div>
            <h2 className="text-3xl text-white font-bold">ML</h2>
            <p>Machine Learning</p>
          </div>

          <div>
            <h2 className="text-3xl text-white font-bold">GenAI</h2>
            <p>Generative AI</p>
          </div>

          <div>
            <h2 className="text-3xl text-white font-bold">DL</h2>
            <p>Deep Learning</p>
          </div>
        </div>

      </section>


      {/* ABOUT SECTION */}
      <section id="about" className="px-10 md:px-24 py-24 border-t border-white/10">

        <p className="text-blue-400 mb-4">01 / ABOUT ME</p>

        <h2 className="text-4xl font-bold mb-8">Who Am I?</h2>

        <p className="text-gray-400 text-lg leading-relaxed max-w-4xl">
          I'm an engineering student passionate about Artificial
          Intelligence, Data Science and building practical
          intelligent applications. My interests include developing
          predictive models, neural networks, GEN AI applications,
          LLM-powered systems and AI agents.
        </p>

      </section>


      {/* SKILLS SECTION */}
      <section id="skills" className="px-10 md:px-24 py-24 border-t border-white/10">

        <p className="text-blue-400 mb-4">02 / EXPERTISE</p>

        <h2 className="text-4xl font-bold mb-12">Technical Skills</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5">
  {[
    "Python",
    "Machine Learning",
    "Deep Learning",
    "NLP",
    "Generative AI",
    "LangChain",
    "LangGraph",
    "RAG",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
    "SQL",
    "Git",
    "React.js"
  ].map((skill) => (
    <div
      key={skill}
      className="skill-card border border-white/10 p-6 rounded-xl text-gray-300 hover:text-blue-400"
    >
      {skill}
    </div>
  ))}
</div>
      </section>
      {/* PROJECTS SECTION */}
      <section id="projects" className="px-10 md:px-24 py-24 border-t border-white/10">

        <p className="text-blue-400 mb-4">03 / MY WORK</p>

        <h2 className="text-4xl font-bold mb-12">Featured Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

          {[
            {
              title: "Movie Genre Prediction",
              description: "Machine Learning model for predicting movie genres using text-based features.",
              tech: "Python • NLP • Scikit-learn"
            },
            {
              title: "Customer Churn Prediction",
              description: "Deep Learning model to predict customer churn and identify customer behaviour patterns.",
              tech: "Python • TensorFlow • Deep Learning"
            },
            {
              title: "Document Reader RAG",
              description: "Intelligent document question-answering system using retrieval augmented generation.",
              tech: "LangChain • Embeddings • Vector DB . RAG Pipeline"
            },
          ].map((project) => (
            <div key={project.title}
              className="project-card border border-white/10 rounded-2xl p-8">

              <h3 className="text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <p className="text-blue-400 text-sm">
                {project.tech}
              </p>

            </div>
          ))}

        </div>

      </section>


      {/* EXPERIENCE SECTION */}
      <section id="experience" className="px-10 md:px-24 py-24 border-t border-white/10">

        <p className="text-blue-400 mb-4">04 / EXPERIENCE</p>

        <h2 className="text-4xl font-bold mb-10">Professional Experience</h2>

        <div className="border border-white/10 rounded-xl p-8 max-w-3xl">

          <h3 className="text-2xl font-semibold">
            Data Science Intern
          </h3>

          <p className="text-blue-400 mt-2">
            Infotech Solutions
          </p>

          <p className="text-gray-500 mt-2">
            25 October 2026 – 25 January 2027
          </p>

          <p className="text-gray-400 mt-5">
            Working on Data Science and Machine Learning
            applications, developing practical skills in data
            analysis and predictive modelling.
          </p>

        </div>

      </section>


      {/* CONTACT SECTION */}
      <a
    href="https://github.com/Shreyx69"
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-400 transition"
   >
  GitHub
</a>
      <section id="contact" className="px-10 md:px-24 py-24 border-t border-white/10 text-center">

        <p className="text-blue-400 mb-4">05 / CONTACT</p>

        <h2 className="text-4xl md:text-5xl font-bold">
          Let's Build Something
          <span className="text-blue-500"> Intelligent.</span>
        </h2>

        <p className="text-gray-400 mt-6">
          Have a project or collaboration in mind? Let's connect.
        </p>

        <a href="mailto:shreyansh.27.sinha@gmail.com"
          className="inline-block mt-10 bg-blue-600 px-8 py-4 rounded-lg hover:bg-blue-700">
          Get In Touch →
        </a>

      </section>


      {/* FOOTER */}
      <footer className="border-t border-white/10 px-10 py-8 text-center text-gray-500">
        © 2026 Shrey Sinha. Built with Next.js & Tailwind CSS.
      </footer>

    </main>
  );
}