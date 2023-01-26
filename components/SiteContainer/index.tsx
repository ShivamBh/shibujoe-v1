import React from "react";
import cn from "clsx";
import s from "./site-container.module.scss";

function SiteContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={cn(s["site-container"])}>{children}</div>
    </>
  );
}

export default SiteContainer;
