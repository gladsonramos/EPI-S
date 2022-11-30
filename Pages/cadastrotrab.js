import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import menu from '../assets/menu.png';

export default function CadastroTrab() {
    const [currentTab, setCurrentTab] = useState("Cadastro Trabalhador");
    // To get the curretn Status of menu ...
    const [showMenu, setShowMenu] = useState(false);
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


                <Text style={styles.title}>Nome </Text>
                <TextInput
                    value={""}
                    onChangeText={text => setEmail(text)}
                    placeholder="Nome"
                    style={styles.input}


                />




                <Text style={styles.title}>Projeto </Text>
                <TextInput
                    secureTextEntry={true}
                    value={""}
                    onChangeText={text => setPassword(text)}
                    placeholder="Projeto"
                    style={styles.input}

                />
                <Text style={styles.title}>Função </Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}
                    placeholder="Função"
                    style={styles.input}
                    secureTextEntry={true}

                />
                <Text style={styles.title}>Data de Admissao </Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}
                    placeholder="Data de Admissao"
                    style={styles.input}
                    secureTextEntry={true}

                />

                <TouchableOpacity style={styles.button}

                    onPress={() => cadastrar()} >
                    <Text style={styles.tittle} > CRIAR REGISTRO  </Text>

                </TouchableOpacity>



                <TouchableOpacity
                    style={styles.exitGo}
                    onPress={() => navigation.navigate('Signin')} >
                    <Text style={styles.tittle} > SALVAR  </Text>


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
