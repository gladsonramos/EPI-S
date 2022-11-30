import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View , TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import menu from '../assets/menu.png';

export default function CadastroEPI() {
    const [currentTab, setCurrentTab] = useState("CADASTRO EPI");
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


                


               <Text style={styles.title}>Trabalhador </Text>
                <TextInput
                    value={""}
                    onChangeText={text => setEmail(text)}
                    placeholder="Trabalhador"
                    style={styles.input}


                />




                <Text style={styles.title}>Data de entrega </Text>
                <TextInput
                    secureTextEntry={true}
                    value={""}
                    onChangeText={text => setPassword(text)}
                    placeholder="Data de entrega"
                    style={styles.input}

                />
                <Text style={styles.title}>Previsão de devolução </Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}
                    placeholder="Previsão de devolução"
                    style={styles.input}
                    secureTextEntry={true}

                />
                <Text style={styles.title}>Motivo</Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}

                    style={styles.input}
                    secureTextEntry={true}
                />

                <Text style={styles.title}>EPI FOI ENTREGUE IGEINIZADO?</Text>

                <Text style={styles.title}>C.A</Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}
                    placeholder="CA"
                    style={styles.input}
                    secureTextEntry={true}
                />
                <Text style={styles.title}>Validade </Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}
                    placeholder="Validade"
                    style={styles.input}
                    secureTextEntry={true}

                />
                <Text style={styles.title}>Nome do Equipamento </Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}
                    placeholder="LISTA DE EQUIPAMENTOS"
                    style={styles.input}
                    secureTextEntry={true}

                />

                <Text style={styles.title}>Quantidade</Text>
                <TextInput
                    value={""}
                    onChangeText={text => setPasswordConfirm(text)}
                    placeholder="Quantidade"
                    style={styles.input}
                    secureTextEntry={true}

                />

                <TouchableOpacity style={styles.button}

                    onPress={() => cadastrar()} >
                    <Text style={styles.tittle} > CRIAR REGISTRO E CRIAR ASSINATURA </Text>

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
