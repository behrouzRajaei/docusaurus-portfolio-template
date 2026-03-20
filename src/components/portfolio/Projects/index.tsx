import React, { useEffect, useState } from "react";

import DesktopProjects from "./desktop";
import MobileProjects from "./mobile";

export default function Projects() {

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

  return isMobile ? <MobileProjects /> : <DesktopProjects />;
}
