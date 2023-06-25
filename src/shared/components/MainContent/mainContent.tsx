import Styles from "./mainContent.module.scss";
import Data from "@/pages/api/data.json";

export const MainContent = () => {
    const dataJson = Data.data

    return (
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
    )
}