
import React from 'react';
import { Link } from 'react-router-dom';
import { courses, reviews } from '../data/mockData';
import CourseCard from '../components/CourseCard';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">RS Classes</h1>
          <p className="mt-4 text-xl md:text-2xl text-blue-200">Learn. Grow. Succeed.</p>
          <Link to="/courses" className="mt-8 inline-block bg-white text-primary font-bold py-3 px-8 rounded-lg hover:bg-gray-200 transition-colors duration-300">
            Explore Courses
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Welcome to RS Classes</h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Our mission is to provide high-quality, accessible education to empower students to achieve their academic and professional goals.
            </p>
          </div>
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h3 className="text-xl font-semibold">Expert Instructors</h3>
              <p className="mt-2 text-gray-600">Learn from the best in the field, with years of teaching experience.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Comprehensive Curriculum</h3>
              <p className="mt-2 text-gray-600">Our courses are designed to be thorough and relevant to today's demands.</p>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold">Flexible Learning</h3>
              <p className="mt-2 text-gray-600">Access materials and lectures anytime, anywhere, at your own pace.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">Our Popular Courses</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {courses.slice(0, 3).map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">What Our Students Say</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {reviews.map(review => (
              <div key={review.id} className="bg-secondary p-8 rounded-lg">
                <p className="text-gray-600 italic">"{review.comment}"</p>
                <div className="flex items-center mt-4">
                  <img className="h-12 w-12 rounded-full" src={review.avatarUrl} alt={review.studentName} />
                  <div className="ml-4">
                    <p className="font-semibold text-gray-900">{review.studentName}</p>
                    <p className="text-gray-500">{review.course}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
