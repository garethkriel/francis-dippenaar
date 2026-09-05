'use client';
import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Motion() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return; // CSS handles the reduced-motion state

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      // ------- HERO -------
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });
      tl.to('.hero-line-1', { y: '0%', duration: 1.2 })
        .to('.hero-line-2', { y: '0%', duration: 1.2 }, '-=0.9')
        .to('.hero-eyebrow', { opacity: 1, y: 0, duration: 0.8 }, '-=1.0')
        .to('.hero-para', { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
        .to('.hero-cta', { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
        .to('.hero-meta', { opacity: 1, y: 0, duration: 0.9 }, '-=0.6');

      gsap.fromTo(
        '.hero-image',
        { scale: 1.15 },
        { scale: 1.02, duration: 2.2, ease: 'expo.out' }
      );

      // Slow hero parallax while user scrolls the first viewport
      gsap.to('.hero-image', {
        yPercent: 12,
        ease: 'none',
        scrollTrigger: { trigger: '#top', start: 'top top', end: 'bottom top', scrub: true },
      });

      // ------- SECTION REVEALS -------
      gsap.utils.toArray<HTMLElement>('.js-reveal').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'expo.out',
            scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          }
        );
      });

      // Stagger children reveals
      gsap.utils.toArray<HTMLElement>('.js-reveal-stagger').forEach((el) => {
        const children = Array.from(el.children) as HTMLElement[];
        gsap.fromTo(
          children,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.0,
            ease: 'expo.out',
            stagger: 0.08,
            scrollTrigger: { trigger: el, start: 'top 82%', once: true },
          }
        );
      });

      // ------- IMAGE PARALLAX -------
      gsap.utils.toArray<HTMLElement>('.js-parallax').forEach((frame) => {
        const target = frame.querySelector<HTMLElement>('.parallax-target');
        if (!target) return;
        gsap.to(target, {
          yPercent: -8,
          ease: 'none',
          scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: true },
        });
      });

      // ------- SCROLL LINE -------
      gsap.to('.scroll-line', {
        scaleY: 0,
        transformOrigin: 'top center',
        ease: 'none',
        scrollTrigger: { trigger: '#top', start: 'top top', end: '30% top', scrub: true },
      });
    });

    return () => ctx.revert();
  }, []);

  return null;
}
