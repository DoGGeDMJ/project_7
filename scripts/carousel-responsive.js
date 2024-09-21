$(document).ready(function () {
  const maxPerSlide = 2;
  const className = ".carousel-responsive";

  document
    .querySelectorAll(`${className} .carousel-item`)
    .forEach((element) => {});

  $(`${className} .carousel-item`).each(function () {
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

  function updateCardStyles() {
    $("carousel-item .card").removeClass("active-card").addClass("card"); //
  }

  updateCardStyles();
});
