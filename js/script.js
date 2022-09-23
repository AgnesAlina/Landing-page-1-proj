const accordion = () =>{
  const accordion = document.querySelectorAll('.accordion__wrap')
  const content = document.querySelectorAll('.accordion__content')

    for(let i = 0;i<accordion.length;i++){
      accordion[i].addEventListener('click',()=>{
          accordion.forEach((el,index)=>{
              if(i==index){
                  el.classList.toggle('accordion__active') 
              }else{
                  el.classList.remove('accordion__active') 
              }
          })
      })
    }

  content.forEach(el=>{
      el.addEventListener('click',(e)=>{
          e.stopPropagation() 
      })
  })
}
accordion()





$(function(){

    $('.slider__inner, .news__slider-inner').slick({
      nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
      prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
      infinite: false
    });
  
    $('select').styler();
  
    $('.header__btn-menu').on('click', function(){
      $('.menu ul').slideToggle();
    });
  
  });



 
  $('.program__acc-linc').on('click')
