$(document).ready(function () {
  const maxPerSlide = 2; // Количество карточек, отображаемых за раз

  // Клонирование карточек для карусели
  $(".our-services .carousel .carousel-item").each(function () {
    let $currentItem = $(this);
    let $next = $currentItem.next().length
      ? $currentItem.next()
      : $currentItem.siblings(":first");

    for (let i = 0; i < maxPerSlide; i++) {
      const $firstCard = $next.children(":first-child");
      if ($firstCard.length) {
        $firstCard.clone().appendTo($currentItem);
        $next = $next.next().length
          ? $next.next()
          : $currentItem.siblings(":first");
      }
    }
  });

  // Обновление стилей карточек
  function updateCardStyles() {
    const $activeCards = $(".carousel-item.active .card");
    $(".carousel-item .card").removeClass("active-card").addClass("card"); // Сброс стилей

    if ($activeCards.length) {
      $activeCards.first().addClass("active-card"); // Синий цвет для последней карточки
    }
  }

  // Привязка событий
  $('button[data-bs-target="#myCarousel"]').on("click", updateCardStyles);
  $("#myCarousel").on("slide.bs.carousel slid.bs.carousel", updateCardStyles); // Обновление стилей при смене слайда

  // Инициализация активных стилей
  updateCardStyles();
});
