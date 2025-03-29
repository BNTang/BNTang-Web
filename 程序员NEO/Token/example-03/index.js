document.addEventListener('DOMContentLoaded', function() {
    const tokenizeBtn = document.getElementById('tokenize-btn');
    const exampleText = document.getElementById('example-text');
    
    // Original text and tokens for the example
    const originalText = "超大语言模型与分词器协同工作";
    const tokens = ["超大", "语言", "模型", "与", "分词器", "协同", "工作"];
    
    // Animation state
    let isAnimating = false;
    
    // Function to animate tokenization process
    function animateTokenization() {
        if (isAnimating) return;
        
        isAnimating = true;
        
        // Reset to original text first
        exampleText.textContent = `"${originalText}" → ["${tokens.join('", "')}"]`;
        
        // Create a highlight sequence for each token
        let currentText = originalText;
        let highlightIndex = 0;
        let tokenizedParts = [];
        
        // Add animation class to tokenizers
        document.querySelectorAll('.tokenizer').forEach(tokenizer => {
            tokenizer.classList.add('active');
        });
        
        // Tokenization animation interval
        const tokenizeInterval = setInterval(() => {
            if (highlightIndex >= tokens.length) {
                // Animation complete
                clearInterval(tokenizeInterval);
                isAnimating = false;
                
                // Remove animation class from tokenizers
                document.querySelectorAll('.tokenizer').forEach(tokenizer => {
                    tokenizer.classList.remove('active');
                });
                
                return;
            }
            
            const token = tokens[highlightIndex];
            tokenizedParts.push(token);
            
            // Update the example text with highlighted current token
            const remainingText = originalText.slice(tokenizedParts.join('').length);
            const processedText = tokenizedParts.join('');
            
            // Highlight the current token
            exampleText.innerHTML = 
                `"<span style="color: #61dafb;">${processedText}</span>${remainingText}" → ` +
                `[${tokenizedParts.map((t, i) => 
                    i === highlightIndex ? 
                    `"<span style="color: #61dafb;">${t}</span>"` : 
                    `"${t}"`
                ).join(', ')}${
                    highlightIndex < tokens.length - 1 ? ', "..."' : ''
                }]`;
            
            highlightIndex++;
        }, 800); // Interval between token animations
    }
    
    // Make robot eyes follow cursor
    document.addEventListener('mousemove', function(e) {
        const eyes = document.querySelectorAll('.robot .eye');
        eyes.forEach(eye => {
            const box = eye.getBoundingClientRect();
            const eyeCenterX = box.left + box.width / 2;
            const eyeCenterY = box.top + box.height / 2;
            
            // Calculate angle based on mouse position
            const angle = Math.atan2(e.clientY - eyeCenterY, e.clientX - eyeCenterX);
            
            // Convert angle to percentage for eye position
            const eyePosX = Math.cos(angle) * 3;
            const eyePosY = Math.sin(angle) * 3;
            
            // Apply transform to eye "pupil"
            eye.style.transform = `translate(${eyePosX}px, ${eyePosY}px)`;
        });
    });
    
    // Robot animation
    const robots = document.querySelectorAll('.robot');
    robots.forEach(robot => {
        setInterval(() => {
            robot.classList.toggle('thinking');
        }, 3000);
    });
    
    // Tokenizer animation
    document.querySelectorAll('.knife').forEach(knife => {
        knife.style.animation = 'cut 1.5s infinite';
    });
    
    // Bind button click event
    tokenizeBtn.addEventListener('click', animateTokenization);
    
    // 移除对话气泡相关的点击事件代码
});