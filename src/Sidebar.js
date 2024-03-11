import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import ftakira from "./img/akiraperfil.jpg"

export default function Sidebar() {
    // const fotoenviada = prompt('Insira o link da sua foto de perfil aqui')
    // const nomerealenviado = prompt('Olá, qual o seu nome?')
    // const nomeusuarioenviado = prompt(nomerealenviado +  ', escolha o nome da sua conta:' )

    return (
        <div class="sidebar">
            <Usuario ftusuario={ftakira} nomeusuario="akira.toriyama" nomereal="Akira Toriyama"/>

            <Sugestoes/>

            <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
            Hashtags • Idioma
            </div>

            <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
  }
