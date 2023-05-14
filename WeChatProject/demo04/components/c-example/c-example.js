// c-example.js
Component({
  data: {
    title: 'BNTang',
    msg: 'hello world'
  },
    /**
   * 组件的属性列表
   */
  properties: {
    headTitle: {
      type: String,
      value: 'default headTitle value',
    },
    context: {
      type: String,
      value: 'default context value',
    },
  }
})
