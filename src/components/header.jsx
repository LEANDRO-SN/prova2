import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h2>ConnectBook</h2>
      <nav className="nav-links">
        <Link to="/">Início</Link>
        <Link to="/contatos">Contatos</Link>
      </nav>
    </header>
  );
}
