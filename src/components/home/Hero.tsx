import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import heroImage from "@/assets/hero-industrial.jpg";
import techPattern from "@/assets/tech-pattern.jpg";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden">
      {/* Full-screen background image with parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Лазерная резка металла"
          className="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background" />
      </motion.div>

      {/* Tech pattern overlay */}
      <div 
        className="absolute inset-0 z-[1] opacity-10 mix-blend-overlay"
        style={{ backgroundImage: `url(${techPattern})`, backgroundSize: 'cover' }}
      />

      {/* Animated grid lines */}
      <div className="absolute inset-0 z-[2]">
        <svg className="w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="hsl(24 100% 50% / 0.3)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Glowing accent elements */}
      <motion.div
        animate={{ 
          opacity: [0.3, 0.6, 0.3],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, hsl(24 100% 50% / 0.15) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Main content */}
      <motion.div 
        style={{ opacity }}
        className="relative z-10 min-h-screen flex flex-col justify-center"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl">
            {/* Company tag */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
              <span className="text-sm font-medium tracking-[0.3em] text-primary uppercase">
                ООО ИБИС
              </span>
            </motion.div>

            {/* Main headline - split design */}
            <div className="relative mb-8">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] tracking-tight"
              >
                <span className="block text-foreground">Высокоточная</span>
                <span className="block text-gradient mt-2">металлообработка</span>
              </motion.h1>

              {/* Decorative element */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="absolute -right-4 top-1/2 w-32 h-0.5 bg-gradient-to-r from-primary to-transparent origin-left hidden lg:block"
              />
            </div>

            {/* Stats inline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-8 mb-12"
            >
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">18+</span>
                <span className="text-sm text-muted-foreground">лет<br/>на рынке</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">500+</span>
                <span className="text-sm text-muted-foreground">проектов<br/>ежегодно</span>
              </div>
              <div className="w-px h-12 bg-border hidden sm:block" />
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">Trumpf</span>
                <span className="text-sm text-muted-foreground">немецкое<br/>оборудование</span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
            >
              Гибка, раскрой, сварка, токарно-фрезерные работы и порошковая покраска. 
              Производим детали любой сложности от единичных изделий до серийных партий.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button asChild size="lg" className="gradient-primary glow-primary h-14 px-8 text-base group">
                <Link to="/contacts">
                  Получить расчёт
                  <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base border-primary/30 hover:bg-primary/10 hover:border-primary/50">
                <Link to="/services">Наши услуги</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-0.5 h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}
