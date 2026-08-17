
import Hero from "@/components/Home/Hero"
import ExperienceSection from "@/components/Home/ExperienceSection"
import ExpertiseStripSection from "@/components/Home/ExpertiseStripSection"
import StepsSection from "@/components/Home/StepsSection"
import ProcessFaqSection from "@/components/Home/ProcessFaqSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import GallerySection from "@/components/Home/GallerySection"
import ServicesSection from "@/components/Home/ServicesSection"
import CarePathwaysSection from "@/components/Home/CarePathwaysSection"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"
import WhatsAppFloat from "@/components/Layout/WhatsAppFloat"


function page() {
  return (
    <div className="atelier-shell min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExpertiseStripSection />
        <CarePathwaysSection />
        <ExperienceSection />
        <ServicesSection />
        <GallerySection />
        <StepsSection />
        <ProcessFaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default page
