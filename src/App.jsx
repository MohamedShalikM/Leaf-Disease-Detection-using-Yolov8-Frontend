import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ImageUpload from "./components/ImageUpload";
import ResultDisplay from "./components/ResultDisplay";
import DiseasesInfo from "./components/DiseaseInfo";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { useTranslation } from "react-i18next";
function App() {

  const [selectedImage, setSelectedImage] = useState(null);
  const [detectionResult, setDetectionResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageSelect = async (file) => {
    setSelectedImage(file);
    setError(null);
    setDetectionResult(null);
  };

  const handleDetection = async (file) => {
    setLoading(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Update the URL to match your FastAPI backend
      const response = await fetch("http://localhost:8000/detect", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Detection failed. Please try again.");
      }

     const data = await response.json();

     if (!data.detections || data.detections.length === 0) {
       throw new Error("No disease detected.");
     }

     setDetectionResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setSelectedImage(null);
    setDetectionResult(null);
    setError(null);
  };
  const { t, i18n } = useTranslation();
  return (
    <div className="app">
      <Header />
      <Hero />
      <main className="app-main">
        <div className="container">
          <div className="content-wrapper">
            <div className="titles">  <h1>{t("app.title")}</h1>
            <p>{t("app.description")}</p></div>
          
            {/* <div className="left-section"> */}
            <ImageUpload
              onImageSelect={handleImageSelect}
              selectedImage={selectedImage}
              onDetect={handleDetection}
              loading={loading}
              error={error}
            />
            {/* </div> */}
            <div className="divider"></div>
            {/* <div className="right-section"> */}
            {detectionResult ? (
              <ResultDisplay result={detectionResult} onClear={handleClear} />
            ) : (
              <DiseasesInfo />
            )}
            {/* </div> */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
