import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { useState } from 'react';

const slides = [
  {
    id: 1,
    title: 'Skip The Market\nGet Fresh Fruits\nInstantly',
    description: 'Why waste hours at the market when freshness can come to you? Enjoy handpicked, farm-fresh fruits delivered right to your doorstep. Stay healthy, save time, and treat yourself to nature\'s sweetest flavors without the hassle.',
    image: '/hero-basket.png',
    bgColor: 'bg-primary-orange',
    textColor: 'text-white',
  },
  {
    id: 2,
    title: 'No more queues, Just Freshness',
    description: 'Forget waiting in long checkout lines only to find bruised fruit. We guarantee top-tier quality and flawless delivery every time. Order and receive your vibrant, delicious fruits quickly, giving you back precious minutes in your day.',
    image: '/carousel-coconut-bowl.png',
    bgColor: 'bg-blue-400',
    textColor: 'text-white',
  },
  {
    id: 3,
    title: 'Farm-Fresh At Your Doorstep',
    description: 'We cut out your stress to bring you the best seasonal produce direct from the farm. This means unbeatable flavor and nutrition delivered efficiently. Simplify your grocery routine and get more value with every fresh order.',
    image: '/carousel-orange-coconut.png',
    bgColor: 'bg-yellow-400',
    textColor: 'text-black',
  },
  {
    id: 4,
    title: 'Stop Waiting,\nStart Biting\nRight Now',
    description: 'You shouldn\'t have to wait to feel healthy and happy. Our Express Fruit Box arrives in less than an hour, making sure you\'re never short on delicious and nutritious treats. Discover effortless freshness today.',
    image: '/carousel-watermelon.svg',
    bgColor: 'bg-red-500',
    textColor: 'text-white',
  },
];

export function Hero() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap());
    });

    // Auto-play functionality
    const interval = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section className="relative overflow-hidden">
      <Carousel setApi={setApi} className="w-full" opts={{ loop: true }}>
        <CarouselContent className="-ml-0 h-[600px] md:h-[700px] lg:h-[800px]">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0 h-full">
              <div className={`${slide.bgColor} px-5 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20 w-full h-full flex items-center`}>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-10 w-full">
                  <div className="flex flex-col gap-6 md:gap-8 lg:gap-12 w-full lg:max-w-xl order-2 lg:order-1">
                    <div className="flex flex-col gap-4 md:gap-6 text-center lg:text-left">
                      <h1 className={`text-3xl md:text-4xl lg:text-[58px] font-bold leading-tight lg:leading-[87px] ${slide.textColor} font-['Montserrat'] whitespace-pre-line`}>
                        {slide.title}
                      </h1>
                      <p className={`text-xs md:text-sm lg:text-description ${slide.id === 3 ? 'text-black' : 'text-white/95'} leading-relaxed`}>
                        {slide.description}
                      </p>
                    </div>
                    <Button className="bg-primary-green text-white hover:bg-white hover:text-primary-green border-2 border-primary-green transition-all duration-300 px-6 md:px-8 py-4 md:py-6 rounded-lg font-bold text-sm md:text-base w-fit mx-auto lg:mx-0">
                      Order Now
                    </Button>
                  </div>
                  
                  <div className="w-full lg:flex-1 order-1 lg:order-2 flex items-center justify-center h-full">
                    <img 
                      src={slide.image} 
                      alt={slide.title.split('\n')[0]} 
                      className="w-full h-full max-w-md md:max-w-lg lg:max-w-none mx-auto object-contain max-h-[400px] md:max-h-[500px] lg:max-h-[600px]"
                    />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-4 md:left-8 lg:left-12 bg-white/80 hover:bg-white" />
        <CarouselNext className="right-4 md:right-8 lg:right-12 bg-white/80 hover:bg-white" />
      </Carousel>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              current === index ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}