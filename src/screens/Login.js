import React from "react";
import { Button, Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Login() {
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
                        style={styles.textInput} 
                    />
                </View>
                <View style={styles.input}>
                    <TextInput 
                        placeholder="Senha" 
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
                <TouchableOpacity style={styles.buttonNext} onPress={() => console.log("Avançar pressionado")}>
                    <Text>Avançar</Text>
                </TouchableOpacity>
                <View style={styles.contentCreateNewAccount}>
                    <Text>Não tem conta?</Text>
                    <TouchableOpacity>
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
    },
    logoFaeterj: {
        width: 225,
        resizeMode: "contain"
    }
});
  