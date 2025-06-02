import Header from "./components/header"; // Importação da barra de navegação
import { Outlet } from "react-router-dom"; // Componente de saída para as rotas aninhadas
import Footer from "./components/footer"; // Importação do rodapé
import { CartProvider, useCartContext } from "./contexts/useCartContext"; // Contexto do carrinho

// Componente principal do aplicativo
export default function App() {
    return (
        <section className="app-container">
            <CartProvider> {/* Provedor do contexto do carrinho */}
                <AppWithNavbar /> {/* Renderização da barra de navegação com contagem de itens */}
                <main className="app-main">
                    <Outlet /> {/* Renderiza as rotas filhas */}
                </main>
                <Footer /> {/* Renderização do rodapé */}
            </CartProvider>
        </section>
    );
}

// Componente que renderiza o Navbar e calcula o total de itens
function AppWithNavbar() {
    const { cartItems } = useCartContext(); // Acessa o contexto do carrinho

    // Função para calcular o total de itens no carrinho
    const calculateTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return (
        <Header totalItems={calculateTotalItems()} /> // Passa o total de itens para o Navbar
    );
}