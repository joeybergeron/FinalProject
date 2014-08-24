$(window).load(function(){
	$('.back').click(function(){
		$(this).toggleClass('active');
	});
	$('button').click(function(){
		$(this).toggleClass('visible')
	})
});