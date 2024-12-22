import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Loader() {
  const loaderShine = useRef<HTMLImageElement>(null);
  const loaderLogo = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    gsap.from([loaderShine.current, loaderLogo.current], {
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    });
    gsap.to([loaderShine.current, loaderLogo.current], {
      opacity: 0,
      duration: 0.7,
      delay: 1.8,
    });
  });

  return (
    <div className="loaderDiv">
      <img
        ref={loaderShine}
        src="/public/assets/preload_gradient.webp"
        className="logo-shine"
      />
      <img
        ref={loaderLogo}
        src="/public/assets/logo_gradient.webp"
        className="logo-loader-text"
      />
    </div>
  );
}

export default Loader;
