import { Header } from "@/shared/components/Header/header";
import { SectionContent } from "@/shared/components/SectionContent/sectionContent";
import Styles from "./index.module.scss";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <SectionContent />
      </main>
    </div>
  )
}
