import React from "react";
function ProjectSection() {
  const handler = () => {};

  return (
    <>
      <section
        className={`project-item py-8 min-h-screen sticky top-8 z-10 w-full bg-teal-400 rounded-sm`}
      >
        <h2 className="text-5xl">Project #1</h2>
      </section>

      <section
        className={`project-item py-8 min-h-screen sticky top-8 z-10 w-full bg-amber-400 rounded-sm`}
      >
        <h2 className="text-5xl">Project #2</h2>
      </section>

      <section
        className={`project-item py-8 min-h-screen sticky top-8 z-10 w-full bg-red-400 rounded-sm`}
      >
        <h2 className="text-5xl">Project #3</h2>
      </section>

      <section
        className={`project-item py-8 min-h-screen sticky top-8 z-10 w-full bg-green-400 rounded-sm`}
      >
        <h2 className="text-5xl">Project #4</h2>
      </section>
    </>
  );
}

export default ProjectSection;
