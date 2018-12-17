import '../scss/app.scss';

// Your JS Code goes here

$('body').on('click', '.menu-mob', function(){
    $('.menu-items-mob').toggleClass('--open');
})