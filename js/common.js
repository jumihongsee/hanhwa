$(document).ready(function(){
    $.ajax({
        url : "./main.html",
        success : function(result){
            $("main").html(result);
        }
    });

    $("header .logoSection a").click(function(){
        $.ajax({
            url : "./main.html",
            success : function(result){
                console.log(result);
                $("main").html(result);
            }
        });
        return false;
    });

    $(".regularMenu .company , .WideNav .company").click(function(){
        $.ajax({
            url : "./company.html",
            success : function(result){
                console.log(result);
                $("main").html(result);
                $(".WideNav").hide();
            }
        });
        return false;
    });

    $(".regularMenu .business , .WideNav .business").click(function(){
        $.ajax({
            url : "./business.html",
            success : function(result){
                console.log(result);
                $("main").html(result);
                $(".WideNav").hide();
            }
        });
        return false;
    });

    $(".regularMenu .pr_center , .WideNav .pr_center").click(function(){
        $.ajax({
            url : "./pr_center.html",
            success : function(result){
                console.log(result);
                $("main").html(result);
                $(".WideNav").hide();
            }
        });
        return false;
    });

    $(".regularMenu .careers , .WideNav .careers").click(function(){
        $.ajax({
            url : "./careers.html",
            success : function(result){
                console.log(result);
                $("main").html(result);
                $(".WideNav").hide();
            }
        });
        return false;
    });

    $(".regularMenu .customer , .WideNav .customer").click(function(){
        $.ajax({
            url : "./customer.html",
            success : function(result){
                console.log(result);
                $("main").html(result);
                $(".WideNav").hide();
            }
        });
        return false;
    });

    /* HEADER NAV*/
    $(".WideNav").hide();
    $(".regularNav .transLenguage ul .ham").click(function(){
        $(".regularNav").addClass("hide");
        $(".WideNav").stop().slideDown(300);
    });

    $(".WideNav .closeBtn > ul > li").click(function(){
        $(".regularNav").removeClass("hide");
        $(".WideNav").stop().slideUp(300);
    });

    $(".Fsite").click(function(){

        $active =  $(".Fsite .pop").hasClass("active");

        if($active == false){
            $(".Fsite .pop").addClass("active");
            $("footer .topBtnFixed").css("z-index","-1");
        }else{
            $(".Fsite .pop").removeClass("active");
            $("footer .topBtnFixed").css("z-index","1");
        }
    });  

    //모바일 wideMenu +버튼 누르면 하위 메뉴 도출시키기
    $(".WideMenu ul li > span").click(function(){
        // $(".WideMenu ul li").removeClass("active");
        // $(this).closest("li").nextAll().addClass("active");
        // $(this).addClass("active");
        $PlusActive = $(this).hasClass("active");
        if($PlusActive == false){
            $(this).addClass("active");
            $(this).closest("li").nextAll().addClass("active");
            $(this).text("−");
        }else{
            $(this).removeClass("active");
            $(this).closest("li").nextAll().removeClass("active");
            $(this).text("+");
        }
      
    });
        
    //스크롤 탑버튼 
    $(".topBtnFixed").click(function(){
        $('html, body').animate({
            scrollTop : 0
        }, 500);
    });

});