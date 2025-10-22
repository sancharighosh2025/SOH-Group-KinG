import React, { useState, useRef } from 'react'
import { Button } from "../../components/ui/button"
import { X, ChevronLeft, ChevronRight, ArrowRight, Star, CheckCircle, Volume2, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function AVSystem() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const autoScrollRef = useRef<number | null>(null)

  const avServices = [
    {
      service: "Full Sound System (Small Event)",
      price: "₹6,000 – ₹10,000",
      notes: "Speakers, 2 wireless mics, mixer",
      image: '/Orchid/imageOrchid (76).jpg'
    },
    {
      service: "Large Sound Setup",
      price: "₹12,000 – ₹1,00,000",
      notes: "For 200+ audience, DJ or cultural use",
      image: '/Orchid/imageOrchid (77).jpg'
    },
    {
      service: "Projector & Screen Setup",
      price: "₹3,000 – ₹25,000",
      notes: "For presentations or video showcase",
      image: '/Orchid/imageOrchid (78).jpg'
    },
    {
      service: "Generator Backup (up to 5 hrs)",
      price: "₹2,500 – ₹10,500",
      notes: "Includes operator",
      image: '/Orchid/imageOrchid (79).jpg'
    }
  ]

  const equipmentList = [
    { category: "Audio Equipment", items: ["Wireless Microphones", "Sound Mixing Console", "Speakers & Amplifiers", "Audio Cables", "Headphones"] },
    { category: "Visual Equipment", items: ["Projectors", "LED Screens", "Video Cameras", "Lighting Systems", "Stage Lighting"] },
    { category: "Technical Support", items: ["Sound Engineer", "Lighting Technician", "Video Operator", "Setup & Breakdown", "On-site Support"] }
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
    '/Orchid/imageOrchid (76).jpg',
    '/services/imageService(80).jpg',
    '/Orchid/imageOrchid (78).jpg',
    '/services/imageService(52).jpg',
    '/services/imageService(77).jpg',
    '/Orchid/imageOrchid (79).jpg',
    '/services/imageService(50).jpg',
    '/Orchid/imageOrchid (77).jpg'
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
        <div className="absolute inset-0 bg-[url('/Orchid/imageOrchid (77).jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            {/* Left Content */}
            <div className="space-y-4">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Volume2 className="w-4 h-4 mr-2" />
                  Professional AV Services
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Sound, Mic &</span>
                  <br />
                  <span className="text-amber-600">AV System</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Ensure your event sounds and looks perfect with our professional audio-visual equipment and technical support. 
                  From intimate gatherings to large-scale events, we provide the right AV solutions for every occasion.
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
                  <p className="text-slate-700">State-of-the-art audio and visual equipment</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Professional technical support team</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Custom setup for any venue size</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">24/7 technical support during events</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] bg-center bg-cover" style={{ backgroundImage: "url('/Orchid/imageOrchid (78).jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">300+</div>
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
              AV System Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional audio-visual equipment and technical support for all your event needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {avServices.map((service, index) => (
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
                  <Link to={`/services/package/av-system`}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300">
                      Book Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            {/* Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Work Gallery
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our portfolio of successful AV setup projects and see the professional quality we deliver.
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
                  className="group relative flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`AV Setup ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">AV Setup {index + 1}</h3>
                      <p className="text-lg font-semibold text-amber-600">Professional Setup</p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for infinite scroll */}
              {galleryImages.map((image, index) => (
                <div 
                  key={`second-${index}`} 
                  className="group relative flex-shrink-0 w-80 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                    <img 
                      src={image} 
                      alt={`AV Setup ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">AV Setup {index + 1}</h3>
                      <p className="text-lg font-semibold text-amber-600">Professional Setup</p>
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

      {/* Video Section */}
      <section className="py-20 bg-white">
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
              Watch our latest AV setup projects and see the professional quality we deliver.
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
                <p className="text-slate-700 font-semibold">Conference Setup</p>
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
                <p className="text-slate-700 font-semibold">Wedding Events</p>
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
          </div>
        </div>
      </section>



      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Ready for Perfect Audio & Visual Experience?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your AV requirements and get professional technical support for your event.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get AV Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
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
                    <h3 className="text-2xl font-bold mb-2">AV Setup</h3>
                    <p className="text-lg font-semibold text-amber-600">Professional Audio Visual</p>
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
