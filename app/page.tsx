import FAQs from "@/components/Home/FAQs"
import Hero from "@/components/Home/Hero"
import HowWeWork from "@/components/Home/HowWeWork"
import Services from "@/components/Home/Services"
import Testimonials from "@/components/Home/Testimonials"
import Footer from "@/components/Layout/Footer"
import Header from "@/components/Layout/Header"
import WhatsAppFloat from "@/components/Layout/WhatsAppFloat"


function page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <Hero />
        <Services />
        <HowWeWork />
        <Testimonials />
        <FAQs />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}

export default page
