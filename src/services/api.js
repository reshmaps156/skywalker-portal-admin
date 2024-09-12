import { commonApi } from "./commonApi"
import { serverUrl } from "./serverURL"

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody)
}

//api to get grievances
export const inboxApi = async()=>{
    return await commonApi('GET',`${serverUrl}/admin/grievances`)
}