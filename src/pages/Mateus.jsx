import { useNavigate } from "react-router-dom";
import "../App.css";

function Mateus() {
  const navigate = useNavigate();

  return (
    <div className="scroll-page">

      <div className="scroll-container">

        <h2 className="scroll-title">Livro de Mateus</h2>

        <div className="scroll-content">

          <p className="verse">
            <span className="drop-cap">V</span>
            ós sois a luz do mundo. Não se pode esconder uma cidade
            edificada sobre um monte.
            <span className="ref"> — Mateus 5:14</span>
          </p>

          <p className="verse">
            Buscai primeiro o Reino de Deus e a sua justiça,
            e todas estas coisas vos serão acrescentadas.
            <span className="ref"> — Mateus 6:33</span>
          </p>

        </div>

        <button
          className="back-button"
          onClick={() => navigate("/palavras")}
        >
          ⬅ Voltar aos Livros
        </button>

      </div>

    </div>
  );
}

export default Mateus;
