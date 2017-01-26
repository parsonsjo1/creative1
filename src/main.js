$('#nacho-libre-title').click(function () {
	$('#image-header').show();
	$('.star-wars').hide();
	$('.nacho-libre').show();
});

$('#star-wars-title').click(function () {
	$('#image-header').show();
	$('.star-wars').show();
	$('.nacho-libre').hide();
});

//Play nacho1 sound
$('#nacho1').click(function () {
    new Audio("./audio/nacho1.mp3").play();
});

//Play hector sound
$('#nacho2').click(function () {
    new Audio("./audio/hector.mp3").play();
});

//Play nacho3 sound
$('#nacho3').click(function () {
    new Audio("./audio/corn.mp3").play();
});

//Play han sound
$('#han').click(function () {
    new Audio("./audio/han.mp3").play();
});

//Play vader sound
$('#vader').click(function () {
    new Audio("./audio/vader.wav").play();
});

//Play luke sound
$('#chewbacca').click(function () {
    new Audio("./audio/chewbacca.mp3").play();
});