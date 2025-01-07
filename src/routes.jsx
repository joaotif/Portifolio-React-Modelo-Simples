import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../src/pages/Home/index'
import Contatos from '../src/pages/Contatos/index'
import Page404 from '../src/pages/Page404/index'
import Header from '../src/components/Header/index'
import Footer from '../src/components/Footer/index'
import Container from '../src/components/Container/index'
import Sobre from '../src/pages/Sobre/index'
import Projetos from '../src/pages/Projetos/index'
import PageBase from '../src/pages/PaginaBase/index'

function AppRoutes() {
    return (
        <>
        <BrowserRouter>
            <Header />
            <Container>
                <Routes>
                <Route path='/' element={ <PageBase /> }>
                    <Route index element={ <Home /> }></Route>
                    <Route path="/sobre" element={ <Sobre /> }></Route>
                    <Route path="/projetos" element={ <Projetos /> }></Route>
                    <Route path="/contatos" element={ <Contatos /> }></Route>
                    <Route path="*" element={ <Page404 /> }></Route>
                </Route>
                </Routes>
            </Container>
            <Footer />
        </BrowserRouter>
        </>
    )
}

export default AppRoutes
