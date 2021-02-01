import React from 'react';

import { 
  AntDesign,
} from '@expo/vector-icons';

import creditCard from '../../assets/img/credit-card.png';

import { 
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
} from "./styles";


export default function WCard(){
  return(
    <Card>
      <CardBody>
        <CardDetails>
          <CardTitle>
            Cadastre seu cartão de crédito
          </CardTitle>
          <CardInfo>
            Cadastre um cartão de crédito
            para poder fazer pagamentos mesmo
            quando não tiver saldo no seu PicPay
          </CardInfo>
        </CardDetails>
        <Img source={creditCard} resizeMode="contain" />
      </CardBody>

      <AddButton>
        <AntDesign
          name="pluscircleo"
          size={30}
          color="#0DB060"
        />
        <AddLabel>
          Adicionar cartão de crédito
        </AddLabel>
      </AddButton>

    </Card>
  );
}