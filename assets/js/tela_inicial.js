// animate__animated animate__backInRight animate__delay-1s
$('.botao-fechar').click(function(){
    $('.titulo').removeClass('non-visible')
    $('.start-bt').removeClass('non-visible')
    $('.backdrop').fadeOut()
    $('.titulo').addClass('animate__animated animate__backInLeft animate__delay-1s')
    window.setTimeout(function() {
        $('.start-bt').addClass('animate__animated animate__backInRight animate__delay-1s')
    }, 500)
})
$('.botao-video').click(function(){
  $('.backdrop').fadeIn()
  $('html').css('overflow', 'hidden')
})
const animated = document.querySelector(".profile-card");
var count;

animated.addEventListener("animationend", () => {
  count++
  console.log("Animation ended");
  
  if(count=9) {
    setTimeout(function(){
      $(".profile-card header").addClass('on');
    }, 3200);
  }
  
});