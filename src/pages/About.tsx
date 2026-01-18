import React from 'react';
    import Layout from '../components/Layout';

    export default function About() {
      return (
        <Layout>
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">About Me</h1>
                <p className="text-xl text-gray-600">
                  Front-end Developer specialising in React.js
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="bg-gray-50 p-8 rounded-lg mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Professional Profile</h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    I am a Front-end Developer specialising in React.js, with strong experience in building
                    high-quality, optimised and scalable web applications. I adapt quickly to new environments
                    and focus on clean code, reusable components and performance optimisation to deliver
                    business-ready solutions for clients and stakeholders.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    My work emphasises maintainability, consistent component libraries and pragmatic approaches
                    that align with product and business goals. I am comfortable working with UI libraries such
                    as Material UI and Bootstrap, and I have hands-on experience integrating APIs and optimising
                    front-end performance.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Deliver</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Clean, reusable React components and UI libraries</li>
                      <li>• Fast, accessible and SEO-friendly front-end implementations</li>
                      <li>• Integration with REST APIs using Axios and standard patterns</li>
                      <li>• State management with Redux and reliable routing with React Router</li>
                      <li>• Collaboration with product teams to deliver business outcomes</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Approach</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Maintainable, testable and documented code</li>
                      <li>• Performance-first mindset and progressive enhancement</li>
                      <li>• Focus on developer experience and reusable patterns</li>
                      <li>• Clear communication with stakeholders and teams</li>
                      <li>• Practical, business-focused solutions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-8 rounded-lg mb-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Education</h2>
                  <p className="text-gray-700 leading-relaxed mb-2">
                    Ganpat University — B.Tech in Computer Engineering
                  </p>
                  <p className="text-gray-700 text-sm">2020 – 2024 • CGPA: 7.44</p>
                </div>

                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">Languages</h2>
                  <ul className="text-gray-700 space-y-1">
                    <li>English — Intermediate</li>
                    <li>Hindi — Fluent</li>
                    <li>Gujarati — Fluent</li>
                    <li>Sindhi — Fluent</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
    }