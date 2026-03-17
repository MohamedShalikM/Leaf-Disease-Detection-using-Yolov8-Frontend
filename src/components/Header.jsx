import "./Header.css";
import { Leaf} from "lucide-react";

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <Leaf size={28} />
          </div>

          <div className="logo-text">
            <h1 className="header-title">Tomato Leaf Disease Detection</h1>
            <p className="header-subtitle">AI-POWERED DIAGNOSIS USING YOLOV8</p>
          </div>
        </div>

        {/* Navigation */}
         <nav className="nav-links">
          {/* <a href="#" className="nav-link">
            Research
          </a>
          <a href="#" className="nav-link">
            Datasets
          </a> */}

          <button className="btn-dashboard">About us</button>
        </nav> 
      </div>
    </header>
  );
}

export default Header;
