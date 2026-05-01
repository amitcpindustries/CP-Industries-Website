import { useState, useEffect, useRef } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

// ── Nav links definition ──────────────────────────────────────────
const NAV_LINKS = [
  { label: 'Home',     to: '/' },
  { label: 'About',    to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Contact',  to: '/contact' },
]

// ── Framer variants ───────────────────────────────────────────────
const mobileMenuVariants = {
  hidden:  { opacity: 0, x: '100%' },
  visible: {
    opacity: 1, x: 0,
    transition: { type: 'spring', stiffness: 300, damping: 30 },
  },
  exit: {
    opacity: 0, x: '100%',
    transition: { duration: 0.25, ease: 'easeIn' },
  },
}

const linkItemVariants = {
  hidden:  { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.07, duration: 0.4, ease: [0.23, 1, 0.32, 1] },
  }),
}

// ─────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [mobileOpen,  setMobileOpen]  = useState(false)
  const navRef = useRef<HTMLElement>(null)

  // Detect scroll for frosted-glass effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle('no-scroll', mobileOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [mobileOpen])

  const closeMobile = () => setMobileOpen(false)

  return (
    <>
      <header
        ref={navRef}
        role="banner"
        className={[
          'fixed top-0 left-0 right-0 z-100 transition-all duration-500',
          scrolled
            ? 'bg-jet/95 backdrop-blur-md shadow-jet-card border-b border-gold/10'
            : 'bg-transparent',
        ].join(' ')}
        style={{ height: 'var(--navbar-h)' }}
      >
        <div className="container-fluid h-full px-6 md:px-10 lg:px-16 flex items-center justify-between">

          {/* ── Logo ──────────────────────────────────────────── */}
          <Link
            to="/"
            className="flex items-center gap-3 group"
            aria-label="CP Industries – Home"
            onClick={closeMobile}
            style={{ textDecoration: 'none' }}
          >
            {/* Logo image */}
            <img
              src="/logo.png"
              alt="CP Industries"
              className="h-16 w-auto object-contain drop-shadow-[0_0_10px_rgba(212,175,55,0.35)]
                         group-hover:drop-shadow-[0_0_18px_rgba(212,175,55,0.65)]
                         transition-all duration-300"
            />

            {/* Wordmark */}
            <span
              className="font-heading font-black tracking-[0.14em] uppercase leading-none
                         text-[1.1rem] text-gold-gradient
                         group-hover:opacity-80 transition-opacity duration-300"
              style={{ textDecoration: 'none' }}
            >
              CP Industries
            </span>
          </Link>

          {/* ── Desktop Nav ───────────────────────────────────── */}
          <nav
            aria-label="Main navigation"
            className="hidden md:flex items-center gap-1"
          >
            {NAV_LINKS.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  [
                    'relative px-4 py-2 font-heading font-500 text-sm tracking-widest uppercase no-underline',
                    'transition-colors duration-300',
                    isActive ? 'text-gold' : 'text-offwhite/75 hover:text-offwhite',
                  ].join(' ')
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {/* Underline indicator */}
                    <motion.span
                      className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-gold rounded-full"
                      initial={false}
                      animate={{ scaleX: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* CTA */}
            <Link
              to="/contact"
              id="navbar-cta"
              className="btn-gold ml-4 text-xs"
              onClick={closeMobile}
            >
              <span>Get a Quote</span>
            </Link>
          </nav>

          {/* ── Mobile Hamburger ──────────────────────────────── */}
          <button
            id="navbar-mobile-toggle"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen(v => !v)}
            className="md:hidden p-2 text-offwhite hover:text-gold transition-colors duration-200"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* ── Gold accent line under navbar ─────────────────── */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r
                     from-transparent via-gold/40 to-transparent"
          aria-hidden="true"
        />
      </header>

      {/* ── Mobile Side Drawer ──────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-90 bg-jet/80 backdrop-blur-sm"
              onClick={closeMobile}
              aria-hidden="true"
            />

            {/* Drawer panel */}
            <motion.nav
              key="drawer"
              id="mobile-menu"
              role="dialog"
              aria-label="Mobile navigation"
              aria-modal="true"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-100 w-72 bg-jet-soft
                         border-l border-gold/15 flex flex-col pt-24 px-8 pb-10"
            >
              {/* Close button inside drawer */}
              <button
                aria-label="Close menu"
                onClick={closeMobile}
                className="absolute top-5 right-5 p-2 text-offwhite/60 hover:text-gold transition-colors"
              >
                <X size={22} />
              </button>

              {/* Links */}
              <ul className="flex flex-col gap-1 list-none" role="list">
                {NAV_LINKS.map(({ label, to }, i) => (
                  <motion.li
                    key={to}
                    custom={i}
                    variants={linkItemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={to}
                      end={to === '/'}
                      onClick={closeMobile}
                      className={({ isActive }) =>
                        [
                          'block py-3 font-heading font-600 text-base tracking-widest uppercase no-underline',
                          'border-b border-gold/10 transition-colors duration-200',
                          isActive ? 'text-gold' : 'text-offwhite/80 hover:text-gold',
                        ].join(' ')
                      }
                    >
                      {label}
                    </NavLink>
                  </motion.li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-auto">
                <Link
                  to="/contact"
                  id="navbar-mobile-cta"
                  className="btn-gold w-full justify-center text-xs"
                  onClick={closeMobile}
                >
                  <span>Request a Quote</span>
                </Link>

                <p className="mt-6 font-mono text-gold/50 text-[0.65rem] tracking-widest uppercase text-center">
                  Made in Odisha · India
                </p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
