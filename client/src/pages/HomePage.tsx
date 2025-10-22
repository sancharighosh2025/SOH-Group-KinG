import React from 'react'
import { Button } from "../components/ui/button"
import { ArrowRight, Star, CheckCircle, Award } from "lucide-react"
import { Link } from "react-router-dom"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const rotatingWordRef = React.useRef<HTMLSpanElement | null>(null)
  const heroRef = React.useRef<HTMLDivElement | null>(null)
  const backgroundImagesRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const words = ["Simplified", "Organized", "Memorable", "Seamless"]
    let i = 0
    const el = rotatingWordRef.current
    if (!el) return
    const swap = () => {
      i = (i + 1) % words.length
      gsap.timeline()
        .to(el, { y: 30, opacity: 0, duration: 0.3, ease: "power2.out" })
        .set(el, { y: -30, textContent: words[i] as any })
        .to(el, { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" })
    }
    const interval = setInterval(swap, 2000)
    return () => clearInterval(interval)
  }, [])

  // Background images rotation effect
  React.useEffect(() => {
    const images = [
      "/home/hero1.jpg",
      "/home/hero2.jpg",
      "/home/hero3.jpg",
      "/home/hero4.png",
      "/home/hero5.png",
    ]
    
    const container = backgroundImagesRef.current
    if (!container) return

    let currentIndex = 0
    const imageElements = container.querySelectorAll('.bg-image')
    
    // Set initial state
    imageElements.forEach((img, index) => {
      gsap.set(img, { 
        opacity: index === 0 ? 1 : 0,
        scale: index === 0 ? 1 : 1.1
      })
    })

    const rotateImages = () => {
      const currentImg = imageElements[currentIndex]
      const nextIndex = (currentIndex + 1) % images.length
      const nextImg = imageElements[nextIndex]

      // If we're at the last image (index 4), instantly jump to first image
      if (currentIndex === images.length - 1) {
        // Completely instant change - no GSAP timeline at all
        gsap.set(currentImg, { opacity: 0, scale: 1, immediateRender: true })
        gsap.set(imageElements[0], { opacity: 1, scale: 1, immediateRender: true })
        currentIndex = 0
      } else {
        // Normal fade transition for other images
        gsap.timeline()
          .to(currentImg, { 
            scale: 1.2, 
            duration: 2, 
            ease: "power2.out" 
          })
          .set(currentImg, { 
            opacity: 0
          })
          .set(nextImg, { 
            opacity: 1, 
            scale: 1
          })
        currentIndex = nextIndex
      }
    }

    const interval = setInterval(rotateImages, 4000)
    return () => clearInterval(interval)
  }, [])

  // Live art slideshow effect
  const liveArtSlideshowRef = React.useRef<HTMLDivElement | null>(null)
  React.useEffect(() => {
    const liveArtImages = [
      "/AR/imageAR1.jpg",
      "/AR/imageAR2.jpg", 
      "/AR/imageAR3.heic",
      "/AR/imageAR4.jpg",
      "/AR/imageAR5.heic",
      "/AR/imageAR6.jpg",
      "/AR/imageAR7.jpg",
      "/AR/imageAR8.jpg"
    ]
    
    const container = liveArtSlideshowRef.current
    if (!container) return

    let currentIndex = 0
    const imageElements = container.querySelectorAll('.live-art-slide')
    
    // Set initial state - first image visible, others positioned to the right
    imageElements.forEach((img, index) => {
      gsap.set(img, { 
        x: index === 0 ? 0 : '100%',
        opacity: index === 0 ? 1 : 0
      })
    })

    const slideImages = () => {
      const currentImg = imageElements[currentIndex]
      const nextIndex = (currentIndex + 1) % liveArtImages.length
      const nextImg = imageElements[nextIndex]

      // Animate current image out to the left
      gsap.to(currentImg, { 
        x: '-100%', 
        opacity: 0,
        duration: 0.8, 
        ease: "power2.inOut" 
      })

      // Animate next image in from the right
      gsap.fromTo(nextImg, 
        { x: '100%', opacity: 0 },
        { 
          x: 0, 
          opacity: 1,
          duration: 0.8, 
          ease: "power2.inOut" 
        }
      )

      currentIndex = nextIndex
    }

    const interval = setInterval(slideImages, 3000)
    return () => clearInterval(interval)
  }, [])

  React.useEffect(() => {
    const container = heroRef.current?.parentElement ?? document
    const headings = container.querySelectorAll('[data-animate="reveal-heading"]')
    headings.forEach((h) => {
      gsap.fromTo(
        h,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: h,
            start: "top 85%",
            end: "top 10%",
            toggleActions: "play reverse play reverse",
          },
        }
      )
    })

    // Quote section animations
    const leftQuote = container.querySelector('[data-animate="left-quote"]')
    const rightQuote = container.querySelector('[data-animate="right-quote"]')
    const quoteText = container.querySelector('[data-animate="quote-text"]')

    if (leftQuote && rightQuote && quoteText) {
      // Create a timeline for the quote section
      const quoteTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: quoteText,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        }
      })

      // Animate quotes opening (moving towards center)
      quoteTimeline
        .to(leftQuote, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out"
        }, 0)
        .to(rightQuote, {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out"
        }, 0)
        // Text appears after quotes start moving
        .to(quoteText, {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }, 0.3)

      // Create reverse animation for when scrolling down
      const reverseTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: quoteText,
          start: "top 20%",
          end: "bottom 80%",
          toggleActions: "play reverse play reverse",
        }
      })

      // Animate quotes closing (moving away from center) and text fading
      reverseTimeline
        .to(leftQuote, {
          x: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.in"
        }, 0)
        .to(rightQuote, {
          x: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.in"
        }, 0)
        .to(quoteText, {
          y: -30,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in"
        }, 0)
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill())
    }
  }, [])

  const serviceItems = [
    { label: "Birthday Party", to: "/services/birthday", img: "/home/service/birthday.jpg" },
    { label: "Baby Shower", to: "/services/baby-shower", img: "/home/service/baby-shower.jpg" },
    { label: "Corporate", to: "/services/corporate", img: "/home/service/corporate.jpeg" },
    { label: "Wedding", to: "/services/wedding", img: "/home/service/Wedding.jpg" },
    { label: "Engagement", to: "/services/engagement", img: "/home/service/Engagement.jpg" },
    { label: "Cultural", to: "/services/cultural", img: "/home/service/Cultural.jpg" },
    { label: "Anniversary", to: "/services/anniversary", img: "/home/service/Anniversary.jpg" },
    { label: "Haldi & Mehndi", to: "/services/haldi-mehndi", img: "/home/service/HaldiMehndi.jpg" },
    { label: "Sangeet", to: "/services/sangeet", img:"/home/service/Sangeet.jpg" },
    { label: "Conference", to: "/services/conference", img: "/home/service/Conference.jpg" },
    { label: "Product Launch", to: "/services/product-launch", img: "/home/service/ProductLaunch.jpg" },
    { label: "Festivals", to: "/services/festivals", img: "/home/service/Festivals.jpg" },
  ]

  // Best services with videos (avoid spaces/brackets in file names for dev stability)
  const bestServices = [
    {
      name: "Orchid Gallery",
      to: "orchid-gallery",
      video: "/video3.mp4",
      poster: "/best/orchid-gallery-poster.jpg",
      logo: "/Logo/Logo-Orchid.png",
      subtitle: "Seamless planning and premium styling",
    },
    {
      name: "Ar ChitraKola",
      to: "ar-chitrakola",
      video: "/video1.mp4",
      poster: "/best/ar-chitrakola-poster.jpg",
      logo: "/Logo/Logo-AR2.png",
      subtitle: "Photography and creative direction",
    },
    {
      name: "Ghoti na Bangal",
      to: "ghoti-na-bangal",
      video: "video2.mp4",
      poster: "/best/ghoti-na-bangal-poster.jpg",
      logo: "/Logo/Logo-Ghoti.png",
      subtitle: "Heritage Bengali catering and decor",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Utilities */}
      <style>{`
        .no-scrollbar { scrollbar-width: none; }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .marquee-track {
          display: flex;
          gap: 1.5rem;
          will-change: transform;
        }
        .gradient-text {
          background: linear-gradient(135deg, #1e293b 0%, #64748b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        {/* Background Images */}
        <div ref={backgroundImagesRef} className="absolute inset-0">
          <div 
            className="bg-image absolute inset-0 bg-cover bg-center transition-opacity duration-1500"
            style={{ backgroundImage: "url('/home/hero1.jpg')" }}
          />
          <div 
            className="bg-image absolute inset-0 bg-cover bg-center transition-opacity duration-1500"
            style={{ backgroundImage: "url('/home/hero2.jpg')" }}
          />
          <div 
            className="bg-image absolute inset-0 bg-cover bg-center transition-opacity duration-1500"
            style={{ backgroundImage: "url('/home/hero3.jpg')" }}
          />
          <div 
            className="bg-image absolute inset-0 bg-cover bg-center transition-opacity duration-1500"
            style={{ backgroundImage: "url('/home/hero4.png')" }}
          />
          <div 
            className="bg-image absolute inset-0 bg-cover bg-center transition-opacity duration-1500"
            style={{ backgroundImage: "url('/home/hero5.png')" }}
          />
        </div>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="max-w-4xl text-center">
            <div className="space-y-5">
              <div className="space-y-3">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium">
                  <Star className="w-4 h-4 mr-2" />
                  Premium Event Management Services
                </div>
                <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight text-white">
                  <span className="text-white">Event Management</span>
                  <br />
                  <span ref={rotatingWordRef} className="text-amber-300">Simplified</span>
                </h1>
                <p className="text-xl text-white/90 leading-relaxed max-w-2xl mx-auto">
                  Transform your vision into unforgettable experiences with our comprehensive event planning services. 
                  From intimate gatherings to grand celebrations, we handle every detail.
                </p>
              </div>
              
              <div className="flex justify-center">
                <Button size="lg" className="bg-white hover:bg-white/90 text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Start Planning <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-white/80">Events Planned</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">98%</div>
                  <div className="text-sm text-white/80">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5+</div>
                  <div className="text-sm text-white/80">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  Trusted Event Partners
                </div>
                <h2 data-animate="reveal-heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900">
                  Full Service Event Planning
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  We are your trusted partner for creating extraordinary events. As a full-service event management company, 
                  we take care of every detail, from concept to execution, ensuring a seamless and unforgettable experience.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Complete event planning and coordination",
                  "Professional vendor management",
                  "Custom design and decoration",
                  "On-site event management"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Link to="/about">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                  Learn More About Us <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              {/* Two overlapping images like the design */}
              <div className="relative">
                {/* Background Image - Conference/Corporate Event */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-center bg-cover" 
                       style={{ backgroundImage: "url('/home/about2.jpeg')" }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  </div>
                </div>
                
                {/* Overlapping Image - Party/Celebration */}
                <div className="absolute -bottom-20 -right-20 w-80 h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
                  <div className="w-full h-full bg-center bg-cover" 
                       style={{ backgroundImage: "url('/home/about1.jpg')" }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  
                  {/* Light blue border effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-blue-200/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

   

      {/* Live Sketching Section */}
      <Link to="/services/live-sketching" className="block">
        <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden cursor-pointer group hover:from-slate-800 hover:via-slate-700 hover:to-slate-800 transition-all duration-500">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-sm font-medium">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
                  </svg>
                  Live Art Experience
                </div>
                
                <h2 className="text-4xl lg:text-6xl font-heading font-bold text-white leading-tight">
                  Live Sketching & 
                  <br />
                  <span className="text-amber-400">Picture Painting</span>
                  <br />
                  at Your Wedding
                </h2>
                
                <p className="text-xl text-slate-300 leading-relaxed">
                  Transform your special moments into timeless art with our professional live sketching and picture painting services. 
                  Watch as your wedding memories come to life through the hands of skilled artists.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  "Real-time portrait sketching during ceremonies",
                  "Custom wedding scene paintings",
                  "Interactive art experiences for guests",
                  "Professional artists with wedding expertise"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>  
              {/* Call to Action Button - Moved to Left Side */}
              <div className="pt-6">
                <div className="group inline-flex items-center justify-center px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-2xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300">
                  <span className="mr-3">Explore Live Art Services</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
            
            {/* Right Slideshow */}
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                {/* Slideshow Container */}
                <div ref={liveArtSlideshowRef} className="relative w-full h-full">
                  {/* Slide Images */}
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR1.jpg')" }}
                  />
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR2.jpg')" }}
                  />
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR3.heic')" }}
                  />
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR4.jpg')" }}
                  />
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR5.heic')" }}
                  />
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR6.jpg')" }}
                  />
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR7.jpg')" }}
                  />
                  <div 
                    className="live-art-slide absolute inset-0 w-full h-full bg-center bg-cover"
                    style={{ backgroundImage: "url('/AR/imageAR8.jpg')" }}
                  />
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Content */}
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="text-sm font-medium">Live Wedding Sketching</div>
                  <div className="text-xs text-white/80">Real-time portrait creation</div>
                </div>
                
                {/* Slideshow Indicator */}
                <div className="absolute top-4 right-4 flex space-x-2">
                  {[1,2,3,4,5,6,7,8].map((_, index) => (
                    <div key={index} className="w-2 h-2 rounded-full bg-white/30" />
                  ))}
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-amber-500/20 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl" />
            </div>
          </div>
        </div>
        </section>
      </Link>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Services
            </div>
            <h2 data-animate="reveal-heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Comprehensive event management services that cover every aspect of your special occasion. 
              From planning to execution, we handle it all.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Decoration Services",
                description: "Transform your venue with our creative decoration services. From elegant floral arrangements to stunning lighting setups, we bring your vision to life.",
                image: "/home/decoration.jpg",
                link: "/services/decoration",
                icon: "🎨"
              },
              {
                title: "Artist & Talent Booking",
                description: "Connect with the best artists and performers for your event. We handle all talent booking, negotiations, and coordination.",
                image: "/home/artist.jpg",
                link: "/services/artist-booking",
                icon: "🎭"
              },
              {
                title: "Food & Catering Support",
                description: "Through Ghoti Na Bangal, we provide authentic Bengali cuisine and premium catering services for all your events.",
                image: "/home/catering.jpg",
                link: "/services/catering",
                icon: "🍽️"
              },
              {
                title: "Sound, Mic & AV System",
                description: "Professional audio-visual equipment and technical support to ensure your event sounds and looks perfect.",
                image: "/home/sound.jpg",
                link: "/services/av-system",
                icon: "🔊"
              },
              {
                title: "Combo Event Packages",
                description: "Comprehensive event packages that combine multiple services for a complete event management solution.",
                image: "/home/event-package.jpg",
                link: "/services/combo-packages",
                icon: "📦"
              },
              {
                title: "Custom Add-ons",
                description: "Tailored additional services to meet your specific needs. We customize every aspect of your event.",
                image: "/home/addson.jpg",
                link: "/services/custom-addons",
                icon: "⚙️"
              }
            ].map((service, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg border border-slate-200 overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110" 
                       style={{ backgroundImage: `url(${service.image})` }}>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link to={service.link}>
                    <Button variant="outline" className="w-full border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 font-semibold py-3 rounded-xl transition-all duration-300">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Featured Services
            </div>
            <h3 data-animate="reveal-heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Best Services
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Discover our premium service offerings that have made us the preferred choice for memorable events.
            </p>
          </div>

          <div className="flex items-center gap-6 h-[500px] w-full max-w-6xl mt-10 mx-auto ">
            {bestServices.map((service, idx) => (
              <Link
                to={service.to}
                key={idx}
                className="relative group flex-grow transition-all w-56 h-[500px] duration-500 hover:w-full"
                aria-label={service.name}
                title={service.name}
              >
                <video
                  className="h-full w-full object-cover object-center"
                  src={service.video}
                  poster={service.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                />
                <div className="absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="flex items-center mb-4 ">
                    {service.logo && (
                      <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center p-2 mr-4">
                        <img src={service.logo} alt={`${service.name} logo`} className="w-full h-full object-contain" />
                      </div>
                    )}
                    <h1 className="text-3xl font-bold">{service.name}</h1>
                  </div>
                  <p className="text-sm text-white/90 leading-relaxed">{service.subtitle}</p>
                  <div className="mt-4 flex items-center text-white/80 group-hover:text-white transition-colors">
                    <span className="text-sm font-medium">Explore Service</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services — Auto-scrolling horizontal marquee */}
      <PopularServicesMarquee items={serviceItems} />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Why Choose Us
            </div>
            <h2 data-animate="reveal-heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Achieve All Your Goals in One Place
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference of working with a comprehensive event management team that handles every detail.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-center bg-cover" style={{ backgroundImage: "url('/home/achive.jpg')" }}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                {/* Floating stats */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">500+</div>
                  <div className="text-sm text-slate-600">Events Completed</div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg">
                  <div className="text-2xl font-bold text-slate-900">98%</div>
                  <div className="text-sm text-slate-600">Success Rate</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  title: "Create Memorable Events", 
                  desc: "Create unforgettable experiences with personalized features, leaving a lasting impact on attendees.",
                  icon: "🎉",
                  color: "bg-pink-100 text-pink-600"
                },
                { 
                  title: "Optimize Event Management", 
                  desc: "Seamlessly organize events from start to finish, ensuring smooth operations and boosted productivity.",
                  icon: "⚡",
                  color: "bg-yellow-100 text-yellow-600"
                },
                { 
                  title: "Maximize ROI", 
                  desc: "Enhance attendee experiences with strategic planning and see maximum return on investment.",
                  icon: "📈",
                  color: "bg-green-100 text-green-600"
                },
              ].map((card, i) => (
                <div 
                  key={i} 
                  className="group bg-white rounded-2xl border border-slate-200 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl ${card.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300`}>
                      {card.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-heading font-bold text-slate-900 mb-2 group-hover:text-slate-700 transition-colors">
                        {card.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Client Testimonials
            </div>
            <h4 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              What Our Customers Say
            </h4>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience with us.
            </p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-slate-50 to-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <h5 className="text-2xl font-heading font-bold text-slate-900">
                    Exceptional Service & Results
                  </h5>
                  <p className="text-lg text-slate-600 leading-relaxed">
                    Our clients consistently rate us highly for our attention to detail, 
                    professional approach, and ability to exceed expectations. 
                    We're proud of the lasting relationships we've built.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl font-bold text-slate-900">4.9/5</div>
                    <div className="text-slate-600">
                      <div className="font-semibold">Average Rating</div>
                      <div className="text-sm">Based on 200+ reviews</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-12">
                <TestimonialsRail />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function PopularServicesMarquee({ items }: { items: { label: string; to: string; img: string }[] }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const trackRef = React.useRef<HTMLDivElement | null>(null)
  const animRef = React.useRef<number | null>(null)
  const posRef = React.useRef(0)
  const speedRef = React.useRef(2)

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
    const container = containerRef.current
    const track = trackRef.current
    if (!container || !track) return

    const original = track.innerHTML
    track.innerHTML = original + original

    play()

    const onEnter = () => pause()
    const onLeave = () => play()
    container.addEventListener('mouseenter', onEnter)
    container.addEventListener('mouseleave', onLeave)
    container.addEventListener('focusin', onEnter)
    container.addEventListener('focusout', onLeave)

    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        pause()
        window.clearTimeout((onWheel as any)._t)
        ;(onWheel as any)._t = window.setTimeout(play, 800)
      }
    }
    container.addEventListener('wheel', onWheel, { passive: true })

    const onTouchStart = () => { pause() }
    const onTouchEnd = () => { play() }
    container.addEventListener('touchstart', onTouchStart, { passive: true })
    container.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      pause()
      container.removeEventListener('mouseenter', onEnter)
      container.removeEventListener('mouseleave', onLeave)
      container.removeEventListener('focusin', onEnter)
      container.removeEventListener('focusout', onLeave)
      container.removeEventListener('wheel', onWheel)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchend', onTouchEnd)
    }
  }, [play, pause])

  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 mt-25">

      <div className="mt-10 relative">
        <div
          ref={containerRef}
          className="relative overflow-hidden -ml-4 pl-4 sm:ml-0 sm:pl-0 no-scrollbar"
          aria-label="Popular services auto-scrolling list"
        >
          <div ref={trackRef} className="marquee-track items-center">
            {items.map((item, idx) => (
              <Link
                to={item.to}
                key={idx}
                className="group shrink-0 block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#AA5607]"
                aria-label={item.label}
                title={item.label}
              >
                <div
                  className="size-24 sm:size-28 rounded-full border border-black/10 overflow-hidden relative"
                  style={{ backgroundImage: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-center text-[10px] sm:text-xs font-semibold text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 sm:w-16 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 sm:w-16 bg-gradient-to-l from-white to-transparent" />
      </div>
    </section>
  )
}

function TestimonialsRail() {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const listRef = React.useRef<HTMLDivElement | null>(null)

  const items = [
  {
    name: "Sohini Das",
    avatar: "/test1.jpg",
    text:
      "From the first call to the final goodbye, the coordination was effortless and the decor was exactly how we imagined—classy, warm, and unforgettable.",
  },
  {
    name: "Arindam Roy",
    avatar: "/test2.jpg",
    text:
      "Every timeline was honored, every vendor aligned, and the guest flow felt natural. It let us actually enjoy the event instead of managing it.",
  },
  {
    name: "Megha Sen",
    avatar: "/test3.jpg",
    text:
      "Creative ideas, clear budgeting, and on-site problem solving—this team blends aesthetics with operations like true professionals.",
  },
  {
    name: "Ritwik Ghosh",
    avatar: "/test1.jpg",
    text:
      "Our corporate meet was smooth end-to-end: staging, AV, seating, and catering were on point, and the feedback from attendees was fantastic.",
  },
  {
    name: "Priyanka Mukherjee",
    avatar: "/test4.jpg",
    text:
      "They understood our theme in minutes and elevated it with thoughtful details—photo corners, entry styling, and lighting that set the mood.",
  },
  {
    name: "Zara Ahmed",
    avatar: "/test5.jpg",
    text:
      "Zero last-minute panic—just seamless execution. The team communicated clearly and handled changes gracefully without breaking the rhythm.",
  },
]


  React.useEffect(() => {
    const container = containerRef.current
    const list = listRef.current
    if (!container || !list) return

    const one = list.innerHTML
    list.innerHTML = one + one

    requestAnimationFrame(() => {
      const cards = Array.from(list.children) as HTMLElement[]
      if (cards.length === 0) return
      const getH = (el: HTMLElement) => {
        const mb = parseFloat(getComputedStyle(el).marginBottom || "0")
        return el.offsetHeight + mb
      }
      const cardH = getH(cards[0])
      const visibleCount = 3
      const pageHeight = (cards.length / 2) * cardH

      gsap.set(container, { height: cardH * visibleCount })

      const tween = gsap.to(list, {
        y: -pageHeight,
        duration: 12,
        ease: "none",
        repeat: -1,
        onRepeat: () => { gsap.set(list, { y: 0 }) },
      })

      const onEnter = () => tween.pause()
      const onLeave = () => tween.play()
      container.addEventListener("mouseenter", onEnter)
      container.addEventListener("mouseleave", onLeave)

      return () => {
        container.removeEventListener("mouseenter", onEnter)
        container.removeEventListener("mouseleave", onLeave)
        tween.kill()
      }
    })
  }, [])

  return (
    <div className="relative flex items-start gap-6">
      <div ref={containerRef} className="relative overflow-hidden flex-1">
        <div ref={listRef} className="flex flex-col">
          {items.map((it, i) => (
            <TestimonialCard key={i} name={it.name} avatar={it.avatar} text={it.text} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TestimonialCard({ name, avatar, text }: { name: string; avatar: string; text: string }) {
  return (
    <div className="relative mb-5">
      <div className="rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.08)] px-5 py-4 pl-20">
        <div className="absolute left-3 top-1/2 -translate-y-1/2 h-16 w-16 rounded-full bg-[#9c5a1f]/10 grid place-items-center overflow-hidden">
          <img src={avatar} alt={name} className="h-16 w-16 rounded-full object-cover" />
        </div>
        <div className="flex items-start gap-3">
          <div className="flex-1">
            <div className="text-xl font-extrabold text-black">{name}</div>
            <p className="mt-1 text-[13px] leading-5 text-black/70">{text}</p>
          </div>
          <div className="mt-1 shrink-0">
            <button
              aria-label="Read"
              className="h-8 w-8 rounded-full grid place-items-center border border-black/10 text-black/60 hover:text-black hover:border-black/20 transition"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
