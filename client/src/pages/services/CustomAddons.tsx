import React, { useState, useRef } from 'react'
import { Button } from "../../components/ui/button"
import { ArrowLeft, X, ChevronLeft, ChevronRight, ArrowRight, Star, CheckCircle, Users, Calendar, Award, Plus, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function CustomAddons() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)

  const customAddons = [
    {
      service: "Cultural Club Pack",
      eventType: "Durga Puja, Basanta",
      price: "₹1,15,000 – ₹5,30,000",
      includes: "Stage, Gate, Sound, Emcee, 1 Artist",
      image: "/services/imageService(85).jpg"
    },
    {
      service: "Wedding Pack",
      eventType: "Small-scale wedding",
      price: "₹1,25,000 – ₹10,60,000",
      includes: "Decor, Lighting, Catering (optional)",
      image: "/services/imageService(8).jpg"
    },
    {
      service: "School Fest Pack",
      eventType: "School Annual Day / Farewell",
      price: "₹1,18,000 – ₹5,35,000",
      includes: "Backdrop, Anchor, Child Artists, Mic System",
      image: "/services/imageService(83).jpg"
    },
    {
      service: "Corporate Day Pack",
      eventType: "Office Foundation Day",
      price: "₹1,30,000 – ₹5,80,000",
      includes: "AV Setup, Branding, Catering, Emcee",
      image: "/services/imageService(15).jpg"
    }
  ]

  const scrollGallery = (direction: 'left' | 'right') => {
    if (galleryRef.current) {
      const cardWidth = 320
      const currentScroll = galleryRef.current.scrollLeft
      const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth
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
      galleryRef.current.scrollTo({
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
      if (galleryRef.current) {
        const scrollAmount = 2.5
        const currentScroll = galleryRef.current.scrollLeft
        const maxScroll = galleryRef.current.scrollWidth - galleryRef.current.clientWidth
        const halfScroll = maxScroll / 2
        
        if (currentScroll >= halfScroll - 2) {
          galleryRef.current.scrollLeft = 0
        } else {
          galleryRef.current.scrollLeft += scrollAmount
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

  const galleryImages = [
    "/services/imageService(45).jpg",
    "/services/imageService(89).jpg",
    "/services/imageService(84).jpg",
    "/services/imageService(85).jpg",
    "/services/imageService(36).jpg",
    "/services/imageService(83).jpg",
    "/services/imageService(44).jpg",
    "/services/imageService(74).jpg",
    "/services/imageService(73).jpg",
    "/services/imageService(72).jpg",
    "/services/imageService(56).jpg"
  ]

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
        <div className="absolute inset-0 bg-[url('/services/imageService(84).jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Plus className="w-4 h-4 mr-2" />
                  Custom Add-ons
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Custom</span>
                  <br />
                  <span className="text-amber-600">Add-ons</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  We customize every aspect of your event with our extensive range of add-on services. 
                  From photography to transportation, security to special effects - we have everything you need to make your event truly special.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Gallery
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Wide range of customizable services</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Flexible pricing and packages</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Professional service providers</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Seamless integration with main services</p>
                </div>
              </div>
            </div>  

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] bg-center bg-cover" style={{ backgroundImage: "url('/services/imageService(84).jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">50+</div>
                  <div className="text-sm text-slate-600">Services</div>
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
              Custom Add-ons
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tailored additional services to meet your specific needs and make your event truly special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customAddons.map((service, index) => (
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
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {service.service}
                  </h3>
                  <p className="text-sm text-slate-600 mb-2">{service.eventType}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.includes}</p>
                  <Link to={`/services/package/${service.service.toLowerCase().replace(/\s+/g, '-')}`}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300">
                      Add to Event <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Work
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Work Videos
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch our latest custom add-on services in action and see the quality of our work.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Reel Placeholders - You can add actual reels later */}
            <div className="group bg-slate-100 rounded-2xl aspect-[9/16] flex items-center justify-center hover:bg-slate-200 transition-colors duration-300 border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-700 font-semibold">Custom Services</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
            <div className="group bg-slate-100 rounded-2xl aspect-[9/16] flex items-center justify-center hover:bg-slate-200 transition-colors duration-300 border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-700 font-semibold">Event Highlights</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
            <div className="group bg-slate-100 rounded-2xl aspect-[9/16] flex items-center justify-center hover:bg-slate-200 transition-colors duration-300 border border-slate-200">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
                <p className="text-slate-700 font-semibold">Behind the Scenes</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Add-on Services Gallery
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our diverse range of custom add-on services and see how we can enhance your event experience.
            </p>
          </div>
          
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
              {galleryImages.map((image, index) => (
                <div 
                  key={`first-${index}`} 
                  className="group relative flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Add-on Service ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">Add-on Service {index + 1}</h3>
                      <p className="text-lg font-semibold text-amber-400">Custom Service</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for infinite scroll */}
              {galleryImages.map((image, index) => (
                <div 
                  key={`second-${index}`} 
                  className="group relative flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-slate-200"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`Add-on Service ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center">
                    <div className="text-center text-white p-6">
                      <h3 className="text-xl font-bold mb-2">Add-on Service {index + 1}</h3>
                      <p className="text-lg font-semibold text-amber-400">Custom Service</p>
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

      {/* Customization Process */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              How Customization Works
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Our streamlined process ensures your custom add-on services are perfectly tailored to your event needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                step: "1", 
                title: "Consultation", 
                desc: "Discuss your specific needs and requirements",
                icon: "💬"
              },
              { 
                step: "2", 
                title: "Customization", 
                desc: "We tailor services to match your vision",
                icon: "🎨"
              },
              { 
                step: "3", 
                title: "Integration", 
                desc: "Seamlessly integrate with your main event services",
                icon: "🔗"
              },
              { 
                step: "4", 
                title: "Execution", 
                desc: "Professional delivery on your event day",
                icon: "✨"
              }
            ].map((item, index) => (
              <div key={index} className="group bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-slate-100 hover:border-slate-200">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
              
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-4 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Need Something Special for Your Event?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your custom requirements and get a personalized quote for add-on services.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Custom Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                  <div className="text-white">
                    <h3 className="text-2xl font-bold mb-2">Custom Add-on Service</h3>
                    <p className="text-lg font-semibold text-[#AA5607]">Tailored Event Solution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
