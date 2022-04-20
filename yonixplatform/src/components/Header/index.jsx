import React, { useState } from 'react'
import { Container, } from './styles'
import { FaBars } from 'react-icons/fa'
import { FcServices, FcShop, FcCustomerSupport, FcAbout } from "react-icons/fc";
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
                <FcServices />
                <li>Serviços</li>
                <FcShop />
                <li>Produtos</li>
                <FcCustomerSupport />
                <li>Contato</li>
                <FcAbout />
                <li>Sobre</li>
            </ul>

        </Container>

    )
}

export default Header