/**
 * CTA Section - Tech-Forward Design
 * Main call-to-action section with form and benefits
 * Features: Gradient background, animated elements, form integration
 */

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  const benefits = [
    "Configuracion en 48-72 horas",
    "Soporte tecnico incluido",
    "Garantia de 30 dias",
  ];

  return (
    <section id="cta" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Comienza tu Prueba Gratuita Hoy
            </h2>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              7 dias completamente gratis. Sin tarjeta de credito. Configura tu chatbot en menos de 48 horas y comienza a automatizar tu atencion al cliente.
            </p>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-2">Comienza Ahora</h3>
            <p className="text-slate-300 mb-6">Recibe acceso instantaneo a tu prueba gratis</p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Tu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="bg-white/20 border-white/30 text-white placeholder:text-slate-400 rounded-lg h-12 focus:bg-white/30 transition-colors"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg h-12 transition-all duration-300 transform hover:scale-105"
              >
                {submitted ? "Enviado!" : "Recibir Acceso Gratis"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </form>

            {submitted && (
              <div className="mt-4 p-4 bg-cyan-500/20 border border-cyan-500/50 rounded-lg text-cyan-200 text-sm">
                Revisa tu email para comenzar tu prueba gratuita.
              </div>
            )}

            <p className="text-xs text-slate-400 mt-6 text-center">
              Protegemos tu privacidad. Nunca compartimos tus datos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
