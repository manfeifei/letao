/**
 * Created by F on 2017/10/29.
 */
//希望在ajax调用之前start
//在ajax调用结束后执行done
$(function () {
  
  
  
  //让进度条显示
  $(document).ajaxStart(function () {
    //让进度条显示出来
    NProgress.start();
  })
  
  
  $(document).ajaxStop(function () {
    setTimeout(function () {
      //让进度条结束
      NProgress.done();
    }, 500);
  });
});