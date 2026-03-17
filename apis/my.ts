import { httpGet, httpPost } from "../utils/request"


export const addMyPhoneApi=(data?:any)=>{
	return httpPost('/users/wxLogin',data)
}

export const gatuserApi=(data?:any)=>{
	return httpGet('/users/getInfoByToken',data)
}

export const addPhonePasswApi=(data?:any)=>{
	return httpPost('/users/login',data)
}

export const addregisterApi=(data?:any)=>{
	return httpPost('/users/register',data)
}