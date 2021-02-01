import React from 'react';

import { 
  MaterialCommunityIcons, 
  FontAwesome, 
} from '@expo/vector-icons';

import { 
  Actions,
  Action,
  ActionLabel,
} from "./styles";

export default function WActions(){
  return(
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
  );
};