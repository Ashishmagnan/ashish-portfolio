import React from 'react';
    import Layout from '../components/Layout';
    import ExperienceCard from '../components/ExperienceCard';

    export default function Experience() {
      const experiences = [
        {
          title: 'React.js Developer',
          company: 'Crert Solutions Pvt. Ltd',
          period: 'September 2024 – Present',
          description: [
            'Develop web applications using React.js with highly optimised and reusable components.',
            'Work with common shared components to ensure consistency across applications.',
            'Contributed to two major projects: Print to Click and Meri Digital Dukan.',
            'Optimised front-end code and integration using Axios, Material UI and modern React libraries.'
          ],
          technologies: ['React.js', 'Axios', 'Material UI', 'React Router', 'Redux']
        },
        {
          title: 'React.js Trainee',
          company: 'Bigscal Technologies Pvt. Ltd',
          period: 'January 2024 – August 2024',
          description: [
            'Gained hands-on experience in front-end development and component-based architecture.',
            'Worked with HTML, CSS, JavaScript, React.js, Redux, Router, and Material UI.',
            'Learned industry best practices for maintainable React applications and state management.'
          ],
          technologies: ['React.js', 'Redux', 'React Router', 'Material UI', 'JavaScript (ES6+)']
        }
      ];

      return (
        <Layout>
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
                <p className="text-xl text-gray-600">
                  Recent front-end roles focused on React.js development and delivering business-focused outcomes
                </p>
              </div>

              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200"></div>

                {experiences.map((experience, index) => (
                  <div key={index} className="relative mb-8">
                    {/* Timeline dot */}
                    <div className="absolute left-2 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow"></div>
                    
                    {/* Content */}
                    <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                      <ExperienceCard
                        title={experience.title}
                        company={experience.company}
                        period={experience.period}
                        description={experience.description}
                        technologies={experience.technologies}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 p-8 rounded-lg mt-12">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4 text-center">
                  Ready for New Opportunities
                </h2>
                <p className="text-gray-700 text-center max-w-2xl mx-auto">
                  I am open to UK remote opportunities and roles where I can apply React.js expertise to
                  build performant and maintainable front-end experiences.
                </p>
              </div>
            </div>
          </section>
        </Layout>
      );
    }