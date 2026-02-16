import { useNavigate } from "react-router-dom";
import "../index.css";
import BackgroundMusic from "../BackgroundMusic";

function Lucas() {
  const navigate = useNavigate();

  return (
    <div className="scroll-page">

      <div className="scroll-container">

        <h2 className="scroll-title">Livro de Lucas</h2>

        <div className="scroll-content">

          <p className="verse">
            <span className="drop-cap">P</span>
            orque para Deus nada é impossível.
            <span className="ref"> — Lucas 1:37</span>
          </p>

          <p className="verse">
            Como quereis que os homens vos façam,
            fazei-o também vós a eles.
            <span className="ref"> — Lucas 6:31</span>
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

export default Lucas;
