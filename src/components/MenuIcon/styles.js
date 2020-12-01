import styled from 'styled-components';
import SvgPointerCursor from '../../assets/pointer-cursor.svg'


export const Container = styled.div`
    @media screen and (max-width:690px) {
        img {
            margin-top: 20px !important;
            max-width: 30px !important;
            transform: rotate(-90deg) !important;
        }
    }

    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 7;

    img {
        max-width: 40px;
        margin-top: 50vh;
        cursor: url(${SvgPointerCursor}), pointer;
        margin-left: 10px;
        text-shadow: 2px 2px 6px rgba(18, 18, 18, 0.70);
        transition: 400ms; 

        &:hover {
            transform: rotate(90deg);
        }
    }
`;
