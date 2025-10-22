import { useState } from 'react'
import { Button } from "../../components/ui/button"
import { X, ArrowRight, Star, CheckCircle, Utensils, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials"

export default function CateringServices() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const cateringServices = [
    {
      service: "Veg Basic",
      price: "₹350 – ₹600",
      notes: "4 items + dessert + client req.",
      image: "/Ghoti/imageGhoti(9).jpg"
    },
    {
      service: "Non-Veg Standard",
      price: "₹750 – ₹1400+",
      notes: "Chicken/Fish, 5 items + dessert",
      image: "/Ghoti/imageGhoti(10).jpg"
    },
    {
      service: "Premium Buffet",
      price: "₹1450 – ₹1700+",
      notes: "Includes Live Counter, Mocktails, Multi-cuisine",
      image: "/Ghoti/imageGhoti(11).jpg"
    }
  ]

  const dishTestimonials = [
    {
      quote: "Traditional Bengali fish curry prepared with fresh river fish, aromatic spices, and coconut milk. A perfect blend of flavors that represents authentic Bengali cuisine.",
      name: "Fish Curry",
      designation: "Signature Bengali Dish",
      src: "/Ghoti/hero-image(2).jpg"
    },
    {
      quote: "Tender chicken pieces cooked in rich Bengali spices with potatoes and onions. This classic dish brings the authentic taste of Bengal to your plate.",
      name: "Chicken Curry",
      designation: "Popular Bengali Main Course",
      src: "/Ghoti/imageGhoti(12).jpg"
    },
    {
      quote: "Soft and spongy rasgullas soaked in light sugar syrup. These traditional Bengali sweets are a perfect ending to any meal.",
      name: "Rasgulla",
      designation: "Traditional Bengali Sweet",
      src: "/Ghoti/hero-image(4).jpg"
    },
    {
      quote: "Creamy and rich sandesh made with fresh cottage cheese and cardamom. A delicate Bengali sweet that melts in your mouth.",
      name: "Sandesh",
      designation: "Premium Bengali Dessert",
      src: "/Ghoti/imageGhoti(24).jpg"
    },
    {
      quote: "Fluffy rice served with aromatic dal and seasonal vegetables. A wholesome Bengali meal that brings comfort and satisfaction.",
      name: "Rice & Dal",
      designation: "Essential Bengali Staple",
      src: "/Ghoti/imageGhoti(25).jpg"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
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
        <div className="absolute inset-0 bg-[url('/ghoti-bangal.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Utensils className="w-4 h-4 mr-2" />
                  Authentic Bengali Catering
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Food & Catering</span>
                  <br />
                  <span className="text-amber-600"> Support</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Experience the rich flavors of Bengal with our authentic cuisine. Through Ghoti Na Bangal, 
                  we provide traditional Bengali dishes prepared with love and served with warmth.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/ghoti/menu">
                  <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Menu <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Gallery
                </Button>
              </div>

              {/* Features */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Traditional Bengali recipes passed down through generations</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Fresh ingredients sourced locally</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Professional serving staff and setup</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
                  <p className="text-slate-700">Customizable menus for all occasions</p>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] bg-center bg-cover" style={{ backgroundImage: "url('/home/catering.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">200+</div>
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
              Catering Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Authentic Bengali cuisine and premium catering services for all your special occasions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cateringServices.map((service, index) => (
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
                  <Link to="/ghoti/menu">
                    <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl transition-all duration-300">
                      Order Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AnimatedTestimonials 
              testimonials={dishTestimonials} 
              autoplay={true}
            />
          </div>
        </div>
      </div>

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
              Watch our latest catering projects and see the authentic Bengali cuisine we prepare.
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
                <p className="text-slate-700 font-semibold">Wedding Catering</p>
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
                <p className="text-slate-700 font-semibold">Festival Catering</p>
                <p className="text-sm text-slate-500">Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      

      {/* Special Features */}
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
                <Utensils className="w-4 h-4 mr-2" />
                Why Choose Us
              </div>
              <h2 className="text-4xl lg:text-6xl font-heading font-bold bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-transparent">
                Why Choose Ghoti Na Bangal?
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                Experience the authentic taste of Bengal with our traditional recipes, fresh ingredients, and professional service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  title: "Authentic Taste", 
                  desc: "Traditional recipes with authentic Bengali flavors that bring back childhood memories",
                  icon: "🍽️",
                  color: "from-amber-500 to-orange-600"
                },
                { 
                  title: "Fresh Ingredients", 
                  desc: "We use only the freshest ingredients sourced from local markets and trusted suppliers",
                  icon: "🥬",
                  color: "from-emerald-500 to-green-600"
                },
                { 
                  title: "Professional Service", 
                  desc: "Experienced staff ensures smooth service and memorable dining experience for your guests",
                  icon: "👨‍🍳",
                  color: "from-blue-500 to-indigo-600"
                }
              ].map((feature, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-50 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2"></div>
                  <div className="relative p-8 border border-slate-200/50 rounded-2xl bg-white/80 backdrop-blur-sm group-hover:bg-white transition-all duration-300">
                    <div className="flex flex-col items-center text-center space-y-6">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br  flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon}
                      </div>
                      <div className="space-y-3">
                        <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
                Ready to Taste Authentic Bengali Cuisine?
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your catering needs and get a personalized menu for your event.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/ghoti-menu">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Menu & Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
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
                    const selectedItem = cateringServices.find(item => item.image === selectedImage)
                    return selectedItem ? (
                      <div className="text-white">
                        <h3 className="text-2xl font-bold mb-2">{selectedItem.service}</h3>
                        <p className="text-lg font-semibold text-amber-600">{selectedItem.price}</p>
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
