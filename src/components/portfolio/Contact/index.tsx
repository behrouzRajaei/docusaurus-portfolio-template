import React, { useEffect, useState } from "react";

import DesktopContact from "./desktop";
import MobileContact from "./mobile";

export default function Contact() {

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

  return isMobile ? <MobileContact /> : <DesktopContact />;
}
