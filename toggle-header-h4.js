$(function(){
	console.log("START AtCoder-temp.js");
	

	var headerClass=".toggle-header";

	//閉じるリンク
    var linkText = "ここをクリックすると閉じます";
    //次の見出しを調べるためのセレクタ $("#A-ques").nextUntil(nextHeader);
    var nextHeader = "h4,h3,h2,h1";
    //閉じるボタンのクラス CSS用に必要かも
    var closeLinkClass = "close-link";


	var str1="<p class='closeLinkClass'><a>"+linkText+"</a></p>";
    var divStr = "<div style='display:none'>";
    $(headerClass).each(function(){
    	$(this).click(function(){
    		if($(this).next().css("display")=="none"){
            	$(this).next().show();
          	}else{
            	$(this).next().hide();
            }
    	});

    	$(this).nextUntil(nextHeader).wrapAll(divStr);
    	$(this).nextUntil(nextHeader).last().append(str1);
    	$(this).next().last().click(function(){
    		$(this).hide();
    	})
    });

	console.log("END AtCoder-temp.js");
})					