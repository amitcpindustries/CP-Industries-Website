import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Typewriter from 'typewriter-effect'
import { MapPin, Phone, Mail, Instagram, Facebook, Twitter, ArrowUpRight, Send, CheckCircle } from 'lucide-react'

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
}

const PRODUCTS = [
  'Barbed Wire',
  'Chain Link Fence',
  'Welded Mesh Fence',
  'Grassland Fence',
  'Gabion Mesh',
  'Vibrating Screen Net',
  'Concertina Wire',
  'Others',
]

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/cp_industries15?igsh=d2gxZnVsMWdrdHB4&utm_source=qr',
    icon: Instagram,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/1bNqpw2mt2/?mibextid=wwXIfr',
    icon: Facebook,
  },
  {
    label: 'X (Twitter)',
    href: 'https://x.com/CpIndustri92456',
    icon: Twitter,
  },
]

type FormState = {
  name: string
  phone: string
  email: string
  product: string
  message: string
}

type SubmitStatus = 'idle' | 'loading' | 'sent' | 'error'

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: '',
    phone: '',
    email: '',
    product: '',
    message: '',
  })
  const [status, setStatus] = useState<SubmitStatus>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    if (window.location.hash === '#inquiry-form') {
      setTimeout(() => {
        const el = document.getElementById('inquiry-form')
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 500)
    }
  }, [])

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/.netlify/functions/send-contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      const data = await res.json()

      if (!res.ok) {
        setErrorMsg(data.error ?? 'Something went wrong. Please try again.')
        setStatus('error')
        return
      }

      setStatus('sent')
      setForm({ name: '', phone: '', email: '', product: '', message: '' })
    } catch {
      setErrorMsg('Network error — please check your connection and try again.')
      setStatus('error')
    }
  }

  return (
    <>
      {/* ═══════════════════════════════════════════════════════
          HERO SECTION (Typewriter)
      ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full h-screen bg-[#111111] flex flex-col items-center justify-center overflow-hidden wire-mesh-bg">
        {/* Gold glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 text-center px-6 max-w-5xl w-full">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <span className="section-label mb-6 inline-block">Contact Us</span>
            <h1 className="font-heading font-black text-white text-4xl md:text-5xl lg:text-7xl leading-tight min-h-[160px] md:min-h-[220px]">
              <Typewriter
                options={{
                  strings: [
                    'Have a Project in Mind?',
                    "Let's Secure Your Assets Together.",
                    '<span style="color:#D4AF37">Get in Touch with CP Industries Today.</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 25,
                  deleteSpeed: 10,
                }}
              />
            </h1>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-1.5 bg-gold rounded-full" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 1: INQUIRY HUB
      ═══════════════════════════════════════════════════════ */}
      <section id="inquiry-form" className="relative bg-jet border-t border-gold/10 py-24 md:py-32 wire-mesh-bg overflow-hidden">
        <div className="container-fluid px-6 md:px-12 lg:px-24 relative z-10">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
            className="text-center mb-16"
          >
            <span className="section-label mb-4 inline-block">Inquiry Hub</span>
            <h2 className="font-heading font-black text-offwhite text-4xl md:text-5xl">
              Start a <span className="text-gold-gradient">Conversation.</span>
            </h2>
            <p className="font-roboto font-light text-offwhite/50 mt-4 text-base max-w-xl mx-auto">
              Share your requirements and our team will respond with bulk pricing, specifications, and dispatch timelines within 24 hours.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-7xl mx-auto">

            {/* ── LEFT: FORM ─────────────────────────────────── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}
              className="lg:col-span-3 bg-[#151515] rounded-3xl border border-gold/50 p-8 md:p-12 shadow-2xl"
            >
              {status === 'sent' ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-20">
                  <CheckCircle size={56} className="text-gold mb-6" />
                  <h3 className="font-heading font-bold text-white text-3xl mb-3">Inquiry Sent!</h3>
                  <p className="font-roboto font-light text-offwhite/60 max-w-sm">
                    Your message has been delivered directly to CP Industries. We will respond within 24 hours.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-8 btn-gold px-6 py-3 text-sm"
                  >
                    <span>Send Another</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-name" className="font-mono text-xs text-gold/60 tracking-widest uppercase">Full Name *</label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Amit Sharma"
                        className="contact-input"
                      />
                    </div>
                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-phone" className="font-mono text-xs text-gold/60 tracking-widest uppercase">Phone Number *</label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="contact-input"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-email" className="font-mono text-xs text-gold/60 tracking-widest uppercase">Email Address</label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="contact-input"
                      />
                    </div>
                    {/* Product Dropdown */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="contact-product" className="font-mono text-xs text-gold/60 tracking-widest uppercase">Product Interest *</label>
                      <select
                        id="contact-product"
                        name="product"
                        required
                        value={form.product}
                        onChange={handleChange}
                        className="contact-input appearance-none"
                      >
                        <option value="" disabled>Select a product…</option>
                        {PRODUCTS.map((p) => (
                          <option key={p} value={p}>{p}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-message" className="font-mono text-xs text-gold/60 tracking-widest uppercase">Message / Requirements *</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Describe your project, quantity needed, delivery location…"
                      className="contact-input resize-none"
                    />
                  </div>

                  {status === 'error' && (
                    <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl px-5 py-4">
                      <span className="text-red-400 text-lg leading-none mt-0.5">⚠</span>
                      <p className="font-roboto text-sm text-red-400">{errorMsg}</p>
                    </div>
                  )}

                  <button
                    type="submit"
                    id="contact-submit"
                    disabled={status === 'loading'}
                    className="btn-gold w-full md:w-auto px-10 py-4 text-sm mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-jet" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        <span>Sending…</span>
                      </>
                    ) : (
                      <>
                        <span>Send Inquiry</span>
                        <Send size={15} />
                      </>
                    )}
                  </button>

                  <p className="text-offwhite/30 text-xs font-mono mt-2">
                    * Your inquiry is sent securely.
                  </p>
                </form>
              )}
            </motion.div>

            {/* ── RIGHT: CONTACT INFO ────────────────────────── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }}
              variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { duration: 0.8, delay: 0.15, ease: [0.23, 1, 0.32, 1] } } }}
              className="lg:col-span-2 flex flex-col gap-6"
            >
              {/* Company Card */}
              <div className="bg-[#151515] rounded-3xl border border-gold/50 p-8 shadow-2xl flex-1">
                <span className="font-mono text-gold/60 text-xs tracking-widest uppercase mb-5 block">Direct Line</span>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <MapPin size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-white text-sm mb-1">M/S CP Industries</p>
                      <p className="font-roboto font-light text-offwhite/50 text-sm leading-relaxed">
                        Plot No-11/20, Bibekananda Pradhan,<br />
                        At- Nabing, Maimura, Athamallik,<br />
                        Angul, Odisha — 759125
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Phone size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-mono text-gold/60 text-xs tracking-widest uppercase mb-1">Call / WhatsApp</p>
                      <a
                        href="tel:+918249030026"
                        className="font-heading font-semibold text-white hover:text-gold transition-colors text-lg no-underline"
                      >
                        +91 82490 30026
                      </a>
                    </div>
                  </div>

                  {/* Emails */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Mail size={16} className="text-gold" />
                    </div>
                    <div>
                      <p className="font-mono text-gold/60 text-xs tracking-widest uppercase mb-1">Email</p>
                      <a
                        href="mailto:amitcpindustries@gmail.com"
                        className="block font-roboto text-white/80 hover:text-gold transition-colors text-sm no-underline"
                      >
                        amitcpindustries@gmail.com
                      </a>
                      <a
                        href="mailto:26cpindustries@gmail.com"
                        className="block font-roboto text-white/60 hover:text-gold transition-colors text-sm no-underline mt-0.5"
                      >
                        26cpindustries@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-gold/10" />

                  {/* Social */}
                  <div>
                    <p className="font-mono text-gold/60 text-xs tracking-widest uppercase mb-4">Follow Us</p>
                    <div className="flex gap-3">
                      {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`CP Industries on ${label}`}
                          className="w-10 h-10 flex items-center justify-center border border-gold/20
                                     text-offwhite/50 hover:text-gold hover:border-gold/50
                                     rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                        >
                          <Icon size={15} />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* GST / Compliance Card */}
              <div className="bg-gradient-to-br from-gold/10 to-transparent rounded-3xl border border-gold/50 p-7 shadow-xl">
                <p className="font-mono text-gold text-xs tracking-widest uppercase mb-2">Government Registration</p>
                <p className="font-heading font-bold text-white text-base tracking-wider mb-1">GST: 21GBUPP5385Q1ZH</p>
                <p className="font-heading font-bold text-white text-base tracking-wider">IEC: GBUPP5385Q</p>
                <p className="font-roboto font-light text-offwhite/40 text-xs mt-2">
                  Government-verified manufacturer. All invoices carry valid GST.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          SECTION 2: GOOGLE MAP
      ═══════════════════════════════════════════════════════ */}
      <section className="relative w-full border-t border-gold/10 overflow-hidden" style={{ height: '600px' }}>
        {/* Proper Google Maps embed centered on Athamallik */}
        <iframe
          title="CP Industries Location — Athamallik, Angul"
          src="https://maps.google.com/maps?q=20.5244,84.5956&t=m&z=10&output=embed&iwloc=near"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        {/* Subtle bottom fade to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-jet to-transparent" />

        {/* Floating CTA */}
        <a
          href="https://maps.app.goo.gl/potgvmusy7Yk5r8VA"
          target="_blank"
          rel="noopener noreferrer"
          id="open-maps-btn"
          className="absolute bottom-8 right-8 btn-gold px-5 py-3 text-xs shadow-2xl pointer-events-auto"
        >
          <span>Open in Google Maps</span>
          <ArrowUpRight size={14} />
        </a>

        {/* Location pin badge */}
        <div className="absolute top-6 left-6 bg-jet/90 backdrop-blur-md border border-gold/20 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-xl">
          <MapPin size={20} className="text-gold flex-shrink-0" />
          <div>
            <p className="font-heading font-semibold text-white text-sm">CP Industries</p>
            <p className="font-mono text-offwhite/50 text-xs">Athamallik, Angul, Odisha — 759125</p>
          </div>
        </div>
      </section>
    </>
  )
}
