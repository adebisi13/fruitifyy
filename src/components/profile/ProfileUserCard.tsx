import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

interface ProfileUserCardProps {
  name: string;
  email: string;
  avatar: string;
}

export function ProfileUserCard({ name, email, avatar }: ProfileUserCardProps) {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="flex items-center gap-3 md:gap-4 p-4 md:p-5 bg-gray-100 border-none shadow-sm">
      <Avatar className="h-12 w-12 md:h-14 md:w-14">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback className="bg-primary-green text-white text-base md:text-lg font-semibold">
          {initials}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1 min-w-0">
        <h3 className="font-bold text-base md:text-lg text-text-primary truncate">
          {name}
        </h3>
        <p className="text-xs md:text-sm text-text-secondary truncate">
          {email}
        </p>
      </div>
    </Card>
  );
}