$(document).ready(function() {
	$('#coreButton').click(coreClicked);
})

function coreClicked() {
	ga("send", "event", "core", "clicked");
}