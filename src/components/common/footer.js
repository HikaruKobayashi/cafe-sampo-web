import styles from "./../../../styles/Home.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy;&nbsp;{new Date().getFullYear()}&nbsp;Kobayashi</p>
    </footer>
  );
}
