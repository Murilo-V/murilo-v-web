import styled from 'styled-components';
import svgIntroMasked from '../../assets/masked-intro-vector.svg'


export const Container = styled.div `
     .svgContainer {
            position: fixed;
            z-index: 1;
        } 

        .maskedTitle {
            color: #232323;
            width: 100vw;
            height: 100vh;
            position: fixed;
            font-size: 160pt;
            display: flex;
            font-weight: 700;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            mask-image: url(${svgIntroMasked});
            mask-position: fixed;
            mask-repeat: no-repeat;
            mask-size: 100%;
            z-index: 2;
            text-shadow: 15.2156px 15.2156px 11.4117px rgba(18, 18, 18, 0.25);

            p {
                font-size: 30pt;
                margin: 0;
                padding: 0;
                text-decoration-line: underline;
                font-weight: 500;
            }
        }

        .unmaskedTitle {
            top: 0;
            color: #3F8D1A;
            width: 100vw;
            height: 100vh;
            position: fixed;
            font-size: 160pt;
            display: flex;
            font-weight: 700;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            text-shadow: 15.2156px 15.2156px 11.4117px rgba(18, 18, 18, 0.25);

            p {
                font-size: 30pt;
                margin: 0;
                padding: 0;
                text-decoration-line: underline;
                font-weight: 500;
                color: #D5DBD5;

            }
        }
`;