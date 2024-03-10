import Post from "./Post";
import postgoku from "./img/post2goku.jpg"
import postkame from "./img/postkame.jpg"
import postkuririn from "./img/postkuririn.jpg"
import ftgoku from "./img/goku.jpg"
import ftkame from "./img/mestrekame.jpg"
import ftkuririn from "./img/kuririn.jpg"

export default function Posts() {
    return (
        <div class="posts">
            <Post fotousuario={ftgoku} nomeusuario="Goku" fotoprincipal={postgoku}/>

            <Post fotousuario={ftkame} nomeusuario="Mestre Kame" fotoprincipal={postkame}/>

            <Post fotousuario={ftkuririn} nomeusuario="Kuririn" fotoprincipal={postkuririn}/>
      </div>
    )
  }