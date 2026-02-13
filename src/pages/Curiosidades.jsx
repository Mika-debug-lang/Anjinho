import { useNavigate } from "react-router-dom";
import "../App.css";

function Curiosidades() {
  const navigate = useNavigate();

  return (
    <div className="scroll-page">

      <div className="scroll-container">

        <h2 className="scroll-title">Curiosidades Bíblicas</h2>

        <div className="scroll-content">

          <p className="verse">
            <span className="drop-cap">A</span>
            Bíblia foi escrita ao longo de aproximadamente
            1.500 anos, por cerca de 40 autores, em três
            continentes diferentes: Ásia, África e Europa.
            Mesmo assim, mantém uma unidade impressionante
            de mensagem e propósito.
          </p>

          <p className="verse">
            <strong>Davi era realmente baixinho?</strong><br /><br />
            A Bíblia nunca afirma que Davi era baixo.
            Ela apenas diz que ele era jovem, ruivo e
            de boa aparência.
            <span className="ref">
              — 1 Samuel 16:12
            </span>
            A ideia de que ele era pequeno surge por comparação
            com Golias, que tinha cerca de 3 metros.
          </p>

          <p className="verse">
            <strong>O primeiro Evangelho escrito</strong><br /><br />
            Muitos estudiosos apontam que o Evangelho de Marcos
            foi o primeiro a ser escrito, por volta de 60–70 d.C.
            Mateus e Lucas teriam usado Marcos como uma das
            fontes principais.
          </p>

          <p className="verse">
            <strong>As cartas de Paulo vieram antes dos Evangelhos</strong><br /><br />
            As epístolas de Paulo (como Romanos, Coríntios e Gálatas)
            foram escritas entre 48–67 d.C., antes da redação final
            dos evangelhos. Elas fazem parte do Novo Testamento
            e são consideradas textos canônicos.
          </p>

          <p className="verse">
            <strong>Idiomas originais da Bíblia</strong><br /><br />
            O Antigo Testamento foi escrito principalmente
            em hebraico, com partes em aramaico.
            O Novo Testamento foi escrito em grego koiné,
            a língua comum do Império Romano na época.
          </p>

          <p className="verse">
            <strong>Unidade impressionante</strong><br /><br />
            Mesmo sendo escrita por reis, pastores,
            pescadores, médicos e profetas,
            ao longo de séculos e culturas diferentes,
            a Bíblia mantém uma narrativa central:
            redenção e reconciliação do homem com Deus.
          </p>

          <p className="verse">
            O menor versículo da Bíblia é:
            <span className="ref">
              — "Jesus chorou." (João 11:35)
            </span>
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

export default Curiosidades;
