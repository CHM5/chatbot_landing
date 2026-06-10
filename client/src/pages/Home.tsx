/**
 * Home Page - Asistente Virtual 24/7 Landing Page
 * Tech-Forward Design with modern UI components
 */

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
