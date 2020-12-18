import styled from 'styled-components';
import SvgBackgroundServices from '../../assets/background-services.svg'
import SvgBackgroundMobileServices from '../../assets/background-mobile-services.svg'
import SvgMenuCursor from '../../assets/menu-cursor.svg';
import SvgGreenLinkCursor from '../../assets/green-link-cursor.svg';


export const Container = styled.div`
    @media screen and (max-width:1024px) {
        background-image: url(${SvgBackgroundMobileServices}) !important;

        h1 {
            font-size: 32pt !important;
            padding-top: 65px !important;
        }
     }

        width: 100vw;
        height: 100vh;
        background-image: url(${SvgBackgroundServices});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: url(${SvgMenuCursor}), default;

        h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 100px;
            font-weight: 500;
            font-size: 50pt;
            color: #232323;
            text-shadow: 2px 3px 0px #3F8D1A;
        }

        .services-container {
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: url(${SvgMenuCursor}), default;

            button {
                background: #232323;
                border: 3px solid #3F8D1A;
                box-sizing: border-box;
                box-shadow: 0px 10px 17px rgba(0, 0, 0, 0.25);
                border-radius: 18px;
                color: #D5DBD5;
                font-weight: 300;
                font-size: 14pt;
                padding: 12px;
                position: fixed;
                bottom: 10px;
                transition: 200ms;
                cursor: url(${SvgGreenLinkCursor}), default;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }

`;
