import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Policy from './pages/Policy';
import Approach from './pages/Approach';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Cookies from './pages/Cookies';
import BlogPost from './pages/BlogPost';
import ProjectPost from './pages/ProjectPost';
import NewFooter from './components/sections/NewFooter';
import ModernFooter from './components/sections/ModernFooter';
import ServiceDetail from './pages/ServiceDetail';
const App = () => {
  const appStyles = {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflowX: 'hidden',
    backgroundColor: '#f4eff4',
    color: '#000000',
  };

  return (
    <Router>
      <AppContent appStyles={appStyles} />
    </Router>
  );
};

const AppContent = ({ appStyles }) => {
  const location = useLocation();
  const hideFooter = location.pathname === '/contact' || 
                    location.pathname.startsWith('/blog') || 
                    location.pathname.startsWith('/insights') ||
                    location.pathname === '/privacy' ||
                    location.pathname === '/terms' ||
                    location.pathname === '/cookies' ||
                    location.pathname.startsWith('/projects') ||
                    location.pathname.startsWith('/services/');

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <div style={appStyles}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:serviceId" element={<ServiceDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects/:slug" element={<ProjectPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
        </Routes>
        {!hideFooter && <NewFooter />}
      </div>
    </div>
  );
};

export default App;