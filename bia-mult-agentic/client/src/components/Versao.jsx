import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

const Versao = () => {
  const [apiStatus, setApiStatus] = useState("checking");

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/versao`, { cache: "no-cache" });
        setApiStatus(res.ok ? "online" : "offline");
      } catch {
        setApiStatus("offline");
      }
    };

    checkStatus();
  }, []);

  const getStatusIcon = () => {
    switch (apiStatus) {
      case "online": return "🟢";
      case "offline": return "🔴";
      default: return "🟡";
    }
  };

  const getStatusText = () => {
    switch (apiStatus) {
      case "online": return "Online";
      case "offline": return "Offline";
      default: return "Verificando...";
    }
  };

  return (
    <div className="about-page">
      <div className="about-content">
        <div className="feature-grid">
          <div className="feature-card highlight">
            <h3>Status da API</h3>
            <h4>{getStatusIcon()} {getStatusText()}</h4>
          </div>
        </div>
      </div>

      <div className="about-footer">
        <Link to="/" className="back-button">
          ← Voltar
        </Link>
      </div>
    </div>
  );
};

export default Versao;
