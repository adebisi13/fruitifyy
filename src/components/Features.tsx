import DeliveryTruckIcon from '@/components/icons/DeliveryTruckIcon';
import Clock24Icon from '@/components/icons/Clock24Icon';
import FreshOrangeIcon from '@/components/icons/FreshOrangeIcon';

const features = [
  {
    icon: DeliveryTruckIcon,
    title: 'Swift  Delivery',
    description: 'Your fruits arrive fresh and on-time, ensuring you enjoy them at their peak of freshness'
  },
  {
    icon: Clock24Icon,
    title: 'We Are Active 24/7',
    description: 'Day or night, place your fruit orders anytime and enjoy fast and reliable delivery.'
  },
  {
    icon: FreshOrangeIcon,
    title: 'Always Fresh',
    description: 'Every fruit is carefully handpicked to guarantee top quality and natural taste.'
  }
];

export function Features() {
  return (
    <section className="bg-peach px-5 md:px-10 lg:px-20 py-10 md:py-16 lg:py-20">
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-20 lg:gap-60">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center gap-4 md:gap-5">
              <Icon width={50} height={50} className="md:w-[65px] md:h-[65px]" />
              <div className="flex flex-col gap-2 md:gap-3">
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold tracking-tight text-text-primary font-['Inter']">{feature.title}</h3>
                <p className="text-sm md:text-base lg:text-body text-text-secondary max-w-xs leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}