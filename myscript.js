$(document).ready(function() {
	$(".check").click(function(){
	alert($(this).siblings("input:checked").val());
  });
});
