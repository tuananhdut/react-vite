import axios from "./axios.customize"

const createUserApi = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}
const updateUserApi = (id, fullName, phone) => {
    const URL_BACKEND = "api/v1/user"
    const data = {
        _id: id,
        fullName: fullName,
        phone: phone
    }
    return axios.put(URL_BACKEND, data)
}

const fetchAllUserAPI = (current, pageSize) => {
    const URL_BACKEND = `/api/v1/user?current=${current}&pageSize=${pageSize}`
    return axios.get(URL_BACKEND)
}

const deleteUserApi = (id) => {
    const URL_BACKEND = `/api/v1/user/${id}`
    return axios.delete(URL_BACKEND)
}
const handleUploadFile = (file, folder) => {
    const URL_BACKEND = `api/v1/file/upload`

    let config = {
        headers: {
            'content-type': 'multipart/form-data',
            'upload-type': folder
        }
    }

    const formData = new FormData();
    formData.append("fileImg", file)

    return axios.post(URL_BACKEND, formData, config)
}

const updateUserAvatarApi = (id, fullName, phone, avatar) => {
    const URL_BACKEND = "api/v1/user"
    const data = {
        _id: id,
        fullName: fullName,
        phone: phone,
        avatar: avatar
    }
    return axios.put(URL_BACKEND, data)
}

const registerAPI = (fullName, email, password, phone) => {
    const URL_BACKEND = "/api/v1/user/register"
    const data = {
        fullName: fullName,
        email: email,
        password: password,
        phone: phone
    }
    return axios.post(URL_BACKEND, data)
}

export {
    createUserApi,
    updateUserApi,
    fetchAllUserAPI,
    deleteUserApi,
    handleUploadFile,
    updateUserAvatarApi,
    registerAPI
}