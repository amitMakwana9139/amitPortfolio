// src/components/Skills.js
import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';

const Skills = () => {
    const [progress, setProgress] = useState(Array(9).fill(0)); // Initialize with 0%

    const skills = [
        { id: 1, name: 'JavaScript', level: '90%' },
        { id: 2, name: 'React.js', level: '90%' },
        { id: 3, name: 'Next.js', level: '90%' },
        { id: 4, name: 'Tailwind CSS', level: '85%' },
        { id: 5, name: 'Node.js', level: '90%' },
        { id: 6, name: 'MongoDB', level: '90%' },
        { id: 7, name: 'MySql', level: '85%' },
        { id: 8, name: 'PostgressSQL', level: '85%' },
        { id: 9, name: 'Git', level: '85%' },
    ];

    useEffect(() => {
        // Set the progress to the skill levels after 1 second
        const timeoutId = setTimeout(() => {
            setProgress(skills.map(skill => parseInt(skill.level))); // Update progress to the skill levels
        }, 1000); // 1 second delay before filling up

        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount
    }, [skills]);

    return (
        <section id="skills" className="py-12 bg-gray-100">
            <div className="container mx-auto px-4 md:px-10 lg:px-20">
                <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">My Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((skill, index) => (
                        <div key={skill.id} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105">
                            <FaStar className="text-yellow-500 mb-2" size={40} />
                            <h3 className="text-lg font-semibold text-gray-800">{skill.name}</h3>
                            <div className="w-full bg-gray-300 rounded-full h-4 mt-2 overflow-hidden">
                                <div
                                    className={`bg-blue-600 h-4 rounded-full transition-all duration-700 ease-in-out`}
                                    style={{ width: `${progress[index]}%` }}
                                ></div>
                            </div>
                            <span className="mt-2 text-gray-600">{progress[index]}%</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
