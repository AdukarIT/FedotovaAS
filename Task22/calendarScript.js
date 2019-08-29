let clicked = clickGetDate();

$('#date_picker').click(function() {
	clicked();
});

function clickGetDate() {
	let open = false;

	return function() {
		if(open == false) {
			open = true;

			$('#calendar').css('display', 'grid');
			$('#date_picker').removeClass().addClass('date_picker_checked');
			$('calendar_month_year').text(`<span>${new Date().getMonth()}</span>`);
		} else if(open == true) {
			open = false;

			$('#calendar').css('display', 'none');
			$('#date_picker').removeClass().addClass('date_picker_unchecked');
		}
	}
}

class Data {
	
}

//