import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
${reset};
@font-face {
    font-family: "notopen_numbers";
    src: url(${props => props.theme.files.fontFamily});
}
body { 
    font-family: 'notopen_numbers', sans-serif;    
    word-break: break-word;
    background-color : #f5f5f5;
}
*,::before,::after{
    box-sizing : border-box;
}
ul,li{
    margin : 0;
    padding : 0;
    list-style : none;
}
`;
export default globalStyles;
