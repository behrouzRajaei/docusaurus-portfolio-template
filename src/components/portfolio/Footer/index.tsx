import React, { useEffect, useState } from "react";

import DesktopFooter from "./desktop";
import MobileFooter from "./mobile";

export default function Footer() {

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

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
}
