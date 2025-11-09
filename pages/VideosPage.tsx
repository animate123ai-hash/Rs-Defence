
import React from 'react';
import { courses } from '../data/mockData';
import { Video } from '../types';

const VideosPage: React.FC = () => {
  const allVideos = courses.flatMap(course => 
    course.videos.map(video => ({ ...video, courseTitle: course.title }))
  );

  return (
    <div className="bg-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Video Lectures</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Browse our collection of video lectures. Open to all visitors.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {allVideos.map((video) => (
            <div key={video.id} className="bg-white p-4 rounded-lg shadow-lg">
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-md"
                ></iframe>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">{video.title}</h3>
              <p className="text-sm text-gray-500">From: {video.courseTitle}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-4 bg-blue-50 border-l-4 border-primary rounded-r-lg text-center">
            <p className="text-sm text-blue-800 font-semibold">Simulated Video Upload</p>
            <p className="text-sm text-blue-700">A feature for instructors to upload new videos would be available here.</p>
            <input type="file" accept="video/*" disabled className="mt-2 text-sm mx-auto"/>
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
