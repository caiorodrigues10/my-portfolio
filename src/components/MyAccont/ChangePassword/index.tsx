import React, { ReactElement, useState } from "react";
import GlobalStyle from "../../../styles/global";
import InputEdit from "../../Inputs/InpudtEdit";
import * as S from "./styles";

export default function ChangePassword(): ReactElement {
  const user = "caio";

  return (
    <S.Container>
      <GlobalStyle />

      <h1>
        Trocar senha
        <hr />
      </h1>

      <div>
        <span>
          <InputEdit type="text" size={10} title="Senha" placeholder="" />
        </span>
      </div>

      <div>
        <span>
          <InputEdit type="password" size={10} title="Nova senha" />
        </span>
        <span>
          <S.Save>Salvar</S.Save>
        </span>
      </div>
    </S.Container>
  );
}
