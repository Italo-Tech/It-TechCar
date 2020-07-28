import React from 'react';
import './Menu.css';

//Style components
import Logoo from './Logo/index';
import Button from './Button';

function Menu() {
    return (
        <nav className="Menu">

            <a href="/">
                <Logoo alt="TESTE" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                New video
             </Button>

        </nav>
    );
}

export default Menu;