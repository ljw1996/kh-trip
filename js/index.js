window.onload = function() {
    var recommendItem = document.querySelectorAll('.recommend-tab-item');
    var recommendList = document.querySelectorAll('.recommend-list');

    for (var i = 0; i < recommendItem.length; i++) {
        // 为列表设置自定义属性index
        recommendItem[i].setAttribute('index', i)

        // 为列表tab添加点击事件
        recommendItem[i].addEventListener('click', function() {
            for (var i = 0; i < recommendItem.length; i++) {
                recommendItem[i].classList.remove('on');
            }
            this.classList.add('on');

            const index = this.getAttribute('index')
            console.log(index);
            // 让其余的列表隐藏
            for (var i = 0; i < recommendList.length; i++) {
                recommendList[i].style.display = 'none';
            }
            // 让选中的列表显示
            recommendList[index].style.display = 'block';

        })
    }

}