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
    // Точки-индикаторы
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    // Стрелки навигации
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  // Получение элементов
  var next = $('.swiper-button-next');    // Стрелка вперёд
  var prev = $('.swiper-button-prev');    // Стрелка назад
  var bullets = $('.swiper-pagination');  // Блок с точками-индикаторами

  // Расчёт позиции 
  next.css('left', prev.width() + 20 + bullets.width() + 20); // Стрелка вперёд
  bullets.css('left', prev.width() + 20);                     // Блок с точками-индикаторами

  // Инициализация библиотеки WOW
  new WOW().init();

  // Валидация форм
  $('.modal__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      },
      userEmail: {
        required: true,
        email: true,
      }
    },
    errorClass: "invalid",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      userPhone:{
        required: "Телефон обязательно",
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      }
    }
  });

  $('.footer__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      },
      userQuestion: {
        required: true,
      }
    },
    errorClass: "invalid",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      userPhone:{
        required: "Телефон обязательно",
      },
      userQuestion: {
        required: "Обязательно напишите вопрос",
      }
    }
  });

  $('.control__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
      }
    },
    errorClass: "invalid",
    messages: {
      userName: {
        required: "Имя обязательно",
        minlength: "Длина имени 2-15 символов",
        maxlength: "Длина имени 2-15 символов"
      },
      userPhone:{
        required: "Телефон обязательно",
      }
    }
  });

  // Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
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

