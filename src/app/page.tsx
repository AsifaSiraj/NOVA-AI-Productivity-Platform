import { DemoModalProvider } from "@/components/landing/demo-modal-context";
import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { TrustedBy } from "@/components/landing/trusted-by";
import { Features } from "@/components/landing/features";
import { About } from "@/components/landing/about";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Stats } from "@/components/landing/stats";
import { Solutions } from "@/components/landing/solutions";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { Faq } from "@/components/landing/faq";
import { FinalCta } from "@/components/landing/final-cta";
import { Footer } from "@/components/landing/footer";
import { BackToTop } from "@/components/landing/back-to-top";
import { DemoModal } from "@/components/landing/demo-modal";

export default function Home() {
  return (
    <DemoModalProvider>
      <div id="top" className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <TrustedBy />
          <Features />
          <About />
          <HowItWorks />
          <Stats />
          <Solutions />
          <Testimonials />
          <Pricing />
          <Faq />
          <FinalCta />
        </main>
        <Footer />
        <BackToTop />
        <DemoModal />
      </div>
    </DemoModalProvider>
  );
}
