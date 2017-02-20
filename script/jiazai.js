 var $header = $('header');

  var s_banner = $('section.banner').offset().top;
  var s_video = $('section.video').offset().top;

  var s_banner_end = s_banner + $('section.banner').height();
  var s_video_end = s_video + $('section.video').height();

  var height = document.documentElement.clientHeight;
  var TOP = 330;
  var svg_interval,case_interval;
  var bgvideo;
  $(window).on('scroll', scroll);

//设置导航栏颜色
  function scroll(){
    var st = $(document).scrollTop();
    if(st<5){
      $header.removeClass();
    }else if(st<s_banner_end&&st>5){
      $header.hasClass("light")&&$header.removeClass('light');
      (!$header.hasClass("dark"))&&$header.addClass("dark");
    }else{
      $header.hasClass("dark")&&$header.removeClass("dark");
      (!$header.hasClass("light"))&&$header.addClass('light');
    }

    if(s_video_end>st&&s_video+TOP-st<height){
      if(!bgvideo){        
        bgvideo = document.getElementById("bgvideo");

        animate_video();
        $('section.video').addClass("active");
      }      
    }else if(bgvideo){
      $('section.video').removeClass("active");
      bgvideo.pause();
      bgvideo=undefined;
    }
  }

    function animate_video(){
    bgvideo.play();
  }
  

  var myvideo;
  $("#playVideo").on("click",function(event){
      event.preventDefault();
      if(bgvideo){
        bgvideo.pause();
      }
      if(!myvideo) {
          var wRadio = 1092 / 1366;
          var wvideo = $("body").width() * wRadio;
          var hvideo = wvideo * 768 / 1366;
          var $videoContent = '<video id="k-video" class="video-js vjs-default-skin" controls  preload="none" poster="/img/appvideo.jpg" width="' + wvideo + '" height="' + hvideo + '">' +
              '<source src="" type="video/mp4">' +
              '</video>';
          $(".modalx .content").html($videoContent);
          videojs("k-video", { }, function () {
              myvideo = this;
              setTimeout(function () {
                  myvideo && myvideo.play();
              }, 300);
          });
      }else{
          myvideo && myvideo.play();
          $(".modalx .vjs-control-bar").css("visibility","visible");
      }
      
      $(".modalx").css("visibility","visible");

  });
  $(".modalx .close").on("click",function(){
      if(bgvideo){
        bgvideo.play();
      }
      if(myvideo) {
          myvideo.pause();
      }
      $(".modalx .vjs-control-bar").css("visibility","hidden");
      $(".modalx").css("visibility","hidden");

  });