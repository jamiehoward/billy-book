

function billyize(){
	$( "._s0,._54ru" ).livequery(function(){
		$( this ).attr({
			src: "http://www.acworthchurch.com/wp-content/uploads/2014/02/billy-face.gif",
			alt: "JAmieeee nooooooo"
		});
	});

	$(".fbxWelcomeBoxName").html("Jamie Naooooo!");
	$(".fwb:first-child,.UFICommentActorName,.profileLink,.fbRemindersTitle:first-child").html("Billy Adams");
}

billyize();
window.setInterval(function(){
  billyize();
}, 5000);