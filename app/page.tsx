
import Hero from "@/components/Home/Hero"
import ExperienceSection from "@/components/Home/ExperienceSection"
import ResultsSection from "@/components/Home/ResultsSection"
import StepsSection from "@/components/Home/StepsSection"
import ProcessFaqSection from "@/components/Home/ProcessFaqSection"
import TestimonialsSection from "@/components/Home/TestimonialsSection"
import GallerySection from "@/components/Home/GallerySection"
import Header from "@/components/Layout/Header"
import Footer from "@/components/Layout/Footer"


function page() {
  return (
    <div className="atelier-shell min-h-screen">
      <Header />
      <main>
        <Hero />
        <ExperienceSection />
        <GallerySection />
        <ResultsSection />
        <StepsSection />
        <ProcessFaqSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}

export default page
