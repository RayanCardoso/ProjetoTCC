import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert, Button, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { login } from "../api/user";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Login() {
    const navigation = useNavigation();

    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const handleLogin = async () => {
        try {
            const data = {
                user: user,
                password: password
            }

            const response = await login(data)

            if(!response.data.authenticated) {
                Alert.alert("Atenção!", response.data.message)
                return;
            }

            await AsyncStorage.setItem("tcc:token", response.data.acessToken)
            await AsyncStorage.setItem("tcc:userId", response.data.userId)
            
            navigation.navigate("Subject")
        } catch (error) {
            console.log(error)
            Alert.alert("Houve um erro ao realizar o login", "Verifique as informações e tente novamente.")
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.contentLogo}>
                <Image source={require("../../assets/faeterj_logo.png")} style={styles.logoFaeterj} />
            </View>
            <View style={styles.contentFillInformations}>
                <View style={styles.contentInputs}>
                    <View style={styles.input}>
                        <TextInput 
                            placeholder="Email" 
                            onChangeText={(text) => setUser(text)}
                            style={styles.textInput} 
                        />
                    </View>
                    <View style={styles.input}>
                        <TextInput 
                            placeholder="Senha" 
                            onChangeText={(text) => setPassword(text)}
                            style={styles.textInput} 
                            secureTextEntry 
                        />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.textForgotPassword}>
                            Esqueci a senha
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.contentButtonNext}>
                    <TouchableOpacity style={styles.buttonNext} onPress={handleLogin}>
                        <Text>Avançar</Text>
                    </TouchableOpacity>
                    <View style={styles.contentCreateNewAccount}>
                        <Text>Não tem conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                            <Text style={styles.textCreateNewAccount}> Criar uma conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    logoFaeterj: {
        width: 225,
        resizeMode: "contain"
    },
    contentLogo: {
        height: Dimensions.get("window").height / 2,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contentFillInformations: {
        height: Dimensions.get("window").height / 2,
        justifyContent: 'space-between',
        alignItems: "center"
    },
    contentInputs: {
        width: Dimensions.get("window").width - 100
    },
    contentButtonNext: {
        width: Dimensions.get("window").width - 100,
        paddingBottom: 70
    },
    contentCreateNewAccount: {
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        marginTop: 25
    },
    textCreateNewAccount: {
        color: "#3B45F5"
    },
    textForgotPassword: {
        textAlign: "right",
        marginTop: 10
    },
    textInput: {
        height: 50,
        borderWidth: 1,  
        borderColor: '#000000',
        borderRadius: 15,  
        padding: 10,
        fontSize: 16,
        backgroundColor: '#fff',  
    },
    buttonNext: {
        height: 50,
        padding: 15,
        backgroundColor: "#3BBAF5",
        borderRadius: 15,  
        borderWidth: 1,  
        borderColor: '#000000', 
        alignItems: "center",
    }
});
  