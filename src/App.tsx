import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import Loader from "./components/Loader";
import ReactLenis from "@studio-freight/react-lenis";
function App() {
  const [resize, setResize] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2500);
    const handleResize = () => {
      setResize((prev) => prev + 1);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [resize]);

  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <ReactLenis root options={lenisOptions}>
      <Home />
      <div style={{ width: "100vw", height: "300vh" }}></div>
    </ReactLenis>
  );
}

export default App;
