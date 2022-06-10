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
  FaCrosshairs,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <Container>
      <div className="graphBox">
        <div className="divider-1">
          <div className="box-1">
            <FaCar />
            <h2>Veiculos</h2>
          </div>

          <div className="box-2">
            <FaUsers />
            <h2>Clientes</h2>
          </div>
          <div className="box-3">
            <FaSearchDollar />
            <h2>Devedores</h2>
          </div>

          <div className="box-4">
            <FaClipboardList />
            <h2>Agendamento</h2>
          </div>
          <div className="box-5">
            <FaCalendarAlt />
            <h2>Anuais</h2>
          </div>
          <div className="box-6">
            <FaBullhorn />
            <h2>Publicidade</h2>
          </div>
        </div>
        <div className="divider-2">
          <div className="box-7">
            <FaHandHoldingHeart />
            <h2>Cortesia</h2>
          </div>

          <div className="box-8">
          <FaPhoneSlash />
            <h2>Ligações Pendentes</h2>
           
          </div>
          <div className="box-9">
          <FaFileContract />
            <h2>Contratos Vencidos</h2>
          </div>

          <div className="box-10">
          <FaUser />
            <h2>Pessoa Física</h2>
            
          </div>
          <div className="box-11">
          <FaUserTie />
            <h2>Pessoa Jurídica</h2>
          </div>
          <div className="box-12">
          <FaCrosshairs />
            <h2>Rastreadores</h2>
            
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
