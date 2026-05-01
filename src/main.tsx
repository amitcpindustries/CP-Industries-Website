import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

// Global styles (Tailwind + custom utilities)
import './globals.css'

// Bootstrap CSS (grid + layout helpers)
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
