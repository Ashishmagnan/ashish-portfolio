import React, { useEffect, useRef } from "react";
import anime from "animejs";

const steps = [
  { title: "Understand the Problem", desc: "Analyze idea, users, business goals.", icon: "🧠" },
  { title: "Plan Architecture", desc: "Design scalable structure and data flow.", icon: "🧩" },
  { title: "Build with Focus", desc: "Write clean, reusable, fast code.", icon: "⚡" },
  { title: "Test & Optimize", desc: "Improve UX, performance, reliability.", icon: "🛠️" },
  { title: "Deliver & Support", desc: "Ship on time and stay available.", icon: "🚀" },
];

const HowIWork = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = document.querySelectorAll(".work-card");
    const icons = document.querySelectorAll(".work-icon");

    anime({
            targets: cards,
            translateY: 0,
            opacity: 1,
            scale: 1,
            duration: 300,
            easing: "easeOutQuad",
          });
          anime({
            targets: icons,
            scale: 1,
            rotate: 0,
            duration: 300,
            easing: "easeOutQuad",
          });

    // const onScroll = () => {
    //   const windowHeight = window.innerHeight;

    //   cards.forEach((card, i) => {
    //     const icon = icons[i];
    //     const rect = card.getBoundingClientRect();

    //     // Trigger point: when card enters bottom half of viewport
    //     const enterPoint = windowHeight - 1;

    //     if (rect.top < enterPoint ) {
    //       // Animate in
    //       anime({
    //         targets: card,
    //         translateY: 0,
    //         opacity: 1,
    //         scale: 1,
    //         duration: 300,
    //         easing: "easeOutQuad",
    //       });
    //       anime({
    //         targets: icon,
    //         scale: 1,
    //         rotate: 0,
    //         duration: 300,
    //         easing: "easeOutQuad",
    //       });
    //     } else {
    //       // Reset when out of view (optional)
    //       anime.set(card, {
    //         translateY: 60,
    //         opacity: 0,
    //         scale: 0.95,
    //       });
    //       anime.set(icon, {
    //         scale: 0,
    //         rotate: -10,
    //       });
    //     }
    //   });
    // };

    // window.addEventListener("scroll", onScroll, { passive: true });
    // onScroll(); // trigger on mount

    // return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-900 via-black to-gray-900 md:h-full"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-center text-gray-100 mb-16">
          How I Bring <span className="text-indigo-400">Ideas to Life</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-10 md:h-dvh">
          {steps.map((step, index) => (
            <div
              key={index}
              className="work-card opacity-0 flex flex-col items-center gap-6 p-6 rounded-xl
                     bg-white/5 backdrop-blur-md
                     border border-white/10
                     hover:border-white/20
                     hover:shadow-2xl hover:shadow-purple-500/10
                     transition-all duration-300"
            >
              <div className="work-icon text-4xl text-purple-400">
                {step.icon}
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-gray-100 text-center">
                  {step.title}
                </h3>
                <p className="text-gray-400">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIWork;
