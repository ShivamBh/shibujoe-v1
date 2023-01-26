import cn from "clsx";
import s from "./navbar.module.scss";

function Navbar() {
  return (
    <>
      <div className={cn(s.navbar)}>
        <div className={cn(s["navbar-wrapper"])}>
          <div className={cn(s.branding)}>
            <p className="navbar-text">Made for humans.</p>
          </div>
          <div className={cn(s.menu)}>
            <p>Work</p>
            <p>About</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
