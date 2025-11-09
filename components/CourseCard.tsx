
import React from 'react';
import { Link } from 'react-router-dom';
import { Course } from '../types';

interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
      <img className="h-48 w-full object-cover" src={course.imageUrl} alt={course.title} />
      <div className="p-6">
        <span className="inline-block bg-primary text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{course.category}</span>
        <h3 className="mt-2 text-xl font-semibold text-gray-800">{course.title}</h3>
        <p className="mt-2 text-gray-600">{course.description}</p>
        <div className="mt-4">
          <Link to={`/courses/${course.id}`} className="inline-block bg-accent text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-300">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
