
export interface StudyMaterial {
  id: string;
  title: string;
  fileUrl: string; // URL to the PDF file
}

export interface Video {
  id: string;
  title: string;
  embedUrl: string; // URL for embedding, e.g., YouTube embed URL
}

export interface Course {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  imageUrl: string;
  videos: Video[];
  studyMaterials: StudyMaterial[];
}

export interface Review {
  id: string;
  studentName: string;
  course: string;
  rating: number; // out of 5
  comment: string;
  avatarUrl: string;
}
