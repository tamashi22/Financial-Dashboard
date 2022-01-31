$(function(){
  $('.card__slider').slick({
    prevArrow: '<div class="prev"></div>',
    nextArrow: '<div class="next"></div>',
    infinite: false,
   slidesToShow: 1,
  slidesToScroll: 1
  
  })
  
  
})
$(function(){
  $('.goals__slider').slick({
   infinite: true,
    nextArrow: '<div class="next"></div>',
   slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
        variableWidth: false
      }
    }
    ]
  })
  
  
})

