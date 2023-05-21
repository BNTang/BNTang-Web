// components/c-test/c-test.js
Component({
  // 监听当前组件的生命周期
  lifetimes: {
    created() {
      console.log("created 组件被创建出来了");
    },
    ready() {
      console.log("ready 组件被附加到页面的节点树上了");
    },
    attached() {
      console.log("attached 组件被显示出来了");
    },
    detached() {
      console.log("detached 组件从页面上被移除了");
    },
  },
  // 监听挂载到的页面对应的生命周期
  pageLifetimes: {
    hide() {
      console.log("页面被隐藏了");
    },
    show() {
      console.log("页面显示出来了");
    }
  }
});