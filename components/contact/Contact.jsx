"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./Contact.module.css";
import talk from "/public/footer/talk.webp";
import mail from "/public/contact/email.webp";
import phone from "/public/contact/phone.webp";
import instagram from "/public/contact/instagram.webp";
import home from "/public/contact/home.webp";
import birth from "/public/contact/birth.webp";
import academic from "/public/contact/academic.webp";
import name from "/public/contact/name.webp";
import contact_doyi from "/public/contact/contact_doyi.webp";
import { useState } from "react";
import "@/src/app/styles/media.css";
import "@/src/app/styles/page.css";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <section id="contact" className={styles.contact}>
      {/* contact 이름 */}
      <h2 className={styles.contact_name}>Contact</h2>

      <div className={styles.contact_wrap}>
        <div className={styles.contact_img_wrap}>
          <Image
            className={styles.contact_doyi_img}
            src={contact_doyi}
            alt="contact_doyi"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        </div>
        <div
          className={isHovered ? styles.display_none : styles.contact_text_wrap}
        >
          <div className={styles.contact_text_box}>
            <div className={styles.contact_text_title}>
              <Image className={styles.phone} src={phone} alt="phone" />
              <h3>전화번호</h3>
            </div>
            <p>010-7277-7361</p>
            <div className={styles.contact_text_title}>
              <Image className={styles.mail} src={mail} alt="mail" />
              <h3>이메일</h3>
            </div>
            <p>doyi9917@naver.com</p>
            <div className={styles.contact_text_title}>
              <Image className={styles.talk} src={talk} alt="talk" />
              <h3>카카오톡</h3>
            </div>
            <Link href="https://open.kakao.com/o/sevgyHWf" target="_blank">
              <p>→Doyi9917</p>
            </Link>
            <div className={styles.contact_text_title}>
              <Image
                className={styles.instagram}
                src={instagram}
                alt="instagram"
              />
              <h3>인스타그램</h3>
            </div>
            <Link
              href="https://instagram.com/2_doooo_2?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
              target="_blank"
            >
              <p>→2_doooo_2</p>
            </Link>
          </div>
        </div>
        <div
          className={isHovered ? styles.contact_info_wrap : styles.display_none}
        >
          <div className={styles.contact_text_box}>
            <div className={styles.contact_text_title}>
              <Image className={styles.name} src={name} alt="name" />
              <h3>이름</h3>
            </div>
            <p>이도이</p>
            <div className={styles.contact_text_title}>
              <Image className={styles.birth} src={birth} alt="birth" />
              <h3>생년월일</h3>
            </div>
            <p>1999.01.07</p>
            <div className={styles.contact_text_title}>
              <Image
                className={styles.academic}
                src={academic}
                alt="academic"
              />
              <h3>학력</h3>
            </div>
            <p>
              국민대(국어국문학과(주)/
              <br />
              소프트웨어미디어융합전공(부))
            </p>
            <div className={styles.contact_text_title}>
              <Image className={styles.home} src={home} alt="home" />
              <h3>거주지</h3>
            </div>
            <p>인천 미추홀구</p>
          </div>
        </div>
      </div>
    </section>
  );
}
