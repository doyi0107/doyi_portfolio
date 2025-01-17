'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import styles from './Education.module.css';

export default function Education() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);
  const boxRefs = useRef([]);
  const certificationBoxRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const verticalLine = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top center',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    verticalLine.to(lineRef.current, {
      height: '100%',
      duration: 1,
      ease: 'none',
    });

    boxRefs.current.forEach((box, index) => {
      const horizontalLine = box.querySelector(`.${styles.horizontal_line}`);
      const circle = box.querySelector(`.${styles.education_box}`);
      const content = box.querySelector(`.${styles.content}`);

      const boxTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: box,
          start: 'top center+=100',
          end: '+=200',
          scrub: 1,
        },
      });

      boxTimeline
        .to(horizontalLine, {
          width: '150px',
          duration: 0.5,
          ease: 'none',
        })
        .to(
          circle,
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
          },
          '-=0.15',
        )
        .to(
          content,
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
          },
          '-=0.15',
        );
    });

    certificationBoxRefs.current.forEach((certBox, index) => {
      const horizontalLine = certBox.querySelector(
        `.${styles.horizontal_line}`,
      );
      const circle = certBox.querySelector(`.${styles.education_box}`);
      const content = certBox.querySelector(`.${styles.content}`);

      const boxTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: certBox,
          start: 'top center+=100',
          end: '+=200',
          scrub: 1,
        },
      });

      boxTimeline
        .to(horizontalLine, {
          width: '150px',
          duration: 0.5,
          ease: 'none',
        })
        .to(
          circle,
          {
            scale: 1,
            opacity: 1,
            duration: 0.3,
          },
          '-=0.15',
        )
        .to(
          content,
          {
            opacity: 1,
            x: 0,
            duration: 0.3,
          },
          '-=0.15',
        );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const educationData = [
    {
      title: '메가스터디 컴퓨터 아카데미 - 프론트엔드 기초 과정',
      period: '2021.04 ~ 2021.10',
      description:
        '- HTML/CSS: HTML5 이해 및 웹페이지 제작, CSS를 통한 디자인 능력을 향상시킴 <br/> - JavaScript/J-Query: JavaScript 문법 학습 및 J-Query 활용, 객체 지향 프로그래밍 배움.',
    },
    {
      title: '국민대학교 - 부전공/소프트웨어미디어융합전공',
      period: '2022.09 - 2022.12',
      description:
        '- 컴퓨터 네트워크, 자료구조, 컴퓨터 구조에 관한 이론 학습 진행 <br/>- 모바일 프로그래밍:안드로이드 스튜디오를 활용한 java,kotiln학습, <br/>',
    },
    {
      title:
        '우리FIS아카데미(클라우드 서비스) - 풀스택 개발자 교육 과정 진행<br/>',
      period: '2024.07 - 2024.12',
      description:
        '프론트엔드 프로그래밍 기술<br/>-React와 Next.js 프레임워크를 활용한 현대적인 웹 애플리케이션 개발 방법 학습<br/>-컴포넌트 기반 개발, 상태 관리, 라우팅, API 연동 실습<br/>-CSS 및 UI/UX 디자인 원칙 이해와 반응형 웹 디자인 구현<br/><br/>백엔드 프로그래밍 기술<br/>-Spring 프레임워크를 활용한 RESTful API 개발, 보안, 데이터 처리 및 비즈니스 로직 구현<br/>-데이터베이스 설계 및 SQL 쿼리 작성법 학습<br/><br/>클라우드 네이티브 과정<br/>- Jenkins와 Docker,AWS를 활용한 클라우드 환경 학습',
    },
  ];

  const certificationData = [
    {
      title: 'GTQ 포토샵 1급 - 한국생산성본부(KPC)',
      period: '2021.12.17',
    },
    {
      title: '웹 디자인 기능사 - 한국산업인력공단',
      period: '2021.12.24',
    },
    {
      title: '정보 처리 기사 - 한국산업인력공단',
      period: '2024.06.18',
    },
    {
      title: 'SQLD - 한국데이터산업진흥원',
      period: '2024.09.20',
    },
  ];

  return (
    <section id="education" ref={sectionRef} className={styles.education}>
      <h2 className={styles.education_name}>Activity</h2>

      <div ref={lineRef} className={styles.vertical_line01} />
      <div ref={lineRef} className={styles.vertical_line02} />

      <div className={styles.Education_timeline_container}>
        <div className={styles.education_container}>
          {educationData.map((edu, index) => (
            <div
              key={index}
              ref={(el) => (boxRefs.current[index] = el)}
              className={styles.timeline_item}
            >
              <div className={styles.horizontal_line} />
              <div className={styles.education_box} />
              <div className={styles.content}>
                <h3 dangerouslySetInnerHTML={{ __html: edu.title }}></h3>
                <p className={styles.period}>{edu.period}</p>
                <p
                  className={styles.description}
                  dangerouslySetInnerHTML={{ __html: edu.description }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.Certification_timeline_container}>
        <div className={styles.certification_container}>
          {certificationData.map((cert, index) => (
            <div
              key={index}
              ref={(el) => (certificationBoxRefs.current[index] = el)}
              className={styles.timeline_item}
            >
              <div className={styles.horizontal_line} />
              <div className={styles.education_box} />
              <div className={styles.content}>
                <div className={styles.content_title}>{cert.title}</div>
                <p className={styles.period}>{cert.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
