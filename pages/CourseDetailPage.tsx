
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { courses } from '../data/mockData';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const course = courses.find(c => c.id === courseId);

  if (!course) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link to="/courses" className="mt-4 inline-block text-accent hover:underline">
          Back to Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <span className="inline-block bg-primary text-white text-xs px-2 rounded-full uppercase font-semibold tracking-wide">{course.category}</span>
            <h1 className="mt-2 text-4xl font-extrabold text-gray-900">{course.title}</h1>
            <p className="mt-4 text-lg text-gray-600">{course.longDescription}</p>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Video Lectures</h2>
              <div className="space-y-6">
                {course.videos.map(video => (
                  <div key={video.id} className="bg-secondary p-4 rounded-lg">
                     <h3 className="text-lg font-semibold mb-2">{video.title}</h3>
                     <div className="aspect-w-16 aspect-h-9">
                        <iframe 
                            src={video.embedUrl}
                            title={video.title} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            className="w-full h-full rounded-md"
                        ></iframe>
                     </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Study Materials (PDFs)</h2>
              <ul className="space-y-3">
                {course.studyMaterials.map(material => (
                  <li key={material.id} className="bg-secondary p-4 rounded-lg flex items-center justify-between">
                    <span className="text-gray-800">{material.title}</span>
                    <div>
                      <a href={material.fileUrl} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline mr-4">View</a>
                      <a href={material.fileUrl} download className="text-accent hover:underline">Download</a>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-blue-50 border-l-4 border-primary rounded-r-lg">
                <p className="text-sm text-blue-800 font-semibold">Simulated PDF Upload</p>
                <p className="text-sm text-blue-700">In a full application, instructors could upload course materials here.</p>
                <input type="file" disabled className="mt-2 text-sm"/>
              </div>
            </div>
          </div>

          <div className="md:col-span-1">
            <img src={course.imageUrl} alt={course.title} className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
