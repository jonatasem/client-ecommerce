import './index.scss';

export default function PlateCard({ plateData }) {
    return (
        <div> {/* Contêiner do card do prato */}
            <img src={plateData.imgUrl} alt="" /> {/* Imagem do prato */}
            <div>
                <h4>{plateData.name}</h4> {/* Nome do prato */}
                <h3>$ {plateData.price}</h3> {/* Preço do prato */}
            </div>
        </div>
    );
}
