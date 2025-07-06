export const revalidate = 0;

import { getHomepage } from "@/libs/data";
import HeroSection from "@/components/HeroSection";
import ContentSection from "@/components/ContentSection";
import ImageOverlaySection from "@/components/ImageOverlaySection";
import ServicesSection from "@/components/ServicesSection";
import GallerySection from "@/components/GallerySection";
import PublicationsSection from "@/components/PublicationsSection";
import BlogSection from "@/components/BlogSection";
import FAQSection from "@/components/FAQSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactShowcaseSection from "@/components/ContactShowcaseSection";
import ContactFormSection from "@/components/ContactFormSection";

export default async function Home() {
  const data = await getHomepage();

  const { Hero, Content, Expertises, Gallery, SectionImageOverlay } = data;
  
  return (
    <main className="no-scrollbar w-screen">
      <HeroSection hero={Hero} />
      <ContentSection content={Content} />
      <ImageOverlaySection sectionImageOverlay={SectionImageOverlay} />
      <ServicesSection />
      <GallerySection gallery={Gallery} />
      <PublicationsSection />
      <BlogSection />
      <FAQSection />
      <ExpertiseSection expertises={Expertises} />
      <ContactShowcaseSection />
      <ContactFormSection />
    </main>
  );
}
