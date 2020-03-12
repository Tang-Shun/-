$(function(){
    var $top = $('.menu .top');
    var $bt = $top.find('.bt');
    var index = 'a';
    var $show = $(".show");
    var $menu = $(".menu");
    $bt.on('click',function(){
        $top.find('.bt.active').removeClass('active');
        $('#' + index).addClass('active');
        $(this).addClass('active');
        var hide = $(this).attr('rel');
        $('#' + hide).removeClass('active');
        index = hide;
    })
    setTimeout(function(){
        $show.addClass('active');
        $menu.removeClass('active');
        document.body.style.backgroundColor="rgb(197, 17, 17)";
    }, 2000);
});