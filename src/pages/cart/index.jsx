import { useState } from "react";
import { useCartContext } from "../../contexts/useCartContext";
import { LuMinusCircle } from 'react-icons/lu';
import ConfirmOrderPopup from "../../components/confirmOrderPopup";
import orderServices from "../../services/order";

export default function Cart() {
    const { cartItems, updateCartItems, removeFromCart, clearCart } = useCartContext(); // Contexto do carrinho
    const [confirmPopupOpen, setConfirmPopupOpen] = useState(false); // Estado do popup de confirmação
    const { sendOrder } = orderServices(); // Serviço para gerenciar pedidos

    // Função para alterar a quantidade de itens no carrinho
    const handleChangeItemQty = (mode, itemId) => {
        const updatedCartItem = cartItems.map((item) => {
            if (item._id === itemId) {
                if (mode === 'less' && item.quantity > 1) {
                    item.quantity -= 1; // Reduz a quantidade
                } else if (mode === 'more') {
                    item.quantity += 1; // Aumenta a quantidade
                }
            }
            return item; // Retorna o item atualizado
        });

        updateCartItems(updatedCartItem); // Atualiza o contexto do carrinho
    };

    // Função para abrir ou fechar o popup de confirmação
    const handleOpenPopup = (e) => {
        e.preventDefault();
        setConfirmPopupOpen(!confirmPopupOpen);
    };

    // Função para confirmar o pedido
    const handleConfirmOrder = (orderData) => {
        orderData.items = cartItems.map((item) => {
            return { plateId: item._id, quantity: item.quantity }; // Mapeia os itens do carrinho para o formato esperado
        });
        sendOrder(orderData); // Envia o pedido
        setConfirmPopupOpen(!confirmPopupOpen); // Fecha o popup
        clearCart(); // Limpa o carrinho
    };

    if (!cartItems.length) {
        return (
            <div> 
                <h1>Your cart is empty... :/</h1>
                <button>See our specialities!</button>
            </div>
        ); // Mensagem se o carrinho estiver vazio
    }

    return (
        <>        
            <div>
                <h1>Your items:</h1>
                <section>
                    <div>
                        {cartItems.map((item) => (
                            <div key={item._id}>
                                <img src={item.imgUrl} alt="" />
                                <div>
                                    <h2>{item.name}</h2>
                                    <p>[{String(item.ingredients)}]</p>
                                    <p>{item.description}</p>
                                    <div>
                                        <p>Portions:</p>
                                        <p>{item.quantity}</p>
                                        <div>
                                            <button onClick={() => { handleChangeItemQty('less', item._id); }}>-</button>
                                            <button onClick={() => { handleChangeItemQty('more', item._id); }}>+</button>
                                        </div>
                                    </div>
                                    <button onClick={() => { removeFromCart(item._id); }}><LuMinusCircle /> Remove item</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <button onClick={handleOpenPopup}>Confirm your order!</button>
            </div>

            <ConfirmOrderPopup open={confirmPopupOpen} onClose={handleOpenPopup} onConfirm={handleConfirmOrder} />
        </>
    );
}
