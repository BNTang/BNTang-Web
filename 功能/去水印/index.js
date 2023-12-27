// ==UserScript==
// @name         去除怪兽图的水印
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  去除指定网页中的图片水印
// @author       BNTang
// @match        https://cloud.tencent.com/developer/column/94230
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tencent.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // 从页面中移除包含特定类名的元素
    const removeWatermark = () => {
        const waterElements = document.querySelectorAll('.image-watermark');
        waterElements.forEach(element => {
            element.remove();
        });
    };

    // 由于部分内容可能是动态加载的，使用 MutationObserver 来观察 DOM 变化
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes.length) {
                removeWatermark();
            }
        });
    });

    // 开始观察整个文档的变化
    observer.observe(document.body, { childList: true, subtree: true });

    // 首次运行以处理当前页面
    removeWatermark();
})();
