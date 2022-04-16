import React, { useState } from 'react'
import { Container, Footer } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'




const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (

        <><Container>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <h1>YONIX</h1>
            <ul>
                <li>Serviços</li>
                <li>Produtos</li>
                <li>Contato</li>
                <li>Sobre</li>
            </ul>


        </Container><Footer>
                <footer>
                    <p><span>Todos os Direitos Reservados a Yonix </span> &copy; 2022</p>
                </footer>

            </Footer></>

    )
}

export default Header