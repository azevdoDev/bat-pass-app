import React from "react";
import {Text, View} from 'react-native';
import { StatusBar } from "expo-status-bar";
import style from '../screens/Styles';
import { BatLogo} from "../components/BatLogo/BatLogo";
import styles from "../screens/Styles";



export default function Home(){
    return(
        <View style={styles.appContainer}>

        <View style={styles.logoContainer}>
            <BatLogo/>
        </View>
        <Text>Opens up App.tsx to start working on
            your app!</Text>
            <StatusBar style="auto" />
        
        </View>
        
    )    
}