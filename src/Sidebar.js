import Sugestoes from "./Sugestoes";
import Usuario from "./Usuario";
import ftakira from "./img/akiraperfil.jpg"

export default function Sidebar() {
    
    return (
        <div class="sidebar">
            <Usuario ftusuario={ftakira} nomeusuario="akira.toriyama"/>

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
