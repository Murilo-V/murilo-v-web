import styled from 'styled-components';
import SvgBackgroundContact from '../../assets/background-contact.svg';
import SvgGreenLinkCursor from '../../assets/green-link-cursor.svg'


export const Container = styled.div`

    @media screen and (max-width: 800px) {
        .contact-container {
            .social-medias {
                    flex-direction: column !important;
            }
        } 
    }

    @media screen and (max-width: 600px) {
        h1 {
            font-size: 36pt !important;
            padding-top: 70px !important;
        }

        .contact-container {

            .social-medias {
                div {
                    margin: 15px !important;
                    img {
                        max-width: 50px !important;
                    }

                    p {
                        font-size: 14pt !important;
                        line-height: 20px !important;
                    }
                }
            }
        } 
    }

    h1 {
        font-size: 40pt;
        line-height: 74px;
        color: #D5DBD5;
        text-shadow: 3px 3px 0px #3F8D1A;
        width: 100vw !important;
        text-align: center !important;
        position: fixed;
        padding-top: 90px;
        font-weight: 500;
    }

    .contact-container {
        width: 100vw;
        height: 100vh;
        background-image: url(${SvgBackgroundContact});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;

        .social-medias {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 100%;
            height: 100%;
            

            a {
                text-decoration: none;
                cursor: url(${SvgGreenLinkCursor}), default;
            }

            div {
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                margin: 30px;
                cursor: url(${SvgGreenLinkCursor}), default;

                img {
                    max-width: 70px;
                    margin-bottom: 10px;
                    cursor: url(${SvgGreenLinkCursor}), default;
                }

                p {
                    color: #D5DBD5;
                    font-weight: 500;
                    line-height: 30px;
                    text-align: center;
                    font-size: 16pt;
                    width: 220px;
                    cursor: url(${SvgGreenLinkCursor}), default;
                }
            }
        }
    }
`;
