import { commonApi } from "./commonApi"
import { serverUrl } from "./serverURL"

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/login`,reqBody)
}