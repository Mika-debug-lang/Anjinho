import { useNavigate } from "react-router-dom";

export default function Motivacional() {
  const navigate = useNavigate();

  const verses = [
    {
      text: "Sede fortes e corajosos.",
      ref: "Deuteronômio 31:6"
    },
    {
      text: "Eis que venho sem demora.",
      ref: "Apocalipse 22:12"
    },
    {
      text: "O Senhor é minha luz e salvação.",
      ref: "Salmos 27:1"
    }
  ];

  return (
    <div className="motivacional-wrapper">

      <div className="motivacional-overlay"></div>

      <div className="motivacional-content">
        <h1>Palavras para os Últimos Tempos</h1>

        <div className="verses-grid">
          {verses.map((verse, index) => (
            <div key={index} className="verse-card">
              <p className="verse-text">“{verse.text}”</p>
              <span className="verse-ref">{verse.ref}</span>
            </div>
          ))}
        </div>

        <button 
          className="back-button"
          onClick={() => navigate("/")}
        >
          Voltar ao Reino
        </button>
      </div>

    </div>
  );
}
