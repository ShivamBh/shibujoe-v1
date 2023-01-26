import cn from "clsx";
import s from "./banner.module.scss";

function Banner() {
  return (
    <section className={cn(s.banner)}>
      <div className={cn(s["banner-image"])}></div>
      {/* <div className="banner-project-2 bg-hero-2 bg-cover w-3/5 rounded-sm"></div> */}
    </section>
  );
}

export default Banner;
