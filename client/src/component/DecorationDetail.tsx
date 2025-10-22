import React from 'react'
import { Link, useParams } from 'react-router-dom'

const BRAND = '#AA5607'

type Deco = {
  slug: string
  name: string
  images: string[]
  price: number
  discountPct: number
  blurb: string
  similar: { slug: string; name: string; img: string; price: number; discountPct: number }[]
}

const DECOR_DB: Record<string, Deco> = {
  'rustic-boho-stage': {
    slug: 'rustic-boho-stage',
    name: 'Rustic Boho Stage',
    images: ['/events/decor/boho/01.jpg','/events/decor/boho/02.jpg','/events/decor/boho/03.jpg'],
    price: 120000,
    discountPct: 15,
    blurb: 'Macrame accents, pampas florals, and warm lights for a boho-chic wedding stage.',
    similar: [
      { slug: 'marigold-entrance', name: 'Marigold Entrance', img: '/events/popular/marigold-entrance.jpg', price: 45000, discountPct: 10 },
      { slug: 'pastel-baby-corner', name: 'Pastel Baby Corner', img: '/events/popular/pastel-baby.jpg', price: 38000, discountPct: 12 },
    ],
  },
  'marigold-entrance': {
    slug: 'marigold-entrance',
    name: 'Marigold Entrance',
    images: ['/events/decor/marigold/01.jpg','/events/decor/marigold/02.jpg'],
    price: 55000,
    discountPct: 10,
    blurb: 'Fresh marigold strings, brass diyas, and traditional drapes.',
    similar: [
      { slug: 'rustic-boho-stage', name: 'Rustic Boho Stage', img: '/events/popular/boho-stage.jpg', price: 120000, discountPct: 15 },
      { slug: 'neon-birthday', name: 'Neon Birthday', img: '/events/popular/neon-birthday.jpg', price: 42000, discountPct: 8 },
    ],
  },
  'corporate-backdrop': {
    slug: 'corporate-backdrop',
    name: 'Corporate Backdrop',
    images: ['/events/decor/corporate/01.jpg','/events/decor/corporate/02.jpg'],
    price: 90000,
    discountPct: 5,
    blurb: 'Clean branding wall with edge lighting, stage riser, and lectern.',
    similar: [
      { slug: 'cultural-stage', name: 'Cultural Stage', img: '/events/popular/cultural-stage.jpg', price: 80000, discountPct: 7 },
      { slug: 'marigold-entrance', name: 'Marigold Entrance', img: '/events/popular/marigold-entrance.jpg', price: 55000, discountPct: 10 },
    ],
  },
  'neon-birthday': {
    slug: 'neon-birthday',
    name: 'Neon Birthday',
    images: ['/events/decor/neon/01.jpg','/events/decor/neon/02.jpg'],
    price: 48000,
    discountPct: 8,
    blurb: 'Vibrant neon signage, balloon wall, and photo-friendly floor wash.',
    similar: [
      { slug: 'pastel-baby-corner', name: 'Pastel Baby Corner', img: '/events/popular/pastel-baby.jpg', price: 38000, discountPct: 12 },
      { slug: 'rustic-boho-stage', name: 'Rustic Boho Stage', img: '/events/popular/boho-stage.jpg', price: 120000, discountPct: 15 },
    ],
  },
  'pastel-baby-corner': {
    slug: 'pastel-baby-corner',
    name: 'Pastel Baby Corner',
    images: ['/events/decor/pastel/01.jpg','/events/decor/pastel/02.jpg'],
    price: 40000,
    discountPct: 12,
    blurb: 'Soft pastel palette, props and signage for welcoming the little one.',
    similar: [
      { slug: 'neon-birthday', name: 'Neon Birthday', img: '/events/popular/neon-birthday.jpg', price: 48000, discountPct: 8 },
      { slug: 'marigold-entrance', name: 'Marigold Entrance', img: '/events/popular/marigold-entrance.jpg', price: 55000, discountPct: 10 },
    ],
  },
  'cultural-stage': {
    slug: 'cultural-stage',
    name: 'Cultural Stage',
    images: ['/events/decor/cultural/01.jpg','/events/decor/cultural/02.jpg'],
    price: 82000,
    discountPct: 7,
    blurb: 'Traditional drapes, motifs, and lighting for cultural performances.',
    similar: [
      { slug: 'corporate-backdrop', name: 'Corporate Backdrop', img: '/events/popular/corporate-backdrop.jpg', price: 90000, discountPct: 5 },
      { slug: 'marigold-entrance', name: 'Marigold Entrance', img: '/events/popular/marigold-entrance.jpg', price: 55000, discountPct: 10 },
    ],
  },
}

function formatINR(n: number) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
}

export default function DecorationDetail() {
  const { slug = '' } = useParams()
  const data = DECOR_DB[slug] ?? Object.values(DECOR_DB)[0]
  const finalPrice = Math.round(data.price * (1 - data.discountPct / 100))

  return (
    <div className="bg-[#FFF9F4]">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 py-10">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl font-extrabold" style={{ color: BRAND }}>{data.name}</h1>
          <Link to="/orchid/events" className="text-sm underline" style={{ color: BRAND }}>Back</Link>
        </div>

        {/* Gallery */}
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.images.map((src, i) => (
            <div key={i} className="rounded-2xl overflow-hidden border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]" style={{ borderColor: BRAND }}>
              <img src={src} alt={`${data.name} ${i + 1}`} className="h-56 w-full object-cover" />
            </div>
          ))}
        </div>

        {/* Price and description */}
        <div className="mt-8 rounded-2xl border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)] p-6" style={{ borderColor: BRAND }}>
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-2xl font-extrabold" style={{ color: BRAND }}>{formatINR(finalPrice)}</div>
            <div className="line-through text-black/50">{formatINR(data.price)}</div>
            <div className="px-3 py-1 rounded-md text-white text-sm" style={{ backgroundColor: BRAND }}>{data.discountPct}% OFF</div>
          </div>
          <p className="mt-4 text-black/75">{data.blurb}</p>
          <div className="mt-6 flex gap-3">
            <Link to="/about" className="px-5 py-3 rounded-xl text-white" style={{ backgroundColor: BRAND }}>
              Connect us
            </Link>
            <Link to="/orchid/events" className="px-5 py-3 rounded-xl border" style={{ borderColor: BRAND, color: BRAND }}>
              Explore more
            </Link>
          </div>
        </div>

        {/* Similar */}
        <h2 className="mt-10 text-2xl font-extrabold" style={{ color: BRAND }}>Similar decorations</h2>
        <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.similar.map((s) => {
            const sp = Math.round(s.price * (1 - s.discountPct / 100))
            return (
              <Link
                key={s.slug}
                to={`/components/decor/${s.slug}`}
                className="group rounded-2xl overflow-hidden border bg-white shadow-[0_10px_30px_rgba(0,0,0,0.08)]"
                style={{ borderColor: BRAND }}
              >
                <img src={s.img} alt={s.name} className="h-48 w-full object-cover group-hover:scale-[1.02] transition-transform" />
                <div className="p-4">
                  <div className="font-semibold">{s.name}</div>
                  <div className="mt-1 flex items-center gap-2">
                    <div className="text-sm font-bold" style={{ color: BRAND }}>{formatINR(sp)}</div>
                    <div className="text-xs line-through text-black/50">{formatINR(s.price)}</div>
                    <span className="text-xs px-2 py-0.5 rounded-md text-white" style={{ backgroundColor: BRAND }}>{s.discountPct}% OFF</span>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>
      </section>
    </div>
  )
}
