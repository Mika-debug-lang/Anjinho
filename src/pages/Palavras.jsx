import { useNavigate } from "react-router-dom";
import "../index.css";
import BackgroundMusic from "../BackgroundMusic";

function Palavras() {
  const navigate = useNavigate();

  return (
    <div className="palavras-container">

      <h1> Versículos dos Livros da Bíblia</h1>

      <div className="abas">
        <button onClick={() => navigate("/mateus")}>
          Mateus
        </button>

        <button onClick={() => navigate("/lucas")}>
          Lucas
        </button>

        <button onClick={() => navigate("/corintios")}>
          Coríntios
        </button>

        <button onClick={() => navigate("/apocalipse")}>
          Apocalipse
        </button>
      </div>

      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ⬅ Voltar ao Reino
      </button>
    </div>
  );
}

export default Palavras;
