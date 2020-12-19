import styled from 'styled-components';
import SvgBackgroundBudget from '../../../assets/background-budget.svg';
import SvgMenuCursor from '../../../assets/menu-cursor.svg';

export const Container = styled.div`
@media screen and (max-width:1024px) {
        h1 {
            font-size: 32pt !important;
            padding-top: 65px !important;
        }
     }

        width: 100vw;
        height: 100vh;
        background-image: url(${SvgBackgroundBudget});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        cursor: url(${SvgMenuCursor}), default;

    h1 {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-top: 90px;
            font-weight: 500;
            font-size: 40pt;
            color: #3F8D1A;
            text-shadow: 2px 3px 0px #D5DBD5;
        }

        form {
            background-color: #3F8D1A;
            box-shadow: 0px 8px 31px rgba(0, 0, 0, 0.25);
            border-radius: 15px;
            border-bottom-right-radius: 0;
            border-bottom-left-radius: 0;
            padding: 14px 30px 0px 30px;
            width: 50vw;
            margin-left: 25vw;
            margin-right: 25vw;
            position: fixed;
            bottom: 0;
            display: flex;
            align-items: center;
            justify-content: space-between;
            flex-direction: column;

            h2 {
                text-align: center;
                font-weight: 500;
                font-size: 23pt;
                line-height: 41px;
                text-decoration-line: underline;
                color: #232323;
                margin-bottom: 5px;
            }

            h3 {
                font-weight: 500;
                font-size: 15pt;
                line-height: 21px;
                color: #D5DBD5;
                text-align: center;
                margin-bottom: 45px;
            }

            input, select, div, textarea {
                color: #232323;
            }

            .MuiInputBase-root {
                margin-bottom: 20px;
            }

            button {
                background: #232323;
                border-radius: 8px;
                font-weight: 500;
                font-size: 14pt;
                width: 120px;
                line-height: 37px;
                color: #D5DBD5;
                margin-bottom: 20px;
            }
        }
`;
