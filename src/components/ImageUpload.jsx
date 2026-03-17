import { useState, useRef } from "react";
import Webcam from "react-webcam";
import { Upload, Camera, AlertCircle, X } from "lucide-react";
import styles from "./ImageUpload.module.css";

function ImageUpload({
  onImageSelect,
  selectedImage,
  onDetect,
  loading,
  error,
}) {
  const [cameraActive, setCameraActive] = useState(false);
  const webcamRef = useRef(null);
  const fileInputRef = useRef(null);

  const videoConstraints = {
    width: 640,
    height: 480,
    facingMode: "environment",
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) onImageSelect(file);
  };

  const handleRemoveImage = () => {
    onImageSelect(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const captureImage = () => {
    const imageSrc = webcamRef.current.getScreenshot();

    if (!imageSrc) return;

    fetch(imageSrc)
      .then((res) => res.blob())
      .then((blob) => {
        const file = new File([blob], "camera-image.jpg", {
          type: "image/jpeg",
        });
        onImageSelect(file);
        setCameraActive(false);
      });
  };
  const stopCamera = () => {
    const stream = webcamRef.current?.video?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setCameraActive(false);
  };

  const handleDetectClick = () => {
    if (selectedImage && onDetect) onDetect(selectedImage);
  };

  return (
    <div className={styles["image-upload"]} id="imageUploader">
      <h2 className={styles["section-title"]}>Upload Image</h2>

      {/* CAMERA VIEW */}
      {cameraActive && (
        <div className={styles["camera-container"]}>
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            videoConstraints={videoConstraints}
            className={styles["camera-video"]}
          />

          <div className={styles["camera-controls"]}>
            <button onClick={captureImage} className={styles["btn-primary"]}>
              <Camera size={18} />
              Capture
            </button>

            <button
              onClick={() => setCameraActive(false)}
              className={styles["btn-secondary"]}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* UPLOAD / PREVIEW AREA */}
      {!cameraActive && (
        <>
          {selectedImage ? (
            <div className={styles["image-preview"]}>
              <button
                className={styles["remove-image-btn"]}
                onClick={handleRemoveImage}
              >
                <X size={18} />
              </button>

              <img
                src={URL.createObjectURL(selectedImage)}
                alt="preview"
                className={styles["preview-image"]}
              />

              <p>{selectedImage.name}</p>
            </div>
          ) : (
            <div
              className={styles["upload-area"]}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={40} />
              <p>Drag & Drop Image</p>
              <p>or Click to Upload</p>

              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={handleFileChange}
                className={styles["file-input"]}
              />
            </div>
          )}

          <div className={styles["button-group"]}>
            <button
              className={styles["btn-primary"]}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={18} /> Choose File
            </button>

            <button
              className={styles["btn-secondary"]}
              onClick={() => setCameraActive(true)}
            >
              <Camera size={18} /> Use Camera
            </button>
          </div>
        </>
      )}

      {selectedImage && !cameraActive && (
        <button
          className={styles["btn-detect"]}
          onClick={handleDetectClick}
          disabled={loading}
        >
          {loading ? "Analyzing..." : "Detect Disease"}
        </button>
      )}

      {error && (
        <div className={styles["error-message"]}>
          <AlertCircle size={16} />
          {error}
        </div>
      )}
    </div>
  );
}

export default ImageUpload;
