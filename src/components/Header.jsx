import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

function header() {
    return (
        <ContenedorHeader>
            <Titulo>Mi Blog personal</Titulo>
            <Menu>
                <NavLink to='/'>Inicio</NavLink>
                <NavLink to='/blog'>Blog</NavLink>
                <NavLink to='/acerca-de'>Acerca De</NavLink>
            </Menu>
        </ContenedorHeader>
    )
}

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
    `;

const Titulo = styled.h1`
    margin-bottom: 10px;
    font-size: 26px;    
    text-transform: uppercase;
`;

const Menu = styled.nav`
    a{
        text-decoration: none;
        color: #165168;
        margin: 0 10px;
    }
    a:hover{
        color: #196681;
    }

    a.active{
        border-bottom: 2px solid #165168;
        padding-bottom: 3px;
    }
`;


export default header