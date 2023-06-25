import Styles from "./mainContent.module.scss";
import Data from "@/pages/api/data.json";
import { Card } from "./card/card";
import { useState } from "react";

export const MainContent = () => {
    const [videos, setVideos] = useState({});

    const dataJson = Data.data

    return (
        <section>
            <nav className={`mx-auto w-full max-w-screen-xl ${Styles.boxContainer}`}>
                <ul className={Styles.boxListButton}>
                    {dataJson.map((index, key) => {
                        return (
                            <li key={key}>
                                <button>{index.label}</button>
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

            <Card />

        </section>
    )
}