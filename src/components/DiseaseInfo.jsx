import {
  AlertCircle,
  CheckCircle2,
  Microscope,
  Bug,
  Droplets,
} from "lucide-react";
import "./DiseaseInfo.css";

function DiseasesInfo() {
  const diseases = [
    {
      name: "Healthy Leaf",
      icon: CheckCircle2,
      color: "healthy",
      description:
        "Your tomato leaf is in perfect condition with no visible diseases or pests.",
    },
    {
      name: "Bacterial Spot",
      icon: AlertCircle,
      color: "bacterial",
      description:
        "Small dark spots caused by bacterial pathogen, typically with yellow halos.",
    },
    {
      name: "Early Blight",
      icon: AlertCircle,
      color: "blight",
      description:
        "Concentric brown rings on older leaves, progressing upward on the plant.",
    },
    {
      name: "Late Blight",
      icon: AlertCircle,
      color: "blight-late",
      description:
        "Water-soaked lesions that rapidly spread, causing severe leaf damage.",
    },
    {
      name: "Septoria Leaf Spot",
      icon: AlertCircle,
      color: "septoria",
      description:
        "Small circular spots with dark borders and gray centers with tiny black dots.",
    },

  
    {
      name: "Leaf Mold",
      icon: Droplets,
      color: "mold",
      description:
        "Fungal disease causing velvety yellow-brown spots on leaf undersides.",
    },
    {
      name: "Spider Mites",
      icon: Bug,
      color: "mites",
      description:
        "Tiny pests causing stippling and fine webbing on leaves, prefer hot dry conditions.",
    },
  ];

  return (
    <div id='DiseaseInfo' className="diseases-info">
      <h2 className="section-title">Detectable Diseases</h2>
      <p className="section-subtitle">
        This YOLOv8 model can identify the following tomato leaf conditions:
      </p>

      <div className="diseases-grid">
        {diseases.map((disease, index) => {
          const IconComponent = disease.icon;
          return (
            <div
              key={index}
              className={`disease-card disease-${disease.color}`}
            >
              <div className="disease-card-icon">
                <IconComponent size={24} />
              </div>
              <h3 className="disease-card-name">{disease.name}</h3>
              <p className="disease-card-description">{disease.description}</p>
            </div>
          );
        })}
      </div>

      <div className="how-it-works">
        <h3 className="how-title">How It Works</h3>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div>
              <h4>Capture Image</h4>
              <p>Upload or take a photo of the tomato leaf affected area</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div>
              <h4>AI Analysis</h4>
              <p>YOLOv8 model analyzes the image to detect diseases</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div>
              <h4>Get Results</h4>
              <p>Receive diagnosis with confidence score and recommendations</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tips-section">
        <h3 className="tips-title">📸 Tips for Best Results</h3>
        <ul className="tips-list">
          <li>Ensure good lighting when capturing the image</li>
          <li>Focus on the affected area of the leaf</li>
          <li>Include the entire diseased portion in frame</li>
          <li>Avoid shadows and glare on the leaf</li>
          <li>Use high-quality images for better accuracy</li>
        </ul>
      </div>
    </div>
  );
}

export default DiseasesInfo;
