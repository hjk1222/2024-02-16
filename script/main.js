$(function(){

    // 메뉴
    $(".main>li").mouseover(function(){
        $(this).children(".sub").stop().slideDown()
    })//
    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp();
    })//

    // 슬라이드이미지

    var n = 0; //0(top:0)  1(top:-600px)  2(top:-1200px)

    setInterval(function(){
        n =(n+1) % 3;
        posi= n * (-600) + "px";
        $(".top_move").animate({top:posi}, 500)

    }, 3000)//

    // 팝업

    $(".pop_click").click(function(){
        $(".popup").show()
    })//

    $(".close").click(function(){
        $(".popup").hide()
    })//


})//jquery