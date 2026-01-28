import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import trumatic from "@/assets/equipment/trumatic-2000r-full.jpg";
import cncMilling from "@/assets/equipment/cnc-milling-5axis.jpg";
import ajanPlasma from "@/assets/equipment/ajan-cnc-cutting.jpg";
import perforatedBox from "@/assets/products/perforated-box.jpg";
import cabinetFrame from "@/assets/products/cabinet-frame.jpg";

const services = [
  {
    title: "Гибка листового металла",
    description: "Гидравлические прессы Trumpf TrumaBend для точной гибки листового металла толщиной до 6 мм",
    path: "/services/bending",
    image: trumpfBend,
  },
  {
    title: "Раскрой листового металла",
    description: "Координатная пробивка на Trumatic 2000R — высокоточная обработка стали и алюминия",
    path: "/services/cutting",
    image: trumatic,
  },
  {
    title: "Токарно-фрезерные работы",
    description: "5-осевая обработка деталей любой сложности на современных станках с ЧПУ",
    path: "/services/milling",
    image: cncMilling,
  },
  {
    title: "Газо-плазменная резка",
    description: "Станок Ajan CNC с рабочей зоной 2000×6000 мм, резка металла толщиной до 50 мм",
    path: "/services/plasma",
    image: ajanPlasma,
  },
  {
    title: "Сварка",
    description: "Все виды сварки: ручная дуговая, полуавтоматическая, аргонодуговая, точечная контактная",
    path: "/services/welding",
    image: perforatedBox,
  },
  {
    title: "Порошковая покраска",
    description: "Оборудование GEMMA для покраски изделий длиной до 3.5 метров в любой цвет RAL",
    path: "/services/painting",
    image: cabinetFrame,
  },
];

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link
        to={service.path}
        className="group block relative aspect-[4/3] rounded-lg overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <motion.div
          className="absolute inset-0"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient Overlay */}
        <motion.div
          className="absolute inset-0"
          animate={{ 
            background: isHovered 
              ? "linear-gradient(to top, hsl(24 100% 50% / 0.9) 0%, hsl(24 100% 50% / 0.3) 40%, transparent 100%)"
              : "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)"
          }}
          transition={{ duration: 0.4 }}
        />

        {/* Content Container */}
        <div className="absolute inset-0 p-6 flex flex-col justify-end">
          {/* Title - always visible */}
          <motion.h3
            className="text-xl font-bold text-white mb-2"
            animate={{ y: isHovered ? 0 : 0 }}
          >
            {service.title}
          </motion.h3>

          {/* Description - appears on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.p
                initial={{ opacity: 0, y: 10, height: 0 }}
                animate={{ opacity: 1, y: 0, height: "auto" }}
                exit={{ opacity: 0, y: 10, height: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-sm text-white/80 mb-4 leading-relaxed"
              >
                {service.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Button - appears on hover */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
                className="flex items-center gap-3"
              >
                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm">
                  <ArrowRight className="w-5 h-5 text-white" />
                </span>
                <span className="text-sm font-medium text-white uppercase tracking-wider">
                  Подробнее
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </Link>
    </motion.article>
  );
}

export default function ServicesPreview() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                Наши услуги
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Полный цикл производства
            </h2>
          </div>
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 text-primary font-medium shrink-0"
          >
            <span>Все услуги</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.path} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
