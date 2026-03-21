import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Clock, Calendar, Info, Lightbulb, AlertTriangle } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { articles, ArticleSection } from "@/data/articles";

function RenderSection({ section }: { section: ArticleSection }) {
  switch (section.type) {
    case "heading":
      if (section.level === 3) {
        return <h3 className="text-xl font-bold mt-8 mb-4">{section.text}</h3>;
      }
      return <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6">{section.text}</h2>;
    
    case "paragraph":
      return <p className="text-muted-foreground leading-relaxed text-lg mb-4">{section.text}</p>;
    
    case "list":
      return (
        <ul className="space-y-2 mb-6 ml-1">
          {section.items?.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      );
    
    case "table":
      return (
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                {section.headers?.map((header, i) => (
                  <th key={i} className="text-left p-3 bg-muted font-semibold text-sm border border-border">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows?.map((row, i) => (
                <tr key={i} className="hover:bg-muted/30 transition-colors">
                  {row.map((cell, j) => (
                    <td key={j} className={`p-3 text-sm border border-border ${j === 0 ? 'font-medium' : 'text-muted-foreground'}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    
    case "callout": {
      const icons = { info: Info, tip: Lightbulb, warning: AlertTriangle };
      const colors = {
        info: "border-blue-500/30 bg-blue-500/5",
        tip: "border-primary/30 bg-primary/5",
        warning: "border-yellow-500/30 bg-yellow-500/5",
      };
      const Icon = icons[section.variant || "info"];
      return (
        <div className={`flex gap-4 p-5 rounded-lg border mb-6 ${colors[section.variant || "info"]}`}>
          <Icon className="w-5 h-5 shrink-0 mt-0.5 text-primary" />
          <p className="text-sm leading-relaxed">{section.text}</p>
        </div>
      );
    }
    
    default:
      return null;
  }
}

export default function ArticleDetail() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find(a => a.slug === slug);
  const articleIndex = articles.findIndex(a => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Статья не найдена</h1>
            <Link to="/articles" className="text-primary hover:underline">
              Вернуться к списку статей
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "image": article.image,
    "datePublished": article.date,
    "author": {
      "@type": "Organization",
      "name": "ООО АТМ",
      "url": "https://obrabotka-met.ru"
    },
    "publisher": {
      "@type": "Organization",
      "name": "ООО АТМ",
      "url": "https://obrabotka-met.ru"
    }
  };

  const otherArticles = articles.filter(a => a.slug !== slug);

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.description}
        canonical={`/articles/${article.slug}`}
        schema={schema}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="mb-8">
              <Breadcrumbs items={[
                { label: "Статьи", path: "/articles" },
                { label: article.title }
              ]} />
            </div>
            
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="px-3 py-1.5 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                {article.category}
              </span>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-5 mb-6 leading-tight">
                {article.title}
              </h1>
              
              <div className="flex items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {article.readTime} чтения
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cover image */}
      <section className="pb-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img
                src={article.image}
                alt={article.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            {article.content.map((section, index) => (
              <RenderSection key={index} section={section} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Service CTA */}
      <section className="py-16 bg-card/50 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">Нужна {article.category.toLowerCase()}?</h2>
            <p className="text-muted-foreground mb-6">
              Мы выполняем все виды работ, описанные в этой статье. Отправьте чертежи — рассчитаем стоимость за 1 день.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/services/${article.relatedService}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors"
              >
                Подробнее об услуге
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary/30 font-medium transition-colors"
              >
                Заказать расчёт
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Articles */}
      {otherArticles.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-8">Другие статьи</h2>
              <div className="space-y-4">
                {otherArticles.map(other => (
                  <Link
                    key={other.slug}
                    to={`/articles/${other.slug}`}
                    className="group flex gap-5 items-center p-4 rounded-lg border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="w-20 h-20 rounded-lg overflow-hidden shrink-0">
                      <img src={other.image} alt={other.imageAlt} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-xs text-primary font-medium">{other.category}</span>
                      <h3 className="font-semibold group-hover:text-primary transition-colors line-clamp-2 text-sm mt-1">
                        {other.title}
                      </h3>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Prev/Next navigation */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto flex justify-between items-center py-8 border-t border-border">
            <Link
              to="/articles"
              className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Все статьи</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
