$(document).ready(function(){

    setInterval(function(){

        var $hover = $("#pjBanner").hasClass("hover");

        if($hover == true){

        }else{

            var $first = $("#pjBanner > li").first();
            $("#pjBanner").stop().animate({"margin-left":"-100%"},1000,function(){
                $("#pjBanner").append($first).css("margin-left","0");
            });
        }

       
    },4000);

    $(".slideBtn .next").click(function(){
        var $last = $("#pjBanner > li").last();
        $("#pjBanner").stop().animate({"margin-left":"-100%"},1000,function(){
            $("#pjBanner").prepend($last).css("margin-left","0%");
        });
        return false;
    });
    $(".slideBtn .prev").click(function(){
        var $first = $("#pjBanner > li").first();
        $("#pjBanner").stop().animate({"margin-left":"0%"},1000,function(){
            $("#pjBanner").append($first).css("margin-left","-100%");
        });
        return false;
    });

    $("#pjBanner, .slideBtn").hover(function(){
        $("#pjBanner").addClass("hover");
     },function(){
         $("#pjBanner").removeClass("hover");
     });

     var facilityArr = [
         ["01","01_img.png","업무시설","예술적이고 쾌적한 사무용 빌딩을 한화건설이 만듭니다."],
         ["02","02_img.png","레저시설","아름다운 자연환경에 편리함이 조화를 이뤄 여유로운 레저생활을 창조합니다."],
         ["03","03_img.png","판매/영업시설","시선과 발길이 머무는 공간을 완성합니다."],
         ["04","04_img.png","의료/교육시설","최적의 의료환경, 최고의 교육환경을 만들어 갑니다."],
         ["05","05_img.png","특수시설","대전 엑스포 한빛탑, 종합운동자, 서울역사 등 지역의 랜드마크를 만들어 갑니다."],
         ["06","06_img.png","리모델링","시오래된 건물이 꿈에 그리던 아름다운 모습으로 재탄생합니다."],
     ];

     for(i in facilityArr){
         $("#facility .cont").append(`
            <div class="box" style="background-image: url(./img/business/${facilityArr[i][1]});">
                <h2 class="title nanum_font">${facilityArr[i][0]}<span>${facilityArr[i][2]}</span></h2>
                <p class="sub nanum_font">${facilityArr[i][3]}</p>
            </div>
         `);
     }

});