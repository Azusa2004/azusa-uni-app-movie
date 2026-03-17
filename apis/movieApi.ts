import { httpGet, httpPost } from "../utils/request"

export const addMovieApi=(data?:any)=>{
	return httpPost('/theatres/search',data)
}
export const getcinemaApi=(data?:any)=>{
	return httpGet('/theatres/getById',data)
}