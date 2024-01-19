import Link from "next/link";
import Image from "next/image";
import footer_github from "/public/footer_github.webp";
import footer_t_story from "/public/footer_t_story.webp";
import talk from "/public/talk.webp";
import instagram from "/public/instagram.webp";
import "./styles/page.modul.css";

export default function Archiving() {
  return (
    <>
      <footer>
        <p className="footer_Copyright">Copyright © 2024 Leedoyi</p>
        <p className="footer_mail">
          꽃을 피울 개발자 이도이가 궁금하다면 메일을 보내주세요 →
          doyi9917@naver.com
        </p>

        <div className="footer_link_wrap">
          <Link
            href="https://github.com/doyi0107"
            className="footer_link_github footer_link"
            target="blank"
          >
            <Image
              className="footer_github"
              src={footer_github}
              alt="footer_github"
            />
          </Link>
          <Link
            href="https://2-doooo-2.tistory.com/"
            target="blank"
            className="footer_link_tstory footer_link"
          >
            <Image
              className="footer_t_story"
              src={footer_t_story}
              alt="footer_t_story"
            />
          </Link>
          <Link
            href="https://open.kakao.com/o/sevgyHWf"
            target="blank"
            className="footer_link_kakao footer_link"
          >
            <Image className="talk" src={talk} alt="talk" />
          </Link>
          <Link
            href="https://instagram.com/2_doooo_2?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
            target="blank"
            className="footer_link_kakao footer_link"
          >
            <Image className="instagram" src={instagram} alt="instagram" />
          </Link>
        </div>
      </footer>
    </>
  );
}
