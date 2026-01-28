import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import ServicesPreview from "@/components/home/ServicesPreview";
import Equipment from "@/components/home/Equipment";
import CTA from "@/components/home/CTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <ServicesPreview />
      <Equipment />
      <CTA />
    </Layout>
  );
};

export default Index;
