document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startAnimation');
    const outputText = document.getElementById('output-text');
    const typingIndicator = document.querySelector('.typing-indicator');
    const tokenBubbles = document.getElementById('token-bubbles');
    
    // 要生成的文本，包含了用户喜欢的内容
    const textToGenerate = "我是DeepSeek，一个大型语言模型。我喜欢唱、跳、Rap和篮球。我可以帮助你回答问题，撰写文章，分析数据，甚至写代码。每一个token都代表了我理解和生成的一小部分内容，就像现在你看到的这段文字一样，是一个token一个token生成出来的。";
    
    // 将文本分割成不同的token（简单模拟，实际LLM的token划分更复杂）
    const simulatedTokens = [];
    let currentToken = '';
    
    // 简单模拟token的分割，这里我们大致按词和标点分割
    for (let i = 0; i < textToGenerate.length; i++) {
        const char = textToGenerate[i];
        currentToken += char;
        
        // 根据标点符号或空格来分割token
        if (/[\s,.。，、；：？！""''（）]/.test(char) || currentToken.length >= 4) {
            simulatedTokens.push(currentToken);
            currentToken = '';
        }
    }
    if (currentToken) {
        simulatedTokens.push(currentToken);
    }
    
    // 机器人眼睛跟随鼠标移动
    document.addEventListener('mousemove', (e) => {
        const eyes = document.querySelectorAll('.robot-eye:after');
        eyes.forEach(eye => {
            const rect = eye.parentElement.getBoundingClientRect();
            const x = (e.clientX - rect.left) / 30;
            const y = (e.clientY - rect.top) / 30;
            eye.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
        });
    });
    
    // 开始动画
    startBtn.addEventListener('click', () => {
        startBtn.disabled = true;
        outputText.innerHTML = '';
        typingIndicator.classList.remove('hidden');
        
        // 清空之前的token气泡
        tokenBubbles.innerHTML = '';
        
        // 生成文字动画
        generateText(simulatedTokens);
    });
    
    // 模拟文字逐token生成
    function generateText(tokens) {
        let index = 0;
        const totalTokens = tokens.length;
        
        function addNextToken() {
            if (index < totalTokens) {
                const token = tokens[index];
                
                // 创建一个token气泡
                createTokenBubble(token);
                
                // 添加token到输出区
                for (const char of token) {
                    const span = document.createElement('span');
                    span.textContent = char;
                    span.className = 'character';
                    outputText.appendChild(span);
                    
                    // 使机器人"思考"
                    animateRobotThinking();
                }
                
                index++;
                
                // 随机延迟添加下一个token，模拟思考时间
                const delay = Math.random() * 400 + 100;
                setTimeout(addNextToken, delay);
            } else {
                // 全部文本生成完毕
                typingIndicator.classList.add('hidden');
                startBtn.disabled = false;
                startBtn.textContent = '重新生成';
            }
        }
        
        // 开始生成
        addNextToken();
    }
    
    // 创建一个token气泡并添加动画
    function createTokenBubble(text) {
        const bubble = document.createElement('div');
        bubble.className = 'token-bubble';
        bubble.textContent = text;
        
        // 随机水平位置
        const randomLeft = Math.random() * 80 + 10; // 10% to 90%
        bubble.style.left = `${randomLeft}%`;
        
        tokenBubbles.appendChild(bubble);
        
        // 动画结束后移除气泡
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }
    
    // 机器人思考动画
    function animateRobotThinking() {
        const robot = document.querySelector('.robot');
        robot.style.animation = 'none';
        void robot.offsetWidth; // 触发重绘
        robot.style.animation = 'thinking 0.5s';
    }
    
    // 添加机器人思考的CSS动画
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes thinking {
            0%, 100% { transform: translateY(0); }
            25% { transform: translateY(-2px) rotate(-1deg); }
            75% { transform: translateY(-2px) rotate(1deg); }
        }
    `;
    document.head.appendChild(style);
});