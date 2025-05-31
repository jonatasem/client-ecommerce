import Navbar from "./components/navbar"; // Importação da barra de navegação
import { Outlet } from "react-router-dom"; // Componente de saída para as rotas aninhadas
import Footer from "./components/footer"; // Importação do rodapé
import { CartProvider } from "./contexts/useCartContext"; // Contexto do carrinho

// Componente principal do aplicativo
export default function App() {
    return (
        <section className="app-container">
            <CartProvider> {/* Provedor do contexto do carrinho */}
                <Navbar /> {/* Renderização da barra de navegação */}
                <main className="app-main">
                    <Outlet /> {/* Renderiza as rotas filhas */}
                </main>
                <Footer /> {/* Renderização do rodapé */}
            </CartProvider>
        </section>
    );
}