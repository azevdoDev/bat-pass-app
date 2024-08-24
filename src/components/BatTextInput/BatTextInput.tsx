import React from 'react';
import { View , TextInput} from 'react-native';

import { styles } from './BatTextInputStyles';

interface BatTextInputProps{
    pass:string 
}

export function BatTextInput(props: BatTextInputProps) {
  return (
        <TextInput 
        
        
        style={styles.imputer}
        placeholder='pass'
        value={props.pass}
        >

        </TextInput>

  );
}