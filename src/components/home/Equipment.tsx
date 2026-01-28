import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import trumatic2000 from "@/assets/equipment/trumatic-2000.jpg";
import cncPlasma from "@/assets/equipment/cnc-plasma.jpg";
import bodorLaser from "@/assets/equipment/bodor-laser.jpg";

const equipment = [
  {
    image: trumpfBend,
    name: "TrumaBend C110",
    type: "Листогибочный пресс",
    specs: "Усилие 110 тонн, длина гиба до 3 м",
  },
  {
    image: trumatic2000,
    name: "Trumatic 2000R",
    type: "Координатно-пробивной станок",
    specs: "Сталь 0.5-3мм, алюминий до 4мм",
  },
  {
    image: cncPlasma,
    name: "Ajan CNC",
    type: "Плазменная резка",
    specs: "Рабочая поверхность 2000×6000 мм",
  },
  {
    image: bodorLaser,
    name: "Bodor Laser",
    type: "Лазерная резка",
    specs: "Высокоточная резка металла",
  },
];

export default function Equipment() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section ref={containerRef} className="py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
      
      <div className="container mx-auto px-4 relative z-10 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-primary" />
            <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
              Оборудование
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Немецкое качество<br />
            <span className="text-muted-foreground">Trumpf</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Наш станочный парк оснащён современным высокоточным оборудованием с ЧПУ, 
            что гарантирует высокое качество изделий.
          </p>
        </motion.div>
      </div>

      {/* Horizontal scroll gallery */}
      <motion.div 
        style={{ x }}
        className="flex gap-6 pl-4 md:pl-[calc((100vw-1280px)/2+1rem)]"
      >
        {equipment.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group flex-shrink-0 w-[350px] md:w-[450px]"
          >
            <div className="relative aspect-[4/3] overflow-hidden mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Decorative corner */}
              <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
            </div>
            
            <div>
              <span className="text-xs text-primary font-medium tracking-wider uppercase">
                {item.type}
              </span>
              <h3 className="text-xl font-semibold mt-2 mb-1">{item.name}</h3>
              <p className="text-sm text-muted-foreground">{item.specs}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
