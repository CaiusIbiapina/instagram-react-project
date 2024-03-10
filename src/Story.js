export default function Story(props) {
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.foto} alt="foto era aqui" />
            </div>
            <div class="usuario">
                {props.nome}
            </div>
        </div>
    )
  }
  //FALTA ADICIONAR CIRCULO STORY