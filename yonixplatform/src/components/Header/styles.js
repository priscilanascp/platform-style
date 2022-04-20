import styled from 'styled-components';

export const Container = styled.div `
    height: 80px;
    display: flex;
    background: #706e6e;
    box-shadow: 0 0 20px 3px;

    

   > svg {
        position: fixed;
        color:#fcfcfc;
        width: 30px;
        height: 30px;
        margin-top: 25px;
        margin-left: 1800px;
        cursor: pointer;
        &:hover {
        color: #e85e3f;
    }

    
    }
   
    img {
     
     margin-left: 80px;
     background: #fff;
     border-radius: 40px;
    }


   h1 {
       color: white;
       font-family: 'Oswald', solid;
       font-weight: bold;
       font-size: 70px;
       margin-top: 500px;
       margin-left: 80px;
       color: #E53935;
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
        transform: scale(1)
      }
    }
    
 

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
       font-family: 'Oswald';
       font-size: 36px;
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
    
  color: #EF5350;


  }
}

@media  (max-width: 800px) {
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


`
