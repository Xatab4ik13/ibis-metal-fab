import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-sparks.jpg";

const quickServices = [
  { label: "Гибка металла", path: "/services/bending" },
  { label: "Раскрой металла", path: "/services/cutting" },
  { label: "Токарные работы", path: "/services/milling" },
  { label: "Плазменная резка", path: "/services/plasma" },
  { label: "Сварка", path: "/services/welding" },
  { label: "Покраска", path: "/services/painting" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Full-screen background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Металлообработка с искрами"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Main content - centered vertically */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-32 md:pt-36">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            {/* Company name highlight */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-2 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full text-primary text-sm font-medium tracking-wide">
                Производственное предприятие
              </span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
            >
              Металлообработка<br />
              <span className="text-primary">любой сложности</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed"
            >
              Полный цикл производства: от раскроя листового металла до готового 
              окрашенного изделия. Немецкое оборудование Trumpf с ЧПУ.
            </motion.p>

            {/* Stats row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-8 md:gap-12"
            >
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">18+</div>
                <div className="text-sm text-white/60">лет на рынке</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                <div className="text-sm text-white/60">проектов в год</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary">Trumpf</div>
                <div className="text-sm text-white/60">оборудование</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Quick services bar at bottom */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 mt-auto"
      >
        <div className="bg-black/40 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
              {quickServices.map((service, index) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="group flex items-center justify-center gap-3 py-5 md:py-6 px-4 border-r border-white/10 last:border-r-0 hover:bg-white/5 transition-colors"
                >
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="text-xs md:text-sm text-white/80 group-hover:text-primary transition-colors text-center font-medium"
                  >
                    {service.label}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
