import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import trumatic from "@/assets/equipment/trumatic-2000r-full.jpg";
import cncMilling from "@/assets/equipment/cnc-milling-5axis.jpg";
import ajanPlasma from "@/assets/equipment/ajan-cnc-cutting.jpg";
import perforatedBox from "@/assets/products/perforated-box.jpg";
import cabinetFrame from "@/assets/products/cabinet-frame.jpg";

const services = [
  {
    title: "Гибка листового металла",
    description: "Гидравлические прессы Trumpf TrumaBend",
    path: "/services/bending",
    image: trumpfBend,
  },
  {
    title: "Раскрой листового металла",
    description: "Координатная пробивка на Trumatic 2000R",
    path: "/services/cutting",
    image: trumatic,
  },
  {
    title: "Токарно-фрезерные работы",
    description: "5-осевая обработка деталей любой сложности",
    path: "/services/milling",
    image: cncMilling,
  },
  {
    title: "Газо-плазменная резка",
    description: "Станок Ajan CNC, рабочая зона 2000×6000 мм",
    path: "/services/plasma",
    image: ajanPlasma,
  },
  {
    title: "Сварка",
    description: "Все виды: ручная, полуавтомат, аргон, точечная",
    path: "/services/welding",
    image: perforatedBox,
  },
  {
    title: "Порошковая покраска",
    description: "Оборудование GEMMA, изделия до 3.5 м",
    path: "/services/painting",
    image: cabinetFrame,
  },
];

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
            <motion.article
              key={service.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="group block bg-card border border-border rounded-lg overflow-hidden hover:border-primary/50 transition-colors"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <span>Подробнее</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
