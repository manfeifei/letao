/**
 * Created by F on 2017/10/30.
 */
$(function () {
  //发送ajax请求，获取后台数据
  var currentPage=1;
  var pageSize=8;
  render();
  function render() {
    $.ajax({
      type:"get",
      url:"/user/queryUser",
      data:{
        page:currentPage,
        pageSize:pageSize
      },
      success:function (data) {
        console.log(data);
        var html=template("tpl",data);
        $("tbody").html(html);
        //分页功能
        $("#pagintor").bootstrapPaginator({
          bootstrapMajorVersion:3,//默认是2，如果是bootstrap3版本，这个参数必填
          currentPage:currentPage,//当前页
          totalPages:Math.ceil(data.total/data.size),//总页数
          size:"small",//设置控件的大小，mini, small, normal,large
          onPageClicked:function(event, originalEvent, type,page){
            //为按钮绑定点击事件 page:当前点击的按钮值
            currentPage=page;
            render();
          }
        });
      }
    })
  }
 
});