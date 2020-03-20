window.onload = function() {
    var logintabItem = document.querySelector('.login-tab').querySelectorAll('li');
    var loginBox = document.querySelectorAll('.login-box');
    var oprBtn = document.querySelector('.opr').querySelectorAll('a');


    for (var i = 0; i < logintabItem.length; i++) {
        // 为列表设置自定义属性index
        logintabItem[i].setAttribute('index', i)

        // 为列表tab添加点击事件
        logintabItem[i].addEventListener('click', function() {
            for (var i = 0; i < logintabItem.length; i++) {
                logintabItem[i].classList.remove('on');
            }
            this.classList.add('on');

            const index = this.getAttribute('index');

            for (var i = 0; i < loginBox.length; i++) {
                loginBox[i].style.display = 'none';
            }
            loginBox[index].style.display = 'block';
        })
    }


    for (var i = 0; i < oprBtn.length; i++) {
        oprBtn[i].setAttribute('index', i)

        oprBtn[i].addEventListener('click', function() {
            for (var i = 0; i < oprBtn.length; i++) {
                oprBtn[i].classList.remove('change');
            }
            this.classList.add('change');
        })
    }


}