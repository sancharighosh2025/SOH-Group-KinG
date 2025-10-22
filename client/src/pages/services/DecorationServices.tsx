import React, { useState, useRef } from 'react'
import { Button } from "../../components/ui/button"
import { X, ChevronLeft, ChevronRight, ArrowRight, Star, CheckCircle, Palette, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function DecorationServices() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)

  const decorationServices = [
    {
      service: "Stage Decoration (Basic)",
      price: "₹4,000 – ₹6,000",
      notes: "Floral, thematic, light setup",
      image: "/services/imageService(76).jpg"
    },
    {
      service: "Gate Decoration (Floral/Balloon)",
      price: "₹2,000 – ₹4,000",
      notes: "Entry arch with flowers or balloon styling",
      image: "/services/imageService(57).jpg"
    },
    {
      service: "Mandap Setup (Puja/Wedding)",
      price: "₹6,000 – ₹12,000",
      notes: "Includes flower work, seating, lighting",
      image: "/services/imageService(46).jpg"
    },
    {
      service: "Lighting Setup (Full venue)",
      price: "₹3,000 – ₹10,000",
      notes: "Ambient, focus, and color lighting",
      image: "/services/imageService(80).jpg"
    },
    {
      service: "Table & Chair Decor (with covers)",
      price: "₹30 – ₹50 per seat",
      notes: "Satin drapes, bows, and fabric arrangements",
      image: "/services/imageService(41).jpg"
    },
    {
      service: "Canopy / Tent Arrangement",
      price: "₹20 – ₹30/sq.ft",
      notes: "Waterproof or cloth canopy for open-air events",
      image: "/services/imageService(42).jpg"
    },
    {
      service: "Cultural Backdrop Setup",
      price: "₹2,500 – ₹5,000",
      notes: "Printed backdrop with frame or fabric design",
      image: "/services/imageService(65).jpg"
    }
  ]

  const galleryItems = [
    {
      image: "/services/imageService(1).jpg",
      service: "Wedding Stage Decoration",
      price: "₹4,000 – ₹6,000"
    },
    {
      image: "/services/imageService(2).jpg",
      service: "Gate Decoration",
      price: "₹2,000 – ₹4,000"
    },
    {
      image: "/services/imageService(3).jpg",
      service: "Mandap Setup",
      price: "₹6,000 – ₹12,000"
    },
    {
      image: "/services/imageService(4).jpg",
      service: "Lighting Setup",
      price: "₹3,000 – ₹10,000"
    },
    {
      image: "/services/imageService(5).jpg",
      service: "Table & Chair Decor",
      price: "₹30 – ₹50 per seat"
    },
    {
      image: "/services/imageService(6).jpg",
      service: "Canopy Arrangement",
      price: "₹20 – ₹30/sq.ft"
    },
    {
      image: "/services/imageService(7).jpg",
      service: "Cultural Backdrop",
      price: "₹2,500 – ₹5,000"
    },
    {
      image: "/services/imageService(8).jpg",
      service: "Corporate Setup",
      price: "₹5,000 – ₹15,000"
    },
    {
      image: "/services/imageService(9).jpg",
      service: "Conference Setup",
      price: "₹8,000 – ₹20,000"
    },
    {
      image: "/services/imageService(10).jpg",
      service: "Product Launch",
      price: "₹10,000 – ₹25,000"
    },
    {
      image: "/services/imageService(11).jpg",
      service: "Anniversary Decoration",
      price: "₹3,500 – ₹8,000"
    },
    {
      image: "/services/imageService(12).jpg",
      service: "Birthday Party Setup",
      price: "₹2,500 – ₹6,000"
    },
    {
      image: "/services/imageService(13).jpg",
      service: "Engagement Decoration",
      price: "₹4,500 – ₹9,000"
    },
    {
      image: "/services/imageService(14).jpg",
      service: "Haldi Mehndi Setup",
      price: "₹3,000 – ₹7,000"
    },
    {
      image: "/services/imageService(15).jpg",
      service: "Sangeet Decoration",
      price: "₹5,000 – ₹12,000"
    },
    {
      image: "/services/imageService(16).jpg",
      service: "Cultural Event Setup",
      price: "₹4,000 – ₹10,000"
    },
    {
      image: "/services/imageService(17).jpg",
      service: "Festival Decoration",
      price: "₹2,000 – ₹5,000"
    },
    {
      image: "/services/imageService(18).jpg",
      service: "Baby Shower Setup",
      price: "₹2,500 – ₹6,000"
    },
    {
      image: "/services/imageService(19).jpg",
      service: "Graduation Party",
      price: "₹3,000 – ₹8,000"
    },
    {
      image: "/services/imageService(20).jpg",
      service: "Retirement Party",
      price: "₹3,500 – ₹9,000"
    },
    {
      image: "/services/imageService(21).jpg",
      service: "House Warming",
      price: "₹2,000 – ₹5,000"
    },
    {
      image: "/services/imageService(22).jpg",
      service: "Kitty Party Setup",
      price: "₹2,500 – ₹6,000"
    },
    {
      image: "/services/imageService(23).jpg",
      service: "Bridal Shower",
      price: "₹3,000 – ₹7,000"
    },
    {
      image: "/services/imageService(24).jpg",
      service: "Groom Party",
      price: "₹3,500 – ₹8,000"
    },
    {
      image: "/services/imageService(25).jpg",
      service: "Reception Setup",
      price: "₹6,000 – ₹15,000"
    },
    {
      image: "/services/imageService(26).jpg",
      service: "Cocktail Party",
      price: "₹4,000 – ₹10,000"
    },
    {
      image: "/services/imageService(27).jpg",
      service: "Gala Event Setup",
      price: "₹8,000 – ₹20,000"
    },
    {
      image: "/services/imageService(28).jpg",
      service: "Award Ceremony",
      price: "₹5,000 – ₹12,000"
    },
    {
      image: "/services/imageService(29).jpg",
      service: "Charity Event",
      price: "₹4,500 – ₹11,000"
    },
    {
      image: "/services/imageService(30).jpg",
      service: "Fundraising Event",
      price: "₹5,500 – ₹13,000"
    }
  ]

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const cardWidth = 320 // Width of one card + gap
      const currentScroll = galleryRef.current.scrollLeft
      const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth
      const halfScroll = maxScroll / 2 // Half of total scroll width
      
      let newScroll
      if (direction === 'left') {
        newScroll = currentScroll - cardWidth
        if (newScroll < 0) {
          newScroll = halfScroll - cardWidth // Go to end of first set
        }
      } else {
        newScroll = currentScroll + cardWidth
        if (newScroll > halfScroll) {
          newScroll = 0 // Go to beginning when reaching end of first set
        }
      }
      
      // Stop auto-scroll temporarily when manually scrolling
      stopAutoScroll()
      galleryRef.current.scrollTo({
        left: newScroll,
        behavior: 'smooth'
      })
      
      // Resume auto-scroll after manual scroll completes
      setTimeout(() => {
        startAutoScroll()
      }, 1000)
    }
  }

  const startAutoScroll = () => {
    if (autoScrollRef.current) return
    
    autoScrollRef.current = setInterval(() => {
      if (galleryRef.current) {
        const scrollAmount = 2.5 // Increased speed for better visibility
        const currentScroll = galleryRef.current.scrollLeft
        const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth
        const halfScroll = maxScroll / 2 // Half of total scroll width (first set of items)
        
        if (currentScroll >= halfScroll - 2) {
          // When we've scrolled through the first set, reset to beginning seamlessly
          galleryRef.current.scrollLeft = 0
        } else {
          galleryRef.current.scrollLeft += scrollAmount
        }
      }
    }, 16) // Faster interval for smoother movement
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


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Styles */}
      <style>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .gradient-text {
          background: linear-gradient(135deg, #1e293b 0%, #64748b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/services/hero-decoration.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Palette className="w-4 h-4 mr-2" />
                  Professional Decoration Services
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Decoration</span>
                  <br />
                  <span className="text-amber-600">Services</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  From elegant floral arrangements to stunning lighting setups, we bring your vision to life. 
                  Our experienced team creates magical atmospheres that make your events unforgettable.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Gallery
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Custom theme-based decorations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Professional lighting and sound setup</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Premium floral arrangements</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Complete venue transformation</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] bg-center bg-cover" style={{ backgroundImage: "url('/services/hero-decoration.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Events</div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">5★</div>
                  <div className="text-sm text-slate-600">Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Decoration Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Transform your venue with our comprehensive decoration services. From intimate gatherings to grand celebrations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {decorationServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.service}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                      {service.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {service.service}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.notes}</p>
                  <Link to={service.service.includes('Stage') ? '/services/package/stage-decoration' : '/services/package/decoration'}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300">
                      Choose Package <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Work Videos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch our latest decoration projects and see the magic we create for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Video Placeholders */}
            <div className="group bg-slate-100 rounded-2xl aspect-video flex items-center justify-center hover:bg-slate-200 transition-colors duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-700 font-semibold">Wedding Decoration</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
            <div className="group bg-slate-100 rounded-2xl aspect-video flex items-center justify-center hover:bg-slate-200 transition-colors duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-700 font-semibold">Corporate Events</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
            <div className="group bg-slate-100 rounded-2xl aspect-video flex items-center justify-center hover:bg-slate-200 transition-colors duration-300">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-700 font-semibold">Birthday Parties</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
          {/* Gallery Container */}
          <div className="relative">
            {/* Scrolling Gallery */}
            <div 
              ref={galleryRef}
              className="flex gap-6 overflow-x-auto scrollbar-hide pb-4"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                scrollBehavior: 'smooth'
              }}
              onMouseEnter={stopAutoScroll}
              onMouseLeave={startAutoScroll}
            >
              {/* First set of items */}
              {galleryItems.map((item, index) => (
                <div 
                  key={`first-${index}`} 
                  className="group relative flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.service}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">{item.service}</h3>
                      <p className="text-lg font-semibold text-[#AA5607]">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for infinite scroll */}
              {galleryItems.map((item, index) => (
                <div 
                  key={`second-${index}`} 
                  className="group relative flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(item.image)}
                >
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.service}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">{item.service}</h3>
                      <p className="text-lg font-semibold text-[#AA5607]">{item.price}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Manual Controls at Bottom */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={() => scrollGallery('left')}
                className="bg-white hover:bg-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-900 group"
              >
                <ChevronLeft className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </button>
              <button
                onClick={() => scrollGallery('right')}
                className="bg-white hover:bg-slate-900 hover:text-white rounded-full p-3 shadow-lg transition-all duration-300 border border-slate-200 hover:border-slate-900 group"
              >
                <ChevronRight className="h-6 w-6 text-slate-700 group-hover:text-white transition-colors duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Ready to Transform Your Event?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your decoration needs and get a personalized quote.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Quote Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-slate-900 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/20 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative max-w-5xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="bg-transparent rounded-lg overflow-hidden">
              <div className="relative">
                <img 
                  src={selectedImage} 
                  alt="Full size" 
                  className="w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                  {(() => {
                    const selectedItem = galleryItems.find(item => item.image === selectedImage)
                    return selectedItem ? (
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{selectedItem.service}</h3>
                        <p className="text-lg font-semibold text-[#AA5607]">{selectedItem.price}</p>
                      </div>
                    ) : null
                  })()}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
