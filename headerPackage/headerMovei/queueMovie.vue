<template>
	<view>
		<view class="MovieTime">
			<scroll-view style="  white-space: nowrap;"  scroll-x="true">
				
			<view :class="['MovieTimeD2',{'Backcolor':weekBackcolorId==item?.date}]"  v-for="(item,index) in Moviedate" :key='item?.date' @click="weekBackcolor(item.date,item.weekday)">
				<view style="font-size: 25rpx;  font-weight: 550;">{{item?.date.slice(5,10)}}</view>
				<text style="font-size: 25rpx; font-weight: 550;">{{item?.weekday}}</text>
			</view>
			</scroll-view>
		</view>
		
		<view class="cinema" v-for="item in MoveiData" :key="item?._id">
			<view style="display: flex; justify-content: space-between;">
				<text class="MovieName hide">{{item?.name}}</text>
				<view style="text-align: end;">
					<text style="font-size: 22rpx; color: #ef4238;">￥</text>
					<text style="font-size: 38rpx; color: #ef4238; margin: 0 1rpx 0 1rpx;">{{item?.min_price}}</text>
					<text style="font-size: 20rpx; color: #ef4238;">起</text>
				</view>
				
			</view>
			
			<view style=" margin-top: 20rpx; display: flex; align-items:center;">
				<image src="/static/position-blue.png" mode="" style="width: 20rpx; height: 26rpx; margin-right: 10rpx;"></image>
				<text style="font-size: 25rpx; font-weight: 530; width: 700rpx;" class="ellipsis">{{item?.distance}}km · {{item?.address}}</text>
			</view>
			<text  class="MovieTag" v-for="item2 in item?.serverIds" :key="item2?._id">{{item2?.name}}</text>
			<text  class="MovieTag MovieTag2" v-for="item3 in item?.hallTypeIds" :key="item3?._id">{{item3?.name}}</text>
			<view class="TimeAge"> 
				<view  :class="['Age',{'Backcolor':BackcolorKey==item?.key,'Passcolor':isPass(item?.key)}]" v-for="item in MovieTime" :key="item?.key" @click="Backcolor(item)">{{item.Time}}</view>
			</view>
		</view>
		
		<Error ref="toastRef"></Error>
		<view class="select" @click="gocinemaSelect">立即选座</view>
	</view>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { addMovieApi } from "../../apis/movieApi";
import Error from "/components/Error/Error"
const props= defineProps(['MovieId','SelectId'])
const MoveiData=ref([])

const allData=ref({
	date:'',
	weekday:'',
	MovieTime:'',	
})

const gocinemaSelect=()=>{
	if(allData.value.date==''){
		showError3()
	}else if(allData.value.MovieTime==''){
		showError4()
	}else{
		   const dataToSend = {
		        date: allData.value.date,      
		        weekday: allData.value.weekday, 
		        time: allData.value.MovieTime, 
		    };
			const encodedData = encodeURIComponent(JSON.stringify(dataToSend));
		uni.navigateTo({
			url:`/MoviePackage/cinemaSelect/cinemaSelect?id=${props.SelectId}&dateInfo=${encodedData}`
		})
	}
	
}

watch(props,()=>{
	addMovieApi({movieId:props?.MovieId}).then(res=>{
		if(res.code==200){
			MoveiData.value=res?.data?.rows
		}
	})
})

const Moviedate = ref(getNextSevenDays());
const BackcolorKey=ref('')
const Backcolor=(itemkey2)=>{
	const today = new Date();
		const todayStr = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`;
		
		// 判断是否过期：
		// 如果选中今天，用 passTime 判断
		// 如果选中其他日期，用 CurrentdatePass 判断
		const isExpired = (Currentdate.value === todayStr) 
			? passTime.value.some(item => item.key === itemkey2.key)
			: CurrentdatePass.value.some(item => item.key === itemkey2.key);
			
		if(!isExpired){
			// 没过期，正常选择/取消
			if(BackcolorKey.value==itemkey2.key){
				BackcolorKey.value=''
				allData.value.MovieTime=''
			}else{
				BackcolorKey.value=itemkey2.key
				allData.value.MovieTime=itemkey2.Time
			}
		} else {
			// 已过期，显示错误
			showError()
		}
}

//当前选中的日期
const Currentdate=ref()
//当前选中的日期的过期场次
const passTime=ref([])
const CurrentdatePass=ref([])
const weekBackcolorId=ref(Moviedate.value[0].date)

const weekBackcolor=(id,weekday)=>{
	Currentdate.value=id
	const today = new Date();
		const todayStr = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`;
		// 切换日期时，更新 CurrentdatePass
		if(id === todayStr) {
			// 如果切换到今天，CurrentdatePass 应该等于 passTime
			CurrentdatePass.value = [...passTime.value]; // 复制今天的过期场次
			
			// 如果今天所有场次都过期，提示卖完
			if(passTime.value.length == MovieTime.length){
				showError2()
			}
		} else {
			// 如果切换到其他日期，CurrentdatePass 设为空（都可以买）
			CurrentdatePass.value = [];
		}
		if(weekBackcolorId.value==id){
			weekBackcolorId.value=''
			allData.value.date=''
			allData.value.weekday=''
		}else{
			weekBackcolorId.value=id
			allData.value.date=id
			allData.value.weekday=weekday
		}
}

const isPass=(itemkey)=>{
	// 获取今天日期
	const today = new Date();
	const todayStr = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`;
	// 如果当前选中的是今天，用 passTime 判断
	// 如果当前选中的是其他日期，用 CurrentdatePass 判断
	if(Currentdate.value === todayStr){
		return passTime.value.some(item => item.key === itemkey)
	}else{
		return CurrentdatePass.value.some(item => item.key === itemkey)
	}
}



//日期判断
function getNextSevenDays() {
    const dates = [];
    const today = new Date(); 
    for (let i = 0; i < 7; i++) {
        const futureDate = new Date(today); // 复制今天的日期对象
        futureDate.setDate(today.getDate() + i); // 设置日期为今天加 i 天
        const year = futureDate.getFullYear();
        const month = String(futureDate.getMonth() + 1).padStart(2, '0');
        const day = String(futureDate.getDate()).padStart(2, '0');
        const dateString = `${year}-${month}-${day}`;
        const weekdays = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
        const weekday = weekdays[futureDate.getDay()];
        dates.push({
            date: dateString,
            weekday: weekday,
        });
    }
    return dates;
}
//时间判断
function getNowTime() {
  const date = new Date();
  const hour = date.getHours().toString().padStart(2, '0');
  const minute = date.getMinutes().toString().padStart(2, '0');
  return `${hour}:${minute}`;
}
onMounted(()=>{
	allData.value.date = Moviedate.value[0].date;
	allData.value.weekday = Moviedate.value[0].weekday;
	ifMovieTime()
	const today = new Date();
		const todayStr = `${today.getFullYear()}-${(today.getMonth()+1).toString().padStart(2,'0')}-${today.getDate().toString().padStart(2,'0')}`;
		
		Currentdate.value = todayStr;
		CurrentdatePass.value = [...passTime.value]; // 使用今天计算出的过期场次
})
function ifMovieTime(){
	const now = getNowTime();
	 const expiredTimes=MovieTime.filter((item=>{
		return item.Time<now
	}))
	passTime.value=expiredTimes
}

const toastRef = ref();

// 3. 使用子组件暴露的方法
const showError = () => {
  toastRef.value?.showError('该场次已经结束了喵~');
};
const showError2 = () => {
  toastRef.value?.showError('今天的票卖完了喵~');
};
const showError3 = () => {
  toastRef.value?.showError('请选择观影日期喵~');
};
const showError4 = () => {
  toastRef.value?.showError('请选择观影时间喵~');
};


let counter = 0;
function generateUniqueTimestamp() {
  const timestamp = Date.now();
  counter = (counter + 1) % 1000; // 确保不重复
  return parseInt(`${timestamp}${counter.toString().padStart(3, '0')}`);
}

const MovieTime=[
	{
		key:++counter,
		Time:'11:00'
	},
	{
		key:++counter,
		Time:'13:00'
	},
	{
		key:++counter,
		Time:'15:00'
	},
	{
		key:++counter,
		Time:'17:00'
	},
	{
		key:++counter,
		Time:'19:00'
	},
	{
		key:++counter,
		Time:'21:00'
	},
	{
		key:++counter,
		Time:'23:00'
	}
]
</script>

<style scoped lang="scss">
	.MovieTime{
		width: 691rpx;
		height: 188rpx;
		border-bottom: 3rpx solid #ccc;
		background-color: white;
		margin-bottom: 15rpx;
		padding: 0 30rpx;
		
	}
	.MovieTimeD2{
		width: 106rpx;
		height: 91rpx;
		border-radius: 15px;
		border: solid 2px #d1dfff;
		margin: 30rpx 30rpx 0 0;
		display: inline-block;
		text-align: center;
		padding-top: 30rpx;
		overflow: hidden;        /* 隐藏溢出内容 */
		 white-space: nowrap;     /* 强制不换行 */
		 text-overflow: ellipsis;
	}
	.cinema{
		width: 691rpx;
		background-color: white;
		margin-top: 30rpx;
		padding:30rpx;
	}
	
	.TimeAge{
		display: flex;
		flex-wrap: wrap;
		margin-top: 15rpx;
	}
	.Age{
		width: 120rpx;
		height: 54rpx;
		border: solid 1.5px #d1dfff;
		border-radius: 8rpx;
		font-size: 26rpx;
		font-weight: 550;
		text-align: center;
		line-height: 53rpx;
		margin: 15rpx 15rpx 0 0;
	}
	.Backcolor{
		background-color: #4073ff;
		color: white;
	}
	.Passcolor{
		background-color: #ccc;
		color: white;
	}

	.MovieName{
			max-width: 580rpx;
			font-size: 35rpx;
			font-weight: 900;
		}
	
	
	.MovieTag{
		display: inline-block;
		height: 30rpx;
		font-size: 22rpx;
		margin: 20rpx 10rpx 0 0;
		letter-spacing: 2rpx;
		padding: 0 4rpx;
		color: #ffb400;
		border: 1rpx solid #ffb400; 
		border-radius: 5rpx;
	}
	.MovieTag2{
		color: #4073ff;
		border: 1rpx solid #4073ff;
	}
	.hide{
		overflow: hidden;        
		 white-space: nowrap; 
		 text-overflow: ellipsis; 
	}
	
</style>