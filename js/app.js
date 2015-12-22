/*
	Commente régulèrement ton code.
*/
$(document).ready(function(){
	compteur();
	$('form').on("submit", function(event){
		event.preventDefault();
		var utilisateur = $('input[name=recherche]').val();
		if (utilisateur !== '') {
			$('input[name=recherche]').val('');

			// La ligne est trop longue et ce n'est pas lisible
			// Décompose, tu gagneras du temps si tu dois modifier un élément plus tard
			var newElmt = '<div class="list">'
			+ '<input type="checkbox" class="selected">'
			+ '<button class="croix">x</button>' + utilisateur + '</div>';

			$('#toDoList').prepend(newElmt);
		}	
		
		compteur();

	});

	$('#toDoList').on('click', '.selected', function(){
		$(this).parent('.list').toggleClass('done');
		compteur();
	});

	// bien les commentaires :)
	$('#all').click(function(){ // Tout montrer
		$('.list').show();
	});
	
	$('#active').click(function(){ // Cacher ce qui est barré
		$('.list').show();
		$('.done').hide();
		
	});

	$('#completed').click(function(){ // Montrer ce qui est barré
		$('.list').hide();
		$('.done').show();
	});

	$('#effacer').click(function(){
		$('.done').remove();
		$('.list').hide();
	});

	$('ul').on('click', '.croix', function(){
		$(this).parent().remove();
		compteur();
	});

	// Mets cette fonction dans la même portée (scope).
	// Ca t'évitera des erreurs plus tard quand ton code
	// sera plus complexe.
	function compteur () {
		// tu peux faire plus court : 

		var compte = $('.list:not(.done)').length;

		var debut = compte + " " + "Item";
		var fin = " left";

		if (compte>1) {
			debut = debut + "s";
		}
		$('#compte').text(debut + fin);
	}


});






