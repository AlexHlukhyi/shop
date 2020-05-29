(function() {
	$(document).ready(function() {
		var activeModal;
		var overlay = $('#overlay');
		// $('#search-button').click(function () {
		// 	$('.navigation').css({'display':'none'});
		// 	$('#search').css({'display':'flex'});
		// });
		// $('#close-search-button').click(function () {
		// 	$('.navigation').css({'display':'flex'});
		// 	$('#search').css({'display':'none'});
		// });
		$('#menu-button').click(function () {
			overlay.addClass('active');
			activeModal = $('#menu');
			activeModal.addClass('active');
		});
		$('#filters-button').click(function () {
			overlay.addClass('active');
			activeModal = $('#filters');
			activeModal.addClass('active');
		});
		overlay.click(function () {
			overlay.removeClass('active');
			activeModal.removeClass('active');
		});
	});
})();