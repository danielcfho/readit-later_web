import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { KeyPerks } from "@/components/landing/key-perks";
import { DeviceShowcase } from "@/components/landing/device-showcase";
import { Footer } from "@/components/landing/footer";
import { ScrollToTop } from "@/components/landing/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <KeyPerks />
      <DeviceShowcase />
      <Footer />
      <ScrollToTop />
    </main>
  );
}