import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "../components/ui/button"
import { ArrowRight, Star, Award, Heart, Sparkles, ChevronLeft, ChevronRight, Gift, Crown, Palette } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function MadeMyDay() {
  const heroRef = React.useRef<HTMLDivElement | null>(null)
  const aboutRef = React.useRef<HTMLDivElement | null>(null)
  const servicesRef = React.useRef<HTMLDivElement | null>(null)
  const craftsRef = React.useRef<HTMLDivElement | null>(null)
  const featuresRef = React.useRef<HTMLDivElement | null>(null)
  const feedbackRef = React.useRef<HTMLDivElement | null>(null)
  const ctaRef = React.useRef<HTMLDivElement | null>(null)
  const craftsScrollRef = React.useRef<HTMLDivElement | null>(null)
  const autoScrollRef = React.useRef<number | null>(null)

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
    ;[heroRef, aboutRef, servicesRef, craftsRef, featuresRef, feedbackRef, ctaRef].forEach(r =>
      reveal(r.current)
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  // Crafts scrolling functions
  const scrollCrafts = (direction: 'left' | 'right') => {
    if (craftsScrollRef.current) {
      const cardWidth = 320 // Width of one card + gap
      const currentScroll = craftsScrollRef.current.scrollLeft
      const maxScroll = craftsScrollRef.current.scrollWidth - craftsScrollRef.current.clientWidth
      const halfScroll = maxScroll / 2
      
      let newScroll
      if (direction === 'left') {
        newScroll = currentScroll - cardWidth
        if (newScroll < 0) {
          newScroll = halfScroll - cardWidth
        }
      } else {
        newScroll = currentScroll + cardWidth
        if (newScroll > halfScroll) {
          newScroll = 0
        }
      }
      
      stopAutoScroll()
      craftsScrollRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
      
      setTimeout(() => {
        startAutoScroll()
      }, 1000)
    }
  }

  const startAutoScroll = () => {
    if (autoScrollRef.current) return
    
    autoScrollRef.current = setInterval(() => {
      if (craftsScrollRef.current) {
        const scrollAmount = 2.5
        const currentScroll = craftsScrollRef.current.scrollLeft
        const maxScroll = craftsScrollRef.current.scrollWidth - craftsScrollRef.current.clientWidth
        const halfScroll = maxScroll / 2
        
        if (currentScroll >= halfScroll - 2) {
          craftsScrollRef.current.scrollLeft = 0
        } else {
          craftsScrollRef.current.scrollLeft += scrollAmount
        }
      }
    }, 16)
  }

  const stopAutoScroll = () => {
    if (autoScrollRef.current) {
      clearInterval(autoScrollRef.current)
      autoScrollRef.current = null
    }
  }

  React.useEffect(() => {
    startAutoScroll()
    return () => stopAutoScroll()
  }, [])

  const specialServices = [
    { title: 'Wedding Gachkouto', img: '/MadeMyDay/image-made(8).jpg', to: '/made-my-day/more' },
    { title: 'Invitation Cards', img: '/MadeMyDay/image-made(17).jpg', to: '/made-my-day/more' },
    { title: 'Decorative Items', img: '/MadeMyDay/image-made(11).jpg', to: '/made-my-day/more' },
    { title: 'Thali Set', img: '/MadeMyDay/image-made(9).jpg', to: '/made-my-day/more' },
    { title: 'Bride Groom Topor and Mukut', img: '/MadeMyDay/image-made(21).jpg', to: '/made-my-day/more' },
    { title: 'Decorative Gift pack', img: '/MadeMyDay/image-made(26).jpg', to: '/made-my-day/more' }
  ]

  const HANDMADE_CRAFTS = [
    { name: 'Wedding Gift Box', img: '/MadeMyDay/image-made(23).jpg', price: '₹500 - ₹1500', about: 'Beautifully crafted gift boxes for wedding favors and presents.' },
    { name: 'Handmade Invitation', img: '/MadeMyDay/image-made(31).jpg', price: '₹50 - ₹200', about: 'Custom designed invitation cards for all occasions.' },
    { name: 'Traditional Kulo', img: '/MadeMyDay/image-made(14).jpg', price: '₹300 - ₹800', about: 'Authentic Bengali winnowing fan for ceremonies.' },
    { name: 'Jewelry Box Set', img: '/MadeMyDay/image-made(33).jpg', price: '₹800 - ₹2500', about: 'Elegant jewelry storage with traditional motifs.' },
    { name: 'Gachkouto Set', img: '/MadeMyDay/image-made(10).jpg', price: '₹400 - ₹1200', about: 'Traditional Bengali betel nut container set.' },
    { name: 'Sindur Kouto', img: '/MadeMyDay/image-made(16).jpg', price: '₹200 - ₹600', about: 'Sacred vermillion container for wedding rituals.' },
    { name: 'Wedding Thali Set', img: '/MadeMyDay/image-made(15).jpg', price: '₹600 - ₹1800', about: 'Complete thali set for wedding ceremonies.' },
    { name: 'Pujo Thali Set', img: '/MadeMyDay/image-made(34).jpg', price: '₹500 - ₹1500', about: 'Festive thali set for Durga Puja celebrations.' },
    { name: 'Annaprashan Set', img: '/MadeMyDay/image-made(36).jpg', price: '₹400 - ₹1200', about: 'Special thali set for baby feeding ceremony.' },
    { name: 'Birthday Thali', img: '/MadeMyDay/image-made(6).jpg', price: '₹300 - ₹900', about: 'Decorative thali for birthday celebrations.' },
    { name: 'Decorative Hadi', img: '/MadeMyDay/image-made(30).jpg', price: '₹250 - ₹700', about: 'Traditional Bengali serving platter.' },
    { name: 'Ring Platter', img: '/MadeMyDay/image-made(35).jpg', price: '₹200 - ₹600', about: 'Elegant ring exchange platter for weddings.' },
    { name: 'Bride Mukut', img: '/MadeMyDay/image-made(27).jpg', price: '₹800 - ₹2000', about: 'Traditional Bengali bride crown design.' },
    { name: 'Groom Mukut', img: '/MadeMyDay/image-made(20).jpg', price: '₹600 - ₹1500', about: 'Classic Bengali groom crown design.' },
  ]

  const features = [
    { icon: '🎨', title: 'Handcrafted Excellence', sub: 'Every piece is meticulously crafted by skilled artisans.' },
    { icon: '💎', title: 'Premium Materials', sub: 'High-quality materials ensuring durability and beauty.' },
    { icon: '🎯', title: 'Custom Designs', sub: 'Personalized designs tailored to your special occasions.' },
    { icon: '🏺', title: 'Traditional Heritage', sub: 'Authentic Bengali craftsmanship passed down generations.' },
    { icon: '⚡', title: 'Quick Delivery', sub: 'Fast and reliable delivery across the region.' },
    { icon: '💬', title: 'Expert Consultation', sub: 'Professional guidance for choosing the perfect items.' },
    { icon: '🎁', title: 'Gift Wrapping', sub: 'Beautiful gift wrapping service for all purchases.' },
    { icon: '🔧', title: 'Customization', sub: 'Modify designs and sizes according to your needs.' },
  ]

  const feedback = [
    {
      name: 'Priya Chatterjee',
      avatar: '/test1.jpg',
      item: 'Wedding Gift Box',
      text: 'Absolutely stunning craftsmanship! The gift boxes were the highlight of our wedding favors.',
    },
    {
      name: 'Rajesh Mukherjee',
      avatar: '/test2.jpg',
      item: 'Handmade Invitations',
      text: 'Beautiful invitation cards that perfectly captured the essence of our Bengali wedding.',
    },
    {
      name: 'Sneha Das',
      avatar: '/test3.jpg',
      item: 'Traditional Thali Set',
      text: 'The thali set was so elegant and traditional. Our guests were amazed by the quality.',
    },
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
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>

      {/* Hero Section - Similar to GhotiNaBangal */}
      <section ref={heroRef} className="relative w-full min-h-[100vh] overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-400 via-orange-500 to-amber-500">
          <div className="absolute inset-0 bg-black/30">
            <img src="/MadeMyDay/hero-made.png" className='h-full w-full' alt="" />
          </div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 min-h-[100vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-red-600">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-red-900 text-sm font-medium">
                    <Heart className="w-4 h-4 mr-2" />
                    Handmade Bengali Crafts
                  </div>
                  
                  <h1 data-animate="heading" className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                    <span className="text-red-600">Made My Moments</span>
                  </h1>
                  
                  <p className="text-xl text-red-600 leading-relaxed max-w-2xl">
                    Exquisite handmade Bengali crafts for weddings, festivals, and special occasions. 
                    Traditional artistry meets modern elegance in every piece we create.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/made-my-day/more">
                  <Button size="lg" className="bg-white text-red-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  </Link>
                  <Link to="/made-my-day/more">
                    <Button size="lg" variant="outline" className="border-2 border-white text-red-600 hover:bg-white hover:text-red-600 px-8 py-4 text-lg font-semibold rounded-xl">
                      View All Crafts
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-900">100+</div>
                    <div className="text-sm text-red-900">Crafts Made</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-900">99%</div>
                    <div className="text-sm text-red-900">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-900">4.5★</div>
                    <div className="text-sm text-red-900">Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Craft Images Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Craft Image 1 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">
                        <img src="/MadeMyDay/image-made(10).jpg" alt="" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Craft Image 2 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                    <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">
                        <img src="/MadeMyDay/image-made(18).jpg" alt="" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Craft Image 3 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300 -mt-4">
                    <div className="aspect-square bg-gradient-to-br from-amber-200 to-amber-300 flex items-center justify-center">
                      <span className="text-amber-600 font-bold text-lg">
                        <img src="/MadeMyDay/image-made(11).jpg" alt="" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Craft Image 4 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-4">
                    <div className="aspect-square bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-lg">
                        <img src="/MadeMyDay/image-made(9).jpg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-red-900">500+</div>
                  <div className="text-sm text-red-600">Crafts</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-red-900">5★</div>
                  <div className="text-sm text-red-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  About Us
                </div>
                <h2 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900">
                  Crafting Memories
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We specialize in creating beautiful handmade Bengali crafts that add elegance and tradition to your special occasions. 
                  From wedding ceremonies to festivals, our artisans bring years of expertise to every piece.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Each craft is made with love, attention to detail, and respect for traditional Bengali artistry, 
                  ensuring your celebrations are truly memorable.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/made-my-day/more">
                  <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                    View All Crafts
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video 
                  src=".\MadeMyDay\From KlickPin CF Priyanshu _ Illustrator on Instagram ✨ Purvi & Aayesh ✨ From the vibrant heart of Delhi to the serene hills of Ooty this printed invite tells a story beyond … [Video] [Video] in 2025 _ Unique weddi.mp4"
                  className="w-full h-[400px] object-cover"
                  poster="/ghoti/about-1-poster.jpg" 
                  autoPlay 
                  loop 
                  muted 
                  aria-label="About showcase video"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Services */}
      <section ref={servicesRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h3 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Special Services
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive handmade craft services for all your special occasions and celebrations.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialServices.map((s) => (
              <div key={s.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                    <img src={s.img} alt="carft image" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-heading font-bold text-lg">{s.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <Link to={s.to} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all duration-300">
                    View our crafts <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Handmade Crafts */}
      <section ref={craftsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Heart className="w-4 h-4 mr-2" />
              Our Crafts
            </div>
            <h3 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Handmade Bengali Crafts
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our collection of authentic Bengali handmade crafts with traditional designs and modern appeal.
            </p>
          </div>
          
          {/* Scrollable Crafts Container */}
          <div className="relative">
            {/* Scrollable wrapper */}
            <div 
              ref={craftsScrollRef}
              className="overflow-x-auto scrollbar-hide pb-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
            >
              <div className="flex gap-6 min-w-max px-2">
                {/* First set of crafts */}
                {HANDMADE_CRAFTS.map((c) => (
                  <div key={`first-${c.name}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0 w-80">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                        <img src={c.img} alt="crafts Images" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">{c.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{c.about}</p>
                      <div className="text-lg font-bold text-red-600">{c.price}</div>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for infinite scroll */}
                {HANDMADE_CRAFTS.map((c) => (
                  <div key={`second-${c.name}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0 w-80">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                        <img src={c.img} alt="crafts Images" />
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">{c.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed mb-3">{c.about}</p>
                      <div className="text-lg font-bold text-red-600">{c.price}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Manual Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => scrollCrafts('left')}
                className="bg-white hover:bg-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-900 group"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={() => scrollCrafts('right')}
                className="bg-white hover:bg-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-900 group"
              >
                <ChevronRight className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
            
            {/* Explore All Crafts Button */}
            <div className="text-center mt-12">
              <Link to="/made-my-day/more">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Explore All Crafts <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h4 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Why choose us
            </h4>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section ref={feedbackRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h4 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Customer feedback
            </h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear what our satisfied customers have to say about their handmade craft experience with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {feedback.map((fb) => (
              <div key={fb.name} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center">
                    <img src={fb.avatar} alt={fb.name} className="w-12 h-12 rounded-full object-cover" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-slate-900">{fb.name}</div>
                    <div className="text-sm text-slate-600">Purchased: {fb.item}</div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">{fb.text}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section ref={ctaRef} className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h5 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Ready to make your day special?
              </h5>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                You want to connect with us and create beautiful handmade crafts for your special occasions.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Connect us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/made-my-day/more">
                <Button size="lg" variant="outline" className="border-2 border-white text-slate-900 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                  View All Crafts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
