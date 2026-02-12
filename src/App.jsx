import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import Angel from "./components/Angel";
import Arrow from "./components/Arrow";
import FortuneMessage from "./components/FortuneMessage";
import Motivacional from "./pages/Motivacional";
import "./index.css";

function Home() {
  const [isShooting, setIsShooting] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const fortunes = [
    "Permaneça firme na fé.",
    "O Senhor é tua fortaleza.",
    "Não temas, Eu sou contigo.",
    "Grandes coisas estão por vir."
  ];

  const handleShoot = () => {
    if (isShooting) return;

    setIsShooting(true);
    setShowMessage(false);

    const random =
      fortunes[Math.floor(Math.random() * fortunes.length)];

    setTimeout(() => {
      setMessage(random);
      setShowMessage(true);
    }, 1000);

    setTimeout(() => {
      setIsShooting(false);
    }, 2000);
  };

 return (
  <div className="container">

    {/* IMAGEM DE FUNDO */}
    <div className="celestial-background"></div>

    {/* CONTEÚDO SOBREPOSTO */}
    <div className="content-layer">
      <Angel onShoot={handleShoot} />
      <Arrow active={isShooting} />
      {showMessage && <FortuneMessage text={message} />}

      <div
        className="celestial-gate"
        onClick={() => navigate("/palavras")}
      >
        <img src="/images/reino_celestial.png" alt="" />
      </div>
    </div>

  </div>
);

}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/palavras" element={<Motivacional />} />
    </Routes>
  );
}

export default App;
