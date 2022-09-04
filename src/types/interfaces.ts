export interface Language {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  code: string;
}

export interface License {
  id: number;
  name: string;
  description: string;
  image_url: string;
  url: string;
  created_at: Date;
  updated_at: Date;
}

export interface Publisher {
  email?: any;
  followed?: any;
  complained: boolean;
  id: number;
  provider: string;
  cpf?: any;
  name: string;
  description: string;
  submitter_request: string;
  education?: any;
  score: number;
  cover: string;
  role_ids: number[];
  institution_ids: any[];
  avatar: string;
  dspace_url?: any;
  dspace_handle?: any;
  dspace_sets?: any;
  likes_count: number;
  follows_count: number;
  learning_objects_count: number;
  collections_count: number;
  created_at: Date;
  updated_at: Date;
  terms_accepted_at?: any;
  state: string;
}

export interface Tag {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Subject {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
  theme: boolean;
}

export interface EducationalStage {
  id: number;
  name: string;
  created_at: Date;
  updated_at: Date;
}

export interface Attachment {
  id: number;
  name: string;
  retrieve_link: string;
  description: string;
  format: string;
  mime_type: string;
  size: number;
  bundle_name: string;
  learning_object_id: number;
  created_at: Date;
  updated_at: Date;
  id_dspace: string;
  thumbnail: string;
  cache_link: string;
  learning_object_attachment_id?: any;
  learning_object_attachment_id_son?: any;
}

export interface LearningObjects {
  submission_id?: any;
  state: string;
  review_average: number;
  liked: boolean;
  likes_count: number;
  downloads_count: number;
  views_count: number;
  reviewed: boolean;
  complained: boolean;
  id: number;
  name: string;
  description: string;
  author: string;
  curator?: any;
  thumbnail: string;
  object_type: string;
  language: Language[];
  default_attachment_location: string;
  default_attachment_id: number;
  default_mime_type: string;
  score: number;
  link?: any;
  software?: any;
  license: License;
  shares_count: number;
  created_at: Date;
  published_at: Date;
  terms_of_service?: any;
  updated_at: Date;
  magnetlink?: any;
  publisher: Publisher;
  tags: Tag[];
  subjects: Subject[];
  educational_stages: EducationalStage[];
  attachments: Attachment[];
}
