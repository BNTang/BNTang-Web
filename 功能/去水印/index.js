// 编写一个立即执行的函数
(function () {
    // 从整个页面中获取 class 包含 water 的元素，并且从页面进行移除
    // 获取包含特定类名的所有元素
    const waterElements = document.querySelectorAll('.image-watermark');

    // 从页面中移除这些元素
    waterElements.forEach(element => {
        element.remove();
    });
}());
