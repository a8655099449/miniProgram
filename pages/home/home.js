// pages/home/home.js

// 导入网络请求函数
import {getMianData} from '../../service/home.js'


Page({
  data:{
    banner:null,
    recommend:null
  },
  onLoad(){
  //  console.log(this.getMainData); 
    this.getMainData()
   

  },
  // 获取首页的主要数据
  getMainData(){
    getMianData().then(res =>{
      const data = res.data.data
      console.log(res.data.data);
      this.setData({
        banner:data.banner.list,
        recommend:data.recommend.list

      })

    })


  }

 
})