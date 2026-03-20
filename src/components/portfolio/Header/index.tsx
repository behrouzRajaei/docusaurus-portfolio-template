import React, { useEffect, useState } from "react";

import DesktopHeader from "./desktop";
import MobileHeader from "./mobile";

export default function Header() {

  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    check();
    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  /* ⛔ جلوگیری از render اشتباه اولیه */
  if (isMobile === null) return null;

  return isMobile ? <MobileHeader /> : <DesktopHeader />;
}
