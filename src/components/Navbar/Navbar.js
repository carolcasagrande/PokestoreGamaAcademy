import React from 'react';
import './style.css';
import logo from "../../imagens/logo1.png";
import carrinho from "../../imagens/carrinho-de-compras.png";

function Navbar() {
    return (
        <div>
            <div className="Navbar">
                <a href="/"><img className="img-logo" src={logo}/></a>
                <div>
                    <input placeholder="Pesquisar Pokemon"/>
                    <button className="button-span"><span>🔍</span></button>
                </div>
                <button className="button-carrinho"><img className="img-carrinho" src={carrinho}/></button>
            </div>
        </div>
    );
}

export default Navbar;