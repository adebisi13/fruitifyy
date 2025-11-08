import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const blogs = [
  {
    id: 1,
    date: 'july 25, 2027',
    title: 'Why Apples Are Called the "Doctor\'s fruit"',
    excerpt: 'An apple a day really might keep the doctor away!, Apples packed with fiber, antioxidants that.....',
    image: '/blog-apples.jpg'
  },
  {
    id: 2,
    date: 'january, 2027',
    title: 'Bananas: The energy booster you need',
    excerpt: 'Whether you are hitting the gym or starting your day, bananas gives you a quick energy lift. Plus they are.....',
    image: '/blog-bananas.jpg'
  },
  {
    id: 3,
    date: 'March, 2027',
    title: 'Pineapple & digestion: A Perfect Match',
    excerpt: 'This tropical fruit isn\'t just sweet, it contains bromelain, an enzyme that helps digestion and.....',
    image: '/blog-pineapple.jpg'
  }
];

export function Blogs() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 md:py-14 lg:py-16 bg-white">
      <div className="flex items-center justify-center gap-2 mb-8 md:mb-10 lg:mb-12">
        <h2 className="text-base md:text-lg font-semibold text-text-primary font-['Montserrat']">Latest Blogs</h2>
        <div className="h-10 w-px bg-gray-400"></div>
        <p className="text-sm md:text-base text-text-light font-medium">Stay updated</p>
      </div>
      
      <div className="bg-peach rounded-2xl md:rounded-3xl p-6 md:p-10 lg:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 lg:gap-20">
          {blogs.map((blog) => (
            <Card key={blog.id} className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden border-none transition-all duration-300 hover:bg-light-green/20 hover:scale-105 cursor-pointer">
              <img 
                src={blog.image} 
                alt={blog.title}
                className="w-full h-36 md:h-40 lg:h-44 object-cover"
              />
              <CardContent className="p-4 md:p-6 flex flex-col gap-3 md:gap-4">
                <p className="text-xs md:text-sm text-text-primary capitalize">{blog.date}</p>
                <h3 className="font-bold text-base md:text-lg text-text-primary capitalize leading-snug">
                  {blog.title}
                </h3>
                <p className="text-xs md:text-sm text-text-primary leading-relaxed">
                  {blog.excerpt}
                </p>
                <Button className="bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300 w-fit px-4 md:px-6 py-1.5 md:py-2 rounded-lg text-xs md:text-sm capitalize">
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}