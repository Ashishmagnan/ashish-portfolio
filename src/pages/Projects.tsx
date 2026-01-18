import React from 'react';
    import Layout from '../components/Layout';
    import ProjectCard from '../components/ProjectCard';

    export default function Projects() {
      const projects = [
        {
          title: 'Healthy Lab',
          description: 'A healthcare platform that manages laboratory data, including test records, samples, and reports, with a focus on reusable components and maintainable code.',
          techStack: ['React.js', 'Node.js', 'Reactstrap', 'Material UI'],
          liveUrl: '#',
          githubUrl: '#'
        },
        {
          title: 'GIFT-CITY',
          description: 'A government application that manages and displays information related to essential services such as Power, Water, and Infrastructure with performance-optimized frontend logic.',
          techStack: ['React.js', '.NET', 'Material UI', 'RTK', 'Formik'],
          liveUrl: '#',
          githubUrl: '#'
        }
      ];

      return (
        <Layout>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Selected projects demonstrating front-end engineering, component design and performance optimisation.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8 mb-12">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    techStack={project.techStack}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                ))}
              </div>

              <div className="bg-gray-50 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                  Interested in Working Together?
                </h2>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  These projects highlight a focus on maintainability and performance. If you'd like to review code or discuss details, please get in touch.
                </p>
                <a
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </section>
        </Layout>
      );
    }