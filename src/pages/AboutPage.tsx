import { motion } from 'framer-motion'
import { useRef } from 'react'
import Typewriter from 'typewriter-effect'
import { ShieldCheck, Trees, MapPin } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
}

export default function AboutPage() {
  const containerRef = useRef(null)

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION (Typewriter)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen bg-jet flex flex-col items-center justify-center overflow-hidden wire-mesh-bg">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] md:w-[40vw] md:h-[40vw] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 text-center px-6 max-w-5xl w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-7xl leading-tight min-h-[160px] md:min-h-[220px]">
              <Typewriter
                options={{
                  strings: [
                    'Empowering India... One Wire at a Time.',
                    'Building Trust... Through Unmatched Quality.',
                    '<span class="text-gold-gradient">Welcome to the Heart of CP Industries.</span>'
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 60,
                  deleteSpeed: 30,
                  wrapperClassName: 'typewriter-text',
                  cursorClassName: 'text-gold animate-pulse text-5xl md:text-7xl ml-2 font-light'
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
          SECTION 1: OUR STORY
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-jet py-24 md:py-32 border-t border-gold/10 wire-mesh-bg overflow-hidden">
        <div className="container-fluid px-6 md:px-12 lg:px-24 relative z-10">
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-6xl mx-auto">
            {/* Timeline Left */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="md:w-1/3 flex flex-col md:items-end relative"
            >
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
              <div className="text-left md:text-right md:pr-12">
                <span className="section-label mb-4 inline-block text-gold">The Beginning</span>
                <h2 className="font-heading font-bold text-offwhite text-4xl lg:text-5xl mb-4 leading-tight">
                  A Legacy in <br/><span className="text-gold-gradient">the Making</span>
                </h2>
                <div className="text-gold font-mono tracking-widest text-sm opacity-50 mt-8 relative">
                  EST. SEP 2021
                  <span className="hidden md:block absolute top-1/2 -right-[53px] w-3 h-3 bg-gold rounded-full -translate-y-1/2 ring-4 ring-jet z-10" />
                </div>
              </div>
            </motion.div>
            
            {/* Narrative Right */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}
              className="md:w-2/3 md:pl-6"
            >
              <div className="prose prose-invert prose-lg max-w-none font-roboto font-light text-offwhite/70 leading-relaxed space-y-6">
                <p>
                  In September 2021, at the age of 21, Amit Pradhan looked at the fertile lands of Athamallik and saw more than just fields—he saw an opportunity to protect them. What started as a vision to provide high-quality fencing has grown into a mission of rural empowerment.
                </p>
                <p>
                  Today, CP Industries stands as a beacon of young entrepreneurship, proving that world-class manufacturing can thrive in the heart of a village.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: DIRECTOR'S MESSAGE (Parallax)
      ═══════════════════════════════════════════════════════ */}
      <section ref={containerRef} className="relative bg-[#0d0d0d] hidden md:block border-y border-gold/10">
        <div className="flex min-h-screen">
          {/* Fixed Left (Director Photo) */}
          <div className="w-1/2 relative border-r border-gold/10">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
              <img 
                src="/director.jpg" 
                alt="Amit Pradhan, Founder & Director" 
                className="w-full h-full object-cover object-center opacity-90 transition-all duration-1000"
              />
              {/* Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-[#0d0d0d]" />
              <div className="absolute bottom-12 left-12">
                <span className="font-mono text-gold text-xs tracking-widest uppercase block mb-2">Founder & Director</span>
                <span className="font-heading font-bold text-white text-4xl">Amit Pradhan</span>
              </div>
            </div>
          </div>
          
          {/* Scrolling Right (Message) */}
          <div className="w-1/2 flex items-center bg-jet-soft py-32 px-16 lg:px-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeInUp}>
              <span className="section-label mb-6 inline-block">Director's Message</span>
              <h2 className="font-heading font-black text-offwhite text-4xl lg:text-6xl mb-12 leading-tight">
                Leadership with <span className="text-gold-gradient">Purpose.</span>
              </h2>
              
              <div className="space-y-8 font-roboto font-light text-offwhite/70 text-xl leading-relaxed relative">
                <span className="absolute -top-10 -left-8 text-8xl text-gold/10 font-heading font-black">"</span>
                <p>
                  At CP Industries, our motto 'Our Product Your Trust' isn't just a slogan; it's a promise we fulfill every single day. We don't just manufacture wire; we manufacture peace of mind for farmers and security for industries.
                </p>
                <p>
                  When we established this facility in Athamallik, many questioned the decision to build industrial infrastructure outside of traditional urban hubs. But we saw an opportunity to unlock the incredible, untapped potential of our local community.
                </p>
                <p>
                  Today, that decision is the very core of our strength. Our team operates with an unparalleled sense of ownership and pride. As we scale our operations to meet national demands—whether for high-security defense perimeters or vast agricultural fencing—we remain deeply rooted in the values of honesty, hard work, and uncompromising quality.
                </p>
                <p>
                  My goal is to bridge the gap between rural talent and global standards, ensuring that every roll of mesh leaving our facility carries the mark of excellence.
                </p>
                <div className="mt-12 flex items-center gap-6">
                  <div className="w-12 h-[2px] bg-gold" />
                  <span className="font-heading font-semibold text-gold text-lg tracking-widest uppercase">
                    Amit Pradhan
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mobile fallback for Director Section */}
      <section className="relative bg-[#0d0d0d] md:hidden py-20 border-y border-gold/10">
        <div className="px-6 mb-10">
          <div className="w-full h-[400px] rounded-3xl overflow-hidden relative border border-gold/20 shadow-2xl">
            <img 
              src="/director.jpg" 
              alt="Amit Pradhan, Founder & Director" 
              className="w-full h-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <span className="font-mono text-gold text-xs tracking-widest uppercase block mb-2">Founder & Director</span>
              <span className="font-heading font-bold text-white text-3xl">Amit Pradhan</span>
            </div>
          </div>
        </div>
        <div className="px-6">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
            <span className="section-label mb-4 inline-block">Director's Message</span>
            <h2 className="font-heading font-black text-offwhite text-4xl mb-8">
              Leadership with <span className="text-gold-gradient">Purpose.</span>
            </h2>
            <div className="font-roboto font-light text-offwhite/70 text-lg leading-relaxed space-y-6 relative">
              <span className="absolute -top-8 -left-2 text-6xl text-gold/10 font-heading font-black">"</span>
              <p>
                At CP Industries, our motto 'Our Product Your Trust' isn't just a slogan; it's a promise we fulfill every single day. We don't just manufacture wire; we manufacture peace of mind for farmers and security for industries.
              </p>
              <p>
                When we established this facility in Athamallik, many questioned the decision to build industrial infrastructure outside of traditional urban hubs. But we saw an opportunity to unlock the incredible, untapped potential of our local community.
              </p>
              <p>
                Today, that decision is the very core of our strength. Our team operates with an unparalleled sense of ownership and pride. As we scale our operations to meet national demands—whether for high-security defense perimeters or vast agricultural fencing—we remain deeply rooted in the values of honesty, hard work, and uncompromising quality.
              </p>
              <p>
                My goal is to bridge the gap between rural talent and global standards, ensuring that every roll of mesh leaving our facility carries the mark of excellence.
              </p>
              <div className="mt-10 flex items-center gap-4">
                <div className="w-8 h-[2px] bg-gold" />
                <span className="font-heading font-semibold text-gold text-sm tracking-widest uppercase">
                  Amit Pradhan
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 3: THE FOUNDATION (Bento Grid)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative bg-jet py-24 md:py-32 wire-mesh-bg border-b border-gold/10">
        <div className="container-fluid px-6 md:px-12 lg:px-24">
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 inline-block">Core Pillars</span>
            <h2 className="font-heading font-black text-offwhite text-4xl md:text-5xl">
              The <span className="text-gold-gradient">Foundation.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Box 1 (Farmers - Large) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.1 }} variants={fadeInUp}
              className="md:col-span-2 bg-[#1A1A1A] p-10 md:p-12 rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <Trees size={180} className="text-gold" />
              </div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <Trees size={28} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-white text-3xl mb-4">Rooted in the Soil.</h3>
                <p className="font-roboto font-light text-offwhite/60 text-lg leading-relaxed max-w-lg">
                  Supported by a strong foundation of local farmers who are both our inspiration and our backbone.
                </p>
              </div>
            </motion.div>

            {/* Box 2 (Verification - Tall) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.2 }} variants={fadeInUp}
              className="md:col-span-1 bg-[#1A1A1A] p-10 rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute -bottom-10 -right-10 opacity-5 group-hover:opacity-10 transition-opacity">
                <ShieldCheck size={200} className="text-gold" />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <ShieldCheck size={28} className="text-gold" />
                </div>
                <h3 className="font-heading font-bold text-white text-3xl mb-4">Government Verified.</h3>
                <p className="font-roboto font-light text-offwhite/60 text-base leading-relaxed mt-auto">
                  Registered under GST (21GBUPP5385Q1ZH), we maintain the highest standards of legal and industrial compliance.
                </p>
              </div>
            </motion.div>

            {/* Box 3 (Location - Wide) */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} transition={{ delay: 0.3 }} variants={fadeInUp}
              className="md:col-span-3 bg-gradient-to-r from-[#141414] to-[#1A1A1A] p-10 md:p-12 rounded-3xl border border-gold/10 hover:border-gold/30 transition-colors shadow-2xl flex flex-col md:flex-row items-center gap-8 group"
            >
              <div className="w-20 h-20 flex-shrink-0 rounded-full bg-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin size={36} className="text-gold" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-white text-3xl mb-2 text-center md:text-left">Proudly Local.</h3>
                <p className="font-roboto font-light text-offwhite/60 text-xl leading-relaxed text-center md:text-left">
                  Operating from Athamallik, Angul, providing jobs and dignity to our villagers.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
