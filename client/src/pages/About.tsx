import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from "../components/ui/button"
import { ArrowRight, Star, CheckCircle, Users, Award, Mail, Phone, MapPin } from "lucide-react"

type Testimonial = {
  name: string
  role: string
  avatar: string
  text: string
}

const testimonials: Testimonial[] = [
  {
    name: 'Sohini Das',
    role: 'Bride',
    avatar: '/about/users/sohini.jpg',
    text: 'SOH Group handled everything end-to-end. Décor, food, flow—absolutely stress-free.',
  },
  {
    name: 'Arindam Roy',
    role: 'Groom',
    avatar: '/about/users/arindam.jpg',
    text: 'Creative concepts and disciplined execution. Guests loved the experience.',
  },
  {
    name: 'Megha Sen',
    role: 'Planner',
    avatar: '/about/users/megha.jpg',
    text: 'Reliable partners with a refined aesthetic sense. On-time and professional.',
  },
]

export default function About() {
  const [form, setForm] = React.useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  })
  const [errors, setErrors] = React.useState<Record<string, string>>({})
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'sent'>('idle')

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setForm((p) => ({ ...p, [name]: value }))
  }

  const validate = () => {
    const e: Record<string, string> = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!/^\+?[0-9\s-]{7,15}$/.test(form.phone.trim())) e.phone = 'Valid phone is required'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) e.email = 'Valid email is required'
    if (!form.message.trim()) e.message = 'Please add a short message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault()
    if (!validate()) return
    try {
      setStatus('sending')
      // TODO: Replace with real API call
      await new Promise((r) => setTimeout(r, 800))
      setStatus('sent')
      setForm({ name: '', phone: '', email: '', message: '' })
      setErrors({})
    } catch {
      setStatus('idle')
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[80vh] bg-gradient-to-br from-slate-50 to-white">
        <div className="absolute inset-0 bg-[url('/Hero2.png')] bg-cover bg-center opacity-5" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" />
                About Our Company
              </div>
              <h1 className="text-5xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="gradient-text">About SOH Group</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-4xl mx-auto">
                SOH Group delivers full-service event experiences through three specialized verticals—AR Chitrakola, Orchid Gallery, and Ghoti na Bangal.
                From concept and styling to catering and on-ground execution, teams work together to craft memorable, seamless celebrations.
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">3</div>
                <div className="text-sm text-slate-600">Specialized Brands</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">500+</div>
                <div className="text-sm text-slate-600">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">5+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Brands */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Star className="w-4 h-4 mr-2" />
              Our Brands
            </div>
            <h2 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Our Best Services
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Three specialized verticals working together to deliver comprehensive event experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <Link to="/ar-chitrakola" className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src="/ar-chitrakola.jpg" alt="AR Chitrakola" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center p-2">
                    <img src="/Logo/Logo-AR2.png" alt="AR Chitrakola logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">AR Chitrakola</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Bespoke photography and event styling crafted to tell authentic stories with warmth and artistry.
                </p>
                <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors">
                  <span className="text-sm font-medium">Explore Brand</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/orchid-gallery" className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src="/orchid-gallery.jpg" alt="Orchid Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center p-2">
                    <img src="/Logo/Logo-Orchid.png" alt="Orchid Gallery logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">Orchid Gallery</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Full-service event planning that blends aesthetics and logistics into seamless, memorable experiences.
                </p>
                <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors">
                  <span className="text-sm font-medium">Explore Brand</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>

            <Link to="/ghoti-na-bangal" className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src="/ghoti-bangal.jpg" alt="Ghoti na Bangal" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute top-6 left-6">
                  <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center p-2">
                    <img src="/Logo/Logo-Ghoti.png" alt="Ghoti na Bangal logo" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-heading font-bold text-slate-900 mb-3">Ghoti na Bangal</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Heritage Bengali flavors, elegant setups, and seamless service for weddings, receptions, and all celebrations.
                </p>
                <div className="flex items-center text-amber-600 group-hover:text-amber-700 transition-colors">
                  <span className="text-sm font-medium">Explore Brand</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium mb-6">
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </div>
            <h3 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              Connect with us
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Ready to plan your next event? Get in touch with our team and let's create something extraordinary together.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <form onSubmit={onSubmit} className="lg:col-span-2 bg-white rounded-3xl shadow-2xl border border-slate-200 p-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="Enter full name"
                  />
                  {errors.name && <p className="text-sm text-red-600 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Phone</label>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="+91 98xxxxxxx"
                  />
                  {errors.phone && <p className="text-sm text-red-600 mt-1">{errors.phone}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Email</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={onChange}
                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none transition-colors"
                    placeholder="example@email.com"
                  />
                  {errors.email && <p className="text-sm text-red-600 mt-1">{errors.email}</p>}
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-slate-900 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={5}
                    className="w-full rounded-xl border-2 border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-amber-500 focus:outline-none transition-colors resize-y"
                    placeholder="Tell us about your event..."
                  />
                  {errors.message && <p className="text-sm text-red-600 mt-1">{errors.message}</p>}
                </div>
              </div>
              <Button
                type="submit"
                disabled={status === 'sending'}
                size="lg"
                className="mt-6 bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-lg font-semibold rounded-xl disabled:opacity-75"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
              {status === 'sent' && (
                <p className="mt-4 text-sm text-green-600 font-medium">Thanks! The message has been recorded. We will contact soon.</p>
              )}
            </form>

            {/* Contact Info */}
            <div className="bg-slate-50 rounded-3xl p-8">
              <h4 className="text-2xl font-heading font-bold text-slate-900 mb-6">Reach us directly</h4>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Phone</p>
                    <a href="tel:+91XXXXXXXXXX" className="text-lg font-semibold text-slate-900 hover:text-amber-600 transition-colors">+91 89104 81993</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Email</p>
                    <a href="mailto:hello@sohgroup.com" className="text-lg font-semibold text-slate-900 hover:text-amber-600 transition-colors">admin@kingtechs.in</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-600">Office</p>
                    <p className="text-lg font-semibold text-slate-900">Kolkata, West Bengal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link to="/orchid-gallery" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-200 text-slate-700 hover:border-amber-500 hover:text-amber-600 transition-colors font-semibold">
                  Explore Orchid Gallery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
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
            <h5 className="text-4xl lg:text-5xl font-heading font-bold text-slate-900 mb-6">
              What clients say about us
            </h5>
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
                <p className="text-slate-700 leading-relaxed">{t.text}</p>
                <div className="flex items-center mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
