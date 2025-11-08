import { useState } from 'react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

interface AppSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  orderUpdates: boolean;
  promotionalEmails: boolean;
  darkMode: boolean;
}

export function Settings() {
  const [settings, setSettings] = useState<AppSettings>({
    emailNotifications: true,
    pushNotifications: true,
    orderUpdates: true,
    promotionalEmails: false,
    darkMode: false
  });

  const handleToggle = (key: keyof AppSettings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <ProfileHeader title="Settings" backTo="/profile" />
      
      <div className="px-5 md:px-10 lg:px-20 py-6 md:py-8 max-w-3xl mx-auto">
        <div className="space-y-6">
          {/* Notification Settings */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">Notification Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-notifications" className="text-sm md:text-base font-medium">
                    Email Notifications
                  </Label>
                  <p className="text-xs md:text-sm text-text-secondary">
                    Receive notifications via email
                  </p>
                </div>
                <Switch
                  id="email-notifications"
                  checked={settings.emailNotifications}
                  onCheckedChange={() => handleToggle('emailNotifications')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="push-notifications" className="text-sm md:text-base font-medium">
                    Push Notifications
                  </Label>
                  <p className="text-xs md:text-sm text-text-secondary">
                    Receive push notifications on your device
                  </p>
                </div>
                <Switch
                  id="push-notifications"
                  checked={settings.pushNotifications}
                  onCheckedChange={() => handleToggle('pushNotifications')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="order-updates" className="text-sm md:text-base font-medium">
                    Order Updates
                  </Label>
                  <p className="text-xs md:text-sm text-text-secondary">
                    Get updates about your orders
                  </p>
                </div>
                <Switch
                  id="order-updates"
                  checked={settings.orderUpdates}
                  onCheckedChange={() => handleToggle('orderUpdates')}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="promotional-emails" className="text-sm md:text-base font-medium">
                    Promotional Emails
                  </Label>
                  <p className="text-xs md:text-sm text-text-secondary">
                    Receive special offers and promotions
                  </p>
                </div>
                <Switch
                  id="promotional-emails"
                  checked={settings.promotionalEmails}
                  onCheckedChange={() => handleToggle('promotionalEmails')}
                />
              </div>
            </CardContent>
          </Card>

          {/* App Preferences */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg md:text-xl">App Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode" className="text-sm md:text-base font-medium">
                    Dark Mode
                  </Label>
                  <p className="text-xs md:text-sm text-text-secondary">
                    Switch to dark theme
                  </p>
                </div>
                <Switch
                  id="dark-mode"
                  checked={settings.darkMode}
                  onCheckedChange={() => handleToggle('darkMode')}
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}