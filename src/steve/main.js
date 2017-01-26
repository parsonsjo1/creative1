$('#select-movie').change(function() {
	$('#image-header').show()
	var movie = $('#select-movie option:selected').text()
	if (movie == "Nacho Libre") {
		$('#star-wars').hide()
		$('#nacho-libre').show()
	}
	if (movie == "Star Wars") {
		$('#star-wars').show()
		$('#nacho-libre').hide()
	}	

});