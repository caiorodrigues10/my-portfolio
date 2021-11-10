import styled from 'styled-components';




export const Container = styled.form`
    width: 80%;
    position: relative;
    height: 70px;
    overflow: hidden;


    input{ 
        width: 100%;
        height: 100%;
        color: #333333;
        padding-top: 20px;
        border: none;
        outline: none;
        font-size: 18px;
        background: transparent;
        padding-left: 8px;
        transition: all 0.4s ease;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
    
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    label{
        position: absolute;
        bottom: 0px;
        left: 0%;
        width: 100%;
        height: 100%;
        pointer-events: none;
        border-bottom: 3px solid #BBBBBB;  
        font-size: 18px;
    }

    .content-name{   
        transition: all 0.3s ease;
        color: #969696;
    }
    


    input:focus + .label-name .content-name,
    input:valid + .label-name .content-name {
        transform: translateY(-150%);
    }

    input:focus + .label-name::after,
    input:valid + .label-name::after {
        transform: translateX(0%);
    }
`