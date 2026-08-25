import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:8080";

const Versao = () => {
  const [versao, setVersao] = useState(null);
  const [loading, setLoading] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    const fetchVersao = async () => {
      try {
        const res = await fetch(`${apiUrl}/api/versao`);
        if (!res.ok) {
          throw new Error(`Erro ${res.status}: ${res.statusText}`);
        }
        const data = await res.text();
        setVersao(data);
      } catch (error) {
        setErro("Não foi possível carregar a versão da aplicação. Verifique se a API está disponível.");
      } finally {
        setLoading(false);
      }
    };

    fetchVersao();
  }, []);

  return (
    <div className="about-page">
      <div className="about-content">
        <div className="feature-grid">
          <div className="feature-card highlight">
            <h3>Versão da Aplicação</h3>
            {loading && (
              <p className="text-secondary">Carregando...</p>
            )}
            {erro && (
              <p style={{ color: "var(--accent-danger)" }}>{erro}</p>
            )}
            {!loading && !erro && (
              <h4>{versao}</h4>
            )}
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
