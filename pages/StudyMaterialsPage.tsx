
import React from 'react';
import { courses } from '../data/mockData';

const StudyMaterialsPage: React.FC = () => {
  const allMaterials = courses.flatMap(course => 
    course.studyMaterials.map(material => ({ ...material, courseTitle: course.title }))
  );

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Study Materials</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Download PDF notes, practice problems, and more.
          </p>
        </div>
        
        <div className="bg-secondary p-8 rounded-lg shadow-inner">
          <div className="space-y-4">
            {allMaterials.map(material => (
              <div key={material.id} className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800">{material.title}</h3>
                  <p className="text-sm text-gray-500">Course: {material.courseTitle}</p>
                </div>
                <div className="flex-shrink-0 flex items-center space-x-4">
                  <a 
                    href={material.fileUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-primary bg-blue-100 hover:bg-blue-200 transition-colors"
                  >
                    View PDF
                  </a>
                  <a 
                    href={material.fileUrl} 
                    download 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-blue-600 transition-colors"
                  >
                    Download
                  </a>
                </div>
              </div>
            ))}
             {allMaterials.length === 0 && (
                <p className="text-center text-gray-500">No study materials available yet.</p>
             )}
          </div>
        </div>
        
        <div className="mt-12 text-center text-sm text-gray-500">
            <p>PDFs will open in your browser's default viewer. The download button will save the file directly to your device.</p>
        </div>

      </div>
    </div>
  );
};

export default StudyMaterialsPage;
