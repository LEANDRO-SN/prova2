// src/App.js
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Home from "./pages/home";
import ContactList from "./pages/ContactList";


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatos" element={<ContactList />} />
       </Routes>
        </BrowserRouter>
  );
}

export default App;
