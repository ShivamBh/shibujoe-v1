import React, { ReactNode, useLayoutEffect } from "react";
import cn from "clsx";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SiteContainer from "../SiteContainer";
import Lenis from "@studio-freight/lenis";
import s from "./layout.module.scss";

function DefaultLayout({ children }: { children: ReactNode }) {
  // useLayoutEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 3,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brs54l4xou
  //     direction: "vertical", // vertical, horizontal
  //     gestureDirection: "vertical", // vertical, horizontal, both
  //     smooth: true,
  //     mouseMultiplier: 1,
  //     smoothTouch: false,
  //     touchMultiplier: 2,
  //     infinite: false,
  //   });

  //   function raf(time: any) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // });
  return (
    <>
      <SiteContainer>
        {/* <Navbar /> */}
        <main className={cn(s["layout-main"])}>{children}</main>
      </SiteContainer>
      <Footer />
    </>
  );
}

export default DefaultLayout;
