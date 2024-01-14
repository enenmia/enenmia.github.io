// JavaScript 代码
document.addEventListener('DOMContentLoaded', (event) => {


    // Shell Tag
    const shellTag = document.getElementById('shell-tag');
    const emojiShell = document.getElementById('emoji-shell');
    const sageTag = document.getElementById('sage-tag');
    const emojiSage = document.getElementById('emoji-sage');

    // 添加事件监听器
    shellTag.addEventListener('click', function() {
        toggleEmoji(emojiShell);
    });

    sageTag.addEventListener('click', function() {
        toggleEmoji(emojiSage);
    });

    // 切换 emoji 显示/隐藏
    function toggleEmoji(emoji) {
        if (emoji.style.display !== 'block') {
            emoji.style.display = 'block';
        } else {
            emoji.style.display = 'none';
        }
    }
    


    const backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});



