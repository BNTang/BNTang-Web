// ==UserScript==
// @name         去除怪兽图的水印
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       BNTang
// @match        https://cloud.tencent.com/developer/column/94230
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tencent.com
// @grant        none
// @run-at       document-end
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // 从整个页面中获取 class 包含 water 的元素，并且从页面进行移除
    // 获取包含特定类名的所有元素
    const waterElements = document.querySelectorAll('.image-watermark');

    // 从页面中移除这些元素
    waterElements.forEach(element => {
        element.remove();
    });
})();
