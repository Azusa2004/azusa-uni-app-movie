import { httpGet, httpPost } from "../utils/request"

export const addpopularApi=(data?:any)=>{
	return httpPost('/movies/search',data)
}

export const addsoonApi=(data?:any)=>{
	return httpPost('/movies/search',data)
}

export const addgradeApi=(data?:any)=>{
	return httpPost('/movies/search',data)
}
//通过电影id获取排片
export const addarrangementApi=(data?:any)=>{
	return httpPost('/schedules/search',data)
}
//通过排片id获取排片座位
export const getcinemaSelectApi=(data?:any)=>{
	return httpGet('/schedules/getById',data)
}
