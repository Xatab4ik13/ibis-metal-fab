import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";

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
import trumatic200Work from "@/assets/equipment/trumatic-200-work.jpg";
import trumaticVideo from "@/assets/equipment/trumatic-cutting-video.mp4";
import millingFrame from "@/assets/products/milling-frame.jpg";
import millingFlange from "@/assets/products/milling-flange.jpg";
import cncControlPanel from "@/assets/equipment/cnc-control-panel.jpg";
import cncMillingProcess from "@/assets/equipment/cnc-milling-process.jpg";

const servicesData: Record<string, {
  title: string;
  subtitle: string;
  description: string;
  longDescription: string[];
  images: string[];
  video?: string;
  features: string[];
  specs: { label: string; value: string }[];
  process: { step: number; title: string; description: string }[];
}> = {
  bending: {
    title: "Гибка листового металла",
    subtitle: "Гидравлические прессы Trumpf и Ermaksan",
    description: "Технологическая операция, при которой из заготовки плоской формы получают объёмное изделие без сварных швов.",
    longDescription: [
      "Гибка металла – это технологическая операция, при которой из заготовки плоской формы получают объемное изделие без сварных и иных швов и соединений. Такой вид обработки позволяет получать прочные и надежные детали, отличающиеся не только высокой точностью, но и достойным внешним видом.",
      "Гибка листового металла на нашем предприятии осуществляется на гидравлических прессах производства Trumpf и Ermaksan. Современное оборудование с ЧПУ обеспечивает высочайшую точность и повторяемость результатов.",
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
      { label: "Оборудование", value: "Trumabend V85, Ermaksan PowerBend" },
      { label: "Усилие пресса", value: "до 110 тонн" },
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
    subtitle: "Лазер, плазма, координатная пробивка",
    description: "Высокопроизводительный раскрой листового металла на современных станках с ЧПУ.",
    longDescription: [
      "Все работы производятся на высоком профессиональном уровне в кратчайшие сроки благодаря использованию высокопроизводительных станков. Наше производство по листообработке оснащено современными высокоточными станками, с ЧПУ, что позволяет обеспечить высокое качество изготовляемых изделий.",
      "Предприятие предлагает услуги по координатной пробивке металла различной степени сложности на высокотехнологичных станках Trumatic немецкой компании Trumpf. Толщина обрабатываемого металла — сталь от 0.5 до 3.0 мм, алюминий до 6.0 мм.",
      "Станок лазерной резки листа. Толщина обрабатываемого металла — сталь от 0.5 до 12.0 мм.",
      "Станок плазменной и газокислородной резки. Оборудование предназначено для резки плазменной дугой различных металлов толщиной от 5 до 30 мм. Высокоточное числовое программное управление позволяет изготавливать детали любой конфигурации. Рабочая поверхность 2000×6000 мм.",
      "Расчет стоимости пробивных работ производится индивидуально на основании представленной технической документации.",
    ],
    images: [trumatic200Work, trumatic200, trumatic2000, bodorLaser, plasmaCutter, cncPlasma],
    video: trumaticVideo,
    features: [
      "Лазерная резка стали до 12 мм",
      "Газо-плазменная резка до 30 мм",
      "Координатная пробивка Trumpf",
      "Сложные контуры любой конфигурации",
      "Высокая точность позиционирования",
      "Программирование по CAD-файлам",
    ],
    specs: [
      { label: "Координатная пробивка (сталь)", value: "0.5 - 3.0 мм" },
      { label: "Координатная пробивка (алюминий)", value: "до 6.0 мм" },
      { label: "Лазерная резка (сталь)", value: "0.5 - 12.0 мм" },
      { label: "Газо-плазменная резка", value: "5 - 30 мм" },
      { label: "Рабочая зона плазмы", value: "2000 × 6000 мм" },
    ],
    process: [
      { step: 1, title: "Загрузка CAD", description: "Импорт чертежей в формате DXF, DWG или PDF" },
      { step: 2, title: "Оптимизация", description: "Автоматическая оптимизация раскладки для экономии материала" },
      { step: 3, title: "Раскрой", description: "Лазерная резка, плазменная резка или координатная пробивка" },
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
    images: [cncMillingProcess, cncControlPanel, millingFrame, millingFlange, cncMilling],
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

const seoData: Record<string, { title: string; description: string }> = {
  bending: {
    title: "Гибка листового металла на заказ в Москве — Прессы Trumpf",
    description: "Гибка листового металла на гидравлических прессах Trumpf и Ermaksan в Москве. Толщина до 6 мм, длина до 3000 мм. Без сварных швов, высокая точность. Расчёт за 1 день.",
  },
  cutting: {
    title: "Раскрой листового металла — Лазерная резка, Плазма, Пробивка Trumpf",
    description: "Лазерная резка стали до 12 мм, газо-плазменная резка до 30 мм, координатная пробивка на Trumpf Trumatic. Раскрой любой конфигурации в Москве. Расчёт за 1 день.",
  },
  milling: {
    title: "Токарно-фрезерные работы на заказ в Москве — ЧПУ",
    description: "Токарные и фрезерные работы на станках с ЧПУ в Москве. Точность до 0.01 мм. Сталь, алюминий, латунь. По чертежам и образцам, от 1 детали до серии.",
  },
  welding: {
    title: "Сварочные работы на заказ в Москве — Аргон, TIG, MIG/MAG",
    description: "Все виды сварки в Москве: аргонодуговая TIG, полуавтоматическая MIG/MAG, точечная контактная. Нержавейка, алюминий, титан. Сертификация НАКС.",
  },
  painting: {
    title: "Порошковая покраска металла в Москве — Любой цвет RAL",
    description: "Порошковая покраска металлоизделий до 3.5 м на оборудовании GEMMA в Москве. Любые цвета RAL, высокая стойкость к коррозии. Расчёт за 1 день.",
  },
};

const faqData: Record<string, { question: string; answer: string }[]> = {
  bending: [
    { question: "Какую максимальную толщину металла можно гнуть?", answer: "На наших прессах Trumpf TrumaBend и Ermaksan PowerBend мы выполняем гибку листового металла толщиной до 6 мм. Максимальная длина гиба — до 3000 мм, усилие пресса до 110 тонн." },
    { question: "Сколько стоит гибка листового металла?", answer: "Стоимость зависит от толщины металла, количества гибов и объёма партии. Отправьте чертёж — мы рассчитаем стоимость в течение рабочего дня. Работаем как с единичными деталями, так и серийными партиями." },
    { question: "Какие материалы вы гнёте?", answer: "Мы работаем с чёрной сталью, нержавеющей сталью, оцинкованной сталью и алюминием. Подбираем оснастку под каждый материал для получения качественного гиба без повреждения поверхности." },
    { question: "Можно ли изготовить сложные профили?", answer: "Да, наше оборудование с ЧПУ позволяет выполнять многопрофильную гибку с высокой точностью. Изготавливаем уголки, швеллеры, П-образные и Z-образные профили, корпусные детали." },
  ],
  cutting: [
    { question: "Какие виды раскроя вы предлагаете?", answer: "Мы выполняем три вида раскроя: лазерная резка (сталь до 12 мм), газо-плазменная резка (5-30 мм) и координатная пробивка на станках Trumpf Trumatic (сталь 0.5-3 мм, алюминий до 6 мм)." },
    { question: "Какой формат чертежей вы принимаете?", answer: "Принимаем файлы в форматах DXF, DWG, STEP, PDF. Если у вас только эскиз или образец — наши технологи помогут создать чертёж и управляющую программу для станка." },
    { question: "Какой максимальный размер листа для раскроя?", answer: "Рабочая поверхность станка плазменной резки — 2000×6000 мм. Для лазерной резки и координатной пробивки используются стандартные листы до 1500×3000 мм." },
    { question: "Сколько стоит лазерная резка металла?", answer: "Стоимость рассчитывается индивидуально и зависит от толщины материала, длины реза и объёма партии. Отправьте чертежи — расчёт стоимости бесплатный и занимает 1 рабочий день." },
  ],
  milling: [
    { question: "Какие материалы вы обрабатываете?", answer: "Работаем со всеми конструкционными материалами: чёрная и нержавеющая сталь, алюминий, латунь, бронза, медь, а также инженерные пластики (капролон, фторопласт)." },
    { question: "Какая точность обработки?", answer: "Наши станки с ЧПУ обеспечивают точность до 0.01 мм. Контроль размеров выполняется на координатно-измерительном оборудовании." },
    { question: "Какой минимальный объём заказа?", answer: "Принимаем заказы от 1 детали. Работаем как с единичными образцами и прототипами, так и с серийными партиями до 10 000 штук." },
    { question: "Можно ли изготовить деталь по образцу?", answer: "Да, мы изготавливаем детали как по чертежам, так и по образцам. Наши технологи выполнят обмер образца, создадут чертёж и управляющую программу для станка." },
  ],
  welding: [
    { question: "Какие виды сварки вы выполняете?", answer: "На нашем производстве представлены все основные виды сварки: ручная дуговая (MMA), полуавтоматическая в среде защитных газов (MIG/MAG), аргонодуговая (TIG) и точечная контактная сварка." },
    { question: "Свариваете ли вы нержавейку и алюминий?", answer: "Да, для сварки нержавеющей стали, алюминия и титана мы используем аргонодуговую сварку (TIG), которая обеспечивает высокое качество шва и минимальную деформацию." },
    { question: "Есть ли у ваших сварщиков сертификация?", answer: "Наши сварщики имеют сертификацию НАКС (Национальное Агентство Контроля Сварки), что подтверждает квалификацию для работы с ответственными конструкциями." },
    { question: "Какую толщину металла можно варить?", answer: "Мы свариваем металл толщиной от 0.5 мм (точечная и TIG сварка) до 50 мм (ручная дуговая и полуавтоматическая сварка)." },
  ],
  painting: [
    { question: "Какой максимальный размер изделия для покраски?", answer: "Наша покрасочная камера GEMMA позволяет окрашивать изделия длиной до 3.5 метров. Для уточнения максимальных габаритов по ширине и высоте свяжитесь с нами." },
    { question: "Какие цвета доступны?", answer: "Доступна вся палитра цветов RAL — более 200 оттенков. Также предлагаем специальные покрытия: матовые, глянцевые, полуматовые, с текстурой (шагрень, муар, антик)." },
    { question: "Насколько стойкое порошковое покрытие?", answer: "Порошковое покрытие значительно превосходит обычную краску по стойкости: устойчиво к коррозии, механическим повреждениям, УФ-излучению и перепадам температур. Толщина покрытия 60-120 мкм." },
    { question: "Можно ли покрасить не ваши изделия?", answer: "Да, мы оказываем услуги порошковой покраски для сторонних заказчиков. Привозите готовые изделия — выполним подготовку поверхности и покраску в нужный цвет." },
  ],
};

const serviceOrder = ["bending", "cutting", "milling", "welding", "painting"];

export default function ServiceDetail() {
  const { id } = useParams<{ id: string }>();
  const service = id ? servicesData[id] : null;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
  const seo = id ? seoData[id] : null;
  const faqs = id ? faqData[id] : null;
  const faqSchema = faqs ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : undefined;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "ООО АТМ",
      "telephone": "8 (901) 744-94-40",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Балашиха",
        "addressRegion": "Московская область",
        "addressCountry": "RU"
      }
    },
    "areaServed": ["Москва", "Московская область"]
  };

  const combinedSchema = faqSchema ? [serviceSchema, faqSchema] : serviceSchema;

  return (
    <Layout>
      {seo && (
        <SEO
          title={seo.title}
          description={seo.description}
          canonical={`/services/${id}`}
          schema={combinedSchema}
        />
      )}
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

              {/* Video */}
              {service.video && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="mb-16"
                >
                  <h2 className="text-2xl font-bold mb-8">Видео работы оборудования</h2>
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <video
                      src={service.video}
                      controls
                      className="w-full h-full object-cover"
                      poster={service.images[0]}
                    >
                      Ваш браузер не поддерживает воспроизведение видео.
                    </video>
                  </div>
                </motion.div>
              )}

              {/* Image Gallery */}
              {service.images.length > 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mb-16"
                >
                  <h2 className="text-2xl font-bold mb-8">Фотогалерея</h2>
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
