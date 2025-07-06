import { Header } from "@/components/shared/header";
import { MainHero } from "@/components/main/hero";
import { MainFeatures } from "@/components/main/features";
import { EdgeAIComparison } from "@/components/main/edge-ai-comparison";
import { EdgeAIApplications } from "@/components/main/edge-ai-applications";
import { EdgeAIWorkflow } from "@/components/main/edge-ai-workflow";
import { MainFooter } from "@/components/main/footer";
import { ScrollToTop } from "@/components/readit-later/scroll-to-top";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <MainHero />
      <MainFeatures />
      <EdgeAIComparison />
      <EdgeAIApplications />
      <EdgeAIWorkflow />
      <MainFooter />
      <ScrollToTop />
    </main>
  );
}
