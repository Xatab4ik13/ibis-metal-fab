import { motion } from "framer-motion";
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
  return (
    <section className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
            Оборудование
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Немецкое качество Trumpf
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Наш станочный парк оснащён современным высокоточным оборудованием с ЧПУ, 
            что гарантирует высокое качество изделий.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {equipment.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden industrial-border bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5">
                <span className="text-xs text-primary font-medium uppercase tracking-wider">
                  {item.type}
                </span>
                <h3 className="text-lg font-semibold mt-1 mb-2">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.specs}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
