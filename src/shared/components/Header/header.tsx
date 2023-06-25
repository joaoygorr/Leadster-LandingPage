import Image from "next/image";
import LogoLeadster from "@/assets/image/logo.png";
import Styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={Styles.container}>
      <Image
        src={LogoLeadster}
        alt="Logo leadster"
        className={` m-8 ${Styles.img}`}
        width={0}
        height={0}
        priority
      />
    </header>
  )
};
