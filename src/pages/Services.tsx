import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/layout/Layout";

import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import trumatic from "@/assets/equipment/trumatic-2000r-full.jpg";
import cncMilling from "@/assets/equipment/cnc-milling-5axis.jpg";
import ajanPlasma from "@/assets/equipment/ajan-cnc-cutting.jpg";
import perforatedBox from "@/assets/products/perforated-box.jpg";
import cabinetFrame from "@/assets/products/cabinet-frame.jpg";

const services = [
  {
    id: "bending",
    title: "Гибка листового металла",
    shortDesc: "Гидравлические прессы Trumpf",
    description: "Гибка металла – это технологическая операция, при которой из заготовки плоской формы получают объемное изделие без сварных и иных швов и соединений. Такой вид обработки позволяет получать прочные и надежные детали, отличающиеся не только высокой точностью, но и достойным внешним видом.",
    image: trumpfBend,
    features: ["Прессы Trumpf TrumaBend", "Без сварных швов", "Высокая точность"],
  },
  {
    id: "cutting",
    title: "Раскрой листового металла",
    shortDesc: "Координатная пробивка Trumatic 2000R",
    description: "Наше производство оснащено современными высокоточными станками с ЧПУ. Предлагаем услуги по координатной пробивке металла различной степени сложности на высокотехнологичном станке Trumatic 2000R немецкой компании Trumpf.",
    image: trumatic,
    features: ["Сталь 0.5-3.0 мм", "Алюминий до 4.0 мм", "ЧПУ управление"],
  },
  {
    id: "milling",
    title: "Токарно-фрезерные работы",
    shortDesc: "Детали любой сложности",
    description: "Предприятие производит токарные и фрезерные работы как по чертежам, так и по образцам требуемой продукции. Мощный станочный парк и высококвалифицированные специалисты позволяют производить детали любой сложности от единичных до серийных партий.",
    image: cncMilling,
    features: ["По чертежам и образцам", "Любая сложность", "Единичные и серийные партии"],
  },
  {
    id: "plasma",
    title: "Газо-плазменная резка",
    shortDesc: "Рабочая поверхность 2000×6000 мм",
    description: "Станок плазменной и газокислородной резки. Оборудование предназначено для резки плазменной дугой различных металлов толщиной от 1 до 50 мм, газом до 200мм. Высокоточное ЧПУ позволяет изготавливать детали любой конфигурации.",
    image: ajanPlasma,
    features: ["Плазма: 1-50 мм", "Газ: до 200 мм", "Любая конфигурация"],
  },
  {
    id: "welding",
    title: "Сварка",
    shortDesc: "Все виды сварочных работ",
    description: "Сварка — технологический процесс получения неразъёмного соединения. На нашем производстве имеется несколько видов сварки: ручная дуговая, полуавтоматическая проволокой, точечная контактная и сварка аргоном для нержавеющей стали, алюминия и титана.",
    image: perforatedBox,
    features: ["Ручная дуговая", "Полуавтоматическая", "Аргонодуговая TIG"],
  },
  {
    id: "painting",
    title: "Порошковая покраска",
    shortDesc: "Оборудование GEMMA",
    description: "Порошковая покраска изделий длиной до 3.5 метров на оборудовании фирмы GEMMA. Широкая палитра цветов RAL, равномерное покрытие, высокая стойкость к механическим повреждениям и коррозии.",
    image: cabinetFrame,
    features: ["Изделия до 3.5 м", "Любые цвета RAL", "Оборудование GEMMA"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                Наши услуги
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Полный цикл<br />
              <span className="text-muted-foreground">металлообработки</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              От раскроя листового металла до готового окрашенного изделия. 
              Современное немецкое оборудование Trumpf с ЧПУ гарантирует высочайшее качество.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-1">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/services/${service.id}`}
                  className="group block"
                >
                  <div className="grid lg:grid-cols-12 gap-6 py-8 border-b border-border hover:border-primary/30 transition-colors">
                    {/* Number */}
                    <div className="lg:col-span-1">
                      <span className="text-5xl font-bold text-muted-foreground/30 group-hover:text-primary/50 transition-colors">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Image */}
                    <div className="lg:col-span-3">
                      <div className="aspect-[4/3] overflow-hidden rounded-lg">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="lg:col-span-6 flex flex-col justify-center">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Arrow */}
                    <div className="lg:col-span-2 flex items-center justify-end">
                      <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all">
                        <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Нужен расчёт стоимости?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Отправьте чертежи или техническое задание — рассчитаем стоимость в течение рабочего дня.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
          >
            Заказать расчёт
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
