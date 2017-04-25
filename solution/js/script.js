$(function(){
	$('#slides').cycle({
		timeout: 2000,
		pauseOnHover: true,
		next: '.next',
		prev: '.prev'
	})
	.on('cycle-after', function(){
		console.log('Slide changed');
	});
});