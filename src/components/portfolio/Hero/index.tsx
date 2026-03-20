import React, { useEffect, useState } from "react";

import DesktopHero from "./desktop";
import MobileHero from "./mobile";

export default function Hero() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");

    const handleChange = () => {
      setIsMobile(media.matches);
    };

    handleChange();

    media.addEventListener("change", handleChange);

    return () => {
      media.removeEventListener("change", handleChange);
    };
  }, []);

  return isMobile ? <MobileHero /> : <DesktopHero />;
}
