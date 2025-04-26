import AsyncStorage from "@react-native-async-storage/async-storage";
import request from "./request";

export async function getChecklist(subjectId) {
    try {
        return await request({
            url: 'Checklist/Subject/' + subjectId,
            method: 'get'
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function postChecklist(data) {
    try {
        return await request({
            url: 'Checklist',
            method: 'post',
            data: data
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}

export async function updateChecklist(data) {
    try {
        return await request({
            url: 'Checklist',
            method: 'put',
            data: data
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}

