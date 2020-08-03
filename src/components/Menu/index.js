import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

//Style components
import Logoo from './Logo/index';
import Button from './Button';

function Menu() {
    return (
        <nav className="Menu">

            <Link to="/">
                <Logoo />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                New video
             </Button>

        </nav>
    );
}

export default Menu;