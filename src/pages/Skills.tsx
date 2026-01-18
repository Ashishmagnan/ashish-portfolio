import React from 'react';
    import Layout from '../components/Layout';
    import SkillCard from '../components/SkillCard';

    export default function Skills() {
      const skillCategories = [
        {
          category: 'Frontend',
          skills: [
            'React.js',
            'JavaScript (ES6+)',
            'HTML5',
            'CSS3'
          ]
        },
        {
          category: 'UI Libraries',
          skills: [
            'Bootstrap',
            'Material UI'
          ]
        },
        {
          category: 'State Management & Routing',
          skills: [
            'Redux',
            'React Router'
          ]
        },
        {
          category: 'Tools & Libraries',
          skills: [
            'Axios',
            'Git',
            'GitHub'
          ]
        }
      ];

      const softSkills = [
        'Project Management',
        'Public Relations',
        'Team Collaboration',
        'Time Management',
        'Effective Communication',
        'Critical Thinking'
      ];

      return (
        <Layout>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Technical Skills</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Core front-end skills and tooling used to deliver performant, maintainable applications
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {skillCategories.map((category) => (
                  <SkillCard
                    key={category.category}
                    category={category.category}
                    skills={category.skills}
                  />
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-lg">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
                  Soft Skills & Professional Competencies
                </h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Collaboration</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Team Collaboration</li>
                      <li>Effective Communication</li>
                      <li>Public Relations</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Delivery</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Project Management</li>
                      <li>Time Management</li>
                      <li>Critical Thinking</li>
                    </ul>
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Tools</h3>
                    <ul className="text-gray-600 space-y-1">
                      <li>Git & GitHub</li>
                      <li>Axios</li>
                      <li>Material UI / Bootstrap</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Layout>
      );
    }