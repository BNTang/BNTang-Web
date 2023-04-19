Page({
  onCaptureFatherTap: function(event){
    console.log("father捕获：", event);
  },
  onFatherTap: function(event){
    console.log("father冒泡：", event);
  },
  onCaptureSonTap: function(event){
    console.log("son捕获：", event);
  },
  onSonTap: function(event){
    console.log("son冒泡：", event);
  },
})