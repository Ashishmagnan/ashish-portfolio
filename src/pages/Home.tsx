import React from 'react';
    import { Link } from 'react-router-dom';
    import { ArrowRight } from 'lucide-react';
    import Layout from '../components/Layout';
    import TechStack from '../components/TechStack';

    export default function Home() {
      return (
        <Layout>
          {/* Hero Section */}
          <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                  Ashish Magnani
                </h1>
                <h2 className="text-xl md:text-2xl text-blue-600 font-semibold mb-6">
                  Front-end Developer | React.js Developer
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                  I am a Front-end Developer specialising in React.js, building high-quality,
                  optimised and scalable web applications. I adapt quickly to new environments and
                  prioritise clean code, reusable components and performance optimisation to deliver
                  business-ready solutions. Open to UK remote opportunities and roles with UK companies.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/projects"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View Projects
                    <ArrowRight size={20} className="ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <TechStack />

          {/* About Preview */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Practical Front-end Engineering for Business Outcomes
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I focus on shipping reliable, maintainable front-end applications using React.js.
                    My approach balances user experience, performance and developer productivity to
                    deliver solutions that meet business goals and are easy to extend.
                  </p>
                  <Link
                    to="/about"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                  >
                    Learn more about my background
                    <ArrowRight size={16} className="ml-1" />
                  </Link>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Strengths</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Clean, reusable React components
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Performance optimisation and fast-loading UIs
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Practical experience with UI libraries like MUI & Bootstrap
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      Focus on business-ready deliverables and collaboration
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
    }