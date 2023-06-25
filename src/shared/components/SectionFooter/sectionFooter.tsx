import Styles from "./sectionFooter.module.scss";
import Image from "next/image";
import Graph from "@/assets/image/comparativo_img_CTA.png";
import Selo from "@/assets/image/selo_RD.png";
import Card from "@/assets/image/no-card-dark.webp";
import Rating from "@/assets/image/rating.webp";

export const SectionFooter = () => {
    return (
        <section className={`${Styles.container} mb-10`}>
            <div className={`grid grid-cols-2 p-5 mx-auto w-full max-w-screen-xl ${Styles.boxContent}`}>
                <div className="boxImage">
                    <Image src={Graph} alt="gráfico" />
                </div>
                <div className={Styles.boxInfos}>
                    <h2 className="font-medium">Pronto para triplicar sua</h2>
                    <h2 className="font-bold">Geração de Leads?</h2>
                    <span>Criação e ativação em <strong>4 minutos.</strong></span>
                    <div className={Styles.boxLine}></div>
                    <div className={Styles.boxView}>
                        <button>VER DEMONSTRAÇÃO</button>
                        <Image src={Selo} alt="Selo" />
                    </div>
                    <div className="flex items-center">
                        <Image src={Card} alt="no-card" /><strong className="mx-1">Não</strong> é necessário Cartão de Crédito | <Image src={Rating} alt="avaliação" className="mx-2" /> <strong>4.9</strong>/5 de satisfação
                    </div>
                </div>
            </div>
        </section>
    )
}