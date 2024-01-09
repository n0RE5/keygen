import { SERVER_API_URL } from "@/utils/consts"
import axios from "axios"

export const getKey = async () => {
    const response = await axios.get(SERVER_API_URL + 'keys')
    return response.data
}

export const validateKey = async (uuid: string) => {
    const response = await axios.post(SERVER_API_URL + 'keys', {uuid})
    return response.data
}

export const keyLoader = async () => {
    try {
        const res = await getKey()
        return res
    } catch(e) {
        console.log(e)
        return 'Server Internal Error'
    }
}