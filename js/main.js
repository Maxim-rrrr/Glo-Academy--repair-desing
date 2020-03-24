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
  
//Слайдер в секции "Завершённые проекты"
  var mySwiper = new Swiper ('.projects__swiper-container', {
    loop: true,
    // Точки-индикаторы
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
    },
    // Стрелки навигации
    navigation: {
      nextEl: '.projects__swiper-button-next',
      prevEl: '.projects__swiper-button-prev',
    },
  });
  // Получение элементов
  var projectsNext = $('.projects__swiper-button-next');    // Стрелка вперёд
  var projectsPrev = $('.projects__swiper-button-prev');    // Стрелка назад
  var projectsBullets = $('.projects__swiper-pagination');  // Блок с точками-индикаторами

  // Расчёт позиции 
  projectsNext.css('left', projectsPrev.width() + 20 + projectsBullets.width() + 20); // Стрелка вперёд
  projectsBullets.css('left', projectsPrev.width() + 20);                             // Блок с точками-индикаторами


//Слайдер в секции "6 шагов до цели"
  var mySwiper = new Swiper ('.steps__swiper-container', {
    loop: true,
    // Точки-индикаторы
    pagination: {
      el: '.steps__swiper-pagination,.plan__swiper-pagination',
      type: 'bullets',
    },
    // Стрелки навигации
    navigation: {
      nextEl: '.steps__swiper-button-next',
      prevEl: '.steps__swiper-button-prev',
    },
  });
  // Получение элементов
  var stepsNext = $('.steps__swiper-button-next');    // Стрелка вперёд
  var stepsPrev = $('.steps__swiper-button-prev');    // Стрелка назад
  var stepsBullets = $('.steps__swiper-pagination');  // Блок с точками-индикаторами

  // Расчёт позиции 
  stepsNext.css('left', stepsPrev.width() + 20 + stepsBullets.width() + 20); // Стрелка вперёд
  stepsBullets.css('left', stepsPrev.width() + 20);


// Инициализация библиотеки WOW
  new WOW().init();

// Валидация форм
  // Модальное окно
  $('.modal__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      userEmail: {
        required: true,
        email: true,
      },
      policyCheckbox: {
        required: true
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
        minlength: "Введите телефон полностью",
      },
      userEmail: {
        required: "Обязательно укажите Email",
        email: "Введите в формате: name@domain.com"
      },
      policyCheckbox:{
        required: "Нужно поставить галочку",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал, ответ с сервера', response);
          $(form)[0].reset();
          modal.removeClass('modal--visible');
          document.location.href = "thanks.html";
        }
      });
    }
  });
  // Форма в подвале
  $('.footer__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      userQuestion: {
        required: true,
      },
      policyCheckbox: {
        required: true
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
        minlength: "Введите телефон полностью",
      },
      userQuestion: {
        required: "Обязательно напишите вопрос",
      },
      policyCheckbox:{
        required: "Нужно поставить галочку",
      },
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          console.log('Ajax сработал, ответ с сервера', response);
          $(form)[0].reset();
          document.location.href = "thanks.html";
        }
      });
    }
  });

  // Форма после секции "Контроль"
  $('.control__form').validate({
    rules: {
      userName: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhone: {
        required: true,
        minlength: 18,
      },
      policyCheckbox: {
        required: true
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
        minlength: "Введите телефон полностью",
      },
      policyCheckbox: {
        required: "Нужно поставить галочку"
      }
    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $(form).serialize(),
        success: function (response) {
          document.location.href = "thanks.html";
          console.log('Ajax сработал, ответ с сервера', response);
          $(form)[0].reset();
        }
      });
    }
  });

// Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});

// Видео в секции "Контроль"
  var player;

  $('.video__play').on('click', function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      height: '465',
      width: '100%',
      videoId: '8awdQRP816c',
      events: {
        'onReady': videoPlay,
      }
    });
  })

  function videoPlay(event) {
    event.target.playVideo();
  }

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

