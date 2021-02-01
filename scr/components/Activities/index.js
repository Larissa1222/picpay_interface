import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  Title,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Description,
  UserName,
  CardFooter,
  Details,
  Value,
  Divider,
  Date,
  Actions,
  Option,
  OptionLabel,
} from './styles';

import avatar from '../../assets/img/avatar.png';

export default function Activities(){
  return (
    <Container>
      <Header>
        <Title>Atividades</Title>
      </Header>

      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>Você pagou a @maatheusilva</Description>
        </CardHeader>

        <CardBody>
        </CardBody>
        <UserName>Mateus Silva</UserName>

        <CardFooter>
          <Details>
            <Value>R$25,00</Value>

            <Divider/>


            <Feather name="lock" color="#fff" size={14} />
            <Date>Hoje as 11:35AM</Date>
            
          </Details>

          <Actions>
            <Option>
              <MaterialCommunityIcons 
                name="comment-outline" 
                size={14} 
                color="#fff"/>
              <OptionLabel>0</OptionLabel>

              <AntDesign 
                name="hearto" 
                size={14} 
                color="#fff"/>
              <OptionLabel>0</OptionLabel>
            </Option>
          </Actions>

        </CardFooter>

      </Card>

    </Container>
  );
}