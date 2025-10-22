import React, { useState } from 'react'
import { Button } from "../../components/ui/button"
import { ArrowLeft, X, ArrowRight, Star, CheckCircle, Users, Calendar, Award, Package, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function ComboPackages() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const comboServices = [
    {
      service: "Cultural Club Pack",
      eventType: "Durga Puja, Basanta",
      price: "₹1,15,000 – ₹5,30,000",
      includes: "Stage, Gate, Sound, Emcee, 1 Artist",
      image: "/services/imageService(47).jpg"
    },
    {
      service: "Wedding Mini Pack",
      eventType: "Small-scale wedding",
      price: "₹75,000 – ₹1,60,000",
      includes: "Decor, Lighting, Catering (optional)",
      image: "/services/imageService(44).jpg"
    },
    {
      service: "School Fest Pack",
      eventType: "School Annual Day / Farewell",
      price: "₹88,000 – ₹2,35,000",
      includes: "Backdrop, Anchor, Child Artists, Mic System",
      image: "/services/imageService(2).jpg"
    },
    {
      service: "Corporate Day Pack",
      eventType: "Office Foundation Day",
      price: "₹90,000 – ₹2,80,000",
      includes: "AV Setup, Branding, Catering, Emcee",
      image: "/services/imageService(41).jpg"
    }
  ]

  const includedServices = [
    { service: "Decoration Services", icon: "🎨", desc: "Complete venue decoration and theming" },
    { service: "AV & Sound System", icon: "🔊", desc: "Professional audio-visual equipment" },
    { service: "Artist Booking", icon: "🎭", desc: "Entertainment and performer coordination" },
    { service: "Catering Support", icon: "🍽️", desc: "Food and beverage arrangements" },
    { service: "Event Management", icon: "📋", desc: "Complete event planning and coordination" },
    { service: "Technical Support", icon: "⚙️", desc: "On-site technical assistance" }
  ]

  const galleryImages = [
    "/services/imageService(74).jpg",
    "/services/imageService(31).jpg",
    "/services/imageService(43).jpg",
    "/services/imageService(32).jpg",
    "/services/imageService(47).jpg",
    "/services/imageService(65).jpg",
    "/services/imageService(64).jpg",
    "/services/imageService(55).jpg"
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Custom Styles */}
      <style>{`
        .gradient-text {
          background: linear-gradient(135deg, #1e293b 0%, #64748b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/home/event-package.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Package className="w-4 h-4 mr-2" />
                  Complete Event Solutions
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Combo Event</span>
                  <br />
                  <span className="text-amber-600">Packages</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Our combo packages combine multiple services for a complete event management solution. 
                  From decoration to catering, AV systems to artist booking - we handle everything under one roof.
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
                  <p className="text-slate-700">All-in-one event management solution</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Cost-effective bundled pricing</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Seamless coordination between all services</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Single point of contact for all needs</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] bg-center bg-cover" style={{ backgroundImage: "url('/home/event-package.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">100+</div>
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
              Combo Event Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive event packages that combine multiple services for complete event management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {comboServices.map((service, index) => (
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
              Watch our latest combo package events and see the comprehensive solutions we provide.
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
                <p className="text-slate-700 font-semibold">Wedding Packages</p>
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
                <p className="text-slate-700 font-semibold">Cultural Events</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-12">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 text-amber-700 text-sm font-semibold shadow-sm">
                <Sparkles className="w-4 h-4 mr-2" />
                Our Portfolio
              </div>
              <h2 className="text-4xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Event Gallery
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                Explore our portfolio of successful combo package events and get inspired for your next celebration.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="group relative aspect-square bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img 
                    src={image} 
                    alt={`Event ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white">
                      <h3 className="text-lg font-bold">Event Package</h3>
                      <p className="text-sm text-amber-300">Combo Solution</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#AA5607] mb-12">Why Choose Combo Packages?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Cost Savings",
                desc: "Get multiple services at a discounted rate compared to booking individually"
              },
              {
                title: "Seamless Coordination",
                desc: "All services work together perfectly with coordinated planning and execution"
              },
              {
                title: "Single Point of Contact",
                desc: "One team handles everything, making communication and coordination effortless"
              },
              {
                title: "Quality Assurance",
                desc: "Consistent quality across all services with our experienced team"
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-[#AA5607] mb-3">{benefit.title}</h3>
                <p className="text-gray-700 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Ready for a Complete Event Experience?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your event requirements and get a customized combo package quote.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Combo Quote <ArrowRight className="ml-2 h-5 w-5" />
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
                    <h3 className="text-2xl font-bold mb-2">Combo Event Package</h3>
                    <p className="text-lg font-semibold text-amber-600">Complete Event Solution</p>
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

