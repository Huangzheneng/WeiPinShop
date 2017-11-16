$(function () {
    slideshow();

    function slideshow() {
        let index=0;
       $('.bp li').each(function(index , obj){
           obj.style.backgroundImage = "url(image/rp"+index+".jpg)";
       });
        $('.banner').hover(function () {
            $('.banner > span').stop().fadeIn();
        },function () {
            $('.banner > span').stop().fadeOut();
        });
        $('.banner span').click(function () {
            $('.bp li').eq(index).fadeOut();
            index+=(this.dataset.dir)*1;
            index = index<0?3:index;
            index = index>3?0:index;
            $('.bp li').eq(index).fadeIn();
            $(".bp-selector + span").stop().animate({
                "left":index*$('.bp-selector li').outerWidth()+index*4
            });

        })
        // $(".banner span").eq(0).click(function(){
        //     $(".bp li").eq(index).fadeOut();
        //     index++;
        //     if(index>3){
        //         index = 0;
        //     }
        //     $(".bp li").eq(index).fadeIn();
        // });
        // $(".banner span").eq(1).click(function(){
        //     $(".bp li").eq(index).fadeOut();
        //     index--;
        //     if(index<0){
        //         index = 3;
        //     }
        //     $(".bp li").eq(index).fadeIn();
        // });

   }

});
