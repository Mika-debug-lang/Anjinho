import "../App.css";

function ImagesBackground() {
  return (
    <div className="background-wrapper">

      {/* 🔹 Fundo 1 */}
      <div className="background-one">
        <img
          className="background-mini"
          class="background-mini"
          src="/images/background_mini.png"
          alt="PNG pequeno"
        />
      </div>

      {/* 🔹 Fundo 2 */}
      <div className="background-two">
        <img
          className="setas-img"
          src="/images/setas.png"
          alt="Setas"
        />
      </div>

    </div>
  );
}

export default ImagesBackground;
