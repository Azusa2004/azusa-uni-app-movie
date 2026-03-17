//网络请求封装
const BASE_URL='http://nocat.life:3014';

 const request=async(url:string,method:any,data:object={})=>{
		try {
			const res = await uni.request({
				url: BASE_URL + url,
				method,
				data,
				timeout: 5000,
				header: {
					Authorization: uni.getStorageSync('user_token')
				}
			})
			return res.data;
		} catch (err) {
			uni.showToast({
				title: '网络错误~',
				icon: 'error',
				duration: 2000
			});
			throw err;
		}
}

 export const httpGet=(url:string,data?:object)=>{
	 return request(url,'GET',data)
 }
 export const httpPost=(url:string,data?:object)=>{
	 return request(url,'POST',data)
 }
 export const httpPut=(url:string,data?:object)=>{
	 return request(url,'PUT',data)
 }
 export const httpDelete=(url:string,data?:object)=>request(url,'DELETE',data)