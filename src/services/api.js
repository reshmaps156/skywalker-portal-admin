import { commonApi } from "./commonApi"
import { serverUrl } from "./serverURL"

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody)
}

//api to get grievances
export const inboxApi = async(searchKey)=>{
    return await commonApi('GET',`${serverUrl}/admin/grievances?search=${searchKey}`)
}

//delete the grievance
export const deleteGrievanceApi = async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/admin/grievance/${id}`)
}