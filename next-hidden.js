$(function(){
	var classSelector = ".next-hidden";
	var attrForNext = "data-display";
	var attrNextClass = "data-next-class";
	var attrType = "data-type";
	var attrTime = "data-time";
	
	$(classSelector).next().hide().end().each(function(){
		if($(this).next().length){
			var time = $(this).attr(attrTime);
			var toggleArgument = (isNaN(time))?time:Number(time);
			switch($(this).attr(attrType)){
				case "slide":
				$(this).click(function(){
					$(this).next().slideToggle(toggleArgument);
				});
				break;
				case "fade":
				$(this).click(function(){
					$(this).next().fadeToggle(toggleArgument);
				});
				break;
				default:
				$(this).click(function(){
					$(this).next().toggle(toggleArgument);
				});
				break;
			}
			$(this).next().css("display",$(this).attr(attrForNext)).addClass($(this).attr(attrNextClass));			
		}
	});
})