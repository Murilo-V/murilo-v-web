import styled from 'styled-components';

export const Container = styled.div`
        overflow: hidden;
        h1 {
            padding-top: 100px;
            font-weight: 500;
            font-size: 32pt;
            color: #3F8D1A;
            text-shadow: 2px 3px 0px #D5DBD5;
            width: 100vw !important;
            text-align: center !important;
            position: fixed;
        }

    .history-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100vw;
        height: 100vh;

        video {
            min-width: 100%;
            min-height: 100%;
        }
    }
`;
