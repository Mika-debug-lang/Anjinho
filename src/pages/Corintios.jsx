import { useNavigate } from "react-router-dom";
import "../index.css";
import BackgroundMusic from "../BackgroundMusic";

function Corintios() {
  const navigate = useNavigate();

  return (
    <div className="scroll-page">

      <div className="scroll-container">

        <h2 className="scroll-title">1 Coríntios</h2>

        <div className="scroll-content">

          <p className="verse">
            <span className="drop-cap">O</span>
            amor é paciente, é benigno; o amor não inveja,
            não se vangloria, não se ensoberbece.
            <span className="ref"> — 1 Coríntios 13:4</span>
          </p>

          <p className="verse">
            Todas as vossas coisas sejam feitas com amor.
            <span className="ref"> — 1 Coríntios 16:14</span>
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

export default Corintios;
