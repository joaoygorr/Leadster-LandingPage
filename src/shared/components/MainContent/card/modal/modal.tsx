import { IVideo } from "@/shared/interfaces";
import { BsCloudArrowDown } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import Styles from "./modal.module.scss";

export const Modal = ({ data }: { data: IVideo | undefined }) => {
    const handleClose = () => {
        const modal = document.querySelector("#modal");
        modal?.classList.add("hidden");
    };

    return (
        <div id="modal" className="flex justify-center items-center bg-gradient-to-tl hidden from-slate-400 from-100%% fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div className="relative w-full max-w-xl max-h-full">
                <div className="relative bg-white rounded-lg shadow">
                    <div className="flex items-center justify-between p-5 border-b rounded-t border-x-gray-500">
                        <h2 className={Styles.webinar}>Webinar: </h2>
                        <h3 className={"text-xl font-medium text-black"}>
                            {data?.title}
                        </h3>
                        <button onClick={() => handleClose()} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="small-modal">
                            <IoMdClose className="text-xl" />
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className={Styles.boxIframe}>
                        <iframe src={data?.link} className={Styles.frame}></iframe>
                    </div>

                    <div>
                        <h3 className="p-2 font-medium">Descrição</h3>
                    </div>
                    <div className="p-6 space-y-6 border-t border-x-gray-500">
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, quisquam a. Tempore reprehenderit ipsum mollitia voluptatem aperiam dignissimos fugit dolores quasi nulla dolorem placeat veniam, minima id libero natus! Voluptas!
                        </p>
                    </div>
                    <div>
                        <h3 className="p-2 font-medium">Downloads</h3>
                    </div>
                    <div className={`space-x-2 border-x-gray-500 rounded-b ${Styles.boxDownloads}`}>
                        <button type="button" className={`${Styles.spreadsheet} font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`}>
                            <BsCloudArrowDown className="w-4 h-4 mr-2 -ml-1" />
                            Spreadsheet.xls
                        </button>
                        <button type="button" className={`${Styles.document} font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2 `}>
                            <BsCloudArrowDown className="w-4 h-4 mr-2 -ml-1" />
                            Document.doc
                        </button>
                        <button type="button" className={`${Styles.presentation} font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2`}>
                            <BsCloudArrowDown className="w-4 h-4 mr-2 -ml-1" />
                            Presentation.ppt
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}