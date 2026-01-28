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
  longDescription: string[];
  images: string[];
  features: string[];
  specs: { label: string; value: string }[];
  process: { step: number; title: string; description: string }[];
}> = {
  bending: {
    title: "Гибка листового металла",
    subtitle: "Гидравлические прессы Trumpf",
    description: "Технологическая операция, при которой из заготовки плоской формы получают объёмное изделие без сварных швов.",
    longDescription: [
      "Гибка металла – это технологическая операция, при которой из заготовки плоской формы получают объемное изделие без сварных и иных швов и соединений. Такой вид обработки позволяет получать прочные и надежные детали, отличающиеся не только высокой точностью, но и достойным внешним видом.",
      "Гибка листового металла на нашем предприятии осуществляется на гидравлических прессах производства Trumpf. Современное оборудование с ЧПУ обеспечивает высочайшую точность и повторяемость результатов.",
      "Мы выполняем гибку деталей различной конфигурации: от простых уголков и швеллеров до сложных многопрофильных изделий. Качество поверхности остаётся неизменным благодаря использованию специальных матриц и пуансонов.",
    ],
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
    process: [
      { step: 1, title: "Получение ТЗ", description: "Анализ чертежей и технического задания, расчёт стоимости" },
      { step: 2, title: "Подготовка", description: "Раскрой заготовок, подготовка оснастки и программирование станка" },
      { step: 3, title: "Гибка", description: "Выполнение гибочных операций с контролем качества" },
      { step: 4, title: "Контроль", description: "Проверка геометрии и соответствия чертежам" },
    ],
  },
  cutting: {
    title: "Раскрой листового металла",
    subtitle: "Координатная пробивка и лазерная резка",
    description: "Высокопроизводительный раскрой листового металла на станках Trumpf с ЧПУ.",
    longDescription: [
      "Все работы производятся на высоком профессиональном уровне в кратчайшие сроки благодаря использованию высокопроизводительных станков. Наше производство по листообработке оснащено современными высокоточными станками с ЧПУ, что позволяет обеспечить высокое качество изготовляемых изделий.",
      "Наше производственное предприятие предлагает услуги по координатной пробивке металла различной степени сложности на высокотехнологичном станке Trumatic 2000R немецкой компании Trumpf. Толщина обрабатываемого металла — сталь от 0.5 до 3.0 мм, алюминий до 4.0 мм.",
      "Расчет стоимости пробивных работ производится индивидуально на основании представленной технической документации. Мы оптимизируем раскладку деталей для минимизации отходов материала.",
    ],
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
    process: [
      { step: 1, title: "Загрузка CAD", description: "Импорт чертежей в формате DXF, DWG или PDF" },
      { step: 2, title: "Оптимизация", description: "Автоматическая оптимизация раскладки для экономии материала" },
      { step: 3, title: "Раскрой", description: "Координатная пробивка или лазерная резка заготовок" },
      { step: 4, title: "Обработка", description: "Снятие заусенцев и подготовка к следующим операциям" },
    ],
  },
  milling: {
    title: "Токарно-фрезерные работы",
    subtitle: "Детали любой сложности",
    description: "Токарные и фрезерные работы по чертежам и образцам на современных станках с ЧПУ.",
    longDescription: [
      "Предприятие производит токарные фрезерные работы, как по чертежам, так и по образцам требуемой продукции. Мощный станочный парк и высококвалифицированные специалисты позволяют производить детали любой сложности от единичных до серийных партий.",
      "Мы работаем с различными материалами: сталь, нержавеющая сталь, алюминий, латунь, бронза, пластики. Современное оборудование с ЧПУ обеспечивает высочайшую точность и повторяемость.",
      "Наши технологи помогут оптимизировать конструкцию детали для снижения стоимости производства без потери функциональных характеристик.",
    ],
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
    process: [
      { step: 1, title: "Анализ", description: "Изучение чертежей или образца, выбор технологии" },
      { step: 2, title: "Программирование", description: "Создание управляющей программы для станка с ЧПУ" },
      { step: 3, title: "Обработка", description: "Токарная и фрезерная обработка заготовки" },
      { step: 4, title: "Измерение", description: "Контроль размеров на координатно-измерительной машине" },
    ],
  },
  plasma: {
    title: "Газо-плазменная резка",
    subtitle: "Рабочая поверхность 2000×6000 мм",
    description: "Плазменная и газокислородная резка металла толщиной от 1 до 200 мм.",
    longDescription: [
      "Станок плазменной и газокислородной резки. Оборудование предназначено для резки плазменной дугой различных металлов толщиной от 1 до 50 мм, газом до 200мм. Высокоточное числовое программное управление позволяет изготавливать детали любой конфигурации.",
      "Рабочая поверхность 2000×6000 мм позволяет обрабатывать листы большого формата. Современная система ЧПУ обеспечивает высокую точность реза и минимум отходов.",
      "Плазменная резка обеспечивает высокое качество кромки без необходимости дополнительной механической обработки для большинства применений.",
    ],
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
    process: [
      { step: 1, title: "Подготовка", description: "Загрузка чертежей, выбор режима резки" },
      { step: 2, title: "Раскладка", description: "Оптимизация размещения деталей на листе" },
      { step: 3, title: "Резка", description: "Плазменная или газокислородная резка" },
      { step: 4, title: "Обработка", description: "Зачистка кромок, удаление грата" },
    ],
  },
  welding: {
    title: "Сварочные работы",
    subtitle: "Все виды промышленной сварки",
    description: "Ручная дуговая, полуавтоматическая, точечная и аргонодуговая сварка.",
    longDescription: [
      "Сварка — технологический процесс получения неразъёмного соединения между свариваемыми частями изделия при их нагреве. На нашем производстве имеется несколько видов сварки.",
      "Ручная дуговая сварка — для сварки используют электрод с нанесённым на его поверхность покрытием. При плавлении обмазки образуется защитный слой, отделяющий зону сварки от атмосферных газов.",
      "Полуавтоматическая сварка — в качестве электрода используется металлическая проволока, которая подаётся автоматически. Для защиты применяются защитные газы (аргон, гелий, углекислый газ).",
      "Сварка аргоном (TIG) — позволяет производить сварку нержавеющей стали, алюминия, титана, чугуна и цветных металлов с высоким качеством соединения.",
    ],
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
    process: [
      { step: 1, title: "Подготовка", description: "Разделка кромок, зачистка, сборка узла" },
      { step: 2, title: "Сварка", description: "Выполнение сварочных швов квалифицированным сварщиком" },
      { step: 3, title: "Контроль", description: "Визуальный контроль, при необходимости — дефектоскопия" },
      { step: 4, title: "Обработка", description: "Зачистка швов, антикоррозийная обработка" },
    ],
  },
  painting: {
    title: "Порошковая покраска",
    subtitle: "Оборудование GEMMA",
    description: "Порошковая покраска изделий длиной до 3.5 метров в любой цвет RAL.",
    longDescription: [
      "Порошковая покраска — современный метод нанесения защитно-декоративных покрытий на металлические изделия. Покрытие обладает высокой стойкостью к механическим повреждениям, коррозии и воздействию окружающей среды.",
      "Наше производство оснащено оборудованием фирмы GEMMA, позволяющим окрашивать изделия длиной до 3.5 метров. Доступна вся палитра цветов RAL, а также специальные покрытия: матовые, глянцевые, с текстурой.",
      "Технология порошковой покраски экологична: не используются растворители, практически 100% порошка используется повторно, отсутствуют вредные выбросы.",
    ],
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
    process: [
      { step: 1, title: "Подготовка", description: "Обезжиривание, фосфатирование поверхности" },
      { step: 2, title: "Нанесение", description: "Электростатическое нанесение порошковой краски" },
      { step: 3, title: "Полимеризация", description: "Запекание в печи при температуре 180-200°C" },
      { step: 4, title: "Контроль", description: "Проверка толщины покрытия и адгезии" },
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
      {/* Hero Section */}
      <section className="relative pt-48 pb-32 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.images[0]}
            alt={service.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            {/* Breadcrumb removed */}
            
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                {service.subtitle}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {service.title}
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              {service.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column - Content */}
            <div className="lg:col-span-8">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold mb-8">О технологии</h2>
                <div className="space-y-6">
                  {service.longDescription.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </motion.div>

              {/* Image Gallery */}
              {service.images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-16"
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    {service.images.map((image, index) => (
                      <div key={index} className="relative aspect-[4/3] overflow-hidden group">
                        <img
                          src={image}
                          alt={`${service.title} ${index + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50" />
                        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50" />
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-16"
              >
                <h2 className="text-2xl font-bold mb-8">Процесс работы</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="relative pl-16">
                      <div className="absolute left-0 top-0 w-12 h-12 rounded-full border-2 border-primary/30 flex items-center justify-center">
                        <span className="text-xl font-bold text-primary">{step.step}</span>
                      </div>
                      <h3 className="font-semibold mb-2">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h2 className="text-2xl font-bold mb-8">Преимущества</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-card/50 border border-border hover:border-primary/30 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Specs */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-card border border-border p-6"
                >
                  <h3 className="font-semibold mb-6">Характеристики</h3>
                  <div className="space-y-4">
                    {service.specs.map((spec, index) => (
                      <div key={index} className="flex justify-between items-center pb-4 border-b border-border last:border-0 last:pb-0">
                        <span className="text-sm text-muted-foreground">{spec.label}</span>
                        <span className="text-sm font-medium text-primary">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 p-6"
                >
                  <h3 className="font-semibold mb-3">Нужен расчёт?</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Отправьте чертежи или техническое задание — рассчитаем стоимость в течение рабочего дня.
                  </p>
                  <Button asChild className="w-full gradient-primary glow-primary">
                    <Link to="/contacts">Заказать расчёт</Link>
                  </Button>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card border border-border p-6"
                >
                  <h3 className="font-semibold mb-4">Быстрая связь</h3>
                  <a 
                    href="tel:89017449440" 
                    className="block text-xl font-semibold text-primary hover:underline mb-2"
                  >
                    8 (901) 744-94-40
                  </a>
                  <p className="text-sm text-muted-foreground">
                    Пн-Пт: 9:00 - 18:00
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-8 border-t border-border">
            {prevService ? (
              <Link
                to={`/services/${prevService}`}
                className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <div className="hidden sm:block">
                  <span className="text-xs text-muted-foreground block mb-1">Предыдущая услуга</span>
                  <span className="font-medium">{servicesData[prevService].title}</span>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextService && (
              <Link
                to={`/services/${nextService}`}
                className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors text-right"
              >
                <div className="hidden sm:block">
                  <span className="text-xs text-muted-foreground block mb-1">Следующая услуга</span>
                  <span className="font-medium">{servicesData[nextService].title}</span>
                </div>
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </Link>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
}
