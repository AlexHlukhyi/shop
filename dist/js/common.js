(function(params) {
	$(document).ready(function() {
		$('#search-button').click(function () {
			$('.navigation').css({'display':'none'});
			$('#search').css({'display':'flex'});
		});
		$('#close-search-button').click(function () {
			$('.navigation').css({'display':'flex'});
			$('#search').css({'display':'none'});
		});
		$('#menu-button').click(function () {
			$('#overlay').css({'display':'block'});
			$('#menu').css({'display':'flex'});
		});
		$('#overlay').click(function () {
			$('#overlay').css({'display':'none'});
			$('#menu').css({'display':'none'});
		});
	});
})();