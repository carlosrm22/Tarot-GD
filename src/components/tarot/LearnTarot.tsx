/**
 * @fileoverview Componente para la sección de aprendizaje de Tarot.
 */

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaBook,
  FaGraduationCap,
  FaQuestionCircle,
  FaChevronRight,
  FaLightbulb,
  FaRegCompass,
} from "react-icons/fa";

const lessons = [
  {
    id: "fundamentos",
    title: "Fundamentos del Tarot",
    description: "Introducción a la historia y estructura del Tarot.",
    icon: <FaBook />,
    modules: [
      "Historia del Tarot",
      "Estructura del Mazo",
      "Arcanos Mayores y Menores",
      "Elementos y Símbolos",
    ],
  },
  {
    id: "interpretacion",
    title: "Arte de la Interpretación",
    description: "Aprende a leer e interpretar las cartas.",
    icon: <FaLightbulb />,
    modules: [
      "Significados Básicos",
      "Cartas Invertidas",
      "Combinaciones",
      "Intuición y Lectura",
    ],
  },
  {
    id: "tiradas",
    title: "Tipos de Tiradas",
    description: "Diferentes métodos de lectura y sus usos.",
    icon: <FaRegCompass />,
    modules: [
      "Tirada Simple",
      "Cruz Celta",
      "Herradura",
      "Tiradas Especiales",
    ],
  },
  {
    id: "practica",
    title: "Práctica y Ejercicios",
    description: "Ejercicios prácticos y casos de estudio.",
    icon: <FaGraduationCap />,
    modules: [
      "Ejercicios Diarios",
      "Casos de Estudio",
      "Meditaciones",
      "Diario de Tarot",
    ],
  },
];

const faqs = [
  {
    question: "¿Por dónde debo empezar?",
    answer:
      "Recomendamos comenzar con los Fundamentos del Tarot para construir una base sólida antes de avanzar a las interpretaciones más complejas.",
  },
  {
    question: "¿Cuánto tiempo lleva aprender Tarot?",
    answer:
      "El aprendizaje es un proceso continuo, pero con dedicación, puedes comenzar a hacer lecturas básicas en 2-3 meses.",
  },
  {
    question: "¿Necesito memorizar todos los significados?",
    answer:
      "No es necesario memorizar todo. Es más importante desarrollar tu intuición y comprensión de los símbolos y arquetipos.",
  },
];

const LearnTarot: React.FC = () => {
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-twilight-background p-4 md:p-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-twilight-text mb-4">
          Aprende Tarot
        </h1>
        <p className="text-twilight-text/80 max-w-2xl mx-auto">
          Explora nuestros recursos de aprendizaje y comienza tu viaje en el arte
          del Tarot.
        </p>
      </div>

      {/* Grid de lecciones */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {lessons.map((lesson) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              className="bg-twilight-background/50 border border-twilight-secondary/10 rounded-xl p-6 hover:border-twilight-accent/20 transition-all cursor-pointer">
              <div className="flex items-start gap-4">
                <div className="text-twilight-accent p-3 bg-twilight-accent/10 rounded-lg">
                  {lesson.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-twilight-text mb-2">
                    {lesson.title}
                  </h3>
                  <p className="text-twilight-text/70 mb-4">
                    {lesson.description}
                  </p>
                  <div className="space-y-2">
                    {lesson.modules.map((module, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-sm text-twilight-text/60">
                        <FaChevronRight className="w-3 h-3 text-twilight-accent/60" />
                        <span>{module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQs */}
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold text-twilight-text mb-6 text-center">
          Preguntas Frecuentes
        </h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="border border-twilight-secondary/10 rounded-lg overflow-hidden">
              <button
                onClick={() =>
                  setExpandedFaq(
                    expandedFaq === faq.question ? null : faq.question
                  )
                }
                className="w-full p-4 flex items-center justify-between text-left hover:bg-twilight-accent/5 transition-colors">
                <div className="flex items-center gap-3">
                  <FaQuestionCircle className="text-twilight-accent" />
                  <span className="font-medium text-twilight-text">
                    {faq.question}
                  </span>
                </div>
                <FaChevronRight
                  className={`transition-transform duration-200 ${
                    expandedFaq === faq.question ? "rotate-90" : ""
                  }`}
                />
              </button>
              {expandedFaq === faq.question && (
                <div className="p-4 pt-0">
                  <p className="text-twilight-text/80">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <button className="px-8 py-3 bg-twilight-accent text-white rounded-lg hover:shadow-lg transition-shadow">
          Comenzar Aprendizaje
        </button>
      </div>
    </div>
  );
};

export default LearnTarot;