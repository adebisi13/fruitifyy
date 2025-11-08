export function FreshBites() {
  return (
    <section className="px-5 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20 bg-white">
      <h2 className="text-2xl md:text-3xl lg:text-[40px] font-bold leading-tight lg:leading-[45px] tracking-tight text-text-primary text-center mb-10 md:mb-16 lg:mb-20 font-['Montserrat']">
        Fresh Bites and Healthy Life
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
        <div className="flex-1 flex flex-col gap-8 md:gap-12 lg:gap-16">
          <p className="text-sm md:text-base lg:text-body text-text-secondary leading-relaxed">
            Fruits are more than just a quick snack, they're one of the simplest ways to take care of your body every day. Packed with vitamins, minerals, and antioxidants, they help strengthen your immune system, keep your skin glowing, and give you the natural energy you need to stay active. Instead of reaching for processed foods, enjoying an apple, a bunch of grapes, or a juicy orange gives your body real nourishment in the most refreshing way. Eating fruits regularly can improve digestion, boost your mood, and even lower the risk of common health issues over time. With every bite, you're not just enjoying delicious flavor...you're choosing a healthier, happier lifestyle, one fruit at a time.
            <br /><br />
            The history of fruits is not just about food but about human civilization itself. From survival food for early humans to luxury items in royal courts, from global trade to modern supermarkets, fruits mirror human journeys of migration, culture, health, and economy.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <img 
              src="https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=400&h=300&fit=crop" 
              alt="Person picking oranges"
              className="w-full h-48 md:h-64 lg:h-72 object-cover rounded-2xl md:rounded-3xl"
            />
            <img 
              src="https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&h=300&fit=crop" 
              alt="Family enjoying watermelon"
              className="w-full h-72 object-cover rounded-3xl"
            />
          </div>
        </div>
        
        <div className="flex-shrink-0 w-full lg:w-auto">
          <img 
            src="/woman-orange.jpg" 
            alt="Woman eating orange"
            className="w-full lg:w-96 h-64 md:h-96 lg:h-[500px] object-cover rounded-2xl md:rounded-3xl mx-auto"
          />
        </div>
      </div>
    </section>
  );
}