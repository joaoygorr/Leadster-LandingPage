import Styles from "./mainContent.module.scss";
import Data from "@/pages/api/data.json";
import { Card } from "./card/card";
import { useState } from "react";
import { IVideo } from "@/shared/interfaces";

export const MainContent = () => {
    const dataJson = Data.data;
    const [videos, setVideos] = useState<IVideo[]>([]);

    return (
        <section className="">
            <nav className={`mx-auto w-full max-w-screen-xl ${Styles.boxContainer}`}>
                <ul className={Styles.boxListButton}>
                    {dataJson.map((index, key) => {
                        return (
                            <li key={key}>
                                <a className="active" onClick={() => setVideos(index.videos)}>{index.label}</a>
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
        </section>
    )
}