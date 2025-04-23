import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Dimensions, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Subject() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View>
                <TouchableOpacity style={styles.subjectButton}>
                    <Text style={styles.subjectButtonText}>5PDM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subjectButton}>
                    <Text style={styles.subjectButtonText}>4POA</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subjectButton}>
                    <Text style={styles.subjectButtonText}>4UBD</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subjectButton}>
                    <Text style={styles.subjectButtonText}>4SBD</Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={styles.addSubjectButton}>
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
    }
});
  