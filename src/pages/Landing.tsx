import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { ShoppingBag, Leaf, Truck, Shield } from 'lucide-react';
import { useEffect } from 'react';

export function Landing() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/', { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-light-green to-white">
      {/* Hero Section */}
      <div className="px-5 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          {/* Logo */}
          <div className="flex justify-center mb-8 md:mb-12">
            <img src="/logo.svg" alt="Fruitify" className="h-16 md:h-20 lg:h-24" />
          </div>

          {/* Hero Content */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-primary mb-4 md:mb-6 font-['Montserrat']">
              Welcome to Fruitify
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-text-secondary mb-8 md:mb-10 max-w-3xl mx-auto">
              Get Fresh Fruits Delivered to Your Doorstep
            </p>
            <p className="text-base md:text-lg text-text-light mb-8 md:mb-12 max-w-2xl mx-auto">
              Skip the market hassle and enjoy farm-fresh, handpicked fruits delivered instantly. 
              Stay healthy, save time, and treat yourself to nature's sweetest flavors.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                onClick={() => navigate('/signin')}
                className="bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300 px-8 py-6 rounded-xl font-bold text-lg w-full sm:w-auto"
              >
                Sign In
              </Button>
              <Button 
                onClick={() => navigate('/signup')}
                variant="outline"
                className="border-2 border-primary-green text-primary-green hover:bg-primary-green hover:text-white transition-all duration-300 px-8 py-6 rounded-xl font-bold text-lg w-full sm:w-auto"
              >
                Create Account
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mt-16 md:mt-20">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingBag className="text-primary-green" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-text-primary">Easy Shopping</h3>
              <p className="text-sm text-text-secondary">Browse and order your favorite fruits with just a few clicks</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="text-primary-green" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-text-primary">Farm Fresh</h3>
              <p className="text-sm text-text-secondary">Direct from farms to ensure maximum freshness and quality</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="text-primary-green" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-text-primary">Fast Delivery</h3>
              <p className="text-sm text-text-secondary">Get your order delivered within an hour</p>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="bg-primary-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-primary-green" size={32} />
              </div>
              <h3 className="font-bold text-lg mb-2 text-text-primary">Quality Assured</h3>
              <p className="text-sm text-text-secondary">100% satisfaction guarantee on every order</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}