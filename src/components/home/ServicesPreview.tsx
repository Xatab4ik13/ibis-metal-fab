import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Scissors, Settings2, Flame, Paintbrush } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Гибка листового металла",
    description: "Гидравлические прессы Trumpf. Высокая точность без сварных швов.",
    path: "/services/bending",
  },
  {
    icon: Scissors,
    title: "Раскрой листового металла",
    description: "Координатная пробивка на Trumatic 2000R. Сталь до 3мм, алюминий до 4мм.",
    path: "/services/cutting",
  },
  {
    icon: Settings2,
    title: "Токарно-фрезерные работы",
    description: "Детали любой сложности по чертежам и образцам. Единичные и серийные партии.",
    path: "/services/milling",
  },
  {
    icon: Flame,
    title: "Сварка",
    description: "Все виды сварки: ручная дуговая, полуавтоматическая, аргонная, точечная.",
    path: "/services/welding",
  },
  {
    icon: Paintbrush,
    title: "Порошковая покраска",
    description: "Оборудование GEMMA. Изделия длиной до 3.5 метров. Любые цвета RAL.",
    path: "/services/painting",
  },
];

export default function ServicesPreview() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Что мы делаем
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Полный цикл металлообработки
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            От раскроя листового металла до готового окрашенного изделия. 
            Работаем на немецком оборудовании Trumpf с ЧПУ.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={service.path}
                className="group block h-full p-6 rounded-2xl bg-card industrial-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <span className="inline-flex items-center text-sm text-primary font-medium">
                  Подробнее
                  <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border hover:border-primary/50 text-foreground hover:text-primary transition-all duration-300"
          >
            Все услуги
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
