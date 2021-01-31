var dep1 = $(".gnb .dep1");
var dep2 = $(".dep2");
var languageUl = $(".language ul");
var languageSpan = $(".language >  div span");
var languageArrow = $(".language .arrow");
var language = $(".language");

dep1.mouseenter(function(){
    $(this).addClass("active");
    dep2.css({"display":"block"});
    $(".bg").css({"height":"300px"});
    $(".bg").addClass("on");
});
dep1.mouseleave(function(){
    $(this).removeClass("active");
    dep2.css({"display":"none"});
    $(".bg").css({"height":"0px"});
    $(".bg").removeClass("on");
});

languageUl.addClass("on");

languageSpan.mouseenter(function(){
    languageUl.removeClass("on");
    languageArrow.addClass("rotate");
});

language.mouseleave(function(){
    languageUl.addClass("on");
    languageArrow.removeClass("rotate");
});


$(function(){
    $(".content .notice table tr").mouseenter(function(){
        $(this).css({'background-color':'#f5f5f5','transition':'all 0.3s ease' ,'border-bottom':'1px solid #006496'});
        $(this).find('td .date').css({'color':'#006496', 'transition':'all 0.3s ease'});
        $(this).find('td .m_y').css({'color':'#006496', 'transition':'all 0.3s ease'});
        $(this).find('img').attr("src" , "../img/clickBtn_hover.png");
        
    });
     
     $(".content .notice table tr").mouseleave(function(){
        $(this).css({'background-color':'#fff','transition':'all 0.3s ease' ,'border-bottom':'1px solid #c8c8c8'});
        $(this).find('td .date').css({'color':'#c8c8c8', 'transition':'all 0.3s ease'});
        $(this).find('td .m_y').css({'color':'#c8c8c8', 'transition':'all 0.3s ease'});
        $(this).find('img').attr("src" , "../img/clickBtn.png");
        
    });
 });


