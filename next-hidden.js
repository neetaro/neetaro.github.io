$(function(){
	var classSelector = ".next-hidden";
	var attrForNext = "data-display";
	var attrNextClass = "data-next-class";
	var display ="display";
	var none="none";

	$(classSelector).each(function(){
		if($(this).next().length){
			var init = $(this).attr(attrForNext);
			$(this).next().css(display,(init)?init:none);
			$(this).click(function(){
				if($(this).next().css(display) == none){
					$(this).next().show();
				}else{
					$(this).next().hide();
				}
			});
			var nextClass = $(this).attr(attrNextClass);
			if(nextClass){
				$(this).next().addClass(nextClass);
			}			
		}
	})
})