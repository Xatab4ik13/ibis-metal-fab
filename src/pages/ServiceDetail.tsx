import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

import trumpfBend from "@/assets/equipment/trumpf-bend.jpg";
import brsPress from "@/assets/equipment/brs-press.jpg";
import trumatic200 from "@/assets/equipment/trumatic-200.jpg";
import trumatic2000 from "@/assets/equipment/trumatic-2000.jpg";
import cncMilling from "@/assets/equipment/cnc-milling.jpg";
import plasmaCutter from "@/assets/equipment/plasma-cutter.jpg";
import cncPlasma from "@/assets/equipment/cnc-plasma.jpg";
import redBoxes from "@/assets/products/red-boxes.jpg";
import cabinetFrame from "@/assets/products/cabinet-frame.jpg";
import bodorLaser from "@/assets/equipment/bodor-laser.jpg";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  images: string[];
  features: string[];
  specs: { label: string; value: string }[];
}> = {
  bending: {
    title: "Гибка листового металла",
    subtitle: "Гидравлические прессы Trumpf",
    description: "Технологическая операция, при которой из заготовки плоской формы получают объёмное изделие без сварных швов.",
    longDescription: `Гибка металла – это технологическая операция, при которой из заготовки плоской формы получают объемное изделие без сварных и иных швов и соединений. Такой вид обработки позволяет получать прочные и надежные детали, отличающиеся не только высокой точностью, но и достойным внешним видом.

Гибка листового металла на нашем предприятии осуществляется на гидравлических прессах производства Trumpf. Современное оборудование с ЧПУ обеспечивает высочайшую точность и повторяемость результатов.`,
    images: [trumpfBend, brsPress],
    features: [
      "Гибка без деформации поверхности",
      "Высокая точность углов гиба",
      "Работа с различными типами металла",
      "Изготовление сложных профилей",
      "Минимальные радиусы гиба",
      "Быстрое переналаживание",
    ],
    specs: [
      { label: "Оборудование", value: "Trumpf TrumaBend C110" },
      { label: "Усилие пресса", value: "110 тонн" },
      { label: "Длина гиба", value: "до 3000 мм" },
      { label: "Толщина металла", value: "до 6 мм" },
    ],
  },
  cutting: {
    title: "Раскрой листового металла",
    subtitle: "Координатная пробивка и лазерная резка",
    description: "Высокопроизводительный раскрой листового металла на станках Trumpf с ЧПУ.",
    longDescription: `Все работы производятся на высоком профессиональном уровне в кратчайшие сроки благодаря использованию высокопроизводительных станков. Наше производство по листообработке оснащено современными высокоточными станками с ЧПУ, что позволяет обеспечить высокое качество изготовляемых изделий.

Наше производственное предприятие предлагает услуги по координатной пробивке металла различной степени сложности на высокотехнологичном станке Trumatic 2000R немецкой компании Trumpf. Толщина обрабатываемого металла — сталь от 0.5 до 3.0 мм, алюминий до 4.0 мм.

Расчет стоимости пробивных работ производится индивидуально на основании представленной технической документации.`,
    images: [trumatic200, trumatic2000, bodorLaser],
    features: [
      "Высокая скорость обработки",
      "Минимум отходов материала",
      "Сложные контуры любой конфигурации",
      "Высокая точность позиционирования",
      "Автоматическая смена инструмента",
      "Программирование по CAD-файлам",
    ],
    specs: [
      { label: "Оборудование", value: "Trumatic 2000R" },
      { label: "Сталь", value: "0.5 - 3.0 мм" },
      { label: "Алюминий", value: "до 4.0 мм" },
      { label: "Рабочая зона", value: "1250 × 2500 мм" },
    ],
  },
  milling: {
    title: "Токарно-фрезерные работы",
    subtitle: "Детали любой сложности",
    description: "Токарные и фрезерные работы по чертежам и образцам на современных станках с ЧПУ.",
    longDescription: `Предприятие производит токарные фрезерные работы, как по чертежам, так и по образцам требуемой продукции. Мощный станочный парк и высококвалифицированные специалисты позволяют производить детали любой сложности от единичных до серийных партий.

Мы работаем с различными материалами: сталь, нержавеющая сталь, алюминий, латунь, бронза, пластики. Современное оборудование с ЧПУ обеспечивает высочайшую точность и повторяемость.`,
    images: [cncMilling],
    features: [
      "Работа по чертежам и образцам",
      "Единичные и серийные партии",
      "Различные материалы",
      "Высокая точность обработки",
      "Сложные пространственные детали",
      "Контроль качества на всех этапах",
    ],
    specs: [
      { label: "Точность", value: "до 0.01 мм" },
      { label: "Материалы", value: "Сталь, алюминий, латунь" },
      { label: "Партии", value: "От 1 до 10000 шт" },
      { label: "Сроки", value: "От 1 рабочего дня" },
    ],
  },
  plasma: {
    title: "Газо-плазменная резка",
    subtitle: "Рабочая поверхность 2000×6000 мм",
    description: "Плазменная и газокислородная резка металла толщиной от 1 до 200 мм.",
    longDescription: `Станок плазменной и газокислородной резки. Оборудование предназначено для резки плазменной дугой различных металлов толщиной от 1 до 50 мм, газом до 200мм. Высокоточное числовое программное управление позволяет изготавливать детали любой конфигурации.

Рабочая поверхность 2000×6000 мм позволяет обрабатывать листы большого формата. Современная система ЧПУ обеспечивает высокую точность реза и минимум отходов.`,
    images: [plasmaCutter, cncPlasma],
    features: [
      "Резка толстого металла",
      "Любая конфигурация деталей",
      "Большая рабочая зона",
      "Высокая скорость резки",
      "Минимальная зона термического влияния",
      "Чистый качественный рез",
    ],
    specs: [
      { label: "Плазменная резка", value: "1 - 50 мм" },
      { label: "Газовая резка", value: "до 200 мм" },
      { label: "Рабочая зона", value: "2000 × 6000 мм" },
      { label: "Точность", value: "±0.5 мм" },
    ],
  },
  welding: {
    title: "Сварочные работы",
    subtitle: "Все виды промышленной сварки",
    description: "Ручная дуговая, полуавтоматическая, точечная и аргонодуговая сварка.",
    longDescription: `Сварка — технологический процесс получения неразъёмного соединения между свариваемыми частями изделия при их нагреве. На нашем производстве имеется несколько видов сварки.

**Ручная дуговая сварка** — для сварки используют электрод с нанесённым на его поверхность покрытием. При плавлении обмазки образуется защитный слой, отделяющий зону сварки от атмосферных газов.

**Полуавтоматическая сварка** — в качестве электрода используется металлическая проволока, которая подаётся автоматически. Для защиты применяются защитные газы.

**Точечная контактная сварка** — детали зажимаются в электродах, между которыми протекает большой ток, разогревающий металл до температуры плавления.

**Сварка аргоном** — позволяет производить сварку нержавеющей стали, алюминия, титана, чугуна и цветных металлов с высоким качеством соединения.`,
    images: [redBoxes, cabinetFrame],
    features: [
      "Ручная дуговая сварка",
      "Полуавтоматическая MIG/MAG",
      "Аргонодуговая TIG",
      "Точечная контактная сварка",
      "Сварка нержавеющей стали",
      "Сварка алюминия и титана",
    ],
    specs: [
      { label: "Методы", value: "MMA, MIG/MAG, TIG, контактная" },
      { label: "Материалы", value: "Сталь, нержавейка, алюминий" },
      { label: "Толщина", value: "0.5 - 50 мм" },
      { label: "Сертификация", value: "НАКС" },
    ],
  },
  painting: {
    title: "Порошковая покраска",
    subtitle: "Оборудование GEMMA",
    description: "Порошковая покраска изделий длиной до 3.5 метров в любой цвет RAL.",
    longDescription: `Порошковая покраска — современный метод нанесения защитно-декоративных покрытий на металлические изделия. Покрытие обладает высокой стойкостью к механическим повреждениям, коррозии и воздействию окружающей среды.

Наше производство оснащено оборудованием фирмы GEMMA, позволяющим окрашивать изделия длиной до 3.5 метров. Доступна вся палитра цветов RAL, а также специальные покрытия: матовые, глянцевые, с текстурой.`,
    images: [redBoxes, cabinetFrame],
    features: [
      "Равномерное покрытие",
      "Высокая стойкость к коррозии",
      "Устойчивость к УФ-излучению",
      "Любые цвета RAL",
      "Матовые и глянцевые покрытия",
      "Текстурные поверхности",
    ],
    specs: [
      { label: "Оборудование", value: "GEMMA" },
      { label: "Макс. длина", value: "до 3500 мм" },
      { label: "Палитра", value: "Все цвета RAL" },
      { label: "Толщина покрытия", value: "60-120 мкм" },
    ],
  },
};

const serviceOrder = ["bending", "cutting", "milling", "plasma", "welding", "painting"];

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;

  if (!service) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Услуга не найдена</h1>
            <Link to="/services" className="text-primary hover:underline">
              Вернуться к списку услуг
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const currentIndex = serviceOrder.indexOf(id || "");
  const prevService = currentIndex > 0 ? serviceOrder[currentIndex - 1] : null;
  const nextService = currentIndex < serviceOrder.length - 1 ? serviceOrder[currentIndex + 1] : null;

  return (
    <Layout>
      {/* Hero */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Все услуги
            </Link>
            <span className="text-primary text-sm font-medium uppercase tracking-widest mb-4 block">
              {service.subtitle}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="aspect-[4/3] rounded-2xl overflow-hidden industrial-border"
              >
                <img
                  src={image}
                  alt={`${service.title} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Description */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="prose prose-invert max-w-none"
              >
                <h2 className="text-2xl font-bold mb-6">Описание</h2>
                {service.longDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mt-12"
              >
                <h2 className="text-2xl font-bold mb-6">Преимущества</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-4 rounded-xl bg-card industrial-border"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              {/* Specs */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="rounded-2xl bg-card industrial-border p-6 mb-6"
              >
                <h3 className="font-semibold mb-4">Характеристики</h3>
                <div className="space-y-4">
                  {service.specs.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{spec.label}</span>
                      <span className="text-sm font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 p-6"
              >
                <h3 className="font-semibold mb-2">Нужен расчёт?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Отправьте чертежи — рассчитаем стоимость в течение дня.
                </p>
                <Button asChild className="w-full gradient-primary">
                  <Link to="/contacts">Заказать расчёт</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center pt-8 border-t border-border">
            {prevService ? (
              <Link
                to={`/services/${prevService}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{servicesData[prevService].title}</span>
                <span className="sm:hidden">Назад</span>
              </Link>
            ) : (
              <div />
            )}
            {nextService && (
              <Link
                to={`/services/${nextService}`}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="hidden sm:inline">{servicesData[nextService].title}</span>
                <span className="sm:hidden">Далее</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
