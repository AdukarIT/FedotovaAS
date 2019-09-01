$(function() {
	
	var options = {
	month: 'long',
	year: 'numeric'
	};

	let currentDate = new Date();
	let year = currentDate.getFullYear();
	let month = currentDate.getMonth();

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
				$('#calendar_month_year').text(`${currentDate.toLocaleString("ru", options)}`);

				month = currentDate.getMonth();

				let date = new Date(year, month, 1);
				let firstDay = date.getDate();
				let lastDay = new Date(year, month + 1, 0).getDate();
				let table = new tableDate(date, firstDay, lastDay);
				table.getTable();
			} else if(open == true) {
				open = false;
				
				$('#calendar').css('display', 'none');
				$('#date_picker').removeClass().addClass('date_picker_unchecked');
			}
		}
	}

	class tableDate {
		constructor(date, firstDay, lastDay) {
			this.firstDay = firstDay;
			this.lastDay = lastDay;
			this.date = date;
		}
		getTable() {
			
			let dayWeek = this.date.getDay();

			$('#calendar_table').empty();

			for(let i = 1; i <= this.lastDay; i ++) {
				$('#calendar_table').append(`<td>${i}</td>`);
			}

		}
	}

	$('#calendar_forward').click(function() {
		$('#calendar_month_year').text(`${new Date(year, month += 1, 1).toLocaleString("ru", options)}`);
		
		let date = new Date(year, month, 1);
		let firstDay = date.getDate();
		let lastDay = new Date(year, month + 1, 0).getDate();
		let table = new tableDate(date, firstDay, lastDay);
		table.getTable();
	});

	$('#calendar_back').click(function() {
		$('#calendar_month_year').text(`${new Date(year, month -= 1, 1).toLocaleString("ru", options)}`);
		
		let date = new Date(year, month, 1);
		let firstDay = date.getDate();
		let lastDay = new Date(year, month + 1, 0).getDate();
		let table = new tableDate(date, firstDay, lastDay);
		table.getTable();
	});
});
		
	