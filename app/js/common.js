(function() {
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
			$('#overlay').css({'visibility':'visible', 'opacity':'1'});
			$('#menu').css({'display':'flex'});
		});
		$('#overlay').click(function () {
			$('#overlay').css({'visibility':'hidden', 'opacity':'0'});
			$('#menu').css({'display':'none'});
		});
	});
})();