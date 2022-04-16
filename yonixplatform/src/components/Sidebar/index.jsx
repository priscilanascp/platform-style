import React from 'react'
import { Container, Content, } from './styles'
import {
    FaTimes,
    FaHome,
    FaEnvelope,
    FaRegSun,
    FaUserAlt,
    FaIdCardAlt,
    FaRegFileAlt, 
    FaRegCalendarAlt,
    FaChartBar,

} from 'react-icons/fa'
import SidebarItem from '../SidebarItem'





const Sidebar = ({ active }) => {

    const closeSidebar = () => {
        active(false)
    }

    return (
     
        <Container sidebar={active}>
            
            <FaTimes onClick={closeSidebar} />
            
            <Content>
              
                <SidebarItem Icon={FaHome} Text="Home" />
                <SidebarItem Icon={FaChartBar} Text="Estatisticas" />
                <SidebarItem Icon={FaUserAlt} Text="Clientes" />
                <SidebarItem Icon={FaEnvelope} Text="E-mail" />
                <SidebarItem Icon={FaRegCalendarAlt} Text="Calendário" />
                <SidebarItem Icon={FaIdCardAlt} Text="Funcionários" />
                <SidebarItem Icon={FaRegFileAlt} Text="Relatórios" />
                <SidebarItem Icon={FaRegSun} Text="Configuração" />
            
            </Content>
        </Container>
    )

}

export default Sidebar