import { useNavigate } from "react-router-dom";
import "../index.css";

function Apocalipse() {
  const navigate = useNavigate();

  return (
    <div className="scroll-page">

      <div className="scroll-container">

        <h2 className="scroll-title">Apocalipse</h2>

        <div className="scroll-content">

          <p className="verse">
            <span className="drop-cap">E</span>
            Deus limpará dos seus olhos toda lágrima;
            e não haverá mais morte, nem pranto, nem clamor,
            nem dor, porque já as primeiras coisas são passadas.
            <span className="ref"> — Apocalipse 21:4</span>
          </p>

          <p className="verse">
            Eis que estou à porta e bato; se alguém ouvir a minha voz
            e abrir a porta, entrarei em sua casa,
            e com ele cearei, e ele comigo.
            <span className="ref"> — Apocalipse 3:20</span>
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

export default Apocalipse;
