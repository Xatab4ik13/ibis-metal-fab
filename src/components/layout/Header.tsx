import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logoIbis from "@/assets/logo-ibis.png";

const services = [
  { label: "Гибка листового металла", path: "/services/bending" },
  { label: "Раскрой листового металла", path: "/services/cutting" },
  { label: "Токарно-фрезерные работы", path: "/services/milling" },
  { label: "Газо-плазменная резка", path: "/services/plasma" },
  { label: "Сварка", path: "/services/welding" },
  { label: "Порошковая покраска", path: "/services/painting" },
];

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Услуги", path: "/services", hasDropdown: true },
  { label: "Контакты", path: "/contacts" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/services") {
      return location.pathname.startsWith("/services");
    }
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar - white with contact info */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logoIbis} 
                alt="ООО ИБИС" 
                className="h-14 md:h-16 w-auto"
              />
            </Link>

            {/* Right side - phone & CTA */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="tel:89017449440"
                className="flex items-center gap-2 text-gray-700 hover:text-primary transition-colors font-medium"
              >
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-lg">8 (901) 744-94-40</span>
              </a>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white font-medium px-6 h-11">
                <Link to="/contacts">Оставить заявку</Link>
              </Button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden p-2 text-gray-900"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation bar - dark */}
      <nav className="hidden md:block bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-8 h-14">
            {navItems.map((item) => (
              <div
                key={item.path}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setIsServicesOpen(true)}
                onMouseLeave={() => item.hasDropdown && setIsServicesOpen(false)}
              >
                <Link
                  to={item.path}
                  className={`flex items-center gap-1 px-4 py-4 text-sm font-bold uppercase tracking-wide transition-colors ${
                    isActive(item.path)
                      ? "text-primary"
                      : "text-foreground hover:text-primary"
                  }`}
                >
                  {item.label}
                  {item.hasDropdown && (
                    <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {/* Dropdown for services */}
                {item.hasDropdown && (
                  <AnimatePresence>
                    {isServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 w-72 bg-card border border-border shadow-xl rounded-lg overflow-hidden z-50"
                      >
                        <div className="py-2">
                          {services.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className={`block px-5 py-3 text-sm transition-colors ${
                                location.pathname === service.path
                                  ? "text-primary bg-primary/5"
                                  : "text-foreground/80 hover:text-primary hover:bg-muted/50"
                              }`}
                            >
                              {service.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
              {navItems.map((item) => (
                <div key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => !item.hasDropdown && setIsMenuOpen(false)}
                    className={`flex items-center justify-between text-lg font-medium py-3 transition-colors ${
                      isActive(item.path)
                        ? "text-primary"
                        : "text-foreground"
                    }`}
                  >
                    {item.label}
                    {item.hasDropdown && (
                      <ChevronDown 
                        className={`w-5 h-5 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          setIsServicesOpen(!isServicesOpen);
                        }}
                      />
                    )}
                  </Link>
                  
                  {/* Mobile submenu */}
                  {item.hasDropdown && isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="pl-4 border-l-2 border-primary/30 ml-2 mb-2"
                    >
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          onClick={() => setIsMenuOpen(false)}
                          className={`block py-2 text-sm ${
                            location.pathname === service.path
                              ? "text-primary"
                              : "text-muted-foreground"
                          }`}
                        >
                          {service.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              
              <div className="pt-4 mt-2 border-t border-border">
                <a
                  href="tel:89017449440"
                  className="flex items-center gap-2 text-foreground mb-4"
                >
                  <Phone className="w-5 h-5 text-primary" />
                  8 (901) 744-94-40
                </a>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <Link to="/contacts" onClick={() => setIsMenuOpen(false)}>
                    Оставить заявку
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
