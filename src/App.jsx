import React from "react";

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-gradient-to-b from-black via-gray-950 to-black text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_#1f2937,_#000)] opacity-40"></div>
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">
          Franco Lanaro
        </h1>
        <h2 className="mt-4 text-lg text-gray-400 max-w-xl">
          Desarrollador Frontend enfocado en React y experiencias modernas.
        </h2>
        <p className="mt-4 text-lg text-gray-400 max-w-xl">
          Desarrollo aplicaciones web completas utilizando React, Node.js,
          Express y bases de datos SQL y NoSQL. Me interesa construir productos
          modernos, resolver problemas reales y seguir creciendo
          profesionalmente como desarrollador.
        </p>
        <div className="mt-8 flex gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition-all duration-300"
          >
            Ver proyectos
          </a>
          <a
            href="https://github.com/LeKimah"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-white text-black font-medium hover:scale-105 transition-all duration-300"
          >
            GitHub
          </a>

          <a
            href="/cv/Franco_Lanaro_CV.pdf"
            target="_blank"
            className="px-6 py-3 rounded-xl border border-gray-700 hover:bg-gray-800 transition-all duration-300"
          >
            Descargar CV
          </a>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-2xl font-semibold mb-6">Sobre mí</h3>
        <p className="text-gray-300 leading-relaxed">
          Soy desarrollador Full Stack especializado en React. Me interesa crear
          aplicaciones web modernas, bien estructuradas y con una buena
          experiencia de usuario. Vengo de un background administrativo y de
          recursos humanos, donde desarrollé habilidades de comunicación,
          organización y trabajo en equipo que hoy aplico al desarrollo de
          software.
        </p>
      </section>

      {/* SKILLS */}
      <section className="p-6 bg-white/5 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-8">Tecnologías</h3>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-medium mb-3">Frontend</h4>
              <ul className="text-gray-400 space-y-1">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React</li>
                <li>HTML</li>
                <li>CSS</li>
                <li>Tailwind CSS</li>
                <li>Bootstrap</li>
                <li>Next.js</li>
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
            <div>
              <h4 className="font-medium mb-3">Herramientas</h4>
              <ul className="text-gray-400 space-y-1">
                <li>VS Code</li>
                <li>Git</li>
                <li>GitHub</li>
                <li>Zod</li>
                <li>WordPress</li>
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
            title="NHF Landing Page"
            description="Landing page desarrollada para una empresa de mantenimiento edilicio. "
            stack="React, Tailwind CSS, Vite, Vercel"
            link="https://github.com/LeKimah/nhf-landing-page"
            demo="https://www.nhfservicios.com/"
          />
          <Project
            title="React User Manager"
            description="Aplicación desarrollada para practicar la gestión de usuarios utilizando React, implementando operaciones CRUD, validaciones y autenticación básica."
            stack="React, Zod, LocalStorage"
            link="https://github.com/LeKimah/login-project"
          />
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
        </div>
      </section>

      {/* CONTACT */}
      <section className="p-6 bg-white/5 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-2xl font-semibold mb-6">Contacto</h3>
          <p className="text-gray-400 mb-4">
            Si quieres contactarme, puedes enviarme un correo electrónico a{" "}
            <a
              href="mailto:franco.k.lanaro@gmail.com"
              className="text-blue-400 hover:underline"
            >
              franco.k.lanaro@gmail.com
            </a>
          </p>
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
            LinkedIn ·
          </a>
          <a
            href="https://github.com/LeKimah"
            target="_blank"
            className="ml-2 hover:text-gray-300"
          >
            GitHub
          </a>
        </p>
      </footer>
    </main>
  );
}

function Project({ title, description, stack, link, demo }) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:scale-105 transition-all duration-300">
      <h4 className="text-xl font-medium mb-2">{title}</h4>
      <p className="text-gray-400 mb-3">{description}</p>
      <p className="text-sm text-gray-500 mb-4">{stack}</p>
      {demo && (
        <a
          href={demo}
          target="_blank"
          className="text-sm text-white underline hover:opacity-80"
        >
          Ver demo
        </a>
      )}
      <br />
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
