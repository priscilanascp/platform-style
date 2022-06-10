import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(to right, #1e3c72, #2a5298);
  font-size: 16px;
  color: white;
  font-family: 'Varela Round';
  padding: 10px;
  cursor: pointer;
  border-radius: 0.375rem;
  margin: 0 15px 20px;

 > svg {
   margin: 0 13rem;

  } 

  &:hover {
    background: #000;
    backdrop-filter: blur;
  }
  
  

  
`;


