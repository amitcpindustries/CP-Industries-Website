import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { Award, Umbrella, Activity, Clock, Maximize2, Leaf, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// ── Animation Variants ─────────────────────────────────────────────
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } },
}
const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] } },
}
const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, ease: [0.23, 1, 0.32, 1] } },
}

// ── Quality Pillars ────────────────────────────────────────────────
const PILLARS = [
  {
    icon: Award,
    title: 'Premium Quality',
    desc: 'Sourcing only high-grade raw materials for elite manufacturing.',
  },
  {
    icon: Umbrella,
    title: 'Corrosion Resistant',
    desc: 'Advanced GI & PVC coating for long-lasting rust protection.',
  },
  {
    icon: Activity,
    title: 'High Tensile Strength',
    desc: 'Built to withstand high pressure and extreme impact.',
  },
  {
    icon: Clock,
    title: 'Durable & Long Lasting',
    desc: 'Performance-tested products that stand the test of time.',
  },
  {
    icon: Maximize2,
    title: 'Custom Sizes',
    desc: 'Tailored specifications to fit your unique project needs.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Solutions',
    desc: 'Environmentally conscious manufacturing for a better tomorrow.',
  },
]

// ── Product Data ───────────────────────────────────────────────────
const PRODUCTS = [
  {
    id: 'barbed-wire',
    name: 'Barbed Wire',
    tagline: 'High tensile strength wire for agriculture and security.',
    mainImage: '/main/barbed.jpg',
    detailImage: '/detail/barbed.jpg',
    specs: [
      { label: 'Wire Diameter', value: '1.60mm – 2.80mm' },
      { label: 'Barb Spacing', value: '75mm – 150mm' },
      { label: 'Coating', value: 'Hot-Dip Galvanized' },
      { label: 'Strand', value: 'Double Strand Twist' },
      { label: 'Roll Length', value: '100m – 500m' },
    ],
  },
  {
    id: 'chain-link-fence',
    name: 'Chain Link Fence',
    tagline: 'Flexible diamond mesh solution for large perimeter coverage.',
    mainImage: '/main/chainlink.jpg',
    detailImage: '/detail/chainlink.jpg',
    specs: [
      { label: 'Wire Diameter', value: '2.50mm – 4.00mm' },
      { label: 'Mesh Opening', value: '50mm – 100mm' },
      { label: 'Height', value: 'Up to 4.0m' },
      { label: 'Coating', value: 'GI / PVC Coated' },
      { label: 'Roll Width', value: '1.0m – 4.0m' },
    ],
  },
  {
    id: 'welded-mesh-fence',
    name: 'Welded Mesh Fence',
    tagline: 'Ideal for residential and industrial security perimeters.',
    mainImage: '/main/weldedmesh.jpg',
    detailImage: '/detail/weldedmesh.jpg',
    specs: [
      { label: 'Mesh Size', value: '50×50mm – 100×100mm' },
      { label: 'Wire Diameter', value: '2.00mm – 5.00mm' },
      { label: 'Coating', value: 'GI / PVC Coated' },
      { label: 'Panel Height', value: '0.5m – 3.0m' },
      { label: 'Panel Width', value: '1.5m – 2.5m' },
    ],
  },
  {
    id: 'grassland-fence',
    name: 'Grassland Fence',
    tagline: 'Strong knot design for superior livestock protection.',
    mainImage: '/main/grasslandfence.jpg',
    detailImage: '/detail/grasslandfence.jpg',
    specs: [
      { label: 'Height', value: '0.8m – 2.1m' },
      { label: 'Roll Length', value: '50m – 100m' },
      { label: 'Line Wires', value: '5 – 14 Horizontal' },
      { label: 'Knot Type', value: 'Fixed / Hinge Joint' },
      { label: 'Coating', value: 'Hot-Dip Galvanized' },
    ],
  },
  {
    id: 'gabion-mesh',
    name: 'Gabion Mesh',
    tagline: 'High strength hexagonal mesh for retaining walls and erosion control.',
    mainImage: '/main/gabionmesh.jpg',
    detailImage: '/detail/gabionmesh.jpg',
    specs: [
      { label: 'Box Size', value: '1×1×1m to 2×1×1m' },
      { label: 'Wire Diameter', value: '2.7mm – 4.0mm' },
      { label: 'Mesh Opening', value: '60×80mm – 100×120mm' },
      { label: 'Coating', value: 'PVC / Hot-Dip GI' },
      { label: 'Material', value: 'Low-Carbon Steel' },
    ],
  },
  {
    id: 'vibrating-screen-net',
    name: 'Vibrating Screen Net',
    tagline: 'High-carbon steel for precise material separation in mining & quarrying.',
    mainImage: '/main/vibratingscreen.jpg',
    detailImage: '/detail/vibratingscreen.jpg',
    specs: [
      { label: 'Wire Diameter', value: '1.0mm – 6.0mm' },
      { label: 'Custom Width', value: '0.5m – 2.0m' },
      { label: 'Opening Size', value: 'Custom per requirement' },
      { label: 'Material', value: 'High-Carbon Steel' },
      { label: 'Application', value: 'Mining & Quarrying' },
    ],
  },
  {
    id: 'concertina-wire',
    name: 'Concertina Wire',
    tagline: 'Maximum security blade design for critical perimeter defence.',
    mainImage: '/main/concertinaiwre.jpg',
    detailImage: '/detail/concertinaiwre.jpg',
    specs: [
      { label: 'Coil Diameter', value: '450mm – 960mm' },
      { label: 'Barb Spacing', value: '25mm – 35mm' },
      { label: 'Clips per Coil', value: '5 – 7 Clips' },
      { label: 'Material', value: 'GI / Stainless Steel' },
      { label: 'Application', value: 'Defence & High-Security' },
    ],
  },
]

// ── Image Overlap Card ─────────────────────────────────────────────
function OverlapImages({ mainSrc, detailSrc }: { mainSrc: string; detailSrc: string; flip: boolean }) {
  return (
    <div className="relative w-full">
      {/* Main large image */}
      <div className="rounded-2xl overflow-hidden shadow-2xl border border-gold/15" style={{ aspectRatio: '16/10' }}>
        <img
          src={mainSrc}
          alt="Product main"
          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          loading="lazy"
        />
      </div>
      {/* Detail overlapping image — bottom-right corner */}
      <div
        className="absolute -bottom-8 -right-5 w-[40%] rounded-xl overflow-hidden
                   border-4 border-jet shadow-2xl ring-1 ring-gold/40 z-10 bg-jet"
        style={{ aspectRatio: '4/3' }}
      >
        <img
          src={detailSrc}
          alt="Product detail"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  )
}

// ── Specs Table ────────────────────────────────────────────────────
function SpecsTable({ specs }: { specs: { label: string; value: string }[] }) {
  return (
    <table className="w-full text-sm mt-6 border-collapse">
      <tbody>
        {specs.map(({ label, value }) => (
          <tr key={label} className="border-b border-gold/10 last:border-0">
            <td className="py-3 pr-4 font-mono text-xs text-gold/60 uppercase tracking-widest whitespace-nowrap">{label}</td>
            <td className="py-3 font-roboto font-light text-offwhite/80">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

// ── Main Page ──────────────────────────────────────────────────────
export default function ProductsPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION (Typewriter)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen bg-jet flex flex-col items-center justify-center overflow-hidden wire-mesh-bg">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="section-label mb-6 inline-block">Our Products</span>
            <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-7xl leading-tight min-h-[160px] md:min-h-[220px]">
              <Typewriter
                options={{
                  strings: [
                    'Engineered for Strength.',
                    'Designed for Security.',
                    '<span style="color:#D4AF37">The CP Industries Premium Catalog.</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 30,
                  deleteSpeed: 12,
                }}
              />
            </h1>
          </motion.div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: QUALITY PILLARS (6-card grid)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#0d0d0d] border-t border-gold/10 py-24 md:py-32 overflow-hidden">
        <div className="container-fluid px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 inline-block">Why Choose Us</span>
            <h2 className="font-heading font-black text-offwhite text-4xl md:text-5xl">
              The CP Industries <span className="text-gold-gradient">Standard.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {PILLARS.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.08, ease: [0.23, 1, 0.32, 1] } } }}
                className="bg-[#151515] rounded-2xl border border-gold/10 hover:border-gold/40 p-8 flex flex-col gap-4
                           shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/20 transition-colors">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-white text-lg">{title}</h3>
                <p className="font-roboto font-light text-offwhite/50 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: PRODUCT SHOWCASE (Riverdale Alternating)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-jet border-t border-gold/10 py-24 md:py-32 wire-mesh-bg overflow-hidden">
        <div className="px-4 md:px-8 lg:px-16">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-20"
          >
            <span className="section-label mb-4 inline-block">Product Catalog</span>
            <h2 className="font-heading font-black text-offwhite text-4xl md:text-5xl">
              Our <span className="text-gold-gradient">Showcase.</span>
            </h2>
          </motion.div>

          <div className="flex flex-col gap-36 md:gap-48">
            {PRODUCTS.map((product, index) => {
              const isFlipped = index % 2 !== 0
              const imageVariant = isFlipped ? slideInRight : slideInLeft
              const textVariant = isFlipped ? slideInLeft : slideInRight

              return (
                <div
                  key={product.id}
                  id={product.id}
                  className={`flex flex-col ${
                    isFlipped ? 'md:flex-row-reverse' : 'md:flex-row'
                  } items-center gap-8 md:gap-12 lg:gap-16`}
                >
                  {/* ── Image Block (55%) ── */}
                  <motion.div
                    className="w-full md:w-[55%] flex-shrink-0"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={imageVariant}
                  >
                    <OverlapImages
                      mainSrc={product.mainImage}
                      detailSrc={product.detailImage}
                      flip={isFlipped}
                    />
                  </motion.div>

                  {/* ── Text & Specs Block (45%) ── */}
                  <motion.div
                    className="w-full md:w-[45%] pt-10 md:pt-0"
                    initial="hidden" whileInView="visible" viewport={{ once: true, margin: '-60px' }} variants={textVariant}
                  >
                    {/* Index number */}
                    <span className="font-mono text-gold/20 text-6xl font-black leading-none select-none block mb-3">
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    <span className="section-label mb-3 inline-block">CP Industries</span>
                    <h2 className="font-heading font-black text-offwhite text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
                      {product.name}
                    </h2>
                    <p className="font-roboto font-light text-offwhite/60 text-base md:text-lg leading-relaxed">
                      {product.tagline}
                    </p>

                    {/* Divider */}
                    <div className="h-[1px] bg-gradient-to-r from-gold/40 to-transparent my-6" />

                    {/* Specs table */}
                    <SpecsTable specs={product.specs} />

                    {/* CTA */}
                    <div className="mt-8">
                      <Link
                        to="/contact#inquiry-form"
                        className="btn-gold px-6 py-3 text-xs inline-flex"
                        id={`cta-${product.id}`}
                      >
                        <span>Request a Quote</span>
                        <ArrowUpRight size={14} />
                      </Link>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
