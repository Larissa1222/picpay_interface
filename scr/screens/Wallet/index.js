import React, { useState } from 'react';

import { 
  Feather, 
  MaterialCommunityIcons, 
  FontAwesome, 
  AntDesign,
} from '@expo/vector-icons';

import { Switch } from 'react-native';

import { 
  Wrapper, 
  Header, 
  HeaderContainer, 
  Title,
  BalanceContainer,
  Value,
  Bold,
  EyeButton,
  Info,
  Actions,
  Action,
  ActionLabel,
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  Card,
  CardBody,
  CardDetails,
  CardTitle,
  CardInfo,
  Img,
  AddButton,
  AddLabel,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";

import creditCard from '../../assets/img/credit-card.png';

export default function Wallet(){
  const [isVisible, setIsVisible] = useState(true);
  const [useBalance, setUseBalance] = useState(true);

  function handleToggleVisible(){
    setIsVisible((prevState) =>!prevState);
  }

  function handleToggleUseBalance(){
    setUseBalance((prevState) => !prevState);
  }

  return (
    <Wrapper>
      <Header 
        colors={
          useBalance 
            ? ['#52E78C', '#1AB563']
            : ['#D3D3D3', '#868686']
        } 
      >
        <HeaderContainer>
          <Title>Saldo PicPay</Title>

          <BalanceContainer>
            <Value>
              R$ <Bold>{isVisible ? '937.561,19' : '**********'}</Bold>
            </Value>
            
          <EyeButton onPress={handleToggleVisible} >
            <Feather 
              name={isVisible ? 'eye' : 'eye-off'}
              size={28} 
              color="#fff" />
          </EyeButton>
          </BalanceContainer>

          <Info>
            Seu saldo esta rendendo 100% do CDI
          </Info>

          <Actions>

            <Action>
              <MaterialCommunityIcons 
                name="cash" 
                size={28} 
                color="#fff" />
              <ActionLabel>Adicionar</ActionLabel>
            </Action>

            <Action>
              <FontAwesome 
                name="bank" 
                size={20} 
                color="#fff" />
              <ActionLabel>Retirar</ActionLabel>
            </Action>

          </Actions>
        </HeaderContainer>
      </Header>

      <UseBalance>
        <UseBalanceTitle>
          Usar saldo ao pagar
        </UseBalanceTitle>
        <Switch 
          value={useBalance}
          onValueChange={handleToggleUseBalance}
        />
      </UseBalance>

      <PaymentMethods>
        <PaymentMethodsTitle>
          Formas de Pagamento
        </PaymentMethodsTitle>
      </PaymentMethods>

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

      <UseTicketContainer>
        <UseTicketButton>
          <MaterialCommunityIcons 
            name="ticket-outline" 
            size={20}
            color="#0DB060"
          />
          <UseTicketLabel>
            Usar código promocional
          </UseTicketLabel>
        </UseTicketButton>
      </UseTicketContainer>

    </Wrapper>

  );
}