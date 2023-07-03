import Styles from "./footer.module.scss";
import { FaLinkedinIn, FaFacebookF, FaInstagram } from 'react-icons/fa';
import Image from "next/image";
import Logo from "@/assets/image/logo.png";

export const Footer = () => {
    return (
        <footer className={Styles.container}>
            <div className="mx-auto w-full max-w-screen-xl">
                <div className={Styles.boxImage}>
                    <Image src={Logo} alt="Logo leadster" width={250} height={34} priority />
                    <span className="text-sm ">Transformando visitantes em clientes.</span>
                </div>
                <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                    <div>
                        <h2 className="mb-6">Links Principais</h2>
                        <ul className={Styles.boxList}>
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Ferramenta</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Preços</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contato</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6">Cases</h2>
                        <ul className={Styles.boxList}>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Geração de Leads B2B</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Geração de Leads em Software</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Geração de Leads em Imobiliária</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Cases de Sucesso</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6">Materiais</h2>
                        <ul className={Styles.boxList}>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Parcerias com Agências</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Guia Definitivo do Marketing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Materiais Gratuitos</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6">Siga a Leadster</h2>
                        <ul className={Styles.boxIcons}>
                            <li>
                                <a href="https://www.linkedin.com/company/getleadster/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                            </li>

                            <li>
                                <a href="https://www.facebook.com/leadsterplatform" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/leadster.com.br/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                            </li>
                        </ul>
                        <p className="mt-1"><strong>E-mail:</strong> contato@leadster.com.br</p>
                        <p className="mt-3"><strong>Telefone:</strong> (42) 98828-9851</p>
                    </div>
                </div>
                <div className={`px-4 py-6 md:flex md:items-center md:justify-between ${Styles.boxCopy}`}>
                    <span className="">Copyright &copy; 2015 - 2022 Todos os direitos reservados | <a href="https://leadster.com.br/" target="_blank" rel="noopener noreferrer">Leadster</a></span>
                    <div className="flex mt-4 space-x-6 sm:justify-center md:mt-0">
                        <span>
                            Rua José Loureiro, 464 - Centro - Curitiba Pr - CEP: 80010-000 | Termos de uso
                        </span>
                    </div>
                </div>
            </div>
        </footer>

    )
};
