import React, { useEffect, useState } from "react";

import DesktopMySkills from "./desktop";
import MobileMySkills from "./mobile";

export default function MySkills() {

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

  return isMobile ? <MobileMySkills /> : <DesktopMySkills />;
}
