'use client';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import mail from '/public/contact/email.webp';
import phone from '/public/contact/phone.webp';
import doyi from '/public/contact/contact_doyi.png';
import styles from './Contact.module.css';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const contactTextRef = useRef(null);
  const contactInfoRef = useRef(null);

  useEffect(() => {
    const contactText = contactTextRef.current;
    const contactInfo = contactInfoRef.current;

    // Initial state
    gsap.set(contactInfo, {
      x: '-100%',
      opacity: 0,
    });

    gsap.set(contactText, {
      opacity: 1,
      x: 0,
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#contact',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play none none reverse',
      },
    });

    // CONTACT ME stays for 3 seconds then slides right
    tl.to(contactText, {
      x: '100%',
      opacity: 0,
      duration: 1.2,
      delay: 3,
      ease: 'power2.inOut',
    })
      // Then show contact info from left
      .to(
        contactInfo,
        {
          x: '0',
          opacity: 1,
          duration: 1,
          ease: 'power2.inOut',
        },
        '-=0.6',
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contact_text_wrap}>
        <div className={styles.contact_text1}>THANK YOU</div>

        {/* Contact Me Text */}
        <div className={styles.contact_name} ref={contactTextRef}>
          CONTACT ME
        </div>

        {/* Contact Info Container */}
        <div className={styles.contact_info_container} ref={contactInfoRef}>
          <div>
            <Image className={styles.contact_doyi} src={doyi} alt="mail" />
          </div>
          <div className={styles.info_item_wrap}>
            <div className={styles.info_item}>
              <Image className={styles.mail} src={mail} alt="mail" />
              <span>doyi9917@email.com</span>
            </div>
            <div className={styles.info_item}>
              <Image className={styles.phone} src={phone} alt="phone" />
              <span>010-7277-7361</span>
            </div>
          </div>
        </div>

        <div className={styles.contact_text2}>THANK YOU</div>
      </div>
    </section>
  );
}
