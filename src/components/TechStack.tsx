import React from 'react';

const TechStack = () => {
  const technologies = [
    'MongoDB',
    'Express.js',
    'React',
    'Node.js',
    'TypeScript',
    'Next.js',
    'Tailwind CSS',
    'Docker'
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900 text-center mb-8">
          Core Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {technologies.map((tech) => (
            <div
              key={tech}
              className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-sm font-medium text-gray-700">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;