"use client";

export default function CV() {
  const technicalStack = [
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Tailwind CSS",
    "JavaScript",
    "REST APIs",
    "Socket.IO",
    "Git",
    "Framer Motion",
  ];

  return (
    <div id="cv-content" className="bg-white text-gray-800">
      {/* ============================================================
          A4 PAGE
      ============================================================ */}

      <div
        className="
          mx-auto
          h-[1122px]
          w-[794px]
          overflow-hidden
          bg-white
          px-8
          py-5
          text-[12px]
          leading-[1.32]
        "
      >
        {/* ============================================================
            HEADER
        ============================================================ */}

        <div className="mb-4 border-b border-gray-300 pb-3">
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
            Abdullah Babar
          </h1>

          <p className="mt-0.5 text-sm font-semibold text-blue-600">
            Full-Stack Developer | PERN Stack | Next.js
          </p>

          <div className="mt-2 flex justify-between text-xs text-gray-600">
            <div>
              <p>abdullah.web7072@gmail.com</p>
              <p>+92 309 7072082</p>
              <p>Multan, Pakistan</p>
            </div>

            <div className="text-right">
              <p>React • Next.js • Node.js</p>
              <p>PostgreSQL • Prisma • Express</p>
              <p>Git • Socket.IO</p>
            </div>
          </div>
        </div>

        {/* ============================================================
            PROFESSIONAL SUMMARY
        ============================================================ */}

        <section className="mb-3.5">
          <h2 className="mb-1.5 border-l-4 border-blue-600 pl-2.5 text-base font-bold text-gray-900">
            Professional Summary
          </h2>

          <p>
            Full-Stack Developer specializing in modern web applications
            using the PERN stack and Next.js. Experienced with React,
            Node.js, Express, PostgreSQL and Prisma, with a focus on
            scalable architecture, responsive UI/UX and real-time systems.
          </p>
        </section>

        {/* ============================================================
            TECHNICAL SKILLS
        ============================================================ */}

        <section className="mb-3.5">
          <h2 className="mb-1.5 border-l-4 border-blue-600 pl-2.5 text-base font-bold text-gray-900">
            Technical Skills
          </h2>

          <div className="grid grid-cols-4 gap-1.5">
            {technicalStack.map((tech) => (
              <div
                key={tech}
                className="
                  rounded
                  bg-slate-50
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-gray-700
                "
              >
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================
            DEVELOPMENT FOCUS
        ============================================================ */}

        <section className="mb-3.5">
          <h2 className="mb-1.5 border-l-4 border-blue-600 pl-2.5 text-base font-bold text-gray-900">
            Development Focus
          </h2>

          <div className="grid grid-cols-2 gap-x-8 gap-y-0.5">
            <p>• Full-Stack Web Development</p>
            <p>• PERN Applications</p>
            <p>• React & Next.js</p>
            <p>• REST API Development</p>
            <p>• PostgreSQL & Prisma</p>
            <p>• Real-Time Applications</p>
            <p>• Authentication</p>
            <p>• Responsive UI/UX</p>
          </div>
        </section>

        {/* ============================================================
            PROJECTS
        ============================================================ */}

        <section className="mb-3.5">
          <h2 className="mb-2 border-l-4 border-blue-600 pl-2.5 text-base font-bold text-gray-900">
            Project Portfolio
          </h2>

          <div className="space-y-2">

            {/* ChatHub */}

            <div>
              <h3 className="text-[13px] font-bold text-gray-900">
                ChatHub — Real-Time Communication Platform
              </h3>

              <p>
                Built a full-stack chat platform with Next.js, Node.js,
                PostgreSQL, Prisma and Socket.IO. Implemented authentication,
                real-time messaging, reactions, presence, typing indicators,
                receipts and file sharing.
              </p>
            </div>

            {/* Lead Finder */}

            <div>
              <h3 className="text-[13px] font-bold text-gray-900">
                Business Lead Finder — Lead Generation Platform
              </h3>

              <p>
                Developed a business lead collection system using Next.js,
                Playwright, Prisma and PostgreSQL with automated data
                collection, search history and structured lead storage.
              </p>
            </div>

            {/* Portfolio */}

            <div>
              <h3 className="text-[13px] font-bold text-gray-900">
                Personal Developer Portfolio
              </h3>

              <p>
                Created a responsive portfolio using Next.js, React, Tailwind
                CSS, Framer Motion and GSAP with modern layouts, animations
                and dark/light themes.
              </p>
            </div>

            {/* Image Tools */}

            <div>
              <h3 className="text-[13px] font-bold text-gray-900">
                Image Tools Platform
              </h3>

              <p>
                Built a responsive image utility platform using React and
                Next.js with interactive components and image-processing
                functionality.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================================
            EDUCATION
        ============================================================ */}

        <section className="mb-3.5">
          <h2 className="mb-1.5 border-l-4 border-blue-600 pl-2.5 text-base font-bold text-gray-900">
            Education
          </h2>

          <div className="space-y-1.5">
            <div>
              <h3 className="font-semibold text-gray-900">
                BS Computer Science — MNS University of Agriculture
              </h3>

              <p className="text-gray-600">2023 — 2027</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                ICS — Grassion College
              </h3>

              <p className="text-gray-600">2021 — 2023</p>
            </div>
          </div>
        </section>

        {/* ============================================================
            EXPERIENCE
        ============================================================ */}

        <section className="mb-3.5">
          <h2 className="mb-1.5 border-l-4 border-blue-600 pl-2.5 text-base font-bold text-gray-900">
            Work Experience
          </h2>

          <div>
            <h3 className="font-semibold text-gray-900">
              Kamals Solutions — Multan
            </h3>

            <p className="mt-0.5">
              Worked on modern web development projects involving responsive
              interfaces, frontend development and full-stack applications.
            </p>
          </div>
        </section>

        {/* ============================================================
            ADDITIONAL TECHNOLOGIES
        ============================================================ */}

       
        {/* ============================================================
            FOOTER
        ============================================================ */}

        <div className="mt-4 border-t border-gray-200 pt-2 text-center">
          <p className="text-[10px] uppercase tracking-[0.2em] text-gray-400">
            Abdullah Babar • Full-Stack Developer • PERN + Next.js
          </p>
        </div>
      </div>
    </div>
  );
}