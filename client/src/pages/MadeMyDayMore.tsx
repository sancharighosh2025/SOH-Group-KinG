import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "../components/ui/button"
import { ArrowRight, Star, Heart, Sparkles, ArrowLeft, Gift, ShoppingCart } from "lucide-react"
import { SmartCartButton } from '../components/SmartCartButton'
import FixedCartButton from '../components/FixedCartButton'

gsap.registerPlugin(ScrollTrigger)

export default function MadeMyDayMore() {
  const heroRef = React.useRef<HTMLDivElement | null>(null)
  const categoriesRef = React.useRef<HTMLDivElement | null>(null)
  const featuredRef = React.useRef<HTMLDivElement | null>(null)
  const allCraftsRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const reveal = (root: HTMLElement | null, sel = '[data-animate="heading"]') => {
      if (!root) return
      const nodes = root.querySelectorAll(sel)
      nodes.forEach((el) => {
        gsap.set(el, { y: 26, opacity: 0 })
        ScrollTrigger.create({
          trigger: el,
          start: 'top 85%',
          once: true,
          onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }),
        })
      })
    }
    ;[heroRef, categoriesRef, featuredRef, allCraftsRef].forEach(r =>
      reveal(r.current)
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const categories = [
    { name: 'Wedding Crafts', icon: '💍', count: 25, color: 'from-red-400 to-pink-500' },
    { name: 'Invitation Cards', icon: '💌', count: 15, color: 'from-blue-400 to-indigo-500' },
    { name: 'Traditional Items', icon: '🏺', count: 20, color: 'from-green-400 to-emerald-500' },
    { name: 'Decorative Sets', icon: '🎨', count: 18, color: 'from-purple-400 to-violet-500' },
    { name: 'Jewelry Boxes', icon: '💎', count: 12, color: 'from-yellow-400 to-orange-500' },
    { name: 'Festival Items', icon: '🎊', count: 22, color: 'from-cyan-400 to-teal-500' },
  ]

  const featuredCrafts = [
    { 
      id: 'fc1',
      name: 'Premium Wedding Gift Box Set', 
      img: '/services/service1.jpg', 
      price: 1800, 
      originalPrice: 2500,
      discount: '28%',
      rating: 4.9,
      reviews: 127,
      about: 'Luxury gift box set with traditional Bengali motifs, perfect for wedding favors.',
      category: 'Wedding Crafts'
    },
    { 
      id: 'fc2',
      name: 'Handmade Silk Invitation Cards', 
      img: '/services/service2.jpg', 
      price: 180, 
      originalPrice: 300,
      discount: '40%',
      rating: 4.8,
      reviews: 89,
      about: 'Elegant silk invitation cards with gold embossing and traditional designs.',
      category: 'Invitation Cards'
    },
    { 
      id: 'fc3',
      name: 'Traditional Kulo Set', 
      img: '/services/service3.jpg', 
      price: 650, 
      originalPrice: 800,
      discount: '19%',
      rating: 4.7,
      reviews: 156,
      about: 'Authentic Bengali winnowing fan set for traditional ceremonies.',
      category: 'Traditional Items'
    },
    { 
      id: 'fc4',
      name: 'Decorative Thali Collection', 
      img: '/services/service4.jpg', 
      price: 1200, 
      originalPrice: 1500,
      discount: '20%',
      rating: 4.9,
      reviews: 203,
      about: 'Beautiful decorative thali set for weddings, pujas, and special occasions.',
      category: 'Decorative Sets'
    },
  ]

  const allCrafts = [
    { id: 'ac1', name: 'Wedding Gift Box', img: '/services/service5.jpg', price: 1200, about: 'Beautifully crafted gift boxes for wedding favors and presents.', category: 'Wedding Crafts' },
    { id: 'ac2', name: 'Handmade Invitation', img: '/services/service6.jpg', price: 150, about: 'Custom designed invitation cards for all occasions.', category: 'Invitation Cards' },
    { id: 'ac3', name: 'Traditional Kulo', img: '/services/service7.jpg', price: 650, about: 'Authentic Bengali winnowing fan for ceremonies.', category: 'Traditional Items' },
    { id: 'ac4', name: 'Jewelry Box Set', img: '/services/service8.jpg', price: 2000, about: 'Elegant jewelry storage with traditional motifs.', category: 'Jewelry Boxes' },
    { id: 'ac5', name: 'Gachkouto Set', img: '/services/service9.jpg', price: 900, about: 'Traditional Bengali betel nut container set.', category: 'Traditional Items' },
    { id: 'ac6', name: 'Sindur Kouto', img: '/services/service10.jpg', price: 450, about: 'Sacred vermillion container for wedding rituals.', category: 'Wedding Crafts' },
    { id: 'ac7', name: 'Wedding Thali Set', img: '/services/service11.jpg', price: 1400, about: 'Complete thali set for wedding ceremonies.', category: 'Decorative Sets' },
    { id: 'ac8', name: 'Pujo Thali Set', img: '/services/service12.jpg', price: 1100, about: 'Festive thali set for Durga Puja celebrations.', category: 'Festival Items' },
    { id: 'ac9', name: 'Annaprashan Set', img: '/services/service13.jpg', price: 1000, about: 'Special thali set for baby feeding ceremony.', category: 'Decorative Sets' },
    { id: 'ac10', name: 'Birthday Thali', img: '/services/service14.jpg', price: 750, about: 'Decorative thali for birthday celebrations.', category: 'Decorative Sets' },
    { id: 'ac11', name: 'Decorative Hadi', img: '/services/service15.jpg', price: 550, about: 'Traditional Bengali serving platter.', category: 'Traditional Items' },
    { id: 'ac12', name: 'Ring Platter', img: '/services/service16.jpg', price: 800, about: 'Elegant ring exchange platter for weddings.', category: 'Wedding Crafts' },
    { id: 'ac13', name: 'Bride Mukut', img: '/services/service17.jpg', price: 1800, about: 'Traditional Bengali bride crown design.', category: 'Wedding Crafts' },
    { id: 'ac14', name: 'Groom Mukut', img: '/services/service18.jpg', price: 1500, about: 'Classic Bengali groom crown design.', category: 'Wedding Crafts' },
    { id: 'ac15', name: 'Lakshmi Pujo Set', img: '/services/service19.jpg', price: 850, about: 'Complete set for Lakshmi Puja celebrations.', category: 'Festival Items' },
    { id: 'ac16', name: 'Kali Pujo Thali', img: '/services/service20.jpg', price: 750, about: 'Special thali set for Kali Puja rituals.', category: 'Festival Items' },
    { id: 'ac17', name: 'Durga Pujo Decoration', img: '/services/service21.jpg', price: 1800, about: 'Decorative items for Durga Puja pandal.', category: 'Festival Items' },
    { id: 'ac18', name: 'Saraswati Pujo Set', img: '/services/service22.jpg', price: 650, about: 'Educational ceremony thali set.', category: 'Festival Items' },
    { id: 'ac19', name: 'Premium Jewelry Box', img: '/services/service23.jpg', price: 2800, about: 'Luxury jewelry storage with intricate designs.', category: 'Jewelry Boxes' },
    { id: 'ac20', name: 'Traditional Comb Set', img: '/services/service24.jpg', price: 350, about: 'Bengali traditional comb and mirror set.', category: 'Traditional Items' },
  ]


  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #dc2626 0%, #ea580c 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-orange-500 to-amber-500">
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 min-h-[60vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Back button at top right */}
            <div className="absolute top-8 right-8">
              <Link to="/made-my-day" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 transition-all duration-300">
                <ArrowLeft className="w-4 h-4" />
                Back to Made My Day
              </Link>
            </div>
            
            <div className="text-center space-y-8">
              <div className="space-y-6">
                
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
                  <Heart className="w-4 h-4 mr-2" />
                  Complete Collection
                </div>
                
                <h1 data-animate="heading" className="text-4xl lg:text-6xl font-heading font-bold leading-tight text-white">
                  All Handmade Crafts
                </h1>
                
                <p className="text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                  Explore our complete collection of authentic Bengali handmade crafts. 
                  From wedding essentials to festival decorations, find everything you need for your special occasions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Start Shopping
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-red-600 hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl">
                  Custom Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section ref={categoriesRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Categories
            </div>
            <h3 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Shop by Category
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse our handmade crafts organized by categories to find exactly what you're looking for.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className="text-6xl">{category.icon}</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                <div className="p-6">
                  <h4 className="font-heading font-bold text-xl text-slate-900 mb-2">{category.name}</h4>
                  <p className="text-slate-600 mb-4">{category.count} items available</p>
                  <Link to={`/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all duration-300">
                      View Collection <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Crafts */}
      <section ref={featuredRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Featured Products
            </div>
            <h3 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Featured Crafts
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our most popular and highly-rated handmade crafts with special discounts.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCrafts.map((craft) => (
              <div key={craft.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <Gift className="w-16 h-16 text-red-500" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {craft.discount} OFF
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Heart className="w-5 h-5 text-slate-600 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-slate-500 mb-2">{craft.category}</div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-2 line-clamp-2">{craft.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">{craft.about}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < Math.floor(craft.rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-300'}`} />
                      ))}
                    </div>
                    <span className="text-sm text-slate-600">({craft.reviews})</span>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-lg font-bold text-red-600">₹{craft.price.toLocaleString()}</span>
                    <span className="text-sm text-slate-500 line-through">₹{craft.originalPrice.toLocaleString()}</span>
                  </div>
                  
                  <SmartCartButton item={craft} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Crafts Section */}
      <section ref={allCraftsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Gift className="w-4 h-4 mr-2" />
              Complete Collection
            </div>
            <h3 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              All Handmade Crafts
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Browse through our complete collection of authentic Bengali handmade crafts.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {allCrafts.map((craft) => (
              <div key={craft.name} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                  <Gift className="w-12 h-12 text-red-500" />
                  <div className="absolute top-3 right-3">
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-2">
                      <Heart className="w-4 h-4 text-slate-600 hover:text-red-500 cursor-pointer transition-colors duration-300" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="text-xs text-slate-500 mb-1">{craft.category}</div>
                  <h4 className="font-heading font-bold text-lg text-slate-900 mb-2 line-clamp-2">{craft.name}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed mb-3 line-clamp-2">{craft.about}</p>
                  <div className="text-lg font-bold text-red-600 mb-3">₹{craft.price.toLocaleString()}</div>
                  <SmartCartButton item={craft} size="sm" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              Load More Crafts <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
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
                We also create custom handmade crafts tailored to your specific requirements and preferences.
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

      {/* Fixed Cart Button */}
      <FixedCartButton />
    </div>
  )
}
