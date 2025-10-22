import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { X, Star, CheckCircle, Calendar, Music, Play } from "lucide-react"
import { Link } from "react-router-dom"

export default function ArtistBooking() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const artistServices = [
    {
      service: "Anchor/Emcee",
      price: "₹1,500 – ₹4,000",
      notes: "Based on event size & hours",
      image: "/services/Artist/imageArtist1 (1).jpg"
    },
    {
      service: "Singer (Solo/Group)",
      price: "₹4,000 – ₹15,000",
      notes: "Folk, Rabindra Sangeet, Bollywood, etc.",
      image: "/services/Artist/imageArtist1 (5).jpg"
    },
    {
      service: "Dance Group (3–5 members)",
      price: "₹6,000 – ₹18,000",
      notes: "Classical, Western, or Mixed Performance",
      image: "/services/Artist/imageArtist1 (7).jpg"
    },
    {
      service: "DJ & Sound Console",
      price: "₹4,000 – ₹8,000",
      notes: "4-hour show with console and lights",
      image: "/services/Artist/imageArtist1 (2).jpg"
    },
    {
      service: "Live Band (Basic)",
      price: "₹15,000 – ₹35,000",
      notes: "Regional or modern band for public shows",
      image: "/services/Artist/imageArtist1 (6).jpg"
    },
    {
      service: "Child Artist / Drama / Mime",
      price: "₹3,000 – ₹7,000",
      notes: "Great for social, school, and club events",
      image: "/services/Artist/imageArtist1 (3).jpg"
    },
    {
      service: "Professional Host / Judge",
      price: "₹5,000 – ₹10,000+",
      notes: "Depends on the stature of celebrity invited",
      image: "/services/Artist/imageArtist1 (4).jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[50vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/services/Artist/heroArtist.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            {/* Left Content */}
            <div className="space-y-5">
              <div className="space-y-2">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Music className="w-4 h-4 mr-2" />
                  Professional Artist Booking
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Artist & Talent</span>
                  <br />
                  <span className="text-amber-600">Booking</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Connect with the best artists and performers for your event. We handle all talent booking, 
                  negotiations, and coordination to ensure your event has perfect entertainment.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Book Artist Now
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">200+</div>
                  <div className="text-sm text-slate-600">Artists Network</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">24/7</div>
                  <div className="text-sm text-slate-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] bg-center bg-cover" style={{ backgroundImage: "url('/services/Artist/heroArtist.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">200+</div>
                  <div className="text-sm text-slate-600">Verified Artists</div>
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

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900">
                Professional Artist Booking Services
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We handle all talent booking, negotiations, and coordination. From local artists to celebrity performers, 
                we ensure your event has the perfect entertainment that matches your vision and budget.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                "Extensive network of verified artists",
                "Professional contract management",
                "Complete technical support",
                "On-site coordination and management"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 border border-slate-200 rounded-lg bg-white">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Calendar className="w-4 h-4 mr-2" />
              Our Process
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Booking Process
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple, transparent, and professional booking process that ensures you get the perfect artist for your event.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Consultation", desc: "Discuss your event requirements and artist preferences", icon: "💬" },
              { title: "Artist Selection", desc: "We present curated options based on your needs and budget", icon: "🎭" },
              { title: "Booking & Contract", desc: "Handle all negotiations and formal agreements", icon: "📋" },
              { title: "Event Day", desc: "On-site coordination and technical support", icon: "🎉" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center text-3xl mx-auto group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Artist & Talent Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              From local artists to celebrity performers, we have the perfect entertainment for every event and budget.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {artistServices.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.service}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">{service.service}</h3>
                  <p className="text-2xl font-bold text-amber-600 mb-2">{service.price}</p>
                  <p className="text-slate-600 leading-relaxed mb-6">{service.notes}</p>
                  <Link to={`/services/package/artist-booking`}>
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold py-3 rounded-xl transition-all duration-300">
                      Book Now
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Play className="w-4 h-4 mr-2" />
              Our Portfolio
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Artist Showcase
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Watch our artists in action and see why they're the perfect choice for your event.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Portfolio Placeholders */}
            <div className="group bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl aspect-[9/16] flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <p className="text-slate-700 font-semibold mb-2">Live Performance</p>
                <p className="text-sm text-slate-500">Wedding Singer</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl aspect-[9/16] flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <p className="text-slate-700 font-semibold mb-2">Dance Performance</p>
                <p className="text-sm text-slate-500">Cultural Event</p>
              </div>
            </div>
            <div className="group bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl aspect-[9/16] flex items-center justify-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center">
                <div className="w-20 h-20 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-10 h-10 text-white" />
                </div>
                <p className="text-slate-700 font-semibold mb-2">DJ Set</p>
                <p className="text-sm text-slate-500">Corporate Event</p>
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
                Ready to Book Your Artist?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your entertainment needs and get the perfect artist for your event.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Book Artist Now
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
                  {(() => {
                    const selectedItem = artistServices.find(item => item.image === selectedImage)
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

