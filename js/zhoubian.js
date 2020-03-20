window.onload = function() {
    var more = document.querySelector('.more');
    var items = document.querySelector('.content').querySelectorAll('.item-hide');
    var isopen = false;


    more.addEventListener('click', function() {
        isopen = !isopen;
        for (var i = 0; i < items.length; i++) {
            if (isopen) {
                more.innerHTML = '收起';
                items[i].style.display = 'block';
            } else {
                more.innerHTML = '更多目的地';
                items[i].style.display = 'none';
            }
        }

    })


}