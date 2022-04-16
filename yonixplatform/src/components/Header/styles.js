import styled from 'styled-components';

export const Container = styled.div `
    height: 80px;
    display: flex;
    background: black;
    box-shadow: 0 0 20px 3px;

   > svg {
        position: fixed;
        color:#fcfcfc;
        width: 30px;
        height: 30px;
        margin-top: 25px;
        margin-left: 1280px;
        cursor: pointer;
        &:hover {
        color: #e85e3f;
    }

        
    }
   

   h1 {
       color: white;
       font-family: 'Montserrat', solid;
       font-weight: bold;
       font-size: 40px;
       margin-top: 350px;
       margin-left: 80px;
       color: #e85e3f;
       letter-spacing: 1rem;
   }

   ul {
  
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 
   }

   li {
       color: white;
       list-style: none;
       font-family: 'Josefin Sans';
       display: flex;
       justify-content: space-between;
       margin: 0 1rem;
       text-transform: uppercase;
       font-size: 0.8rem;
       cursor: pointer;
   }

   ul li {

  margin: 0 1rem;
  text-transform: uppercase;
  font-size: 0.8rem;

  &:hover {
    
  color: #e85e3f;
  }
}

`;

export const Footer = styled.div`
footer {
  text-align: center;
  margin-top: 520px;
  color: #e85e3f;
  

}
footer span {
  font-family: 'Josefin Sans';
  font-weight: bold;
  color: #e85e3f;
}

`
