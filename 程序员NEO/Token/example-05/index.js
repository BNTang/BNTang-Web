document.addEventListener('DOMContentLoaded', function() {
    const tokenizeBtn = document.getElementById('tokenize-btn');
    const originalText = document.getElementById('original-text');
    const tokensDisplay = document.getElementById('tokens-display');
    const exampleText = document.getElementById('example-text');
    const tokenResult = document.getElementById('token-result');
    
    // 示例文本和分词结果
    const inputText = "我喜欢唱、跳、Rap和篮球";
    const tokens = ["我", "喜欢", "唱", "、", "跳", "、", "Rap", "和", "篮球"];
    
    // 初始化设置
    originalText.textContent = inputText;
    let isAnimating = false;
    
    // 分词动画函数
    function animateTokenization() {
        if (isAnimating) return;
        isAnimating = true;
        
        // 激活分词器
        document.querySelector('.tokenizer').classList.add('active');
        document.querySelector('.knife').style.animation = 'cut 0.5s infinite';
        
        // 清空之前的tokens
        tokensDisplay.innerHTML = '';
        exampleText.innerHTML = '正在分词...';
        
        // 创建所有token元素但初始不可见
        tokens.forEach((token, index) => {
            const tokenBox = document.createElement('div');
            tokenBox.className = 'token-box';
            tokenBox.textContent = token;
            tokenBox.dataset.index = index;
            tokensDisplay.appendChild(tokenBox);
        });
        
        // 逐个显示token
        let currentIndex = 0;
        let tokenizedText = '';
        let remainingText = inputText;
        
        const tokenInterval = setInterval(() => {
            if (currentIndex >= tokens.length) {
                clearInterval(tokenInterval);
                
                // 显示最终结果
                exampleText.innerHTML = `"${inputText}" → [${tokens.map(t => `"${t}"`).join(', ')}]`;
                tokenResult.classList.add('show');
                
                // 恢复分词器状态
                setTimeout(() => {
                    document.querySelector('.tokenizer').classList.remove('active');
                    document.querySelector('.knife').style.animation = 'cut 2s infinite';
                    isAnimating = false;
                }, 1000);
                
                return;
            }
            
            // 获取当前token
            const token = tokens[currentIndex];
            const tokenBox = tokensDisplay.querySelector(`.token-box[data-index="${currentIndex}"]`);
            
            // 更新笔记本内的文字显示
            tokenizedText += token;
            remainingText = inputText.slice(tokenizedText.length);
            originalText.innerHTML = `
                <span style="color: #61dafb;">${tokenizedText}</span>${remainingText}
            `;
            
            // 显示当前token
            tokenBox.classList.add('show');
            tokenBox.classList.add('highlight');
            
            // 移除之前token的高亮
            if (currentIndex > 0) {
                const prevToken = tokensDisplay.querySelector(`.token-box[data-index="${currentIndex - 1}"]`);
                prevToken.classList.remove('highlight');
            }
            
            currentIndex++;
        }, 800);
    }
    
    // 眼睛跟随鼠标移动
    document.addEventListener('mousemove', function(e) {
        const eyes = document.querySelectorAll('.robot .eye');
        eyes.forEach(eye => {
            const box = eye.getBoundingClientRect();
            const eyeCenterX = box.left + box.width / 2;
            const eyeCenterY = box.top + box.height / 2;
            
            // 计算角度
            const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
            
            // 转换角度为眼睛位置
            const eyePosX = Math.cos(angle) * 3;
            const eyePosY = Math.sin(angle) * 3;
            
            // 应用变换
            eye.style.transform = `translate(${eyePosX}px, ${eyePosY}px)`;
        });
    });
    
    // 机器人思考动画
    const robot = document.querySelector('.robot');
    setInterval(() => {
        robot.classList.toggle('thinking');
    }, 3000);
    
    // 分词按钮事件
    tokenizeBtn.addEventListener('click', animateTokenization);
});