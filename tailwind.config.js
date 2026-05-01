/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Brand Palette ──────────────────────────────
        gold: {
          DEFAULT: '#D4AF37',  // Metallic Gold – primary
          light:   '#E8C95A',
          dark:    '#A88920',
          muted:   'rgba(212,175,55,0.15)',
        },
        jet: {
          DEFAULT: '#1A1A1A',  // Rich Black – secondary
          soft:    '#242424',
          mid:     '#2E2E2E',
          light:   '#3A3A3A',
        },
        offwhite: {
          DEFAULT: '#F5F5F5',  // Off-White – accent
          warm:    '#FAF8F2',
        },
        // Semantic aliases
        primary:   '#D4AF37',
        secondary: '#1A1A1A',
        accent:    '#F5F5F5',
      },

      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
        mono:    ['JetBrains Mono', 'monospace'],
        roboto:  ['Roboto', 'sans-serif'],
      },

      fontSize: {
        'display-xl': ['5rem',   { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '800' }],
        'display-lg': ['3.75rem',{ lineHeight: '1.1',  letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-md': ['3rem',   { lineHeight: '1.15', letterSpacing: '-0.015em',fontWeight: '700' }],
        'display-sm': ['2.25rem',{ lineHeight: '1.2',  letterSpacing: '-0.01em', fontWeight: '600' }],
      },

      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '34': '8.5rem',
        '128': '32rem',
      },

      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },

      boxShadow: {
        'gold-sm':  '0 2px 8px rgba(212,175,55,0.25)',
        'gold-md':  '0 4px 20px rgba(212,175,55,0.35)',
        'gold-lg':  '0 8px 40px rgba(212,175,55,0.40)',
        'jet-card': '0 20px 60px rgba(0,0,0,0.6)',
        'inner-glow': 'inset 0 1px 0 rgba(212,175,55,0.2)',
      },

      backgroundImage: {
        // Wire mesh SVG pattern used across sections
        'wire-mesh': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 0 L60 60 M60 0 L0 60' stroke='%23D4AF37' stroke-width='0.4' opacity='0.12'/%3E%3Crect x='0' y='0' width='60' height='60' fill='none' stroke='%23D4AF37' stroke-width='0.3' opacity='0.08'/%3E%3C/svg%3E\")",
        'diagonal-lines': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40'%3E%3Cpath d='M0 40 L40 0' stroke='%23D4AF37' stroke-width='0.5' opacity='0.1'/%3E%3C/svg%3E\")",
        // Gold gradient utilities
        'gold-gradient': 'linear-gradient(135deg, #D4AF37 0%, #E8C95A 50%, #A88920 100%)',
        'gold-shimmer':  'linear-gradient(90deg, #A88920 0%, #D4AF37 40%, #E8C95A 60%, #A88920 100%)',
        'dark-radial':   'radial-gradient(ellipse at 50% 0%, #2E2E2E 0%, #1A1A1A 70%)',
      },

      animation: {
        'shimmer':      'shimmer 2.5s linear infinite',
        'float':        'float 6s ease-in-out infinite',
        'pulse-gold':   'pulseGold 2s ease-in-out infinite',
        'slide-in-up':  'slideInUp 0.6s ease-out',
        'fade-in':      'fadeIn 0.5s ease-out',
        'wire-scroll':  'wireScroll 20s linear infinite',
      },

      keyframes: {
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(212,175,55,0.4)' },
          '50%':      { boxShadow: '0 0 0 12px rgba(212,175,55,0)' },
        },
        slideInUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        wireScroll: {
          '0%':   { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '60px 60px' },
        },
      },

      transitionTimingFunction: {
        'premium': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'bounce-sm': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },

      backdropBlur: {
        'xs': '2px',
      },

      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [],
}
