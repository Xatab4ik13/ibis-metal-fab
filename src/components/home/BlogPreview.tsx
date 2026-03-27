import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { articles } from "@/data/articles";

export default function BlogPreview() {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                Блог
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Полезные статьи
            </h2>
          </div>
          <Link
            to="/articles"
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
          >
            Все статьи
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link to={`/articles/${article.slug}`} className="group block">
                <div className="aspect-[16/9] overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image}
                    alt={article.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground mb-2">
                  <span className="px-2 py-0.5 bg-primary/10 text-primary rounded text-xs font-medium">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </span>
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors leading-tight line-clamp-2">
                  {article.title}
                </h3>
              </Link>
            </motion.article>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link
            to="/articles"
            className="inline-flex items-center gap-2 text-sm font-medium text-primary"
          >
            Все статьи
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
