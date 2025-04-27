export default function Header() {
    return (
      <>
        {/* Main Header */}
        <header className="header">
          <div className="header-left">
            <img src="/logo.png" alt="Logo" className="logo-img" /> {/* You can replace /logo.png */}
          </div>
  
          <div className="header-center">
            <nav className="nav-links">
              <a href="#">SHOP</a>
              <a href="#">SKILLS</a>
              <a href="#">STORIES</a>
              <a href="#">ABOUT</a>
              <a href="#">CONTACT US</a>
            </nav>
          </div>
  
          <div className="header-right">
            <span>🔍</span> {/* Search Icon */}
            <span>🤍</span> {/* Wishlist Icon */}
            <span>🛒</span> {/* Cart Icon */}
            <span>👤</span> {/* Account Icon */}
            <span>ENG ⌄</span> {/* Language Selector */}
          </div>
        </header>
      </>
    );
  }  