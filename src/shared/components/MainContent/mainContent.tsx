import Styles from "./mainContent.module.scss";
import Data from "@/pages/api/data.json";
import { Card } from "./card/card";
import { useState, useEffect } from "react";
import { IVideo } from "@/shared/interfaces";

export const MainContent = () => {
    const dataJson = Data.data;
    const [videos, setVideos] = useState<IVideo[]>([]);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleAnchorClick = (index: number) => {
        setVideos(dataJson[index].videos);
        setActiveIndex(index);
    };

    useEffect(() => {
        setVideos(dataJson[activeIndex].videos);
    }, [activeIndex]);

    return (
        <section className="my-10">
            <nav className={`mx-auto w-full max-w-screen-xl my-10 px-5 ${Styles.boxContainer}`}>
                <ul className={Styles.boxListButton}>
                    {dataJson.map((index, key) => {
                        const isActive = activeIndex === key;
                        return (
                            <li key={key}>
                                <a className={`${isActive ? `${Styles.active}` : ""}`} onClick={() => handleAnchorClick(key)}>{index.label}</a>
                            </li>
                        )
                    })}
                </ul>

                <div className={Styles.boxOrder}>
                    Ordernar por
                    <select>
                        <option value="Data de Publicação">Data de Publicação</option>
                    </select>
                </div>
            </nav>
            <Card data={videos} />
        </section >
    )
}