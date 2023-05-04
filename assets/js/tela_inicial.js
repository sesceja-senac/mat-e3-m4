$('.backdrop').fadeOut()
window.addEventListener('load', function(){ 
  $('.preloader').fadeOut();
    // animate__animated animate__backInRight animate__delay-1s
    $('.botao-fechar').click(function(){
      $('.titulo').removeClass('non-visible')
      $('.start-bt').removeClass('non-visible')
      $('.botao-video').removeClass('non-visible')
      $('.backdrop').fadeOut()
      $('.start-bt').addClass('animate__animated animate__backInRight')
      $('.botao-video').addClass('animate__animated animate__backInRight')
      $("iframe").attr("src", $("iframe").attr("src"));
    })
    $('.botao-video').click(function(){
    $('.backdrop').fadeIn()
    $('html').css('overflow', 'hidden')
    })
    if(window.innerWidth<1000){
      setTimeout(function(){
        $('.mobile_ui').addClass('zindex')
      }, 3000)
    }

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
    setTimeout(function(){$('.backdrop').fadeIn(); console.log('q')}, 3500)
});