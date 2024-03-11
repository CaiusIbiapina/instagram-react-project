import Story from "./Story";
import ftgoku from "./img/goku.jpg"
import ftvegeta from "./img/vegeta.jpg"
import ftgohan from "./img/gohan.jpg"
import fttrunks from "./img/trunks.jpg"
import ftpiccolo from "./img/piccolo.jpg"
import ftkuririn from "./img/kuririn.jpg"
import ftkame from "./img/mestrekame.jpg"
import ftbulma from "./img/bulma.jpg"
import circle from "./img/stories_background.jpg"

export default function Stories() {
    const stories = [
    {foto:ftgoku, nome:"Goku"},
    {foto:ftvegeta, nome:"Vegeta"},
    {foto:ftgohan, nome:"Gohan"},
    {foto:fttrunks, nome:"Trunks"},
    {foto:ftpiccolo, nome:"Piccolo"},
    {foto:ftkuririn, nome:"Kuririn"},
    {foto:ftkame,nome:"Mestre Kame"},
    {foto:ftbulma, nome:"Bulma"}
    ]

    return (
        <div class="stories">
            {stories.map( (s) => <Story foto={s.foto} nome={s.nome}/>)}
            
            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
  }