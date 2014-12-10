$(document).ready(function(){

	//Get hash anchor to display
	var hash = window.location.hash.substring(1);
	console.log(hash);


	//Determine display to show based on user click
	$('#driver-link').click(function(){ getSubview('drivers') });
	$('#motor-link').click(function(){ getSubview('motorists') });
	$('#bike-link').click(function(){ getSubview('bicyclists') });
	$('#ped-link').click(function(){ getSubview('pedestrians') });
	$('#inter-link').click(function(){ getSubview('intersections') });
	$('#driver-link').click();	//Show the driver section first

	function getSubview(tag){
		$("#research > div").css('display','none');
		$('#'+tag).css('display', 'block');
	}

});