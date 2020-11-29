import styled from 'styled-components';

export const Container = styled.div `
    @media screen and (max-width:920px) {
        .title {
            font-size: 120pt !important;
        }

        p {
            padding-top: 58vh !important;
        }
    }

    @media screen and (max-width:690px) {
        .title {
            font-size: 80pt !important;
        }
        p {
                font-size: 20pt !important;
                padding-top: 56vh !important;
            }
    }

    @media screen and (max-width:470px) {
        .title {
            font-size: 50pt !important;   
        }
        p {
                font-size: 16pt !important;
                padding-top: 54vh !important;
            }
    }

    @media screen and (max-width:340px) {
        .title {
            font-size: 34pt !important;
        }
        p {
                font-size: 12pt !important;
                padding-top: 52vh !important;
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

        span {
            color: #3F8D1A;
            width: 100vw;
            height: 100vh;
            position: fixed;
            display: flex;
            align-items: center;
            justify-content: space-around;
            flex-direction: column;
            z-index: 0;
        }

        p {
                font-size: 30pt;
                margin: 0;
                padding: 0;
                text-decoration-line: underline;
                text-align: center;
                font-weight: 500;
                color: #232323;
                padding-top: 62vh;
                position: fixed;
                z-index: 3;
                width: 100vw;
                height: 100vh;
            }

        .waveBottom {
                height: 45vh;
                width: 100vw;
                background-color: #3F8D1A;
                position: fixed;
                bottom: 0;
            }
`;