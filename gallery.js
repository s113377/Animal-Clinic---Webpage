$(function(){
  //초기화(첫번째 이미지만 출력)
    $('.gallery img').hide().eq(0).show();
    var imgNum = 0; //이미지 번호
    var pauseTime = 4000; // 정지 시간
    changeGallery(imgNum);
   
     //추가 기능 : 자동재생 기능 
     setInterval(function(){
        imgNum = imgNum +1 ; // 다음 이미지 번호
        //마지막 이미지면 처음 이미지로
        if(imgNum > 2){imgNum = 0;}
        changeGallery(imgNum);
        },4000);
   
    //이미지 변경 함수 changeGallery(이미지 번호)
    function changeGallery(imgNum){
    $('.gallery img').stop().fadeOut().eq(imgNum).fadeIn();
    
    //인디케이터 버튼 스타일 //
    $('.indicator li').removeClass('active');
    $('indicator li').eq('imgNum').addClass('active');
    }    

    //인디케이터 버튼 -> 첫번째 배너
    
    //첫번째 이미지 
     $('.indicator li').eq(0).click(function(){ 
        changeGallery(0);
     $('.indicator li').removeClass('active');
     $(this).addClass('active');
     return false ;
    })
    
    //두번째 이미지
     $('.indicator li').eq(1).click(function(){
        changeGallery(1);
     $('.indicator li').removeClass('active');
     $(this).addClass('active');
     return false ;
    })
    
    //세번째 이미지
    $('.indicator li').eq(2).click(function(){
        changeGallery(2);
    $('.indicator li').removeClass('active');
    $(this).addClass('active');
    return false ;
    })
});