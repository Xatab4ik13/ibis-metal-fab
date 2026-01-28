import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Layers, Scissors, Settings2, Flame, Paintbrush, Zap } from "lucide-react";
import Layout from "@/components/layout/Layout";
import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import trumatic200 from "@/assets/equipment/trumatic-200.jpg";
import cncMilling from "@/assets/equipment/cnc-milling.jpg";
import plasmaCutter from "@/assets/equipment/plasma-cutter.jpg";
import redBoxes from "@/assets/products/red-boxes.jpg";

const services = [
  {
    id: "bending",
    icon: Layers,
    title: "Гибка листового металла",
    shortDesc: "Гидравлические прессы Trumpf",
    description: "Гибка металла – это технологическая операция, при которой из заготовки плоской формы получают объемное изделие без сварных и иных швов и соединений. Такой вид обработки позволяет получать прочные и надежные детали, отличающиеся не только высокой точностью, но и достойным внешним видом.",
    image: trumpfBend,
    features: ["Прессы Trumpf TrumaBend", "Без сварных швов", "Высокая точность"],
  },
  {
    id: "cutting",
    icon: Scissors,
    title: "Раскрой листового металла",
    shortDesc: "Координатная пробивка Trumatic 2000R",
    description: "Наше производство оснащено современными высокоточными станками с ЧПУ. Предлагаем услуги по координатной пробивке металла различной степени сложности на высокотехнологичном станке Trumatic 2000R немецкой компании Trumpf.",
    image: trumatic200,
    features: ["Сталь 0.5-3.0 мм", "Алюминий до 4.0 мм", "ЧПУ управление"],
  },
  {
    id: "milling",
    icon: Settings2,
    title: "Токарно-фрезерные работы",
    shortDesc: "Детали любой сложности",
    description: "Предприятие производит токарные и фрезерные работы как по чертежам, так и по образцам требуемой продукции. Мощный станочный парк и высококвалифицированные специалисты позволяют производить детали любой сложности от единичных до серийных партий.",
    image: cncMilling,
    features: ["По чертежам и образцам", "Любая сложность", "Единичные и серийные партии"],
  },
  {
    id: "plasma",
    icon: Zap,
    title: "Газо-плазменная резка",
    shortDesc: "Рабочая поверхность 2000×6000 мм",
    description: "Станок плазменной и газокислородной резки. Оборудование предназначено для резки плазменной дугой различных металлов толщиной от 1 до 50 мм, газом до 200мм. Высокоточное ЧПУ позволяет изготавливать детали любой конфигурации.",
    image: plasmaCutter,
    features: ["Плазма: 1-50 мм", "Газ: до 200 мм", "Любая конфигурация"],
  },
  {
    id: "welding",
    icon: Flame,
    title: "Сварка",
    shortDesc: "Все виды сварочных работ",
    description: "Сварка — технологический процесс получения неразъёмного соединения. На нашем производстве имеется несколько видов сварки: ручная дуговая, полуавтоматическая проволокой, точечная контактная и сварка аргоном для нержавеющей стали, алюминия и титана.",
    image: redBoxes,
    features: ["Ручная дуговая", "Полуавтоматическая", "Аргонодуговая TIG"],
  },
  {
    id: "painting",
    icon: Paintbrush,
    title: "Порошковая покраска",
    shortDesc: "Оборудование GEMMA",
    description: "Порошковая покраска изделий длиной до 3.5 метров на оборудовании фирмы GEMMA. Широкая палитра цветов RAL, равномерное покрытие, высокая стойкость к механическим повреждениям и коррозии.",
    image: redBoxes,
    features: ["Изделия до 3.5 м", "Любые цвета RAL", "Оборудование GEMMA"],
  },
];

export default function Services() {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              Наши услуги
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Полный цикл металлообработки
            </h1>
            <p className="text-lg text-muted-foreground">
              От раскроя листового металла до готового окрашенного изделия. 
              Современное немецкое оборудование Trumpf с ЧПУ гарантирует высочайшее качество.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {services.map((service, index) => (
              <motion.article
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid lg:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <div className="aspect-video rounded-2xl overflow-hidden industrial-border">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">
                      {service.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-3 mb-6">
                      {service.features.map((feature) => (
                        <li
                          key={feature}
                          className="px-4 py-2 rounded-full bg-muted text-sm text-foreground"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to={`/services/${service.id}`}
                      className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                    >
                      Подробнее об услуге
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Нужен расчёт стоимости?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Отправьте чертежи или техническое задание — рассчитаем стоимость в течение рабочего дня.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg gradient-primary glow-primary text-primary-foreground font-medium"
          >
            Заказать расчёт
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
