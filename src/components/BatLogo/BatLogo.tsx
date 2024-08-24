import React from 'react';
import { View, Text, Image } from 'react-native';

import { styles } from './BatLogoStyles';
import batLogo from '../../../assets/vecteezy_safety-login-page-3d-illustration_14219604.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.title}> PASSWORD GENERATOR </Text>
        <Image source={batLogo}
        style={{
          resizeMode: 'contain',
          height: 200,
        }}/>
    </>
  );
}