import { Header } from "@/components/actionscam/header";
import { Hero } from "@/components/actionscam/hero";
import { Features } from "@/components/actionscam/features";
import { KeyPerks } from "@/components/actionscam/key-perks";
import { DeviceShowcase } from "@/components/actionscam/device-showcase";
import { Footer } from "@/components/actionscam/footer";
import { ScrollToTop } from "@/components/actionscam/scroll-to-top";

export default function ActionsCam() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <DeviceShowcase />
      <KeyPerks />
      <Footer />
      <ScrollToTop />
    </main>
  );
}