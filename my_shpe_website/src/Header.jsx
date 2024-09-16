import shpeLogo from './assets/images/shpe_logo_color.png';
import psuLogo from './assets/images/psu_vertical_logo_color.png';
import verticalLine from './assets/images/vertical_line_black.png'; // Import the vertical line

function Header() {
  return (
    <header>
      <div className="logo-container">
        <img src={shpeLogo} alt="SHPE Logo" className="logo" />
        <img src={verticalLine} alt="Vertical Line" className="vertical-line" /> {/* Vertical line added */}
        <img src={psuLogo} alt="PSU Logo" className="logo" />
      </div>
      <h1>My website</h1>
    </header>
  );
}

export default Header;