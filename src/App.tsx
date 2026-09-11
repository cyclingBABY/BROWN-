/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesGrid } from './components/ServicesGrid';
import { PortfolioGallery } from './components/PortfolioGallery';
import { ProductionShowcase } from './components/ProductionShowcase';
import { InteractiveQuoteCalculator } from './components/InteractiveQuoteCalculator';
import { AboutUs } from './components/AboutUs';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AIBookingAssistant } from './components/AIBookingAssistant';
import { ServiceId } from './types';

export default function App() {
  const [selectedServicesForForm, setSelectedServicesForForm] = useState<ServiceId[]>([
    'sound-systems',
    'stage-lighting',
  ]);
  const [selectedEventTypeForForm, setSelectedEventTypeForForm] = useState<string>(
    'Concert / Music Festival'
  );
  const [aiPrefilledMessage, setAiPrefilledMessage] = useState<string>('');
  const [isAIAssistantOpen, setIsAIAssistantOpen] = useState<boolean>(false);

  const handleSelectServiceFromGrid = (serviceId: string) => {
    setSelectedServicesForForm([serviceId as ServiceId]);
  };

  const handlePreloadFromCalculator = (services: ServiceId[], eventType: string) => {
    setSelectedServicesForForm(services);
    setSelectedEventTypeForForm(eventType);
  };

  const handleApplyAIDossier = (services: ServiceId[], eventType: string, dossierText: string) => {
    if (services && services.length > 0) {
      setSelectedServicesForForm(services);
    }
    if (eventType) {
      setSelectedEventTypeForForm(eventType);
    }
    if (dossierText) {
      setAiPrefilledMessage(dossierText);
    }
    setIsAIAssistantOpen(false);

    // Smooth scroll down to contact section
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-slate-100 flex flex-col selection:bg-[#D4AF37] selection:text-black">
      {/* Navigation */}
      <Navbar onOpenAIAssistant={() => setIsAIAssistantOpen(true)} />

      {/* Main Sections */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <Hero onOpenAIAssistant={() => setIsAIAssistantOpen(true)} />

        {/* 2. Services Grid */}
        <ServicesGrid onSelectServiceForQuote={handleSelectServiceFromGrid} />

        {/* 3. Portfolio Gallery */}
        <PortfolioGallery />

        {/* 4. Real Production Imagery Showcase */}
        <ProductionShowcase />

        {/* 5. Interactive Quote Estimator */}
        <InteractiveQuoteCalculator onPreloadContactForm={handlePreloadFromCalculator} />

        {/* 6. About Us & Execution Reliability */}
        <AboutUs />

        {/* 7. Contact & Booking Form */}
        <ContactSection
          initialServices={selectedServicesForForm}
          initialEventType={selectedEventTypeForForm}
          initialMessage={aiPrefilledMessage}
          onOpenAIAssistant={() => setIsAIAssistantOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating WhatsApp Quick Action & AI Trigger */}
      <FloatingWhatsApp onOpenAIAssistant={() => setIsAIAssistantOpen(true)} />

      {/* AI Booking Assistant Modal Dialog */}
      <AIBookingAssistant
        isOpen={isAIAssistantOpen}
        onClose={() => setIsAIAssistantOpen(false)}
        onApplyToBookingForm={handleApplyAIDossier}
      />
    </div>
  );
}
