import React, { useState } from "react";
import { Container } from "./styles";
import { FaBars } from "react-icons/fa";
import {
  FcHome,
  FcServices,
  FcShop,
  FcCustomerSupport,
  FcAbout,
} from "react-icons/fc";
import Sidebar from "../Sidebar";


const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <Container>
      <FaBars onClick={showSidebar} />
      {sidebar && <Sidebar active={setSidebar} />}

      <nav>
  
        
      </nav>
      <ul>
        <FcHome />
        <a href="#Home">Home</a>
        <FcServices />
        <a href="#Services">Serviços</a>
        <FcShop />
        <a href="Products">Produtos</a>
        <FcCustomerSupport />
        <a href="#Contact">Contato</a>
        <FcAbout />
        <a href="#About">Sobre</a>
      </ul>
    </Container>
  );
};

export default Header;
