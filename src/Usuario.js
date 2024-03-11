export default function Usuario(props) {
    return (
        <div class="usuario">
                <img src={props.ftusuario} />
                <div class="texto">
                    <strong>{props.nomeusuario}</strong>
                    <span>
                    {props.nomereal}
                    <ion-icon name="pencil"></ion-icon>
                    </span>
                </div>
        </div>
    );
}