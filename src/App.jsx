import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

const App = () => {
  const appStyles = {
    minHeight: '100vh',
    width: '100%',
    position: 'relative',
    overflowX: 'hidden',
    backgroundColor: '#f4eff4',
    color: '#000000'
  };

  return (
    <Router>
      <div style={appStyles}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/approach" element={<Approach />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/projects/:slug" element={<ProjectPost />} />
        </Routes>
        <NewFooter />
      </div>
    </Router>
  );
};

export default App;