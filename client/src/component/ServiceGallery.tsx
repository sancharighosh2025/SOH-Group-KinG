import React from 'react'
import { useParams, Link } from 'react-router-dom'

const BRAND = '#AA5607'

const SERVICE_MAP: Record<string, { title: string; images: string[]; blurb: string }> = {
  'wedding-deco': {
    title: 'Wedding Decor',
    blurb: 'Timeless stages, floral aisles, entrance arches, and photo corners tailored to the couple’s story.',
    images: [
      '/events/wedding/01.jpg', '/events/wedding/02.jpg', '/events/wedding/03.jpg',
      '/events/wedding/04.jpg', '/events/wedding/05.jpg', '/events/wedding/06.jpg',
    ],
  },
  engagement: {
    title: 'Engagement',
    blurb: 'Elegant ringscape, pastel backdrops, and cozy corners with ambient lighting.',
    images: ['/events/engagement/01.jpg','/events/engagement/02.jpg','/events/engagement/03.jpg'],
  },
  corporate: {
    title: 'Corporate',
    blurb: 'Premium backdrops, stage branding, and hospitality counters for launches and summits.',
    images: ['/events/corporate/01.jpg','/events/corporate/02.jpg','/events/corporate/03.jpg'],
  },
  'baby-shower': {
    title: 'Baby Shower',
    blurb: 'Soft palettes, themed props, and adorable dessert corners.',
    images: ['/events/baby/01.jpg','/events/baby/02.jpg','/events/baby/03.jpg'],
  },
  birthday: {
    title: 'Birthday',
    blurb: 'Photo booths, neon nights, and custom cake tables for every age.',
    images: ['/events/birthday/01.jpg','/events/birthday/02.jpg','/events/birthday/03.jpg'],
  },
  cultural: {
    title: 'Cultural Night',
    blurb: 'Traditional motifs, stage drapes, and folk-inspired props.',
    images: ['/events/cultural/01.jpg','/events/cultural/02.jpg','/events/cultural/03.jpg'],
  },
}

export default function ServiceGallery() {
  const { slug = '' } = useParams()
  const data = SERVICE_MAP[slug] ?? { title: 'Service', blurb: '', images: [] }

  return (
    <div className="bg-[#FFF9F4]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: BRAND }}>{data.title}</h1>
          <Link to="/orchid/events" className="text-sm underline" style={{ color: BRAND }}>Back</Link>
        </div>
        <p className="mt-3 text-black/70 max-w-3xl">{data.blurb}</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.images.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]" style={{ borderColor: BRAND }}>
              <img src={src} alt={`${data.title} ${i+1}`} className="h-56 w-full object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
