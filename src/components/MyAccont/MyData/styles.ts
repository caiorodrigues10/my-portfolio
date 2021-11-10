import styled from 'styled-components';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import {Button} from "../../Button/styles";



export const Container = styled.div`
    display: flex;
    width: 70%;
    height: 100%;
    background: #fff;
    box-shadow: -5px 7px 10px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-left: 40px;
    margin-bottom: 100px;
    padding: 64px;
    
    
    > h1 {
        position: absolute;
        width: 250px;
        font-weight: ${fonts.fontWeight.bold};
        color: ${colors.primary};   

            
        > hr {
            position: absolute;
            width: 50px;
            height: 5px;
            background: #18A4A0;
            border: none;
        }
    }

    > div{
        margin-top: 100px;
        width: 50%;
        display: flex;
        flex-direction: column;
        > span {
            margin-top: 64px;
        }
    }
`

export const Save = styled(Button)`
    height: 50px;
    width: 100px;
    margin-left: 64%;
`

