import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Button } from "../components/ui/button"
import { ArrowLeft, ArrowRight, Star, CheckCircle, Utensils, Users, Clock, Award } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function GhotiMenu() {
  const heroRef = React.useRef<HTMLDivElement | null>(null)
  const menuRef = React.useRef<HTMLDivElement | null>(null)
  const navigate = useNavigate()

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
    ;[heroRef, menuRef].forEach(r => reveal(r.current))
    return () => ScrollTrigger.getAll().forEach(t => t.kill())
  }, [])

  const menuPackages = [
    {
      type: 'Veg Basic',
      price: '₹350 – ₹600',
      includes: '4 items + dessert + client req.',
      image: '/Ghoti/imageGhoti(9).jpg',
      features: ['Fresh vegetables', 'Traditional Bengali spices', 'Customizable menu', 'Dessert included']
    },
    {
      type: 'Non-Veg Standard',
      price: '₹750 – ₹1400+',
      includes: 'Chicken/Fish, 5 items + dessert',
      image: '/Ghoti/imageGhoti(10).jpg',
      features: ['Premium chicken/fish', '5 main dishes', 'Traditional recipes', 'Dessert included']
    },
    {
      type: 'Premium Buffet',
      price: '₹1450 – ₹1700+',
      includes: 'Includes Live Counter, Mocktails, Multi-cuisine',
      image: '/Ghoti/imageGhoti(11).jpg',
      features: ['Live cooking stations', 'Mocktails & beverages', 'Multi-cuisine options', 'Premium presentation']
    }
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
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-[60vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/Ghoti/Ghoti-poster.png')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                <Utensils className="w-4 h-4 mr-2" />
                Food & Catering Support
              </div>
              <h1 data-animate="heading" className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="gradient-text">Our Menu Packages</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
                Choose from our carefully crafted Bengali cuisine packages, each designed to bring authentic flavors to your special occasions.
              </p>
            </div>
            
            <div className="mt-8">
              <Button 
                onClick={() => navigate(-1)}
                variant="outline" 
                className="border-2 border-slate-200 hover:border-slate-300 px-6 py-3 text-lg font-semibold rounded-xl"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Back to Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Packages Section */}
      <section ref={menuRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Food & Catering Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Through Ghoti Na Bangal - Authentic Bengali flavors for every occasion
            </p>
          </div>
          
          <div className="space-y-12">
            {menuPackages.map((pkg, index) => (
              <div key={pkg.type} className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`space-y-8 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="space-y-4">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                      <Award className="w-4 h-4 mr-2" />
                      {pkg.type}
                    </div>
                    <h3 className="text-3xl lg:text-4xl font-heading font-bold text-slate-900">
                      {pkg.type}
                    </h3>
                    <div className="text-2xl font-bold text-amber-600">
                      {pkg.price}
                    </div>
                    <p className="text-lg text-slate-600">
                      {pkg.includes}
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xl font-heading font-bold text-slate-900">What's Included:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {pkg.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                      Book This Package <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                      Customize Menu
                    </Button>
                  </div>
                </div>
                
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <div className="aspect-[4/3] bg-center bg-cover" style={{ backgroundImage: `url('${pkg.image}')` }}>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                    
                    {/* Price badge */}
                    <div className="absolute top-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                      <div className="text-xl font-bold text-slate-900">{pkg.price}</div>
                      <div className="text-sm text-slate-600">per plate</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
