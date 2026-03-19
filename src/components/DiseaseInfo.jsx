import {
  AlertCircle,
  CheckCircle2,
  Microscope,
  Bug,
  Droplets,
} from "lucide-react";
import "./DiseaseInfo.css";
import { useTranslation } from "react-i18next";
function DiseasesInfo() {
  const { t, i18n } = useTranslation();
  const diseases = [
    {
      name: "disease-name-one",
      icon: CheckCircle2,
      color: "healthy",
      description: "disease-one-description",
    },
    {
      name: "disease-name-two",
      icon: AlertCircle,
      color: "bacterial",
      description: "disease-two-description",
    },
    {
      name: "disease-name-three",
      icon: AlertCircle,
      color: "blight",
      description: "disease-three-description",
    },
    {
      name: "disease-name-four",
      icon: AlertCircle,
      color: "blight-late",
      description: "disease-four-description",
    },
    {
      name: "disease-name-five",
      icon: AlertCircle,
      color: "septoria",
      description: "disease-five-description",
    },

    {
      name: "disease-name-six",
      icon: Droplets,
      color: "mold",
      description: "disease-six-description",
    },
    {
      name: "disease-name-seven",
      icon: Bug,
      color: "mites",
      description: "disease-seven-description",
    },
  ];

  return (
    <div id="DiseaseInfo" className="diseases-info">
      <h2 className="section-title">{t("disease-info.section-title")}</h2>
      <p className="section-subtitle">{t("disease-info.section-subtitle")}</p>

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
              <h3 className="disease-card-name">
                {t(`disease-info.${disease.name}`)}
              </h3>
              <p className="disease-card-description">
                {t(`disease-info.${disease.description}`)}
              </p>
            </div>
          );
        })}
      </div>

      <div className="how-it-works">
        <h3 className="how-title">{t("disease-info.how-title")}</h3>
        <div className="steps">
          <div className="step">
            <div className="step-number">1</div>
            <div>
              <h4>{t("disease-info.step-one")}</h4>
              <p>{t("disease-info.step-one-desc")}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <div>
              <h4>{t("disease-info.step-two")}</h4>
              <p>{t("disease-info.step-two-desc")}</p>
            </div>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <div>
              <h4>{t("disease-info.step-three")}</h4>
              <p>{t("disease-info.step-three-desc")}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="tips-section">
        <h3 className="tips-title">📸 {t("disease-info.tips-title")}</h3>
        <ul className="tips-list">
          <li>{t("disease-info.tips-list-one")}</li>
          <li>{t("disease-info.tips-list-two")}</li>
          <li>{t("disease-info.tips-list-three")}</li>
          <li>{t("disease-info.tips-list-four")}</li>
          <li>{t("disease-info.tips-list-five")}</li>
        </ul>
      </div>
    </div>
  );
}

export default DiseasesInfo;
