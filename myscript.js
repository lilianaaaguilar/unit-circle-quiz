$(document).ready(function() {
	$(".submit").click(function(){
	$(this).siblings().filter(".correct").val("Correct!")
	$(this).siblings().filter(".incorrect").val("Try again!")
	});
});
