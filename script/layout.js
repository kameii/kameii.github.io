define(function (require, exports, module) {
  var $ = require("jquery");
  require('cookie');

  $("footer .link-exchange h5+span").on("click", function () {
    var insert = $(this).hasClass("active");
    if (insert) {
      $(this).removeClass("active");
      $(this).next().hide();
    } else {
      $(this).addClass("active");
      $(this).next().show();
    }
  })
  
  $("body").on("focus",".vip-nav>li:target",function(){
    console.log("focus");
    $(this).click();
  })
require.async("script/home", function (module) {
    module.init();
  });
 // var gg=require("script/home");
//gg.init();
});