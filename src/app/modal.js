"use client";
import { useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";
import "./modal.modul.css";
import "./globals.scss";

export default function Modal() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const extraBackground = document.querySelector(".nav__extra-background");
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelectorAll(".modal_link");
    const navLocations = document.querySelector(".nav__locations");
    

    //Setting the initial states
    gsap.set([extraBackground, nav], { height: "0%", skewY: 2 });
    gsap.set([navLinks, navLocations], { y: -20, autoAlpha: 0 });

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
      .add(revealMenuItems([navLinks, navLocations]), "-=0.5");

    for (var i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", () => {
        master.reverse();
      });
    }

    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      master.reversed() ? master.play() : master.reverse();
    });
  });

  return (
    <>
      <button className="hamburger">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div class="nav__extra-background"></div>
      <nav class="nav">
        <div class="nav__content">
          <div className="nav__links">
            <Link href="#intro" className="modal_link" >
              <div>Home</div>
            </Link>

            <Link href="#archiving" className="modal_link">
              <div>Archiving</div>
            </Link>

            <Link href="#projects" className="modal_link">
              <div>Projects</div>
            </Link>

            <Link href="#contact" className="modal_link">
              <div>Contact</div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
