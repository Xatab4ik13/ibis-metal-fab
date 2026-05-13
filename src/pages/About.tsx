import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import heroImg from "@/assets/hero-industrial.jpg";
import workshopImg from "@/assets/equipment/trumatic-200-work.jpg";
import millingImg from "@/assets/equipment/cnc-milling-work.jpg";

const stats = [
  { value: "10+", label: "лет на рынке" },
  { value: "60", label: "сотрудников" },
  { value: "20+", label: "станков с ЧПУ" },
  { value: "5", label: "видов металлообработки" },
];

const principles = [
  {
    title: "Полный цикл на одной площадке",
    text: "От раскроя листа до окрашенного изделия — все этапы выполняем сами. Не передаём работу подрядчикам, поэтому сроки и качество под контролем.",
  },
  {
    title: "Современное немецкое оборудование",
    text: "Координатно-пробивные станки Trumpf, гидравлические прессы TrumaBend, лазерные комплексы Bodor, фрезерные центры с ЧПУ. Точность до 0,1 мм.",
  },
  {
    title: "Работаем с юридическими лицами",
    text: "Договор, безналичный расчёт, закрывающие документы. Готовы работать по техническим заданиям, чертежам и образцам, в том числе по ГОСТ.",
  },
  {
    title: "Серийное и единичное производство",
    text: "Берём в работу как разовые заказы, так и серийные партии. Стабильно держим сроки даже при больших объёмах за счёт собственных мощностей.",
  },
  {
    title: "Производство в Москве рядом с МКАД",
    text: "Цех в мкр Кучино (г. Балашиха) — 15 минут от МКАД. Удобно отгружать и забирать готовую продукцию, минимальные расходы на логистику по Москве.",
  },
  {
    title: "Расчёт стоимости в течение рабочего дня",
    text: "Присылайте чертежи в любом формате (PDF, DWG, DXF, STEP) — наши инженеры рассчитают стоимость и сроки в день обращения.",
  },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "О компании ООО АТМ — металлообработка в Москве с 2015 года",
  "url": "https://obrabotka-met.ru/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "ООО АТМ",
    "foundingDate": "2015",
    "numberOfEmployees": "60",
    "url": "https://obrabotka-met.ru",
    "logo": "https://obrabotka-met.ru/favicon.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "мкр Кучино, ул. Южная 17/1",
      "addressLocality": "Балашиха",
      "addressRegion": "Москва",
      "postalCode": "143981",
      "addressCountry": "RU"
    },
    "telephone": "8 (901) 744-94-40",
    "email": "obrabotka-met@bk.ru"
  }
};

export default function About() {
  return (
    <Layout>
      <SEO
        title="О компании ООО АТМ — Металлообработка в Москве с 2015 года"
        description="ООО АТМ — собственное производство металлообработки в Москве с 2015 года. 60 сотрудников, 20+ станков с ЧПУ Trumpf и Bodor, полный цикл: раскрой, гибка, токарно-фрезерные работы, сварка, порошковая покраска."
        canonical="/about"
        schema={aboutSchema}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "О компании" }]} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                О компании
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              ООО АТМ — металлообработка<br />
              <span className="text-muted-foreground">в Москве с 2015 года</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Собственное производство полного цикла: от раскроя листового металла
              до готового окрашенного изделия. Работаем с юридическими лицами по всей Москве и области.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl bg-card industrial-border text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{s.value}</div>
                <div className="text-sm text-muted-foreground">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Наша история</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Компания <strong className="text-foreground">ООО АТМ</strong> работает на рынке металлообработки
                  Москвы с <strong className="text-foreground">2015 года</strong>. Начинали с небольшого цеха
                  и нескольких станков — сегодня это полноценное производство, оснащённое современным
                  немецким оборудованием Trumpf, Bodor и GEMMA.
                </p>
                <p>
                  За эти годы мы выполнили сотни заказов для производственных предприятий, застройщиков,
                  снабженцев и инженерных компаний Москвы и области. Среди наших клиентов — серийные
                  производства, объекты инфраструктуры, мебельные фабрики и компании, выпускающие
                  металлоконструкции и корпусные изделия.
                </p>
                <p>
                  Сегодня в штате <strong className="text-foreground">60 сотрудников</strong>:
                  операторы ЧПУ, технологи, сварщики, маляры, инженеры. Производственная площадка
                  расположена в мкр Кучино (г. Балашиха) — 15 минут от МКАД.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden industrial-border aspect-[4/3]"
            >
              <img
                src={heroImg}
                alt="Производство ООО АТМ — цех металлообработки в Москве"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Преимущества и принципы работы</h2>
            <p className="text-muted-foreground">
              Почему производственные компании, застройщики и снабженцы Москвы выбирают ООО АТМ.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-6 rounded-2xl bg-card industrial-border"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                    <p className="text-sm text-muted-foreground">{p.text}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production photos */}
      <section className="py-16 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mb-10"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Наше производство</h2>
            <p className="text-muted-foreground">
              Собственный цех в Москве, оснащённый координатно-пробивными станками Trumpf,
              лазерами Bodor, гидравлическими прессами и фрезерными центрами с ЧПУ.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden industrial-border aspect-[4/3]">
              <img
                src={workshopImg}
                alt="Работа на координатно-пробивном станке Trumpf — цех ООО АТМ в Москве"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden industrial-border aspect-[4/3]">
              <img
                src={millingImg}
                alt="Оператор за фрезерным станком с ЧПУ — производство ООО АТМ"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Хотите обсудить проект?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Отправьте чертежи или техническое задание — рассчитаем стоимость в течение рабочего дня.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
          >
            Связаться с нами
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
