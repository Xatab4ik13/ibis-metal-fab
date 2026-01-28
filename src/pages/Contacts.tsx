import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send, Paperclip, X, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Layout from "@/components/layout/Layout";

export default function Contacts() {
  const { toast } = useToast();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [files, setFiles] = useState<File[]>([]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFiles([...files, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: "Адрес",
      value: "Московская область, г. Балашиха, мкр Кучино, ул. Южная 17/1",
      href: null,
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "8 (901) 744-94-40",
      href: "tel:89017449440",
    },
    {
      icon: Mail,
      label: "Email",
      value: "obrabotka-met@bk.ru",
      href: "mailto:obrabotka-met@bk.ru",
    },
    {
      icon: Clock,
      label: "Время работы",
      value: "Пн-Пт: 9:00-18:00, Сб: 10:00-15:00",
      href: null,
    },
  ];

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
              Контакты
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Свяжитесь с нами
            </h1>
            <p className="text-lg text-muted-foreground">
              Отправьте заявку с чертежами или техническим заданием — 
              мы рассчитаем стоимость и свяжемся с вами в течение рабочего дня.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="rounded-2xl bg-card industrial-border p-8">
                <h2 className="text-2xl font-bold mb-6">Форма обратной связи</h2>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Заявка отправлена!</h3>
                    <p className="text-muted-foreground mb-6">
                      Мы получили вашу заявку и свяжемся с вами в ближайшее время.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} variant="outline">
                      Отправить ещё
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Ваше имя
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Иван Иванов"
                        required
                        className="bg-background border-border"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="text-sm font-medium mb-2 block">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="email@example.com"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                          Телефон *
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+7 (___) ___-__-__"
                          required
                          className="bg-background border-border"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Сообщение
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Опишите ваш проект или задайте вопрос..."
                        rows={5}
                        className="bg-background border-border resize-none"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="text-sm font-medium mb-2 block">
                        Прикрепить файлы
                      </label>
                      <div
                        onClick={() => fileInputRef.current?.click()}
                        className="border-2 border-dashed border-border rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors"
                      >
                        <Paperclip className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Нажмите для загрузки или перетащите файлы
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">
                          PDF, DWG, DXF, STEP, JPG, PNG до 10 МБ
                        </p>
                        <input
                          ref={fileInputRef}
                          type="file"
                          multiple
                          onChange={handleFileChange}
                          className="hidden"
                          accept=".pdf,.dwg,.dxf,.step,.stp,.jpg,.jpeg,.png"
                        />
                      </div>

                      {/* File List */}
                      {files.length > 0 && (
                        <div className="mt-4 space-y-2">
                          {files.map((file, index) => (
                            <div
                              key={index}
                              className="flex items-center justify-between p-3 rounded-lg bg-muted"
                            >
                              <div className="flex items-center gap-3">
                                <Paperclip className="w-4 h-4 text-muted-foreground" />
                                <span className="text-sm truncate max-w-[200px]">
                                  {file.name}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {(file.size / 1024 / 1024).toFixed(2)} МБ
                                </span>
                              </div>
                              <button
                                type="button"
                                onClick={() => removeFile(index)}
                                className="p-1 hover:text-destructive transition-colors"
                              >
                                <X className="w-4 h-4" />
                              </button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full gradient-primary glow-primary"
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <span className="animate-spin mr-2">⏳</span>
                          Отправка...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Отправить заявку
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Нажимая кнопку, вы соглашаетесь с{" "}
                      <a href="/privacy" className="text-primary hover:underline">
                        политикой конфиденциальности
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="p-5 rounded-xl bg-card industrial-border"
                  >
                    <info.icon className="w-6 h-6 text-primary mb-3" />
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground font-medium hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                ))}
              </div>

              {/* Map */}
              <div className="rounded-2xl overflow-hidden industrial-border aspect-[4/3]">
                <iframe
                  src="https://yandex.ru/map-widget/v1/?pt=37.976944,55.761944&z=16&l=map"
                  className="w-full h-full"
                  loading="lazy"
                  title="Карта - ООО ИБИС"
                  allowFullScreen
                />
              </div>

              {/* Quick Contact */}
              <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/20">
                <h3 className="font-semibold mb-2">Быстрая связь</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Нужна срочная консультация? Позвоните нам напрямую.
                </p>
                <a
                  href="tel:89017449440"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  8 (901) 744-94-40
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
