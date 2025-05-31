import { Dialog } from "@mui/material"; // Importa o componente Dialog do Material-UI
import './index.scss'; // Importa estilos específicos
import { useState } from "react"; // Importa hook useState
import { TextField } from "@mui/material"; // Importa o componente TextField do Material-UI
import { useNavigate } from "react-router-dom"; // Importa hook useNavigate

export default function ConfirmOrderPopup({ open, onClose, onConfirm }) {
    const [formData, setFormData] = useState(null); // Estado para armazenar os dados do formulário
    const authData = JSON.parse(localStorage.getItem('auth')); // Obtém dados de autenticação
    const navigate = useNavigate(); // Navegador para redirecionamento

    // Função para confirmar o pedido
    const handleConfirm = (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário

        if (!authData?.user?._id) {
            return navigate('/auth'); // Redireciona para autenticação se não estiver logado
        } else {
            if (!formData?.pickupTime) {
                return; // Verifica se o horário de retirada foi fornecido
            } else {
                const orderData = {
                    userId: authData?.user?._id,
                    pickupTime: formData?.pickupTime
                };
                // console.log(orderData); // Log dos dados do pedido
                onConfirm(orderData); // Chama a função onConfirm passando os dados do pedido
            }
        }
    };

    // Função para lidar com as mudanças nos dados do formulário
    const handleFormDataChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value // Atualiza o estado do formulário com os dados do input
        });
    };

    return (
        <Dialog open={open} onClose={onClose}> {/* Modal de confirmação */}
            <div>
                <h2>We're almost there...</h2>
                <p>Confirm your order with the current date: <strong>{(new Date()).toLocaleDateString()}</strong>. What time will you come to pick up your order?</p>
                <form>
                    <TextField
                        onChange={handleFormDataChange}
                        required
                        type="time"
                        name='pickupTime'
                    />
                    <div className={styles.confirmBtns}>
                        <button onClick={onClose}>Cancel</button>
                        <button onClick={handleConfirm}>Confirm</button>
                    </div>
                </form>
            </div>
        </Dialog>
    );
}
