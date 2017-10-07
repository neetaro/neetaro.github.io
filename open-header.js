$(function(){
	var h = ["#A-問題","#B-問題","#C-問題","#D-問題",
					"#A-回答","#B-回答","#C-回答","#D-回答",
					"#A-改善","#B-改善","#C-改善","#D-改善"];

	var div = ["#A-q-div","#B-q-div","#C-q-div","#D-q-div",
					"#A-a-div","#B-a-div","#C-a-div","#D-a-div",
					"#A-r-div","#B-r-div","#C-r-div","#D-r-div"];
	var close = ["#A-q-close","#B-q-close","#C-q-close","#D-q-close",
					"#A-a-close","#B-a-close","#C-a-close","#D-a-close",
					"#A-r-close","#B-r-close","#C-r-close","#D-r-close"];

    //log
    /*
    for(var i=0;i<h.length;i++){ 	
		console.log('$(h['+i+']).click(function(){var d = $(div['+i+']);if(d.css("display")=="none"){d.show();}else{d.hide();}});');
	}
	*/

	$(h[0]).click(function(){var d = $(div[0]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[1]).click(function(){var d = $(div[1]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[2]).click(function(){var d = $(div[2]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[3]).click(function(){var d = $(div[3]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[4]).click(function(){var d = $(div[4]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[5]).click(function(){var d = $(div[5]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[6]).click(function(){var d = $(div[6]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[7]).click(function(){var d = $(div[7]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[8]).click(function(){var d = $(div[8]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[9]).click(function(){var d = $(div[9]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[10]).click(function(){var d = $(div[10]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	$(h[11]).click(function(){var d = $(div[11]);if(d.css("display")=="none"){d.show();}else{d.hide();}});
	/*
	for(var i=0;i<close.length;i++){
	  console.log('$(close['+i+']).click(function(){$(div['+i+']).hide();})');
    }
    */
    $(close[0]).click(function(){$(div[0]).hide();});
    $(close[1]).click(function(){$(div[1]).hide();});
    $(close[2]).click(function(){$(div[2]).hide();});
    $(close[3]).click(function(){$(div[3]).hide();});
    $(close[4]).click(function(){$(div[4]).hide();});
    $(close[5]).click(function(){$(div[5]).hide();});
    $(close[6]).click(function(){$(div[6]).hide();});
    $(close[7]).click(function(){$(div[7]).hide();});
    $(close[8]).click(function(){$(div[8]).hide();});
    $(close[9]).click(function(){$(div[9]).hide();});
    $(close[10]).click(function(){$(div[10]).hide();});
    $(close[11]).click(function(){$(div[11]).hide();});
});