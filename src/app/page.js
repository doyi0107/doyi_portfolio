"use client";
import "./page.modul.css";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import LocomotiveScroll from "locomotive-scroll";
// import { useEffect,useRef} from "react";

export default function Home() {
  // gsap.registerPlugin(ScrollTrigger);

  // const SmoothScrollComponent = () => {
  //   const containerRef = useRef(null);

  //   useEffect(() => {
  //     const scroller = new LocomotiveScroll({
  //       el: containerRef.current,
  //       smooth: true,
  //     });

  //     scroller.on("scroll", ScrollTrigger.update);

  //     ScrollTrigger.scrollerProxy(containerRef.current, {
  //       scrollTop(value) {
  //         return arguments.length
  //           ? scroller.scrollTo(value, 0, 0)
  //           : scroller.scroll.instance.scroll.y;
  //       },
  //       getBoundingClientRect() {
  //         return {
  //           left: 0,
  //           top: 0,
  //           width: window.innerWidth,
  //           height: window.innerHeight,
  //         };
  //       },
  //     });

  //     ScrollTrigger.addEventListener("refresh", () => scroller.update());
  //     ScrollTrigger.refresh();

  //   }, []); // Only run once on mount

  //   useEffect(() => {

  //     const scrollColorElems = document.querySelectorAll("[data-bgcolor]");

  //     const handleScrollColor = (colorSection, i) => {
  //       const prevBg = i === 0 ? "" : scrollColorElems[i - 1].dataset.bgcolor;
  //       const prevText = i === 0 ? "" : scrollColorElems[i - 1].dataset.textcolor;

  //       ScrollTrigger.create({
  //         trigger: colorSection,
  //         scroller: containerRef.current,
  //         start: "top 50%",
  //         onEnter: () =>
  //           gsap.to("body", {
  //             backgroundColor: colorSection.dataset.bgcolor,
  //             color: colorSection.dataset.textcolor,
  //             overwrite: "auto",
  //           }),
  //         onLeaveBack: () =>
  //           gsap.to("body", {
  //             backgroundColor: prevBg,
  //             color: prevText,
  //             overwrite: "auto",
  //           }),
  //       });
  //     };

  //     scrollColorElems.forEach(handleScrollColor);

  //   }, []);
  // }; ref={SmoothScrollComponent.containerRef}

  return (
    <>
      <div className="container">
        <section id="archiving" data-bgcolor="#bcb8ad" data-textcolor="#032f35">
          <h2 data-scroll data-scroll-speed="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </section>

        <section id="projects" data-bgcolor="#536fae" data-textcolor="#eacbd1">
          <h2 data-scroll data-scroll-speed="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </section>

        <section id="contact" data-bgcolor="#e3857a" data-textcolor="#f1dba7">
          <h2 data-scroll data-scroll-speed="1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
        </section>
      </div>
    </>
  );
}
