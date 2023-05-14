// components/c-demo/c-demo.js
Component({
  /**
   * 组件的初始数据
   */
  data: {
    title: 'BNTang',
    content: 'BNTang content'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTitleTap(e) {
      console.log("触发了 c-demo 的 onTitleTap", e);
      const curTitle = e.mark.abc;
      console.log("拿到了当前点击的标题内容：", curTitle);
      this.triggerEvent("demoTitleClick", curTitle);
    }
  }
})
