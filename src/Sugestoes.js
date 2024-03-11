import Sugestao from "./Sugestao"
import ftnaruto from "./img/naruto.jpg"
import ftluffy from "./img/luffy.jpeg"
import ftl from "./img/ftl.jpg"
import ftyugi from "./img/ftyugi.jpg"
import ftseiya from "./img/ftseiya.jpg"

export default function Sugestoes() {
    const sugestoes = [
        {ftsugestao:ftnaruto, nomesugestao:"@naruto.uzumaki"},
        {ftsugestao:ftluffy, nomesugestao:"@luffymose"},
        {ftsugestao:ftl, nomesugestao:"@faz.o.L"},
        {ftsugestao:ftyugi, nomesugestao:"@farao.yugi"},
        {ftsugestao:ftseiya, nomesugestao:"@saint.seiya"}
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
                {sugestoes.map((s) => <Sugestao ftsugestao={s.ftsugestao} nomesugestao={s.nomesugestao}/>)}
            </div>
    )
  }

