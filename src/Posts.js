import Post from "./Post";
import postgoku from "./img/post2goku.jpg"
import postkame from "./img/postkame.jpg"
import postkuririn from "./img/postkuririn.jpg"
import ftgoku from "./img/goku.jpg"
import ftkame from "./img/mestrekame.jpg"
import ftkuririn from "./img/kuririn.jpg"

  export default function Posts() {

    const postagens = [
      {foto: ftgoku, usuario: "Goku", conteudo: postgoku},
      {foto: ftkame, usuario: "Mestre Kame", conteudo: postkame},
      {foto: ftkuririn, usuario: "Kuririn", conteudo: postkuririn}
    ];
  
      return (
          <div class="posts">
            {postagens.map( (p) => <Post fotousuario={p.foto} nomeusuario={p.usuario} fotoprincipal={p.conteudo} />)}
          </div>
      )
    }