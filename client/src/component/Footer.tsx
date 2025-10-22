import React from "react";
import { Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-white">
      {/* Main Footer Content */}
      <div className="w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <img src="/Logo/Logo-SOH.png" alt="SOH Group" className="h-12 w-12" />
                <span className="font-heading font-bold text-xl">SOH Group</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                Your trusted partner for creating extraordinary events. We handle every detail from concept to execution, ensuring seamless and unforgettable experiences.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="facebook">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="instagram">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="youtube">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="p-3 rounded-xl bg-slate-800 hover:bg-slate-700 transition-colors" aria-label="twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-lg">Our Services</h3>
              <div className="space-y-3">
                <a href="/services/decoration" className="block text-slate-300 hover:text-white transition-colors">Decoration Services</a>
                <a href="/services/artist-booking" className="block text-slate-300 hover:text-white transition-colors">Artist Booking</a>
                <a href="/services/catering" className="block text-slate-300 hover:text-white transition-colors">Catering Services</a>
                <a href="/services/av-system" className="block text-slate-300 hover:text-white transition-colors">AV Systems</a>
                <a href="/services/combo-packages" className="block text-slate-300 hover:text-white transition-colors">Combo Packages</a>
              </div>
            </div>

            {/* Brands */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-lg">Our Brands</h3>
              <div className="space-y-3">
                <a href="/orchid-gallery" className="block text-slate-300 hover:text-white transition-colors">Orchid Gallery</a>
                <a href="/ar-chitrakola" className="block text-slate-300 hover:text-white transition-colors">AR Chitrakola</a>
                <a href="/ghoti-na-bangal" className="block text-slate-300 hover:text-white transition-colors">Ghoti na Bangal</a>
                <a href="/about" className="block text-slate-300 hover:text-white transition-colors">About Us</a>
              </div>
            </div>

            {/* Contact & Newsletter */}
            <div className="space-y-6">
              <h3 className="font-heading font-bold text-lg">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-slate-300">
                  <Phone className="h-5 w-5 text-amber-500" />
                  <span>+91 98765 43210</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <Mail className="h-5 w-5 text-amber-500" />
                  <span>info@sohgroup.com</span>
                </div>
                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="h-5 w-5 text-amber-500 mt-0.5" />
                  <span>Kolkata, West Bengal, India</span>
                </div>
              </div>
              
              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold">Stay Updated</h4>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-500"
                  />
                  <Button size="sm" className="bg-amber-600 hover:bg-amber-700 text-white px-4">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm">
              © 2025 SOH Group. All rights reserved. | Powered by Kin-G Technologies
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
