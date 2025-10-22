import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "../components/ui/button"
import { ArrowRight, Star, Heart, Sparkles, ArrowLeft, ShoppingCart, Plus, Minus } from "lucide-react"
import { SmartCartButton } from '../components/SmartCartButton'

gsap.registerPlugin(ScrollTrigger)

interface Craft {
  id: string;
  name: string;
  price: number;
  about: string;
  category: string;
  img: string;
  rating?: number;
  reviews?: number;
}

const categoryData: Record<string, { name: string; icon: string; color: string; crafts: Craft[] }> = {
  'wedding-crafts': {
    name: 'Wedding Crafts',
    icon: '💍',
    color: 'from-red-400 to-pink-500',
    crafts: [
      { id: 'wc1', name: 'Wedding Gift Box', price: 1200, about: 'Beautifully crafted gift boxes for wedding favors and presents.', category: 'Wedding Crafts', img: '/services/service1.jpg', rating: 4.8, reviews: 45 },
      { id: 'wc2', name: 'Sindur Kouto', price: 450, about: 'Sacred vermillion container for wedding rituals.', category: 'Wedding Crafts', img: '/services/service2.jpg', rating: 4.9, reviews: 32 },
      { id: 'wc3', name: 'Ring Platter', price: 800, about: 'Elegant ring exchange platter for weddings.', category: 'Wedding Crafts', img: '/services/service3.jpg', rating: 4.7, reviews: 28 },
      { id: 'wc4', name: 'Bride Mukut', price: 1800, about: 'Traditional Bengali bride crown design.', category: 'Wedding Crafts', img: '/services/service4.jpg', rating: 4.9, reviews: 67 },
      { id: 'wc5', name: 'Groom Mukut', price: 1500, about: 'Classic Bengali groom crown design.', category: 'Wedding Crafts', img: '/services/service5.jpg', rating: 4.8, reviews: 54 },
      { id: 'wc6', name: 'Wedding Thali Set', price: 1400, about: 'Complete thali set for wedding ceremonies.', category: 'Wedding Crafts', img: '/services/service6.jpg', rating: 4.9, reviews: 89 },
    ]
  },
  'invitation-cards': {
    name: 'Invitation Cards',
    icon: '💌',
    color: 'from-blue-400 to-indigo-500',
    crafts: [
      { id: 'ic1', name: 'Handmade Silk Invitation', price: 180, about: 'Custom designed silk invitation cards for all occasions.', category: 'Invitation Cards', img: '/services/service7.jpg', rating: 4.8, reviews: 56 },
      { id: 'ic2', name: 'Traditional Bengali Card', price: 120, about: 'Authentic Bengali design invitation cards.', category: 'Invitation Cards', img: '/services/service8.jpg', rating: 4.7, reviews: 43 },
      { id: 'ic3', name: 'Gold Embossed Card', price: 250, about: 'Premium invitation cards with gold embossing.', category: 'Invitation Cards', img: '/services/service9.jpg', rating: 4.9, reviews: 78 },
      { id: 'ic4', name: 'Wedding Invitation Set', price: 200, about: 'Complete wedding invitation card set.', category: 'Invitation Cards', img: '/services/service10.jpg', rating: 4.8, reviews: 65 },
    ]
  },
  'traditional-items': {
    name: 'Traditional Items',
    icon: '🏺',
    color: 'from-green-400 to-emerald-500',
    crafts: [
      { id: 'ti1', name: 'Traditional Kulo', price: 650, about: 'Authentic Bengali winnowing fan for ceremonies.', category: 'Traditional Items', img: '/services/service11.jpg', rating: 4.8, reviews: 34 },
      { id: 'ti2', name: 'Gachkouto Set', price: 900, about: 'Traditional Bengali betel nut container set.', category: 'Traditional Items', img: '/services/service12.jpg', rating: 4.7, reviews: 28 },
      { id: 'ti3', name: 'Decorative Hadi', price: 550, about: 'Traditional Bengali serving platter.', category: 'Traditional Items', img: '/services/service13.jpg', rating: 4.9, reviews: 41 },
      { id: 'ti4', name: 'Traditional Comb Set', price: 350, about: 'Bengali traditional comb and mirror set.', category: 'Traditional Items', img: '/services/service14.jpg', rating: 4.6, reviews: 22 },
    ]
  },
  'decorative-sets': {
    name: 'Decorative Sets',
    icon: '🎨',
    color: 'from-purple-400 to-violet-500',
    crafts: [
      { id: 'ds1', name: 'Wedding Thali Set', price: 1400, about: 'Complete thali set for wedding ceremonies.', category: 'Decorative Sets', img: '/services/service15.jpg', rating: 4.9, reviews: 89 },
      { id: 'ds2', name: 'Annaprashan Set', price: 1000, about: 'Special thali set for baby feeding ceremony.', category: 'Decorative Sets', img: '/services/service16.jpg', rating: 4.8, reviews: 56 },
      { id: 'ds3', name: 'Birthday Thali', price: 750, about: 'Decorative thali for birthday celebrations.', category: 'Decorative Sets', img: '/services/service17.jpg', rating: 4.7, reviews: 43 },
      { id: 'ds4', name: 'Decorative Thali Collection', price: 1200, about: 'Beautiful decorative thali set for special occasions.', category: 'Decorative Sets', img: '/services/service18.jpg', rating: 4.9, reviews: 67 },
    ]
  },
  'jewelry-boxes': {
    name: 'Jewelry Boxes',
    icon: '💎',
    color: 'from-yellow-400 to-orange-500',
    crafts: [
      { id: 'jb1', name: 'Jewelry Box Set', price: 2000, about: 'Elegant jewelry storage with traditional motifs.', category: 'Jewelry Boxes', img: '/services/service19.jpg', rating: 4.9, reviews: 78 },
      { id: 'jb2', name: 'Premium Jewelry Box', price: 2800, about: 'Luxury jewelry storage with intricate designs.', category: 'Jewelry Boxes', img: '/services/service20.jpg', rating: 4.8, reviews: 65 },
      { id: 'jb3', name: 'Traditional Jewelry Box', price: 1600, about: 'Classic Bengali jewelry box design.', category: 'Jewelry Boxes', img: '/services/service21.jpg', rating: 4.7, reviews: 52 },
    ]
  },
  'festival-items': {
    name: 'Festival Items',
    icon: '🎊',
    color: 'from-cyan-400 to-teal-500',
    crafts: [
      { id: 'fi1', name: 'Pujo Thali Set', price: 1100, about: 'Festive thali set for Durga Puja celebrations.', category: 'Festival Items', img: '/services/service22.jpg', rating: 4.8, reviews: 89 },
      { id: 'fi2', name: 'Lakshmi Pujo Set', price: 850, about: 'Complete set for Lakshmi Puja celebrations.', category: 'Festival Items', img: '/services/service23.jpg', rating: 4.9, reviews: 67 },
      { id: 'fi3', name: 'Kali Pujo Thali', price: 750, about: 'Special thali set for Kali Puja rituals.', category: 'Festival Items', img: '/services/service24.jpg', rating: 4.7, reviews: 45 },
      { id: 'fi4', name: 'Durga Pujo Decoration', price: 1800, about: 'Decorative items for Durga Puja pandal.', category: 'Festival Items', img: '/services/service1.jpg', rating: 4.9, reviews: 78 },
      { id: 'fi5', name: 'Saraswati Pujo Set', price: 650, about: 'Educational ceremony thali set.', category: 'Festival Items', img: '/services/service2.jpg', rating: 4.8, reviews: 56 },
    ]
  }
};

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [visibleItems, setVisibleItems] = useState(6);
  
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const craftsRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    const reveal = (root: HTMLElement | null, sel = '[data-animate="heading"]') => {
      if (!root) return;
      const nodes = root.querySelectorAll(sel);
      nodes.forEach((el) => {
        gsap.set(el, { y: 26, opacity: 0 });
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }),
        });
      });
    };
    [heroRef, craftsRef].forEach(r => reveal(r.current));
    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  if (!category || !categoryData[category]) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Category Not Found</h1>
          <Link to="/made-my-day/more">
            <Button>Back to Collections</Button>
          </Link>
        </div>
      </div>
    );
  }

  const categoryInfo = categoryData[category];
  const displayedCrafts = categoryInfo.crafts.slice(0, visibleItems);


  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, categoryInfo.crafts.length));
  };

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[60vh] overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${categoryInfo.color}`}>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Back button at top right */}
            <div className="absolute top-8 right-8">
              <Link to="/made-my-day/more" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
                Back to Collections
              </Link>
            </div>
            
            <div className="text-center space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
                  <Sparkles className="w-4 h-4 mr-2" />
                  {categoryInfo.name}
                </div>
                
                <h1 data-animate="heading" className="text-4xl lg:text-6xl font-heading font-bold leading-tight text-white">
                  {categoryInfo.name}
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Discover our collection of authentic Bengali {categoryInfo.name.toLowerCase()}. 
                  Each piece is carefully crafted with traditional techniques and modern elegance.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-slate-900 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Shop Now
                </Button>
                <Link to="/cart">
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                    View Cart
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crafts Section */}
      <section ref={craftsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              {categoryInfo.name} Collection
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse through our complete collection of {categoryInfo.name.toLowerCase()}.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedCrafts.map((craft) => (
              <div key={craft.id} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <div className="text-6xl">{categoryInfo.icon}</div>
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Heart className="w-4 h-4 text-slate-600 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">{craft.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{craft.about}</p>
                  
                  {craft.rating && (
                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(craft.rating!) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                        ))}
                      </div>
                      <span className="text-sm text-slate-600">({craft.reviews})</span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-2xl font-bold text-red-600">₹{craft.price.toLocaleString()}</div>
                  </div>
                  
                  <SmartCartButton item={craft} />
                </div>
              </div>
            ))}
          </div>
          
          {visibleItems < categoryInfo.crafts.length && (
            <div className="text-center mt-12">
              <Button 
                onClick={loadMore}
                size="lg" 
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Load More Crafts <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h5 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Need something custom?
              </h5>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                We also create custom {categoryInfo.name.toLowerCase()} tailored to your specific requirements.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Contact Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                Custom Order
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
