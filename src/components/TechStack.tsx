// import React from 'react';

// const TechStack = () => {
//   const technologies = [
//     'MongoDB',
//     'Express.js',
//     'React',
//     'Node.js',
//     'TypeScript',
//     'Next.js',
//     'Tailwind CSS',
//     'MUI',
//     'Bootstrap',
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
//           Core Technologies
//         </h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//           {technologies.map((tech) => (
//             <div
//               key={tech}
//               className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
//             >
//               <span className="text-sm font-medium text-gray-700">{tech}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TechStack;


import React from 'react';
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiMui,
  SiBootstrap,
} from 'react-icons/si';
import anime from 'animejs/lib/anime.es.js';
import { useEffect } from 'react';


const TechStack = () => {
  const technologies = [
    { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
    { name: 'Express.js', icon: SiExpress, color: 'text-gray-700' },
    { name: 'React', icon: SiReact, color: 'text-sky-500' },
    { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
    { name: 'TypeScript', icon: SiTypescript, color: 'text-blue-600' },
    { name: 'Next.js', icon: SiNextdotjs, color: 'text-gray-900' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, color: 'text-cyan-500' },
    { name: 'MUI', icon: SiMui, color: 'text-blue-500' },
    { name: 'Bootstrap', icon: SiBootstrap, color: 'text-purple-600' },
  ];

  useEffect(() => {
  anime({
    targets: '.tech-card',
    opacity: [0, 1],
    translateY: [30, 0],
    scale: [0.96, 1],
    easing: 'easeOutExpo',
    duration: 700,
    delay: anime.stagger(120, { grid: [3, 3], from: 'first' }),
  });

  

 


   anime.timeline({
    easing: 'easeOutExpo',
  })

  .add({
    targets: '.tech-card',
    opacity: [0, 1],
    translateY: [30, 0],
    rotateX: [-15, 0],
    scale: [0.9, 1],
    delay: anime.stagger(120),
    duration: 900,
  })

  .add({
    targets: '.tech-icon',
    scale: [0.6, 1],
    opacity: [0, 1],
    delay: anime.stagger(120),
    duration: 600,
  }, '-=700')

  .add({
    targets: '.tech-label',
    opacity: [0, 1],
    translateY: [8, 0],
    delay: anime.stagger(120),
    duration: 500,
  }, '-=600');
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        anime({
          targets: '.tech-card',
          opacity: [0, 1],
          translateY: [30, 0],
          scale: [0.66, 1],
          easing: 'easeOutExpo',
          duration: 900,
          delay: anime.stagger(120, { grid: [3, 3], from: 'first' }),
        });
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );

  const section = document.querySelector('#tech-stack');
  if (section) observer.observe(section);
 return () => observer.disconnect();
}, []);


  return (
    <section id="tech-stack" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 text-center mb-10">
          My Toolkit
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {technologies.map(({ name, icon: Icon, color }) => (
            <div
              key={name}
              className="tech-card group bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center"
            >
              <Icon
                className={`tech-icon text-4xl mb-3 ${color} group-hover:scale-110 transition-transform`}
              />
              <span className="tech-label text-sm font-medium text-gray-700">
                {name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;
