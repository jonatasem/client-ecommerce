import { useEffect } from "react"; // Importa hook useEffect
import { useNavigate } from "react-router-dom"; // Importa hook useNavigate para navegação
import authServices from "../../services/auth"; // Serviço de autenticação
import orderServices from "../../services/order"; // Serviço de pedidos
import { LuLogOut, LuTimer, LuAlertCircle, LuCheckCircle } from "react-icons/lu"; // Ícones
import { Link } from "react-router-dom"; // Link para navegação
import Loading from "../../components/loading"; // Componente de carregamento

export default function Profile() {
    const { logout } = authServices(); // Função de logout do serviço de autenticação
    const { getUserOrders, orderLoading, refetchOrders, ordersList } = orderServices(); // Obtém serviços de pedidos
    const navigate = useNavigate(); // Navegador para redirecionamento
    const authData = JSON.parse(localStorage.getItem('auth')); // Dados de autenticação do localStorage

    // Efeito para verificar autenticação e buscar pedidos
    useEffect(() => {
        if (!authData) {
            return navigate('/auth'); // Redireciona para autenticação se não estiver logado
        } else if (refetchOrders) {
            getUserOrders(authData?.user?._id); // Busca pedidos do usuário
        }
    }, [authData, refetchOrders]);

    // Exibe o componente de carregamento enquanto busca pedidos
    if (orderLoading) {
        return (<Loading />);
    }

    // Função para lidar com logout
    const handleLogout = () => {
        logout(); // Executa a função de logout
        return navigate('/'); // Redireciona para a página inicial
    };

    return (
        <div className="page-container">
            <div>
                <h1>{authData?.user?.fullname}</h1>
                <h3>{authData?.user?.email}</h3>
            </div>

            <button onClick={handleLogout}>Logout <LuLogOut /></button>

            {ordersList.length > 0 ? (
                <div className="orders-container">
                    {ordersList.map((order) => (
                        <div key={order._id}>
                            {/* Exibe status do pedido com ícone */}
                            {order.pickupStatus === 'Pending' && <p><LuTimer /> {order.pickupStatus}</p>}
                            {order.pickupStatus === 'Completed' && <p><LuCheckCircle /> {order.pickupStatus}</p>}
                            {order.pickupStatus === 'Canceled' && <p><LuAlertCircle /> {order.pickupStatus}</p>}
                            <h3>{order.pickupTime}</h3>
                            {order.orderItems.map((item) => (
                                <div key={item._id}>
                                    <h4>{item.itemDetails[0].name}</h4>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <div>
                    You do not have orders yet.
                    <Link to={'/plates'}>Click here and see our specialities!</Link>
                </div>
            )}
        </div>
    );
}