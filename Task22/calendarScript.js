let count = countClick();
$('#date_picker').click(function() {
	count();
});

function countClick() {
	let count = 0;
	return function() {
		count++;
		if(count > 2) count = 1;
		
		if(count == 1) $('#calendar').css('display', 'grid');
		else if(count == 2) $('#calendar').css('display', 'none');
		
	}
}