// pages/home/home.js

// 导入网络请求函数
import {
  getMianData,
  getGoodsData
} from '../../service/home.js'
const goodsTitle = ['pop','new','sell']

Page({
  data:{
    banner:null,
    recommend:null,
    goods:{
      pop:{page:0,list:[]},
      sell:{page:0,list:[]},
      new:{page:0,list:[]}
    },
    goodsType:'pop',
    backTopShow:false

  },
  onLoad(){
  //  console.log(this.getMainData); 
    this._getMainData()
    this._getGoodsData('pop')
    this._getGoodsData('sell')
    this._getGoodsData('new')


  },
  // 获取首页的主要数据
  _getMainData(){
    getMianData().then(res =>{
      const data = res.data.data
      // console.log(res.data.data);
      this.setData({
        banner:data.banner.list,
        recommend:data.recommend.list

      })

    })
  },
  // 获取商品数据
  _getGoodsData(type){
    const page = this.data.goods[type].page + 1
    getGoodsData(type,page).then(res=>{
      // console.log(res);
      const list = res.data.data.list
      const oldList = this.data.goods[type].list
      oldList.push(...list)
      const goodsSstr = `goods.${type}.list`
      const pageStr = `goods.${type}.page`
      this.setData({
        [goodsSstr]:oldList,
        [pageStr]:page

      })

    })


  },
  // 切换选区
  handleTabClick(e){
    const index = e.detail.index
    // console.log(index);
    this.setData({
      goodsType:goodsTitle[index]
    })
  },
  // 下拉加载更多
  onReachBottom(){
    this._getGoodsData(this.data.goodsType)

  },
  // 回到顶部
  onPageScroll(options){
    console.log(options);
    const falg = options.scrollTop > 500 ;
    if (falg!=this.data.backTopShow) {
      this.setData({
        backTopShow:falg
      })
    }


  }
 
})