$(function(){
	
	/*
	 * Set slides container width to the card width
	 */
	$("div.slides_container").width($("div.memocard:first").outerWidth()).css("visibility", "visible");
	
	/*
	 * Keyboard navigation
	 */
	$(document).keydown(function (e) {
		  var keyCode = e.keyCode || e.which,
		      arrow = {left: 37, up: 38, right: 39, down: 40 };

		  switch (keyCode) {
		    case arrow.up:
				flipNote($("div.memocard:visible:last"), "bt");
		    break;
		    case arrow.down:
		    	flipNote($("div.memocard:visible:last"), "tb");
		    break;
		    case arrow.left:
		    	$("a.prev").click();
		    break;
		    case arrow.right:
		    	$("a.next").click();
		    break;
		  }
	});
	
	/*
	 * Mouse flip
	 */
	$("div.memocard").each(function(){
		$(this).click(function(){
			flipNote($(this), "tb");
		});
	});
	
	/*
	 * Slide navigation
	 */
	$("div#slides").slides({
		preload: true,
		generatePagination: false,
		slideEasing: "easeOutCubic",
		generateNextPrev: true,
		slideSpeed: 300,
		fadeSpeed: 100,
		crossfade: true,
		effect: 'slide, fade',
		slidesLoaded: function() {
			$('div.memohint').animate({
				bottom:0
			},100);
		},
		animationStart: function(current){
			$('div.memohint').animate({
				bottom:-35
			},100);
		},
		animationComplete: function(current){
			$('div.memohint').animate({
				bottom:0
			},100);
		}
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