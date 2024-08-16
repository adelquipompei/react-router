import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Inicio from './components/Inicio'
import Blog from './components/Blog'
import Post from './components/Post'
import AcercaDe from './components/AcercaDe'
import styled from 'styled-components'

function App() {
  return (
    <BrowserRouter>
      <ContenedorPrincipal>
        <Header />
        <Main>
          <Routes>
            <Route path='/' Component={Inicio} />
            <Route path='/blog' Component={Blog} />
            <Route path='/post/:id' Component={Post} />
            <Route path='/acerca-de' Component={AcercaDe} />
          </Routes>
        </Main>
      </ContenedorPrincipal>
    </BrowserRouter>

  )
}

const ContenedorPrincipal =   styled.div`
  padding: 40px;
  width: 90%;
  max-width: 700px;
`;

const Main = styled.main`
  background: #fff;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(129,129,129,0.1);

`;

export default App



















