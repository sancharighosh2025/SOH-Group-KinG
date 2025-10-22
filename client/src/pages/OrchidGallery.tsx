import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { ArrowRight, Star, CheckCircle, Users, Calendar, Award, Palette, Sparkles } from "lucide-react"

const features = [
  { icon: '🎯', title: 'Clear Planning', text: 'Milestone-based timelines and transparent scope.' },
  { icon: '🤝', title: 'Trusted Vendors', text: 'Curated partners for decor, stage, and catering.' },
  { icon: '🧩', title: 'End-to-End', text: 'From concept to wrap-up with on-site coordination.' },
  { icon: '💡', title: 'Creative Styling', text: 'Theme, palette, and layout crafted to your story.' },
]

const services = [
  { name: 'Wedding Decor', slug: 'wedding-decor', img: "/home/service/Wedding.jpg" },
  { name: 'Engagement', slug: 'engagement', img: "/home/service/Engagement.jpg" },
  { name: 'Corporate', slug: 'corporate', img: "/home/service/corporate.jpeg" },
  { name: 'Baby Shower', slug: 'baby-shower', img: "/home/service/baby-shower.jpg" },
  { name: 'Birthday', slug: 'birthday', img: "/home/service/birthday.jpg" },
  { name: 'Cultural Night', slug: 'cultural', img: "/home/service/Cultural.jpg" },
  { name: 'Anniversary', slug: 'anniversary', img: "/home/service/Anniversary.jpg" },
  { name: 'Product Launch', slug: 'product-launch', img: "/home/service/ProductLaunch.jpg" },
  { name: 'Conference', slug: 'conference', img: "/home/service/Conference.jpg" },
]

// Scroll images for gallery section
const scrollImages = [
  { img: '/Orchid/imageOrchid (1).jpg', alt: 'Orchid Event 1' },
  { img: '/Orchid/imageOrchid (2).jpg', alt: 'Orchid Event 2' },
  { img: '/Orchid/imageOrchid (3).jpg', alt: 'Orchid Event 3' },
  { img: '/Orchid/imageOrchid (4).jpg', alt: 'Orchid Event 4' },
  { img: '/Orchid/imageOrchid (5).jpg', alt: 'Orchid Event 5' },
  { img: '/Orchid/imageOrchid (6).jpg', alt: 'Orchid Event 6' },
  { img: '/Orchid/imageOrchid (7).jpg', alt: 'Orchid Event 7' },
  { img: '/Orchid/imageOrchid (8).jpg', alt: 'Orchid Event 8' },
  { img: '/Orchid/imageOrchid (9).jpg', alt: 'Orchid Event 9' },
  { img: '/Orchid/imageOrchid (11).jpg', alt: 'Orchid Event 10' },
  { img: '/Orchid/imageOrchid (12).jpg', alt: 'Orchid Event 11' },
  { img: '/Orchid/imageOrchid (13).jpg', alt: 'Orchid Event 12' },
  { img: '/Orchid/imageOrchid (14).jpg', alt: 'Orchid Event 13' },
  { img: '/Orchid/imageOrchid (15).jpg', alt: 'Orchid Event 14' },
  { img: '/Orchid/imageOrchid (16).jpg', alt: 'Orchid Event 15' },
  { img: '/Orchid/imageOrchid (17).jpg', alt: 'Orchid Event 16' },
  { img: '/Orchid/imageOrchid (18).jpg', alt: 'Orchid Event 17' },
  { img: '/Orchid/imageOrchid (19).jpg', alt: 'Orchid Event 18' },
  { img: '/Orchid/imageOrchid (20).jpg', alt: 'Orchid Event 19' },
  { img: '/Orchid/imageOrchid (21).jpg', alt: 'Orchid Event 20' },
  { img: '/Orchid/imageOrchid (22).jpg', alt: 'Orchid Event 21' },
  { img: '/Orchid/imageOrchid (23).jpg', alt: 'Orchid Event 22' },
  { img: '/Orchid/imageOrchid (24).jpg', alt: 'Orchid Event 23' },
  { img: '/Orchid/imageOrchid (25).jpg', alt: 'Orchid Event 24' },
]

// Decoration services from the provided images
const decorationServices = [
  { 
    slug: 'stage-decoration-basic', 
    name: 'Stage Decoration (Basic)', 
    price: '₹4,000 – ₹6,000',
    img: '/Orchid/imageOrchid (61).jpg', 
    tag: 'Stage Setup',
    description: 'Floral, thematic, light setup'
  },
  { 
    slug: 'gate-decoration', 
    name: 'Gate Decoration (Floral/Balloon)', 
    price: '₹2,000 – ₹4,000',
    img: '/Orchid/imageOrchid (45).jpg', 
    tag: 'Entrance',
    description: 'Entry arch with flowers or balloon styling'
  },
  { 
    slug: 'mandap-setup', 
    name: 'Mandap Setup (Puja/Wedding)', 
    price: '₹6,000 – ₹12,000',
    img: '/Orchid/imageOrchid (59).jpg', 
    tag: 'Wedding',
    description: 'Includes flower work, seating, lighting'
  },
  { 
    slug: 'lighting-setup', 
    name: 'Lighting Setup (Full venue)', 
    price: '₹3,000 – ₹10,000',
    img: '/Orchid/imageOrchid (50).jpg', 
    tag: 'Lighting',
    description: 'Ambient, focus, and color lighting'
  },
  { 
    slug: 'table-chair-decor', 
    name: 'Table & Chair Decor (with covers)', 
    price: '₹30 – ₹50 per seat',
    img: '/Orchid/imageOrchid(74).jpg', 
    tag: 'Seating',
    description: 'Satin drapes, bows, and fabric arrangements'
  },
  { 
    slug: 'canopy-tent', 
    name: 'Canopy / Tent Arrangement', 
    price: '₹20 – ₹30/sq.ft',
    img: '/Orchid/imageOrchid(75).jpg', 
    tag: 'Coverage',
    description: 'Waterproof or cloth canopy for open-air events'
  },
  { 
    slug: 'cultural-backdrop', 
    name: 'Cultural Backdrop Setup', 
    price: '₹2,500 – ₹5,000',
    img: '/Orchid/imageOrchid (52).jpg', 
    tag: 'Backdrop',
    description: 'Printed backdrop with frame or fabric design'
  },
]

// AV System services from the provided images
const avServices = [
  { 
    slug: 'sound-system-small', 
    name: 'Full Sound System (Small Event)', 
    price: '₹6,000 – ₹10,000',
    img: '/Orchid/imageOrchid (76).jpg', 
    tag: 'Audio',
    description: 'Speakers, 2 wireless mics, mixer'
  },
  { 
    slug: 'sound-system-large', 
    name: 'Large Sound Setup', 
    price: '₹12,000 – ₹1,00,000',
    img: '/Orchid/imageOrchid (77).jpg', 
    tag: 'Audio',
    description: 'For 200+ audience, DJ or cultural use'
  },
  { 
    slug: 'projector-screen', 
    name: 'Projector & Screen Setup', 
    price: '₹3,000 – ₹25,000',
    img: '/Orchid/imageOrchid (78).jpg', 
    tag: 'Visual',
    description: 'For presentations or video showcase'
  },
  { 
    slug: 'generator-backup', 
    name: 'Generator Backup (up to 5 hrs)', 
    price: '₹2,500 – ₹10,500',
    img: '/Orchid/imageOrchid (79).jpg', 
    tag: 'Power',
    description: 'Includes operator'
  },
]

const testimonials = [
  { name: 'Sohini Das', role: 'Bride', avatar: '/test1.jpg', text: 'Flawless coordination and gorgeous stage—every detail felt personal.' },
  { name: 'Arindam Roy', role: 'Groom', avatar: '/test5.jpg', text: 'Guests kept praising the décor and smooth flow. Highly recommend!' },
  { name: 'Megha Sen', role: 'Planner', avatar: '/test3.jpg', text: 'Professional team, on-time delivery, and stunning visuals.' },
]

export default function OrchidEvents() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <style>{`
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .marquee-rail {
          position: relative;
          overflow: hidden;
        }
        .marquee-track {
          display: flex;
          gap: 1.5rem; /* matches Tailwind gap-6 */
          will-change: transform;
        }
        .no-select {
          user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
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
        <div className="absolute inset-0 bg-[url('/Orchid/orchid-poster.png')] bg-cover bg-center opacity-10" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[40vh]">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                  <Palette className="w-4 h-4 mr-2" />
                  Full Service Event Planning
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                  <span className="gradient-text">Orchid Gallery</span>
                </h1>
                <p className="text-xl text-slate-600 leading-relaxed max-w-2xl">
                  Full-service event planning that blends aesthetics and logistics into seamless, memorable experiences.
                  From concept to execution, we create extraordinary events that leave lasting impressions.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Get Started <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Portfolio
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">300+</div>
                  <div className="text-sm text-slate-600">Events Planned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">99%</div>
                  <div className="text-sm text-slate-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-900">5★</div>
                  <div className="text-sm text-slate-600">Average Rating</div>
                </div>
              </div>
            </div>

            {/* Right Content - Image/Video */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[5/5] bg-center bg-cover" style={{ backgroundImage: "url('/Orchid/heroOrchid.jpg')" }}>
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

      {/* Features Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Why choose us to plan your event
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              We combine creativity with precision to deliver exceptional events that exceed expectations.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, index) => (
              <div
                key={f.title}
                className="group bg-white rounded-2xl p-5 shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                  {f.icon}
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900">{f.title}</h3>
                <p className="text-slate-600 leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h3 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">Our Best Services</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive event services that cover every aspect of your special occasion.
            </p>
          </div>
          <BestServicesMarquee brand="#1e293b" services={services} />
        </div>
      </section>

      {/* Gallery Scroll Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Gallery
            </div>
            <h4 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">Event Gallery</h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our portfolio of beautifully executed events and celebrations.
            </p>
          </div>
          <GalleryScroll images={scrollImages} />
        </div>
      </section>

      {/* Decoration Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Decoration Services
              </div>
              <h4 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900">Decoration Services</h4>
            </div>
            <Link to="/services/decoration-and-av" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-amber-500 hover:text-amber-600 transition-colors font-semibold">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {decorationServices.map((service) => (
              <Link
                key={service.slug}
                to="/services/decoration-and-av?tab=decoration"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AV System Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-16">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-4">
                <Sparkles className="w-4 h-4 mr-2" />
                Sound, Mic & AV System
              </div>
              <h4 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900">Sound, Mic & AV System</h4>
            </div>
            <Link to="/services/decoration-and-av" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-amber-500 hover:text-amber-600 transition-colors font-semibold">
              View all <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {avServices.map((service) => (
              <Link
                key={service.slug}
                to="/services/decoration-and-av?tab=av"
                className="group bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-200 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
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
                  <p className="text-slate-600 text-sm">{service.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h5 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">Testimonials</h5>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                    <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  </div>
                  <div>
                    <div className="font-heading font-bold text-lg text-slate-900">{t.name}</div>
                    <div className="text-sm text-slate-600">{t.role}</div>
                  </div>
                </div>
                <p className="text-slate-700 leading-relaxed mb-4">{t.text}</p>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h6 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Ready to start a new project with us?
              </h6>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                Connect to craft a tailored decor plan and timeline for the next celebration.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Connect us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-2 border-white text-slate-900 hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function GalleryScroll({
  images,
}: {
  images: { img: string; alt: string }[]
}) {
  const railRef = React.useRef<HTMLDivElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const animRef = React.useRef<number | null>(null)
  const posRef = React.useRef(0)
  const speedRef = React.useRef(0.3) // Slower speed for gallery

  const play = React.useCallback(() => {
    if (animRef.current != null) return
    const step = () => {
      const track = trackRef.current
      if (!track) return
      posRef.current -= speedRef.current
      const width = track.scrollWidth / 2
      if (Math.abs(posRef.current) >= width) {
        posRef.current = 0
      }
      track.style.transform = `translateX(${posRef.current}px)`
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
  }, [])

  const pause = React.useCallback(() => {
    if (animRef.current != null) {
      cancelAnimationFrame(animRef.current)
      animRef.current = null
    }
  }, [])

  React.useEffect(() => {
    const rail = railRef.current
    const track = trackRef.current
    if (!rail || !track) return

    // Duplicate content once for seamless loop
    const original = track.innerHTML
    track.innerHTML = original + original

    // Start marquee
    play()

    // Pause on interaction
    const onEnter = () => pause()
    const onLeave = () => play()
    rail.addEventListener('mouseenter', onEnter)
    rail.addEventListener('mouseleave', onLeave)
    rail.addEventListener('focusin', onEnter)
    rail.addEventListener('focusout', onLeave)

    // Touch: pause while touching, resume after
    const onTouchStart = () => pause()
    const onTouchEnd = () => play()
    rail.addEventListener('touchstart', onTouchStart, { passive: true })
    rail.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      pause()
      rail.removeEventListener('mouseenter', onEnter)
      rail.removeEventListener('mouseleave', onLeave)
      rail.removeEventListener('focusin', onEnter)
      rail.removeEventListener('focusout', onLeave)
      rail.removeEventListener('touchstart', onTouchStart)
      rail.removeEventListener('touchend', onTouchEnd)
    }
  }, [play, pause])

  return (
    <div className="mt-6">
      <div
        ref={railRef}
        className="
          marquee-rail no-scrollbar
          -ml-4 pl-4 sm:ml-0 sm:pl-0
          py-2
        "
        aria-label="Event Gallery auto-scrolling"
      >
        <div ref={trackRef} className="marquee-track items-center">
          {images.map((image, index) => (
            <div
              key={`${image.alt}-${index}`}
              className="group block shrink-0"
              aria-label={image.alt}
              title={image.alt}
            >
              <div className="size-48 sm:size-56 rounded-2xl overflow-hidden relative shadow-lg border-4 border-white hover:border-amber-300 transition-colors">
                <img src={image.img} alt={image.alt} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Edge gradient masks */}
      <div className="relative">
        <div className="pointer-events-none absolute -top-24 left-0 h-24 w-10 sm:w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-0 h-24 w-10 sm:w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}

function BestServicesMarquee({
  brand,
  services,
}: {
  brand: string
  services: { name: string; slug: string; img: string }[]
}) {
  const railRef = React.useRef<HTMLDivElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const animRef = React.useRef<number | null>(null)
  const posRef = React.useRef(0)
  const speedRef = React.useRef(0.4) // px per frame (~24px/s @60fps). Adjust as needed.

  const play = React.useCallback(() => {
    if (animRef.current != null) return
    const step = () => {
      const track = trackRef.current
      if (!track) return
      posRef.current -= speedRef.current
      const width = track.scrollWidth / 2 // half because we duplicate once
      if (Math.abs(posRef.current) >= width) {
        posRef.current = 0
      }
      track.style.transform = `translateX(${posRef.current}px)`
      animRef.current = requestAnimationFrame(step)
    }
    animRef.current = requestAnimationFrame(step)
  }, [])

  const pause = React.useCallback(() => {
    if (animRef.current != null) {
      cancelAnimationFrame(animRef.current)
      animRef.current = null
    }
  }, [])

  React.useEffect(() => {
    const rail = railRef.current
    const track = trackRef.current
    if (!rail || !track) return

    // Duplicate content once for seamless loop
    const original = track.innerHTML
    track.innerHTML = original + original

    // Start marquee
    play()

    // Pause on interaction
    const onEnter = () => pause()
    const onLeave = () => play()
    rail.addEventListener('mouseenter', onEnter)
    rail.addEventListener('mouseleave', onLeave)
    rail.addEventListener('focusin', onEnter)
    rail.addEventListener('focusout', onLeave)

    // Touch: pause while touching, resume after
    const onTouchStart = () => pause()
    const onTouchEnd = () => play()
    rail.addEventListener('touchstart', onTouchStart, { passive: true })
    rail.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      pause()
      rail.removeEventListener('mouseenter', onEnter)
      rail.removeEventListener('mouseleave', onLeave)
      rail.removeEventListener('focusin', onEnter)
      rail.removeEventListener('focusout', onLeave)
      rail.removeEventListener('touchstart', onTouchStart)
      rail.removeEventListener('touchend', onTouchEnd)
    }
  }, [play, pause])

  return (
    <div className="mt-6">
      <div
        ref={railRef}
        className="
          marquee-rail no-scrollbar
          -ml-4 pl-4 sm:ml-0 sm:pl-0
          py-2
        "
        aria-label="Our Best Services auto-scrolling"
      >
        <div ref={trackRef} className="marquee-track items-center">
          {services.map((s) => (
            <Link
              key={s.slug}
              to={`/components/service/${s.slug}`}
              className="group block shrink-0"
              aria-label={s.name}
              title={s.name}
            >
              <div
                className="size-28 sm:size-32 rounded-full border overflow-hidden relative"
                style={{ borderColor: brand }}
              >
                <img src={s.img} alt={s.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 grid place-items-center">
                  <span className="text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                    {s.name}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Edge gradient masks (optional visual hint) */}
      <div className="relative">
        <div className="pointer-events-none absolute -top-24 left-0 h-24 w-10 sm:w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-0 h-24 w-10 sm:w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </div>
  )
}
