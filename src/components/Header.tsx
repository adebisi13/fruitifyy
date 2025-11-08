import { useState } from 'react';
import { ShoppingCart, Bell, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();

  return (
    <header className="bg-light-green px-5 md:px-10 lg:px-20 py-4 md:py-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img src="/logo.svg" alt="Fruitify" className="h-12 md:h-16 lg:h-20" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-12">
          <a href="#home" className="text-nav text-text-secondary hover:text-text-primary transition-colors">
            Home
          </a>
          <a href="#services" className="text-nav text-text-secondary hover:text-text-primary transition-colors">
            Services
          </a>
          <a href="#about" className="text-nav text-text-secondary hover:text-text-primary transition-colors">
            About Us
          </a>
        </nav>
        
        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Button className="bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300 px-6 py-2 rounded-lg font-bold">
            Contact Us
          </Button>
          
          <Link to="/cart" className="relative p-2 hover:bg-white/20 rounded-lg transition-colors">
            <ShoppingCart size={24} className="text-text-secondary" />
          </Link>
          
          <button className="relative p-2 hover:bg-white/20 rounded-lg transition-colors">
            <Bell size={24} className="text-text-secondary" />
            <Badge className="absolute -top-1 -right-1 bg-red-500 text-white h-5 w-5 flex items-center justify-center p-0 text-xs">
              3
            </Badge>
          </button>
          
          <Link to="/profile" className="hover:opacity-80 transition-opacity">
            <Avatar className="h-10 w-10 cursor-pointer">
              <AvatarImage src={user?.avatar || 'https://i.pravatar.cc/150?img=1'} alt={user?.name || 'User'} />
              <AvatarFallback>{user?.name?.charAt(0).toUpperCase() || 'U'}</AvatarFallback>
            </Avatar>
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button 
          className="lg:hidden p-2 hover:bg-white/20 rounded-lg transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X size={24} className="text-text-primary" />
          ) : (
            <Menu size={24} className="text-text-primary" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden mt-4 pb-4 border-t border-white/20 pt-4">
          <nav className="flex flex-col gap-4">
            <a 
              href="#home" 
              className="text-nav text-text-secondary hover:text-text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className="text-nav text-text-secondary hover:text-text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#about" 
              className="text-nav text-text-secondary hover:text-text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </a>
            <Link 
              to="/profile" 
              className="text-nav text-text-secondary hover:text-text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              My Profile
            </Link>
            <Link 
              to="/cart" 
              className="text-nav text-text-secondary hover:text-text-primary transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cart
            </Link>
            <Button className="bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300 px-6 py-2 rounded-lg font-bold w-full mt-2">
              Contact Us
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}