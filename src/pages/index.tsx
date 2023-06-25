import { Header } from "@/shared/components/Header/header";
import { SectionHeader } from "@/shared/components/SectionHeader/sectionHeader";
import { Footer } from "@/shared/components/Footer/footer";
import { MainContent } from "@/shared/components/MainContent/mainContent";
import { SectionFooter } from "@/shared/components/SectionFooter/sectionFooter";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SectionHeader />
        <MainContent />
        <SectionFooter />
      </main>
      <Footer />
    </div>
  )
}
