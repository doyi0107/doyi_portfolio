"use client";
import "./styles/page.css";
import "./styles/media.css";
import Image from "next/image";
import APMA from "/public/APMA_IMG.png";
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
import play_javascript from "/public/play_javascript_img.png";
import starting_plant from "/public/starting_plant_img.jpeg";
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
                  <div className="content_left">
                    <h3>Doyi_portfolio</h3>
                    <div className="project_img_wrap Doyi_portfolio_wrap">
                      <Image
                        placeholder="blur"
                        className="project_main_img"
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
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h4>프로젝트 소개</h4>
                    <p>
                      새로운 프레임워크 Next.js를 이용해 개발을 좋아하는 나를
                      알리기 위해 만든 포트폴리오
                    </p>
                    <h4>프로젝트기간</h4>
                    <p>2023.12 - 2024.01 (1명)</p>
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
                      <br /> → 가로 scroll바, 스크롤 유도 가이드,
                      useRef,useState를 이용한 모달창 기능 구현
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

              {/* starting_plant */}
              <div className="about_project">
                <div class="content">
                  {/* img_wrap */}
                  <div className="content_left">
                    <h3>Starting_plant</h3>
                    <div className="project_img_wrap">
                      <Image
                        placeholder="blur"
                        className="project_main_img starting_plant_img"
                        src={starting_plant}
                        alt="starting_plant"
                      />

                      <Link
                        className="source_code_link project_link"
                        href="https://github.com/doyi0107/starting_plant.git"
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
                        href="https://starting-plant-nu.vercel.app/"
                        target="_blank"
                      >
                        <Image className="demo" src={demo} alt="demo_img" />
                        <p>#demo</p>
                      </Link>
                    </div>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h4>프로젝트 소개</h4>
                    <p>
                      사용자 설문 조사를 통해 맞춤 식물을 추천해주는 웹 - <br />
                      식물을 키우고 싶지만 너무 많은 정보들 사이에서 어떤 식물이{" "}
                      <br />
                      나에게 맞춤인지 몰라 불편함을 느꼈던 경험을 바탕으로 제작
                      <br />
                    </p>
                    <h4>프로젝트기간</h4>
                    <p>2024.04 ~ 진행 중</p>
                    <h4>프론트엔드</h4>
                    <p>REACT, GSAP, VERCEL</p>
                    <h4>주요 기능</h4>
                    <p>
                      → 사용자 맞춤 식물 추천 시스템 <br />: 동적 API 쿼리 생성,
                      조건부 렌더링과 SPA 내비게이션
                      <br />→ 식물 정보 검색 및 결과 제공 <br />
                      : axios의 인터셉터 기능을 활용하여 로딩 시간을 단축
                      <br />
                      : useLocation 훅을 통해 이전 페이지로부터 전달 받은 초기
                      검색 결과와 검색어를 상태로 관리
                      <br />→ 백엔드 개발자와 다른 작업 시간대로 API 작업이
                      완료되지 않은 상황에서 컴포넌트 제작을 완료 <br />: MSW
                      기반으로 한 Mock API를 구현함으로써 전체 프로젝트의 개발
                      시간을 효율적으로 단축
                    </p>

                    <Link
                      href="https://2-doooo-2.tistory.com/170"
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
              {/* Play_javascript */}
              <div className="about_project">
                <div className="content">
                  {/* img_wrap */}
                  <div className="content_left">
                    <h3>Play_javascript</h3>
                    <div className="project_img_wrap">
                      <Image
                        placeholder="blur"
                        className="project_main_img Javascipt_zip_img"
                        src={play_javascript}
                        alt="play_javascript"
                      />

                      <Link
                        className="source_code_link project_link"
                        href="https://github.com/doyi0107/play_javascript"
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
                        href="https://play-javascript.netlify.app/"
                        target="_blank"
                      >
                        <Image className="demo" src={demo} alt="demo_img" />
                        <p>#demo</p>
                      </Link>
                    </div>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h4>프로젝트 소개</h4>
                    <p>
                      다양한 자바스크립트 기능을 바탕으로 만든 웹
                      <br />
                    </p>
                    <h4>프로젝트기간</h4>
                    <p>2024.04 (1명)</p>
                    <h4>프론트엔드</h4>
                    <p>HTML, CSS, JAVASCRIPT, CANVAS</p>
                    <h4>백엔드</h4>
                    <p>API</p>
                    <h4>주요 기능</h4>
                    <p>
                      → 로컬 스토리지를 활용한 로그인 및 할 일 목록(to-do list)
                      기능, <br />
                      OpenWeatherMap API를 통한 현재 온도 및 날씨 정보 출력
                      <br />
                      → 자바스크립트로 구현한 다양한 게임 기능(지뢰 찾기,
                      브레이크 아웃, 카드 매치 게임 )
                      <br />→ 다크 모드 가능
                    </p>

                    <Link
                      href="https://github.com/doyi0107/play_javascript"
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
                  <div className="content_left">
                    <h3>APMA 프로젝트</h3>
                    <div className="project_img_wrap">
                      <Image
                        placeholder="blur"
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
                        href="https://apma-project.vercel.app/"
                        target="_blank"
                      >
                        <Image className="demo" src={demo} alt="demo_img" />
                        <p>#demo</p>
                      </Link>
                    </div>
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h4>프로젝트 소개</h4>
                    <p>
                      html, css, javascript, jquery를 이용해 만든 미술관 웹
                      사이트
                    </p>
                    <h4>프로젝트 기간</h4>
                    <p>2021.08(1명) / 2023.08(3명)</p>
                    <h4>프론트엔드</h4>
                    <p>HTML, CSS, JAVASCRIPT, JQEURY, AJAX, GSAP</p>
                    <h4>백엔드</h4>
                    <p>JAVA, SPRING, LOCALSTORAGE </p>
                    <h4>주요 기능</h4>
                    <p>
                      → CSS를 통해 반응형 웹으로 제작
                      <br />
                      → GSAP를 이용해 인터렉션을 추가함으로써 디자인적 감각을
                      높임
                      <br /> → 비동기 처리 방식 jQuery AJAX를 활용해 REST API
                      호출 → 로그인, 회원 가입 기능
                      <br /> → 정규식과 text()를 이용해 비밀번호, 전화번호 형식
                      확인 가능
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

              {/* shallender */}
              <div className="about_project">
                <div className="content">
                  {/* img_wrap */}
                  <div className="content_left">
                    <h3>shallender</h3>
                    <div className="project_img_wrap">
                      <Image
                        placeholder="blur"
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
                  </div>
                  {/* text_wrap */}
                  <div className="project_text_wrap">
                    <h4>프로젝트 소개</h4>
                    <p>
                      Kotlin을 활용한 지인들과 일정을 공유하고 약속을 잡는
                      안드로이드 앱
                    </p>
                    <h4>프로젝트기간</h4>
                    <p>2022.09 ~ 2022.12 (5명)</p>
                    <h4>프론트엔드</h4>
                    <p>KOTLIN</p>
                    <h4>백엔드</h4>
                    <p>JAVASCRIPT, FIREBASE</p>
                    <h4>주요 기능</h4>
                    <p>
                      → Firebase Authentication을 사용하여 사용자 계정을 생성
                      <br /> → AlertDialog를 사용하여 사용자에게 일정 추가를
                      위한 입력 폼을 제공
                      <br /> → SearchView를 사용하여 사용자가 검색할 때마다
                      이벤트 처리
                      <br /> → thread를 통해 HTTP 요청을 보내고 받음
                    </p>

                    <Link
                      href="https://drive.google.com/file/d/1DXae0notDrYSHBCdLTAWfFC0tsur-W-u/view?usp=drive_link"
                      target="_blank"
                    >
                      {/* <button className="readme_button">
                        <span>📂Open_File</span>
                      </button> */}
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
