"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import styles from "./Modal.module.css";
import classNames from "classnames";

export default function Modal() {
  const [burgerClass, setBurgerClass] = useState("burger_bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const extraBackgroundRef = useRef(null);
  const navRef = useRef(null);
  const navLinksRef = useRef([]);
  const masterRef = useRef(null);

  // 메뉴창 클릭시
  const updateMenu = () => {
    masterRef.current.reversed()
      ? masterRef.current.play()
      : masterRef.current.reverse();
    if (!isMenuClicked) {
      setBurgerClass("burger_bar clicked");
    } else {
      setBurgerClass("burger_bar unclicked");
    }
    setIsMenuClicked(!isMenuClicked);
  };


  // 메뉴창 슬라이드 이벤트
  useEffect(() => {
    const nav = navRef.current;
    const extraBackground = extraBackgroundRef.current;
    const navLinks = navLinksRef.current;

    gsap.set([extraBackground, nav], { height: "0%", skewY: 2 });
    gsap.set([navLinks], { y: -20, autoAlpha: 0 });

    const staggerReveal = (nodes) => {
      const tl = gsap.timeline();

      tl.to(nodes, {
        duration: 1,
        ease: "power3.inOut",
        transformOrigin: "top right",
        height: "100%",
        minHeight: "100%",
        skewY: 0,
        stagger: {
          amount: 0.1,
        },
      });

      return tl;
    };

    const revealMenuItems = (links) => {
      const tl = gsap.timeline();

      tl.to(links, {
        duration: 0.8,
        autoAlpha: 1,
        y: 0,
        stagger: {
          amount: 0.1,
        },
      });

      return tl;
    };

    const master = gsap.timeline({ paused: true, reversed: true });
    master
      .add(staggerReveal([extraBackground, nav]))
      .add(revealMenuItems([navLinks]), "-=0.5");

    masterRef.current = master;
  }, []);

  const handleNavLinkClick = () => {
    setBurgerClass("burger_bar unclicked");
    setIsMenuClicked(!isMenuClicked);
    masterRef.current.reverse();
  };

  return (
    <>
      <button
        className={styles.burger_menu}
        onClick={updateMenu}
        aria-label="Name"
      >
        <span
          className={classNames(styles.burger_bar, {
            [styles.clicked]: isMenuClicked,
            [styles.unclicked]: !isMenuClicked,
          })}
        ></span>
        <span
          className={classNames(styles.burger_bar, {
            [styles.clicked]: isMenuClicked,
            [styles.unclicked]: !isMenuClicked,
          })}
        ></span>
        <span
          className={classNames(styles.burger_bar, {
            [styles.clicked]: isMenuClicked,
            [styles.unclicked]: !isMenuClicked,
          })}
        ></span>
      </button>

      <div
        className={styles.nav__extra_background}
        ref={extraBackgroundRef}
      ></div>
      <nav className={styles.nav} ref={navRef}>
        <div className={styles.nav__content}>
          <div className={styles.nav__links} ref={navLinksRef}>
            <Link
              href="#intro"
              className={styles.modal_link}
              onClick={handleNavLinkClick}
            >
              <div>Home</div>
            </Link>

            <Link
              href="#archiving"
              className={styles.modal_link}
              onClick={handleNavLinkClick}
            >
              <div>Archiving</div>
            </Link>

            <Link
              href="#projects"
              className={styles.modal_link}
              onClick={handleNavLinkClick}
            >
              <div>Projects</div>
            </Link>

            <Link
              href="#contact"
              className={styles.modal_link}
              onClick={handleNavLinkClick}
            >
              <div>Contact</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
