
import { LuShoppingCart, LuUserCircle, LuMenu } from "react-icons/lu"; // Importa ícones
import { Drawer } from '@mui/material'; // Importa o componente Drawer do Material-UI
import { useState } from 'react'; // Importa hook useState
import { Link } from 'react-router-dom'; // Importa o componente Link

import './index.scss'

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false); // Estado para controlar a abertura do menu

    // Função para abrir ou fechar o menu lateral
    const handleOpenMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <header className="header-container">
            <div className="header-logo">
                <h1>logo</h1>
            </div>
            <nav className="header-left">
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/plates'}>Plates</Link>
                </li>
                <li>
                    <Link to={'/cart'}>
                        <LuShoppingCart />
                    </Link>
                </li>
                <li>
                    <Link to={'/profile'}>
                        <LuUserCircle />
                    </Link>
                </li>
            </nav>
            <div className="header-right">
                <LuMenu onClick={handleOpenMenu} />
            </div>
            <Drawer
                anchor='right'
                open={openMenu}
                onClose={handleOpenMenu}
            >
                <div>
                    <Link to={'/'} onClick={handleOpenMenu}>Home</Link>
                    <Link to={'/plates'} onClick={handleOpenMenu}>Plates</Link>
                    <Link to={'/profile'} onClick={handleOpenMenu}>Profile</Link>
                </div>
            </Drawer>
        </header>
    );
}
