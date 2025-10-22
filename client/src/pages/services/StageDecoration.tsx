import React, { useState } from 'react'
import { Button } from "../../components/ui/button"
import { ArrowLeft, X, ArrowRight, Star, CheckCircle, Users, Calendar, Award, Palette, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"

export default function StageDecoration() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const stageDecorationTypes = [
    {
      name: "Basic Stage Setup",
      price: "₹4,000 – ₹6,000",
      description: "Simple floral arrangements and basic lighting",
      image: "/services/03ab03d3d4ddc645134259c0e31dbe11.jpg",
      features: [
        "Basic floral arrangements",
        "Simple lighting setup",
        "Standard backdrop",
        "Basic stage covering"
      ]
    },
    {
      name: "Premium Stage Setup",
      price: "₹8,000 – ₹12,000",
      description: "Enhanced decorations with professional lighting",
      image: "/services/wedding.jpeg",
      features: [
        "Premium floral arrangements",
        "Professional lighting system",
        "Custom backdrop design",
        "Elegant stage covering",
        "Decorative elements"
      ]
    },
    {
      name: "Luxury Stage Setup",
      price: "₹15,000 – ₹25,000",
      description: "Complete stage transformation with luxury elements",
      image: "/services/sangeet.jpg",
      features: [
        "Luxury floral arrangements",
        "Advanced lighting system",
        "Custom stage design",
        "Premium backdrop",
        "Luxury stage covering",
        "Special effects",
        "Professional setup"
      ]
    }
  ]

  const stageGallery = [
    {
      image: "/services/03ab03d3d4ddc645134259c0e31dbe11.jpg",
      title: "Basic Stage Decoration",
      price: "₹4,000 – ₹6,000"
    },
    {
      image: "/services/wedding.jpeg",
      title: "Wedding Stage Setup",
      price: "₹8,000 – ₹12,000"
    },
    {
      image: "/services/sangeet.jpg",
      title: "Sangeet Stage",
      price: "₹10,000 – ₹15,000"
    },
    {
      image: "/services/engagement.jpg",
      title: "Engagement Stage",
      price: "₹6,000 – ₹10,000"
    },
    {
      image: "/services/cultural.jpeg",
      title: "Cultural Event Stage",
      price: "₹5,000 – ₹8,000"
    },
    {
      image: "/services/corporate.jpeg",
      title: "Corporate Stage",
      price: "₹7,000 – ₹12,000"
    },
    {
      image: "/services/conference.jpg",
      title: "Conference Stage",
      price: "₹8,000 – ₹15,000"
    },
    {
      image: "/services/product-launch.jpg",
      title: "Product Launch Stage",
      price: "₹12,000 – ₹20,000"
    }
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
      <section className="relative w-full min-h-[80vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/services/03ab03d3d4ddc645134259c0e31dbe11.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[60vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Palette className="w-4 h-4 mr-2" />
                  Professional Stage Decoration
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Stage</span>
                  <br />
                  <span className="text-amber-600">Decoration</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Transform your stage into a stunning focal point with our professional decoration services. 
                  From intimate gatherings to grand celebrations, we create memorable stages that captivate your audience.
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
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Custom stage designs for every occasion</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Professional lighting and sound setup</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Premium floral arrangements and decorations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Complete setup and breakdown services</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/5] bg-center bg-cover" style={{ backgroundImage: "url('/services/03ab03d3d4ddc645134259c0e31dbe11.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">150+</div>
                  <div className="text-sm text-slate-600">Stages</div>
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

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#AA5607] mb-6">Professional Stage Decoration</h2>
            <p className="text-gray-700 leading-7 mb-6">
              Transform your stage into a stunning focal point with our professional decoration services. 
              From intimate gatherings to grand celebrations, we create memorable stages that captivate your audience.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#AA5607] rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Custom stage designs for every occasion</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#AA5607] rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Professional lighting and sound setup</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#AA5607] rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Premium floral arrangements and decorations</p>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-[#AA5607] rounded-full mt-2 mr-3"></div>
                <p className="text-gray-700">Complete setup and breakdown services</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img 
              src="/services/03ab03d3d4ddc645134259c0e31dbe11.jpg" 
              alt="Stage Decoration" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Stage Decoration Packages
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Professional stage decoration and setup services for all types of events and occasions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stageDecorationTypes.map((type, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={type.image} 
                    alt={type.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 right-4">
                    <span className="bg-amber-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                      {type.price}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">{type.description}</p>
                  <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300">
                    Choose Package <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stage Gallery */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#AA5607] mb-12">Our Stage Decoration Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stageGallery.map((item, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedImage(item.image)}
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-[#AA5607] font-medium">{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-center text-[#AA5607] mb-12">Our Process</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "1", title: "Consultation", desc: "Discuss your stage requirements and vision" },
              { step: "2", title: "Design", desc: "Create custom stage design and layout" },
              { step: "3", title: "Setup", desc: "Professional installation and decoration" },
              { step: "4", title: "Event Day", desc: "On-site support and coordination" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#AA5607] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-[#AA5607] mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.desc}</p>
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
                Ready to Create a Stunning Stage?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your stage decoration needs and get a personalized quote.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Quote Now <ArrowRight className="ml-2 h-5 w-5" />
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
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
            >
              <X className="h-8 w-8" />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  )
}
