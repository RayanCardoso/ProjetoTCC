import AsyncStorage from "@react-native-async-storage/async-storage";
import request from "./request";

export async function postSubject(data) {
    try {
        await request({
            url: 'Subject',
            method: 'post',
            data: data,
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function getSubjects() {
    try {
        const userId = await AsyncStorage.getItem("tcc:userId")

        return await request({
            url: 'Subject/User/' + userId,
            method: 'get'
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}
