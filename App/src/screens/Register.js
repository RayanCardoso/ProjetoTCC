import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Register() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.contentLogo}>
                <Image source={require("../../assets/faeterj_logo.png")} style={styles.logoFaeterj} />
            </View>
            <View style={styles.contentFillInformations}>
                <View style={styles.contentInputs}>
                    <View style={styles.input}>
                        <TextInput 
                            placeholder="Nome" 
                            style={styles.textInput} 
                        />
                    </View>
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
                </View>
                <View style={styles.contentButtonNext}>
                    <TouchableOpacity style={styles.buttonNext} onPress={() => console.log("Avançar pressionado")}>
                        <Text>Avançar</Text>
                    </TouchableOpacity>
                    <View style={styles.contentLogin}>
                        <Text>Já tem uma conta?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                            <Text style={styles.textLogin}> Login</Text>
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
        width: 150,
        height: 150,
        resizeMode: "contain",
    },
    contentLogo: {
        height: (2 / 5) * Dimensions.get("window").height,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 10,
    },
    contentFillInformations: {
        height: (3 / 5) * Dimensions.get("window").height,
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
    contentLogin: {
        flexDirection: "row",
        justifyContent: "center"
    },
    input: {
        marginTop: 25
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
    textLogin: {
        color: "#3B45F5"
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


