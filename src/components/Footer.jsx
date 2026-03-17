import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brand Section */}
        <div className="footer-section brand">
          <h2>Tomato Leaf Disease Detection</h2>
          <p>AI-powered disease detection using YOLOv8 for healthier crops.</p>
        </div>

        {/* Features */}
        <div className="footer-section">
          <h3>Features</h3>
          <ul>
            <li>Image Upload</li>
            <li>Camera Capture</li>
            <li>Disease Detection</li>
            <li>Smart Recommendations</li>
          </ul>
        </div>

        {/* Detectable Diseases */}
        {/* <div className="footer-section">
          <h3>Detectable Diseases</h3>
          <ul>
            <li>Healthy Leaf</li>
            <li>Early & Late Blight</li>
            <li>Bacterial Spot</li>
            <li>Viral Diseases</li>
          </ul>
        </div> */}

        {/* Resources */}
        <div className="footer-section">
          <h3>Resources</h3>
          <ul>
            <li>
              <a href="https://docs.ultralytics.com" target="_blank">
                YOLOv8 Docs
              </a>
            </li>
            <li>
              <a href="https://react.dev" target="_blank">
                React Guide
              </a>
            </li>
            <li>
              <a href="https://vitejs.dev" target="_blank">
                Vite Docs
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        © 2026 Yolov8 | Built with React + Vite
      </div>
    </footer>
  );
}

export default Footer;
