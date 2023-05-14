// components/c-demo2/c-demo2.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    title: 'BNTang'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onCDemoTap(e) {
      console.log(e);
    },
    myDemoTwoFn() {
      console.log("call myDemoTwoFn");
    }
  }
})
