import HeroSection from "../HeroSection";
import NavBar from "../NavBar";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const Home = () => {
  useGSAP(() => {
    gsap.fromTo(
      "body",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.8,
      }
    );
  });
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </>
  );
};

export default Home;
