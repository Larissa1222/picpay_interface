import React, { useState } from 'react';

import { 
  Feather, 
  MaterialCommunityIcons, 
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
  UseBalance,
  UseBalanceTitle,
  PaymentMethods,
  PaymentMethodsTitle,
  UseTicketContainer,
  UseTicketButton,
  UseTicketLabel,
} from "./styles";


import WActions from '../../components/WActions/index.js';
import WCard from '../../components/WCard';

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

          <WActions></WActions>

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

      <WCard></WCard>

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