"use client";

export default function CV() {
  return (
    <div id="cv-content" className="bg-white text-gray-800 flex justify-center">
      {/* A4 Page */}
     <div
  className="w-[794px] h-[1122px] bg-white px-8 py-6 text-[13px] leading-[1.45] overflow-hidden"
>
        {/* HEADER */}
        <div className="border-b pb-4 mb-5">
          <h1 className="text-4xl font-extrabold tracking-tight">
            Abdullah Babar
          </h1>
          <p className="text-blue-600 font-semibold mt-1">
            Frontend Developer & Database Enthusiast
          </p>

          <div className="grid grid-cols-2 gap-2 mt-3 text-gray-600 text-sm">
            <div>
              abdullah.web7072@gmail.com <br />
              +92 309 7072082 <br />
              Multan, Pakistan
            </div>
          </div>
        </div>

        {/* SUMMARY */}
        <section className="mb-5">
          <h2 className="text-lg font-bold border-l-4 border-blue-600 pl-3 mb-2">
            Professional Summary
          </h2>
          <p>
            Passionate Web Developer specializing in modern, responsive applications
            with strong focus on frontend engineering and database integration,
            clean architecture, and premium UI/UX for production-ready platforms.
          </p>
        </section>

        {/* TECH STACK */}
        <section className="mb-5">
          <h2 className="text-lg font-bold border-l-4 border-blue-600 pl-3 mb-2">
            Technical Stack
          </h2>
          <div className="grid grid-cols-3 gap-2">
            {[
              "React", "Next.js",
              "PostgreSQL", "Tailwind CSS",
              "HTML", "CSS", "JavaScript"
            ].map((tech, i) => (
              <div key={i} className="bg-slate-50 px-3 py-1 rounded">
                {tech}
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="mb-5">
          <h2 className="text-lg font-bold border-l-4 border-blue-600 pl-3 mb-3">
            Project Portfolio
          </h2>

          <div className="space-y-3">
            <div>
              <h3 className="font-semibold">Inventory Management System</h3>
              <p>
                Built an inventory system with product tracking, stock monitoring,
                CRUD operations, and efficient database integration.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Personal Portfolio</h3>
              <p>
                Designed a high-performance portfolio with advanced UI/UX,
                smooth animations, and responsive layouts.
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Ugwu Cynthia Clone</h3>
              <p>
                Recreated award-winning website with pixel-perfect UI,
                scroll animations, and high-fidelity layout replication.
              </p>
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section className="mb-5">
          <h2 className="text-lg font-bold border-l-4 border-blue-600 pl-3 mb-2">
            Education
          </h2>

          <div className="space-y-2">
            <div>
              <h3 className="font-semibold">BS Computer Science — MNSUA</h3>
              <p>2023 — 2027</p>
            </div>

            <div>
              <h3 className="font-semibold">ICS — Grassion College</h3>
              <p>2021 — 2023</p>
            </div>
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-lg font-bold border-l-4 border-blue-600 pl-3 mb-2">
            Work Experience
          </h2>

          <p>
            Kamals Solutions — Multan
          </p>
        </section>

      </div>
    </div>
  );
}