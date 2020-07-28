import styled from "styled-components";

//style-components Button
const Button = styled.button`
    color: var(--white);
    border: 2px solid var(--primary);
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 35px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    outline: none;
    border-radius: 4px;
    text-decoration: none;
    display: inline-block;
    transition: opacity .3s;
    &:hover,
    &:focus {
    opacity: .5;
    }

    @media (max-width: 800px) {
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--primary);
        border-radius: 0;
        border: 0;
        text-align: center;
}
`;

export default Button;