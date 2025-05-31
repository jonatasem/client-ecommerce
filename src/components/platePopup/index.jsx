import { Dialog } from "@mui/material"; // Importa o componente Dialog do Material-UI
import './index.scss'; // Importa estilos específicos

export default function PlatePopup({ plateData, onClose, onAddToCart }) {
    return (
        <Dialog open={true} onClose={onClose}> {/* Modal de popup para detalhes do prato */}
            <div>
                <img src={plateData.imgUrl} alt="" /> {/* Imagem do prato */}
                <div>
                    <h2>{plateData.name}</h2> {/* Nome do prato */}
                    <p>[{String(plateData.ingredients)}]</p> {/* Ingredientes */}
                    <p>{plateData.description}</p> {/* Descrição do prato */}
                    <h2>$ {plateData.price}</h2> {/* Preço do prato */}
                    <button onClick={() => { onAddToCart(plateData); }}>Add to cart</button> {/* Botão para adicionar ao carrinho */}
                </div>
            </div>
        </Dialog>
    );
}