'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	// your code here
	$(".btn").click(function(){
		ga("send", "event", "strength excercise", "click");
	}),
	$(".btn2").click(function(){
		ga("send", "event", "stretch excercise", "click");
	}),
	$(".btn3").click(function(){
		ga("send", "event", "core excercise", "click");
	}),
	$(".btn4").click(function(){
		ga("send", "event", "cardio excercise", "click");
	});
}