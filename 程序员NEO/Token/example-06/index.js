document.addEventListener('DOMContentLoaded', function() {
    // 获取需要操作的DOM元素
    const tokenizeBtn = document.getElementById('tokenize-btn');
    const demoInput = document.getElementById('demo-input');
    const demoResult = document.getElementById('demo-result');
    const tokensContainer = document.querySelector('.tokens-container');
    const tokenCountInfo = document.querySelector('.token-count-info');
    
    // 对话动画效果增强
    const conversationScene = document.querySelector('.conversation-scene');
    const personBubble = document.querySelector('.person .character-bubble');
    const aiBubble = document.querySelector('.ai .character-bubble');
    
    // 对话气泡文字淡入效果
    const personTexts = personBubble.querySelectorAll('p');
    const aiTexts = aiBubble.querySelectorAll('p');
    
    // 对问题文字逐段显示
    personTexts.forEach((text, index) => {
        text.style.opacity = '0';
        setTimeout(() => {
            text.style.transition = 'opacity 0.5s ease';
            text.style.opacity = '1';
        }, 300 + (index * 600));
    });
    
    // 对NEO回答文字逐段显示
    setTimeout(() => {
        aiTexts.forEach((text, index) => {
            text.style.opacity = '0';
            setTimeout(() => {
                text.style.transition = 'opacity 0.5s ease';
                text.style.opacity = '1';
            }, 300 + (index * 600));
        });
    }, 2500); // AI回复在人物说话后开始
    
    // 添加火柴人动画
    const personFigure = document.querySelector('.person-figure');
    const aiFigure = document.querySelector('.ai-figure');
    
    // 让火柴人有更多动作
    setTimeout(() => {
        personFigure.querySelector('.arm-right').style.transform = 'rotate(45deg) translateX(-50%)';
        setTimeout(() => {
            personFigure.querySelector('.arm-right').style.transition = 'transform 0.5s ease';
            personFigure.querySelector('.arm-right').style.transform = 'rotate(-30deg) translateX(-50%)';
        }, 1000);
    }, 1500);
    
    // AI火柴人动作
    setTimeout(() => {
        aiFigure.querySelector('.arm-left').style.transform = 'rotate(60deg) translateX(-50%)';
        aiFigure.style.transition = 'all 0.5s ease';
        
        setTimeout(() => {
            aiFigure.querySelector('.arm-left').style.transition = 'transform 0.5s ease';
            aiFigure.querySelector('.arm-left').style.transform = 'rotate(30deg) translateX(-50%)';
        }, 1000);
    }, 3500);
    
    // 模拟不同文本的分词
    const tokenizeText = function(text) {
        // 这是一个简化的分词逻辑，实际的分词器更复杂
        // 英文单词和常见中文词组的模拟分词规则
        const commonWords = {
            '人工智能': ['人工', '智能'],
            '北京': ['北京'],
            '上海': ['上海'],
            '机器学习': ['机器', '学习'],
            'hello': ['hello'],
            'world': ['world'],
            'artificial': ['art', 'ificial'],
            'intelligence': ['intelligence'],
            'machine': ['machine'],
            'learning': ['learning'],
            'deep': ['deep'],
            'neural': ['neural'],
            'network': ['network'],
            'transformer': ['transform', 'er'],
            'language': ['language'],
            'model': ['model'],
            'computer': ['computer'],
            'vision': ['vision'],
            'natural': ['natural'],
            'processing': ['process', 'ing'],
            '大': ['大'],
            '小': ['小'],
            '中': ['中'],
            '和': ['和'],
            'NLP': ['NLP'],
            '技术': ['技术']
        };
        
        // 分词结果
        let tokens = [];
        let remainingText = text;
        
        // 简单的贪婪匹配
        while(remainingText.length > 0) {
            let matched = false;
            
            // 检查常见词
            for(const word in commonWords) {
                if(remainingText.startsWith(word)) {
                    tokens = tokens.concat(commonWords[word]);
                    remainingText = remainingText.slice(word.length);
                    matched = true;
                    break;
                }
            }
            
            // 如果没有匹配到常见词，按字符处理
            if(!matched) {
                // 对于中文字符，每个字符作为一个token
                const firstChar = remainingText.charAt(0);
                tokens.push(firstChar);
                remainingText = remainingText.slice(1);
            }
        }
        
        return tokens;
    };
    
    // 为每个token创建可视化元素
    const createTokenElements = function(tokens) {
        tokensContainer.innerHTML = '';
        tokens.forEach((token, index) => {
            const tokenElement = document.createElement('div');
            tokenElement.className = 'token-item';
            tokenElement.textContent = `"${token}"`;
            tokenElement.style.animationDelay = `${index * 0.1}s`;
            tokensContainer.appendChild(tokenElement);
        });
        
        tokenCountInfo.textContent = `总共 ${tokens.length} 个Token`;
    };
    
    // 点击分词按钮事件
    tokenizeBtn.addEventListener('click', function() {
        const inputText = demoInput.value.trim();
        if(inputText) {
            const tokens = tokenizeText(inputText);
            createTokenElements(tokens);
            demoResult.style.display = 'block';
            
            // 添加高亮动画效果
            setTimeout(() => {
                const tokenItems = document.querySelectorAll('.token-item');
                tokenItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.classList.add('highlighted');
                        setTimeout(() => {
                            item.classList.remove('highlighted');
                        }, 1000);
                    }, index * 500);
                });
            }, 500);
        }
    });
    
    // 页面加载时添加动画效果
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.step, .summary-panel');
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            const windowHeight = window.innerHeight;
            
            if(elementTop < windowHeight && elementBottom > 0) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // 初始化页面元素的初始状态
    const initializeElements = function() {
        const elements = document.querySelectorAll('.step, .summary-panel');
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all 0.8s ease';
        });
    };
    
    // 初始化页面
    initializeElements();
    animateOnScroll();
    
    // 监听滚动事件
    window.addEventListener('scroll', animateOnScroll);
    
    // 触发一次分词演示，延迟更长时间，等对话完成
    setTimeout(() => {
        tokenizeBtn.click();
    }, 4000);
});
