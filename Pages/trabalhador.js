import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import menu from '../assets/menu.png';

export default function Trabalhador () {
  const [currentTab, setCurrentTab] = useState("Trabalhador");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
          <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
            
            
          }}>

            <Image 
             source={showMenu ? close : menu} style={{
              width: 20,
              height: 20,
              tintColor: 'black',
              marginTop: 1,

            }}></Image>

          </TouchableOpacity>

          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: 'black',
            paddingTop: 20
          }}>{currentTab}</Text>
{/*  ===========================================INICIO PÁGINA================================================ */}
         

<TouchableOpacity 

onPress={() => navigation.navigate ('CadastroTrab')} >
<Text>

    NOVO CADASTRO
</Text>

</TouchableOpacity>





         
     

</View>

    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});
