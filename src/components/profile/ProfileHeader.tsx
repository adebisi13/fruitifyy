import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProfileHeaderProps {
  title: string;
  backTo?: string;
}

export function ProfileHeader({ title, backTo = '/' }: ProfileHeaderProps) {
  return (
    <div className="bg-white px-5 md:px-10 lg:px-20 py-4 md:py-6 shadow-sm">
      <div className="flex items-center gap-4">
        <Link 
          to={backTo} 
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          aria-label="Go back"
        >
          <ArrowLeft size={24} className="text-text-primary" />
        </Link>
        <h1 className="text-xl md:text-2xl font-bold text-text-primary">
          {title}
        </h1>
      </div>
    </div>
  );
}