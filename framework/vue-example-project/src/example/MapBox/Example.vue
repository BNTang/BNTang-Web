<template>
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
      <image xlink:href="@/assets/01.svg" width="100%" height="100%"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ExampleMapBox",
  mounted() {
    // 打开控制台，然后执行如下指令，用来获取 svg 的边界信息（如果获取不到，或不正确，可能是图的问题，要想别的办法）
    var box = document.getElementsByTagName('svg')[0].getBBox();
    console.log(box.x, box.y, box.x + box.width, box.y + box.height);
  }
}
</script>

<style scoped>

</style>
