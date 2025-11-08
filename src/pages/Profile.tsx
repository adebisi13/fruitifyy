import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Pencil, 
  Bell, 
  Settings, 
  Shield, 
  CircleHelp, 
  LogOut 
} from 'lucide-react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { ProfileUserCard } from '@/components/profile/ProfileUserCard';
import { ProfileMenuItem } from '@/components/profile/ProfileMenuItem';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

export function Profile() {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogoutClick = () => {
    setShowLogoutDialog(true);
  };

  const handleLogoutConfirm = () => {
    signOut();
    setShowLogoutDialog(false);
    navigate('/landing', { replace: true });
  };

  const menuItems = [
    {
      id: 'edit-profile',
      icon: Pencil,
      label: 'Edit Profile',
      href: '/profile/edit'
    },
    {
      id: 'notifications',
      icon: Bell,
      label: 'Notifications',
      href: '/notifications'
    },
    {
      id: 'settings',
      icon: Settings,
      label: 'Settings',
      href: '/settings'
    },
    {
      id: 'privacy',
      icon: Shield,
      label: 'Privacy Policy',
      href: '/privacy-policy'
    },
    {
      id: 'help',
      icon: CircleHelp,
      label: 'Help',
      href: '/help'
    },
    {
      id: 'logout',
      icon: LogOut,
      label: 'Log Out',
      onClick: handleLogoutClick,
      variant: 'danger' as const
    }
  ];

  return (
    <div className="min-h-screen bg-bg-light">
      <ProfileHeader title="My Profile" backTo="/" />
      
      <div className="px-5 md:px-10 lg:px-20 py-6 md:py-8 max-w-2xl mx-auto">
        <div className="space-y-4 md:space-y-5">
          {/* User Info Card */}
          {user && (
            <ProfileUserCard 
              name={user.name}
              email={user.email}
              avatar={user.avatar}
            />
          )}

          {/* Menu Items */}
          <div className="space-y-3 md:space-y-4">
            {menuItems.map((item) => (
              <ProfileMenuItem
                key={item.id}
                icon={item.icon}
                label={item.label}
                href={item.href}
                onClick={item.onClick}
                variant={item.variant}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Logout Confirmation Dialog */}
      <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Logout</DialogTitle>
            <DialogDescription>
              Are you sure you want to log out? You'll need to sign in again to access your account.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button
              variant="outline"
              onClick={() => setShowLogoutDialog(false)}
              className="w-full sm:w-auto"
            >
              Cancel
            </Button>
            <Button
              onClick={handleLogoutConfirm}
              className="w-full sm:w-auto bg-red-500 hover:bg-red-600 text-white"
            >
              Log Out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}