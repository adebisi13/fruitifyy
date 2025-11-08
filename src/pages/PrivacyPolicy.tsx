import { useState } from 'react';
import { ProfileHeader } from '@/components/profile/ProfileHeader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Send, User } from 'lucide-react';

export function PrivacyPolicy() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[field];
      return newErrors;
    });
    setIsSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setIsLoading(true);
    try {
      // Simulate email sending (in real app, integrate with EmailJS or Formspree)
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      setIsSuccess(true);
    } catch (error) {
      setErrors({ message: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-light">
      <ProfileHeader title="Privacy Policy" backTo="/profile" />
      
      <div className="px-5 md:px-10 lg:px-20 py-6 md:py-8 max-w-4xl mx-auto">
        <div className="space-y-6">
          {/* Privacy Policy Content */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Our Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-sm md:text-base text-text-secondary">
              <p>
                At Fruitify, we are committed to protecting your privacy and ensuring the security of your personal information.
              </p>
              
              <h3 className="font-bold text-text-primary text-base md:text-lg mt-4">Information We Collect</h3>
              <p>
                We collect information you provide directly to us, such as when you create an account, place an order, or contact us for support.
              </p>
              
              <h3 className="font-bold text-text-primary text-base md:text-lg mt-4">How We Use Your Information</h3>
              <p>
                We use the information we collect to provide, maintain, and improve our services, process your orders, and communicate with you.
              </p>
              
              <h3 className="font-bold text-text-primary text-base md:text-lg mt-4">Data Security</h3>
              <p>
                We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.
              </p>
            </CardContent>
          </Card>

          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl md:text-2xl">Contact Us</CardTitle>
              <p className="text-sm text-text-secondary mt-2">
                Have questions about our privacy policy? Send us a message.
              </p>
            </CardHeader>
            <CardContent>
              {isSuccess && (
                <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-green-700 text-sm font-medium">
                    Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="contact-name" className="text-sm font-medium">
                    Your Name
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="contact-name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`pl-10 ${errors.name ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="contact-email" className="text-sm font-medium">
                    Your Email
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                    <Input
                      id="contact-email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
                    />
                  </div>
                  {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="contact-message" className="text-sm font-medium">
                    Message
                  </Label>
                  <Textarea
                    id="contact-message"
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    className={`min-h-[120px] resize-none ${errors.message ? 'border-red-500' : ''}`}
                  />
                  {errors.message && <p className="text-red-500 text-xs">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300"
                >
                  {isLoading ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send size={18} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}