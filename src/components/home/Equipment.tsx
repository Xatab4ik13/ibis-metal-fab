import { motion } from "framer-motion";
import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import trumatic2000 from "@/assets/equipment/trumatic-2000r-full.jpg";
import cncPlasma from "@/assets/equipment/ajan-cnc-cutting.jpg";
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
  return (
    <section className="py-24 md:py-32 bg-card/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mb-16"
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

        {/* Equipment grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Decorative corner */}
                <div className="absolute bottom-3 right-3 w-8 h-8">
                  <div className="absolute bottom-0 right-0 w-full h-0.5 bg-primary" />
                  <div className="absolute bottom-0 right-0 h-full w-0.5 bg-primary" />
                </div>
              </div>
              
              <div>
                <span className="text-xs text-primary font-medium tracking-wider uppercase">
                  {item.type}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-1">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.specs}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
