import React, { useEffect } from "react";
import anime from "animejs";

const projects = [
  {
    title: "Lockify",
    stack: "MERN • Crypto • Razorpay • JWT",
    problem: "Users struggled to store passwords & documents securely.",
    solution:
      "Built a zero-trust secure vault with encryption, auth, and payment-based plans.",
    highlight: "End-to-end encrypted data storage",
  },
  {
    title: "HealthRay Lab System",
    stack: "React • Node • MongoDB",
    problem: "Manual lab reports caused delays and errors.",
    solution:
      "Created a digital lab management system for reports, patients & tests.",
    highlight: "Reduced manual effort by 70%",
  },
  {
    title: "GIFT City Portal",
    stack: "React • API Integration",
    problem: "Static information with poor UX.",
    solution:
      "Redesigned UI with dynamic data, faster navigation & modern UX.",
    highlight: "Improved user engagement",
  },
];

const ProofOfWork = () => {
  useEffect(() => {
    anime({
      targets: ".pow-card",
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(200),
      easing: "easeOutExpo",
    });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* ACT TITLE */}
<div className="text-center mb-20">
  {/* <p className="uppercase tracking-widest text-sm text-gray-400 mb-3">
    Act IV
  </p> */}
  <h2 className="text-4xl md:text-5xl font-bold text-gray-100">
    Proof of <span className="text-indigo-400">Work</span>
  </h2>
  <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
    Skills mean nothing without execution.  
    These projects prove what I can actually build.
  </p>
</div>


        {/* PROJECTS */}
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
  key={index}
  className="pow-card opacity-0 bg-gray-800/60 backdrop-blur-md rounded-2xl p-6 border border-gray-700 hover:border-indigo-400 hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300"
>
  <h3 className="text-xl font-semibold text-gray-100">
    {project.title}
  </h3>

  <p className="text-sm text-indigo-300 mt-1">
    {project.stack}
  </p>

  <div className="mt-5 space-y-3 text-sm text-gray-300">
    <p>
      <span className="font-semibold text-gray-100">Problem:</span>{" "}
      {project.problem}
    </p>
    <p>
      <span className="font-semibold text-gray-100">Solution:</span>{" "}
      {project.solution}
    </p>
  </div>

  <div className="mt-6 inline-block text-xs font-medium bg-indigo-900/20 text-indigo-300 px-3 py-1 rounded-full">
    {project.highlight}
  </div>
</div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofOfWork;
