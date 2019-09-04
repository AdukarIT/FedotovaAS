$(function() {
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
				
				var options = {
					month: 'long',
					year: 'numeric'
				};

				$('#calendar').css('display', 'grid');
				$('#date_picker').removeClass().addClass('date_picker_checked');
				$('#calendar_month_year').text(`${currentDate.toLocaleString("ru", options)}`);

				month = currentDate.getMonth();

				let date = new Date(year, month, 1);
				let lastDay = new Date(year, month + 1, 0).getDate();
				let table = new tableDate(date, lastDay);
				table.getTable();

			} else if(open == true) {
				open = false;
				
				$('#calendar').css('display', 'none');
				$('#date_picker').removeClass().addClass('date_picker_unchecked');
			}
		}
	}

	class tableDate {
		constructor(date, lastDay) {
			this.date = date;
			this.lastDay = lastDay;
		}

		getTable() {
			$('#calendar_table').empty();			
			
			let dayWeek = this.date.getDay();
			dayWeek == 0? dayWeek = 7 : false;
			for(let j = 1; j < dayWeek; j++) {
				$('#calendar_table').append(`<p></p>`);
			}

			for(let i = 1; i <= this.lastDay; i ++) {	
				$('#calendar_table').append(`<p data-day='${i}' data-month='${this.date.getMonth()}' data-year='${this.date.getFullYear()}'>${i}</p>`);
			}
		}
	}

	$('#calendar_forward').click(function() {
		var options = {
			month: 'long',
			year: 'numeric'
		};

		$('#calendar_month_year').text(`${new Date(year, month += 1, 1).toLocaleString("ru", options)}`);
		
		let date = new Date(year, month, 1);
		let lastDay = new Date(year, month + 1, 0).getDate();
		let table = new tableDate(date, lastDay);
		table.getTable();
	});

	$('#calendar_back').click(function() {
		var options = {
			month: 'long',
			year: 'numeric'
		};

		$('#calendar_month_year').text(`${new Date(year, month -= 1, 1).toLocaleString("ru", options)}`);
		
		let date = new Date(year, month, 1);
		let lastDay = new Date(year, month + 1, 0).getDate();
		let table = new tableDate(date, lastDay);
		table.getTable();
	});

	$('#calendar_table').click(function(e) {
		let options = {
			year: 'numeric',
			day: 'numeric',
			month: 'numeric'
		}

		let year = e.target.dataset.year;
		let month = e.target.dataset.month;
		let day = e.target.dataset.day;
		let date = new Date(year, month, +day).toLocaleString("ru", options);

		$('#date')[0].value = date;

		$('#calendar').css('display', 'none');
		$('#date_picker').removeClass().addClass('date_picker_unchecked');
	});
});