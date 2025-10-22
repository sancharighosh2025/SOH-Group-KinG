import React from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "../components/ui/button"
import { ArrowRight, Star, Award, Utensils, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function GhotiNaBangal() {
  const heroRef = React.useRef<HTMLDivElement | null>(null)
  const aboutRef = React.useRef<HTMLDivElement | null>(null)
  const servicesRef = React.useRef<HTMLDivElement | null>(null)
  const menuRef = React.useRef<HTMLDivElement | null>(null)
  const featuresRef = React.useRef<HTMLDivElement | null>(null)
  const feedbackRef = React.useRef<HTMLDivElement | null>(null)
  const ctaRef = React.useRef<HTMLDivElement | null>(null)
  const menuScrollRef = React.useRef<HTMLDivElement | null>(null)
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
    ;[heroRef, aboutRef, servicesRef, menuRef, featuresRef, feedbackRef, ctaRef].forEach(r =>
      reveal(r.current)
    )
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  // Menu scrolling functions
  const scrollMenu = (direction: 'left' | 'right') => {
    if (menuScrollRef.current) {
      const cardWidth = 320 // Width of one card + gap
      const currentScroll = menuScrollRef.current.scrollLeft
      const maxScroll = menuScrollRef.current.scrollWidth - menuScrollRef.current.clientWidth
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
      menuScrollRef.current.scrollTo({
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
      if (menuScrollRef.current) {
        const scrollAmount = 2.5
        const currentScroll = menuScrollRef.current.scrollLeft
        const maxScroll = menuScrollRef.current.scrollWidth - menuScrollRef.current.clientWidth
        const halfScroll = maxScroll / 2
        
        if (currentScroll >= halfScroll - 2) {
          menuScrollRef.current.scrollLeft = 0
        } else {
          menuScrollRef.current.scrollLeft += scrollAmount
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
    { title: 'Catering & Buffet', img: '/Ghoti/imageGhoti(2).jpg', to: '/ghoti/menu' },
    { title: 'Live Counters', img: '/Ghoti/imageGhoti(7).jpg', to: '/ghoti/menu' },
    { title: 'Decor & Setup', img: '/Ghoti/imageGhoti(8).jpg', to: '/ghoti/menu' },
  ]

  const ALL_DISHES = [
    { name: 'Kosha Mangsho', img: '/Ghoti/imageGhoti(12).jpg', about: 'Slow-cooked caramelized goat curry with warm spices.' },
    { name: 'Ilish Bhapa', img: '/Ghoti/imageGhoti(13).jpg', about: 'Steamed Hilsa in mustard-coconut emulsion.' },
    { name: 'Chingri Malai Curry', img: '/Ghoti/imageGhoti(18).jpg', about: 'Prawns simmered in coconut milk & garam masala.' },
    { name: 'Basanti Pulao', img: '/Ghoti/imageGhoti(15).jpg', about: 'Saffron-ghee rice with cashews & raisins.' },
    { name: 'Koraishutir Kochuri', img: '/Ghoti/imageGhoti(21).jpg', about: 'Flaky bread stuffed with spiced green peas.' },
    { name: 'Doi Katla', img: '/Ghoti/imageGhoti(22).jpg', about: 'Creamy yogurt gravy with Katla fish.' },
    { name: 'Chicken Rezala', img: '/Ghoti/imageGhoti(19).jpg', about: 'Silky white gravy perfumed with kewra & ghee.' },
    { name: 'Mutton Biryani', img: '/Ghoti/imageGhoti(16).jpg', about: 'Kolkata biryani with potato and saffron rice.' },
    { name: 'Begun Bhaja', img: '/Ghoti/imageGhoti(17).jpg', about: 'Crisp eggplant fritters with mustard salt.' },
    { name: 'Mochar Ghonto', img: '/Ghoti/imageGhoti(20).jpg', about: 'Banana blossom curry with coconut & spices.' },
    { name: 'Paturi (Fish)', img: '/Ghoti/imageGhoti(14).jpg', about: 'Leaf-wrapped fish with mustard paste, steamed.' },
    { name: 'Mishti Doi', img: '/Ghoti/imageGhoti(23).jpg', about: 'Caramel-set sweet curd, chilled.' },
  ]

  const features = [
    { icon: '🥘', title: 'Authentic Taste', sub: 'Heirloom recipes from both Ghoti & Bangal kitchens.' },
    { icon: '🍽️', title: 'Premium Service', sub: 'Attentive staffing, polished buffet & live counters.' },
    { icon: '🌿', title: 'Fresh Ingredients', sub: 'Daily-sourced produce and high-grade spices.' },
    { icon: '🎉', title: 'Event Ready', sub: 'Decor, setup, and logistics for seamless experiences.' },
    { icon: '🕒', title: 'On-time Delivery', sub: 'Disciplined prep and precise service windows.' },
    { icon: '💬', title: 'Easy Coordination', sub: 'Clear communication, tasting, and customization.' },
    { icon: '🔥', title: 'Live Stations', sub: 'Kachori, phuchka, kebab & more—made on-site.' },
    { icon: '🧹', title: 'Clean & Safe', sub: 'Hygienic prep, compliant handling, tidy wrap-up.' },
  ]

  const feedback = [
    {
      name: 'Sohini Das',
      avatar: '/test4.jpg',
      dish: 'Ilish Bhapa',
      text: 'Perfect balance of mustard heat and coconut cream—melt-in-mouth.',
    },
    {
      name: 'Arindam Roy',
      avatar: '/test1.jpg',
      dish: 'Kosha Mangsho',
      text: 'Deep caramelized notes, tender pieces, exactly like old Kolkata weddings.',
    },
    {
      name: 'Megha Sen',
      avatar: 'test5.jpg',
      dish: 'Chingri Malai',
      text: 'Silky curry and plump prawns; guests kept asking for refills.',
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #1e293b 0%, #64748b 100%);
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

      {/* Hero Section - Swiggy Style */}
      <section ref={heroRef} className="relative w-full min-h-[100vh] overflow-hidden">
        {/* Background Image Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-500">
          <img src="/Ghoti/hero-poster.png" className='h-full w-full' alt="" />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 min-h-[100vh] flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8 text-white">
                <div className="space-y-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
                    <Utensils className="w-4 h-4 mr-2" />
                    Heritage Bengali Catering
                  </div>
                  
                  <h1 data-animate="heading" className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                    <span className="text-white">Ghoti na Bangal</span>
                  </h1>
                  
                  <p className="text-xl text-white/90 leading-relaxed max-w-2xl">
                    Heritage Bengali flavors, elegant setups, and seamless service for weddings, receptions, and all celebrations.
                    Experience authentic taste with modern presentation.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-white text-orange-600 hover:bg-white/90 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Order Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Link to="/ghoti/menu">
                    <Button size="lg" variant="outline" className="border-2 border-white text-orange-600 hover:bg-whit px-8 py-4 text-lg font-semibold rounded-xl">
                      View Menu
                    </Button>
                  </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">200+</div>
                    <div className="text-sm text-white/80">Events Catered</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">98%</div>
                    <div className="text-sm text-white/80">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">5★</div>
                    <div className="text-sm text-white/80">Average Rating</div>
                  </div>
                </div>
              </div>

              {/* Right Content - Food Images Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {/* Food Image 1 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="aspect-square bg-gradient-to-br from-orange-200 to-orange-300 flex items-center justify-center">
                      <span className="text-orange-600 font-bold text-lg">
                        <img src="/Ghoti/hero-image(1).jpg" alt="" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Food Image 2 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 mt-8">
                    <div className="aspect-square bg-gradient-to-br from-red-200 to-red-300 flex items-center justify-center">
                      <span className="text-red-600 font-bold text-lg">
                        <img src="/Ghoti/hero-image(2).jpg" alt="" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Food Image 3 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-300 -mt-4">
                    <div className="aspect-square bg-gradient-to-br from-pink-200 to-pink-300 flex items-center justify-center">
                      <span className="text-pink-600 font-bold text-lg">
                        <img src="/Ghoti/hero-image(3).jpg"  alt="" />
                      </span>
                    </div>
                  </div>
                  
                  {/* Food Image 4 */}
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-300 mt-4">
                    <div className="aspect-square bg-gradient-to-br from-yellow-200 to-yellow-300 flex items-center justify-center">
                      <span className="text-yellow-600 font-bold text-lg">
                        <img src="/Ghoti/hero-image(4).jpg" alt="" />
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">200+</div>
                  <div className="text-sm text-slate-600">Events</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">5★</div>
                  <div className="text-sm text-slate-600">Rating</div>
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
                  About Us
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  We specialize in heritage Bengali menus with a modern presentation—whether it's a wedding, reception, or corporate gala.
                  Our expert team ensures every detail is handled with care so hosts can enjoy their big day.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From curated buffets to live-action counters and sweets, we create cohesive experiences that feel personal and premium.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/ghoti/menu">
                  <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                    View Menu
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <video 
                  src="./Ghoti/From KlickPin CF Geetanjali_Photos on Instagram Capturing Culinary Moments Where Every Frame Tells a Delicious Story 📸🍔 foodielens gourmetgallery epicureancapture in… [Video] [Video] _ Restaurant social media Ads.mp4"
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
              Comprehensive catering services that bring authentic Bengali flavors to your special occasions.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialServices.map((s) => (
              <div key={s.title} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h4 className="text-white font-heading font-bold text-lg">{s.title}</h4>
                  </div>
                </div>
                <div className="p-6">
                  <Link to={s.to} className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold transition-all duration-300">
                    View our menu <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Menu */}
      <section ref={menuRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Utensils className="w-4 h-4 mr-2" />
              Our Menu
            </div>
            <h3 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Special Menu
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our authentic Bengali dishes crafted with traditional recipes and premium ingredients.
            </p>
          </div>
          
          {/* Scrollable Menu Container */}
          <div className="relative">
            {/* Scrollable wrapper */}
            <div 
              ref={menuScrollRef}
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
                {/* First set of dishes */}
                {ALL_DISHES.map((d) => (
                  <div key={`first-${d.name}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0 w-80">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">{d.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{d.about}</p>
                    </div>
                  </div>
                ))}
                
                {/* Duplicate set for infinite scroll */}
                {ALL_DISHES.map((d) => (
                  <div key={`second-${d.name}`} className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex-shrink-0 w-80">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img src={d.img} alt={d.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-heading font-bold text-lg text-slate-900 mb-2">{d.name}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{d.about}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Manual Controls */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => scrollMenu('left')}
                className="bg-white hover:bg-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-900 group"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={() => scrollMenu('right')}
                className="bg-white hover:bg-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-900 group"
              >
                <ChevronRight className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </button>
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
                <div className="w-16 h-16  rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
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
              Guest feedback
            </h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hear what our satisfied clients have to say about their dining experience with us.
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
                    <div className="text-sm text-slate-600">Favorite: {fb.dish}</div>
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
                Ready to start a new project with us?
              </h5>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                You want to connect with us and design a menu that guests will remember.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Connect us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/ghoti/menu">
                <Button size="lg" variant="outline" className="border-2 border-white text-slate-900 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Menu
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
