import styled from 'styled-components';
import SvgMenuCursor from '../../assets/menu-cursor.svg';
import BackgroundMenu from '../../assets/background-menu.svg';

export const Container = styled.div`
    @media screen and (max-width:690px) {
        img {
            margin-top: 20px !important;
            max-width: 30px !important;
            transform: rotate(-90deg) !important;
        }
    }

    z-index: 1;
    position: fixed;

    img {
        max-width: 40px;
        margin-top: 50vh;
        margin-left: 10px;
        z-index: 3;
        position: fixed;
        cursor: none;
    }

    div {
        background-image: url(${BackgroundMenu});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
        opacity: 0;
        display: none;
        width: 100vw !important;
        height: 100vh !important;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
        position: fixed;
        cursor: url(${SvgMenuCursor}), default;

    }
`;
