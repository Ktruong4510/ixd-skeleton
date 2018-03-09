$(document).ready(function() {
	$('#cardioButton').click(cardioClicked);
})

function coreClicked() {
	ga("send", "event", "cardio", "clicked");
}