import { useEffect, useState } from "react";
import Home from "./components/pages/Home";
import Loader from "./components/Loader";
import ReactLenis from "@studio-freight/react-lenis";
function App() {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  const lenisOptions = {
    lerp: 0.1,
    duration: 1.5,
    smoothTouch: false, //smooth scroll for touch devices
    smooth: true,
  };

  const [loading, setLoading] = useState(true);

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
