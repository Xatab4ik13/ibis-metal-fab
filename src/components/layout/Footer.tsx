import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logoIbis from "@/assets/logo-ibis.png";

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
            <div className="mb-6">
              <img 
                src={logoIbis} 
                alt="ООО ИБИС" 
                className="h-14 w-auto"
              />
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

          {/* Map */}
          <div>
            <h3 className="font-semibold text-foreground mb-6">На карте</h3>
            <div className="aspect-square rounded-lg bg-muted industrial-border overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?pt=37.976944,55.761944&z=16&l=map"
                className="w-full h-full"
                loading="lazy"
                title="Карта - ООО ИБИС"
                allowFullScreen
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
