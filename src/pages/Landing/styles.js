import styled from 'styled-components';

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
            }
    }

    @media screen and (max-width:470px) {
        .title {
            font-size: 50pt !important;   
        }
        .slogan {
                font-size: 16pt !important;
                margin-top: 14vh !important;
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
            z-index: 1;
            width: 100vw;
            height: 100vh;
        } 

        .title {
            font-size: 160pt;
            font-weight: 700;
            

        }

        .waveBottom {
                height: 30vh;
                width: 100vw;
                background-color: #3F8D1A;
                position: fixed;
                bottom: 0;
            }
`;