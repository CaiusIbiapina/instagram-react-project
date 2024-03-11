import React from "react"

export default function Post(props) {
    const [like, SetLike] = React.useState(false)
    const [salvar, SetSalvar] = React.useState(false)

    const curtida = () => {
        SetLike(!like);
    };

    const salvamento = () => {
        SetSalvar(!salvar);
    };

    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                <img src={props.fotousuario} />
                {props.nomeusuario}
                </div>
                <div class="acoes">
                <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.fotoprincipal} />
            </div>

            <div class="fundo">
                <div class="acoes">
                <div>
                    <ion-icon name={like ? 'heart' : 'heart-outline'} onClick={curtida} ></ion-icon>
                    <ion-icon name="chatbubble-outline"></ion-icon>
                    <ion-icon name="paper-plane-outline"></ion-icon>
                </div>
                <div>
                    <ion-icon name={salvar ? 'bookmark' : 'bookmark-outline'} onClick={salvamento}></ion-icon>
                </div>
                </div>

                <div class="curtidas">
                <img src="assets/img/adorable_animals.svg" />
                <div class="texto">
                    Curtido por <strong>adorable_animals</strong> e <strong>outras 99.159 pessoas</strong>
                </div>
                </div>
            </div>
        </div>
    )
  }