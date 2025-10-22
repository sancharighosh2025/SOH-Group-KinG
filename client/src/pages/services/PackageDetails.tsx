import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { X, Heart, ArrowRight, CheckCircle, Package, Sparkles } from "lucide-react"
import { useParams } from "react-router-dom"

export default function PackageDetails() {
  const { packageType } = useParams()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [likedImages, setLikedImages] = useState<Set<string>>(new Set())

  // Package data based on package type
  const getPackageData = () => {
    switch (packageType) {
      case 'cultural-club':
        return {
          name: "Cultural Club Pack",
          eventType: "Durga Puja, Basanta",
          priceRange: "₹1,15,000 – ₹5,30,000",
          includes: "Stage, Gate, Sound, Emcee, 1 Artist",
          description: "Complete cultural event package with traditional Bengali decorations and entertainment",
          decorations: [
            { name: "Traditional Stage Setup", price: "₹25,000", image: "/services/imageService(47).jpg", likes: 0 },
            { name: "Festival Gate Decoration", price: "₹15,000", image: "/services/imageService(57).jpg", likes: 0 },
            { name: "Cultural Backdrop", price: "₹12,000", image: "/services/imageService(65).jpg", likes: 0 },
            { name: "Traditional Lighting", price: "₹8,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Cultural Props", price: "₹10,000", image: "/services/imageService(46).jpg", likes: 0 },
            { name: "Festival Seating", price: "₹6,000", image: "/services/imageService(41).jpg", likes: 0 }
          ]
        }
      case 'wedding-mini':
        return {
          name: "Wedding Mini Pack",
          eventType: "Small-scale wedding",
          priceRange: "₹75,000 – ₹1,60,000",
          includes: "Decor, Lighting, Catering (optional)",
          description: "Elegant wedding package perfect for intimate ceremonies",
          decorations: [
            { name: "Wedding Mandap", price: "₹35,000", image: "/services/imageService(46).jpg", likes: 0 },
            { name: "Floral Arrangements", price: "₹20,000", image: "/services/imageService(76).jpg", likes: 0 },
            { name: "Wedding Lighting", price: "₹15,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Reception Setup", price: "₹25,000", image: "/services/imageService(44).jpg", likes: 0 },
            { name: "Photo Booth", price: "₹12,000", image: "/services/imageService(2).jpg", likes: 0 },
            { name: "Wedding Favors", price: "₹8,000", image: "/services/imageService(41).jpg", likes: 0 }
          ]
        }
      case 'school-fest':
        return {
          name: "School Fest Pack",
          eventType: "School Annual Day / Farewell",
          priceRange: "₹88,000 – ₹2,35,000",
          includes: "Backdrop, Anchor, Child Artists, Mic System",
          description: "Fun and colorful package designed for school events and celebrations",
          decorations: [
            { name: "School Stage Setup", price: "₹20,000", image: "/services/imageService(2).jpg", likes: 0 },
            { name: "Colorful Backdrop", price: "₹15,000", image: "/services/imageService(65).jpg", likes: 0 },
            { name: "Balloon Decorations", price: "₹8,000", image: "/services/imageService(57).jpg", likes: 0 },
            { name: "Banner & Posters", price: "₹5,000", image: "/services/imageService(47).jpg", likes: 0 },
            { name: "Award Ceremony Setup", price: "₹12,000", image: "/services/imageService(28).jpg", likes: 0 },
            { name: "Fun Activities Setup", price: "₹10,000", image: "/services/imageService(19).jpg", likes: 0 }
          ]
        }
      case 'corporate-day':
        return {
          name: "Corporate Day Pack",
          eventType: "Office Foundation Day",
          priceRange: "₹90,000 – ₹2,80,000",
          includes: "AV Setup, Branding, Catering, Emcee",
          description: "Professional corporate event package with modern setup and branding",
          decorations: [
            { name: "Corporate Stage", price: "₹30,000", image: "/services/imageService(41).jpg", likes: 0 },
            { name: "Branding Setup", price: "₹25,000", image: "/services/imageService(15).jpg", likes: 0 },
            { name: "LED Display", price: "₹40,000", image: "/Orchid/imageOrchid (78).jpg", likes: 0 },
            { name: "Professional Lighting", price: "₹18,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Conference Setup", price: "₹22,000", image: "/services/imageService(9).jpg", likes: 0 },
            { name: "Networking Area", price: "₹15,000", image: "/services/imageService(26).jpg", likes: 0 }
          ]
        }
      case 'av-system':
        return {
          name: "AV System Services",
          eventType: "Audio Visual Setup",
          priceRange: "₹6,000 – ₹1,00,000",
          includes: "Sound System, Projector, Microphones, Technical Support",
          description: "Professional audio-visual equipment and technical support for all your event needs",
          decorations: [
            { name: "Full Sound System", price: "₹6,000 – ₹10,000", image: "/Orchid/imageOrchid (76).jpg", likes: 0 },
            { name: "Large Sound Setup", price: "₹12,000 – ₹1,00,000", image: "/Orchid/imageOrchid (77).jpg", likes: 0 },
            { name: "Projector & Screen", price: "₹3,000 – ₹25,000", image: "/Orchid/imageOrchid (78).jpg", likes: 0 },
            { name: "Generator Backup", price: "₹2,500 – ₹10,500", image: "/Orchid/imageOrchid (79).jpg", likes: 0 },
            { name: "Wireless Microphones", price: "₹1,500 – ₹3,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Lighting Systems", price: "₹5,000 – ₹15,000", image: "/services/imageService(52).jpg", likes: 0 }
          ]
        }
      case 'artist-booking':
        return {
          name: "Artist & Talent Booking",
          eventType: "Entertainment Services",
          priceRange: "₹1,500 – ₹35,000",
          includes: "Anchor, Singer, Dance Group, DJ, Live Band",
          description: "Professional artist booking and talent coordination for your event entertainment",
          decorations: [
            { name: "Anchor/Emcee", price: "₹1,500 – ₹4,000", image: "/services/Artist/imageArtist1 (1).jpg", likes: 0 },
            { name: "Singer (Solo/Group)", price: "₹4,000 – ₹15,000", image: "/services/Artist/imageArtist1 (5).jpg", likes: 0 },
            { name: "Dance Group", price: "₹6,000 – ₹18,000", image: "/services/Artist/imageArtist1 (7).jpg", likes: 0 },
            { name: "DJ & Sound Console", price: "₹4,000 – ₹8,000", image: "/services/Artist/imageArtist1 (2).jpg", likes: 0 },
            { name: "Live Band", price: "₹15,000 – ₹35,000", image: "/services/Artist/imageArtist1 (6).jpg", likes: 0 },
            { name: "Child Artist/Drama", price: "₹3,000 – ₹7,000", image: "/services/Artist/imageArtist1 (3).jpg", likes: 0 }
          ]
        }
      case 'decoration':
        return {
          name: "Decoration Services",
          eventType: "Venue Decoration",
          priceRange: "₹2,000 – ₹12,000",
          includes: "Stage, Gate, Mandap, Lighting, Table Decor",
          description: "Complete venue decoration services for all types of events",
          decorations: [
            { name: "Stage Decoration", price: "₹4,000 – ₹6,000", image: "/services/imageService(76).jpg", likes: 0 },
            { name: "Gate Decoration", price: "₹2,000 – ₹4,000", image: "/services/imageService(57).jpg", likes: 0 },
            { name: "Mandap Setup", price: "₹6,000 – ₹12,000", image: "/services/imageService(46).jpg", likes: 0 },
            { name: "Lighting Setup", price: "₹3,000 – ₹10,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Table & Chair Decor", price: "₹30 – ₹50 per seat", image: "/services/imageService(41).jpg", likes: 0 },
            { name: "Canopy Arrangement", price: "₹20 – ₹30/sq.ft", image: "/services/imageService(42).jpg", likes: 0 }
          ]
        }
      case 'stage-decoration':
        return {
          name: "Stage Decoration",
          eventType: "Professional Stage Setup",
          priceRange: "₹4,000 – ₹6,000",
          includes: "Floral, Thematic, Light Setup",
          description: "Professional stage decoration with floral arrangements and lighting",
          decorations: [
            { name: "Floral Stage Setup", price: "₹4,000 – ₹6,000", image: "/services/imageService(76).jpg", likes: 0 },
            { name: "Thematic Decoration", price: "₹5,000 – ₹8,000", image: "/services/imageService(1).jpg", likes: 0 },
            { name: "Lighting Effects", price: "₹3,000 – ₹5,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Backdrop Setup", price: "₹2,500 – ₹5,000", image: "/services/imageService(65).jpg", likes: 0 },
            { name: "Stage Props", price: "₹1,500 – ₹3,000", image: "/services/imageService(46).jpg", likes: 0 },
            { name: "Professional Lighting", price: "₹4,000 – ₹7,000", image: "/services/imageService(52).jpg", likes: 0 }
          ]
        }
      case 'cultural-club-pack':
        return {
          name: "Cultural Club Pack",
          eventType: "Durga Puja, Basanta",
          priceRange: "₹1,15,000 – ₹5,30,000",
          includes: "Stage, Gate, Sound, Emcee, 1 Artist",
          description: "Complete cultural event package with traditional Bengali decorations and entertainment",
          decorations: [
            { name: "Traditional Stage Setup", price: "₹25,000", image: "/services/imageService(47).jpg", likes: 0 },
            { name: "Festival Gate Decoration", price: "₹15,000", image: "/services/imageService(57).jpg", likes: 0 },
            { name: "Cultural Backdrop", price: "₹12,000", image: "/services/imageService(65).jpg", likes: 0 },
            { name: "Traditional Lighting", price: "₹8,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Cultural Props", price: "₹10,000", image: "/services/imageService(46).jpg", likes: 0 },
            { name: "Festival Seating", price: "₹6,000", image: "/services/imageService(41).jpg", likes: 0 }
          ]
        }
      case 'wedding-pack':
        return {
          name: "Wedding Pack",
          eventType: "Small-scale wedding",
          priceRange: "₹1,25,000 – ₹10,60,000",
          includes: "Decor, Lighting, Catering (optional)",
          description: "Elegant wedding package perfect for intimate ceremonies",
          decorations: [
            { name: "Wedding Mandap", price: "₹35,000", image: "/services/imageService(46).jpg", likes: 0 },
            { name: "Floral Arrangements", price: "₹20,000", image: "/services/imageService(76).jpg", likes: 0 },
            { name: "Wedding Lighting", price: "₹15,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Reception Setup", price: "₹25,000", image: "/services/imageService(44).jpg", likes: 0 },
            { name: "Photo Booth", price: "₹12,000", image: "/services/imageService(2).jpg", likes: 0 },
            { name: "Wedding Favors", price: "₹8,000", image: "/services/imageService(41).jpg", likes: 0 }
          ]
        }
      case 'school-fest-pack':
        return {
          name: "School Fest Pack",
          eventType: "School Annual Day / Farewell",
          priceRange: "₹1,18,000 – ₹5,35,000",
          includes: "Backdrop, Anchor, Child Artists, Mic System",
          description: "Fun and colorful package designed for school events and celebrations",
          decorations: [
            { name: "School Stage Setup", price: "₹20,000", image: "/services/imageService(2).jpg", likes: 0 },
            { name: "Colorful Backdrop", price: "₹15,000", image: "/services/imageService(65).jpg", likes: 0 },
            { name: "Balloon Decorations", price: "₹8,000", image: "/services/imageService(57).jpg", likes: 0 },
            { name: "Banner & Posters", price: "₹5,000", image: "/services/imageService(47).jpg", likes: 0 },
            { name: "Award Ceremony Setup", price: "₹12,000", image: "/services/imageService(28).jpg", likes: 0 },
            { name: "Fun Activities Setup", price: "₹10,000", image: "/services/imageService(19).jpg", likes: 0 }
          ]
        }
      case 'corporate-day-pack':
        return {
          name: "Corporate Day Pack",
          eventType: "Office Foundation Day",
          priceRange: "₹1,30,000 – ₹5,80,000",
          includes: "AV Setup, Branding, Catering, Emcee",
          description: "Professional corporate event package with modern setup and branding",
          decorations: [
            { name: "Corporate Stage", price: "₹30,000", image: "/services/imageService(41).jpg", likes: 0 },
            { name: "Branding Setup", price: "₹25,000", image: "/services/imageService(15).jpg", likes: 0 },
            { name: "LED Display", price: "₹40,000", image: "/Orchid/imageOrchid (78).jpg", likes: 0 },
            { name: "Professional Lighting", price: "₹18,000", image: "/services/imageService(80).jpg", likes: 0 },
            { name: "Conference Setup", price: "₹22,000", image: "/services/imageService(9).jpg", likes: 0 },
            { name: "Networking Area", price: "₹15,000", image: "/services/imageService(26).jpg", likes: 0 }
          ]
        }
      default:
        return {
          name: "Custom Package",
          eventType: "Custom Event",
          priceRange: "Contact for Quote",
          includes: "Customized Services",
          description: "Tailored package designed specifically for your event needs",
          decorations: [
            { name: "Custom Decoration", price: "Contact Us", image: "/services/imageService(1).jpg", likes: 0 },
            { name: "Special Setup", price: "Contact Us", image: "/services/imageService(2).jpg", likes: 0 },
            { name: "Unique Design", price: "Contact Us", image: "/services/imageService(3).jpg", likes: 0 }
          ]
        }
    }
  }

  const packageData = getPackageData()

  const toggleLike = (imagePath: string) => {
    setLikedImages(prev => {
      const newSet = new Set(prev)
      if (newSet.has(imagePath)) {
        newSet.delete(imagePath)
      } else {
        newSet.add(imagePath)
      }
      return newSet
    })
  }


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
      <section className="relative w-full min-h-[40vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/services/imageService(1).jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
              <Package className="w-4 h-4 mr-2" />
              {packageData.eventType}
            </div>
            <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight">
              <span className="gradient-text">{packageData.name}</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto">
              {packageData.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="text-3xl font-bold text-amber-600">
                {packageData.priceRange}
              </div>
              <div className="text-lg text-slate-600">
                Includes: {packageData.includes}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Gallery */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Available Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              {packageData.name} Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of services to create the perfect event experience.
            </p>
          </div>
          
          {/* Grid Layout - 3 images per row */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packageData.decorations.map((decoration, index) => (
              <div 
                key={index} 
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                onClick={() => setSelectedImage(decoration.image)}
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden relative">
                  <img 
                    src={decoration.image} 
                    alt={decoration.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Like Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleLike(decoration.image)
                    }}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-300"
                  >
                    <Heart 
                      className={`h-5 w-5 transition-colors duration-300 ${
                        likedImages.has(decoration.image) 
                          ? 'text-red-500 fill-red-500' 
                          : 'text-gray-600 hover:text-red-500'
                      }`} 
                    />
                  </button>
                  
                  {/* Price Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-amber-600 text-white text-sm px-3 py-1 rounded-full font-medium">
                      {decoration.price}
                    </span>
                  </div>
                </div>
                
                {/* Service Info */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {decoration.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    Professional {decoration.name.toLowerCase()} service with premium quality and attention to detail.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              What Makes Us Different
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We provide exceptional service quality and attention to detail for every event.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Professional Team", desc: "Experienced professionals with years of expertise", icon: "👥" },
              { title: "Quality Assurance", desc: "Premium quality materials and equipment", icon: "⭐" },
              { title: "Custom Solutions", desc: "Tailored packages for your specific needs", icon: "🎨" },
              { title: "24/7 Support", desc: "Round-the-clock customer support", icon: "📞" }
            ].map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
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
                Ready to Book This Package?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to customize this package according to your specific needs and get a detailed quote.
              </p>
              <div className="text-4xl font-bold text-amber-600">
                {packageData.priceRange}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Book Package <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-slate-900 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-3 hover:bg-black/70 transition-colors duration-300"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative">
                <img 
                  src={selectedImage || ''} 
                  alt="Full size" 
                  className="w-full max-h-[80vh] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-8">
                  {(() => {
                    const selectedDecoration = packageData.decorations.find(decoration => decoration.image === selectedImage)
                    return selectedDecoration ? (
                      <div className="text-white flex justify-between items-end">
                        <div>
                          <h3 className="text-3xl font-bold mb-2">{selectedDecoration.name}</h3>
                          <p className="text-xl font-semibold text-amber-400 mb-2">{selectedDecoration.price}</p>
                          <p className="text-slate-200">
                            Professional {selectedDecoration.name.toLowerCase()} service with premium quality and attention to detail.
                          </p>
                        </div>
                        <button
                          onClick={() => selectedImage && toggleLike(selectedImage)}
                          className="bg-white/20 hover:bg-white/30 rounded-full p-4 transition-all duration-300 backdrop-blur-sm"
                        >
                          <Heart 
                            className={`h-8 w-8 transition-colors duration-300 ${
                              selectedImage && likedImages.has(selectedImage) 
                                ? 'text-red-500 fill-red-500' 
                                : 'text-white hover:text-red-500'
                            }`} 
                          />
                        </button>
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
