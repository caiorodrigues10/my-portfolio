import { createGlobalStyle } from "styled-components";
import fonts from "../styles/fonts";
import colors from "./colors";

export default createGlobalStyle`
    * {
        font-family: 'Poppins', sans-serif ;
    } 

    body { 
        background: ${colors.blue_dark};
        box-sizing: border-box;
    }
`;