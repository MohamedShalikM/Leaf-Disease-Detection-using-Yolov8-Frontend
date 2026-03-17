import "./Hero.css";
import { ArrowRight, ScanLine, Zap } from "lucide-react";
import heroImage from "../assets/hero.webp"; // replace with your image

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* LEFT IMAGE */}
        <div className="hero-image">
          <img src={heroImage} alt="Tomato Detection" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-content">
          <div className="hero-badge">
            <Zap size={16} />
            POWERED BY YOLOV8
          </div>

          <h1 className="hero-title">
            Early Detection for
            <span> Healthier Harvests</span>
          </h1>

          <p className="hero-description">
            Harnessing YOLOv8 AI to identify tomato leaf diseases in seconds
            with professional-grade accuracy. Protect your yield before symptoms
            spread.
          </p>

          <div className="hero-buttons">
            <a className='hero-anchors' href="#imageUploader"> <button className="btn-primary">
              <ScanLine size={18} />
              Start Detection
            </button></a>
           
           
            <a className='hero-anchors' href="#DiseaseInfo"><button className="btn-secondary">
              Learn More
              <ArrowRight size={18} />
            </button></a>
            
          </div>

          {/* <div className="hero-trust">
            <div className="avatars">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>

            <p>
              Trusted by <strong>2,000+</strong> farmers worldwide
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default Hero;
