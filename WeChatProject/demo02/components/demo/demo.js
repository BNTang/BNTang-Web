// components/demo/demo.js
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
    "name": '999'
  },

  /**
   * 组件的方法列表
   */
  methods: {

  },
  created(){
    console.log('组件生命周期函数-在组件实例刚刚被创建时执行，注意此时不能调用 setData!')
  }
})