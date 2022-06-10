import styled from 'styled-components';

export const Container = styled.div`

    background: #fcfcfc29;
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    position: fixed;
    border-radius: 3px;
    height: 100%;
    top: 0px;
    right: 0px;
    width: 300px;
    right: ${props => props.sidebar ? '0' : '-100%'};
    animation: showSidebar .4s;

    svg {
        position: fixed;
        color: white;
        width: 30px;
        height: 30px;
        margin-top: 32px;
        margin-left: 210px;
        cursor: pointer;
        &:hover {
        color:#2a5298;
    }
    
    }

    

    @keyframes showSidebar {
        from {
            opacity: 0;
            width: 0;
        }
        to {
            opacity: 1;
            width: 300px;
        }
    }

    @media(max-width: 800px) {
    display: flex;
    flex-direction: column;
    position: relative;

    
}

`
export const Content =   styled.div`
    margin-top: 100px;
`
