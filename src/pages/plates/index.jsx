import platesServices from "../../services/plates"; // Importa o serviço de pratos
import { useEffect, useState } from "react"; // Importa hooks do React
import Loading from "../../components/loading"; // Componente de carregamento
import PlateCard from "../../components/plateCard"; // Componente para exibição de pratos
import PlatePopup from "../../components/platePopup"; // Componente para exibir detalhes do prato
import { useCartContext } from "../../contexts/useCartContext"; // Contexto do carrinho

export default function Plates() {
    const { getAvailablePlates, platesList, platesLoading, refetchPlates } = platesServices(); // Obtém os serviços de pratos
    const [plateSelected, setPlateSelected] = useState(null); // Estado para armazenar prato selecionado
    const { addToCart } = useCartContext(); // Hook do contexto do carrinho

    // Efeito para buscar pratos disponíveis quando refetchPlates mudar
    useEffect(() => {
        if (refetchPlates) {
            getAvailablePlates(); // Chama a função para buscar pratos
        }
    }, [refetchPlates]);

    // Função para definir o prato selecionado
    const handlePlateSelected = (plate) => {
        setPlateSelected(plate); // Atualiza o estado com o prato selecionado
    };

    // Função para fechar o popup de detalhes do prato
    const handleClosePopup = () => {
        setPlateSelected(null); // Reseta o estado do prato selecionado
    };

    // Função para adicionar um prato ao carrinho
    const handleAddToCart = (itemToAdd) => {
        addToCart(itemToAdd); // Adiciona o prato ao carrinho
        handleClosePopup(); // Fecha o popup
    };

    // Exibe o componente de carregamento enquanto busca pratos
    if (platesLoading) {
        return (<Loading />);
    }

    return (
        <>
            <div>
                {platesList.map((plate) => (
                    <div key={plate._id} onClick={() => { handlePlateSelected(plate); }}>
                        <PlateCard plateData={plate} /> {/* Renderiza o card do prato */}
                    </div>
                ))}
            </div>

            {/* Exibe o popup de detalhes do prato se um prato estiver selecionado */}
            {plateSelected && (
                <PlatePopup 
                    plateData={plateSelected} 
                    onClose={handleClosePopup} 
                    onAddToCart={handleAddToCart}
                />
            )}
        </>
    );
}