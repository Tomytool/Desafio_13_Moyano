$(function () {
  console.log('menu.js');
  $('.menuOpciones').hide();
  $('.menuOpciones').eq(0).show();

  $('.opciones').on('click', function () {
    $('.menuOpciones').hide();
    $('.menuOpciones').eq($(this).index()).slideToggle(800);
  });
});
