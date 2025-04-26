import request from "./request";

export async function postUser(data) {
    try {
        await request({
            url: 'Users',
            method: 'post',
            data: data,
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}


export async function login(data) {
    try {
        return await request({
            url: 'Auth/Login',
            method: 'post',
            data: data,
        });
    } catch (error) {
        console.error(error)
        throw error
    }
}
