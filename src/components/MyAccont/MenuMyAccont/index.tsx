import React , { ReactElement, useState} from "react";
import Image from "next/image";
import GlobalStyle from "../../../styles/global";
import * as S from "./styles";

export default function MenuMyAccont(): ReactElement {
    const [ selected, setSelected ] = useState([true, false, false, false, false]);

    return(
        <S.Container selected={selected}>
            <GlobalStyle />

            <a
                onClick={() => setSelected([true, false, false, false, false])} 
                className="user" 
            >
                <S.OutlineUserCircle selected={selected}/>
                <text>Meus dados</text>
            </a>

            <a
                onClick={() => setSelected([false, true, false, false, false])} 
                className="company" 
            >
                <S.Buildings selected={selected}/>
                <text>Dados da empresa</text>
            </a>

            <a
                onClick={() => setSelected([false, false, true, false, false])} 
                className="pass" 
            >
                <S.MdKey selected={selected}/>
                <text>Senha</text>
            </a>

            <a
                onClick={() => setSelected([false, false, false, true, false])} 
                className="history" 
            >
                <S.History selected={selected}/>
                <text>Histórico de compras</text>
            </a>

            <a
                onClick={() => setSelected([false, false, false, false, true])}  
                className="logOut"
            >
                <S.LogOutOutline selected={selected}/>
                <text>Sair</text>
            </a>
        </S.Container>
    )
}

















