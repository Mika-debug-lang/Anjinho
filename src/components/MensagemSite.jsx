import { useState } from "react";
import "../index.css";

function MensagemSite() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Ícone do Livro (Imagem) */}
      <div
        className={`book-icon ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <img
          src="/images/livro_angel.png"
          alt="Abrir mensagem"
        />
      </div>

      {/* Mensagem */}
      {open && (
        <div className="site-message animated">
          <h3>📖 Como Funciona</h3>

          <p>
            Clique nas imagens para interagir e descobrir
            conteúdos bíblicos, louvores, curiosidades e
            mensagens inspiradoras.
          </p>

          <p>
            Este site foi criado com a finalidade de
            espalhar o evangelho, fortalecer a fé
            dos crentes e oferecer apoio emocional
            àqueles que desejam conhecer mais sobre
            a Palavra de Deus.
          </p>

          <p>
            Que cada mensagem aqui seja instrumento
            de esperança, consolo e transformação.
          </p>
        </div>
      )}
    </>
  );
}

export default MensagemSite;
