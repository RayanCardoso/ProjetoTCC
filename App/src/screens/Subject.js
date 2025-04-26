import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Alert, Button, Dimensions, Image, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { getSubjects, postSubject } from "../api/subject";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Subject() {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const [modalName, setModalName] = useState("");
    const [modalDescription, setModalDescription] = useState("");
    const [subjects, setSubjects] = useState([]);

    const fetchSubjects = async () => {
        const response = await getSubjects();

        if(response) {
            setSubjects(response.data);
        }
    }

    useEffect(() => {
        fetchSubjects();
    }, [])

    const handleInsertSubject = async () => {
        const userId = await AsyncStorage.getItem("tcc:userId")

        const data = {
            name: modalName,
            description: modalDescription,
            userId: userId
        }

        postSubject(data)
        Alert.alert("Matéria inserida com sucesso!")
        setModalVisible(false)
        setModalName("")
        setModalDescription("")
    } 

    return (
        <View style={styles.container}>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalClose}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}><Text>X</Text></TouchableOpacity>
                        </View>
                        <Text>Nome</Text>
                        <View style={styles.input}>
                            <TextInput style={styles.textInput} value={modalName} onChangeText={(text) => setModalName(text)} />
                        </View>
                        <Text>Descrição</Text>
                        <View style={styles.input}>
                            <TextInput style={styles.textInput} value={modalDescription} onChangeText={(text) => setModalDescription(text)}/>
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={handleInsertSubject}>
                            <Text style={styles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View>
                {
                    subjects && subjects.length > 0 && subjects.map((subject) => (
                        <TouchableOpacity 
                            style={styles.subjectButton}
                            onPress={() => {
                                navigation.navigate("Checklist", {
                                    subject: subject.name
                                })
                            }}
                        >
                            <Text style={styles.subjectButtonText}>{subject.name}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
            <View>
                <TouchableOpacity style={styles.addSubjectButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.addSubjectButtonText}>+ Adicionar matéria</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'space-between',
        padding: 15
    },
    subjectButton: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "#3BBAF5",
        padding: 15,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    subjectButtonText: {
        fontSize: 16,
        color: "#ffffff",
    },
    addSubjectButton: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "#3B7FF5",
        padding: 15,
        margin: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    addSubjectButtonText: {
        fontSize: 16,
        color: "#ffffff",
    },
    saveButtonText: {
        fontSize: 16,
        color: "#ffffff",
    },
    saveButton: {
        borderWidth: 1,
        borderColor: "#000000",
        borderRadius: 10,
        backgroundColor: "#3B7FF5",
        width: 250,
        padding: 10,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        marginVertical: 10
    },
    textInput: {
        height: 40,
        width: 250,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    modalClose: {
        flexDirection: "row",
        width: 250,
        marginBottom: 20,
        justifyContent: "flex-end"
    },
    modalBackground: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // fundo meio escuro
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      width: 300,
      padding: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      alignItems: 'center',
    },
});
  