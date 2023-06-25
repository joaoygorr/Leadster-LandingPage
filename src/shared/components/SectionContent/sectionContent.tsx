import Styles from "./sectionContent.module.scss";
import Image from "next/image";
import Img from "@/assets/image/asset-header.png";

export const SectionContent = () => {
    return (
        <section className={Styles.boxContent}>
            <span>webinars exclusivos</span>
            <div className={Styles.boxTitles}>
                <h3>menos conversinha,</h3>
                <h2>mais conversão</h2><Image src={Img} alt="Img" />
            </div>
            <div className={Styles.boxLine}></div>
            <p>Conheça as estratégias que <strong>mudaram o jogo</strong> e como aplicá-las no seu negócio</p>
        </section>
    )
}