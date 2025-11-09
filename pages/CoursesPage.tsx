
import React, { useState, useMemo } from 'react';
import { courses } from '../data/mockData';
import CourseCard from '../components/CourseCard';

const CoursesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = useMemo(() => ['All', ...new Set(courses.map(c => c.category))], []);

  const filteredCourses = useMemo(() => {
    if (selectedCategory === 'All') {
      return courses;
    }
    return courses.filter(course => course.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Our Courses</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Find the perfect course to help you achieve your goals.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 md:space-x-4 bg-secondary p-2 rounded-lg">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-3 py-2 text-sm md:px-4 md:py-2 md:text-base font-medium rounded-md transition-colors duration-300 ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'text-gray-600 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
