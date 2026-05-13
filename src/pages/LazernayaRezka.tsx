import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowRight, ArrowLeft, CheckCircle, Loader2, Send, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import SEO from "@/components/SEO";

import logoAtm from "@/assets/logo-atm.png";
import bodorLaser from "@/assets/equipment/bodor-laser.jpg";
import laserWork from "@/assets/gallery/laser-cutting-work.jpg";
import cutParts from "@/assets/gallery/cut-parts.jpg";
import metalBracket from "@/assets/gallery/metal-bracket.jpg";
import perforatedBox from "@/assets/products/perforated-box.jpg";

/* ============ Quiz config ============ */
const quizSteps = [
  {
    key: "material",
    title: "Какой металл резать?",
    options: ["Чёрная сталь", "Нержавеющая сталь", "Алюминий", "Оцинковка", "Не знаю / другое"],
  },
  {
    key: "thickness",
    title: "Толщина металла",
    options: ["до 3 мм", "3–6 мм", "6–10 мм", "10–20 мм", "Не знаю"],
  },
  {
    key: "volume",
    title: "Объём заказа",
    options: ["1–10 деталей", "10–100 деталей", "100–1 000 деталей", "Свыше 1 000", "Серийный заказ"],
  },
  {
    key: "deadline",
    title: "Желаемые сроки",
    options: ["Срочно (1–3 дня)", "В течение недели", "2–4 недели", "Не горит"],
  },
  {
    key: "drawings",
    title: "Есть ли у вас чертежи?",
    options: ["Да, готовые чертежи (PDF/DWG/DXF)", "Есть только эскиз", "Нужна помощь с чертежами"],
  },
];

const equipment = [
  { title: "Волоконные лазеры Bodor", desc: "Высокоточная резка тонкого и среднего листа со скоростью до 80 м/мин." },
  { title: "Координатная пробивка Trumpf", desc: "Trumatic 200/2000 — пробивка отверстий и сложных контуров на серийных деталях." },
  { title: "Газо-плазменный комплекс Ajan", desc: "Раскрой толстого металла до 20 мм, крупногабаритные детали и заготовки." },
];

const materials = [
  { name: "Чёрная сталь", thickness: "до 20 мм" },
  { name: "Нержавеющая сталь", thickness: "до 12 мм" },
  { name: "Алюминий", thickness: "до 10 мм" },
  { name: "Оцинковка", thickness: "до 6 мм" },
  { name: "Медь, латунь", thickness: "до 6 мм" },
];

const process = [
  { n: "01", title: "Заявка и чертежи", text: "Принимаем чертежи в PDF, DWG, DXF, STEP. Если нужно — поможем оформить." },
  { n: "02", title: "Расчёт и КП", text: "Инженер рассчитывает стоимость и сроки в течение рабочего дня." },
  { n: "03", title: "Договор и оплата", text: "Заключаем договор, выставляем счёт. Работаем по безналичному расчёту." },
  { n: "04", title: "Раскрой металла", text: "Раскраиваем партию на лазере, плазме или координатной пробивке." },
  { n: "05", title: "Контроль и отгрузка", text: "ОТК, упаковка. Отгрузка с площадки или доставка на ваш объект." },
];

const cases = [
  { img: laserWork, title: "Раскрой тонколистовой стали" },
  { img: cutParts, title: "Серийные детали по чертежам" },
  { img: metalBracket, title: "Кронштейны и закладные" },
  { img: perforatedBox, title: "Перфорированные корпуса" },
];

const faq = [
  {
    q: "Какой минимальный заказ?",
    a: "Берём в работу как разовые детали, так и серийные партии. Минимальный заказ обсуждается индивидуально — для разовых мелких заказов комфортный порог от 5 000 ₽.",
  },
  {
    q: "В каких форматах принимаете чертежи?",
    a: "PDF, DWG, DXF, STEP, STP. Если у вас только эскиз или фото — отправьте, инженер уточнит детали и поможет оформить чертёж.",
  },
  {
    q: "Сколько занимает расчёт стоимости?",
    a: "Расчёт по стандартным заказам — в течение рабочего дня. По крупным проектам — до 2 рабочих дней.",
  },
  {
    q: "Работаете с юридическими лицами?",
    a: "Да, основной формат работы — договор с юрлицами и ИП, безналичный расчёт, выставление счетов, УПД и акты выполненных работ.",
  },
  {
    q: "Где находится производство?",
    a: "Москва, мкр Кучино (г. Балашиха), ул. Южная 17/1 — 15 минут от МКАД. Удобная отгрузка по Москве и области.",
  },
  {
    q: "Можете доставить готовые детали?",
    a: "Да, организуем доставку транспортной компанией или по Москве собственным транспортом. Стоимость рассчитывается отдельно.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Лазерная резка металла",
  "name": "Лазерная резка металла по чертежам в Москве",
  "url": "https://obrabotka-met.ru/lazernaya-rezka",
  "provider": {
    "@type": "Organization",
    "name": "ООО АТМ",
    "telephone": "8 (901) 744-94-40",
    "email": "obrabotka-met@bk.ru",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "мкр Кучино, ул. Южная 17/1",
      "addressLocality": "Балашиха",
      "addressRegion": "Москва",
      "addressCountry": "RU",
    },
  },
  "areaServed": ["Москва", "Московская область"],
  "description": "Лазерная резка металла по чертежам заказчика в Москве. Сталь, нержавейка, алюминий, оцинковка. Толщина до 20 мм. Расчёт стоимости в течение рабочего дня.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map((f) => ({
    "@type": "Question",
    "name": f.q,
    "acceptedAnswer": { "@type": "Answer", "text": f.a },
  })),
};

export default function LazernayaRezka() {
  const { toast } = useToast();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [contact, setContact] = useState({ name: "", phone: "", email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const isContactStep = step === quizSteps.length;
  const progress = Math.round((step / (quizSteps.length + 1)) * 100);

  const selectAnswer = (key: string, value: string) => {
    setAnswers((p) => ({ ...p, [key]: value }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const summary = quizSteps
        .map((s) => `• ${s.title} → ${answers[s.key] || "—"}`)
        .join("\n");
      const { error } = await supabase.functions.invoke("send-contact-form", {
        body: {
          name: contact.name,
          email: contact.email || `${contact.phone.replace(/\D/g, "")}@no-email.local`,
          phone: contact.phone,
          message: `[Заявка с лендинга «Лазерная резка»]\n\n${summary}`,
          files: [],
        },
      });
      if (error) throw error;
      setIsSubmitted(true);
      toast({ title: "Заявка отправлена!", description: "Свяжемся с вами в течение рабочего дня." });
    } catch (err) {
      console.error(err);
      toast({
        title: "Ошибка отправки",
        description: "Попробуйте позже или позвоните: 8 (901) 744-94-40",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Лазерная резка металла по чертежам в Москве — ООО АТМ"
        description="Лазерная резка металла в Москве по вашим чертежам. Сталь, нержавейка, алюминий до 20 мм. Расчёт за 1 день, договор, безналичный расчёт. ☎ 8 (901) 744-94-40."
        canonical="/lazernaya-rezka"
        schema={serviceSchema}
      />
      {/* Дополнительная FAQ-разметка */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Минимальный header — лого + телефон */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="flex items-center">
              <img src={logoAtm} alt="ООО АТМ — металлообработка в Москве" className="h-10 md:h-12 w-auto" />
            </Link>
            <a
              href="tel:89017449440"
              className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="hidden sm:inline text-base md:text-lg">8 (901) 744-94-40</span>
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* HERO + QUIZ */}
        <section className="relative overflow-hidden py-12 md:py-20">
          <div className="absolute inset-0">
            <img src={bodorLaser} alt="Лазерная резка металла на станке Bodor — Москва" className="w-full h-full object-cover opacity-15" />
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/80" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid lg:grid-cols-2 gap-10 items-start">
              {/* Левая колонка — оффер */}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-12 bg-primary" />
                  <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                    Лазерная резка · Москва
                  </span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  Лазерная резка металла<br />
                  <span className="text-muted-foreground">по вашим чертежам</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-xl">
                  Раскрой стали, нержавейки и алюминия толщиной до 20 мм на современном оборудовании
                  Bodor и Trumpf. Расчёт стоимости в течение рабочего дня.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Толщина металла — до 20 мм",
                    "Принимаем PDF, DWG, DXF, STEP",
                    "Договор, безналичный расчёт, отсрочка",
                    "Срочные заказы от 1 рабочего дня",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:89017449440"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary text-foreground font-medium transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  8 (901) 744-94-40
                </a>
              </motion.div>

              {/* Правая колонка — квиз */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="rounded-2xl bg-card industrial-border p-6 md:p-8 shadow-xl"
              >
                {!isSubmitted ? (
                  <>
                    {/* Прогресс */}
                    <div className="mb-6">
                      <div className="flex justify-between text-xs text-muted-foreground mb-2">
                        <span>
                          Шаг {Math.min(step + 1, quizSteps.length + 1)} из {quizSteps.length + 1}
                        </span>
                        <span>{progress}%</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                        <div
                          className="h-full bg-primary transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <AnimatePresence mode="wait">
                      {!isContactStep ? (
                        <motion.div
                          key={step}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -20 }}
                          transition={{ duration: 0.2 }}
                        >
                          <h2 className="text-xl md:text-2xl font-bold mb-5">{quizSteps[step].title}</h2>
                          <div className="space-y-2">
                            {quizSteps[step].options.map((opt) => (
                              <button
                                key={opt}
                                type="button"
                                onClick={() => selectAnswer(quizSteps[step].key, opt)}
                                className={`w-full text-left px-4 py-3 rounded-lg border transition-all ${
                                  answers[quizSteps[step].key] === opt
                                    ? "border-primary bg-primary/10 text-foreground"
                                    : "border-border hover:border-primary/50 hover:bg-muted/50 text-foreground"
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>
                          {step > 0 && (
                            <button
                              type="button"
                              onClick={() => setStep((s) => s - 1)}
                              className="mt-5 flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ArrowLeft className="w-4 h-4" />
                              Назад
                            </button>
                          )}
                        </motion.div>
                      ) : (
                        <motion.form
                          key="contact"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          onSubmit={handleSubmit}
                          className="space-y-4"
                        >
                          <h2 className="text-xl md:text-2xl font-bold mb-2">Куда отправить расчёт?</h2>
                          <p className="text-sm text-muted-foreground mb-4">
                            Заполните контакты — наш инженер подготовит расчёт и КП в течение рабочего дня.
                          </p>
                          <div>
                            <label className="text-sm font-medium mb-1.5 block">Имя *</label>
                            <Input
                              required
                              maxLength={100}
                              value={contact.name}
                              onChange={(e) => setContact({ ...contact, name: e.target.value })}
                              placeholder="Иван Иванов"
                              className="bg-background border-border"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1.5 block">Телефон *</label>
                            <Input
                              required
                              type="tel"
                              maxLength={30}
                              value={contact.phone}
                              onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                              placeholder="+7 (___) ___-__-__"
                              className="bg-background border-border"
                            />
                          </div>
                          <div>
                            <label className="text-sm font-medium mb-1.5 block">Email</label>
                            <Input
                              type="email"
                              maxLength={255}
                              value={contact.email}
                              onChange={(e) => setContact({ ...contact, email: e.target.value })}
                              placeholder="email@company.ru"
                              className="bg-background border-border"
                            />
                          </div>
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full gradient-primary glow-primary"
                            size="lg"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Отправка...
                              </>
                            ) : (
                              <>
                                <Send className="w-4 h-4 mr-2" />
                                Получить расчёт
                              </>
                            )}
                          </Button>
                          <button
                            type="button"
                            onClick={() => setStep((s) => s - 1)}
                            className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ArrowLeft className="w-4 h-4" />
                            Назад
                          </button>
                          <label className="flex items-start gap-3 text-xs text-muted-foreground cursor-pointer pt-2">
                            <input type="checkbox" required className="mt-0.5 accent-primary" />
                            <span>
                              Нажимая кнопку, я даю согласие на обработку моих{" "}
                              <Link to="/privacy" className="text-primary hover:underline">
                                персональных данных
                              </Link>{" "}
                              в соответствии с Политикой конфиденциальности ООО «АТМ»
                            </span>
                          </label>
                        </motion.form>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-2xl font-semibold mb-2">Заявка отправлена!</h3>
                    <p className="text-muted-foreground">
                      Наш инженер свяжется с вами в течение рабочего дня.
                    </p>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ОБОРУДОВАНИЕ */}
        <section className="py-16 md:py-20 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Оборудование цеха</h2>
              <p className="text-muted-foreground">
                Резка ведётся на трёх типах оборудования — подбираем под задачу: толщину металла,
                сложность контура и тираж партии.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {equipment.map((e, i) => (
                <motion.div
                  key={e.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-6 rounded-2xl bg-card industrial-border"
                >
                  <h3 className="text-lg font-semibold mb-2">{e.title}</h3>
                  <p className="text-sm text-muted-foreground">{e.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* МАТЕРИАЛЫ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">С какими материалами работаем</h2>
              <p className="text-muted-foreground">
                Резка чёрной и нержавеющей стали, алюминия, оцинковки, цветных металлов.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-4">
              {materials.map((m, i) => (
                <motion.div
                  key={m.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-xl bg-card industrial-border text-center"
                >
                  <div className="text-base font-semibold mb-1">{m.name}</div>
                  <div className="text-sm text-primary">{m.thickness}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ПРОЦЕСС */}
        <section className="py-16 md:py-20 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Как мы работаем</h2>
              <p className="text-muted-foreground">5 шагов от заявки до отгрузки готовых деталей.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {process.map((p, i) => (
                <motion.div
                  key={p.n}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                  className="p-5 rounded-xl bg-card industrial-border"
                >
                  <div className="text-3xl font-bold text-primary/40 mb-2">{p.n}</div>
                  <h3 className="font-semibold mb-1.5">{p.title}</h3>
                  <p className="text-sm text-muted-foreground">{p.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* КЕЙСЫ */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Примеры работ</h2>
              <p className="text-muted-foreground">Типы изделий, которые регулярно режем для наших клиентов.</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {cases.map((c, i) => (
                <motion.figure
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="rounded-xl overflow-hidden industrial-border bg-card"
                >
                  <div className="aspect-square overflow-hidden">
                    <img src={c.img} alt={c.title} className="w-full h-full object-cover" />
                  </div>
                  <figcaption className="p-3 text-sm text-foreground">{c.title}</figcaption>
                </motion.figure>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-card/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Частые вопросы</h2>
            <div className="space-y-3">
              {faq.map((f, i) => (
                <div key={f.q} className="rounded-xl bg-card industrial-border overflow-hidden">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-medium pr-4">{f.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 text-sm text-muted-foreground">{f.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA финальный */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Готовы рассчитать ваш заказ?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Заполните квиз выше или позвоните напрямую — рассчитаем стоимость и сроки в течение рабочего дня.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
              >
                Заполнить квиз
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="tel:89017449440"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary text-foreground font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-primary" />
                8 (901) 744-94-40
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Минимальный footer */}
      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 text-sm text-muted-foreground">
            <span>© {new Date().getFullYear()} ООО АТМ. Лазерная резка металла в Москве.</span>
            <div className="flex gap-5">
              <a href="tel:89017449440" className="hover:text-primary transition-colors">8 (901) 744-94-40</a>
              <Link to="/privacy" className="hover:text-primary transition-colors">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
