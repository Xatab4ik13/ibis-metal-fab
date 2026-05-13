import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileCheck, Handshake, Truck, Clock, ShieldCheck, Loader2, CheckCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";

import heroImg from "@/assets/hero-metalwork.jpg";
import metalBracket from "@/assets/gallery/metal-bracket.jpg";
import largePanels from "@/assets/gallery/large-panels.jpg";
import bentProfiles from "@/assets/gallery/bent-profiles.jpg";
import paintedOrange from "@/assets/gallery/painted-orange.jpg";
import whiteFrames from "@/assets/gallery/white-frames.jpg";
import cutParts from "@/assets/gallery/cut-parts.jpg";

const conditions = [
  {
    icon: FileCheck,
    title: "Договор и закрывающие документы",
    text: "Работаем по договору, выставляем счета, предоставляем УПД и акты выполненных работ. Полный комплект для бухгалтерии застройщика.",
  },
  {
    icon: Handshake,
    title: "Безналичный расчёт, отсрочка платежа",
    text: "Принимаем безналичную оплату на расчётный счёт ООО АТМ. По крупным проектам обсуждаем индивидуальные условия и отсрочку платежа.",
  },
  {
    icon: ShieldCheck,
    title: "Работа по чертежам, ТЗ и ГОСТ",
    text: "Изготавливаем продукцию по предоставленным чертежам, техническим заданиям и действующим ГОСТ. Принимаем файлы PDF, DWG, DXF, STEP.",
  },
  {
    icon: Truck,
    title: "Производство в Москве",
    text: "Цех в мкр Кучино (г. Балашиха) — 15 минут от МКАД. Удобная логистика по Москве и области, отгрузка с площадки или доставка на объект.",
  },
];

const cases = [
  { img: metalBracket, title: "Закладные детали и кронштейны", text: "Серийное изготовление закладных элементов для монолитного и каркасного строительства." },
  { img: largePanels, title: "Металлоконструкции для строек", text: "Изготовление негабаритных и крупногабаритных металлоконструкций по ТЗ застройщика." },
  { img: bentProfiles, title: "Гнутые профили и ограждения", text: "Гибка профилей, изготовление ограждений лестниц, балконов, технологических площадок." },
  { img: paintedOrange, title: "Корпуса электрощитов и шкафов", text: "Изготовление и порошковая окраска корпусов под инженерные системы и автоматику." },
  { img: whiteFrames, title: "Каркасы, рамы, основания", text: "Производство несущих рам, опор, оснований под оборудование и инженерные узлы." },
  { img: cutParts, title: "Раскрой металла под объект", text: "Лазерный, плазменный раскрой и пробивка листового металла по чертежам застройщика." },
];

const volumes = [
  { value: "до 3,5 м", label: "длина окрашиваемых изделий" },
  { value: "до 20 мм", label: "толщина раскроя металла" },
  { value: "от 1 до 10 000 шт", label: "тираж партии" },
  { value: "от 7 дней", label: "сроки на типовые партии" },
];

const zastroyshchikamSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Металлообработка для застройщиков",
  "provider": {
    "@type": "Organization",
    "name": "ООО АТМ",
    "url": "https://obrabotka-met.ru",
    "telephone": "8 (901) 744-94-40",
    "email": "obrabotka-met@bk.ru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "мкр Кучино, ул. Южная 17/1",
      "addressLocality": "Балашиха",
      "addressRegion": "Москва",
      "addressCountry": "RU"
    }
  },
  "areaServed": ["Москва", "Московская область"],
  "description": "Металлообработка для застройщиков и строительных компаний Москвы: закладные детали, металлоконструкции, ограждения, корпусные изделия. Договор, безнал, отсрочка платежа, работа по ГОСТ."
};

export default function Zastroyshchikam() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          name: `${formData.name}${formData.company ? ` (${formData.company})` : ""}`,
          email: formData.email,
          phone: formData.phone,
          message: `[Заявка с раздела «Застройщикам»]\n${formData.message}`,
          files: [],
        },
      });
      if (error) throw error;
      setIsSubmitted(true);
      setFormData({ name: "", company: "", phone: "", email: "", message: "" });
      toast({ title: "Заявка отправлена!", description: "Свяжемся с вами в течение рабочего дня." });
    } catch (err) {
      console.error(err);
      toast({ title: "Ошибка отправки", description: "Попробуйте позже или позвоните нам напрямую.", variant: "destructive" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Металлообработка для застройщиков в Москве — ООО АТМ"
        description="Металлообработка для застройщиков и строительных компаний Москвы: закладные, металлоконструкции, ограждения, корпуса. Договор, безналичный расчёт, отсрочка платежа, работа по ГОСТ. ☎ 8 (901) 744-94-40."
        canonical="/zastroyshchikam"
        schema={zastroyshchikamSchema}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Металлообработка для застройщиков Москва" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Застройщикам" }]} />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">B2B · Застройщикам</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Металлообработка<br />
              <span className="text-muted-foreground">для застройщиков Москвы</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mb-8">
              Изготавливаем закладные детали, металлоконструкции, ограждения и корпусные изделия
              для строительных и девелоперских компаний. Работаем по договору с НДС, отсрочка платежа,
              сроки от 7 дней.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#zayavka" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors">
                Получить КП
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="tel:89017449440" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary text-foreground font-medium transition-colors">
                8 (901) 744-94-40
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Conditions */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Условия работы с застройщиками</h2>
            <p className="text-muted-foreground">
              Работаем как полноценный B2B-подрядчик: договор, безналичный расчёт, закрывающие документы,
              работа по чертежам и техническим заданиям заказчика.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-6">
            {conditions.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="p-6 rounded-2xl bg-card industrial-border">
                <c.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground">{c.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Что изготавливаем для строек</h2>
            <p className="text-muted-foreground">
              Типы изделий, которые регулярно производим для застройщиков, генподрядчиков
              и компаний инженерной инфраструктуры.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <motion.article key={c.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="rounded-2xl overflow-hidden industrial-border bg-card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold mb-2">{c.title}</h3>
                  <p className="text-sm text-muted-foreground">{c.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Volumes & timing */}
      <section className="py-20 bg-card/30 border-y border-border">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-2xl mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="w-7 h-7 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Объёмы и сроки</h2>
            </div>
            <p className="text-muted-foreground">
              Берём в работу как разовые изделия, так и серийные партии. Точные сроки
              рассчитываем по чертежам в течение рабочего дня.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {volumes.map((v, i) => (
              <motion.div key={v.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="p-6 rounded-2xl bg-card industrial-border text-center">
                <div className="text-2xl md:text-3xl font-bold text-primary mb-2">{v.value}</div>
                <div className="text-sm text-muted-foreground">{v.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section id="zayavka" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Запросить коммерческое предложение</h2>
              <p className="text-muted-foreground mb-6">
                Оставьте заявку — наш инженер свяжется с вами в течение рабочего дня,
                уточнит детали проекта и подготовит расчёт стоимости и сроков.
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />Расчёт стоимости в течение рабочего дня</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />Принимаем чертежи в PDF, DWG, DXF, STEP</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />Договор, безналичный расчёт, закрывающие документы</li>
                <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />Если нужно отправить чертежи — используйте <Link to="/contacts" className="text-primary hover:underline">форму на странице «Контакты»</Link></li>
              </ul>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl bg-card industrial-border p-8">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
                  <p className="text-muted-foreground mb-6">Свяжемся с вами в течение рабочего дня.</p>
                  <Button onClick={() => setIsSubmitted(false)} variant="outline">Отправить ещё</Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Имя *</label>
                      <Input name="name" value={formData.name} onChange={handleChange} required placeholder="Иван Иванов" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Компания</label>
                      <Input name="company" value={formData.company} onChange={handleChange} placeholder="ООО Стройка" className="bg-background border-border" />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон *</label>
                      <Input name="phone" type="tel" value={formData.phone} onChange={handleChange} required placeholder="+7 (___) ___-__-__" className="bg-background border-border" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Email *</label>
                      <Input name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="email@company.ru" className="bg-background border-border" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Описание задачи</label>
                    <Textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Тип изделий, объём партии, желаемые сроки..." className="bg-background border-border resize-none" />
                  </div>
                  <Button type="submit" disabled={isSubmitting} className="w-full gradient-primary glow-primary" size="lg">
                    {isSubmitting ? (<><Loader2 className="w-4 h-4 mr-2 animate-spin" />Отправка...</>) : (<><Send className="w-4 h-4 mr-2" />Получить КП</>)}
                  </Button>
                  <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer">
                    <input type="checkbox" required className="mt-0.5 accent-primary" />
                    <span>
                      Нажимая кнопку, я даю согласие на обработку моих{" "}
                      <Link to="/privacy" className="text-primary hover:underline">персональных данных</Link>{" "}
                      в соответствии с Политикой конфиденциальности ООО «АТМ»
                    </span>
                  </label>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
