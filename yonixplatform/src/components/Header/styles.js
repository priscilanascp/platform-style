import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  display: flex;
  background: #253e92;
  box-shadow: 0 0 20px 3px;

  > svg {
    position: fixed;
    color: #fcfcfc;
    width: 30px;
    height: 30px;
    margin-top: 25px;
    margin-left: 1800px;
    cursor: pointer;
    &:hover {
      color: #ccc;
    }
  }

  

  h1 {
    color: white;
    font-family: "Oswald", solid;
    font-weight: bold;
    font-size: 50px;
    margin-top: 350px;
    margin-left: 100px;
    color: #fff;
    letter-spacing: 1rem;

    animation-name: fade;
    animation-duration: 900ms;

    @keyframes fade {
      from {
        opacity: 0;
        transform: scale(0.2);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  ul {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 200px;
    position: relative;
  }

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  @media (max-width: 800px) {
    li {
      display: flex;
      flex-direction: column;
      position: relative;
    }
  }

  @media (max-width: 390px) {
    img {
      margin: 0;
      width: 20%;
      max-height: 10vh;
    }
  }

  @media (max-width: 390px) {
    svg {
      margin: 0;
      width: 20%;
      max-height: 10vh;
    }
  }

  *,
  *:before,
  *:after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  nav {
    height: 100vh;
    width: 70vw;
    min-width: 600px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: auto;
  }
  a {
    position: relative;
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: #f7f7f7;
    font-size: 18px;
    letter-spacing: 0.5px;
    padding: 0 10px;
  }
  a:after {
    content: "";
    position: absolute;
    background-color: #f7f7f7;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }
  a:hover {
    color: #ccc;
  }
  a:hover:after {
    width: 100%;
  }
`;
export const Box = styled.div`



`;
