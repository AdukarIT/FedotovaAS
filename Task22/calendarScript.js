var options = {
  month: 'long',
};

let clicked = clickGetMonth();

$('#date_picker').click(function() {
	clicked();
});

function clickGetMonth() {
	let open = false;

	return function() {
		if(open == false) {
			open = true;

			$('#calendar').css('display', 'grid');
			$('#date_picker').removeClass().addClass('date_picker_checked');
			$('#calendar_month_year').text(`${new Date().toLocaleString("ru", options)} ${new Date().getFullYear()}`);
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