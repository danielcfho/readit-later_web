import { Header } from "@/components/shared/header";
import { MainHero } from "@/components/main/hero";
import { MainFeatures } from "@/components/main/features";
import { MainFooter } from "@/components/main/footer";
import { ScrollToTop } from "@/components/readit-later/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <MainHero />
      <MainFeatures />
      <MainFooter />
      <ScrollToTop />
    </main>
  );
}
