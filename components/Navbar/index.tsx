function Header() {
  return (
    <>
      <div className="navbar-main text-slate-50">
        <div className="navbar-wrapper flex justify-between text-xl align-top">
          <div className="navbar-branding ">
            <p className="logo-text text-8xl">SHIBUJOE</p>
          </div>
          <div className="navbar-menu flex flex-col justify-start text-right">
            <p className="menu-text">INDEX</p>
            <p className="menu-text">ABOUT</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
