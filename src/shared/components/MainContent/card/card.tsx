import Styles from "./card.module.scss";
import Image from "next/image";
import Thumbnail from "@/assets/image/thumbnail.png";
import { IVideo } from "@/shared/interfaces";

export const Card = ({ data }: { data: IVideo[] }) => {
    return (
        <div className={`flex justify-center items-center flex-col mx-auto w-full max-w-screen-xl ${Styles.boxContainer}`}>
            <div className={`grid lg:grid-cols-3 md:grid-cols-2 gap-4`}>
                {data.map((index, key) => (
                    <div key={key}>
                        <Image src={Thumbnail} alt="Thumbnail" width={0} height={0} priority />
                        <h3>{index.title}</h3>
                    </div>
                ))}
            </div>
            <div className={Styles.line}></div>

            <nav aria-label="Page navigation example" className="my-10">
                <ul className="inline-flex -space-x-px">
                    <li>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-black">Página</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-black  border border-gray-300 rounded">1</a>
                    </li>
                    <li>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-black">2</a>
                    </li>
                    <li>
                        <a href="#" aria-current="page" className="px-3 py-2 ml-0 leading-tight text-black ">3</a>
                    </li>
                </ul>
            </nav>

        </div>
    )
}