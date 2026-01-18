import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const ExperienceCard = ({ title, company, period, description, technologies }: ExperienceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
          <p className="text-blue-600 font-medium">{company}</p>
        </div>
        <span className="text-gray-500 text-sm mt-1 md:mt-0">{period}</span>
      </div>
      
      <ul className="space-y-2 mb-4">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start">
            <span className="text-blue-600 mr-2">•</span>
            {item}
          </li>
        ))}
      </ul>

      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Technologies Used:</h4>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;