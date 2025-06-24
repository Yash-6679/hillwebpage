import React, { useState, useEffect } from 'react';
import { ChefHat, Star, MapPin, Phone, Mail, Instagram, Facebook, ShoppingCart, Clock, Award } from 'lucide-react';

function App() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "S K 's'",
      text: "I was searching for an authentic Ooty Varkey spot in Kotagiri other than Coonoor and Ooty as I frequented Kotagiri nowadays. It was such a satisfactory experience in buying Varkey from here as you see and smell the baking Varkey trays behind the Bakery. Almost they make a lot of good Baking items like Biscuits, Brownies, Plum cakes etc, but as of now I tried only Varkey and left the other items for my next visit to Kotagiri..",
      rating: 5
    },
    {
      name: "Aswanth Karthik",
      text: "If you’re in Kotagiri, this bakery is a must-visit for fresh and delicious treats. Their brownies are hands down the best in the Nilgiris—rich, fudgy, and irresistible! The varkeys here are equally impressive, incredibly fresh, flaky, and full of traditional flavor. The quality and taste stand out, making it a perfect spot to satisfy your cravings. Don’t miss it!.",
      rating: 5
    },
    {
      name: "Dsparkly Bear",
      text: "One of the best brownies I ever had in the recent years.. Price and quality also way beyond the standard when compared to other bakers.",
      rating: 5
    }
  ];

 const products = [
    {
      category: "Brownies",
      items: [
        {
          name: "Walnut Brownie",
          description: "Dark chocolate infused with crunchy walnuts and rich whole butter — a classic bite with a nutty twist.",
          price: "Rs. 70 per Piece",
          image: "https://i.postimg.cc/dVcPpLR0/Brownie-Gen.jpg"
        },
        {
          name: "Fudge Brownie",
          description: "Decadent layers of molten chocolate fudge baked to gooey perfection — every bite a melt-in-mouth indulgence.",
          price: "Rs. 80 per Piece",
          image: "https://i.postimg.cc/9FYH3cLt/Fudge.png"
        }
      ]
    },
    {
      category: "Varkeys & Cookies",
      items: [
        {
          name: "Ooty Varkey",
          description: "Traditional flaky pastry from the Nilgiris",
          price: "Rs. 110 per pack",
          image: "https://i.postimg.cc/KYnHTNC7/Varkeys.jpg"
        },
        {
          name: "Cookies",
          description: "A trio of tastes — Salty, Sweet, and Nutty — Baked to Delight Every Craving! ",
          price: "Rs. 65 per Pack",
          image: "https://i.postimg.cc/XvSV3sw9/Cookies.jpg"
        }
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#0D0907] text-[#F5F1E8]">
     {/* Header */}
<header className="fixed top-0 w-full bg-[#0D0907]/95 backdrop-blur-sm z-50 border-b border-[#8B4513]/30">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-3">
        <img 
          src="https://i.postimg.cc/QtwcSL2R/Logo-Profile.jpg" 
          alt="Hill Brownie Logo"
          className="h-10 w-10" // Adjust size as needed
        />
        <span className="text-2xl font-serif font-bold text-[#F5F1E8]">Hill Brownie</span>
      </div>
      {/* Rest of your header code remains the same */}
    </div>
  </div>
</header>
      
   {/* Hero Section */}
<section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
    style={{
      backgroundImage: 'https://images.pexels.com/photos/4110256/pexels-photo-4110256.jpeg?auto=compress&cs=tinysrgb&w=600'
    }}
  ></div>

 <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">

  {/* Background Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-br from-[#0D0907]/90 via-[#1A0F0A]/80 to-[#0D0907]/95 z-10"></div>

  {/* Background Image */}
  <div 
    className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
    style={{
      backgroundImage: "https://i.postimg.cc/QtwcSL2R/Logo-Profile.jpg"
    }}
  ></div>

  {/* Hero Content */}
  <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
    <div className="mb-8">
      <ChefHat className="h-16 w-16 text-[#CD853F] mx-auto mb-4 drop-shadow-2xl" />
      <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#F5F1E8] mb-4 leading-tight drop-shadow-2xl">
        Hill Brownie
      </h1>
      <p className="text-2xl md:text-3xl text-[#D2B48C] font-light italic mb-8 drop-shadow-lg">
        Tradition Meets Temptation
      </p>
    </div>

    <button className="bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-[#F5F1E8] px-12 py-4 text-xl font-semibold rounded-full hover:from-[#CD853F] hover:to-[#DEB887] transform hover:scale-105 transition-all duration-300 shadow-2xl">
      Order Now
    </button>

    {/* Animated Pulse Circle */}
    <div className="w-20 h-20 bg-[#A0522D]/25 rounded-full animate-pulse mx-auto mt-10"></div>
  </div>

</section>

        {/* Floating elements */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <div className="w-16 h-16 bg-[#8B4513]/30 rounded-full animate-pulse"></div>
        </div>
        <div className="absolute top-20 right-20 opacity-15">
          <div className="w-12 h-12 bg-[#CD853F]/40 rounded-full animate-bounce"></div>
        </div>
        <div className="absolute bottom-32 right-16 opacity-10">
          <div className="w-20 h-20 bg-[#A0522D]/25 rounded-full animate-pulse"></div>
        </div>
      </section>

      {/* Product Showcase */}
      <section id="products" className="py-20 bg-[#1A0F0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-[#F5F1E8] mb-4">Our Signature Collection</h2>
            <p className="text-xl text-[#D2B48C] max-w-2xl mx-auto">
              Handcrafted with the finest ingredients and generations of baking expertise
            </p>
          </div>

          {products.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <h3 className="text-3xl font-serif font-semibold text-[#CD853F] mb-8 text-center">
                {category.category}
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                {category.items.map((product, index) => (
                  <div key={index} className="bg-[#0D0907] rounded-2xl overflow-hidden shadow-2xl hover:transform hover:scale-105 transition-all duration-300 border border-[#8B4513]/20">
                    <div className="relative h-64 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0D0907]/60 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-gradient-to-r from-[#CD853F] to-[#DEB887] text-[#0D0907] px-3 py-1 rounded-full font-bold shadow-lg">
                        {product.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-2xl font-serif font-bold text-[#F5F1E8] mb-3">{product.name}</h4>
                      <p className="text-[#D2B48C] mb-4 leading-relaxed">{product.description}</p>
                      <button className="w-full bg-gradient-to-r from-[#8B4513] to-[#A0522D] text-[#F5F1E8] py-3 rounded-lg hover:from-[#CD853F] hover:to-[#DEB887] transition-all duration-300 font-semibold shadow-lg">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* From Our Oven Section */}
      <section className="py-20 bg-[#0D0907] relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-[#8B4513] rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-24 h-24 bg-[#CD853F] rounded-full"></div>
          <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-[#A0522D] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-serif font-bold text-[#F5F1E8] mb-4">From Our Oven</h2>
            <p className="text-xl text-[#D2B48C]">Traditional European baking at its finest</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="bg-[#1A0F0A] p-8 rounded-2xl hover:bg-[#8B4513]/20 transition-all duration-300 border border-[#8B4513]/10">
                <Clock className="h-12 w-12 text-[#CD853F] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mb-3">Fresh Daily</h3>
                <p className="text-[#D2B48C]">Baked fresh every morning using time-honored techniques</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-[#1A0F0A] p-8 rounded-2xl hover:bg-[#8B4513]/20 transition-all duration-300 border border-[#8B4513]/10">
                <Award className="h-12 w-12 text-[#CD853F] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mb-3">Award Winning</h3>
                <p className="text-[#D2B48C]">Recognized for excellence in baking amonst top bakers in Nilgiris</p>
              </div>
            </div>
            
            <div className="text-center group">
              <div className="bg-[#1A0F0A] p-8 rounded-2xl hover:bg-[#8B4513]/20 transition-all duration-300 border border-[#8B4513]/10">
                <ChefHat className="h-12 w-12 text-[#CD853F] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mb-3">Master Bakers</h3>
                <p className="text-[#D2B48C]">Crafted by skilled bakers with decades of hands on experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-[#1A0F0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-5xl font-serif font-bold text-[#F5F1E8] mb-6">Our Legacy</h2>
              <p className="text-lg text-[#D2B48C] leading-relaxed mb-6">
                Founded in 2015 by Devanandh NT, an experienced baker from the plains of Coimbatore,
                a cornerstone of artisan baking for over Four decades. What started as a small neighborhood bakery 
                has grown into a beloved unit, yet we've never forgotten our roots.
              </p>
              <p className="text-lg text-[#D2B48C] leading-relaxed mb-8">
                Every recipe is a testament to Dev's vision: combining traditional techniques with 
                innovative flavors that surprise and delight. Our signature Varkeys and brownies aren't just snack and desserts—they're 
                edible stories of passion, heritage, and the pursuit of perfection.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-[#8B4513] to-[#CD853F] rounded-full flex items-center justify-center shadow-lg">
                  <ChefHat className="h-8 w-8 text-[#F5F1E8]" />
                </div>
                <div>
                  <p className="text-[#F5F1E8] font-semibold">Devanandh NT</p>
                  <p className="text-[#D2B48C]">Founder & Master Baker</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-[#0D0907] p-8 rounded-2xl shadow-2xl border border-[#8B4513]/20">
                <img 
                  src="https://i.postimg.cc/59CjcFdc/Shop-Pic.jpg" 
                  alt="Traditional baking"
                  className="w-full h-80 object-cover rounded-xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-br from-[#CD853F] to-[#DEB887] p-4 rounded-xl shadow-lg">
                  <p className="text-[#0D0907] font-bold text-2xl">10+</p>
                  <p className="text-[#0D0907] text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

{/* Testimonials */}
<section className="py-20 bg-[#0D0907]">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-5xl font-serif font-bold text-[#F5F1E8] mb-4">What Our Customers Say</h2>
      <p className="text-xl text-[#D2B48C]">Taste the love in every bite</p>
    </div>

    <div className="relative">
      <div className="bg-[#1A0F0A] p-8 rounded-2xl shadow-2xl text-center border border-[#8B4513]/20">
        <div className="flex justify-center mb-4">
          {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
            <Star key={i} className="h-6 w-6 text-[#CD853F] fill-current" />
          ))}
        </div>
        <p className="text-xl text-[#F5F1E8] mb-6 italic leading-relaxed">
          "{testimonials[currentTestimonial].text}"
        </p>
        <p className="text-[#CD853F] font-semibold text-lg">
          — {testimonials[currentTestimonial].name}
        </p>
      </div>

      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentTestimonial(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentTestimonial ? 'bg-[#CD853F]' : 'bg-[#8B4513]/40'
            }`}
          />
        ))}
      </div>
    </div>
  </div>
</section>

      {/* Contact Footer */}
      <footer id="contact" className="bg-[#1A0F0A] py-16 border-t border-[#8B4513]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <ChefHat className="h-8 w-8 text-[#CD853F]" />
                <span className="text-2xl font-serif font-bold text-[#F5F1E8]">Hill Brownie</span>
              </div>
              <p className="text-[#D2B48C] mb-6 leading-relaxed">
                Experience the perfect blend of tradition and innovation in every bite. 
                Visit us today and taste the difference that passion makes.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-gradient-to-r from-[#8B4513] to-[#CD853F] p-3 rounded-full hover:from-[#CD853F] hover:to-[#DEB887] transition-all duration-300 shadow-lg">
                  <Instagram className="h-5 w-5 text-[#F5F1E8]" />
                </a>
                <a href="#" className="bg-gradient-to-r from-[#8B4513] to-[#CD853F] p-3 rounded-full hover:from-[#CD853F] hover:to-[#DEB887] transition-all duration-300 shadow-lg">
                  <Facebook className="h-5 w-5 text-[#F5F1E8]" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-[#CD853F]" />
                  <span className="text-[#D2B48C]"> Mettupalayam Road, Kotagiri, The Nilgiris, Tamil Nadu, India- 643217</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-[#CD853F]" />
                  <span className="text-[#D2B48C]">+91 7867020202; +91 7867030303</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-[#CD853F]" />
                  <span className="text-[#D2B48C]">hillbrowniie@gmail.com</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-serif font-bold text-[#F5F1E8] mb-6">Visit Us</h3>
              <div className="bg-[#0D0907] p-4 rounded-xl border border-[#8B4513]/20">
                <div className="bg-[#8B4513]/20 h-48 rounded-lg flex items-center justify-center">
                  <MapPin className="h-12 w-12 text-[#CD853F]" />
                </div>
                <p className="text-[#D2B48C] mt-4 text-sm">
                  Open Daily: 9:30 AM - 9:00 PM<br />
                  Weekend Hours: 9:00 AM - 9:00 PM
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-[#8B4513]/20 mt-12 pt-8 text-center">
            <p className="text-[#D2B48C]">
               Crafted with ❤️ and chocolate
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;