import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./ContactList.css";

const contatosSimulados = [
  { id: 1, nome: "Alice Santos", email: "alice@email.com" },
  { id: 2, nome: "Bruno Lima", email: "bruno@email.com" },
  { id: 3, nome: "Carla Souza", email: "carla@email.com" },
  { id: 4, nome: "Diego Martins", email: "diego@email.com" },
  { id: 5, nome: "Elaine Rocha", email: "elaine@email.com" },
  { id: 6, nome: "Fernando Dias", email: "fernando@email.com" },
  { id: 7, nome: "Gabriela Tavares", email: "gabriela@email.com" },
  { id: 8, nome: "Henrique Moraes", email: "henrique@email.com" },
  { id: 9, nome: "Isabela Costa", email: "isabela@email.com" },
  { id: 10, nome: "João Pereira", email: "joao@email.com" },
  { id: 11, nome: "Karina Melo", email: "karina@email.com" },
  { id: 12, nome: "Leonardo Cunha", email: "leonardo@email.com" },
  { id: 13, nome: "Mariana Lopes", email: "mariana@email.com" },
  { id: 14, nome: "Nicolas Barreto", email: "nicolas@email.com" },
  { id: 15, nome: "Otávio Lima", email: "otavio@email.com" },
];

const ContactList = () => {
  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    setContatos(contatosSimulados);
  }, []);

  return (
    <div className="contact-list">
      <h2>Contatos Cadastrados</h2>
      <p>Total de contatos: {contatos.length}</p>

      {contatos.length === 0 ? (
        <p>Nenhum contato cadastrado.</p>
      ) : (
        contatos.map((contato) => (
          <div key={contato.id} className="contact-item">
            {contato.nome} - {contato.email}
             </div>
        ))
      )}
    </div>
  );
};

export default ContactList;