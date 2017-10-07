$(function(){
	console.log("START AtCoder-temp.js");
	var h = ["#A-ques","#B-ques","#C-ques","#D-ques",
					"#A-ans","#B-ans","#C-ans","#D-ans",
					"#A-re","#B-re","#C-re","#D-re"];
	var div = ["#A-ques-div","#B-ques-div","#C-ques-div","#D-ques-div",
					"#A-ans-div","#B-ans-div","#C-ans-div","#D-ans-div",
					"#A-re-div","#B-re-div","#C-re-div","#D-re-div"];

    var linkText = "ここをクリックすると閉じます";

    var nextHeader = "h3,h2,h1";

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
	

	$(h[0]).nextUntil(nextHeader).wrapAll("<div id='"+div[0]+"' style='display:none'>");
	$(h[1]).nextUntil(nextHeader).wrapAll("<div id='"+div[1]+"' style='display:none'>");
	$(h[2]).nextUntil(nextHeader).wrapAll("<div id='"+div[2]+"' style='display:none'>");
	$(h[3]).nextUntil(nextHeader).wrapAll("<div id='"+div[3]+"' style='display:none'>");
	$(h[4]).nextUntil(nextHeader).wrapAll("<div id='"+div[4]+"' style='display:none'>");
	$(h[5]).nextUntil(nextHeader).wrapAll("<div id='"+div[5]+"' style='display:none'>");
	$(h[6]).nextUntil(nextHeader).wrapAll("<div id='"+div[6]+"' style='display:none'>");
	$(h[7]).nextUntil(nextHeader).wrapAll("<div id='"+div[7]+"' style='display:none'>");
	$(h[8]).nextUntil(nextHeader).wrapAll("<div id='"+div[8]+"' style='display:none'>");
	$(h[9]).nextUntil(nextHeader).wrapAll("<div id='"+div[9]+"' style='display:none'>");
	$(h[10]).nextUntil(nextHeader).wrapAll("<div id='"+div[10]+"' style='display:none'>");
	$(h[11]).nextUntil(nextHeader).wrapAll("<div id='"+div[11]+"' style='display:none'>");


	$(h[0]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[0]+"\").style.display=\"none\";'><a href='"+div[0]+"'>"+linkText+"</a></p>");
	$(h[1]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[1]+"\").style.display=\"none\";'><a href='"+div[1]+"'>"+linkText+"</a></p>");
	$(h[2]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[2]+"\").style.display=\"none\";'><a href='"+div[2]+"'>"+linkText+"</a></p>");
	$(h[3]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[3]+"\").style.display=\"none\";'><a href='"+div[3]+"'>"+linkText+"</a></p>");
	$(h[4]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[4]+"\").style.display=\"none\";'><a href='"+div[4]+"'>"+linkText+"</a></p>");
	$(h[5]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[5]+"\").style.display=\"none\";'><a href='"+div[5]+"'>"+linkText+"</a></p>");
	$(h[6]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[6]+"\").style.display=\"none\";'><a href='"+div[6]+"'>"+linkText+"</a></p>");
	$(h[7]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[7]+"\").style.display=\"none\";'><a href='"+div[7]+"'>"+linkText+"</a></p>");
	$(h[8]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[8]+"\").style.display=\"none\";'><a href='"+div[8]+"'>"+linkText+"</a></p>");
	$(h[9]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[9]+"\").style.display=\"none\";'><a href='"+div[9]+"'>"+linkText+"</a></p>");
	$(h[10]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[10]+"\").style.display=\"none\";'><a href='"+div[10]+"'>"+linkText+"</a></p>");
	$(h[11]).nextUntil(nextHeader).last().append("<p class='closeLinkClass' onclick='document.getElementById(\""+div[11]+"\").style.display=\"none\";'><a href='"+div[11]+"'>"+linkText+"</a></p>");
	

	console.log("END AtCoder-temp.js");
})					