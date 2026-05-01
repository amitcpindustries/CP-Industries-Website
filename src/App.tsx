import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage    from './pages/HomePage'
import AboutPage   from './pages/AboutPage'
import ProductsPage from './pages/ProductsPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* All pages share the Layout (Navbar + Footer + page transitions) */}
        <Route element={<Layout />}>
          <Route index       element={<HomePage />} />
          <Route path="about"    element={<AboutPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="contact"  element={<ContactPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
