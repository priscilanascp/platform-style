import React, { useState } from 'react'
import { Container, } from './styles'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import logo from '../../assets/logo.png'






const Header = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        
        <Container>
            <FaBars onClick={showSidebar} />
            {sidebar && <Sidebar active={setSidebar} />}
            <img src={logo} alt="logo" />
            <h1>YONIX</h1>
            <ul>
                <li>Serviços</li>
                <li>Produtos</li>
                <li>Contato</li>
                <li>Sobre</li>
            </ul>

        </Container>

    )
}

export default Header