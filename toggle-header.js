$(function(){
    //<h2,h3,h4... class="toggle-header" [init="block"]></h2,h3,h4,...>
    //セレクタ用
	var headerClass=":header.toggle-header";
    var headerAttr="init";
    
    //閉じるボタンのクラス CSS用に必要かも
    var closeLinkClass = "close-link";

    //閉じるリンクの説明文字

	var linkTextPre="<p class='"+closeLinkClass+"'><a>ここをクリックすると";
    var linkTextPost = "が閉じます</a></p>";

    var divStr = "<div style='display:none'>";
    $(headerClass).each(function(){

        var level = this.nodeName.toLowerCase().slice(-1);

        var nextHeader = "h1";
        for(var i=2;i<=level;i++){
            nextHeader += ",h" + i;
        }

        if($(this).nextUntil(nextHeader).length){
            $(this).click(function(){
                if($(this).next().css("display")=="none"){
                    $(this).next().show();
                }else{
                    $(this).next().hide();
                }
            });

            var init = $(this).attr(headerAttr);
            var divStr = "<div style='display:"+((init)?init:"none")+"'>";
            var linkStr = linkTextPre + $(this).text() + linkTextPost;
        	$(this).nextUntil(nextHeader).wrapAll(divStr);
        	$(this).nextUntil(nextHeader).last().append(linkStr);
        	$(this).next().children(":last").click(function(){
        		$(this).parent().hide();
        	})
        }
    });
})					