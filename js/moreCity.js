window.onload = function() {
    var searchInput = document.querySelector('.city-input');
    var cityCancel = document.querySelector('.city-input-cancel');
    var cityContent = document.querySelector('.city-content');
    var sildeNav = document.querySelector('.silde-nav');

    searchInput.addEventListener('click', function() {
        cityCancel.style.display = 'block';
        cityContent.style.display = 'none';
        sildeNav.style.display = 'none';
        this.placeholder = '';
    })

    cityCancel.addEventListener('click', function() {
        this.style.display = 'none';
        cityContent.style.display = 'block';
        sildeNav.style.display = 'block';
        searchInput.value = '';
        searchInput.placeholder = '出发地/关键字';
    })
}