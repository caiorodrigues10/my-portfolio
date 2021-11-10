import React , { ReactElement, useEffect, useState } from "react";
import GlobalStyle from "../../../styles/global";
import * as S from "./styles";
import icon from "../../../../public/images/success.png";
import Image from "next/image";

interface InpuProps {
    type: string;
    title: string;
    size: number;
    value?: string;
    placeholder?: string;
    readonly?: true;
}

export default function InputEdit({type, title, size, value, placeholder, readonly}: InpuProps): ReactElement {


    return(
        <>
            <GlobalStyle />

            <S.Container> 
                <input type={type} className="name" autoComplete="off" required maxLength={size} value={value} readOnly={readonly} placeholder={placeholder}/>
                <label htmlFor="name" className="label-name">
                    <span className="content-name">{title}</span>
                </label>
            </S.Container>
        </>
    )
}

