import Styles from "./card.module.scss";
import Data from "@/pages/api/data.json";
import Image from "next/image";
import Thumbnail from "@/assets/image/thumbnail.png";

type Props = {
    title: string,
    links: string,
    date: string
}

export const Card = ({ data }: any) => {
    const videos = Data.data[0];

    return (
        <div>
            <div className={`grid grid-cols-3 gap-4 mx-auto w-full max-w-screen-xl ${Styles.boxContainer}`}>
                {videos.videos.map((video, key) => {
                    return (
                        <div key={key}>
                            <Image src={Thumbnail} alt="Thumbnail" width={0} height={0} priority />
                            <h3>{video.title}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}