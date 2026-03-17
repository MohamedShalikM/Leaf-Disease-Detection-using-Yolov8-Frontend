import { AlertCircle, CheckCircle2, Zap, RotateCcw } from "lucide-react";
import "./ResultDisplay.css";

function ResultDisplay({ result, onClear }) {
  const getDiseaseColor = (disease) => {
    const diseaseMap = {
      "Healthy Leaf": "healthy",
      "Bacterial Spot": "bacterial",
      "Early Blight": "blight",
      "Late Blight": "blight-late",
      "Septoria Leaf Spot": "septoria",
      "Yellow Leaf Curl Virus": "ylcv",
      "Mosaic Virus": "mosaic",
      "Leaf Mold": "mold",
      "Spider Mites": "mites",
    };
    return diseaseMap[disease] || "unknown";
  };

  const getDiseaseSeverity = (confidence) => {
    if (confidence >= 0.9) return "Critical";
    if (confidence >= 0.7) return "High";
    if (confidence >= 0.5) return "Medium";
    return "Low";
  };

  const topDetection = result.detections?.[0];
  const CONFIDENCE_THRESHOLD = 0.6;
  const isValidDetection =
    topDetection && topDetection.confidence >= CONFIDENCE_THRESHOLD;
  const allDetections = result.detections || [];

  const diseaseDescriptions = {
    "Healthy Leaf": {
      description: "Your leaf is perfectly healthy!",
      recommendations: [
        "Continue regular watering and care",
        "Monitor for any changes",
        "Maintain proper ventilation",
      ],
    },
    "Bacterial Spot": {
      description: "Bacterial leaf spots are caused by bacterial pathogens",
      recommendations: [
        "Remove infected leaves",
        "Apply copper-based fungicide",
        "Improve air circulation",
        "Avoid overhead watering",
      ],
    },
    "Early Blight": {
      description:
        "Early blight is a fungal disease caused by Alternaria solani",
      recommendations: [
        "Remove infected lower leaves",
        "Apply fungicide (Mancozeb)",
        "Avoid wetting foliage",
        "Space plants properly",
      ],
    },
    "Late Blight": {
      description:
        "Late blight is a serious fungal disease caused by Phytophthora infestans",
      recommendations: [
        "Isolate plant immediately",
        "Remove and destroy infected parts",
        "Apply systemic fungicide",
        "Ensure good drainage",
      ],
    },
    "Septoria Leaf Spot": {
      description:
        "Septoria leaf spot is caused by the fungus Septoria lycopersici",
      recommendations: [
        "Remove lower infected leaves",
        "Apply fungicide regularly",
        "Improve air circulation",
        "Mulch to prevent spore splash",
      ],
    },
    "Yellow Leaf Curl Virus": {
      description: "YLCV is a viral disease spread by whiteflies",
      recommendations: [
        "Remove entire plant if heavily infected",
        "Control whitefly population",
        "Plant resistant varieties",
        "Use reflective mulch",
      ],
    },
    "Mosaic Virus": {
      description: "Mosaic virus causes mottled patterns on leaves",
      recommendations: [
        "Remove infected plant",
        "Control aphids and other vectors",
        "Sanitize tools between plants",
        "Plant virus-resistant varieties",
      ],
    },
    "Leaf Mold": {
      description: "Leaf mold is a fungal disease favoring high humidity",
      recommendations: [
        "Increase air circulation",
        "Reduce humidity levels",
        "Apply sulfur fungicide",
        "Remove infected leaves",
      ],
    },
    "Spider Mites": {
      description: "Spider mites are tiny pests that cause stippling on leaves",
      recommendations: [
        "Spray with neem oil",
        "Increase humidity",
        "Prune heavily infested areas",
        "Use water spray to dislodge mites",
      ],
    },
  };

const diseaseInfo = isValidDetection
  ? diseaseDescriptions[topDetection.name] || {
      description: "Unknown disease detected",
      recommendations: [
        "Consult with a plant pathologist",
        "Monitor plant condition closely",
      ],
    }
  : {
      description: "This does not appear to be a tomato leaf.",
      recommendations: [
        "Upload a clear tomato leaf image",
        "Ensure the leaf fills most of the frame",
        "Avoid unrelated objects like cars or phones",
      ],
    };

  return (
    <div className="result-display">
      <div className="result-header">
        <h2 className="result-title">Detection Results</h2>
        <button
          className="btn-reset"
          onClick={onClear}
          title="Analyze another image"
        >
          <RotateCcw size={18} />
        </button>
      </div>

      {isValidDetection ? (
        <div
          className={`result-card disease-${getDiseaseColor(topDetection.name)}`}
        >
          <div className="result-icon">
            {topDetection.name === "Healthy Leaf" ? (
              <CheckCircle2 size={48} />
            ) : (
              <AlertCircle size={48} />
            )}
          </div>

          <div className="result-content">
            <h3 className="disease-name">{topDetection.name}</h3>

            <div className="confidence-bar">
              <div
                className="confidence-fill"
                style={{ width: `${topDetection.confidence * 100}%` }}
              ></div>
            </div>
            <p className="confidence-text">
              Confidence:{" "}
              <strong>{(topDetection.confidence * 100).toFixed(1)}%</strong>
              <span className="severity-badge">
                {getDiseaseSeverity(topDetection.confidence)}
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="result-card disease-unknown">
          <div className="result-icon">
            <AlertCircle size={48} />
          </div>

          <div className="result-content">
            <h3 className="disease-name">Unknown Object</h3>
            <p className="confidence-text">
              Please upload a clear tomato leaf image.
            </p>
          </div>
        </div>
      )}

      {allDetections.length > 1 && (
        <div className="other-detections">
          <h4 className="other-title">Other Detected Issues</h4>
          <div className="detection-list">
            {allDetections.slice(1).map((detection, index) => (
              <div key={index} className="detection-item">
                <span className="detection-name">{detection.name}</span>
                <span className="detection-confidence">
                  {(detection.confidence * 100).toFixed(1)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="disease-info">
        <h4 className="info-title">
          <Zap size={18} />
          About this condition
        </h4>
        <p className="info-description">{diseaseInfo.description}</p>
      </div>

      <div className="recommendations">
        <h4 className="recommendations-title">Recommended Actions</h4>
        <ul className="recommendations-list">
          {diseaseInfo.recommendations.map((rec, index) => (
            <li key={index} className="recommendation-item">
              <span className="recommendation-bullet"></span>
              {rec}
            </li>
          ))}
        </ul>
      </div>

      <div className="result-footer">
        <p className="footer-note">
          ⓘ This is an AI-based analysis. For critical issues, consult a plant
          specialist.
        </p>
      </div>
    </div>
  );
}

export default ResultDisplay;
