import React from "react";
import { Container } from "./styles";
import {
  FaCar,
  FaUsers,
  FaSearchDollar,
  FaClipboardList,
  FaCalendarAlt,
  FaBullhorn,
  FaHandHoldingHeart,
  FaPhoneSlash,
  FaFileContract, 
  FaUser,
  FaUserTie,
  FaCrosshairs
  
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container>
      <div className="graphBox">
        <div className="divider-1">
          <div className="box-1">
            <h2>Veiculos</h2>
            <FaCar />
          </div>

          <div className="box-2">
            <h2>Clientes</h2>
            <FaUsers />
          </div>
          <div className="box-3">
            <h2>Devedores</h2>
            <FaSearchDollar />
          </div>

          <div className="box-4">
            <h2>Agendamento</h2>
            <FaClipboardList />
          </div>
          <div className="box-5">
            <h2>Anuais</h2>
            <FaCalendarAlt />
          </div>

          <div className="box-6">
            <h2>Publicidade</h2>
            <FaBullhorn />
          </div>
        </div>
        <div className="divider-2">
          <div className="box-7">
            <h2>Cortesia</h2>
            <FaHandHoldingHeart />
          </div>

          <div className="box-8">
            <h2>Ligações Pendentes</h2>
            <FaPhoneSlash />
          </div>
          <div className="box-9">
            <h2>Contratos Vencidos</h2>
            <FaFileContract />
          </div>

          <div className="box-10">
            <h2>Pessoa Física</h2>
            <FaUser />
          </div>
          <div className="box-11">
            <h2>Pessoa Jurídica</h2>
            <FaUserTie />
          </div>
          <div className="box-12">
            <h2>Rastreadores</h2>
            <FaCrosshairs />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
