/**
 * Features Section - Tech-Forward Design
 * Displays key features with icons and descriptions
 * Features: Glassmorphism cards, hover effects, grid layout
 */

import { Clock, MessageSquare, Calendar, TrendingUp, Zap, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Atencion 24/7",
    description: "Tu chatbot responde consultas a cualquier hora, incluso mientras duermes.",
  },
  {
    icon: MessageSquare,
    title: "Respuestas Automaticas",
    description: "Preguntas frecuentes resueltas al instante sin intervención humana.",
  },
  {
    icon: Calendar,
    title: "Gestion de Citas",
    description: "Agenda y confirma citas directamente en WhatsApp de forma automatica.",
  },
  {
    icon: TrendingUp,
    title: "Mas Ventas",
    description: "Convierte consultas en clientes con respuestas rapidas y profesionales.",
  },
  {
    icon: Zap,
    title: "Integracion Facil",
    description: "Conecta en minutos. No requiere conocimientos tecnicos complicados.",
  },
  {
    icon: Shield,
    title: "Seguro y Confiable",
    description: "Tus datos estan protegidos con encriptacion de nivel empresarial.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Caracteristicas Potentes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Todo lo que necesitas para automatizar tu atencion al cliente y hacer crecer tu negocio.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Glassmorphism Background on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Hover Border Animation */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
