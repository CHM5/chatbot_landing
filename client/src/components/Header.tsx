/**
 * Header Component - Tech-Forward Design
 * Navigation bar with logo, menu items, and CTA button
 * Features: Glassmorphism effect, smooth transitions, responsive design
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Características", href: "#features" },
    { label: "Planes", href: "#pricing" },
    { label: "Casos de Uso", href: "#usecases" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/50">
      <div className="container flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
            <span className="text-white font-bold text-lg">AI</span>
          </div>
          <div className="hidden md:block">
            <h1 className="text-sm font-bold text-slate-900">Asistente Virtual</h1>
            <p className="text-xs text-slate-500">24/7</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <Button
            className="hidden md:inline-flex bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg px-6 transition-all duration-300 transform hover:scale-105"
            onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
          >
            Prueba Gratis
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200/50 bg-white/95 backdrop-blur-md">
          <nav className="container flex flex-col gap-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 hover:text-cyan-600 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg"
              onClick={() => {
                setIsOpen(false);
                document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Prueba Gratis
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
