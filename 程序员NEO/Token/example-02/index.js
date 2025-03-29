document.addEventListener('DOMContentLoaded', () => {
    // 获取DOM元素
    const friendBubble = document.querySelector('.friend-bubble');
    const neoBubble = document.querySelector('.neo-bubble');
    const friendText = document.getElementById('friend-text');
    const neoText = document.getElementById('neo-text');
    const startButton = document.getElementById('start-demo');
    const replayButton = document.getElementById('replay');
    const friend = document.querySelector('.character.friend');
    const neo = document.querySelector('.character.neo');

    // 对话内容
    const friendQuestion = "大模型的Token究竟是什么？";
    const neoAnswer = "Token是大模型处理文本的基本单位，可以是单词、字符或子词。模型的输入和输出都以Token计算，它们决定了处理速度和成本。";

    // 打字效果函数
    function typeWriter(element, text, speed, callback) {
        let i = 0;
        element.textContent = '';
        
        function typing() {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
                setTimeout(typing, speed);
            } else if (callback) {
                setTimeout(callback, 1000);
            }
        }
        
        typing();
    }

    // 角色动画
    function animateCharacter(character, isActive) {
        if (isActive) {
            character.style.transform = 'translateY(-10px)';
            setTimeout(() => {
                character.style.transform = 'translateY(0)';
            }, 300);
        }
    }

    // 播放动画
    function playAnimation() {
        // 隐藏开始按钮，显示重播按钮
        startButton.classList.add('hidden');
        replayButton.classList.remove('hidden');
        
        // 重置
        friendBubble.classList.remove('visible');
        neoBubble.classList.remove('visible');
        neoBubble.classList.add('hidden');
        friendText.textContent = '';
        neoText.textContent = '';
        
        // 朋友提问
        setTimeout(() => {
            animateCharacter(friend, true);
            friendBubble.classList.add('visible');
            typeWriter(friendText, friendQuestion, 80, () => {
                // 回答问题
                setTimeout(() => {
                    animateCharacter(neo, true);
                    neoBubble.classList.remove('hidden');
                    neoBubble.classList.add('visible');
                    typeWriter(neoText, neoAnswer, 40);
                }, 800);
            });
        }, 500);
    }

    // 不再自动播放，而是等待用户点击开始按钮
    startButton.addEventListener('click', playAnimation);

    // 重新播放按钮
    replayButton.addEventListener('click', () => {
        replayButton.classList.add('active');
        setTimeout(() => {
            replayButton.classList.remove('active');
        }, 300);
        playAnimation();
    });
    
    // 添加鼠标悬停效果
    [friend, neo].forEach(character => {
        character.addEventListener('mouseenter', () => {
            character.style.transform = 'translateY(-5px)';
        });
        
        character.addEventListener('mouseleave', () => {
            character.style.transform = 'translateY(0)';
        });
    });
});
