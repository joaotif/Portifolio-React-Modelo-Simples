
import Container from '../../components/Container/index'
import { Outlet } from 'react-router-dom'

function PageBase() {
    return (
        <main>
          
            <Container>
                <Outlet />
            </Container>
           
        </main>
    )
}

export default PageBase
