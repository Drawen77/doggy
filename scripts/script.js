const anchors = document.querySelectorAll('a[href*="#"]')

// проходим по массиву якорей
for (let anchor of anchors) {
    // добавляем событие, которое вызвано функцией
    anchor.addEventListener('click', function (e) {
        // если собитие не обрабатывается явно, то действие по-умолчанию выполняется иначе (или совсем не выполняется) 
        e.preventDefault()

        const blockID = anchor.getAttribute('href').substring(1);

        // прокручиваем элемент родителя к выделеному элементу
        document.getElementById(blockID).scrollIntoView({
            // плавная прокрутка
            behavior: 'smooth',
            // к началу выделеного блока
            block: 'start'
        })
    })
}



var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clicable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });