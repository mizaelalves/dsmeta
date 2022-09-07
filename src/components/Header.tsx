import logo from "../assets/logo.svg"

import "./styles/Header.css"

export function Header() {
  return(
    <header>
      <div className="logo-container">
        <img src={logo} alt="DSMeta"/>
        <h1>DSMeta</h1>
        <p>
          Desenvolvido por
          <a href="https://www.linkedin.com/mizaelalves">Mizael Alves</a>
        </p>
      </div>
      </header>
  )
}