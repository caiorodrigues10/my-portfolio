import React , { ReactElement, useEffect, useState } from "react";
import GlobalStyle from "../../styles/global";
import * as S from "./styles";
import icon from "../../../public/images/success.png";
import Image from "next/image";

interface InpuProps {
    type: string;
    title: string;
    size: number;
}

export default function InputsRegister({type, title, size}: InpuProps): ReactElement {
    const [ colorful, setColor ] = useState(false)
    const [ img, setImg ] = useState(false)

    function onHandleBlur(e: any){
        setColor(!colorful);
        setImg(e.target.value !== '');
    }
    function onHadleFocus(){
        setColor(!colorful);   
        setImg(false)
    }

    return(
        <>
            <GlobalStyle />

            <S.Container colorful={colorful} paddingSpace={img}> 
                <input type={type} className="name" autoComplete="off" required maxLength={size}  onFocus={onHadleFocus} onBlur={onHandleBlur}/>
                
                <label htmlFor="name" className="label-name">
                    {img &&
                        <S.Icon  >
                            <Image src={icon}  width={16} height={16} alt=""/>
                        </S.Icon>
                    }
                    <span className="content-name">{title}</span>
                    
                </label>
            </S.Container>
        </>
    )
}