$(function(){
	var plainCode = "pre.code";
	$(".gist").next(plainCode).hide().end().parent().parent().next(plainCode).hide();
	$("code[data-gist-id]").next(plainCode).hide().end().parent().next(plainCode).hide();
})