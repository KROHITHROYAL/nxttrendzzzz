// Write your JS code here
const Header = () => (
  <nav className="nav-header">
    <div className="navbar-content">
      <div className="nav-bar-mobile-logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="website-nav-logo"
        />

        <button className="nav-mobile-btn" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
            alt="navlogout"
            className="nav-bar-img"
          />
        </button>
      </div>

      <div className="nav-bar-content-large-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
          alt="website logo"
          className="website-logo"
        />

        <ul className="navbar-menu">
          <li className="nav-menu-item">Home</li>
          <li className="nav-menu-item">Cart</li>
          <li className="nav-menu-item">Products</li>
        </ul>
        <button type="button" className="logout-btn">
          Login
        </button>
      </div>
    </div>
    <div className="nav-menu-mobile">
      <ul className="nav-menu-list-mobile">
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nv-bar-img"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png "
            alt="nav products"
            className="nv-bar-img"
          />
        </li>
        <li className="nav-menu-item-mobile">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png  "
            alt="nav cart"
            className="nv-bar-img"
          />
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
