import { useEffect, useRef } from "react";

let globalAudio = null; // 🔥 áudio global persistente

function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    // Se ainda não existe áudio global, cria
    if (!globalAudio) {
      globalAudio = new Audio("/audio/music.mp3");
      globalAudio.loop = true;
      globalAudio.volume = 0.3;
    }

    audioRef.current = globalAudio;

    const playMusic = () => {
      globalAudio.play().catch(() => {});
      document.removeEventListener("click", playMusic);
    };

    document.addEventListener("click", playMusic);

    return () => {
      document.removeEventListener("click", playMusic);
    };
  }, []);

  return null; // 🔥 não renderiza <audio> no DOM
}

export default BackgroundMusic;
