import styled from 'styled-components';


interface Input{
    colorful: boolean;
    paddingSpace: boolean;
}

export const Container = styled.form<Input>`
    width: 80%;
    position: relative;
    height: 50px;
    overflow: hidden;

    input{ 
        width: 100%;
        height: 100%;
        color: ${props => props.colorful ? '#000' : '#66B640'};
        padding-top: 20px;
        border: none;
        outline: none;
        background: transparent;
        padding-left: ${props => props.paddingSpace ? '20px' : '8px'};
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
        border-bottom: 1px solid #969696;  

        ::after {
            content: "";
            position: absolute;
            bottom: -1px;
            left: 0px;
            height: 100%;
            width: 100%;
            border-bottom: 3px solid ${props => props.colorful ? '#0083CD' : '#66B640'};
            transform: translateX(-100%);
            transition: all 0.3s ease;

            .icon{
                opacity: 1;
            }
        }
    }

    .content-name{   
        position: absolute;
        bottom: 5px;
        left: 0px;
        transition: all 0.3s ease;
        color: #969696;
    }

    input:focus + .label-name .content-name,
    input:valid + .label-name .content-name {
        transform: translateY(-150%);
        font-size: 14px;
        color: ${props => props.colorful ? '#0083CD' : '#66B640'};
    }

    input:focus + .label-name::after,
    input:valid + .label-name::after {
        transform: translateX(0%);
    }
`

export const Icon = styled.span`
    position: absolute;
    left: 0;
    bottom: 2px;
    
`