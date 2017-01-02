// /**
//  *主体JS
//  *Created by cuizhengliang on 2016/12/14.
//  */

//开始载入
//noinspection JSUnresolvedFunction
$(window).ready(function () {

    navLessoner();
    setLiWidth();
    slideLister();
    // bigger();
    bottomListener();
});

function navLessoner() {
    var judge = 0;
    var judge2 = 0;
    //鼠标移入导航栏动画
    $('.btn_nav').mouseenter(function (e) {
        $('#navLeft a').css('color','#ccc');
        $(this).children('a').css('color','#4a4a4a');
        if ( (judge == 1) || (judge2 == 1) ) {
            $('.dropdownA').stop(true,true);
            $('.dropdownB').stop(true,true);
            $(this).children('.dropdownA').stop().slideDown('fast').stop(true,true);
            judge = 1;
        } else {
            $(this).children('.dropdownA').stop().slideDown('fast');
            judge = 1;
        }
        e.stopPropagation();
    });
    //鼠标移出导航栏动画
    $('.btn_nav').mouseleave(function (e) {
        $('#navLeft a').css('color','');
        $(this).children('a').css('color','');
        $(this).children('.dropdownA').stop().slideUp('fast',function () {
            judge = 0;
        });
        e.stopPropagation();
    });
    //鼠标移入下滑栏选项动画
    $('.dropdownA .choose').on('mouseenter',function (e) {
        var _index = $(this).index('.dropdownA .choose');
        $(this).parent().parent().children('.divForImg').children('div').css('opacity','0');
        var _url = getPicUrl(_index);
        $(this).parent().parent().children('.divForImg').css('display','none')
               .css('background-image','url(' + _url + ')').stop().fadeIn('fast');
        e.stopPropagation();
    });
    //鼠标移出下滑栏选项动画
    $('.dropdownA  .choose').on('mouseleave',function (e) {
        $(this).parent().parent().children('.divForImg').children('div').css('opacity','1');
        e.stopPropagation();
    });
    //鼠标移入社区&服务与支持一级菜单栏,设置动画
    $('.btn_nav1').on('mouseenter',function (e) {
        $('#navLeft a').css('color','#ccc');
        $(this).children('a').css('color','#4a4a4a');
        $(this).children('.dropdownB').stop().fadeIn(300);
        judge2 = 1;
        e.stopPropagation();
    });
    //鼠标移出社区&服务与支持一级菜单栏,设置动画
    $('.btn_nav1').on('mouseleave',function (e) {
        $('#navLeft a').css('color','');
        $(this).children('a').css('color','');
        $(this).children('.dropdownB').stop().fadeOut('fast',function () {
            judge2 = 0;
        });
        // alert("leave");
        e.stopPropagation();
    });
    //鼠标移入社区&服务与支持二级菜单栏,设置动画
    $('.dropdownB li').on('mouseenter',function () {
        $(this).css({'background-color':'#9F9F9F','color':'#fff'});
        // e.stopPropagation();
    });
    //鼠标移出社区&服务与支持二级菜单栏,设置动画
    $('.dropdownB li').on('mouseleave',function () {
        $(this).css({'background-color':'','color':'#9F9F9F'});
        // e.stopPropagation();
    });

    //鼠标移入右侧一级菜单栏,设置动画
    $('.btn_nav2').on('mouseenter',function (e) {
        $(this).children('.dropdownC').stop(true,true).slideDown('fast');
        e.stopPropagation();
    });
    //鼠标移出右侧一级菜单栏,设置动画
    $('.btn_nav2').on('mouseleave',function (e) {
        $(this).children('.dropdownC').stop(true,true).fadeOut('fast');
        e.stopPropagation();
    });
    //鼠标移入右侧二级菜单栏,设置动画
    $('.dropdownC li').on('mouseenter',function () {
        $(this).css({'background-color':'#9F9F9F','color':'#fff'});
    });
    //鼠标移出右侧二级菜单栏,设置动画
    $('.dropdownC li').on('mouseleave',function () {
        $(this).css({'background-color':'','color':'#9F9F9F'});
    });
}

function getPicUrl(_index) {
    return "../pic/slidepic_" + _index + ".png";
}

function setLiWidth() {
    var $lis = $('#server li');
    var maxW = 0;
    $lis.each(function () {
        if ($(this).width() > maxW) {
           maxW = $(this).width();
       }
    });
    $lis.each(function () {
        $(this).width(110);
    });
}

function slideLister() {
    $(".fullSlide").hover(function(){
            $(this).find(".prev,.next").stop(true, true).fadeTo("show", 0.5)
        },
        function(){
            $(this).find(".prev,.next").fadeOut()
        });
    $(".fullSlide").slide({
        titCell: ".hd ul",
        mainCell: ".bd ul",
        effect: "fold",
        autoPlay: true,
        autoPage: true,
        trigger: "click",
        startFun: function(i) {
            var curLi = jQuery(".fullSlide .bd li").eq(i);
            if ( !! curLi.attr("_src")) {
                curLi.css("background-image", curLi.attr("_src")).removeAttr("_src");
            }
        }
    });
    $(".bd li").eq(1).find('span').css('color','#3c3c3c');
    $(".bd li").eq(3).find('span').css('color','#3c3c3c');
    $(".bd li").eq(7).find('span').css('color','#3c3c3c');
}

// function bigger(){
//     $('#contentbuttom li img').mouseenter(function(e){
//         var wValue=1.1 * $(this).width();
//         var hValue=1.1 * $(this).height();
//         $(this).stop().animate({width: wValue,
//             height: hValue,
//             left:("-"+(0.1 * $(this).width())/2),
//             top:("-"+(0.1 * $(this).height())/2)}, 1000);
//         e.stopPropagation();
//     }).mouseleave(function(e){
//         $(this).stop().animate({width: "100%",
//             height: "100%",
//             left:"0px",
//             top:"0px"}, 1000 );
//         e.stopPropagation();
//     });
// }

function bottomListener() {
    $('.bottomMenu > ul > li > ul > li').on('mouseover',function (e) {
        $(this).css('color','#27a5f6');
        e.stopPropagation();
    });
    $('.bottomMenu > ul > li > ul > li').on('mouseout',function (e) {
        $(this).css('color','');
        e.stopPropagation();
    });
}