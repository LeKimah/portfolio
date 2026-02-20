import React from "react";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100 font-sans">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Franco Lanaro</h1>
        <h2 className="text-xl md:text-2xl text-gray-400 mb-6">
          Full-Stack Developer (MERN)
        </h2>
        <p className="max-w-2xl text-gray-300 mb-8">
          Desarrollo aplicaciones web completas utilizando React, Node.js y
          bases de datos SQL y NoSQL. En búsqueda de mi primera oportunidad
          profesional como desarrollador.
        </p>
        <div className="flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-gray-900 font-medium hover:opacity-90"
          >
            Ver proyectos
          </a>
          <a
            href="https://github.com/LeKimah"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800"
          >
            GitHub
          </a>
          <a
            href="/cv/Franco_Lanaro_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800"
          >
            Descargar CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold mb-6">Sobre mí</h3>
        <p className="text-gray-300 leading-relaxed">
          Soy desarrollador Full-Stack junior con stack MERN, enfocado en la
          creación de aplicaciones web prácticas y bien estructuradas. Vengo de
          un background administrativo y de recursos humanos, donde desarrollé
          habilidades de comunicación, organización y trabajo en equipo que hoy
          aplico al desarrollo de software.
        </p>
      </section>

      {/* SKILLS */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-8">Tecnologías</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-medium mb-3">Frontend</h4>
              <ul className="text-gray-400 space-y-1">
                <li>JavaScript (ES6+)</li>
                <li>React</li>
                <li>HTML5</li>
                <li>CSS3</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Backend</h4>
              <ul className="text-gray-400 space-y-1">
                <li>Node.js</li>
                <li>Express</li>
                <li>APIs REST</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-3">Bases de datos</h4>
              <ul className="text-gray-400 space-y-1">
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold mb-10">Proyectos</h3>

        <div className="space-y-8">
          <Project
            title="Ecommerce Web App"
            description="Aplicación full-stack de comercio electrónico con API REST y persistencia de datos."
            stack="React, Node.js, Express, MySQL"
            link="https://github.com/LeKimah/ecommerce-project"
          />
          <Project
            title="Blog Web App (SQL)"
            description="Blog con operaciones CRUD completas y base de datos relacional."
            stack="Node.js, Express, MySQL"
            link="https://github.com/LeKimah/blog-page-project"
          />
          <Project
            title="Blog Web App (NoSQL)"
            description="Blog desarrollado utilizando base de datos NoSQL para comparar modelos de datos."
            stack="Node.js, Express, MongoDB"
            link="https://github.com/LeKimah"
          />
          <Project
            title="Calculator App"
            description="Aplicación frontend creada con JavaScript puro y manipulación del DOM."
            stack="HTML, CSS, JavaScript"
            link="https://github.com/LeKimah/calculator-project"
          />
          <Project
            title="Weather App"
            description="Aplicación que consume una API externa para mostrar información climática en tiempo real según la ciudad ingresada."
            stack="JavaScript, API REST, HTML, CSS"
            link="https://github.com/LeKimah"
          />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800 py-10 text-center text-gray-500">
        <p>
          © {new Date().getFullYear()} Franco Lanaro ·
          <a
            href="https://www.linkedin.com/in/franco-lanaro-688768144/"
            target="_blank"
            className="ml-2 hover:text-gray-300"
          >
            LinkedIn
          </a>
        </p>
      </footer>
    </main>
  );
}

function Project({ title, description, stack, link }) {
  return (
    <div className="p-6 rounded-2xl border border-gray-800 hover:bg-gray-900 transition">
      <h4 className="text-xl font-medium mb-2">{title}</h4>
      <p className="text-gray-400 mb-3">{description}</p>
      <p className="text-sm text-gray-500 mb-4">{stack}</p>
      <a
        href={link}
        target="_blank"
        className="text-sm text-white underline hover:opacity-80"
      >
        Ver en GitHub
      </a>
    </div>
  );
}
