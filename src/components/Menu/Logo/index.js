import styled from 'styled-components';
import logo from '../../../assets/img/Logo.png';

//style-components Logo
const Logo = styled.img.attrs({ src: logo, alt: 'Logo da It-TechCar' })`
    max-width: 168px;

    @media (max-width: 800px) {
        max-width: 105px;
  }
`;

export default Logo;