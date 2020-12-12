import styled from 'styled-components';
import SvgMenuCursor from '../../assets/menu-cursor.svg';
import SvgLinkCursor from '../../assets/link-cursor.svg';
import BackgroundMenu from '../../assets/background-menu.svg';

export const Container = styled.div`
    @media screen and (max-width:780px) {
        .closeMenuIcon {
            margin-top: 20px !important;
            max-width: 30px !important;
            transform: rotate(-90deg) !important;
        }

        .nav-container {
            flex-direction: column !important;
            justify-content: center !important;
            background-position-x: left !important;

            video {
                max-width: 55vw !important;
                max-height: 75vw !important;
            }

            a {
                color: #232323 !important;
                font-size: 30pt !important;

                &:hover{
                color: #3F8D1A !important;
                }
            }
        }
    }

    z-index: 1;
    position: fixed;

    .closeMenuIcon {
        max-width: 40px;
        margin-top: 50vh;
        margin-left: 10px;
        z-index: 3;
        position: fixed;
        cursor: none;
    }

    .nav-container {
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
        justify-content: space-around;
        z-index: 2;
        position: fixed;
        cursor: url(${SvgMenuCursor}), default;

        video {
            border-style: none;
            outline: none;
            width: 50%;
            height: 100vh;
            cursor: url(${SvgMenuCursor}), default;
        }

        .items-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;  
            a {
                transition: 320ms;
                text-decoration: none;
                color: #D5DBD5;
                font-weight: 500;
                font-size: 50pt;
            }

            a:hover{
                transform: scale(1.25);
                cursor: url(${SvgLinkCursor}), default;
                color: #3F8D1A;
                font-weight: 600;
            }

            a + a { 
                margin-top: 15px;
            }
        }

    }
`;
