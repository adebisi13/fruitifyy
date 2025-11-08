import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Aisha Afolabi',
    role: 'CEO',
    image: 'https://i.pravatar.cc/150?img=5',
    rating: 5,
    review: 'Fruitify made it easy for me to get fresh fruits delivered to me. I don\'t even go to the market for fruits anymore.'
  },
  {
    name: 'Daniel James',
    role: 'Gym Instructor',
    image: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    review: 'I order fruits and they arrive within 15-20 minutes looking fresh and tasty.'
  },
  {
    name: 'Sarah Connor',
    role: 'Product Designer',
    image: 'https://i.pravatar.cc/150?img=9',
    rating: 5,
    review: 'Fruitify keeps me consistent with my healthy lifestyle. I\'m able to get fresh fruits whenever I need them'
  }
];

export function Testimonials() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20 bg-white">
      <div className="flex flex-col items-center gap-8 md:gap-10 lg:gap-12">
        <Badge variant="secondary" className="bg-gray-300 text-text-light px-4 md:px-6 py-1.5 md:py-2 text-sm md:text-lg rounded-full">
          Testimonial
        </Badge>
        
        <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[45px] text-text-primary text-center font-['Montserrat']">
          Reviews From Those Who Enjoy The Freshness
        </h2>
        
        <div className="w-full bg-light-green/40 rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-light-green/60 border-none rounded-2xl md:rounded-3xl p-4 md:p-6">
                <CardContent className="p-0 flex flex-col items-center text-center gap-3 md:gap-4">
                  <div className="flex flex-col items-center gap-1 md:gap-2">
                    <h4 className="font-bold text-base md:text-lg">{testimonial.name}</h4>
                    <p className="text-xs md:text-sm text-text-secondary">{testimonial.role}</p>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={16} fill="#FFD700" stroke="#FFD700" />
                      ))}
                    </div>
                  </div>
                  
                  <Avatar className="h-12 w-12 md:h-16 md:w-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                  </Avatar>
                  
                  <p className="text-xs md:text-sm text-text-primary leading-relaxed">
                    {testimonial.review}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}