import Styles from "./card.module.scss";
import Image from "next/image";
import Thumbnail from "@/assets/image/thumbnail.png";
import { IVideo } from "@/shared/interfaces";
import DataJson from "@/pages/api/data.json";

export const Card = ({ data }: { data: IVideo[] }) => {
    const firstVideo = DataJson.data[0];
    return (
        <div>
            <div className={`grid grid-cols-3 gap-4 mx-auto w-full max-w-screen-xl ${Styles.boxContainer}`}>
                {data.length === 0 ? (
                    firstVideo.videos.map((index, key) => (
                        <div className={Styles.boxCard} key={key}>
                            <Image src={Thumbnail} alt="Thumbnail" width={0} height={0} priority />
                            <h3>{index.title}</h3>
                        </div>
                    ))
                ) : (
                    data.map((index, key) => (
                        <div className={Styles.boxCard} key={key}>
                            <Image src={Thumbnail} alt="Thumbnail" width={0} height={0} priority />
                            <h3>{index.title}</h3>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}