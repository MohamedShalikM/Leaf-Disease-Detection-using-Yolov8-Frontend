import "./Header.css";
import { Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  return (
    <header className="header" data-lang={i18n.language}>
      <div className="header-container">
        {/* Logo Section */}
        <div className="logo-section">
          <div className="logo-icon">
            <Leaf size={28} />
          </div>

          <div className="logo-text">
            <h1 className="header-title">{t("header.title")}</h1>
            <p className="header-subtitle">{t("header.subtitle")}</p>
          </div>
        </div>

        {/* Navigation + Language Switcher */}
        <nav className="nav-links">
          <button className="btn-dashboard">{t("nav.about")}</button>

          <div className="language-switcher">
            <button
              className={`lang-btn ${i18n.language === "en" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("en")}
            >
              EN
            </button>
            <button
              className={`lang-btn ${i18n.language === "ta" ? "active" : ""}`}
              onClick={() => i18n.changeLanguage("ta")}
            >
              தமிழ்
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
