/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { Hero } from './components/Hero';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { PropertyDetail } from './pages/PropertyDetail';
import { Buy } from './pages/Buy';
import { Sell } from './pages/Sell';
import { Invest } from './pages/Invest';
import { Team } from './pages/Team';
import { About } from './pages/About';
import { Contacts } from './pages/Contacts';
import { Mortgage } from './pages/Mortgage';
import { Valuation } from './pages/Valuation';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);

  // Scroll to top on page change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activePage, selectedPropertyId]);

  const handleNavigate = (page: string) => {
    setActivePage(page);
    setSelectedPropertyId(null);
  };

  const handlePropertyClick = (id: string) => {
    setSelectedPropertyId(id);
    setActivePage('property-detail');
  };

  const renderPage = () => {
    if (selectedPropertyId && activePage === 'property-detail') {
      return <PropertyDetail propertyId={selectedPropertyId} onBack={() => handleNavigate('properties')} />;
    }

    switch (activePage) {
      case 'home':
        return <Home onNavigate={handleNavigate} onPropertyClick={handlePropertyClick} />;
      case 'properties':
        return <Properties onPropertyClick={handlePropertyClick} />;
      case 'buy':
        return <Buy />;
      case 'sell':
        return <Sell />;
      case 'invest':
        return <Invest />;
      case 'team':
        return <Team />;
      case 'about':
        return <About />;
      case 'contacts':
        return <Contacts />;
      case 'mortgage':
        return <Mortgage />;
      case 'valuation':
        return <Valuation />;
      default:
        return <Home onNavigate={handleNavigate} onPropertyClick={handlePropertyClick} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activePage + (selectedPropertyId || '')}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activePage === 'home' && <Hero onSearch={() => handleNavigate('properties')} />}
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
