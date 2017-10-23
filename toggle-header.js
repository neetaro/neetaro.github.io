$(function(){
    //<h2,h3,h4... class="toggle-header" [data-display="none"][data-clink="1"]></h2,h3,h4,...>
    //セレクタ用
	var headerClass=":header.toggle-header";
    var attrDisplay="data-display";
    var attrCLink="data-clink";
    var attrType ="data-type";
    var attrTime = "data-time";
    
    //閉じるボタンのクラス CSS用に必要かも
    var closeLinkClass = "close-link";

    //閉じるリンクの説明文字

	var linkTextPre="<p class='"+closeLinkClass+"'><a>ここをクリックすると『";
    var linkTextPost = "』が閉じます</a></p>";

    $(headerClass).each(function(){

        var level = this.nodeName.toLowerCase().slice(-1);

        var nextHeader = "h1";
        for(var i=2;i<=level;i++){
            nextHeader += ",h" + i;
        }

        if($(this).nextUntil(nextHeader).length){
            var init = $(this).attr(attrDisplay);
            var divStr = "<div style='display:"+((init)?init:"block")+"'>";
            $(this).nextUntil(nextHeader).wrapAll(divStr);

            var time = $(this).attr(attrTime);
            var toggleArgument = (isNaN(time))?time:Number(time);
            switch($(this).attr(attrType)){
                case "slide":
                    $(this).click(function(){
                        $(this).next().slideToggle(toggleArgument);
                    })
                break;
                case "fade":
                    $(this).click(function(){
                        $(this).next().fadeToggle(toggleArgument);
                    })
                break;
                default:
                    $(this).click(function(){
                        $(this).next().toggle(toggleArgument);
                    })
                break;
            }

            
            
            var linkStr = linkTextPre + $(this).text() + linkTextPost;
        	
            if($(this).attr(attrCLink)){
            	$(this).nextUntil(nextHeader).last().append(linkStr);
                switch($(this).attr(attrType)){
                    case "slide":
                     $(this).next().children(":last").click(function(){
                        $(this).parent().slideUp(toggleArgument);
                    })
                    break;
                    case "fade":
                    $(this).next().children(":last").click(function(){
                        $(this).parent().fadeOut(toggleArgument);
                    })
                    break;
                    default:
                	$(this).next().children(":last").click(function(){
                		$(this).parent().hide(toggleArgument);
                	})
                    break;
                }
            }
        }
    });
})					