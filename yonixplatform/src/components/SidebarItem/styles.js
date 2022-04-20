import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: linear-gradient(195deg, #EF5350, #E53935);
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
    background: #706e6e;
    backdrop-filter: blur;
  }

  
`;


