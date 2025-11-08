import { Card, CardContent } from '@/components/ui/card';

const categories = [
  {
    id: 1,
    name: 'Oranges',
    description: 'Packed with Vitamin C to boost your immunity, improves skin health, aid collagen production and keep you refreshed all day.',
    image: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=400&h=300&fit=crop',
    hoverColor: 'hover:bg-primary-orange'
  },
  {
    id: 2,
    name: 'Apples',
    description: 'Crunchy and heart-healthy, apples are rich in fiber and anti-oxidants which support healthy digestion.',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400&h=300&fit=crop',
    hoverColor: 'hover:bg-red-500'
  },
  {
    id: 3,
    name: 'Bananas',
    description: 'Creamy, sweet, and packed with potassium to boost your energy. They aid digestion and also maintain body wellness.',
    image: 'https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=400&h=300&fit=crop',
    hoverColor: 'hover:bg-primary-green'
  },
  {
    id: 4,
    name: 'Grapes',
    description: 'Juicy little powerhouses loaded with antioxidants. Grapes support heart health and keeps you refreshed.',
    image: '/grapes.jpg',
    hoverColor: 'hover:bg-purple-500'
  }
];

export function Categories() {
  return (
    <section className="bg-primary-green px-5 md:px-10 lg:px-20 py-10 md:py-14 lg:py-16">
      <h2 className="text-2xl md:text-3xl lg:text-[32px] font-bold leading-tight lg:leading-9 tracking-tight text-text-primary mb-8 md:mb-10 lg:mb-12 font-['Inter']">
        Top Categories
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 lg:gap-14">
        {categories.map((category) => (
          <Card 
            key={category.id} 
            className={`group rounded-3xl shadow-lg overflow-hidden border-4 border-white bg-white transition-all duration-300 hover:scale-105 cursor-pointer ${category.hoverColor}`}
          >
            <div className="p-4">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-40 md:h-44 lg:h-48 object-cover"
                />
              </div>
              <CardContent className="p-0">
                <h3 className="font-bold text-base md:text-lg mb-2 text-text-primary group-hover:text-white transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs md:text-sm text-text-secondary leading-relaxed group-hover:text-white/90 transition-colors">
                  {category.description}
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}