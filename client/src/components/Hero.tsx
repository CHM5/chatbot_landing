/**
 * Hero Section - Tech-Forward Design
 * Main landing section with headline, subheadline, and CTA
 * Features: Parallax background, gradient overlay, animated elements
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663716833795/7yGzCos4MdK7iYsri93vNZ/hero_bg-B8RCLHiUkQdq7XCBbhBpG5.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('${HERO_BG}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-1 bg-gradient-to-r from-white/95 via-white/90 to-transparent" />

      {/* Content */}
      <div className="container relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-50 rounded-full border border-cyan-200">
            <Zap className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-semibold text-cyan-700">Tecnología IA Avanzada</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Tu Asistente Virtual
            <span className="block bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              24/7
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            Automatiza la atención al cliente en WhatsApp. Responde preguntas, gestiona citas y aumenta ventas mientras duermes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg px-8 h-14 text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Comienza Gratis
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-cyan-600 font-semibold rounded-lg px-8 h-14 text-lg transition-all duration-300"
            >
              Ver Demo
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row gap-6 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span>7 dias de prueba gratis</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span>Sin tarjeta de credito</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span>Configuracion en 48hs</span>
            </div>
          </div>
        </div>

        {/* Right Visual - Floating Card */}
        <div className="flex-1 hidden lg:flex justify-center items-center">
          <div className="relative w-full max-w-md h-96">
            {/* Glassmorphism Card */}
            <div className="absolute inset-0 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-6 animate-pulse">
                <span className="text-4xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Responde 24/7</h3>
              <p className="text-slate-600 mb-6">Tu chatbot IA maneja todas las conversaciones automaticamente</p>
              <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
