import { Header } from "@/components/readit-later/header";
import { Hero } from "@/components/readit-later/hero";
import { Features } from "@/components/readit-later/features";
import { KeyPerks } from "@/components/readit-later/key-perks";
import { DeviceShowcase } from "@/components/readit-later/device-showcase";
import { Footer } from "@/components/readit-later/footer";
import { ScrollToTop } from "@/components/readit-later/scroll-to-top";

export default function ReadItLater() {
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