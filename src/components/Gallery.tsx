import { Camera } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const galleryImages = [
  {
    url: 'https://images.pexels.com/photos/28965344/pexels-photo-28965344.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Fresh Displays',
  },
  {
    url: 'https://images.pexels.com/photos/5112575/pexels-photo-5112575.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Croissants & Breads',
  },
  {
    url: 'https://images.pexels.com/photos/19784917/pexels-photo-19784917.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Quality Ingredients',
  },
  {
    url: 'https://images.pexels.com/photos/20602641/pexels-photo-20602641.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Artisan Breads',
  },
  {
    url: 'https://images.pexels.com/photos/8641826/pexels-photo-8641826.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Baking Essentials',
  },
  {
    url: 'https://images.pexels.com/photos/32459865/pexels-photo-32459865.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    label: 'Our Bakery',
  },
];

export default function Gallery() {
  return (
    <section className="py-20 bg-[#0D0907]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Camera className="h-10 w-10 text-[#CD853F] mx-auto mb-4" />
            <h2 className="text-5xl font-serif font-bold text-[#F5F1E8] mb-4">A Glimpse Inside</h2>
            <p className="text-xl text-[#D2B48C]">The craft, the ingredients, the warmth</p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="group relative overflow-hidden rounded-xl aspect-square">
                <img
                  src={image.url}
                  alt={image.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0907] via-[#0D0907]/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-[#F5F1E8] font-serif text-lg font-semibold">{image.label}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
