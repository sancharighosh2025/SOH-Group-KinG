import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import { AnimatedTestimonials } from '../components/ui/animated-testimonials'
import { LayoutGrid } from '../components/ui/layout-grid'
import { Button } from "../components/ui/button"
import { ArrowRight, Award, Camera, Sparkles } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

type Photo = {
  id: string
  src: string
  alt?: string
}

export default function OrchidGallery() {
  const heroRef = React.useRef<HTMLDivElement | null>(null)
  const aboutRef = React.useRef<HTMLDivElement | null>(null)
  const featureRef = React.useRef<HTMLDivElement | null>(null)

  const stripRef1 = React.useRef<HTMLDivElement | null>(null)
  const stripRef2 = React.useRef<HTMLDivElement | null>(null)
  const rafIdRef1 = React.useRef<number | null>(null)
  const rafIdRef2 = React.useRef<number | null>(null)
  const runningRef1 = React.useRef(true)
  const runningRef2 = React.useRef(true)
  const speedRef = React.useRef(0.6) // px per frame at ~60fps; tune for faster/slower

  const ALL_PHOTOS: Photo[] = React.useMemo(
    () => [
      { id: '1', src: '/AR/imageAR1.jpg', alt: 'AR Work 01' },
      { id: '2', src: '/AR/imageAR2.jpg', alt: 'AR Work 02' },
      { id: '3', src: '/AR/imageAR3.heic', alt: 'AR Work 03' },
      { id: '4', src: '/AR/imageAR4.jpg', alt: 'AR Work 04' },
      { id: '5', src: '/AR/imageAR5.heic', alt: 'AR Work 05' },
      { id: '6', src: '/AR/imageAR6.jpg', alt: 'AR Work 06' },
      { id: '7', src: '/AR/imageAR7.jpg', alt: 'AR Work 07' },
      { id: '8', src: '/AR/imageAR8.jpg', alt: 'AR Work 08' },
      { id: '9', src: '/AR/imageAR9.heic', alt: 'AR Work 09' },
      { id: '10', src: '/AR/imageAR10.jpg', alt: 'AR Work 10' },
      { id: '11', src: '/AR/imageAR11.jpg', alt: 'AR Work 11' },
      { id: '12', src: '/AR/imageAR12.heic', alt: 'AR Work 12' },
      { id: '13', src: '/AR/imageAR13.jpg', alt: 'AR Work 13' },
      { id: '14', src: '/AR/imageAR14.jpg', alt: 'AR Work 14' },
      { id: '15', src: '/AR/imageAR15.jpg', alt: 'AR Work 15' },
      { id: '16', src: '/AR/imageAR16.heic', alt: 'AR Work 16' },
      { id: '17', src: '/AR/imageAR17.jpg', alt: 'AR Work 17' },
      { id: '18', src: '/AR/imageAR18.jpg', alt: 'AR Work 18' },
      { id: '19', src: '/AR/imageAR19.jpg', alt: 'AR Work 19' },
      { id: '20', src: '/AR/imageAR20.heic', alt: 'AR Work 20' },
      { id: '21', src: '/AR/imageAR21.jpg', alt: 'AR Work 21' },
      { id: '22', src: '/AR/imageAR22.jpg', alt: 'AR Work 22' },
      { id: '23', src: '/AR/imageAR23.jpg', alt: 'AR Work 23' },
      { id: '24', src: '/AR/imageAR24.jpg', alt: 'AR Work 24' },
    ],
    []
  )

  // Split photos into two arrays for the two scroll strips
  const FIRST_STRIP_PHOTOS = React.useMemo(() => ALL_PHOTOS.slice(0, 12), [ALL_PHOTOS])
  const SECOND_STRIP_PHOTOS = React.useMemo(() => ALL_PHOTOS.slice(12, 24), [ALL_PHOTOS])
  
  // Duplicate for seamless wrap-around
  const STRIP_ITEMS_1 = React.useMemo(() => [...FIRST_STRIP_PHOTOS, ...FIRST_STRIP_PHOTOS], [FIRST_STRIP_PHOTOS])
  const STRIP_ITEMS_2 = React.useMemo(() => [...SECOND_STRIP_PHOTOS, ...SECOND_STRIP_PHOTOS], [SECOND_STRIP_PHOTOS])

  React.useEffect(() => {
    if (!heroRef.current) return
    const ctx = gsap.context(() => {
      const tl = gsap.timeline()
      
      // Animate badge first
      tl.from('[data-hero-badge]', { 
        y: 20, 
        opacity: 0, 
        scale: 0.8,
        duration: 0.8, 
        ease: 'back.out(1.7)' 
      })
      
      // Animate title with split text effect
      .from('[data-hero-title]', { 
        y: 60, 
        opacity: 0, 
        duration: 1.2, 
        ease: 'power3.out' 
      }, '-=0.4')
      
      // Animate subtitle
      .from('[data-hero-sub]', { 
        y: 30, 
        opacity: 0, 
        duration: 0.8, 
        ease: 'power2.out' 
      }, '-=0.6')
      
      // Animate CTA buttons
      .from('[data-hero-cta]', { 
        y: 20, 
        opacity: 0, 
        duration: 0.6, 
        ease: 'power2.out' 
      }, '-=0.4')
      
      // Animate stats with stagger
      .from('[data-hero-stats] > div', { 
        y: 20, 
        opacity: 0, 
        stagger: 0.15, 
        duration: 0.6, 
        ease: 'power2.out' 
      }, '-=0.3')
      
      // Add a subtle floating animation to the title
      .to('[data-hero-title]', {
        y: -5,
        duration: 2,
        ease: 'power1.inOut',
        yoyo: true,
        repeat: -1
      }, '-=0.5')
    }, heroRef)
    return () => ctx.revert()
  }, [])

  React.useEffect(() => {
    const sections = [{ root: aboutRef.current }, { root: featureRef.current }]
    const triggers: ScrollTrigger[] = []
    sections.forEach(s => {
      if (!s.root) return
      const heads = s.root.querySelectorAll('[data-animate="heading"]')
      heads.forEach(el => {
        gsap.set(el, { y: 24, opacity: 0 })
        const st = ScrollTrigger.create({
          trigger: el as Element,
          start: 'top 80%',
          onEnter: () => gsap.to(el, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }),
        })
        triggers.push(st)
      })
    })
    return () => triggers.forEach(t => t.kill())
  }, [])

  // Auto-scroll logic for first strip (left to right)
  React.useEffect(() => {
    const el = stripRef1.current
    if (!el) return

    runningRef1.current = true

    const step = () => {
      if (!runningRef1.current) {
        rafIdRef1.current = requestAnimationFrame(step)
        return
      }
      el.scrollLeft += speedRef.current
      // If we reach half of duplicated content, reset to start seamlessly
      const maxScroll = el.scrollWidth / 2
      if (el.scrollLeft >= maxScroll) {
        el.scrollLeft = 0
      }
      rafIdRef1.current = requestAnimationFrame(step)
    }
    rafIdRef1.current = requestAnimationFrame(step)

    const onEnter = () => { runningRef1.current = false }
    const onLeave = () => { runningRef1.current = true }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      if (rafIdRef1.current) cancelAnimationFrame(rafIdRef1.current)
    }
  }, [])

  // Auto-scroll logic for second strip (right to left)
  React.useEffect(() => {
    const el = stripRef2.current
    if (!el) return

    runningRef2.current = true

    const step = () => {
      if (!runningRef2.current) {
        rafIdRef2.current = requestAnimationFrame(step)
        return
      }
      el.scrollLeft -= speedRef.current
      // If we reach the beginning, reset to end seamlessly
      if (el.scrollLeft <= 0) {
        el.scrollLeft = el.scrollWidth / 2
      }
      rafIdRef2.current = requestAnimationFrame(step)
    }
    rafIdRef2.current = requestAnimationFrame(step)

    const onEnter = () => { runningRef2.current = false }
    const onLeave = () => { runningRef2.current = true }

    el.addEventListener('mouseenter', onEnter)
    el.addEventListener('mouseleave', onLeave)

    return () => {
      el.removeEventListener('mouseenter', onEnter)
      el.removeEventListener('mouseleave', onLeave)
      if (rafIdRef2.current) cancelAnimationFrame(rafIdRef2.current)
    }
  }, [])


  // LayoutGrid content for AR Chitrakola
  const SkeletonOne = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Wedding Photography</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Capturing the most precious moments of your special day with artistic flair and emotional depth.
      </p>
    </div>
  )
  const SkeletonTwo = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Portrait Sessions</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Professional portrait photography that reveals the authentic beauty and personality of every subject.
      </p>
    </div>
  )
  const SkeletonThree = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Event Coverage</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Comprehensive event photography that tells the complete story of your celebrations and gatherings.
      </p>
    </div>
  )
  const SkeletonFour = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Cultural Events</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Preserving the rich traditions and vibrant moments of cultural celebrations with artistic vision.
      </p>
    </div>
  )
  const SkeletonFive = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Corporate Photography</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Professional corporate photography that enhances your brand image and business communications.
      </p>
    </div>
  )
  const SkeletonSix = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Fashion & Lifestyle</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Creative fashion and lifestyle photography that showcases style, elegance, and contemporary trends.
      </p>
    </div>
  )
  const SkeletonSeven = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Product Photography</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        High-quality product photography that makes your merchandise stand out and attract customers.
      </p>
    </div>
  )
  const SkeletonEight = () => (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">Editorial Work</p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Artistic editorial photography that tells compelling stories through visual narrative and composition.
      </p>
    </div>
  )

  const cards = [
    { id: 1, content: <SkeletonOne />, className: 'md:col-span-2', thumbnail: 'AR/imageAR13.jpg' },
    { id: 2, content: <SkeletonTwo />, className: 'col-span-1', thumbnail: 'AR/imageAR13.jpg' },
    { id: 3, content: <SkeletonThree />, className: 'col-span-1', thumbnail: 'AR/imageAR13.jpg' },
    { id: 4, content: <SkeletonFour />, className: 'md:col-span-2', thumbnail: 'AR/imageAR13.jpg' },
    { id: 5, content: <SkeletonFive />, className: 'col-span-1', thumbnail: 'AR/imageAR13.jpg' },
    { id: 6, content: <SkeletonSix />, className: 'col-span-1', thumbnail: 'AR/imageAR14.jpg' },
    { id: 7, content: <SkeletonSeven />, className: 'md:col-span-2', thumbnail: 'AR/imageAR13.jpg' },
    { id: 8, content: <SkeletonEight />, className: 'col-span-1', thumbnail: 'AR/imageAR13.jpg' },
  ]

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
      <section ref={heroRef} className="relative w-full min-h-[100vh] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/AR/hero.png')] bg-cover bg-center bg-no-repeat" />
        <div className="absolute inset-0 bg-black/40" />
        
        {/* Content with Right Alignment */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Empty or can add image/content later */}
            <div className="hidden lg:block">
              {/* Left side content can be added here if needed */}
            </div>
            
            {/* Right Side - Text Content */}
            <div className="text-right lg:text-right">
              <div className="space-y-8">
                <div className="space-y-6">
                  <div data-hero-badge className="inline-flex items-center px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-medium ml-auto">
                    <Camera className="w-4 h-4 mr-2" />
                    Professional Photography
                  </div>
                  
                  <h1 data-hero-title className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                    <span className="block bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                      AR Chitrakola
                    </span>
                  </h1>
                  
                  <p data-hero-sub className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl ml-auto">
                    Bespoke photography and event styling crafted to tell authentic stories with warmth and artistry.
                    From intimate portraits to grand celebrations, we capture moments that last forever.
                  </p>
                </div>
                
                <div data-hero-cta className="flex flex-col sm:flex-row gap-4 justify-end">
                  <Button size="lg" className="bg-white hover:bg-white/90 text-slate-900 px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    Book Session <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>

                {/* Stats */}
                <div data-hero-stats className="grid grid-cols-3 gap-8 pt-12 border-t border-white/20 max-w-2xl ml-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">7+</div>
                    <div className="text-sm text-white/80">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">500+</div>
                    <div className="text-sm text-white/80">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">800+</div>
                    <div className="text-sm text-white/80">Photoshoots</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium">
                  <Award className="w-4 h-4 mr-2" />
                  About AR Chitrakola
                </div>
                <h2 data-animate="heading" className="text-4xl lg:text-5xl font-heading font-bold text-slate-900">
                  About AR Chitrakola
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed">
                  I am a photographer and visual storyteller, blending natural light with thoughtful composition to create timeless imagery. 
                  Sessions are collaborative, relaxed, and detail-focused for an effortless experience.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  From intimate portraits to editorial events, my approach harmonizes aesthetics with emotion so each frame feels personal and alive.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  Book a Session <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-slate-200 hover:border-slate-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  View Gallery
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src="/AR/AR-about.jpg" alt="About AR Chitrakola" className="w-full h-[500px] object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="featured" ref={featureRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Portfolio
            </div>
            <h3 data-animate="heading" className="text-4xl lg:text-6xl font-heading font-bold text-slate-900 mb-6">
              Our Best Work
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Explore our curated collection of photography and event styling work that showcases our passion for storytelling.
            </p>
          </div>

          <div className="h-[60vh] w-full">
            <LayoutGrid cards={cards} />
          </div>

          {/* Auto-scrolling Gallery Strip - Left to Right */}
          <div className="space-y-9 mt-140 mb-10">
            <div
              ref={stripRef1}
              className="relative w-full overflow-x-auto whitespace-nowrap select-none"
              style={{
                scrollbarWidth: 'none' /* Firefox */,
                msOverflowStyle: 'none' /* IE/Edge */,
              }}
            >
              <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; height: 0; }
              `}</style>
              <div className="no-scrollbar flex gap-6 pr-6">
                {STRIP_ITEMS_1.map((p) => (
                  <figure
                    key={p.id + '-ltr'}
                    className="group relative shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                  >
                    <img src={p.src} alt={p.alt ?? 'Work'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </figure>
                ))}
              </div>
            </div>
          </div>

          {/* Auto-scrolling Gallery Strip - Right to Left */}
          <div className="space-y-3">
            <div
              ref={stripRef2}
              className="relative w-full overflow-x-auto whitespace-nowrap select-none"
              style={{
                scrollbarWidth: 'none' /* Firefox */,
                msOverflowStyle: 'none' /* IE/Edge */,
              }}
            >
              <style>{`
                .no-scrollbar::-webkit-scrollbar { display: none; height: 0; }
              `}</style>
              <div className="no-scrollbar flex gap-6 pr-6">
                {STRIP_ITEMS_2.map((p) => (
                  <figure
                    key={p.id + '-rtl'}
                    className="group relative shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] h-[220px] sm:h-[240px] lg:h-[260px] overflow-hidden rounded-2xl bg-white shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
                  >
                    <img src={p.src} alt={p.alt ?? 'Work'} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    <figcaption className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <AnimatedTestimonials testimonials={/* same array as above */[
        { quote: 'The attention to detail and innovative features have completely transformed our workflow. This is exactly what we have been looking for.', name: 'Sarah Chen', designation: 'Product Manager at TechFlow', src: 'test1.jpg' },
        { quote: 'Implementation was seamless and the results exceeded expectations. The platform’s flexibility is remarkable.', name: 'Michael Rodriguez', designation: 'CTO at InnovateSphere', src: 'test2.jpg' },
        { quote: 'This solution has significantly improved our team’s productivity. The intuitive interface makes complex tasks simple.', name: 'Emily Watson', designation: 'Operations Director at CloudScale', src: 'test3.jpg' },
        { quote: 'Outstanding support and robust features. It’s rare to find a product that delivers on all its promises.', name: 'James Kim', designation: 'Engineering Lead at DataPro', src: 'test4.jpg' },
        { quote: 'The scalability and performance have been game-changing for our organization. Highly recommended.', name: 'Lisa Thompson', designation: 'VP of Technology at FutureNet', src: 'test5.jpg' },
      ]} />

      {/* CTA */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-4xl lg:text-5xl font-heading font-bold text-white">
                Ready to connect with us?
              </h3>
              <p className="text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto">
                You want to connect with us and explore how we can craft meaningful visuals and events together.
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
