import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importação das páginas do aplicativo
import Home from './pages/home';
import Cart from './pages/cart';
import Profile from './pages/profile';
import Plates from './pages/plates';
import Auth from './pages/auth';

// Criação do roteador com as rotas do aplicativo
const pages = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            { path: '/', element: <Home /> }, // Rota da página inicial
            { path: '/cart', element: <Cart /> }, // Rota do carrinho
            { path: '/profile', element: <Profile /> }, // Rota do perfil do usuário
            { path: '/plates', element: <Plates /> }, // Rota das opções de pratos
            { path: '/auth', element: <Auth /> }, // Rota de autenticação
        ]
    }
]);

// Renderiza o aplicativo na raiz do DOM
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={pages}></RouterProvider>
    </React.StrictMode>,
);
