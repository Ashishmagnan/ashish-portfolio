import React, { useEffect, useRef } from "react";
import anime from "animejs";

const TrustSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    anime({
      targets: cardsRef.current,
      opacity: [0, 1],
      translateY: [40, 0],
      delay: anime.stagger(150),
      easing: "easeOutExpo",
      duration: 900,
    });
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT STORY */}
        <div>
          
          <h3 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
            Why You Can <span className="text-indigo-600">Trust Me</span>
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            I don’t just write code — I take responsibility for the product.
            From idea to deployment, I think like an owner, not just a developer.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed">
            Every project I build is something I’d proudly put my name on.
            Clean code, honest communication, and long-term thinking — always.
          </p>
        </div>

        {/* RIGHT TRUST CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: "Real Projects",
              desc: "Built full-stack MERN apps with authentication, payments & security.",
              icon: "🚀",
            },
            {
              title: "Clear Communication",
              desc: "You’ll always know what’s happening — no ghosting, no confusion.",
              icon: "💬",
            },
            {
              title: "Quality First",
              desc: "Clean architecture, reusable components, scalable code.",
              icon: "🧠",
            },
            {
              title: "Always Learning",
              desc: "React, TypeScript, Next.js, performance & modern UX patterns.",
              icon: "📚",
            },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (cardsRef.current[i] = el)}
              className="p-6 rounded-2xl border border-gray-200 bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl mb-4">{item.icon}</div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
