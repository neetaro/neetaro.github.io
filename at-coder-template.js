$(function(){
	console.log("START AtCoder-temp.js");
	var h = ["#A-ques","#B-ques","#C-ques","#D-ques",
					"#A-ans","#B-ans","#C-ans","#D-ans",
					"#A-re","#B-re","#C-re","#D-re"];
	var div = ["#A-ques-div","#B-ques-div","#C-ques-div","#D-ques-div",
					"#A-ans-div","#B-ans-div","#C-ans-div","#D-ans-div",
					"#A-re-div","#B-re-div","#C-re-div","#D-re-div"];
	var end= ["#A-ques-end","#B-ques-end","#C-ques-end","#D-ques-end",
					"#A-snd-end","#B-snd-end","#C-snd-end","#D-snd-end",
					"#A-re-end","#B-re-end","#C-re-end","#D-re-end"];
	var close = ["#A-ques-close","#B-ques-close","#C-ques-close","#D-ques-close",
					"#A-ans-close","#B-ans-close","#C-ans-close","#D-ans-close",
					"#A-re-close","#B-re-close","#C-re-close","#D-re-close"];

    var linkText = "ここをクリックすると閉じます";

/*
    for(var i=0;i<h.length;i++){
		console.log('$(h['+i+']).get('+i+').onclick = function(){var d = document.getElementById(div['+i+']);if(d.style.display == "none"){d.style.display = "block";}else{d.style.display = "none";}};');
    }
    *//*
    for(var i=0;i<h.length;i++){
    	console.log("$(h["+i+"]).nextUntil(end["+i+"]).wrapAll(\"<div id='\"+div["+i+"]+\"'>\");");
    }*//*
    for(var i=0;i<h.length;i++){
    	console.log('$(h['+i+']).nextUntil(end['+i+']).last().append("<p id=\'"+close['+i+']+"\' onclick=\'document.getElementById(\""+div['+i+']+"\").style.display=\"none\";\'><a href=\'"+div['+i+']+"\'>"+linkText+"</a></p>");');
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
	

	$(h[0]).nextUntil(end[0]).wrapAll("<div id='"+div[0]+"'>");
	$(h[1]).nextUntil(end[1]).wrapAll("<div id='"+div[1]+"'>");
	$(h[2]).nextUntil(end[2]).wrapAll("<div id='"+div[2]+"'>");
	$(h[3]).nextUntil(end[3]).wrapAll("<div id='"+div[3]+"'>");
	$(h[4]).nextUntil(end[4]).wrapAll("<div id='"+div[4]+"'>");
	$(h[5]).nextUntil(end[5]).wrapAll("<div id='"+div[5]+"'>");
	$(h[6]).nextUntil(end[6]).wrapAll("<div id='"+div[6]+"'>");
	$(h[7]).nextUntil(end[7]).wrapAll("<div id='"+div[7]+"'>");
	$(h[8]).nextUntil(end[8]).wrapAll("<div id='"+div[8]+"'>");
	$(h[9]).nextUntil(end[9]).wrapAll("<div id='"+div[9]+"'>");
	$(h[10]).nextUntil(end[10]).wrapAll("<div id='"+div[10]+"'>");
	$(h[11]).nextUntil(end[11]).wrapAll("<div id='"+div[11]+"'>");


	$(h[0]).nextUntil(end[0]).last().append("<p id='"+close[0]+"' onclick='document.getElementById(\""+div[0]+"\").style.display=\"none\";'><a href='"+div[0]+"'>"+linkText+"</a></p>");
	$(h[1]).nextUntil(end[1]).last().append("<p id='"+close[1]+"' onclick='document.getElementById(\""+div[1]+"\").style.display=\"none\";'><a href='"+div[1]+"'>"+linkText+"</a></p>");
	$(h[2]).nextUntil(end[2]).last().append("<p id='"+close[2]+"' onclick='document.getElementById(\""+div[2]+"\").style.display=\"none\";'><a href='"+div[2]+"'>"+linkText+"</a></p>");
	$(h[3]).nextUntil(end[3]).last().append("<p id='"+close[3]+"' onclick='document.getElementById(\""+div[3]+"\").style.display=\"none\";'><a href='"+div[3]+"'>"+linkText+"</a></p>");
	$(h[4]).nextUntil(end[4]).last().append("<p id='"+close[4]+"' onclick='document.getElementById(\""+div[4]+"\").style.display=\"none\";'><a href='"+div[4]+"'>"+linkText+"</a></p>");
	$(h[5]).nextUntil(end[5]).last().append("<p id='"+close[5]+"' onclick='document.getElementById(\""+div[5]+"\").style.display=\"none\";'><a href='"+div[5]+"'>"+linkText+"</a></p>");
	$(h[6]).nextUntil(end[6]).last().append("<p id='"+close[6]+"' onclick='document.getElementById(\""+div[6]+"\").style.display=\"none\";'><a href='"+div[6]+"'>"+linkText+"</a></p>");
	$(h[7]).nextUntil(end[7]).last().append("<p id='"+close[7]+"' onclick='document.getElementById(\""+div[7]+"\").style.display=\"none\";'><a href='"+div[7]+"'>"+linkText+"</a></p>");
	$(h[8]).nextUntil(end[8]).last().append("<p id='"+close[8]+"' onclick='document.getElementById(\""+div[8]+"\").style.display=\"none\";'><a href='"+div[8]+"'>"+linkText+"</a></p>");
	$(h[9]).nextUntil(end[9]).last().append("<p id='"+close[9]+"' onclick='document.getElementById(\""+div[9]+"\").style.display=\"none\";'><a href='"+div[9]+"'>"+linkText+"</a></p>");
	$(h[10]).nextUntil(end[10]).last().append("<p id='"+close[10]+"' onclick='document.getElementById(\""+div[10]+"\").style.display=\"none\";'><a href='"+div[10]+"'>"+linkText+"</a></p>");
	$(h[11]).nextUntil(end[11]).last().append("<p id='"+close[11]+"' onclick='document.getElementById(\""+div[11]+"\").style.display=\"none\";'><a href='"+div[11]+"'>"+linkText+"</a></p>");
	

	console.log("END AtCoder-temp.js");
})					