import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";
import "../../src/app/styles/page.css";
import "../../src/app/styles/media.css";

import footer_github from "/public/footer/footer_github.webp";
import footer_t_story from "/public/footer/footer_t_story.webp";
import talk from "/public/footer/talk.webp";
import instagram from "/public/contact/instagram.webp";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_inner}>
        <p className={styles.footer_Copyright}>Copyright © 2024 Leedoyi</p>
        <p className={styles.footer_mail}>
          꽃을 피울 개발자 이도이가 궁금하다면 메일을 보내주세요 →
          doyi9917@naver.com
        </p>

        <div className={styles.footer_link_wrap}>
          <Link
            href="https://github.com/doyi0107"
            className={`${styles.footer_link_github} ${styles.footer_link}`}
            target="blank"
          >
            <Image
              className={`${styles.footer_github} ${styles.img}`}
              src={footer_github}
              alt="footer_github"
            />
          </Link>
          <Link
            href="https://2-doooo-2.tistory.com/"
            target="blank"
            className={`${styles.footer_link_tstory} ${styles.footer_link}`}
          >
            <Image
              className={`${styles.footer_t_story} ${styles.img}`}
              src={footer_t_story}
              alt="footer_t_story"
            />
          </Link>
          <Link
            href="https://open.kakao.com/o/sevgyHWf"
            target="blank"
            className={`${styles.footer_link_kakao} ${styles.footer_link}`}
          >
            <Image
              className={`${styles.talk} ${styles.img}`}
              src={talk}
              alt="talk"
            />
          </Link>
          <Link
            href="https://instagram.com/2_doooo_2?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
            target="blank"
            className={`${styles.footer_link_kakao} ${styles.footer_link}`}
          >
            <Image
              className={`${styles.instagram} ${styles.img}`}
              src={instagram}
              alt="instagram"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
