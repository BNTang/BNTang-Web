// 颜色选择器
const colorPicker = document.querySelector('input');
// canvas
const cvs = document.querySelector('canvas');
// context 绘制上下文
const ctx = cvs.getContext('2d');

function init() {
    const w = 500, h = 300;

    cvs.width = w * devicePixelRatio;
    cvs.height = h * devicePixelRatio;

    cvs.style.width = w + 'px';
    cvs.style.height = h + 'px';
}
init()

const shapes = [];
class Rectangle{
    constructor(color, startX, startY) {
        this.color = color;
        this.startX = startX;
        this.startY = startY;
        this.endX = startX;
        this.endY = startY;
    }

    get minX() {
        return Math.min(this.startX, this.endX);
    }

    get maxX() {
        return Math.max(this.startX, this.endX);
    }

    get minY() {
        return Math.min(this.startY, this.endY);
    }

    get maxY() {
        return Math.max(this.startY, this.endY);
    }

    draw() {
        ctx.beginPath()

        ctx.moveTo(this.minX, this.minY);
        ctx.lineTo(this.maxX, this.minY);
        ctx.lineTo(this.maxX, this.maxY);
        ctx.lineTo(this.minX, this.maxY);
        ctx.lineTo(this.minX, this.minY);

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.strokeStyle = '#fff'
        ctx.lineWidth = 3;
        ctx.stroke();
    }
}
