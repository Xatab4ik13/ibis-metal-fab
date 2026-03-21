import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Calendar } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { articles } from "@/data/articles";

export default function Articles() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Статьи о металлообработке",
    "description": "Полезные статьи о металлообработке: виды сварки, порошковая покраска, гибка и раскрой металла.",
    "url": "https://obrabotka-met.ru/articles",
  };

  return (
    <Layout>
      <SEO
        title="Статьи о металлообработке — Полезные материалы"
        description="Полезные статьи о металлообработке: как выбрать вид сварки, что такое порошковая покраска, технологии гибки и раскроя металла. Экспертные знания от ООО АТМ."
        canonical="/articles"
        schema={schema}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="mb-8">
            <Breadcrumbs items={[{ label: "Статьи" }]} />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                Полезное
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Статьи о<br />
              <span className="text-muted-foreground">металлообработке</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Делимся экспертными знаниями: технологии, материалы, советы по выбору 
              оптимального метода обработки для вашего проекта.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={`/articles/${article.slug}`}
                  className="group block"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-lg mb-5">
                    <img
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      {new Date(article.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                    {article.title}
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
                    {article.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                    Читать статью
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Остались вопросы?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Свяжитесь с нами — проконсультируем по технологиям и поможем выбрать 
            оптимальный способ обработки для вашего проекта.
          </p>
          <Link
            to="/contacts"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
          >
            Получить консультацию
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </Layout>
  );
}
