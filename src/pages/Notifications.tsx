import { useState } from 'react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Bell, Package, Tag, Info, Inbox } from 'lucide-react';

interface Notification {
  id: string;
  type: 'order' | 'promotion' | 'system' | 'delivery';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
}

const mockNotifications: Notification[] = [
  {
    id: '1',
    type: 'order',
    title: 'Order Delivered',
    message: 'Your order #12345 has been delivered successfully',
    timestamp: new Date(Date.now() - 3600000),
    read: false
  },
  {
    id: '2',
    type: 'promotion',
    title: 'Special Offer',
    message: 'Get 20% off on all citrus fruits this week!',
    timestamp: new Date(Date.now() - 86400000),
    read: true
  },
  {
    id: '3',
    type: 'delivery',
    title: 'Out for Delivery',
    message: 'Your order #12344 is out for delivery',
    timestamp: new Date(Date.now() - 7200000),
    read: false
  }
];

export function Notifications() {
  const [notifications] = useState<Notification[]>(mockNotifications);

  const formatTime = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    if (days < 7) return `${days}d ago`;
    return date.toLocaleDateString();
  };

  const getIcon = (type: string) => {
    switch (type) {
      case 'order':
        return <Package className="text-blue-500" size={24} />;
      case 'promotion':
        return <Tag className="text-green-500" size={24} />;
      case 'delivery':
        return <Package className="text-orange-500" size={24} />;
      case 'system':
        return <Info className="text-gray-500" size={24} />;
      default:
        return <Bell className="text-gray-500" size={24} />;
    }
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <ProfileHeader title="Notifications" backTo="/profile" />
      
      <div className="px-5 md:px-10 lg:px-20 py-6 md:py-8 max-w-3xl mx-auto">
        {notifications.length === 0 ? (
          <Card className="p-12 md:p-16 text-center">
            <div className="flex flex-col items-center gap-4">
              <div className="bg-gray-100 p-6 rounded-full">
                <Inbox className="text-gray-400" size={48} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-text-primary">
                Oops, nothing to see here!
              </h3>
              <p className="text-text-secondary">
                You don't have any notifications yet
              </p>
            </div>
          </Card>
        ) : (
          <div className="space-y-3 md:space-y-4">
            {notifications.map((notification) => (
              <Card 
                key={notification.id} 
                className={`p-4 md:p-5 hover:shadow-lg transition-shadow cursor-pointer ${
                  !notification.read ? 'bg-blue-50 border-l-4 border-l-primary-green' : ''
                }`}
              >
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="flex-shrink-0 mt-1">
                    {getIcon(notification.type)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-sm md:text-base text-text-primary">
                        {notification.title}
                      </h3>
                      {!notification.read && (
                        <Badge className="bg-primary-green text-white text-xs flex-shrink-0">
                          New
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs md:text-sm text-text-secondary mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-gray-400">
                      {formatTime(notification.timestamp)}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}