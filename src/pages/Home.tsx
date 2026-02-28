// import React from 'react';
//     import { Link } from 'react-router-dom';
//     import { ArrowRight } from 'lucide-react';
//     import Layout from '../components/Layout';
//     import TechStack from '../components/TechStack';

//     export default function Home() {
//       return (
//         <Layout>
//           {/* Hero Section */}
//           <section className="bg-white py-20">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="text-center">
//                 <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
//                   Ashish Magnani
//                 </h1>
//                 <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
//                   Front-end Developer | React.js Developer
//                 </h2>
//                 <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
//                   I am a Front-end Developer specialising in React.js, building high-quality,
//                   optimised and scalable web applications. I adapt quickly to new environments and
//                   prioritise clean code, reusable components and performance optimisation to deliver
//                   business-ready solutions. Open to UK remote opportunities and roles with UK companies.
//                 </p>

//                 <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                   <Link
//                     to="/projects"
//                     className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
//                   >
//                     View Projects
//                     <ArrowRight size={20} className="ml-2" />
//                   </Link>
//                   <Link
//                     to="/contact"
//                     className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
//                   >
//                     Contact Me
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </section>

//           <TechStack />

//           {/* About Preview */}
//           <section className="py-16 bg-white">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//               <div className="grid md:grid-cols-2 gap-12 items-center">
//                 <div>
//                   <h2 className="text-3xl font-bold text-gray-900 mb-6">
//                     Practical Front-end Engineering for Business Outcomes
//                   </h2>
//                   <p className="text-gray-600 mb-6 leading-relaxed">
//                     I focus on shipping reliable, maintainable front-end applications using React.js.
//                     My approach balances user experience, performance and developer productivity to
//                     deliver solutions that meet business goals and are easy to extend.
//                   </p>
//                   <Link
//                     to="/about"
//                     className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
//                   >
//                     Learn more about my background
//                     <ArrowRight size={16} className="ml-1" />
//                   </Link>
//                 </div>
//                 <div className="bg-gray-50 p-8 rounded-lg">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Strengths</h3>
//                   <ul className="space-y-3">
//                     <li className="flex items-center text-gray-700">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
//                       Clean, reusable React components
//                     </li>
//                     <li className="flex items-center text-gray-700">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
//                       Performance optimisation and fast-loading UIs
//                     </li>
//                     <li className="flex items-center text-gray-700">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
//                       Practical experience with UI libraries like MUI & Bootstrap
//                     </li>
//                     <li className="flex items-center text-gray-700">
//                       <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
//                       Focus on business-ready deliverables and collaboration
//                     </li>
//                   </ul>
//                 </div>
//               </div>
//             </div>
//           </section>
//         </Layout>
//       );
//     }


import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import anime from 'animejs/lib/anime.es.js';
import Layout from '../components/Layout';
import TechStack from '../components/TechStack';
// import profileImg from '../assets/ashish.png';
// import "../App.css"
import HowIWork from '../components/HowIWork';
import ProofOfWork from '../components/ProofOfWork';
import TrustSection from '../components/TrustSection';

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    anime.timeline({ easing: 'easeOutExpo', duration: 500 })
      // .add({
      //   targets: '.hero-name',
      //   opacity: [0, 1],
      //   translateY: [40, 0],
      // })
      // .add({
      //   targets: '.hero-title',
      //   opacity: [0, 1],
      //   translateY: [30, 0],
      // }, '-=600')
      // .add({
      //   targets: '.hero-desc',
      //   opacity: [0, 1],
      //   translateY: [20, 0],
      // }, '-=500')
      // .add({
      //   targets: '.hero-btn',
      //   opacity: [0, 1],
      //   translateY: [20, 0],
      //   delay: anime.stagger(120),
      // }, '-=400')
      .add({
        targets: '.hero-img',
        opacity: [0, 1],
        scale: [0.9, 1],
      }, '-=700');

    anime({
      targets: '.hero-img',
      translateY: [0, -12],
      direction: 'alternate',
      easing: 'easeInOutSine',
      duration: 3000,
      loop: true,
    });


    const textEl = document.querySelector('.hero-name');

    if (textEl) {
      const text = textEl.textContent || '';
      textEl.innerHTML = text
        .split('')
        .map(char =>
          char === ' '
            ? '&nbsp;'
            : `<span class="letter inline-block opacity-0">${char}</span>`
        )
        .join('');
    }

    anime.timeline({ easing: 'easeOutExpo' })
      .add({
        targets: '.hero-name',
        opacity: [0, 1],
        duration: 300,
      })
      .add({
        targets: '.hero-name .letter',
        opacity: [0, 1],
        translateY: [40, 0],
        delay: anime.stagger(60),
        duration: 900,
      });




    const nameEl = document.querySelector('.hero-name');

    if (nameEl) {
      const text = nameEl.textContent || '';
      nameEl.innerHTML = text
        .split('')
        .map(char =>
          char === ' '
            ? '&nbsp;'
            : `<span class="letter inline-block opacity-0">${char}</span>`
        )
        .join('');
    }

    /* ---------- Animation Timeline ---------- */
    anime.timeline({
      easing: 'easeOutExpo',
    })

      // Name container
      .add({
        targets: '.hero-name',
        opacity: [0, 1],
        duration: 200,
      })

      // Name letters
      .add({
        targets: '.hero-name .letter',
        opacity: [0, 1],
        translateY: [40, 0],
        delay: anime.stagger(60),
        duration: 700,
      })

      // Title
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
      }, '-=400')

      // Description
      .add({
        targets: '.hero-desc',
        opacity: [0, 1],
        translateY: [16, 0],
        duration: 500,
      }, '-=300')

      // Buttons
      .add({
        targets: '.hero-btn',
        opacity: [0, 1],
        translateY: [12, 0],
        delay: anime.stagger(120),
        duration: 400,
      }, '-=300');

  }, []);


  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="bg-white py-24 overflow-hidden md:h-[calc(100vh-100px)] flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-1 gap-12 items-center">

            {/* Text */}
            <div className="text-center md:text-center">
              <h1 className="hero-name text-4xl md:text-6xl font-bold text-gray-900 mb-4 opacity-0">
                Ashish Magnani
              </h1>

              <h2 className="hero-title text-xl md:text-2xl text-blue-600 font-semibold mb-6 opacity-0">
                Front-end Developer | React.js Developer
              </h2>

              <p className="hero-desc text-lg text-gray-600 mb-8 leading-relaxed opacity-0 w-2/3 mx-auto">
                I build scalable, high-performance React applications with clean architecture
                and business-ready UI. Open to UK remote roles and collaborations with UK companies.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-center">
                <Link
                  to="/projects"
                  className="hero-btn opacity-0 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Projects
                  <ArrowRight size={20} className="ml-2" />
                </Link>

                <Link
                  to="/contact"
                  className="hero-btn opacity-0 inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Contact Me
                </Link>
              </div>
            </div>

            {/* Image */}
            {/* <div className="flex justify-center md:justify-end">
              <div className="hero-img opacity-0 w-80 h-80 md:w-full md:h-full  flex items-center justify-center">
                <img
                  src={profileImg}
                  alt="Ashish Magnani"
                  className="max-w-full  max-h-full object-contain rounded-2xl"
                />
              </div>
            </div> */}




          </div>
        </div>
      </section>
      <HowIWork />

      <TechStack />
      <ProofOfWork />

      <TrustSection />





      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900 py-24">

        {/* Floating glow elements */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          {/* Story Heading */}
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Let’s Build Something
            <span className="text-indigo-400"> Meaningful</span>
          </h2>

          {/* Story Text */}
          <p className="text-gray-300 text-lg md:text-xl mb-10 leading-relaxed">
            Every great product starts with an idea —
            and the courage to bring it to life.
            If you’re looking for a developer who cares about
            performance, design, and real users —
            this is where our story begins.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="px-8 py-4 rounded-xl bg-indigo-500 hover:bg-indigo-600 text-white font-semibold transition transform hover:scale-105"
            >
              Start a Project
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              className="px-8 py-4 rounded-xl border border-gray-600 text-gray-200 hover:bg-white hover:text-black transition transform hover:scale-105"
            >
              View Resume
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
