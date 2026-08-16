import { Video } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function Gallery() {
  return (
    <section className="py-20 bg-[#0D0907]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <Video className="h-10 w-10 text-[#CD853F] mx-auto mb-4" />
            <h2 className="text-5xl font-serif font-bold text-[#F5F1E8] mb-4">A Glimpse Inside</h2>
            <p className="text-xl text-[#D2B48C]">Experience the warmth of our bakery</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#8B4513]/20 group">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto object-cover"
            >
              <source src="/gallery-video.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0907]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
