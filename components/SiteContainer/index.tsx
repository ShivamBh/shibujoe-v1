import React from "react";

function SiteContainer({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="site-container p-8 min-h-screen bg-stone-900">
        {children}
      </div>
    </>
  );
}

export default SiteContainer;
