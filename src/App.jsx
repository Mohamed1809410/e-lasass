import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LangProvider } from './hooks/useLang';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import EquipmentPage from './pages/EquipmentPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = window.location;
  return null;
}

export default function App() {
  return (
    <LangProvider>
      <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/equipment" element={<EquipmentPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFloat />
      </BrowserRouter>
    </LangProvider>
  );
}
