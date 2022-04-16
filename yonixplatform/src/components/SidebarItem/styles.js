import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  font-size: 20px;
  color: white;
  font-family: 'Josefin Sans';
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

 > svg {
   margin: 0 13rem;

  } 

  &:hover {
    background: gray;
    backdrop-filter: blur;
  }

`;


