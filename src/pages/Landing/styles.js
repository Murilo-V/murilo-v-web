import styled from 'styled-components';
import SvgDefaultCursor from '../../assets/default-cursor.svg'

export const Container = styled.div `
    @media screen and (max-width:1100px) {
        .title {
            font-size: 120pt !important;
        }
    }

    @media screen and (max-width:690px) {
        .title {
            font-size: 80pt !important;
        }
        .slogan {
                font-size: 20pt !important;
                margin-top: 90px !important;
            }
    }

    @media screen and (max-width:470px) {
        .title {
            font-size: 50pt !important;   
            text-shadow: none !important;
        }
        .slogan {
                font-size: 16pt !important;
                margin-top: 70px!important;
            }
    }

    @media screen and (max-width:340px) {
        .title {
            font-size: 34pt !important;
        }
        .slogan {
                font-size: 12pt !important;
            }
    }

     .svgContainer, .svgMaskedContainer {
            position: fixed;
            z-index: -1;
            width: 100vw;
            height: 100vh;
        } 

        .title {
            font-size: 160pt;
            font-weight: 600;
            text-shadow: 4px 4px 25px rgba(18, 18, 18, 0.25);
        }

        .waveBottom {
                height: 30vh;
                width: 100vw;
                background-color: #3F8D1A;
                position: fixed;
                bottom: 0;
            }
`;