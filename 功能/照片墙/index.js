/**
 * Created by BNTang on 2023-11-24 17:03:19
 */
const ITEM_CLASS_NAME = '.grid-item';
const DOMContentLoaded_EVENT = 'DOMContentLoaded';
const PROGRESS_EVENT = 'progress';

function createImages() {
}

document.addEventListener(DOMContentLoaded_EVENT, function () {
    // 获取布局元素
    const grid = document.querySelector('.grid');

    // 初始化布局
    const masonry = new Masonry(grid, {
        itemSelector: ITEM_CLASS_NAME,
        columnWidth: ITEM_CLASS_NAME,
        // percentPosition 设置为 true，将使用 columnWidth 作为百分比宽度：
        percentPosition: true
    });

    // 图片加载完成后，重新布局
    imagesLoaded(grid).on(PROGRESS_EVENT, function () {
        // layout Masonry after each image loads
        masonry.layout();
    });
});
