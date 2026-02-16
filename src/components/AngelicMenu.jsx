import { NavLink } from "react-router-dom";
import "./AngelicMenu.css";

function AngelicMenu() {
  return (
    <nav className="angelic-menu">

      {/* LOGO + TÍTULO */}
      <div className="menu-logo">
        <svg viewBox="0 0 200 200" className="angel-icon">
          <circle cx="100" cy="100" r="40" fill="url(#goldGradient)" />

          <path
            d="M20 100 Q60 40 100 100"
            fill="none"
            stroke="url(#wingGradient)"
            strokeWidth="6"
          />
          <path
            d="M180 100 Q140 40 100 100"
            fill="none"
            stroke="url(#wingGradient)"
            strokeWidth="6"
          />

          <defs>
            <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#fff6cc" />
              <stop offset="100%" stopColor="#d4af37" />
            </linearGradient>

            <linearGradient id="wingGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cfe9ff" />
            </linearGradient>
          </defs>
        </svg>

        <NavLink to="/" className="logo-title">
          Reino Celestial
        </NavLink>
      </div>

      {/* Ícone extra */}
      <div className="menu_logo">
        <img src="/images/icone_anjo.png" alt="logotipo do anjo" />
      </div>

      {/* LINKS */}
      <ul className="menu-links">
        <li>
          <NavLink to="/" end>
            Início
          </NavLink>
        </li>

        <li>
          <NavLink to="/palavras">
            Palavras
          </NavLink>
        </li>

        <li>
          <NavLink to="/harpas">
            Harpas
          </NavLink>
        </li>

        <li>
          <NavLink to="/curiosidades">
            Curiosidades
          </NavLink>
        </li>
      </ul>

    </nav>
  );
}

export default AngelicMenu;
