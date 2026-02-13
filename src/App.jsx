import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";

import Angel from "./components/Angel";
import Arrow from "./components/Arrow";
import FortuneMessage from "./components/FortuneMessage";
import MensagemSite from "./components/MensagemSite";
import Footer from "./components/Footer";

import Palavras from "./pages/Palavras";
import Mateus from "./pages/Mateus";
import Lucas from "./pages/Lucas";
import Corintios from "./pages/Corintios";
import Apocalipse from "./pages/Apocalipse";
import Harpas from "./pages/Harpas";
import Curiosidades from "./pages/Curiosidades";

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
    }, 900);

    setTimeout(() => {
      setIsShooting(false);
    }, 1600);
  };

  return (
    <div className="container">

      <div className="celestial-background" />

      <div className="content-layer">

        {/* Anjo e flecha */}
        <Angel onShoot={handleShoot} />
        <Arrow active={isShooting} />

        {showMessage && <FortuneMessage text={message} />}

        {/* Reino */}
        <div
          className="celestial-gate"
          onClick={() => navigate("/palavras")}
        >
          <img src="/images/reino_celestial.png" alt="Reino Divino" />
        </div>

        {/* Harpas */}
        <div
          className="harp-angels"
          onClick={() => navigate("/harpas")}
        >
          <img src="/images/angel_coral.png" alt="Anjos com Harpas" />
        </div>

        {/* Curiosidades */}
        <div
          className="curiosity-box"
          onClick={() => navigate("/curiosidades")}
        >
          <img src="/images/angel_pergaminho.png" alt="Curiosidades Bíblicas" />
        </div>

        {/* Mensagem do propósito do site */}
        <MensagemSite />

        {/* Rodapé */}
        <Footer />

      </div>

    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/palavras" element={<Palavras />} />
      <Route path="/mateus" element={<Mateus />} />
      <Route path="/lucas" element={<Lucas />} />
      <Route path="/corintios" element={<Corintios />} />
      <Route path="/apocalipse" element={<Apocalipse />} />
      <Route path="/harpas" element={<Harpas />} />
      <Route path="/curiosidades" element={<Curiosidades />} />
    </Routes>
  );
}
