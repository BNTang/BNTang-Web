Page({
  data: {
    items: ["要闻", "推荐", "原创", "热点", "电脑"]
  },
  sectionItemClick(e) {
    const idx = e.detail;
    console.log(this.data.items[idx]);
    console.log("发送网络请求，请求对应分类数据");
  }
});