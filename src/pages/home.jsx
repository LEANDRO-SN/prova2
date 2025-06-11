import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  console.log("Página inicial carregada!");
  return (
    <div className="home">
      <h2>Bem-vindo ao Connect Book!</h2>
      <p>Gerencie e visualize os contatos de forma prática.</p>
      <Link to="/contatos">Visualizar contatos</Link> 
    </div>
  );
}
