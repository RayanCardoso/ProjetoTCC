import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from '@expo/vector-icons'; 

export default function Checklist() {
    const route = useRoute();
    const { subject } = route.params;

    const [tasks, setTasks] = useState([
        { id: '1', text: 'Estudar na Oracle sobre DDL', checked: true },
        { id: '2', text: 'Rever conteúdo de DML', checked: true },
        { id: '3', text: 'Formular questões para estudar para prova', checked: true },
    ]);

    const toggleCheck = (id) => {
        setTasks(prev =>
            prev.map(task =>
            task.id === id ? { ...task, checked: !task.checked } : task
            )
        );
    };
    
    const addItem = () => {
        const newId = (tasks.length + 1).toString();
        setTasks(prev => [
            ...prev,
            { id: newId, text: `Nova tarefa ${newId}`, checked: false },
        ]);
    };
    
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => toggleCheck(item.id)}>
            <Ionicons
            name={item.checked ? 'checkbox' : 'square-outline'}
            size={24}
            color="blue"
            style={styles.checkbox}
            />
            <Text style={styles.itemText}>{item.text}</Text>
        </TouchableOpacity>
    );
    
    return (
        <View style={styles.container}>
            <FlatList
            data={tasks}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={{ paddingVertical: 20 }}
            />

            <TouchableOpacity style={styles.addButton} onPress={addItem}>
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
});
  


