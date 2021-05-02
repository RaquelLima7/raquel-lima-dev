// Isotope
$(".project").isotope({
  itemSelector: '.element-item',
  layoutMode: 'fitRow',
});

$(".project .button-group button").click(function(){
  $(".project .button-group button").removeClass("active");
  $(this).addClass("active");

  var selector = $(this).attr("data-filter");
  $(".project grid").isotope({
    filter: selector
  });
  return false
});

