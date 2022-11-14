import React, { ReactNode } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import SiteContainer from "../SiteContainer";

function DefaultLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteContainer>
        <Navbar />
        <main className="main-body">{children}</main>
        <Footer />
      </SiteContainer>
    </>
  );
}

export default DefaultLayout;
