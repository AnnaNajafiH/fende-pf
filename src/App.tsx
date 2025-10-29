import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../src/i18n';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Certificates from './pages/Certificates';
import ChampionsPage from './pages/ChampionsPage';

const App: React.FC = () => {
  const { i18n } = useTranslation();   //This gets the i18n instance, which knows the current language.

  // Update HTML lang attribute when language changes
  React.useEffect(() => {
    document.documentElement.lang = i18n.language;  
  }, [i18n.language]);

  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/champions" element={<ChampionsPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
