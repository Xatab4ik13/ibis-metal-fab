import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Layout from "@/components/layout/Layout";

import bentProfiles from "@/assets/gallery/bent-profiles.jpg";
import paintedOrange from "@/assets/gallery/painted-orange.jpg";
import whiteFrames from "@/assets/gallery/white-frames.jpg";
import metalBracket from "@/assets/gallery/metal-bracket.jpg";
import cutParts from "@/assets/gallery/cut-parts.jpg";
import largePanels from "@/assets/gallery/large-panels.jpg";
import milledPart from "@/assets/gallery/milled-part.jpg";

// Import existing product images
import redBoxes from "@/assets/products/red-boxes.jpg";
import cabinetFrame from "@/assets/products/cabinet-frame.jpg";
import perforatedBox from "@/assets/products/perforated-box.jpg";
import metalBrackets from "@/assets/products/metal-brackets.jpg";

const galleryImages = [
  { src: bentProfiles, title: "Гнутые профили", category: "Гибка" },
  { src: paintedOrange, title: "Порошковая покраска RAL 2004", category: "Покраска" },
  { src: whiteFrames, title: "Сварные каркасы", category: "Сварка" },
  { src: metalBracket, title: "Корпусная деталь", category: "Гибка" },
  { src: cutParts, title: "Детали после раскроя", category: "Раскрой" },
  { src: largePanels, title: "Крупногабаритные панели", category: "Раскрой" },
  { src: milledPart, title: "Фрезерованная деталь", category: "Фрезеровка" },
  { src: redBoxes, title: "Окрашенные корпуса", category: "Покраска" },
  { src: cabinetFrame, title: "Каркас шкафа", category: "Сварка" },
  { src: perforatedBox, title: "Перфорированный корпус", category: "Раскрой" },
  { src: metalBrackets, title: "Кронштейны", category: "Гибка" },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Все");

  const categories = ["Все", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages =
    activeCategory === "Все"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const goToPrevious = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
  };

  const goToNext = () => {
    if (selectedImage === null) return;
    setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="pt-32 md:pt-40 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-primary" />
              <span className="text-sm font-medium tracking-[0.2em] text-primary uppercase">
                Наши работы
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Галерея<br />
              <span className="text-muted-foreground">продукции</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl">
              Примеры выполненных работ — от раскроя и гибки до покраски готовых изделий.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="pb-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-medium text-primary uppercase tracking-wider mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-lg font-bold text-white">
                        {image.title}
                      </h3>
                    </div>

                    {/* Corner decorations */}
                    <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Image */}
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="max-w-5xl max-h-[80vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {filteredImages[selectedImage].category}
                </span>
                <h3 className="text-xl font-bold text-white mt-1">
                  {filteredImages[selectedImage].title}
                </h3>
              </div>
            </motion.div>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 p-3 text-white/70 hover:text-white transition-colors bg-white/10 hover:bg-white/20 rounded-full"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Counter */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm">
              {selectedImage + 1} / {filteredImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
}
