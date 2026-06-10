/**
 * Pricing Section - Tech-Forward Design
 * Displays pricing plans with features and CTA
 * Features: Highlighted plan, feature comparison, gradient accents
 */

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Plan Basico",
    price: "$30.000",
    period: "por mes",
    description: "Perfecto para comenzar",
    highlighted: false,
    features: [
      "Chatbot personalizado",
      "Responde preguntas frecuentes",
      "Informacion de servicios y precios",
      "Atencion 24/7",
      "Configuracion inicial",
      "Soporte tecnico",
      "7 dias de prueba gratis",
    ],
    cta: "Comenzar Ahora",
  },
  {
    name: "Plan Premium",
    price: "Consultar",
    period: "funciones avanzadas",
    description: "Para negocios en crecimiento",
    highlighted: true,
    features: [
      "Todo del Plan Basico",
      "Envio de emails automaticos",
      "Generacion de turnos en tiempo real",
      "Verificacion de reservas",
      "Integracion con Google Calendar",
      "Integracion con Gmail",
      "Recordatorios automaticos",
      "Soporte prioritario",
    ],
    cta: "Contactar Ventas",
  },
];

const idealFor = [
  "Consultorios medicos y odontologicos",
  "Peluquerias y barberias",
  "Centros de estetica y nail art",
  "Psicologos y kinesiologos",
  "Veterinarias y gimnasios",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Planes Simples y Transparentes
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tu negocio. Sin contratos a largo plazo.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 md:mb-20">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 md:p-10 transition-all duration-300 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white border-2 border-cyan-500 shadow-2xl transform md:scale-105"
                  : "bg-white border-2 border-slate-200 hover:border-cyan-300"
              }`}
            >
              {/* Highlighted Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MAS POPULAR
                </div>
              )}

              {/* Plan Name */}
              <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-6 ${plan.highlighted ? "text-cyan-300" : "text-slate-600"}`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl font-bold ${plan.highlighted ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ml-2 ${plan.highlighted ? "text-slate-300" : "text-slate-600"}`}>
                  {plan.period}
                </span>
              </div>

              {/* CTA Button */}
              <Button
                className={`w-full mb-8 font-semibold rounded-lg h-12 transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                    : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white"
                }`}
              >
                {plan.cta}
              </Button>

              {/* Features List */}
              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-cyan-400" : "text-cyan-600"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-slate-200" : "text-slate-700"}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Ideal For Section */}
        <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-cyan-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">Ideal para:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {idealFor.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-cyan-600 rounded-full flex-shrink-0" />
                <span className="text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
