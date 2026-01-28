import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import trumatic200 from "@/assets/equipment/trumatic-200.jpg";
import cncMilling from "@/assets/equipment/cnc-milling.jpg";
import plasmaCutter from "@/assets/equipment/plasma-cutter.jpg";
import redBoxes from "@/assets/products/red-boxes.jpg";
import cabinetFrame from "@/assets/products/cabinet-frame.jpg";

const services = [
  {
    title: "Гибка листового металла",
    description: "Гидравлические прессы Trumpf. Высокая точность без сварных швов.",
    path: "/services/bending",
    image: trumpfBend,
  },
  {
    title: "Раскрой листового металла",
    description: "Координатная пробивка на Trumatic 2000R. Сталь до 3мм, алюминий до 4мм.",
    path: "/services/cutting",
    image: trumatic200,
  },
  {
    title: "Токарно-фрезерные работы",
    description: "Детали любой сложности по чертежам и образцам. Единичные и серийные партии.",
    path: "/services/milling",
    image: cncMilling,
  },
  {
    title: "Газо-плазменная резка",
    description: "Плазменная резка до 50мм, газовая до 200мм. Рабочая зона 2000×6000 мм.",
    path: "/services/plasma",
    image: plasmaCutter,
  },
  {
    title: "Сварка",
    description: "Все виды сварки: ручная дуговая, полуавтоматическая, аргонная, точечная.",
    path: "/services/welding",
    image: redBoxes,
  },
  {
    title: "Порошковая покраска",
    description: "Оборудование GEMMA. Изделия длиной до 3.5 метров. Любые цвета RAL.",
    path: "/services/painting",
    image: cabinetFrame,
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-32 relative overflow-hidden bg-card/30">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                Услуги
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Полный цикл<br />
              <span className="text-muted-foreground">металлообработки</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              От раскроя листового металла до готового окрашенного изделия. 
              Работаем на немецком оборудовании Trumpf с ЧПУ.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Link
              to="/services"
              className="group inline-flex items-center gap-3 text-primary font-medium"
            >
              <span>Все услуги</span>
              <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all">
                <ArrowRight className="w-4 h-4 group-hover:text-primary-foreground transition-colors" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* Services grid - asymmetric layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
            >
              <Link
                to={service.path}
                className="block relative h-full overflow-hidden"
              >
                {/* Image */}
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-[16/10]' : 'aspect-[4/3]'}`}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  
                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
                    <h3 className={`font-bold mb-2 group-hover:text-primary transition-colors ${index === 0 ? 'text-2xl lg:text-3xl' : 'text-lg lg:text-xl'}`}>
                      {service.title}
                    </h3>
                    <p className={`text-muted-foreground mb-4 ${index === 0 ? 'text-base max-w-lg' : 'text-sm'}`}>
                      {service.description}
                    </p>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      <span>Подробнее</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Border effect on hover */}
                  <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 transition-colors" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
