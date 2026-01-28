import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import techPattern from "@/assets/tech-pattern.jpg";

export default function CTA() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background with tech pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: `url(${techPattern})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      
      {/* Glowing orb */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(24 100% 50% / 0.1) 0%, transparent 60%)',
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Top line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mb-16"
          />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Готовы обсудить<br />
              <span className="text-gradient">ваш проект?</span>
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Отправьте чертежи или техническое задание — мы рассчитаем стоимость 
              и сроки выполнения в течение рабочего дня.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button asChild size="lg" className="gradient-primary glow-primary h-16 px-10 text-lg group">
                <Link to="/contacts">
                  Отправить заявку
                  <ArrowRight className="ml-3 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                <span className="text-sm">или позвоните:</span>
                <a 
                  href="tel:+74951234567" 
                  className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
                >
                  +7 (495) 123-45-67
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mt-16"
          />
        </div>
      </div>
    </section>
  );
}
