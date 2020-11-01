import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0 auto;
        padding: 0 auto;
        font-size: 16px;
        font-family: monospace;
    }
    body {
        background-image: url("https://i.redd.it/i71idp4xaew41.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
        background-position: bottom;
        height: 100vh;
        width: 100%;
    }
`;