$(document).ready(function(){

    //메인 슬라이더

    setInterval(function(){          
        
        var $hover = $(".banner ul").hasClass("hover");
        var $stop = $(".bBtn .play").hasClass("stop");

        if($hover == true || $stop == true){

        }else{

            var $first = $(".banner > ul > li").first();
            console.log($first) //setInterval이 작동되는 시점에서 객체이동한 결과로 발생되는 첫번째 자식만을 선택하고 있기 때문에 절대 동일한 슬라이드만 지목하지 않음
            $(".banner > ul").stop().animate({"margin-left":"-100%"},1000,function(){
                $(".banner > ul").append($first).css("margin-left","0");
            });

        }
        


    },4000);
    
    //화살표 클릭시 슬라이드 작동
    $(".bBtn .prev").click(function(){
        var $last =$(".banner > ul > li").last();
        console.log($last);
        $(".banner > ul").stop().animate({"margin-left":"-100%"},1000,function(){
            $(".banner > ul").prepend($last).css("margin-left","-200%");
        });
        return false;
    });
    $(".bBtn .next").click(function(){
        var $first =$(".banner > ul > li").first();
        $(".banner > ul").stop().animate({"margin-left":"-200%"},1000,function(){
            $(".banner > ul").append($first).css("margin-left","-100%");
        });
        return false;
    });

    //멈춤버튼 클릭시 슬라이드 멈춤, 혹은 다시재생 
    
    $(".bBtn .play").click(function(){
        var $state = $(this).hasClass("stop");

        if($state == false){
            $(this).addClass("stop");
            $(this).find("img").attr({"src":"./img/btn_play.png"});
        }else{
            $(this).removeClass("stop");
            $(this).find("img").attr({"src":"./img/btn_stop.png"})
        }
        return false;
    });
    //마우스 오버시 움직일 수 없음
    $(".banner > ul, .banner .bBtn").hover(function(){
       $(".banner > ul").addClass("hover");
    },function(){
        $(".banner > ul").removeClass("hover");
    });

    //Section // ourBusiness

    var businessArr = [
        ["main_icon01_off.png",`산업발전의 근간이 되는 도로,교량,철도 및 단지 조성 공사부터 생명의 근원인 맑고 깨끗한 물을 전국에 공급하기 위한 수처리 사업에 이르기까지 오늘도 한화건설은 국토 곳곳에 생명을 불어 넣습니다.`,"main_icon01_on.png"],
        ["main_icon02_off.png",`둘러싼 한화건설의 모든 건축물들은 인간 중심의 첨단 기술을 바탕으로 예술성과 기능이 조화를 이룬 공간입니다. 최고의 효율성과 편의성이 구비된 공간 창조를 통해 행복한 생활과 쾌적한 여유까지 제공해 드립니다.`,"main_icon02_on.png"],
        ["main_icon03_off.png",`한화건설이 창조하는 주거 공간에는 친환경적인 이상과 인간 중심의 주거 과학이 고스란히 살아 있습니다. 대한민국을 대표하는 최고 수준의 랜드마크에서 누리는 삶, 이 모든 꿈과 행복을 함께 나누고 싶습니다.`,"main_icon03_on.png"],
        ["main_icon04_off.png",`발전 및 담수플랜트, 화공플랜트 등 국내 플랜트 사업의 선두 주자 한화건설은 사우디 현지법인을 설립하여 각종 플랜트 공사를 성공적으로 수행하고 있으며, 중동 및 동남아시장 등으로 사업 영역을 확장하고 있습니다.`,"main_icon04_on.png"],
    ];

    for(i in businessArr){
        $("#ourBusiness .box").append(`
            <div class="box_section">
                <div class="top"><img src="./img/${businessArr[i][0]}" onmouseover="this.src='./img/${businessArr[i][2]}'" onmouseout="this.src='./img/${businessArr[i][0]}'"  alt=""></div>
                <div class="bottom nanum_font"><p>${businessArr[i][1]}</p></div>
            </div>
        `);
    }

    //Section // moreView
     
     var moreviewArr = [
         ["business_img01.jpg"],
         ["business_img02.jpg"],
         ["business_img03.jpg"],
     ];

     for(v of moreviewArr){
         $("#moreView .box").append(`

                <div class="cont" style="background-image: url(./img/${v[0]});">
                    <div class="dark">
                        <img src="./img/business_over_btn.png" alt="">
                        <p class="nanum_font">MORE</p>
                    </div>
                </div>
         
         `);
     }

    //Section // Story
    var storyArr = [
        ["story_img01.jpg", `한화건설, 수원 컨벤션센터 복합개발사업 민관협업 위한 업무협력 약정 체결`, `한화건설(대표이사 최광호)은 11일 수원시청 상황실에서 수원 컨벤션센터 복합개발사업의 민관협업을 강화하기 위해...`],
        ["story_img02.jpg", `한화건설, 수도권 내 집 마련의 이상형 ‘김포 풍무 꿈에그린 2차’ 9월 분양`, `한화건설(대표 최광호)은 오는 9월 경기도 김포시 풍무5지구 3~5블록 일원에 총 1,070세대 신축아파트 '김포 풍무 꿈에그린...`],
        ["story_img03.jpg", `한화건설, 서울~세종고속도로 안성~구리 건설공사 제10공구 수주`, `서울~세종고속도로 건설공사는 수도권 고속도로망 계획 중 남북의 5축을 완성하는 대규모 국책사업으로 기존의 경부고속도로...`],
    ];

    storyArr.forEach(function(v,i){
        $("#hanwhaStory .box").append(`
                <div class="cont">
                    <div class="topSection">
                        <img src="./img/${v[0]}" alt="">
                    </div>
                    <div class="bottomSection">
                        <h5 class="nanum_font">
                            ${v[1]}
                        </h5>
                        <p class="nanum_font">
                            ${v[2]}
                        </p>
                    </div>
                </div>
        `);
    });


    //브라우저의 width 값이 767px 이하 일때 콘텐츠 순서 바꾸기.

    var switchCont = function(){
        var $width = window.innerWidth;
        console.log($width);
        if($width <= 767){
            $("#bottom .box .cont.people").insertAfter("#bottom .box .cont.social");
        }else{
            $("#bottom .box .cont.people").insertAfter("#bottom .box .cont.information");
        }
        
    }
    switchCont();

    $(window).resize(function(){
        switchCont();
    });

    
});