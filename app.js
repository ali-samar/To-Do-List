
$(document).ready(function(){
	compteur();
	$('form').on("submit", function(event){
		event.preventDefault();
		var utilisateur = $('input[name=recherche]').val();
		if (utilisateur !== '') {
			$('input[name=recherche]').val('');
			$('#toDoList').prepend('<div class="list"><input type="checkbox" class="selected"><button class="croix">x</button>' + utilisateur + '</div>');
		}	
		
		compteur();

	});

	$('#toDoList').on('click', '.selected', function(){
		$(this).parent('.list').toggleClass('done');
		compteur();
	});

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


});




function compteur () {

		var compte = $('.list:not(.done)').length;
		if (compte>1) {
			$('#compte').text(compte + " " + "Items left");
		} 
		else {
			$('#compte').text(compte + " " + "Item left");
		}
}

