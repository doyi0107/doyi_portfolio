"use client";
import "./page.modul.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionsRef = useRef([]);
  const imagesRef = useRef([]);

  useEffect(() => {
    // Initialize LocomotiveScroll or any other scroll library here

    // Define observer configuration
    let config = {
      rootMargin: "0px",
      threshold: 0,
    };

    // Create IntersectionObserver for sections
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          intersectionHandler(entry);
        }
      });
    }, config);

    // Observe sections
    sectionsRef.current.forEach((section) => {
      observer.observe(section);
    });

    // Observe images (if images array is defined)
    imagesRef.current.forEach((image) => {
      observer.observe(image);
    });

    return () => {
      // Cleanup: Disconnect observer when component unmounts
      observer.disconnect();
    };
  }, []); // Empty dependency array ensures useEffect runs once on mount

  function intersectionHandler(entry) {
    const current = document.querySelector(".section.active");
    const next = entry.target;
    const header = next.querySelector(".section--header");

    if (current) {
      current.classList.remove("active");
    }
    if (next) {
      next.classList.add("active");
      document.body.style.setProperty("--color-bg", next.dataset.bgcolor);
    }
  }

  return (
    <>
      <div className="sections">
        <section
          ref={(el) => (sectionsRef.current[1] = el)}
          id="archiving"
          data-bgcolor="#c96958"
        >
          <h2>Archiving</h2>
        </section>

        <section
          ref={(el) => (sectionsRef.current[2] = el)}
          id="projects"
          data-bgcolor="#408fb0"
        >
          <h2>Projects</h2>
        </section>

        <section
          ref={(el) => (sectionsRef.current[3] = el)}
          id="contact"
          data-bgcolor="#ceb15a"
        >
          <h2>Contact</h2>
        </section>
      </div>
    </>
  );
}