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
    const perfis = ['Goku', 'Vegeta', 'Gohan', 'Trunks', 'Piccolo', 'Kuririn', 'Mestre Kame', 'Bulma']; 

    return (
        <div class="stories">
            <Story foto={ftgoku} nome="Goku"/>

            <Story foto={ftvegeta} nome="Vegeta"/>

            <Story foto={ftgohan} nome="Gohan"/>

            <Story foto={fttrunks} nome="Trunks"/>

            <Story foto={ftpiccolo} nome="Piccolo"/>

            <Story foto={ftkuririn} nome="Kuririn"/>

            <Story foto={ftkame} nome="Mestre Kame"/>

            <Story foto={ftbulma} nome="Bulma"/>

            <div class="setinha">
            <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
    </div>
    )
  }