
import './App.css'

import Footer from './component/footer/Footer';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HeaderMenu from './component/header-menu/HeaderMenu';
import ScrollToTop from './component/scrool-to-top/ScrollToTop';
import ContactPage from './pages/ContactPage';
import ScrollProgressBar from './component/scroll-progress-bar/ScrollProgressBar';

function App() {

  return (
    <>
      <Router>
         <ScrollProgressBar />
        <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <div className='px-6 py-7 relative bg-black rounded-b-[32px] z-10'>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        <div className=' sticky w-fit left-[100%] bottom-9 mb-3' id="headerMenuSticky">
        <HeaderMenu />
        </div>
        </div>
        <Footer />
      </div>
    </Router>
    </>
  )
}

export default App
