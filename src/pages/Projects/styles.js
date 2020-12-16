import styled from 'styled-components';
import SvgBackgroundProjects from '../../assets/background-projects.svg';
import SvgLinkCursor from '../../assets/link-cursor.svg';


export const Container = styled.div`
     @media screen and (max-width:1200px) {
        .projects-container {
            flex-direction: column !important;

            div {
                margin: 3% !important;
                width: 356px !important;
                height: 316px !important;

                img {
                    width: 100% !important;
                }
            }
        }
     }

     @media screen and (max-width:780px) {
        .projects-container {
            div {
                width: 258px !important;
                height: 228px !important;
            }
        }
     }

     @media screen and (max-width:520px) {
        .projects-container {
            div {
                width: 170px !important;
                height: 150px !important;
            }
        }
     }

     @media screen and (max-width:520px) {
        .projects-container {
           padding: 1% !important;


            div {
                width: 140px !important;
                height: 120px !important;
            }
        }
     }

    background-image: url(${SvgBackgroundProjects});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    width: 100vw;
    height: 100vh;

    h1 {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 100px;
        font-weight: 500;
        font-size: 32pt;
        color: #D5DBD5;
        text-shadow: 2px 3px 0px #3F8D1A;
    }

    .projects-container {
        display: flex;
        margin-top: 50px;
        justify-content: space-around;
        align-items: center;
        padding: 4%;

        div {
            width: 356px;
            height: 316px;
            background-color: #232323;
            box-shadow: 22px 27px 30px rgba(0, 0, 0, 0.25);
            border-radius: 21px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: 400ms;

            &:hover {
                transform: scale(1.05);
                cursor: url(${SvgLinkCursor}), default;
            }

            img {
                width: 75%;
                padding: 15px;
                cursor: url(${SvgLinkCursor}), default;
            }
        }
    }
`;
