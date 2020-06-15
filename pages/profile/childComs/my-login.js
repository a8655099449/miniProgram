// pages/profile/childComp/my-login.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    acc:'',
    pwd:''
  },

  /**
   * 组件的方法列表
   */
  methods: {
    changeAcc(e){

      const v = e.detail.value
      this.setData({
        acc:v
      })
    },
    changePwd(e){
      const v = e.detail.value
      this.setData({
        pwd:v
      })
    }
  }
})
