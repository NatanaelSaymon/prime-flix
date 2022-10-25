import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './assets/pages/Home'
import { Filme } from './assets/pages/Filme'
import { Erro } from './assets/pages/Erro'
import { Header } from './assets/components/Header'
import { Favoritos } from './assets/pages/Favoritos'

export function Router() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={ <Home/> }/>
                <Route path="/filme/:id" element={ <Filme/> }/>
                <Route path="/favoritos" element={ <Favoritos /> } />

                {/* Página de erro deve ser a ultima rota */}
                <Route path="*" element={ <Erro/> }/>
            </Routes>
        </BrowserRouter>
        
    )
}