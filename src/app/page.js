"use client";
import "./page.modul.css";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function Home() {


  return (
    <>
      <div className="container">

        <section id="main_sub">
          <h2>main_Sub</h2>
          <div className="box">박스</div>
        </section>

        <section id="archiving">
          <h2>Archiving</h2>
        </section>

        <section id="projects">
          <h2>Projects</h2>
        </section>

        <section id="contact">
          <h2>Contact</h2>
        </section>
      </div>
    </>
  );
}
