import React , { ReactElement, useState} from "react";
import GlobalStyle from "../../../styles/global";
import Button from "../../Button";
import InputEdit from "../../Inputs/InpudtEdit";
import * as S from "./styles";

export default function MyData(): ReactElement {
    const user = "caio";
    
    return(
        <S.Container>
            <GlobalStyle />


            <h1>Meus dados<hr/></h1>
            
            <div>
                <span>
                    <InputEdit type="text" size={10} title="Nome completo" placeholder=""/>
                </span>
                <span>
                    <InputEdit type="number" size={10} title="CEP" placeholder=""/>
                </span>
                <span>
                    <InputEdit type="text" size={10} title="Bairro" placeholder=""/>
                </span>
                <span>
                    <InputEdit type="text" size={10} title="Cidade" placeholder=""/>
                </span>
                <span>
                    <InputEdit type="number" size={10} title="Celular" placeholder=""/>
                </span>
            </div>
        
            <div>
                <span>
                    <InputEdit type="number" size={10} title="CPF" value="23232323" readonly/>
                </span>
                <span>
                    <InputEdit type="text" size={10} title="Endereço" placeholder=""/>
                </span>
                <span>
                    <InputEdit type="number" size={10} title="Número" placeholder=""/>
                </span>
                <span>
                    <InputEdit type="text" size={10} title="Estado" placeholder=""/>
                </span>
                <span>
                    <InputEdit type="text" size={10} title="Email" value="imobpower@imob.com" readonly/>
                </span>
                <span>
                    <S.Save>
                        Salvar
                    </S.Save>
                </span>
            </div>

            
        </S.Container>
    )
}