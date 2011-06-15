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