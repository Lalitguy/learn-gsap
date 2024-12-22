import SlideUpAnchor from "./animated/SlideUpAnchor";

function NavBar() {
  return (
    <header className="nav-bar">
      <div className="nav-bar-inner">
        <a href="#">
          <img src="/assets/logo-new.png" className="logo" alt="logo" />
        </a>

        <SlideUpAnchor className="nav-order-btn" href="#">
          Order now
        </SlideUpAnchor>
      </div>
    </header>
  );
}

export default NavBar;
