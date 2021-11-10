import React , { ReactElement, useState} from "react";
import GlobalStyle from "../../../styles/global";
import * as S from "./styles";

export default function HistorySale(): ReactElement {
    return (
      <>
        <GlobalStyle />

        <S.Container>
          <h1>Histórico de compras</h1>
          <S.Line />
          <span>
            <p className="package">
              Pacote gold <br />
              R$ 2.000,00
            </p>
            <p className="dataSale">
              R$ 2000,00
              <br />
              <text>Comprado no dia 08/07/2021 ás 18:34</text>
            </p>
          </span>
          <span>
            <p className="package">
              Pacote gold <br />
              R$ 2.000,00
            </p>
            <p className="dataSale">
              R$ 2000,00
              <br />
              <text>Comprado no dia 08/07/2021 ás 18:34</text>
            </p>
          </span>
          <span>
            <p className="package">
              Pacote gold <br />
              R$ 2.000,00
            </p>
            <p className="dataSale">
              R$ 2000,00
              <br />
              <text>Comprado no dia 08/07/2021 ás 18:34</text>
            </p>
          </span>
        </S.Container>
      </>
    );
}