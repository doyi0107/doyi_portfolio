import Link from "next/link";
import Image from "next/image";
import nav_tree from "/public/header/nav_tree.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.nav_left_box}>
      <Link href="#intro">
        <Image className={styles.nav_tree} src={nav_tree} alt="nav_tree" />
      </Link>
      <Link href="#main_sub">
        <p className={styles.nav_name}>DOY.</p>
      </Link>
    </div>
  );
}
