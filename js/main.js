//jQuery
//Всё обёрнуто в эту функцию чтобы запускалось всё после полной прогрузки страницы
$(document).ready(function () {
  //получение элементов
  var modal = $('.modal'),                    //Модальное окно
      modalBtn = $('[data-toggle=modal]');    // все элементы вызывающие модальное окно

  //Вункция вызова модального окна
  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });
      
  //Вункция закрытия модального окна нажатием на крестик или на поле вокруг модального окна
  modal.on('click', () => {
    if (event.target.className === "modal__close" || event.target.className === "modal modal--visible") {

      modal.toggleClass('modal--visible');

    };
  });
  
  //Слайдер 
  var mySwiper = new Swiper ('.swiper-container', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  var bullets = $('.swiper-pagination');

  next.css('left', prev.width() + 20 + bullets.width() + 20);
  bullets.css('left', prev.width() + 20);

});
/*

//Всё обёрнуто в addEventListener для того чтобы запускать все скрипты после подгрузки всей вёрстки
document.addEventListener("DOMContentLoaded", (event) => {
  //получение элементов
  const modal = document.querySelector('.modal'); //Модальное окно
  const modalBtn = document.querySelectorAll('[data-toggle=modal]'); // все элементы вызывающие модальное окно
  
  //Вункция вызова модального окна
  modalBtn.forEach(element => {
    element.addEventListener('click', () => {
      modal.classList.toggle('modal--visible');
    });
  });

  //Вункция закрытия модального окна нажатием на крестик или на поле вокруг модального окна
  modal.addEventListener('click', (event) => {
    if (event.target.className === "modal__close" || event.target.className === "modal modal--visible") {

      modal.classList.toggle('modal--visible');

    };
  });

  
});
*/

