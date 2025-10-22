import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Button } from "../../components/ui/button"
import { ArrowRight, CheckCircle, Palette, Sparkles, ArrowLeft, Volume2, X } from "lucide-react"

// Decoration Services from the provided images
const decorationServices = [
  { 
    id: 1,
    slug: 'stage-decoration-basic', 
    name: 'Stage Decoration (Basic)', 
    price: '₹4,000 – ₹6,000',
    img: '/services/03ab03d3d4ddc645134259c0e31dbe11.jpg', 
    tag: 'Stage Setup',
    description: 'Floral, thematic, light setup',
    features: [
      'Fresh flower arrangements',
      'Basic lighting setup',
      'Fabric draping',
      'Welcome banner',
      'Setup & breakdown'
    ],
    gallery: [
      '/services/decoration/stage-classic.jpg',
      '/services/decoration/stage-thematic.jpg',
      '/services/decoration/stage-premium.jpg'
    ]
  },
  { 
    id: 2,
    slug: 'gate-decoration', 
    name: 'Gate Decoration (Floral/Balloon)', 
    price: '₹2,000 – ₹4,000',
    img: '/services/wedding.jpeg', 
    tag: 'Entrance',
    description: 'Entry arch with flowers or balloon styling',
    features: [
      'Floral arch design',
      'Balloon arrangements',
      'Welcome signage',
      'Pathway decoration',
      'Professional setup'
    ],
    gallery: [
      '/services/decoration/gate-floral.jpg',
      '/services/decoration/gate-balloon.jpg',
      '/services/decoration/gate-mixed.jpg'
    ]
  },
  { 
    id: 3,
    slug: 'mandap-setup', 
    name: 'Mandap Setup (Puja/Wedding)', 
    price: '₹6,000 – ₹12,000',
    img: '/services/sangeet.jpg', 
    tag: 'Wedding',
    description: 'Includes flower work, seating, lighting',
    features: [
      'Traditional mandap design',
      'Premium flower work',
      'Seating arrangements',
      'Professional lighting',
      'Cultural elements'
    ],
    gallery: [
      '/services/decoration/mandap-traditional.jpg',
      '/services/decoration/mandap-modern.jpg',
      '/services/decoration/mandap-royal.jpg'
    ]
  },
  { 
    id: 4,
    slug: 'lighting-setup', 
    name: 'Lighting Setup (Full venue)', 
    price: '₹3,000 – ₹10,000',
    img: '/services/decoration/lighting-setup.jpg', 
    tag: 'Lighting',
    description: 'Ambient, focus, and color lighting',
    features: [
      'Ambient lighting',
      'Focus lighting',
      'Color lighting effects',
      'Professional setup',
      'Technical support'
    ],
    gallery: [
      '/services/decoration/lighting-ambient.jpg',
      '/services/decoration/lighting-focus.jpg',
      '/services/decoration/lighting-color.jpg'
    ]
  },
  { 
    id: 5,
    slug: 'table-chair-decor', 
    name: 'Table & Chair Decor (with covers)', 
    price: '₹30 – ₹50 per seat',
    img: '/services/decoration/table-chair.jpg', 
    tag: 'Seating',
    description: 'Satin drapes, bows, and fabric arrangements',
    features: [
      'Satin table covers',
      'Chair decorations',
      'Fabric arrangements',
      'Color coordination',
      'Setup service'
    ],
    gallery: [
      '/services/decoration/table-elegant.jpg',
      '/services/decoration/table-modern.jpg',
      '/services/decoration/table-traditional.jpg'
    ]
  },
  { 
    id: 6,
    slug: 'canopy-tent', 
    name: 'Canopy / Tent Arrangement', 
    price: '₹20 – ₹30/sq.ft',
    img: '/services/decoration/canopy-tent.jpg', 
    tag: 'Coverage',
    description: 'Waterproof or cloth canopy for open-air events',
    features: [
      'Waterproof canopy',
      'Cloth tent options',
      'Professional installation',
      'Weather protection',
      'Custom sizing'
    ],
    gallery: [
      '/services/decoration/canopy-waterproof.jpg',
      '/services/decoration/canopy-cloth.jpg',
      '/services/decoration/canopy-luxury.jpg'
    ]
  },
  { 
    id: 7,
    slug: 'cultural-backdrop', 
    name: 'Cultural Backdrop Setup', 
    price: '₹2,500 – ₹5,000',
    img: '/services/decoration/cultural-backdrop.jpg', 
    tag: 'Backdrop',
    description: 'Printed backdrop with frame or fabric design',
    features: [
      'Custom printed backdrop',
      'Fabric design options',
      'Frame installation',
      'Theme coordination',
      'Professional setup'
    ],
    gallery: [
      '/services/decoration/backdrop-printed.jpg',
      '/services/decoration/backdrop-fabric.jpg',
      '/services/decoration/backdrop-custom.jpg'
    ]
  },
]

// AV System services from the provided images
const avServices = [
  { 
    id: 1,
    slug: 'sound-system-small', 
    name: 'Full Sound System (Small Event)', 
    price: '₹6,000 – ₹10,000',
    img: '/services/corporate.jpeg', 
    tag: 'Audio',
    description: 'Speakers, 2 wireless mics, mixer',
    features: [
      '2 Wireless microphones',
      'Professional speakers',
      'Audio mixer',
      'Sound technician',
      'Setup & testing'
    ],
    gallery: [
      '/services/av/sound-small-setup.jpg',
      '/services/av/sound-small-event.jpg',
      '/services/av/sound-small-tech.jpg'
    ]
  },
  { 
    id: 2,
    slug: 'sound-system-large', 
    name: 'Large Sound Setup', 
    price: '₹12,000 – ₹1,00,000',
    img: '/services/conference.jpg', 
    tag: 'Audio',
    description: 'For 200+ audience, DJ or cultural use',
    features: [
      'Multiple wireless mics',
      'High-power speakers',
      'Professional mixer',
      'DJ equipment',
      'Sound engineer'
    ],
    gallery: [
      '/services/av/sound-large-setup.jpg',
      '/services/av/sound-large-event.jpg',
      '/services/av/sound-large-dj.jpg'
    ]
  },
  { 
    id: 3,
    slug: 'projector-screen', 
    name: 'Projector & Screen Setup', 
    price: '₹3,000 – ₹25,000',
    img: '/services/av/projector-screen.jpg', 
    tag: 'Visual',
    description: 'For presentations or video showcase',
    features: [
      'HD Projector',
      'Large screen',
      'HDMI connections',
      'Setup & calibration',
      'Technical support'
    ],
    gallery: [
      '/services/av/projector-setup.jpg',
      '/services/av/projector-presentation.jpg',
      '/services/av/projector-video.jpg'
    ]
  },
  { 
    id: 4,
    slug: 'generator-backup', 
    name: 'Generator Backup (up to 5 hrs)', 
    price: '₹2,500 – ₹10,500',
    img: '/services/av/generator.jpg', 
    tag: 'Power',
    description: 'Includes operator',
    features: [
      'Silent generator',
      'Professional operator',
      'Fuel included',
      '5-hour backup',
      'Emergency support'
    ],
    gallery: [
      '/services/av/generator-silent.jpg',
      '/services/av/generator-operator.jpg',
      '/services/av/generator-backup.jpg'
    ]
  },
]

export default function DecorationAndAVServices() {
  const [selectedService, setSelectedService] = useState<any>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<'decoration' | 'av'>('decoration')
  const [searchParams] = useSearchParams()

  // Handle URL parameters for tab selection
  useEffect(() => {
    const tab = searchParams.get('tab')
    if (tab === 'av' || tab === 'decoration') {
      setActiveTab(tab)
    }
  }, [searchParams])

  const handleServiceClick = (service: any) => {
    setSelectedService(service)
  }

  const closeModal = () => {
    setSelectedService(null)
    setSelectedImage(null)
  }

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
      <section className="relative w-full min-h-[60vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/services/03ab03d3d4ddc645134259c0e31dbe11.jpg')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="mb-8">
            <Link to="/orchid-gallery" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Orchid Gallery
            </Link>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[50vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Palette className="w-4 h-4 mr-2" />
                  Complete Event Services
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Decoration & AV</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Comprehensive event services including professional decoration and audio-visual solutions. From intimate gatherings to grand celebrations, we provide everything you need for a perfect event.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Quote <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Portfolio
                </Button>
              </div>

              {/* Service Range */}
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-5 h-5 text-amber-600" />
                  <span className="text-lg font-semibold text-amber-800">Complete Event Solutions</span>
                </div>
                <div className="text-3xl font-bold text-amber-900">₹2,000 – ₹1,00,000</div>
                <p className="text-amber-700 text-sm mt-1">Decoration and AV services for any event size</p>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-center bg-cover" style={{ backgroundImage: "url('/services/03ab03d3d4ddc645134259c0e31dbe11.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-slate-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-slate-200">
              <button
                onClick={() => setActiveTab('decoration')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'decoration'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Palette className="w-5 h-5 inline mr-2" />
                Decoration Services
              </button>
              <button
                onClick={() => setActiveTab('av')}
                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === 'av'
                    ? 'bg-amber-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Volume2 className="w-5 h-5 inline mr-2" />
                AV System Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              {activeTab === 'decoration' ? 'Decoration Services' : 'AV System Services'}
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              {activeTab === 'decoration' ? 'Professional Decoration Services' : 'Audio-Visual Solutions'}
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              {activeTab === 'decoration' 
                ? 'Transform your venue with our professional decoration services. From stage setups to entrance decorations, we create stunning visual experiences.'
                : 'Professional audio-visual equipment and services for all types of events. Crystal clear sound and stunning visuals guaranteed.'
              }
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {(activeTab === 'decoration' ? decorationServices : avServices).map((service) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.img} alt={service.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-white text-sm px-3 py-1 rounded-full bg-amber-600 font-medium">{service.tag}</span>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <span className="text-white text-lg font-bold bg-black/50 px-3 py-1 rounded-lg">{service.price}</span>
                  </div>
                </div>
                <div className="p-6">
                  <h5 className="text-xl font-heading font-bold text-slate-900 group-hover:text-amber-600 transition-colors mb-2">{service.name}</h5>
                  <p className="text-slate-600 text-sm mb-4">{service.description}</p>
                  <div className="flex items-center text-amber-600 font-semibold">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-6xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-slate-600 hover:text-slate-900 z-10 bg-white rounded-full p-2 shadow-lg"
            >
              <X className="h-6 w-6" />
            </button>
            
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Side - Images */}
              <div className="relative">
                <div className="aspect-[4/3] bg-slate-100">
                  <img 
                    src={selectedService.img} 
                    alt={selectedService.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Gallery Thumbnails */}
                <div className="p-4 bg-slate-50">
                  <h4 className="text-lg font-semibold text-slate-900 mb-3">More Designs</h4>
                  <div className="grid grid-cols-3 gap-2">
                    {selectedService.gallery.map((img: string, index: number) => (
                      <div
                        key={index}
                        onClick={() => setSelectedImage(img)}
                        className="aspect-square bg-slate-200 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                      >
                        <img src={img} alt={`Design ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Right Side - Details */}
              <div className="p-8 overflow-y-auto max-h-[90vh]">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">
                        {selectedService.tag}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">{selectedService.name}</h3>
                    <div className="text-2xl font-bold text-amber-600 mb-4">{selectedService.price}</div>
                    <p className="text-slate-600 text-lg">{selectedService.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-xl font-semibold text-slate-900 mb-4">What's Included</h4>
                    <ul className="space-y-3">
                      {selectedService.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-amber-500 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-200">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        Book This Service <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                        Get Quote
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 z-10 bg-black/50 rounded-full p-2"
            >
              <X className="h-6 w-6" />
            </button>
            <img 
              src={selectedImage} 
              alt="Full size" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h6 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Ready to create your perfect event?
              </h6>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Contact us today to discuss your decoration and AV requirements and get a customized quote.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                Get Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
