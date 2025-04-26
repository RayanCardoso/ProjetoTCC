import { useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 
import { getChecklist, postChecklist, updateChecklist } from "../api/checklist";

export default function Checklist() {
    const route = useRoute();
    const { subjectId } = route.params;

    const [modalChecklistDescription, setModalChecklistDescription] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);


    useEffect(() => {
        fetchAllChecklist();
    }, [])

    const toggleCheck = async (item) => {
        const data = {
            itemDescription: item.itemDescription,
            checked: !item.checked,
            id: item.id,
            subjectId: item.subjectId
        }

        await updateChecklist(data);

        setTasks(prev =>
            prev.map(task =>
                task.id === item.id ? { ...task, checked: !task.checked } : task
            )
        );
    };
    
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => toggleCheck(item)}>
            <Ionicons
                name={item.checked ? 'checkbox' : 'square-outline'}
                size={24}
                color="blue"
                style={styles.checkbox}
            />
            <Text style={styles.itemText}>{item.itemDescription}</Text>
        </TouchableOpacity>
    );

    const fetchAllChecklist = async () => {
        const response = await getChecklist(subjectId);

        if(response) {
            setTasks(response.data)
        }
    }

    const handleInsertChecklist = async () => {
        const data = {
            itemDescription: modalChecklistDescription,
            subjectId: subjectId
        }
        
        const response = await postChecklist(data);
        setModalVisible(false)

        if(response) {
            fetchAllChecklist();
        }
    }
    
    return (
        <View style={styles.container}>
            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <View style={styles.modalClose}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}><Text>X</Text></TouchableOpacity>
                        </View>
                        <Text>Descrição do checklist</Text>
                        <View style={styles.input}>
                            <TextInput 
                                style={styles.textInput} 
                                value={modalChecklistDescription} 
                                onChangeText={(text) => setModalChecklistDescription(text)}
                            />
                        </View>
                        <TouchableOpacity style={styles.saveButton} onPress={handleInsertChecklist}>
                            <Text style={styles.saveButtonText}>Salvar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <FlatList
                data={tasks}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={{ paddingVertical: 20 }}
            />

            <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                <Text style={styles.addButtonText}>+ Adicionar item</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
    },
    item: {
        backgroundColor: '#4effff',
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        marginRight: 10,
    },
    itemText: {
        fontSize: 16,
        flexShrink: 1,
    },
    addButton: {
        backgroundColor: '#4effff',
        padding: 12,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 40,
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
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
    }
});
  


