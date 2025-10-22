import React from 'react'
import { Button } from "../../components/ui/button"
import { ArrowLeft, Star, CheckCircle, Palette, Users, Clock, Award } from "lucide-react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function LiveSketching() {
  const heroRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const container = heroRef.current?.parentElement ?? document
    const headings = container.querySelectorAll('[data-animate="reveal-heading"]')
    headings.forEach((h) => {
      gsap.fromTo(
        h,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h,
            start: "top 85%",
            end: "top 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  const galleryImages = [
    "/AR/imageAR1.jpg",
    "/AR/imageAR2.jpg", 
    "/AR/imageAR3.heic",
    "/AR/imageAR4.jpg",
    "/AR/imageAR5.heic",
    "/AR/imageAR6.jpg",
    "/AR/imageAR7.jpg",
    "/AR/imageAR8.jpg",
    "/AR/imageAR9.heic",
    "/AR/imageAR10.jpg",
    "/AR/imageAR11.jpg",
    "/AR/imageAR12.heic",
    "/AR/imageAR13.jpg",
    "/AR/imageAR14.jpg",
    "/AR/imageAR15.jpg",
    "/AR/imageAR16.heic",
    "/AR/imageAR17.jpg",
    "/AR/imageAR18.jpg",
    "/AR/imageAR19.jpg",
    "/AR/imageAR20.heic",
    "/AR/imageAR21.jpg",
    "/AR/imageAR22.jpg",
    "/AR/imageAR23.jpg",
    "/AR/imageAR24.jpg"
  ]

  const services = [
    {
      title: "Live Portrait Sketching",
      description: "Real-time portrait creation during your wedding ceremonies. Our artists capture the essence of your special moments as they happen.",
      icon: "👤",
      features: ["15-20 minute portraits", "Multiple artists available", "High-quality art supplies", "Custom framing options"]
    },
    {
      title: "Wedding Scene Painting",
      description: "Beautiful paintings of your wedding venue, ceremony, and reception scenes created during the event.",
      icon: "🎨",
      features: ["Venue paintings", "Ceremony scenes", "Reception moments", "Guest interaction paintings"]
    },
    {
      title: "Interactive Art Experience",
      description: "Engage your guests with live art demonstrations and interactive painting sessions.",
      icon: "🎭",
      features: ["Guest participation", "Art demonstrations", "Custom keepsakes", "Entertainment value"]
    },
    {
      title: "Digital Art Services",
      description: "Modern digital art creation using tablets and digital tools for contemporary wedding memories.",
      icon: "💻",
      features: ["Digital portraits", "Instant sharing", "Multiple formats", "Social media ready"]
    }
  ]

  const packages = [
    {
      name: "Essential Package",
      price: "₹15,000",
      duration: "2-3 hours",
      features: [
        "1 Professional Artist",
        "Live Portrait Sketching",
        "Up to 10 portraits",
        "Basic art supplies",
        "Digital copies included"
      ],
      popular: false
    },
    {
      name: "Premium Package", 
      price: "₹25,000",
      duration: "4-5 hours",
      features: [
        "2 Professional Artists",
        "Live Portrait & Scene Painting",
        "Up to 20 portraits",
        "Premium art supplies",
        "Custom framing for 5 pieces",
        "Digital gallery access"
      ],
      popular: true
    },
    {
      name: "Luxury Package",
      price: "₹40,000", 
      duration: "Full Day",
      features: [
        "3 Professional Artists",
        "All art services included",
        "Unlimited portraits",
        "Premium art supplies",
        "Custom framing for 10 pieces",
        "Interactive guest sessions",
        "Video documentation"
      ],
      popular: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[70vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div 
            className="w-full h-full bg-center bg-cover"
            style={{ backgroundImage: "url('/AR/AR-about.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>
        
        {/* Navigation */}
        <div className="relative z-10 p-6 flex justify-end">
          <Link to="/">
            <Button variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto h-full flex items-start justify-center">
          <div className="max-w-4xl text-center">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium">
                <Palette className="w-4 h-4 mr-2" />
                Live Art Services
              </div>
              
              <h1 data-animate="reveal-heading" className="text-5xl lg:text-7xl font-heading font-bold leading-tight text-white">
                Live Sketching & 
                <br />
                <span className="text-amber-400">Picture Painting</span>
              </h1>
              
              <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                Transform your wedding moments into timeless art with our professional live sketching and picture painting services. 
                Watch as your memories come to life through skilled artists.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-animate="reveal-heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Live Art Gallery
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our collection of live sketches and paintings created at various wedding events.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.slice(0, 12).map((image, index) => (
              <div key={index} className="group relative aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                <div 
                  className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${image})` }}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="text-white text-center">
                    <Palette className="w-8 h-8 mx-auto mb-2" />
                    <div className="text-sm font-medium">Live Art Work</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 data-animate="reveal-heading" className="text-3xl lg:text-4xl font-heading font-bold text-slate-900 mb-4">
              Live Art Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Professional live sketching and picture painting services for your special moments.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-slate-200 p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-2xl mx-auto mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-heading font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <div className="space-y-1">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-600 flex-shrink-0" />
                        <span className="text-xs text-slate-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Pricing Packages
            </div>
            <h2 data-animate="reveal-heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Choose Your Package
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Flexible packages designed to meet your wedding art needs and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 hover:shadow-xl transition-all duration-300 ${
                pkg.popular ? 'border-amber-500 ring-2 ring-amber-500/20' : 'border-slate-200'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-heading font-bold text-slate-900 mb-2">
                    {pkg.name}
                  </h3>
                  <div className="text-4xl font-bold text-slate-900 mb-2">
                    {pkg.price}
                  </div>
                  <div className="text-slate-600 flex items-center justify-center">
                    <Clock className="w-4 h-4 mr-2" />
                    {pkg.duration}
                  </div>
                </div>
                
                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button 
                  className={`w-full py-3 text-lg font-semibold rounded-xl ${
                    pkg.popular 
                      ? 'bg-amber-500 hover:bg-amber-600 text-white' 
                      : 'bg-slate-900 hover:bg-slate-800 text-white'
                  }`}
                >
                  Choose Package
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 data-animate="reveal-heading" className="text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
            Ready to Add Live Art to Your Wedding?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Contact us today to discuss your live sketching and picture painting needs. 
            Let's create unforgettable art memories together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 text-lg font-semibold rounded-xl">
              Book Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
