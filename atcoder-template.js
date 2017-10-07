$(function(){
	console.log("START AtCoder-temp.js");
	
	//記事を書く際にヘッダーにつけるID
	var h = ["#A-ques","#B-ques","#C-ques","#D-ques",
					"#A-ans","#B-ans","#C-ans","#D-ans",
					"#A-re","#B-re","#C-re","#D-re"];
	//ヘッダーの下に追加されるDivのID 記事を書くときに考慮しなくていい ただ、同じIDを使わないようにすること！
	var div = ["#A-ques-div","#B-ques-div","#C-ques-div","#D-ques-div",
					"#A-ans-div","#B-ans-div","#C-ans-div","#D-ans-div",
					"#A-re-div","#B-re-div","#C-re-div","#D-re-div"];

	//閉じるリンク
    var linkText = "ここをクリックすると閉じます";
    //次の見出しを調べるためのセレクタ $("#A-ques").nextUntil(nextHeader);
    var nextHeader = "h3,h2,h1";
    //閉じるボタンのクラス CSS用に必要かも
    var closeLinkClass = "close-link";
/*
    for(var i=0;i<h.length;i++){
		console.log('$(h['+i+']).get('+i+').onclick = function(){var d = document.getElementById(div['+i+']);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};');
    }
    *//*
    for(var i=0;i<h.length;i++){
    	console.log("$(h["+i+"]).nextUntil(nextHeader).wrapAll(\"<div id='\"+div["+i+"]+\"'>\");");
    }*//*
    for(var i=0;i<h.length;i++){
    	console.log('$(h['+i+']).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick=\'document.getElementById(\""+div['+i+']+"\").style.display=\"none\";\'><a href=\'"+div['+i+']+"\'>"+linkText+"</a></p>");');
    }*/

	if($(h[0]).get(0))$(h[0]).get(0).onclick = function(){var d = document.getElementById(div[0]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[1]).get(0))$(h[1]).get(0).onclick = function(){var d = document.getElementById(div[1]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[2]).get(0))$(h[2]).get(0).onclick = function(){var d = document.getElementById(div[2]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[3]).get(0))$(h[3]).get(0).onclick = function(){var d = document.getElementById(div[3]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[4]).get(0))$(h[4]).get(0).onclick = function(){var d = document.getElementById(div[4]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[5]).get(0))$(h[5]).get(0).onclick = function(){var d = document.getElementById(div[5]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[6]).get(0))$(h[6]).get(0).onclick = function(){var d = document.getElementById(div[6]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[7]).get(0))$(h[7]).get(0).onclick = function(){var d = document.getElementById(div[7]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[8]).get(0))$(h[8]).get(0).onclick = function(){var d = document.getElementById(div[8]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[9]).get(0))$(h[9]).get(0).onclick = function(){var d = document.getElementById(div[9]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[10]).get(0))$(h[10]).get(0).onclick = function(){var d = document.getElementById(div[10]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	if($(h[11]).get(0))$(h[11]).get(0).onclick = function(){var d = document.getElementById(div[11]);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};
	
	var pre = "<div id='";
	var post = "' style='display:none'>";

	$(h[0]).nextUntil(nextHeader).wrapAll(pre+div[0]+post);
	$(h[1]).nextUntil(nextHeader).wrapAll(pre+div[1]+post);
	$(h[2]).nextUntil(nextHeader).wrapAll(pre+div[2]+post);
	$(h[3]).nextUntil(nextHeader).wrapAll(pre+div[3]+post);
	$(h[4]).nextUntil(nextHeader).wrapAll(pre+div[4]+post);
	$(h[5]).nextUntil(nextHeader).wrapAll(pre+div[5]+post);
	$(h[6]).nextUntil(nextHeader).wrapAll(pre+div[6]+post);
	$(h[7]).nextUntil(nextHeader).wrapAll(pre+div[7]+post);
	$(h[8]).nextUntil(nextHeader).wrapAll(pre+div[8]+post);
	$(h[9]).nextUntil(nextHeader).wrapAll(pre+div[9]+post);
	$(h[10]).nextUntil(nextHeader).wrapAll(pre+div[10]+post);
	$(h[11]).nextUntil(nextHeader).wrapAll(pre+div[11]+post);

	var str1="<p class='closeLinkClass' onclick='document.getElementById(\"";
	var str2="\").style.display=\"none\";'><a href='";
    var str3="'>";
    var str4="</a></p>";

	$(h[0]).nextUntil(nextHeader).last().append(str1+div[0]+str2+div[0]+str3+linkText+str4);
	$(h[1]).nextUntil(nextHeader).last().append(str1+div[1]+str2+div[1]+str3+linkText+str4);
	$(h[2]).nextUntil(nextHeader).last().append(str1+div[2]+str2+div[2]+str3+linkText+str4);
	$(h[3]).nextUntil(nextHeader).last().append(str1+div[3]+str2+div[3]+str3+linkText+str4);
	$(h[4]).nextUntil(nextHeader).last().append(str1+div[4]+str2+div[4]+str3+linkText+str4);
	$(h[5]).nextUntil(nextHeader).last().append(str1+div[5]+str2+div[5]+str3+linkText+str4);
	$(h[6]).nextUntil(nextHeader).last().append(str1+div[6]+str2+div[6]+str3+linkText+str4);
	$(h[7]).nextUntil(nextHeader).last().append(str1+div[7]+str2+div[7]+str3+linkText+str4);
	$(h[8]).nextUntil(nextHeader).last().append(str1+div[8]+str2+div[8]+str3+linkText+str4);
	$(h[9]).nextUntil(nextHeader).last().append(str1+div[9]+str2+div[9]+str3+linkText+str4);
	$(h[10]).nextUntil(nextHeader).last().append(str1+div[10]+str2+div[10]+str3+linkText+str4);
	$(h[11]).nextUntil(nextHeader).last().append(str1+div[11]+str2+div[11]+str3+linkText+str4);
	

	console.log("END AtCoder-temp.js");
})					