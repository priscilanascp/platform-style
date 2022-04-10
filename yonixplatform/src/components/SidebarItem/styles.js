import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  font-size: 20px;
  color: white;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 15px 20px;

 > svg {
      margin: 0 20px;
  } 

  &:hover {
    background: linear-gradient(to left,#e85e3f , #c51616);
  }



`;