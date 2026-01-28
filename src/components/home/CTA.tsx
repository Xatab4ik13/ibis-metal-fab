import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, FileText, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Готовы обсудить{" "}
            <span className="text-gradient">ваш проект?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto">
            Отправьте чертежи или техническое задание — мы рассчитаем стоимость 
            и сроки выполнения в течение рабочего дня.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="gradient-primary glow-primary group">
              <Link to="/contacts">
                <FileText className="mr-2 w-5 h-5" />
                Отправить заявку
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-border">
              <a href="tel:+74951234567">
                <Phone className="mr-2 w-5 h-5" />
                +7 (495) 123-45-67
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-muted-foreground">
            Или напишите нам на{" "}
            <a href="mailto:info@ibis-metal.ru" className="text-primary hover:underline">
              info@ibis-metal.ru
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
