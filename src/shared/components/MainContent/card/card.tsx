import Styles from "./card.module.scss";
import Image from "next/image";
import Thumbnail from "@/assets/image/thumbnail.png";
import { IVideo } from "@/shared/interfaces";
import { Modal } from "./modal/modal";
import { useState } from "react";

export const Card = ({ data }: { data: IVideo[] }) => {
    const [showVideo, setShowVideo] = useState<IVideo>();

    const showModal = (index: IVideo) => {
        setShowVideo(index);
        const modal = document.querySelector("#modal");
        modal?.classList.remove("hidden");
    };

    return (
        <div>
            <div className={`flex justify-center items-center flex-col mx-auto w-full max-w-screen-xl ${Styles.boxContainer}`}>
                <div className={`grid lg:grid-cols-3 md:grid-cols-2 gap-4`}>
                    {data.map((index, key) => (
                        <div key={key} className={Styles.boxCard} onClick={() => showModal(index)}>
                            <Image src={Thumbnail} alt="Thumbnail" width={385} height={0} priority />
                            <h3 className="p-3">{index.title}</h3>
                        </div>
                    ))}
                </div>
                <div className={Styles.line}></div>

                <nav aria-label="Page navigation example" className="my-5">
                    <ul className="inline-flex -space-x-px">
                        <li>
                            <p className="px-3 cursor-pointer py-2 ml-0 leading-tight text-black">Página</p>
                        </li>
                        <li>
                            <p className="px-3 cursor-pointer py-2 ml-0 leading-tight text-black  border border-gray-300 rounded">1</p>
                        </li>
                        <li>
                            <p className="px-3 cursor-pointer py-2 ml-0 leading-tight text-black">2</p>
                        </li>
                        <li>
                            <p className="px-3 cursor-pointer py-2 ml-0 leading-tight text-black ">3</p>
                        </li>
                    </ul>
                </nav>
            </div>
            <Modal data={showVideo} />
        </div>
    )
}