document.addEventListener('DOMContentLoaded', () => {
    // 太阳随鼠标位置移动效果
    const sun = document.querySelector('.sun');
    const scene = document.querySelector('.scene');
    
    scene.addEventListener('mousemove', (e) => {
        const rect = scene.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // 限制太阳只在天空区域移动
        if (y < rect.height * 0.4) {
            // 添加轻微延迟效果，使移动更平滑
            setTimeout(() => {
                sun.style.right = rect.width - x - 40 + 'px';
                sun.style.top = y + 'px';
            }, 100);
        }
    });
    
    // 点击椰子动画效果
    const coconut = document.querySelector('.coconut-drink');
    let isAnimating = false;
    
    coconut.addEventListener('click', () => {
        if (!isAnimating) {
            isAnimating = true;
            coconut.style.transform = 'translateY(-10px)';
            
            setTimeout(() => {
                coconut.style.transform = 'translateY(0)';
                isAnimating = false;
            }, 300);
        }
    });
    
    // 创建随机漂浮的小泡泡效果（代表椰子汁的气泡）
    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.style.cssText = `
            position: absolute;
            width: ${Math.random() * 8 + 2}px;
            height: ${Math.random() * 8 + 2}px;
            background: rgba(255, 255, 255, 0.7);
            border-radius: 50%;
            bottom: ${130 + Math.random() * 20}px;
            left: ${400 + Math.random() * 30}px;
            z-index: 7;
            opacity: 0.8;
            animation: float-bubble ${Math.random() * 2 + 2}s linear forwards;
        `;
        
        scene.appendChild(bubble);
        
        // 动画完成后移除泡泡
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }
    
    // 添加CSS动画规则
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float-bubble {
            0% {
                transform: translateY(0) translateX(0);
                opacity: 0.8;
            }
            100% {
                transform: translateY(-40px) translateX(${Math.random() * 20 - 10}px);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // 定期创建泡泡
    setInterval(createBubble, 2000);
});
