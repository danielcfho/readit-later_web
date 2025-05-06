import { Header } from "@/components/apps/readit-later/header";
import { Hero } from "@/components/apps/readit-later/hero";
import { Features } from "@/components/apps/readit-later/features";
import { KeyPerks } from "@/components/apps/readit-later/key-perks";
import { DeviceShowcase } from "@/components/apps/readit-later/device-showcase";
import { Footer } from "@/components/apps/readit-later/footer";
import { ScrollToTop } from "@/components/apps/readit-later/scroll-to-top";

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