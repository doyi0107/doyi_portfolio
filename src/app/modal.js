"use client";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";
import "./styles/modal.css";

export default function Modal() {
  const [burgerClass, setBurgerClass] = useState("burger-bar unclicked");
  const [isMenuClicked, setIsMenuClicked] = useState(false);

  const extraBackgroundRef = useRef(null);
  const navRef = useRef(null);
  const navLinksRef = useRef([]);
  const masterRef = useRef(null);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("burger-bar clicked");
      masterRef.current.reversed()
        ? masterRef.current.play()
        : masterRef.current.reverse();
    } else {
      setBurgerClass("burger-bar unclicked");
      masterRef.current.reversed()
        ? masterRef.current.play()
        : masterRef.current.reverse();
    }
    setIsMenuClicked(!isMenuClicked);
  };

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
  }, []); // Empty dependency array to run the effect only once on mount

  const handleNavLinkClick = () => {
    setBurgerClass("burger-bar unclicked");
    setIsMenuClicked(!isMenuClicked);
    masterRef.current.reverse();
  };

  return (
    <>
      <button className="burger-menu" onClick={updateMenu} aria-label="Name">
        <span className={burgerClass}></span>
        <span className={burgerClass}></span>
        <span className={burgerClass}></span>
      </button>

      <div className="nav__extra-background" ref={extraBackgroundRef}></div>
      <nav className="nav" ref={navRef}>
        <div className="nav__content">
          <div className="nav__links" ref={navLinksRef}>
            <Link
              href="#intro"
              className="modal_link"
              onClick={handleNavLinkClick}
            >
              <div>Home</div>
            </Link>

            <Link
              href="#archiving"
              className="modal_link"
              onClick={handleNavLinkClick}
            >
              <div>Archiving</div>
            </Link>

            <Link
              href="#projects"
              className="modal_link"
              onClick={handleNavLinkClick}
            >
              <div>Projects</div>
            </Link>

            <Link
              href="#contact"
              className="modal_link"
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
