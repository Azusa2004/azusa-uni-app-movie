import { defineStore } from 'pinia';
import { gatuserApi } from '../apis/my';

export const useUserStore = defineStore('user', {
	state: () => {
		return {
			userInfo:null,
			orderData:[]
		};
	},
	actions: {
	async getUserInfo(){
      try { 
			const res= await gatuserApi();
			  const result = res as any;
			if(result.code==200){
				this.userInfo=result.data;
			}
      } catch (error) {
        console.error('getUserInfo执行失败：', error);
      }
	},
		
		saveMovieData(data:any){
			this.orderData.push(data)
		}
	},
});
