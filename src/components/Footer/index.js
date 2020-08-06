import React from 'react';
import { FooterBase } from './styles';
import Logo from '../Menu/Logo/index';

function Footer() {
    return (
        <FooterBase>
            <Logo />

            <p>
                Proudly created during the

        {' '}
                <a href="https://www.alura.com.br/">
                    Immersion React Alura
        </a>
            </p>
        </FooterBase>
    );
}

export default Footer;