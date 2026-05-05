import { Link, useLocation } from 'react-router-dom'
import { MapPin, Phone, Mail, Twitter, Instagram, ArrowUpRight, Facebook, MessageCircle } from 'lucide-react'

// ── Footer link groups ─────────────────────────────────────────────
const QUICK_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact',  to: '/contact' },
]

const SOCIAL_LINKS = [
  { label: 'Instagram', href: 'https://www.instagram.com/cp_industries15?igsh=d2gxZnVsMWdrdHB4&utm_source=qr', icon: Instagram },
  { label: 'Facebook',  href: 'https://www.facebook.com/share/1bNqpw2mt2/?mibextid=wwXIfr', icon: Facebook },
  { label: 'X',         href: 'https://x.com/CpIndustri92456', icon: Twitter },
  { label: 'WhatsApp',  href: 'https://wa.me/918249030026', icon: MessageCircle },
]

// ─────────────────────────────────────────────────────────────────
export default function Footer() {
  const year = new Date().getFullYear()
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  const isAboutPage = location.pathname === '/about'
  const isContactPage = location.pathname === '/contact'
  const isProductsPage = location.pathname === '/products'
  const showCinematicCloser = isHomePage || isAboutPage || isContactPage || isProductsPage
  const cinematicBg = isHomePage
    ? '/footers/home.jpg'
    : isAboutPage
    ? '/footers/about.jpg'
    : isProductsPage
    ? '/footers/product.jpg'
    : '/footers/contact.jpg'

  return (
    <footer
      role="contentinfo"
      className="relative bg-jet wire-mesh-static overflow-hidden"
    >
      {/* ── Top border glow ──────────────────────────────────── */}
      <div
        className="absolute top-0 left-0 right-0 h-[1px]
                   bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />

      {/* ── Newsletter / CTA Strip ──────────────────────────── */}
      <div className="bg-[#141414] border-b border-gold/10 relative overflow-hidden">
        <div className="wire-mesh-bg absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="container-fluid px-6 md:px-10 lg:px-16 py-16 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="section-label mb-4 inline-block text-[0.65rem] border-gold/20 bg-transparent text-gold">PARTNER WITH US</span>
              <h2 className="font-heading font-bold text-offwhite mb-4" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                Ready to source <span className="text-gold">premium wire?</span>
              </h2>
              <p className="text-offwhite/50 font-roboto font-light leading-relaxed text-sm md:text-base max-w-xl">
                Get bulk pricing, ISI certification details, and dispatch timelines — straight from our factory floor.
              </p>
            </div>
            <div className="flex-shrink-0 mt-2 md:mt-0">
              <Link to="/contact#inquiry-form" id="footer-cta" className="btn-gold px-8 py-4 text-[0.8rem]">
                <span>REQUEST A QUOTE</span>
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Cinematic Closer (Home & About Pages) ──────────────────── */}
      {showCinematicCloser && (
        <section 
          className="relative w-full h-[550px] overflow-hidden flex items-center justify-center bg-fixed bg-center bg-cover border-b border-gold/10"
          style={{ backgroundImage: `url(${cinematicBg})` }}
        >
          <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
          
          <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">
            <img src="/logo.png" alt="CP Industries Logo" className="h-24 md:h-32 mb-6 opacity-70 drop-shadow-2xl" />
            <h2 className="font-heading font-black text-white tracking-widest uppercase mb-4" style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>
              OUR PRODUCT <span className="text-gold">YOUR TRUST</span>
            </h2>
            <p className="font-roboto font-light text-white/80 text-sm md:text-lg tracking-wide max-w-2xl">
              Strong Products. Stronger Protection. Built in Athamallik for the World.
            </p>
          </div>
        </section>
      )}

      {/* ── Main Footer Grid ─────────────────────────────────── */}
      <div className="container-fluid px-6 md:px-10 lg:px-16 py-16">
        <div className="row g-5">

          {/* Brand column */}
          <div className="col-12 col-md-6 col-lg-4">
            {/* Logo */}
            <Link to="/" className="inline-block mb-6">
              <img src="/logo.png" alt="CP Industries" className="h-16 w-auto" />
            </Link>

            <p className="text-offwhite/60 text-sm leading-relaxed mb-6 max-w-xs">
              A young Odisha-born enterprise building precision-engineered wire products 
              with global standards and rural empowerment at heart. Founded by Amit Pradhan.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`CP Industries on ${label}`}
                  role="listitem"
                  className="w-9 h-9 flex items-center justify-center border border-gold/20
                             text-offwhite/50 hover:text-gold hover:border-gold/50
                             rounded-sm transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-6 col-md-3 col-lg-3">
            <h3 className="font-heading font-semibold text-offwhite text-xs tracking-widest uppercase mb-5">
              Quick Links
            </h3>
            <ul className="list-none flex flex-col gap-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-offwhite/55 hover:text-gold text-sm transition-colors duration-200
                               flex items-center gap-1 group no-underline"
                  >
                    <span
                      className="w-3 h-[1px] bg-gold/40 group-hover:w-5 group-hover:bg-gold
                                 transition-all duration-300"
                      aria-hidden="true"
                    />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-12 col-lg-5 mt-8 lg:mt-0">
            <h3 className="font-heading font-semibold text-offwhite text-xs tracking-widest uppercase mb-5">
              Get in Touch
            </h3>
            <ul className="list-none flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="text-offwhite/70 text-sm leading-relaxed max-w-sm">
                  KHATA NO-11/20, BIBEKANANDA PRADHAN, AT NABING, MAIMURA, ATHAMALLIK, Angul, Odisha, 759125
                </span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-gold flex-shrink-0" />
                <a
                  href="tel:+918249030026"
                  className="text-offwhite/70 hover:text-gold text-sm transition-colors duration-200 no-underline"
                >
                  +91 82490 30026
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Mail size={20} className="text-gold flex-shrink-0" />
                <a
                  href="mailto:cpindustriessells@gmail.com"
                  className="text-offwhite/70 hover:text-gold text-sm transition-colors duration-200 no-underline"
                >
                  cpindustriessells@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ───────────────────────────────────────── */}
      <div className="border-t border-gold/10">
        <div
          className="container-fluid px-6 md:px-10 lg:px-16 py-5
                     flex flex-col sm:flex-row items-center justify-between gap-3"
        >
          <p className="text-offwhite/35 text-xs font-mono tracking-wider w-full text-center sm:text-left">
            © {year} CP Industries. All rights reserved. <span className="hidden sm:inline">| ISI Certified</span>
          </p>
        </div>
      </div>

      {/* ── Decorative corner element ───────────────────────── */}
      <div
        className="absolute bottom-0 right-0 w-64 h-64 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(circle at bottom right, rgba(212,175,55,0.05) 0%, transparent 70%)',
        }}
      />
    </footer>
  )
}
