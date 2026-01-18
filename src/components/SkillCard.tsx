import React from 'react';

interface SkillCardProps {
  category: string;
  skills: string[];
}

const SkillCard = ({ category, skills }: SkillCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
      <div className="space-y-2">
        {skills.map((skill) => (
          <div key={skill} className="flex items-center">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
            <span className="text-gray-700">{skill}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;