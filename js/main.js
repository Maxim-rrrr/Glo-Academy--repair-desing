// jQuery
// Всё обёрнуто в эту функцию чтобы запускалось всё после полной прогрузки страницы
$(document).ready(function () {
  // Получение элементов
  var modal = $('.modal'),                    //Модальное окно
      modalBtn = $('[data-toggle=modal]');    // все элементы вызывающие модальное окно

  // Вункция вызова модального окна
  modalBtn.on('click', () => {
    modal.toggleClass('modal--visible');
  });
      
  // Вункция закрытия модального окна нажатием на крестик или на поле вокруг модального окна
  modal.on('click', () => {
    if (event.target.className === "modal__close" || event.target.className === "modal modal--visible") {

      modal.removeClass('modal--visible');

    };
  });

  window.addEventListener("keydown", function(event){
    if (event.keyCode == 27) {
      modal.removeClass('modal--visible');
      modalThanks.removeClass('modal--visible');
    }
  }, true);
  
  // 
  var modalThanks = $('.modal-thanks');                    // Модальное окно
        
  // Вункция закрытия модального окна нажатием на крестик или на поле вокруг модального окна
  modalThanks.on('click', () => {
    if (event.target.className === "modal__close-thanks" || event.target.className === "modal-thanks modal--visible") {

      modalThanks.removeClass('modal--visible');

    };
  });

//Слайдер в секции "Завершённые проекты"
  var mySwiper = new Swiper ('.projects__swiper-container', {
    loop: true,
    // Точки-индикаторы
    pagination: {
      el: '.projects__swiper-pagination',
      type: 'bullets',
      clickable: true
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
      clickable: true
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
  stepsNext.css('left', stepsPrev.width() + 19 + stepsBullets.width() + 19); // Стрелка вперёд
  stepsBullets.css('left', stepsPrev.width() + 19);


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
          modalThanks.toggleClass('modal--visible');
          ym(61250854,'reachGoal','form');
        }
      });
    }
  });

  $('#modal-policy-checkbox').on('click', () => {
    
    $('#modalCheckLabel').toggleClass('check');
        
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
          modalThanks.toggleClass('modal--visible');
          ym(61250854,'reachGoal','form');                         // цель яндекс.метрика
        }
      });
    }
  });

  $('#footer-policy-checkbox').on('click', () => {
    
    $('#footerCheckLabel').toggleClass('check');
        
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
          modalThanks.toggleClass('modal--visible');
          console.log('Ajax сработал, ответ с сервера', response);
          $(form)[0].reset();
          ym(61250854,'reachGoal','form');
        }
      });
    }
  });

  $('#control-policy-checkbox').on('click', () => {
    
    $('#controlCheckLabel').toggleClass('check');
        
  });

// Маска для номера телефона
  $('[type=tel]').mask('+7 (000) 000-00-00');

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

  
// Вставка яндекс карты и реализация её подгрузки только после наведения на неё
  var spinner = $('.ymap-container').children('.loader');
  var check_if_load = 0;
  var myMapTemp, myPlacemarkTemp;
  
  function init () {
    var myMapTemp = new ymaps.Map("map-yandex", {
      center: [47.244729, 39.723187],
      zoom: 18,
      controls: ['zoomControl', 'fullscreenControl']
    });
    
    myMapTemp.behaviors.disable('scrollZoom');

    var myPlacemarkTemp = new ymaps.Placemark([47.244729, 39.723187], {
        balloonContent: "Офис Repair Design Project",
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#imageWithContent',
        // Своё изображение иконки метки.
        iconImageHref: 'img/map-marker.png',
        // Размеры метки.
        iconImageSize: [32, 32],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-25, -50],
    });
    
    myMapTemp.geoObjects.add(myPlacemarkTemp);
  
    //Получаем первый экземпляр коллекции слоев, потом первый слой коллекции
    var layer = myMapTemp.layers.get(0).get(0);
  
    //Решение по callback-у для определния полной загрузки карты: http://ru.stackoverflow.com/questions/463638/callback-загрузки-карты-yandex-map
    waitForTilesLoad(layer).then(function() {
      //Скрываем
      spinner.removeClass('is-active');
    });
  }
  
  function waitForTilesLoad(layer) {
    return new ymaps.vow.Promise(function (resolve, reject) {
      var tc = getTileContainer(layer), readyAll = true;
      tc.tiles.each(function (tile, number) {
        if (!tile.isReady()) {
          readyAll = false;
        }
      });
      if (readyAll) {
        resolve();
      } else {
        tc.events.once("ready", function() {
          resolve();
        });
      }
    });
  }
  
  function getTileContainer(layer) {
    for (var k in layer) {
      if (layer.hasOwnProperty(k)) {
        if (
          layer[k] instanceof ymaps.layer.tileContainer.CanvasContainer
          || layer[k] instanceof ymaps.layer.tileContainer.DomContainer
        ) {
          return layer[k];
        }
      }
    }
    return null;
  }
  
  function loadScript(url, callback){
  
    var script = document.createElement("script");
  
    if (script.readyState){  //IE
      script.onreadystatechange = function(){
        if (script.readyState == "loaded" ||
                script.readyState == "complete"){
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {  //Другие браузеры
      script.onload = function(){
        callback();
      };
    }
  
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  }
  
  var ymap = function() {
    $('.ymap-container').mouseenter(function(){
        if (check_if_load == 0) {
          check_if_load = 1;
  
          spinner.addClass('is-active');
  
          loadScript("https://api-maps.yandex.ru/2.1/?lang=ru_RU&amp;loadByRequire=1", function(){
             ymaps.load(init);
          });         
         
        }
      }
    );  
  }
  
  $(function() {
  
    //Map Yandex
    ymap();
  
  });

  // Плавная прокрутка при нажатие на якорную ссылку
  jQuery(function($){
    $('a[href*="#"]').on('click.smoothscroll', function (e) {
    var hash = this.hash,
        _hash = hash.replace(/#/, ''),
        theHref = $(this).attr('href').replace(/#.*/, '');

    if (theHref && location.href.replace(/#.*/, '') != theHref) return;

      var $target = _hash === '' ? $('body') : $(hash + ', a[id="' + _hash + '"]').first();

      if (!$target.length) return;

      e.preventDefault();
      
      $('html, body').stop().animate({
        scrollTop: $target.offset().top - 0
      }, 400, 'swing', function () {  // 400 это время прокрутки в миллисекундах
        window.location.hash = hash;
      });

    });

  });

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

