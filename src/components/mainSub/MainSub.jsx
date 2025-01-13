'use client';
import React, { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import styles from './MainSub.module.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import quest from '/public/mainSub/quest.png';
import error from '/public/mainSub/error.png';
import team from '/public/mainSub/team.png';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function MainSub() {
  const subNameRef = useRef(null);
  const oneRef = useRef(null);
  const twoRef = useRef(null);
  const threeRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // 모든 ref가 존재하는지 확인
      if (
        !subNameRef.current ||
        !oneRef.current ||
        !twoRef.current ||
        !threeRef.current
      ) {
        return;
      }

      // 왼쪽에서 들어오는 애니메이션
      const fromLeftElements = [
        {
          element: subNameRef.current,
          delay: 0.1,
        },
        {
          element: oneRef.current,
          delay: 0.2,
        },
        {
          element: threeRef.current,
          delay: 0.1,
        },
      ];

      fromLeftElements.forEach((item) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: item.element,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse',
            markers: false,
          },
        });

        tl.fromTo(
          item.element,
          {
            opacity: 0,
            x: -800,
          },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            delay: item.delay,
            ease: 'power2.out',
          },
        );
      });

      // 오른쪽에서 들어오는 애니메이션
      const tlRight = gsap.timeline({
        scrollTrigger: {
          trigger: twoRef.current,
          start: 'top 80%',
          end: 'bottom 50%',
          toggleActions: 'play none none reverse',
          markers: false,
        },
      });

      tlRight.fromTo(
        twoRef.current,
        {
          opacity: 0,
          x: 800,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: 'power2.out',
        },
      );
    });

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className={styles.main_sub}>
      <div className={styles.sub_box}></div>
      <div ref={subNameRef} className={styles.sub_name}>
        WHO IS DOYI
      </div>
      <div className={styles.explain_me}>
        <div ref={oneRef} className={`${styles.img_wrap} ${styles.one}`}>
          <div className={styles.sub_content}>
            <Image
              className={`${styles.networking} ${styles.sub_img}`}
              src={quest}
              alt="quest"
            />
          </div>
          <div className={styles.sub_text_left}>
            <span className={styles.title}>#상상력이 풍부한 #재미있는</span>
            <span className={styles.sub_text}>
              💡 제가 상상한 그림이 브라우저를 통해 그려지고, 작은 블록들이 쌓여
              하나의 완성품을 만들어가는 과정이 재밌습니다.
              <br />
              💡사용자와 가장 가까운 접점에서 직접적인 가치를 전달할 수 있다는
              점에서 큰 보람을 느낍니다.
            </span>
          </div>
        </div>
        <div ref={twoRef} className={`${styles.img_wrap} ${styles.two}`}>
          <div className={styles.sub_content_design}>
            <Image
              className={`${styles.design} ${styles.sub_img}`}
              src={error}
              alt="error"
            />
          </div>
          <div>
            <span className={styles.title}>#회고하는 #탐구하는</span>
            <span className={styles.sub_text_right}>
              💡React.js, Next.js등과 같은 현대적인 웹 기술에 열정을 가지고
              있습니다. <br />
              💡 프로젝트를 진행하며 겪은 에러를 회고하고, 이를
              <Link
                href="https://2-doooo-2.tistory.com/"
                className={styles.link}
                target="blank"
              >
                기술 블로그
              </Link>
              에 정리하고 있습니다 <br />
              💡 이에 따라 110개 이상의 게시물을 작성하였으며, 총 누적 조회수는
              10,000회를 초과하였습니다.
            </span>
          </div>
        </div>
        <div className={styles.sub_box2}></div>
        <div ref={threeRef} className={`${styles.img_wrap} ${styles.three}`}>
          <div className={styles.sub_content}>
            <Image
              className={`${styles.watering} ${styles.sub_img}`}
              src={team}
              alt="team"
            />
          </div>
          <div className={styles.sub_text_left}>
            <span className={styles.title}>#함께 성장하는</span>
            <span className={styles.sub_text}>
              💡협업을 통해 서로의 강점을 살리고, 함께 성장합니다.
              <br /> 💡
              <Link
                href="https://github.com/woorifisa-projects-3rd/WithBeeTravel-FE/pull/71"
                className={styles.link}
                target="blank"
              >
                코드 리뷰
              </Link>
              를 활발히 진행하며 팀원 간의 피드백을 통해 더 나은 코드를
              고민합니다.
              <br />
              💡우리fisa에서 진행한 최종 프로젝트에서 클라우드 서비스 반 최종
              2등, 우수 프로젝트로 선정된 경험이 있습니다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
