import type { LucideIcon } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Link } from 'react-router-dom';

interface ProfileMenuItemProps {
  icon: LucideIcon;
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: 'default' | 'danger';
}

export function ProfileMenuItem({ 
  icon: Icon, 
  label, 
  href, 
  onClick,
  variant = 'default' 
}: ProfileMenuItemProps) {
  const content = (
    <Card className="flex items-center justify-between p-4 md:p-5 cursor-pointer hover:bg-gray-50 transition-colors border-none shadow-sm bg-gray-100">
      <div className="flex items-center gap-3 md:gap-4">
        <Icon 
          size={20} 
          className={variant === 'danger' ? 'text-red-500' : 'text-primary-green'} 
        />
        <span className={`font-medium text-sm md:text-base ${
          variant === 'danger' ? 'text-red-500' : 'text-text-primary'
        }`}>
          {label}
        </span>
      </div>
      <ChevronRight size={20} className="text-gray-400" />
    </Card>
  );

  if (href) {
    return (
      <Link to={href} className="block">
        {content}
      </Link>
    );
  }

  return (
    <div onClick={onClick}>
      {content}
    </div>
  );
}