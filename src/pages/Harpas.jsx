import { useNavigate } from "react-router-dom";
import "../index.css";
import BackgroundMusic from "../BackgroundMusic";

function Harpas() {
  const navigate = useNavigate();

  return (
    <div className="scroll-page">

      <div className="scroll-container">

        <h2 className="scroll-title">As Harpas e o Louvor Celestial</h2>

        <div className="scroll-content">

          <p className="verse">
            <span className="drop-cap">E</span>
            vi os que tinham vencido a besta,
            e estavam junto ao mar de vidro,
            tendo as harpas de Deus.
            <span className="ref"> — Apocalipse 15:2</span>
          </p>

          <p className="verse">
            E tinham harpas nas suas mãos,
            e cantavam um cântico novo diante do trono.
            <span className="ref"> — Apocalipse 14:2-3</span>
          </p>

          <p className="verse">
            Louvai ao Senhor com harpa;
            cantai-lhe com o saltério e instrumento de dez cordas.
            <span className="ref"> — Salmos 33:2</span>
          </p>

          <p className="verse">
            Tudo quanto tem fôlego louve ao Senhor.
            Louvai ao Senhor!
            <span className="ref"> — Salmos 150:6</span>
          </p>

          <hr className="scroll-divider" />

          <h3 className="scroll-subtitle">A Harpa na Igreja</h3>

          <p className="verse">
            A Harpa Cristã é o hinário tradicional usado em muitas igrejas,
            especialmente nas Assembleias de Deus. Seus hinos expressam
            fé, arrependimento, esperança e exaltação ao Senhor.
          </p>

          <p className="verse">
            Entre os hinos mais conhecidos estão:
            <br /><br />
            🎵 15 — Conversão<br />
            🎵 304 — Cristo é Meu<br />
            🎵 291 — Porque Ele Vive<br />
            🎵 126 — Bem-Aventurança do Crente
          </p>

          <p className="verse">
            O louvor com harpas simboliza adoração pura diante do trono de Deus,
            representando vitória, santidade e alegria eterna.
          </p>

        </div>

        <button
          className="back-button"
          onClick={() => navigate("/")}
        >
          ⬅ Voltar ao Reino
        </button>

      </div>
    </div>
  );
}

export default Harpas;
