import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Regular imports (reverted lazy loading for performance/routing fixes)
import Home from './pages/Home';
import About from './pages/About';
import Careers from './pages/Careers';
import Articles from './pages/Articles';
import DepartmentDetail from './pages/DepartmentDetail';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';

import PageTransition from './components/PageTransition';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white selection:bg-[#4e77fc] selection:text-white">
        <ScrollToTop />
        <Navbar />
        <main>
          <PageTransition>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/department/:id" element={<DepartmentDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
            </Routes>
          </PageTransition>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
