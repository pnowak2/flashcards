$(function(){
	
	/*
	 * Set slides container width to the card width
	 */
	$(".slides_container").width($(".memocard:first").outerWidth()).css("visibility", "visible");
	
	/*
	 * Keyboard navigation
	 */
	$(document).keydown(function (e) {
		  var keyCode = e.keyCode || e.which,
		      arrow = {left: 37, up: 38, right: 39, down: 40 };

		  switch (keyCode) {
		    case arrow.up:
				flipNote($(".memocard:visible:last"), "bt");
		    break;
		    case arrow.down:
		    	flipNote($(".memocard:visible:last"), "tb");
		    break;
		    case arrow.left:
		    	$(".prev").click();
		    break;
		    case arrow.right:
		    	$(".next").click();
		    break;
		  }
	});
	
	/*
	 * Mouse flip
	 */
	$(".memocard").each(function(){
		$(this).click(function(){
			flipNote($(this), "tb");
		});
	});
	
	/*
	 * Slide navigation
	 */
	$("#slides").slides({
		generatePagination: false,
		generateNextPrev: true,
		slideSpeed: 250,
		effect: 'slide, fade'
	});
});

/**
 * Flips a note
 */
function flipNote(note, direction){
	note.flip({
		direction: direction,
		speed: 100,
		color: note.css("background-color"),
		onBefore: function(clone, element){
			element.find("div.original").toggle();
			element.find("div.translated").toggle();
		}
	});	
}