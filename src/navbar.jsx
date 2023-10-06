import logo from "./assets/lo.svg";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img src={logo} alt="SpaceX Logo" />
        </div>
        <ul className="nav-links">
          <li>
            <a href="https://www.spacex.com/vehicles/falcon-9/">FALCON 9</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/falcon-heavy/">
              FALCON HEAVY
            </a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/dragon/">DRAGON</a>
          </li>
          <li>
            <a href="https://www.spacex.com/vehicles/starship/">STARSHIP</a>
          </li>
          <li>
            <a href="https://www.spacex.com/humanspaceflight/">
              HUMAN SPACEFLIGHT
            </a>
          </li>
          <li>
            <a href="https://www.spacex.com/rideshare/">RIDESHARE</a>
          </li>
          <li>
            <a href="https://www.spacex.com/starshield/">STARSHIELD</a>
          </li>
          <li>
            <a href="https://www.starlink.com/">STARLINK</a>
          </li>
          <div className="SHOP">
            <li>
              <a href="https://shop.spacex.com/">SHOP</a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}
