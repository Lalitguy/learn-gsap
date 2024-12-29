import StaggeredText from "./animated/StaggeredText";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLenis } from "@studio-freight/react-lenis";
import ScrollTrigger from "gsap/ScrollTrigger";
import PopUpText from "./animated/PopUpText";
import { useMobileParallax } from "./hooks/UseParallax";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const HeroSection = () => {
  const timeline = gsap.timeline();
  useLenis();
  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      gsap.to(".image-container", {
        scale: 1.3,
        scrollTrigger: {
          scroller: "body",
          trigger: ".hero-wrap",
          scrub: 2,
          start: "top top",
          end: "bottom 30%",
          pin: true,
          snap: 0.1,
          onUpdate: (self) => {
            if (self?.progress >= 0.5) {
              const opacity = (self.progress - 0.5) * 2;
              gsap.to(".hero-text-section-anew", {
                opacity: opacity,
              });
            } else {
              let opacity = 1 - self?.progress * 2;
              if (opacity == 0.2) {
                opacity = 0;
              }
              gsap.to([".hero-text-section", ".desktop-hero-info-wrap"], {
                opacity: opacity,
                ease: "power1.out",
              });
            }
          },
        },
      });
    });
  });

  return (
    <section className="hero-wrap">
      <div className="hero-img-section">
        <picture className="image-container">
          <source
            media="(min-width: 768px)"
            srcSet="/assets/hero.webp"
          ></source>
          <img src="/assets/hero_mob.webp" />
        </picture>
      </div>

      <HeroHeading timeline={timeline} />

      <DesktopHeroInfo timeline={timeline} />
    </section>
  );
};

const HeroHeading = ({ timeline }: { timeline: GSAPTimeline }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useMobileParallax({
    ele: textRef,
    trigger: textRef,
  });

  return (
    <div className="hero-text-section mobile-parallax" ref={textRef}>
      <StaggeredText
        className="hero-text"
        parentClassName="negative-margin"
        delay={0.8}
      >
        Heavn
      </StaggeredText>
      <StaggeredText
        className="bigger-hero-text"
        delay={1.2}
        timeline={timeline}
      >
        One
      </StaggeredText>
    </div>
  );
};

const DesktopHeroInfo = ({ timeline }: { timeline: GSAPTimeline }) => {
  return (
    <>
      <div className="hero-text-section-anew desktop-hero-parallax">
        <p>HEAVN One</p>
        <p>
          <span>Brightens up your workday</span>, reduces tiredness and improves
          your sleep.
        </p>
      </div>

      <div className="desktop-hero-info-wrap">
        <PopUpText className="whiter" timeline={timeline}>
          The world's brightest desk luminaire.
        </PopUpText>
        <PopUpText timeline={timeline} className="grayer">
          Scroll to learn more.
        </PopUpText>
      </div>
    </>
  );
};

export default HeroSection;
