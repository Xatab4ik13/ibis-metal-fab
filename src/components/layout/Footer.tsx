import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const services = [
  { label: "Гибка листового металла", path: "/services/bending" },
  { label: "Раскрой листового металла", path: "/services/cutting" },
  { label: "Токарно-фрезерные работы", path: "/services/milling" },
  { label: "Сварка", path: "/services/welding" },
  { label: "Порошковая покраска", path: "/services/painting" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center font-bold text-primary-foreground text-lg">
                И
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-foreground">ООО ИБИС</span>
                <span className="text-xs text-muted-foreground tracking-widest uppercase">
                  Металлообработка
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Профессиональная металлообработка на высокоточном оборудовании Trumpf. 
              Работаем с 2005 года.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Услуги</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Московская область, г. Балашиха<br />мкр Кучино, ул. Южная 17/1
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Phone className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="tel:89017449440"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  8 (901) 744-94-40
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm">
                <Mail className="w-4 h-4 text-primary shrink-0" />
                <a
                  href="mailto:obrabotka-met@bk.ru"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  obrabotka-met@bk.ru
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-muted-foreground">
                  Пн-Пт: 9:00 - 18:00<br />
                  Сб: 10:00 - 15:00
                </span>
              </li>
            </ul>
          </div>

          {/* Map placeholder */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">На карте</h3>
            <div className="aspect-square rounded-lg bg-muted industrial-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.2!2d37.6173!3d55.7558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjAiTiAzN8KwMzcnMDIuMyJF!5e0!3m2!1sru!2sru!4v1"
                className="w-full h-full grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                loading="lazy"
                title="Карта"
              />
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ООО ИБИС. Все права защищены.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Политика конфиденциальности
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
