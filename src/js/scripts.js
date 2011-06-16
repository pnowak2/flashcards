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
	$(".memocard").each(function(){
		$(this).click(function(){
			flipNote($(this), "tb");
		});
	});
	
	/*
	 * Slide navigation
	 */
	$("#slides").slides({
		preload: true,
		generatePagination: false,
		generateNextPrev: true,
		slideSpeed: 250,
		fadeSpeed: 100,
		crossfade: true,
		effect: 'slide, fade',
		slidesLoaded: function() {
			$('div.memohint').animate({
				bottom:0
			},200);
		},
		animationStart: function(current){
			$('div.memohint').animate({
				bottom:-35
			},100);
		},
		animationComplete: function(current){
			$('div.memohint').animate({
				bottom:0
			},200);
			$("ul.pagination li").removeClass("selectedCard");
			$("ul.pagination li:nth-child(" + current + ")").addClass("selectedCard");
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