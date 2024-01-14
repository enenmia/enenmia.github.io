document.addEventListener('DOMContentLoaded', (event) => {
    const categories = document.getElementsByClassName("gdc");

    const gdcs = document.querySelectorAll('.gdc');
    print(gdcs);
    gdcs.forEach(gdc => {
        gdc.addEventListener('click', function() {
            const menu = this.querySelector('.navMenu');
            if (menu.style.display === 'none' || menu.style.display === '') {
                menu.style.display = 'block';
            } else {
                menu.style.display = 'none';
            }
        });
    });

    // 可选：如果页面中有 id="try" 的元素，为其添加事件监听器
    const studyItem = document.getElementById('try');
    if (studyItem) {
        studyItem.addEventListener('click', function() {
            window.location.href = 'page2.html';
        });
    }
});
