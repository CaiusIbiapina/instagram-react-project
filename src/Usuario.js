import React from "react";
// import ftakira from "./img/akiraperfil.jpg"

export default function Usuario(props) {
    const [nome, SetNome] = React.useState('Akira Toriyama')
    // const [imagem, SetImagem] = React.useState('./img/akiraperfil.jpg')
    
    function mudarNome() {
        const novoNome = prompt('Digite o seu nome');
        SetNome(novoNome)  
    }
    
    function mudarImagem() {
        const novaImagem = prompt('Insira o link da sua imagem');
        // SetImagem(novaImagem)
    }

    return (
        <div class="usuario">
                <img src={props.ftusuario} onClick={mudarImagem} />

                <div class="texto">
                    <strong>{props.nomeusuario}</strong>
                    <span>
                    {nome}

                    <ion-icon name="pencil" onClick={mudarNome} ></ion-icon>
                    </span>
                </div>
        </div>
    );
}