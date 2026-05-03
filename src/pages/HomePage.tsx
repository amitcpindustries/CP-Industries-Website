import { useRef, useState, UIEvent } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'
import { motion, useInView } from 'framer-motion'
import {
  Zap, ShieldCheck, FileBadge, Users,
  Settings2, Truck, Maximize2, HeartHandshake,
  ArrowRight, PhoneCall, BadgeCheck, MoveHorizontal,
} from 'lucide-react'

import 'swiper/css'
import 'swiper/css/effect-fade'

const HERO_IMAGES = [
  '/hero/1.jpg', '/hero/2.jpg', '/hero/3.jpg', '/hero/4.jpg',
  '/hero/5.jpg', '/hero/6.jpg', '/hero/7.jpg', '/hero/8.jpg',
]

const WHY_CARDS = [
  {
    icon: Zap,
    title: 'High Tensile Strength',
    body: 'Engineered for durability using high-grade steel to handle maximum tension in agriculture, construction, and security applications.',
    verified: false,
  },
  {
    icon: ShieldCheck,
    title: 'Rust & Corrosion Resistance',
    body: 'Advanced GI and PVC coating ensures 100% protection against corrosion, heavy rainfall, and humidity for decades.',
    verified: false,
  },
  {
    icon: FileBadge,
    title: 'Government Verified Quality',
    body: 'Trusted by Odisha\'s top government bodies and private firms. GST-verified, ISI-standard, preferred for state-level projects.',
    verified: true,
  },
  {
    icon: Users,
    title: 'Village Empowerment',
    body: 'A 100% local initiative in Athamallik — providing sustainable jobs to farmers and villagers, turning rural talent into excellence.',
    verified: false,
  },
  {
    icon: Settings2,
    title: 'Advanced Manufacturing',
    body: 'Cutting-edge precision machinery ensures consistent mesh patterns, exact diameters, and uniform tensile ratings every roll.',
    verified: false,
  },
  {
    icon: Truck,
    title: 'Reliable Logistics',
    body: 'Robust supply chain guarantees bulk order delivery across Odisha and beyond — on time, every time.',
    verified: false,
  },
  {
    icon: Maximize2,
    title: 'Custom Solutions',
    body: 'From specific mesh sizes to custom roll lengths and coatings, our manufacturing flexes to match your exact project needs.',
    verified: false,
  },
  {
    icon: HeartHandshake,
    title: 'Unmatched Trust',
    body: '"Our Product, Your Trust" — backed by a verified track record across agriculture, infrastructure, and security sectors.',
    verified: false,
  },
]

const SECTORS = [
  {
    title: 'Agriculture',
    impact: 'Supporting the dreams of local farmers by protecting crops and livestock with high-tensile, rust-resistant fencing solutions.',
    image: '/serve/agriculture.jpg'
  },
  {
    title: 'Poultry',
    impact: 'Providing safe, durable, and hygienic galvanized welded mesh for cages and enclosures, ensuring a healthy environment for livestock.',
    image: '/serve/poultry.jpg'
  },
  {
    title: 'Infrastructure',
    impact: 'Strengthening the state’s foundation with heavy-duty gabion mesh and welded panels for erosion control and large-scale road projects.',
    image: '/serve/infrastructure.jpg'
  },
  {
    title: 'Forestry',
    impact: 'Government-verified protection for vital forest and wildlife reserves using high-security chain link fence barriers.',
    image: '/serve/forestry.jpg'
  },
  {
    title: 'Mining',
    impact: 'Maximizing industrial efficiency in quarries and mines with high-carbon steel vibrating screen nets for precise material separation.',
    image: '/serve/mining.jpg'
  },
  {
    title: 'Residential',
    impact: 'Combining aesthetic appeal with security through premium PVC-coated chain link fences for modern homes and private perimeters.',
    image: '/serve/residential.jpg'
  },
  {
    title: 'Defense',
    impact: 'Strengthening borders and restricted zones with military-grade high-security wire solutions designed for maximum deterrence.',
    image: '/serve/defense.jpg'
  },
  {
    title: 'Industrial',
    impact: 'Bulk manufacturing and supply of versatile wire products to support large-scale warehouse, factory, and construction site security.',
    image: '/serve/industrial.jpg'
  },
  {
    title: 'Railways',
    impact: 'Ensuring safe and uninterrupted transit with high-security welded mesh fencing designed to protect critical railway infrastructure and tracks.',
    image: '/serve/railways.jpg'
  },
  {
    title: 'Sports',
    impact: 'Providing premium, durable, and aesthetic chain link solutions for stadiums, courts, and playgrounds, keeping athletes and spectators secure.',
    image: '/serve/sports.jpg'
  }
]

const heroContent = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1], staggerChildren: 0.15 },
  },
}
const heroChild = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
}
const sectionTitle = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
}
const cardGrid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}
const cardItem = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] } },
}

export default function HomePage() {
  const whyRef = useRef<HTMLElement>(null)
  const whyInView = useInView(whyRef, { once: true, margin: '-60px' })

  const sectorsRef = useRef<HTMLElement>(null)
  const sectorsInView = useInView(sectorsRef, { once: true, margin: '-60px' })

  const [scrollProgress, setScrollProgress] = useState(0)

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget
    const maxScrollLeft = target.scrollWidth - target.clientWidth
    if (maxScrollLeft > 0) {
      const progress = (target.scrollLeft / maxScrollLeft) * 100
      setScrollProgress(progress)
    }
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO
      ═══════════════════════════════════════════════════════ */}
      <section
        id="hero"
        aria-label="Hero slideshow"
        className="relative w-full h-screen overflow-hidden"
      >
        <Swiper
          modules={[Autoplay, EffectFade]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          loop
          speed={1200}
          allowTouchMove={false}
          className="hero-swiper absolute inset-0 w-full h-full"
          aria-hidden="true"
        >
          {HERO_IMAGES.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="hero-slide-inner">
                <img
                  src={src}
                  alt=""
                  className="hero-bg-img"
                  style={{ filter: 'brightness(1.18) saturate(1.05)' }}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Left-heavy dark overlay */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(to right, rgba(8,8,8,0.78) 0%, rgba(8,8,8,0.48) 52%, rgba(8,8,8,0.10) 100%)',
          }}
        />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-44 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #1A1A1A 0%, transparent 100%)' }}
        />

        {/* Content */}
        <div className="absolute inset-0 z-20 flex items-center">
          <div className="w-full px-6 md:px-12 lg:px-24">
            <motion.div
              className="max-w-2xl"
              variants={heroContent}
              initial="hidden"
              animate="visible"
            >
              <motion.div variants={heroChild}>
                <span className="section-label mb-6 inline-block">
                  CP Industries · Odisha, India
                </span>
              </motion.div>

              <motion.h1
                variants={heroChild}
                className="font-heading font-black text-offwhite leading-[1.05] mb-8"
                style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
              >
                OUR PRODUCT,
                <br />
                <span className="text-gold-shimmer">YOUR TRUST.</span>
              </motion.h1>

              <motion.p
                variants={heroChild}
                className="text-offwhite/70 text-base md:text-lg leading-relaxed mb-10 max-w-lg"
              >
                Precision-engineered industrial wire from the heart of Odisha —
                built to global standards, rooted in rural empowerment.
              </motion.p>

              <motion.div variants={heroChild} className="flex flex-wrap items-center gap-4">
                <Link to="/products" id="hero-cta-products" className="btn-gold text-sm">
                  <span>Explore Products</span>
                  <ArrowRight size={16} />
                </Link>
                <Link to="/contact" id="hero-cta-contact" className="btn-gold-outline text-sm">
                  <PhoneCall size={15} />
                  <span>Contact Us</span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <div
          className="absolute bottom-8 right-8 z-20 font-mono text-gold/45 text-xs tracking-widest select-none"
          aria-hidden="true"
        >
          SCROLL ↓
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          WHY CHOOSE US — Betafence style, flush under hero
      ═══════════════════════════════════════════════════════ */}
      <section
        id="why-choose-us"
        ref={whyRef}
        aria-labelledby="why-heading"
        className="bg-jet relative overflow-hidden wire-mesh-bg"
        style={{ borderTop: '1px solid rgba(212,175,55,0.13)' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
          aria-hidden="true"
          style={{
            width: '700px', height: '260px',
            background: 'radial-gradient(ellipse at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)',
          }}
        />

        {/* Header */}
        <motion.div
          className="text-center pt-14 pb-10 px-6"
          variants={sectionTitle}
          initial="hidden"
          animate={whyInView ? 'visible' : 'hidden'}
        >
          <span className="section-label mb-4 inline-block">Our Strengths</span>
          <h2
            id="why-heading"
            className="font-heading font-black text-offwhite mb-3"
            style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)' }}
          >
            Why Choose <span className="text-gold-gradient">CP Industries?</span>
          </h2>
          <p className="text-offwhite/50 text-sm max-w-md mx-auto leading-relaxed">
            Eight pillars that define our commitment to quality, community, and precision.
          </p>
        </motion.div>

        {/* Pillars — max-width container, 4 cols, centered */}
        <div className="why-pillars-wrap">
          {/* Row 1 */}
          <motion.div
            className="why-pillar-row"
            variants={cardGrid}
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
          >
            {WHY_CARDS.slice(0, 4).map(({ icon: Icon, title, body, verified }, i) => (
              <motion.div key={i} className="why-pillar" variants={cardItem}>
                {verified && (
                  <div className="why-verified-badge" title="Government Verified">
                    <BadgeCheck size={10} />
                    <span>Verified</span>
                  </div>
                )}
                <div className="why-pillar-icon-wrap">
                  <Icon size={34} strokeWidth={1.3} className="text-gold" />
                </div>
                <h3 className="why-pillar-title">{title}</h3>
                <p className="why-pillar-body">{body}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Row divider */}
          <div
            className="why-row-divider"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.15), transparent)' }}
            aria-hidden="true"
          />

          {/* Row 2 */}
          <motion.div
            className="why-pillar-row"
            variants={cardGrid}
            initial="hidden"
            animate={whyInView ? 'visible' : 'hidden'}
          >
            {WHY_CARDS.slice(4).map(({ icon: Icon, title, body }, i) => (
              <motion.div key={i} className="why-pillar" variants={cardItem}>
                <div className="why-pillar-icon-wrap">
                  <Icon size={34} strokeWidth={1.3} className="text-gold" />
                </div>
                <h3 className="why-pillar-title">{title}</h3>
                <p className="why-pillar-body">{body}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTORS WE SERVE
      ═══════════════════════════════════════════════════════ */}
      <section
        id="sectors"
        ref={sectorsRef}
        className="bg-jet relative py-20 overflow-hidden wire-mesh-bg"
      >
        <div className="container-fluid px-6 md:px-12 lg:px-24 mb-12">
          <motion.div
            variants={sectionTitle}
            initial="hidden"
            animate={sectorsInView ? 'visible' : 'hidden'}
            className="text-center"
          >
            <span className="section-label mb-4 inline-block">Our Impact</span>
            <h2 className="font-heading font-black text-offwhite" style={{ fontSize: 'clamp(1.7rem, 3.2vw, 2.5rem)' }}>
              Sectors We <span className="text-gold-gradient">Serve.</span>
            </h2>
            <span className="gold-divider gold-divider-center mt-5 block" aria-hidden="true" />
          </motion.div>
        </div>

        {/* Horizontal scroll container */}
        <motion.div
          variants={cardGrid}
          initial="hidden"
          animate={sectorsInView ? 'visible' : 'hidden'}
          className="relative w-full"
        >
          <div
            className="flex overflow-x-auto gap-6 px-6 md:px-12 lg:px-24 pb-8 snap-x snap-mandatory hide-scrollbar"
            onScroll={handleScroll}
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {SECTORS.map((sector, i) => (
              <motion.div
                key={i}
                variants={cardItem}
                className="relative flex-none snap-center rounded-3xl overflow-hidden shadow-2xl group cursor-pointer"
                style={{ width: 'clamp(240px, 28vw, 320px)', aspectRatio: '3/4' }}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col justify-end h-full">
                  <h3 className="font-heading font-bold text-white text-xl mb-2">
                    {sector.title}
                  </h3>
                  <p className="font-roboto font-light text-white/90 text-[0.85rem] leading-relaxed drop-shadow-md">
                    {sector.impact}
                  </p>
                  <div className="h-[2px] w-12 bg-gold mt-4" />
                </div>
              </motion.div>
            ))}

            {/* "And beyond..." card */}
            <motion.div
              variants={cardItem}
              className="relative flex-none snap-center rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center border border-gold/10"
              style={{ width: 'clamp(240px, 28vw, 320px)', aspectRatio: '3/4', background: 'linear-gradient(135deg, rgba(30,30,30,1) 0%, rgba(20,20,20,1) 100%)' }}
            >
              <div className="text-center p-8">
                <span className="text-gold mb-4 block opacity-50">
                  <MoveHorizontal size={40} className="mx-auto" strokeWidth={1} />
                </span>
                <h3 className="font-heading font-bold text-gold text-xl mb-3">
                  And Beyond...
                </h3>
                <p className="font-roboto font-light text-white/50 text-[0.85rem] leading-relaxed">
                  Our advanced manufacturing flexes to meet the specific demands of any industry.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Progress bar container */}
          <div className="container-fluid px-6 md:px-12 lg:px-24 mt-4">
            <div className="flex items-center gap-4 mb-3 text-gold/60">
              <MoveHorizontal size={18} />
              <span className="font-mono text-xs tracking-widest uppercase">Scroll to explore</span>
            </div>
            <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gold transition-all duration-150 ease-out" 
                style={{ width: `${scrollProgress}%` }} 
              />
            </div>
          </div>
        </motion.div>
      </section>



    </>
  )
}
