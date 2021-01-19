import React from "react";
import "./App.css";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="App">
      <input
        type="radio"
        id="en"
        name="language"
        value="en"
        onChange={(e) => handleChange(e)}
      />
      <label>English</label>
      <input
        type="radio"
        id="female"
        name="language"
        value="hin"
        onChange={(e) => handleChange(e)}
      />
      <label>हिंदी</label>
      <input
        type="radio"
        id="other"
        name="language"
        value="mar"
        onChange={(e) => handleChange(e)}
      />
      <label>मराठी</label>
      <h1>{t("welcome")}</h1>
    </div>
  );
}

export default App;
