import styled from 'styled-components';

export const Container = styled.div`
    @media screen and (max-width:690px) {
        img {
            margin-top: 20px !important;
            max-width: 30px !important;
            transform: rotate(-90deg) !important;
        }
    }

    
    position: fixed;
    z-index: 1;

    img {
        max-width: 40px;
        margin-top: 50vh;
        margin-left: 10px;
    }

    div {
        display: none;
    }
`;
