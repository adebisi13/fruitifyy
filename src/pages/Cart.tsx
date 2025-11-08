import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  bgColor: string;
}

const recommendedItems = [
  {
    id: 5,
    name: 'Kiwi',
    image: 'https://images.unsplash.com/photo-1585059895524-72359e06133a?w=200&h=200&fit=crop',
    bgColor: 'bg-green-200'
  },
  {
    id: 6,
    name: 'Apples',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop',
    bgColor: 'bg-red-200'
  },
  {
    id: 7,
    name: 'Oranges',
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=200&h=200&fit=crop',
    bgColor: 'bg-orange-200'
  }
];

export function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Oranges',
      price: 2.46,
      quantity: 5,
      image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=200&h=200&fit=crop',
      bgColor: 'bg-orange-200'
    },
    {
      id: 2,
      name: 'Strawberries',
      price: 4.00,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop',
      bgColor: 'bg-pink-200'
    },
    {
      id: 3,
      name: 'Pineapple',
      price: 1.35,
      quantity: 3,
      image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop',
      bgColor: 'bg-yellow-200'
    },
    {
      id: 4,
      name: 'Grapes',
      price: 4.50,
      quantity: 4,
      image: '/grapes.jpg',
      bgColor: 'bg-purple-200'
    }
  ]);

  const updateQuantity = (id: number, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const addToCart = (item: typeof recommendedItems[0]) => {
    const existingItem = cartItems.find(cartItem => cartItem.name === item.name);
    if (existingItem) {
      updateQuantity(existingItem.id, 1);
    } else {
      const newItem: CartItem = {
        id: Math.max(...cartItems.map(i => i.id), 0) + 1,
        name: item.name,
        price: Math.random() * 3 + 1.5, // Random price for demo
        quantity: 1,
        image: item.image,
        bgColor: item.bgColor
      };
      setCartItems([...cartItems, newItem]);
    }
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-bg-light">
      {/* Header */}
      <div className="bg-white px-5 md:px-10 lg:px-20 py-4 md:py-6 shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <ArrowLeft size={24} className="text-text-primary" />
          </Link>
          <h1 className="text-xl md:text-2xl font-bold text-text-primary">Cart</h1>
        </div>
      </div>

      <div className="px-5 md:px-10 lg:px-20 py-6 md:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <Card className="p-8 md:p-12 text-center">
                <p className="text-text-secondary text-lg">Your cart is empty</p>
                <Link to="/">
                  <Button className="mt-4 bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300">
                    Continue Shopping
                  </Button>
                </Link>
              </Card>
            ) : (
              cartItems.map((item) => (
                <Card key={item.id} className="p-4 md:p-6 flex items-center gap-4 md:gap-6 hover:shadow-lg transition-shadow">
                  <div className={`${item.bgColor} rounded-2xl p-3 md:p-4 flex-shrink-0`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base md:text-lg text-text-primary mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm md:text-base font-semibold text-primary-green">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 md:gap-3 bg-gray-100 rounded-full px-2 md:px-3 py-1 md:py-1.5">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="p-1 hover:bg-white rounded-full transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus size={16} className="text-text-primary" />
                    </button>
                    <span className="font-semibold text-sm md:text-base min-w-[20px] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="p-1 hover:bg-white rounded-full transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus size={16} className="text-text-primary" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0"
                    aria-label="Remove item"
                  >
                    <Trash2 size={20} className="text-red-500" />
                  </button>
                </Card>
              ))
            )}

            {/* Recommended Section */}
            {cartItems.length > 0 && (
              <div className="mt-8 md:mt-12">
                <h2 className="text-lg md:text-xl font-bold text-text-primary mb-4 md:mb-6">
                  Recommended for you
                </h2>
                <div className="grid grid-cols-3 gap-3 md:gap-4">
                  {recommendedItems.map((item) => (
                    <Card
                      key={item.id}
                      className="p-3 md:p-4 cursor-pointer hover:shadow-lg transition-all hover:scale-105"
                      onClick={() => addToCart(item)}
                    >
                      <div className={`${item.bgColor} rounded-xl p-2 md:p-3 mb-2 md:mb-3`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-16 md:h-20 lg:h-24 object-cover rounded-lg"
                        />
                      </div>
                      <p className="text-xs md:text-sm font-semibold text-text-primary text-center">
                        {item.name}
                      </p>
                    </Card>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Summary */}
          {cartItems.length > 0 && (
            <div className="lg:col-span-1">
              <Card className="p-6 md:p-8 sticky top-6">
                <h2 className="text-lg md:text-xl font-bold text-text-primary mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-3 md:space-y-4 mb-6">
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-text-secondary">Subtotal</span>
                    <span className="font-semibold">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm md:text-base">
                    <span className="text-text-secondary">Delivery</span>
                    <span className="font-semibold">$2.00</span>
                  </div>
                  <div className="border-t pt-3 md:pt-4 flex justify-between text-base md:text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary-green">
                      ${(total + 2).toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300 py-3 md:py-4 rounded-xl font-bold text-sm md:text-base">
                  Proceed to Checkout
                </Button>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}