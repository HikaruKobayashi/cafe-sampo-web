import styles from "./../../../styles/Home.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <header className={styles.header}>
      <Image
        src="/images/cafe-sampo.png"
        width={50}
        height={50}
        alt="カフェさんぽ アイコン"
      />
    </header>
  );
}
