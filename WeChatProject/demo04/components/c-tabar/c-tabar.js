// components/c-tabar/c-tabar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: []
    }
  },
  /**
   * 组件的初始数据
   */
  data: {
    curIdx: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onItemClick(e) {
      const idx = e.mark.idx;
      this.setData({curIdx: idx});
      this.triggerEvent("tabarItemClick", idx);
    }
  }
});