"use client";
import "./styles/page.css";
import Image from "next/image";
import APMA from "/public/APMA_img.webp";
import source_code from "/public/source-code.webp";
import demo from "/public/demo.webp";
import talk from "/public/talk.webp";
import mail from "/public/email.webp";
import phone from "/public/phone.webp";
import instagram from "/public/instagram.webp";
import home from "/public/home.webp";
import birth from "/public/birth.webp";
import academic from "/public/academic.webp";
import name from "/public/name.webp";  
import contact_doyi from "/public/contact_doyi.webp";
import javascript_zip from "/public/javascript_zip_img.webp";
import spakling_story from "/public/your_spakling_story.webp";
import Doyi_portfolio_img from "/public/Doyi_portfolio_img.webp";
import for_your_skin_type from "/public/for_your_skin_type.webp";
import shallender_img from "/public/shallender_img.webp";
import nav_tree from "/public/nav_tree.png";
import Link from "next/link";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import Archiving from "./archiving";
import Main_sub from "./main_sub";
import Footer from "./footer";

export default function Home() {
  const [isSpecialCase, setIsSpecialCase] = useState(false);
  const scrollSectionRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
 const handleLinkClick = () => {
   // 특정 링크를 클릭하면 페이지를 새로 고침
   window.location.reload();
 };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleScrollGuideClick = () => {
    
    if (isSpecialCase) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const scrollSection = scrollSectionRef.current;
    const scrollContent = scrollContentRef.current;

    const handleScroll = () => {
      const isScrollAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      const scrollTop = window.scrollY;

      // 상단으로 스크롤될 때의 조건을 설정 (예: 0 또는 원하는 값)
      const isTop = scrollTop === 0;

      if (isScrollAtBottom) {
        setIsSpecialCase(!isSpecialCase);
      } else if (isTop) {
        setIsSpecialCase(isSpecialCase);
      }


      // scrollSection.offsetTop는 스크롤 섹션의 상단 위치를 나타내는 고정된 값이며, 
      //scrolled는 현재 사용자가 스크롤한 위치를 동적으로 나타내는 값입니다.
      const scrolled = window.pageYOffset;
      const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
      const notReachedBottom = parseInt(
        Math.max(
          0,
          scrollSection.getBoundingClientRect().bottom - window.innerHeight
        )
      );

      if (scrollSection.offsetTop <= scrolled && notReachedBottom) {
        gsap.to(scrollContent, {
          x: -sectionOffset,
        });
      }
    };

    document.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className="nav_left_box">
        <Link href="#intro">
          <Image className="nav_tree" src={nav_tree} alt="nav_tree" />
        </Link>
        <Link href="#main_sub">
          <p className="nav_name">DOY.</p>
        </Link>
      </div>
      {/* 스크롤 유도 가이드 */}
      <div
        className={`${isSpecialCase ? "scroll_guide_up" : "scroll_guide"}`}
        onClick={handleScrollGuideClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="container">
        <Main_sub />

        <Archiving />

        <section id="projects" ref={scrollSectionRef}>
          <div className="horizontal_scroll_wrap">
            <div className="horizontal_scroll_content" ref={scrollContentRef}>
              <h2 className="projects_name">projects</h2>
              {/* 프로젝트들 */}

              {/* Doyi_portfolio */}
              <div className="about_project">
                <div class="content">
                  {/* img_wrap */}
                  <div className="project_img_wrap Doyi_portfolio_wrap">
                    <Image
                      className="project_main_img "
                      src={Doyi_portfolio_img}
                      alt="Doyi_portfolio_img"
                    />

                    <Link
                      className="source_code_link project_link"
                      href="https://github.com/doyi0107/doyi_portfolio.git"
                      target="_blank"
                    >
                      <Image
                        className="source_code"
                        src={source_code}
                        alt="source_code_img"
                      />
                      <p>#source code</p>
                    </Link>
                    <Link
                      className="demo_code_link project_link"
                      onClick={handleLinkClick}
                      href="#"
                    >
                      <Image className="demo" src={demo} alt="demo_img" />
                      <p>#demo</p>
                    </Link>
                  </div>
                  {/* text_wrap */} 
                  <div className="project_text_wrap">
                    <h3>Doyi_portfolio</h3>
                    <h4>프로젝트기간</h4>
                    <p>2023.12(1명)</p>
                    <h4>프론트엔드</h4>
                    <p>NEXT.JS, SASS, GSAP, VERCEL</p>
                    <h4>주요 기능</h4>
                    <p>
                      → SEO를 위한 SSR을 가능하게 하는 NEXT.JS로 제작
                      <br />
                      → 처음 만든 프로젝트 대비 로딩 속도 (Load:537ms → Load:
                      127ms) 410ms차이로 개선
                      <br />→ Light house Perfomance 100% 향상 <br />: Webpack을
                      사용한 css축소 (mini-css- extract-plugin 패키지 설치)
                      <br />: CSS Minifier 이용해 css 중복 코드 개선
                    </p>

                    <Link
                      href="https://2-doooo-2.tistory.com/135"
                      target="_blank"
                    >
                      <button className="readme_button">
                        <span>📘README</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <span className="project_line"></span>

              {/* javascipt_zip */}
              <div className="about_project">
                <div className="content">
                  {/* img_wrap */}
                  <div className="project_img_wrap">
                    <Image
                      className="project_main_img Javascipt_zip_img"
                      src={javascript_zip}
                      alt="javascript_zip"
                    />

                    <Link
                      className="source_code_link project_link"
                      href="https://github.com/doyi0107/Javascript_zip.git"
                      target="_blank"
                    >
                      <Image
                        className="source_code"
                        src={source_code}
                        alt="source_code_img"
                      />
                      <p>#source code</p>
                    </Link>
                    <Link
                      className="demo_code_link project_link"
                      href="https://javascript-zip.netlify.app/"
                      target="_blank"
                    >
                      <Image className="demo" src={demo} alt="demo_img" />
                      <p>#demo</p>
                    </Link>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h3>Javascipt_zip</h3>
                    <h4>프로젝트기간</h4>
                    <p>2023.09 / 2023.12 (1명)</p>
                    <h4>프론트엔드</h4>
                    <p>HTML, CSS, JAVASCRIPT, SVG, GSAP</p>
                    <h4>백엔드</h4>
                    <p>API</p>
                    <h4>주요 기능</h4>
                    <p>
                      → OpenWeatherMap API와 fetch()를 이용해 현재 온도와 날씨
                      데이터 불러오기
                      <br />
                      → 다크 모드 기능 <br />: localStorage를 사용하여 사용자의
                      모드 선택을 저장 <br />
                      : DOMContentLoaded 이벤트 사용
                      <br />→ Fisher-Yates 알고리즘을 사용한 카드 매치 게임등
                    </p>

                    <Link
                      href="https://2-doooo-2.tistory.com/125"
                      target="_blank"
                    >
                      <button className="readme_button">
                        <span>📘README</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <span className="project_line"></span>

              {/* apma */}
              <div className="about_project">
                <div className="content">
                  {/* img_wrap */}
                  <div className="project_img_wrap">
                    <Image
                      className="project_main_img "
                      src={APMA}
                      alt="APMA_img"
                    />

                    <Link
                      className="source_code_link project_link"
                      href="https://github.com/APMA-project/APMA-Frontend.git"
                      target="_blank"
                    >
                      <Image
                        className="source_code"
                        src={source_code}
                        alt="source_code_img"
                      />
                      <p>#source code</p>
                    </Link>
                    <Link
                      className="demo_code_link project_link"
                      href="https://apma-project.netlify.app/"
                      target="_blank"
                    >
                      <Image className="demo" src={demo} alt="demo_img" />
                      <p>#demo</p>
                    </Link>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h3>APMA 프로젝트</h3>
                    <h4>프로젝트기간</h4>
                    <p>2021.08(1명) / 2023.08(3명)</p>
                    <h4>프론트엔드</h4>
                    <p>HTML, CSS, JAVASCRIPT, JQEURY, AJAX</p>
                    <h4>백엔드</h4>
                    <p>JAVA, SPRING, LOCALSTORAGE </p>
                    <h4>주요 기능</h4>
                    <p>
                      → 미술관 전시 소개에 맞는 UI/UX로 디자인
                      <br />
                      → CSS를 통해 반응형 웹으로 제작
                      <br /> → 비동기 처리 방식 jQuery AJAX를 활용해 REST API
                      호출 → 로그인, 회원 가입 기능
                    </p>

                    <Link
                      href="https://2-doooo-2.tistory.com/118"
                      target="_blank"
                    >
                      <button className="readme_button">
                        <span>📘README</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <span className="project_line"></span>

              {/* spakling_story */}
              <div className="about_project">
                <div class="content">
                  {/* img_wrap */}
                  <div className="project_img_wrap">
                    <Image
                      className="project_main_img spakling_story_img"
                      src={spakling_story}
                      alt="spakling_story"
                    />

                    <Link
                      className="source_code_link project_link"
                      href="https://github.com/doyi0107/your_sparkling_story.git"
                      target="_blank"
                    >
                      <Image
                        className="source_code"
                        src={source_code}
                        alt="source_code_img"
                      />
                      <p>#source code</p>
                    </Link>
                    <Link
                      className="demo_code_link project_link"
                      href="https://your-sparkling-story.vercel.app/"
                      target="_blank"
                    >
                      <Image className="demo" src={demo} alt="demo_img" />
                      <p>#demo</p>
                    </Link>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h3>sparkling_story</h3>
                    <h4>프로젝트기간</h4>
                    <p>2023.03(1명)</p>
                    <h4>프론트엔드</h4>
                    <p>REACT,GSAP,VERCEL</p>
                    <h4>주요 기능</h4>
                    <p>
                      → React 이벤트 헨들러를 통해 CRUD기능을 제작
                      <br />
                      → useEffect훅을 사용해 DOM요소에 접근, 마우스 좌표를
                      기반으로 커서 위치 업데이트
                      <br />→ VERCEL를 통한 배포
                    </p>

                    <Link
                      href="https://2-doooo-2.tistory.com/132"
                      target="_blank"
                    >
                      <button className="readme_button">
                        <span>📘README</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              <span className="project_line"></span>
              {/* 화장품 추천 웹 */}
              <div className="about_project">
                <div className="content">
                  {/* img_wrap */}
                  <div className="project_img_wrap">
                    <Image
                      className="project_main_img skin_type_img"
                      src={for_your_skin_type}
                      alt="for_your_skin_type"
                    />

                    <Link
                      className="source_code_link project_link"
                      href="https://github.com/doyi0107/for_your_skin_type_frontend.git"
                      target="_blank"
                    >
                      <Image
                        className="source_code"
                        src={source_code}
                        alt="source_code_img"
                      />
                      <p>#source code</p>
                    </Link>
                    <Link
                      className="demo_code_link project_link"
                      href="https://elated-edison-5e9fe5.netlify.app"
                      target="_blank"
                    >
                      <Image className="demo" src={demo} alt="demo_img" />
                      <p>#demo</p>
                    </Link>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h3>for_your_skin_type</h3>
                    <h4>프로젝트기간</h4>
                    <p>2022.01~ 02(4명)</p>
                    <h4>프론트엔드</h4>
                    <p>FIGMA,REACT,SASS</p>
                    <h4>백엔드</h4>
                    <p>JAVA,SPRING,MYSQL</p>
                    <h4>주요 기능</h4>
                    <p>
                      → 피그마를 통해 사전 디자인
                      <br /> → 피부 유형을 분석하고 자신에 타입에 맞는 화장품을
                      추천해 주는 웹사이트
                      <br />→ SASS를 통해 반응형 웹으로 제작
                    </p>

                    <Link
                      href="https://2-doooo-2.tistory.com/122"
                      target="_blank"
                    >
                      <button className="readme_button">
                        <span>📘README</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <span className="project_line"></span>

              {/* shallender */}
              <div className="about_project">
                <div className="content">
                  {/* img_wrap */}
                  <div className="project_img_wrap">
                    <Image
                      className="project_main_img shallender_img"
                      src={shallender_img}
                      alt="shallender_img"
                    />

                    <Link
                      className="source_code_link project_link shallendar_source_code"
                      href="https://github.com/doyi0107/mobileprogramming.git"
                      target="_blank"
                    >
                      <Image
                        className="source_code"
                        src={source_code}
                        alt="source_code_img"
                      />
                      <p>#source code</p>
                    </Link>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h3>shallender</h3>
                    <h4>프로젝트기간</h4>
                    <p>2022.09 ~ 2022.12 (5명)</p>
                    <h4>프론트엔드</h4>
                    <p>KOTLIN</p>
                    <h4>백엔드</h4>
                    <p>JAVASCRIPT, FIREBASE</p>
                    <h4>주요 기능</h4>
                    <p>
                      → Kotlin을 활용한 지인들과 일정을 공유하고 약속을 잡는
                      안드로이드 앱
                      <br />
                      → Firebase Authentication을 사용하여 사용자 계정을 생성
                      <br /> → AlertDialog를 사용하여 사용자에게 일정 추가를
                      위한 입력 폼을 제공
                    </p>

                    <Link
                      href="https://drive.google.com/file/d/1DXae0notDrYSHBCdLTAWfFC0tsur-W-u/view?usp=drive_link"
                      target="_blank"
                    >
                      <button className="readme_button">
                        <span>📂Open_File</span>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          {/* contact 이름 */}
          <h2 className="contact_name">Contact</h2>

          <div className="contact_wrap">
            <div className="contact_img_wrap">
              <Image
                className="contact_doyi_img"
                src={contact_doyi}
                alt="contact_doyi"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </div>
            <div className={isHovered ? "display_none" : "contact_text_wrap"}>
              <div className="contact_text_box">
                <div className="contact_text_title">
                  <Image className="phone" src={phone} alt="phone" />
                  <h3>전화번호</h3>
                </div>
                <p>010-7277-7361</p>
                <div className="contact_text_title">
                  <Image className="mail" src={mail} alt="mail" />
                  <h3>이메일</h3>
                </div>
                <p>doyi9917@naver.com</p>
                <div className="contact_text_title">
                  <Image className="talk" src={talk} alt="talk" />
                  <h3>카카오톡</h3>
                </div>
                <Link href="https://open.kakao.com/o/sevgyHWf" target="blank">
                  <p>→Doyi9917</p>
                </Link>
                <div className="contact_text_title">
                  <Image
                    className="instagram"
                    src={instagram}
                    alt="instagram"
                  />
                  <h3>인스타그램</h3>
                </div>
                <Link
                  href="https://instagram.com/2_doooo_2?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr"
                  target="blank"
                >
                  <p>→2_doooo_2</p>
                </Link>
              </div>
            </div>
            <div className={isHovered ? "contact_info_wrap" : "display_none"}>
              <div className="contact_text_box">
                <div className="contact_text_title">
                  <Image className="name" src={name} alt="name" />
                  <h3>이름</h3>
                </div>
                <p>이도이</p>
                <div className="contact_text_title">
                  <Image className="birth" src={birth} alt="birth" />
                  <h3>생년월일</h3>
                </div>
                <p>1999.01.07</p>
                <div className="contact_text_title">
                  <Image className="academic" src={academic} alt="academic" />
                  <h3>학력</h3>
                </div>
                <p>
                  국민대(국어국문학과(주)/
                  <br />
                  소프트웨어미디어융합전공(부))
                </p>
                <div className="contact_text_title">
                  <Image className="home" src={home} alt="home" />
                  <h3>거주지</h3>
                </div>
                <p>인천 미추홀구</p>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
