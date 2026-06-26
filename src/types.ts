export interface Service {
  id: string;
  title: string;
  description: string;
  category: 'Renovasi' | 'Plafon' | 'Kelistrikan' | 'Finishing' | 'Konstruksi';
  iconName: string;
  image: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}

export interface SurveyForm {
  name: string;
  phone: string;
  address: string;
  serviceType: string;
  buildingSize: string;
  budget: string;
  startDate: string;
  notes: string;
  hasPhoto: boolean;
}
