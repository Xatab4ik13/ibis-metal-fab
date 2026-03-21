import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Equipment from "@/components/home/Equipment";
import CTA from "@/components/home/CTA";
import SEO from "@/components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEO
        title="Металлообработка в Москве | ООО АТМ — Гибка, Раскрой, Сварка, Покраска"
        description="ООО АТМ — профессиональная металлообработка в Москве и Балашихе. ✓ Гибка листового металла ✓ Координатная пробивка Trumpf ✓ Токарно-фрезерные работы ✓ Сварка MIG/MAG ✓ Порошковая покраска. Работаем с юрлицами."
        canonical="/"
        schema={{
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "ООО АТМ",
          "description": "Профессиональная металлообработка в Москве и Балашихе: гибка, раскрой, токарно-фрезерные работы, сварка, порошковая покраска",
          "url": "https://obrabotka-met.ru/",
          "telephone": "8 (901) 744-94-40",
          "email": "obrabotka-met@bk.ru",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "мкр Кучино, ул. Южная 17/1",
            "addressLocality": "Балашиха",
            "addressRegion": "Московская область",
            "postalCode": "143981",
            "addressCountry": "RU"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 55.7963,
            "longitude": 37.9581
          },
          "openingHours": "Mo-Fr 09:00-18:00",
          "foundingDate": "2015",
          "priceRange": "$$",
          "areaServed": ["Москва", "Московская область", "Балашиха"],
          "serviceType": ["Гибка металла", "Раскрой листового металла", "Токарные работы", "Фрезерные работы", "Сварка", "Порошковая покраска"]
        }}
      />
      <Hero />
      <ServicesPreview />
      <Equipment />
      <CTA />
    </Layout>
  );
};

export default Index;
